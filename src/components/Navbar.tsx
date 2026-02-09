import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Startup & SaaS", to: "/startup-saas" },
  { label: "AI & Virtual Assistants", to: "/ai-assistants" },
  { label: "SAP Security", to: "/sap-security" },
  { label: "Industry Focus", to: "/industry-focus" },
  { label: "About", to: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between px-6">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          MIT Advisory
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                location.pathname === l.to ? "text-primary font-medium" : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  location.pathname === l.to ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="sm" className="w-fit">
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
