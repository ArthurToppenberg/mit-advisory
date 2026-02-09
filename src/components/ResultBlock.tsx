interface ResultBlockProps {
  intro: string;
  items: string[];
  outro: string;
}

export function ResultBlock({ intro, items, outro }: ResultBlockProps) {
  return (
    <section className="mt-16 rounded-lg border border-border bg-secondary/40 p-8">
      <h2 className="mb-4 text-xl font-semibold text-foreground">The result</h2>
      <p className="mb-4 text-muted-foreground">{intro}</p>
      <ul className="mb-6 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
      <p className="font-medium text-foreground">{outro}</p>
    </section>
  );
}
