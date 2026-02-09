import { cn } from "@/lib/utils";

interface ServiceSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ServiceSection({ title, children, className }: ServiceSectionProps) {
  return (
    <section className={cn("py-12 first:pt-0", className)}>
      <h2 className="mb-4 text-xl font-semibold text-foreground">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
    </section>
  );
}
