import { mkdir, readdir, writeFile } from "node:fs/promises";
import { join, dirname, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const MEDIA_DIR = join(__dirname, "../media");
const OPTIMIZED_DIR = join(__dirname, "../public/optimized");
const OUTPUT_FILE = join(__dirname, "../src/lib/blurPlaceholders.json");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const AVIF_QUALITY = 50;
const MAX_WIDTH = 1920;
const PLACEHOLDER_WIDTH = 24;
const BLUR_SIGMA = 2;
const WEBP_QUALITY = 40;

async function optimizeImages() {
  const files = await readdir(MEDIA_DIR).catch(() => []);
  const imageFiles = files.filter((f) =>
    IMAGE_EXTENSIONS.has(extname(f).toLowerCase()),
  );

  if (imageFiles.length === 0) {
    console.log("Images » No source images found in media/");
    return [];
  }

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

const optimized = await optimizeImages();
if (optimized.length > 0) {
  await generateBlurPlaceholders(optimized);
}
