import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Focus | MIT Advisory",
};

export default function IndustryFocusPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          Industry Focus
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Technology only delivers value when it is deeply aligned with the
          realities of the industry it serves. MIT Advisory brings extensive,
          hands-on experience from complex, data-driven industries where
          operational efficiency, reliability, and scalability are critical.
        </p>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground">
            AgTech & FoodTech
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            MIT Advisory has deep experience in AgTech and FoodTech, working with
            digital platforms, data-driven production systems, and SaaS solutions
            supporting modern agriculture and food production.
          </p>
          <p className="mt-4 text-muted-foreground">
            We understand the challenges of:
          </p>
          <ul className="mt-3 space-y-2">
            {[
              "Managing large volumes of operational and biological data",
              "Translating data into actionable insights for daily decision-making",
              "Building systems that work in demanding, real-life production environments",
              "Scaling platforms across countries, production setups, and regulatory frameworks",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our experience spans production management systems, analytics
            platforms, and AI-driven decision support, helping companies create
            solutions that deliver measurable value to producers, integrators,
            and food companies.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground">
            Manufacturing & Production Industries
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            In manufacturing and industrial production, stability and efficiency
            are non-negotiable. MIT Advisory supports companies operating in
            complex production environments, where IT systems must integrate
            tightly with operations.
          </p>
          <p className="mt-4 text-muted-foreground">We bring experience in:</p>
          <ul className="mt-3 space-y-2">
            {[
              "Control systems and production data flows",
              "Integration between operational technology (OT) and IT platforms",
              "Real-time monitoring, reporting, and analytics",
              "Secure and scalable system architectures",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our focus is on improving transparency, productivity, and
            decision-making while ensuring systems remain robust, secure, and
            maintainable.
          </p>
        </div>
      </div>
    </div>
  );
}
