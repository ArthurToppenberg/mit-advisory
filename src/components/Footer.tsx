import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container-wide px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-foreground">MIT Advisory ApS</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Galionsvej 76<br />København K, Denmark
            </p>
            <a href="mailto:contact@mitadvisory.com" className="mt-2 inline-block text-sm text-primary hover:underline">
              contact@mitadvisory.com
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-foreground">Services</p>
            <Link href="/startup-saas" className="text-sm text-muted-foreground hover:text-primary">Startup & SaaS Advisory</Link>
            <Link href="/ai-assistants" className="text-sm text-muted-foreground hover:text-primary">AI & Virtual Assistants</Link>
            <Link href="/sap-security" className="text-sm text-muted-foreground hover:text-primary">SAP Security</Link>
            <Link href="/industry-focus" className="text-sm text-muted-foreground hover:text-primary">Industry Focus</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-foreground">Company</p>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MIT Advisory ApS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
