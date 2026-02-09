import { Layout } from "@/components/Layout";
import { ServiceSection } from "@/components/ServiceSection";
import { ResultBlock } from "@/components/ResultBlock";

const SAPSecurity = () => (
  <Layout>
    <div className="section-padding">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">SAP Security & Control Systems</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          SAP security is not just a technical discipline — it is a foundation for compliance, operational stability, and business trust. MIT Advisory helps enterprises design, implement, and govern SAP security and control systems that meet regulatory requirements while supporting efficient business operations.
        </p>

        <div className="mt-12 divide-y divide-border">
          <ServiceSection title="SAP Security Strategy & Governance">
            <p>We help organizations define and implement SAP security strategies that align with business processes and regulatory demands. This includes governance models that clearly define roles, responsibilities, and ownership across security, IT, and the business.</p>
          </ServiceSection>

          <ServiceSection title="Role Design & Authorization Concepts">
            <p>MIT Advisory designs and implements best-practice, least-privilege role concepts tailored to the organization. This includes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Business-aligned role design</li>
              <li>Segregation of Duties (SoD) compliant authorization models</li>
              <li>Scalable role frameworks that support organizational growth and system changes</li>
            </ul>
            <p>The result is secure access without unnecessary complexity.</p>
          </ServiceSection>

          <ServiceSection title="GRC & Access Risk Management">
            <p>We support the implementation and use of SAP GRC to enable automated risk analysis and continuous control monitoring. This includes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access risk identification and mitigation</li>
              <li>Workflow design for access approvals</li>
              <li>Ongoing compliance reporting and audit support</li>
            </ul>
            <p>GRC becomes an integrated control mechanism rather than a standalone tool.</p>
          </ServiceSection>

          <ServiceSection title="Privileged Access Management (PAM)">
            <p>MIT Advisory designs and deploys controls for highly sensitive and critical access. This includes restricting, monitoring, and auditing privileged users to minimize insider risk while ensuring operational continuity.</p>
          </ServiceSection>

          <ServiceSection title="Identity & Access Management Integration">
            <p>We help integrate SAP security with enterprise Identity and Access Management (IAM) solutions to enable:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Centralized user provisioning and de-provisioning</li>
              <li>Consistent authentication and authorization across systems</li>
              <li>Reduced manual effort and lower access risk</li>
            </ul>
            <p>This creates a unified and scalable identity architecture across the SAP landscape.</p>
          </ServiceSection>

          <ServiceSection title="Data Protection & Regulatory Compliance">
            <p>MIT Advisory ensures sensitive data within SAP systems is protected through robust authorization design, encryption, and data-masking techniques. We work with regulations such as SOX and GDPR as core design constraints, ensuring compliance is built into daily operations — not handled as an afterthought.</p>
          </ServiceSection>
        </div>

        <ResultBlock
          intro="Organizations working with MIT Advisory gain:"
          items={[
            "Secure, compliant SAP landscapes",
            "Reduced access risk and audit findings",
            "Clear governance and ownership models",
            "SAP security that supports — rather than restricts — the business",
          ]}
          outro="We help enterprises establish SAP security and control systems that are robust, auditable, and ready for the future."
        />
      </div>
    </div>
  </Layout>
);

export default SAPSecurity;
