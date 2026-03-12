import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join, dirname, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const MEDIA_DIR = join(__dirname, "../media");
const OPTIMIZED_DIR = join(__dirname, "../public/optimized");
const OUTPUT_FILE = join(__dirname, "../src/lib/blurPlaceholders.json");
const MANIFEST_PATH = join(OPTIMIZED_DIR, ".manifest.json");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const AVIF_QUALITY = 50;
const MAX_WIDTH = 1920;
const PLACEHOLDER_WIDTH = 24;
const BLUR_SIGMA = 2;
const WEBP_QUALITY = 40;

const OPTIMIZATION_PARAMS = {
  AVIF_QUALITY,
  MAX_WIDTH,
  PLACEHOLDER_WIDTH,
  BLUR_SIGMA,
  WEBP_QUALITY,
};

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

async function computeManifest(imageFiles) {
  const paramsHash = sha256(JSON.stringify(OPTIMIZATION_PARAMS));
  const fileHashes = {};

  for (const file of imageFiles.sort()) {
    const content = await readFile(join(MEDIA_DIR, file));
    fileHashes[file] = sha256(content);
  }

  return { version: 1, params: paramsHash, files: fileHashes };
}

async function loadExistingManifest() {
  const raw = await readFile(MANIFEST_PATH, "utf-8").catch(() => null);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function manifestsMatch(current, existing) {
  if (!existing) return false;
  if (existing.version !== current.version) return false;
  if (existing.params !== current.params) return false;

  const currentKeys = Object.keys(current.files).sort();
  const existingKeys = Object.keys(existing.files).sort();

  if (currentKeys.length !== existingKeys.length) return false;

  return currentKeys.every(
    (key, i) =>
      key === existingKeys[i] && current.files[key] === existing.files[key],
  );
}

async function optimizeImages(imageFiles) {
  await mkdir(OPTIMIZED_DIR, { recursive: true });

  const optimized = [];

  for (const file of imageFiles) {
    const name = basename(file, extname(file));
    const outputPath = join(OPTIMIZED_DIR, `${name}.avif`);

    await sharp(join(MEDIA_DIR, file))
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .toFormat("avif", { quality: AVIF_QUALITY })
      .toFile(outputPath);

    optimized.push(`${name}.avif`);
    console.log(`Images » Optimized ${file} → ${name}.avif`);
  }

  return optimized;
}

async function generateBlurPlaceholders(avifFiles) {
  const placeholders = {};

  for (const file of avifFiles) {
    const buffer = await sharp(join(OPTIMIZED_DIR, file))
      .resize(PLACEHOLDER_WIDTH)
      .blur(BLUR_SIGMA)
      .toFormat("webp", { quality: WEBP_QUALITY })
      .toBuffer();

    placeholders[`/optimized/${file}`] =
      `data:image/webp;base64,${buffer.toString("base64")}`;
  }

  await mkdir(dirname(OUTPUT_FILE), { recursive: true });
  await writeFile(OUTPUT_FILE, JSON.stringify(placeholders, null, 2) + "\n");

  console.log(
    `Blur » Generated placeholders for ${avifFiles.length} image(s)`,
  );
}

const files = await readdir(MEDIA_DIR).catch(() => []);
const imageFiles = files.filter((f) =>
  IMAGE_EXTENSIONS.has(extname(f).toLowerCase()),
);

if (imageFiles.length === 0) {
  console.log("Images » No source images found in media/");
  process.exit(0);
}

const currentManifest = await computeManifest(imageFiles);
const existingManifest = await loadExistingManifest();

if (manifestsMatch(currentManifest, existingManifest)) {
  console.log("Images » Cache hit — skipping optimization (manifest matches)");
  process.exit(0);
}

console.log("Images » Cache miss — optimizing images…");
const optimized = await optimizeImages(imageFiles);

if (optimized.length > 0) {
  await generateBlurPlaceholders(optimized);
}

await writeFile(
  MANIFEST_PATH,
  JSON.stringify(currentManifest, null, 2) + "\n",
);
console.log("Images » Manifest written to public/optimized/.manifest.json");
