"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Startup & SaaS", href: "/startup-saas" },
  { label: "AI & Virtual Assistants", href: "/ai-assistants" },
  { label: "SAP Security", href: "/sap-security" },
  { label: "Industry Focus", href: "/industry-focus" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
          MIT Advisory
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                pathname === l.href ? "text-primary font-medium" : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  pathname === l.href ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="sm" className="w-fit">
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
