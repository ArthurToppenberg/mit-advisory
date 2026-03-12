import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { AppImage } from "@/components/AppImage";

export const metadata: Metadata = {
  title: "About | MIT Advisory",
};

const advisors = [
  {
    name: "Jens Toppenberg",
    image: "/optimized/jensToppenberg.avif",
    title: "Advisor — Tech Entrepreneurship & SaaS",
    bio: "Jens is an experienced tech entrepreneur and founder with a strong track record in building and scaling software businesses. He combines deep expertise in IT, data-driven production systems, cloud platforms, and AI-enabled software with practical business leadership. Jens co-founded and led Cloudfarms ApS, where the SaaS platform transformed agricultural production using data-driven management systems, delivering services to farming businesses in more than 50 countries. At MIT Advisory, Jens helps founders refine product strategy, align technology with business objectives, and build scalable subscription-based models.",
  },
  {
    name: "Isabella Toppenberg",
    image: "/optimized/isabellaToppenberg.avif",
    title: "Advisor — SAP Security & Enterprise Governance",
    bio: "Isabella is a trusted advisor with deep expertise in SAP Security, access governance, and compliance for large enterprises. She supports organizations in designing and strengthening SAP security architectures that scale across global operations — focusing on role and authorization design, risk mitigation, audit readiness, and governance frameworks. Isabella acts as a bridge between IT, security, compliance, and business leadership, translating technical SAP security requirements into clear, actionable solutions.",
  },
  {
    name: "Gregor Rayman",
    image: "/optimized/gregorRayman.avif",
    title: "Advisor — Technology & Systems Architecture",
    bio: "Gregor is a seasoned technology leader and architect with more than 25 years of experience building scalable software systems. As Co-Founder and CTO of CloudFarms, he led the technical strategy and engineering of digital solutions integrating IoT, cloud platforms, and data-driven systems across 50+ countries. His background spans enterprise software architecture, middleware engineering, and large-scale distributed systems. At MIT Advisory, Gregor contributes deep technical leadership, helping clients shape robust architectures, adopt modern development practices, and build products that are scalable, secure, and fit for long-term growth.",
  },
];

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          About MIT Advisory
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Founded in 2023, MIT Advisory helps startups and established businesses
          in specialized areas — from SaaS strategy and AI to SAP security and
          industry-specific challenges. We work hands-on at the intersection of
          technology, AI, and operations.
        </p>

        <h2 className="mt-16 mb-8 text-2xl font-semibold text-foreground">
          Key Advisors
        </h2>
        <div className="space-y-6">
          {advisors.map((a) => (
            <Card key={a.name}>
              <CardContent className="flex gap-6 p-6">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-secondary">
                  <AppImage
                    src={a.image}
                    alt={a.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {a.name}
                  </h3>
                  <p className="text-sm text-primary">{a.title}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {a.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
