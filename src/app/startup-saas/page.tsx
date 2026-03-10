import type { Metadata } from "next";
import { ServiceSection } from "@/components/ServiceSection";
import { ResultBlock } from "@/components/ResultBlock";

export const metadata: Metadata = {
  title: "Startup & SaaS Advisory | MIT Advisory",
};

export default function StartupSaasPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          Startup & SaaS Advisory
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Product positioning, pricing, and subscription models designed to
          maximize long-term value and profitability.
        </p>

        <div className="mt-12 divide-y divide-border">
          <ServiceSection title="Product & Value Proposition Definition">
            <p>
              We help define what problem the product truly solves, for whom, and
              why it is worth paying for. This includes sharpening the value
              proposition, aligning features with real customer pain points, and
              ensuring the product is positioned for long-term relevance — not
              just early traction.
            </p>
          </ServiceSection>

          <ServiceSection title="SaaS Business & Subscription Models">
            <p>
              MIT Advisory designs subscription and pricing models that balance
              customer value with profitability. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Subscription structure (tiers, modules, usage-based models)
              </li>
              <li>Pricing logic aligned with customer value creation</li>
              <li>ARR, churn, and lifetime value optimization</li>
              <li>
                Monetization strategies that support scale and future exits
              </li>
            </ul>
          </ServiceSection>

          <ServiceSection title="From MVP to Scalable Platform">
            <p>
              We support startups in moving from MVP to a scalable SaaS platform
              by aligning:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Product roadmap and commercial priorities</li>
              <li>Architecture decisions with business goals</li>
              <li>Feature development with revenue impact</li>
            </ul>
            <p>
              The goal is to avoid overbuilding while ensuring the product can
              grow with customers and markets.
            </p>
          </ServiceSection>

          <ServiceSection title="AI as a Competitive Advantage">
            <p>
              We help startups apply AI where it creates real business impact —
              not hype. This includes using AI to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Improve internal productivity and decision-making</li>
              <li>Automate services and workflows</li>
              <li>
                Strengthen the customer value proposition through smarter,
                data-driven features
              </li>
            </ul>
            <p>AI is treated as a strategic capability, not an add-on.</p>
          </ServiceSection>

          <ServiceSection title="Founder & Management Sparring">
            <p>
              MIT Advisory acts as a trusted sparring partner for founders and
              management teams. We bring experience from building, scaling, and
              commercializing SaaS businesses and help challenge assumptions,
              validate decisions, and keep focus on what truly creates value.
            </p>
          </ServiceSection>
        </div>

        <ResultBlock
          intro="Startups working with MIT Advisory gain:"
          items={[
            "Clear product positioning",
            "A scalable and profitable SaaS business model",
            "Stronger alignment between technology, sales, and strategy",
            "Increased attractiveness to customers, partners, and investors",
          ]}
          outro="We help startups build businesses that last — not just products that launch."
        />
      </div>
    </div>
  );
}
