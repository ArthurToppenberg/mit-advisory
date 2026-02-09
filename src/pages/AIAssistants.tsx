import { Layout } from "@/components/Layout";
import { ServiceSection } from "@/components/ServiceSection";
import { ResultBlock } from "@/components/ResultBlock";

const AIAssistants = () => (
  <Layout>
    <div className="section-padding">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">AI & Virtual Assistants</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Applying AI to improve internal productivity, automate services, and significantly strengthen the customer value proposition.
        </p>

        <div className="mt-12 divide-y divide-border">
          <ServiceSection title="AI Strategy & Use-Case Definition">
            <p>We identify where AI makes sense — and where it does not. This includes prioritizing use cases that deliver clear ROI, whether through automation, decision support, or enhanced customer interaction. The focus is always on business outcomes, not technology for its own sake.</p>
          </ServiceSection>

          <ServiceSection title="Virtual Assistants for Operations & Services">
            <p>MIT Advisory designs Virtual Assistants that support employees, customers, and partners in daily operations. Typical applications include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Operational and process support</li>
              <li>Data-driven decision assistance</li>
              <li>Automated reporting and insights</li>
              <li>Customer and partner self-service</li>
            </ul>
            <p>Virtual Assistants are built to integrate seamlessly into existing systems and workflows.</p>
          </ServiceSection>

          <ServiceSection title="AI for Internal Productivity">
            <p>We help companies use AI to reduce manual work, improve consistency, and free up time for high-value activities. This includes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Automation of repetitive tasks and workflows</li>
              <li>Intelligent analysis of operational and business data</li>
              <li>AI-supported documentation, reporting, and knowledge access</li>
            </ul>
            <p>The result is higher productivity with lower operational complexity.</p>
          </ServiceSection>

          <ServiceSection title="AI-Enhanced Value Proposition">
            <p>AI should strengthen the product offering, not complicate it. We help embed AI into products and services in a way that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Improves usability and customer experience</li>
              <li>Adds differentiated, data-driven features</li>
              <li>Increases customer stickiness and perceived value</li>
            </ul>
            <p>This often becomes a key differentiator in competitive SaaS and platform businesses.</p>
          </ServiceSection>

          <ServiceSection title="Responsible & Scalable AI Design">
            <p>MIT Advisory emphasizes AI solutions that are secure, explainable, and scalable. We consider data governance, security, and long-term maintainability from the start — ensuring AI systems can grow with the business and meet enterprise expectations.</p>
          </ServiceSection>
        </div>

        <ResultBlock
          intro="Companies working with MIT Advisory gain:"
          items={[
            "Clear, actionable AI use cases",
            "Virtual Assistants that deliver real operational value",
            "Increased productivity across teams and functions",
            "Stronger, AI-driven differentiation in products and services",
          ]}
          outro="We help turn AI from a buzzword into a practical advantage."
        />
      </div>
    </div>
  </Layout>
);

export default AIAssistants;
