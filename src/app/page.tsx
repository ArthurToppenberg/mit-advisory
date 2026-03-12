import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Bot, Shield, Factory } from "lucide-react";
import { AppImage } from "@/components/AppImage";

const specializations = [
  {
    icon: Rocket,
    title: "Startup & SaaS Advisory",
    description:
      "Product positioning, pricing, and subscription models designed to maximize long-term value and profitability.",
    href: "/startup-saas",
  },
  {
    icon: Bot,
    title: "AI & Virtual Assistants",
    description:
      "Applying AI to improve internal productivity, automate services, and significantly strengthen the customer value proposition.",
    href: "/ai-assistants",
  },
  {
    icon: Shield,
    title: "SAP Security & Control Systems",
    description:
      "Secure, scalable system design with a strong focus on governance, reliability, and enterprise readiness.",
    href: "/sap-security",
  },
  {
    icon: Factory,
    title: "Industry Focus",
    description:
      "Deep domain experience in AgTech, FoodTech, and Manufacturing, where data, automation, and operational efficiency matter most.",
    href: "/industry-focus",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden section-padding">
        <AppImage
          src="/optimized/marmor-kirken-back-white.avif"
          alt=""
          fill
          priority
          className="object-cover -z-10 brightness-[0.35]"
        />
        <div className="container-narrow text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            We help startups turn great ideas into scalable, profitable
            businesses
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            MIT Advisory partners with startups and growth companies to shape
            winning products, design strong business models, and build
            subscription strategies that scale.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <h2 className="mb-12 text-center text-2xl font-semibold text-foreground">
            What we specialize in
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specializations.map((s) => (
              <Link key={s.href} href={s.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="flex flex-col gap-3 p-6">
                    <s.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-lg text-muted-foreground">
            Our strength lies in translating complex technology into clear value
            propositions, sustainable SaaS models, and solutions that customers
            are willing to pay for — again and again.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link href="/about">Learn about our team</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
