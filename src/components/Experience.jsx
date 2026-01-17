import CaseStudyCard from "./CaseStudyCard";

export default function Experience() {
  return (
    <section style={styles.section}>
      <h2 style={styles.header}>Experience & Case Studies</h2>
      <p style={styles.subheader}>
        Selected engineering projects focused on cloud platforms, CI/CD systems and infrastructure automation.
      </p>

      <div style={styles.grid}>
        <CaseStudyCard
          title="Cloud & Platform Engineering – International AWS Platform"
          role="Senior DevOps / Cloud Engineer"
          context="Long-term development of a central cloud platform for international product and data teams."

          goal={[
            "Build and operate a stable, scalable cloud platform for distributed teams",
            "Standardize environments and delivery processes",
            "Automate infrastructure and operational workflows"
          ]}

          responsibilities={[
            "Design and maintenance of AWS-based infrastructure",
            "Development of container platforms (Docker, Kubernetes, Rancher)",
            "Building and maintaining CI/CD pipelines",
            "Automation of environments and operational processes",
            "Integration of monitoring, alerting and security layers",
            "Direct support of development and data teams"
          ]}

          architecture={[
            "Central Kubernetes-based runtime platform",
            "Automated CI/CD pipelines for applications and data workloads",
            "Standardized environments (dev / test / production)",
            "Integrated monitoring, logging and availability checks",
            "Security and access management integrated into the platform layer"
          ]}

          stack={[
            "AWS (EC2, S3, RDS, Aurora, Redshift, IAM, CloudWatch)",
            "Kubernetes, Docker, Rancher",
            "Jenkins (multi-node, declarative pipelines)",
            "Linux, Ansible",
            "Datadog, Pingdom, Cloudflare"
          ]}

          results={[
            "Significant reduction of deployment and recovery times",
            "Highly repeatable and stable production environments",
            "Major reduction of manual operational work",
            "Improved system reliability and observability",
            "Strong enablement of product and analytics teams"
          ]}
        />

        <CaseStudyCard
          title="Enterprise CI/CD Platform – Automation & Delivery Systems"
          role="DevOps / CI Engineer"
          context="Design and development of CI/CD platforms for enterprise product teams and certification pipelines."

          goal={[
            "Automate build, test and validation workflows",
            "Increase reliability of delivery pipelines",
            "Standardize CI/CD processes across teams"
          ]}

          responsibilities={[
            "Design and implementation of CI/CD pipelines",
            "Maintenance and scaling of CI infrastructure",
            "Automation of build and test workflows",
            "Integration of development and quality tools",
            "Direct collaboration with engineering teams"
          ]}

          architecture={[
            "Scalable multi-node CI environments",
            "Pipeline-driven build, test and certification flows",
            "Centralized automation and quality validation layers",
            "Reusable CI templates for multiple products"
          ]}

          stack={[
            "Jenkins (multi-node CI)",
            "Linux",
            "Git, Gerrit",
            "Build systems and automated testing frameworks"
          ]}

          results={[
            "Shortened delivery and certification cycles",
            "Improved build reproducibility and reliability",
            "Significant reduction of manual intervention",
            "Standardized delivery pipelines across teams",
            "Increased stability of released products"
          ]}
        />
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 10%",
    background: "#020617",
    color: "white"
  },
  header: {
    fontSize: 42,
    marginBottom: 12
  },
  subheader: {
    color: "#9ca3af",
    maxWidth: 720,
    marginBottom: 60
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 40
  }
};
