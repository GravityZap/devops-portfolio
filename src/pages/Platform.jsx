/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";

export default function Platform() {
  return (
    <motion.main {...pageMotion} style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1>Platform Architecture</h1>
        <p style={styles.subtitle}>
          This site is delivered through a production-style CI/CD platform focused on
          automation, environment awareness and controlled releases.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section style={styles.grid}>
        <Card title="CI/CD Platform">
          Multi-stage GitHub Actions pipelines with quality gates, artifact promotion
          and environment separation.
        </Card>

        <Card title="Environment Strategy">
          Preview builds for pull requests and controlled production releases from main.
        </Card>

        <Card title="Delivery & Hosting">
          Automated deployment to GitHub Pages with custom domain and managed TLS.
        </Card>

        <Card title="Engineering Principles">
          Deterministic builds, fast feedback, platform mindset and automation-first delivery.
        </Card>
      </section>

      {/* FLOW */}
      <section style={styles.flowSection}>
        <h2>Delivery flow</h2>

        <div style={styles.flow}>
          <FlowItem>Developer</FlowItem>
          <Arrow />
          <FlowItem>GitHub</FlowItem>
          <Arrow />
          <FlowItem>CI / Quality</FlowItem>
          <Arrow />
          <FlowItem>Build</FlowItem>
          <Arrow />
          <FlowItem>Artifact</FlowItem>
          <Arrow />
          <FlowItem>Deploy</FlowItem>
          <Arrow />
          <FlowItem>Production</FlowItem>
        </div>

        <p style={styles.flowDesc}>
          Every change goes through automated quality validation, reproducible builds
          and controlled release into production.
        </p>
      </section>

      {/* PIPELINE */}
      <section style={styles.pipeline}>
        <h2>Pipeline stages</h2>

        <div style={styles.pipelineGrid}>
          <Stage title="Quality stage">
            • source checkout  
            • dependency install (npm ci)  
            • lint and checks  
            • fail-fast validation
          </Stage>

          <Stage title="Build stage">
            • pinned runtime  
            • environment-aware config  
            • reproducible build  
            • artifact packaging
          </Stage>

          <Stage title="Deploy stage">
            • artifact retrieval  
            • production environment binding  
            • automated GitHub Pages release  
            • TLS provisioning
          </Stage>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Technical deep-dive</h2>
        <p style={styles.ctaDesc}>
          Full architectural breakdown and CI/CD design is available in the case study.
        </p>

        <div style={styles.links}>
          <a href="/case-studies" style={styles.primary}>View case study</a>
          <a
            href="https://github.com/GravityZap/devops-portfolio"
            target="_blank"
            rel="noreferrer"
            style={styles.secondary}
          >
            View repository
          </a>
        </div>
      </section>
    </motion.main>
  );
}

function Card({ title, children }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p style={styles.cardDesc}>{children}</p>
    </div>
  );
}

function Stage({ title, children }) {
  return (
    <div style={styles.stage}>
      <h4>{title}</h4>
      <pre style={styles.stageBody}>{children}</pre>
    </div>
  );
}

function FlowItem({ children }) {
  return <div style={styles.flowItem}>{children}</div>;
}

function Arrow() {
  return <span style={styles.arrow}>→</span>;
}

const pageMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

const styles = {
  page: {
    paddingTop: 120,
    paddingBottom: 160
  },

  hero: {
    maxWidth: 900,
    margin: "0 auto 120px",
    padding: "0 6%",
  },

  subtitle: {
    marginTop: 16,
    color: "#9ca3af",
    fontSize: 18,
    lineHeight: 1.7
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
    gap: 28,
    maxWidth: 1100,
    margin: "0 auto 140px",
    padding: "0 6%"
  },

  card: {
    background: "#0b0f19",
    border: "1px solid #111827",
    borderRadius: 16,
    padding: 22
  },

  cardDesc: {
    marginTop: 10,
    color: "#9ca3af",
    lineHeight: 1.6
  },

  flowSection: {
    textAlign: "center",
    marginBottom: 90,
    padding: "0 6%"
  },

  flow: {
    marginTop: 40,
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
    alignItems: "center"
  },

  flowItem: {
    background: "#0b0f19",
    border: "1px solid #111827",
    borderRadius: 999,
    padding: "10px 18px",
    fontWeight: 600
  },

  arrow: {
    color: "#38bdf8",
    fontWeight: 700
  },

  flowDesc: {
    marginTop: 30,
    color: "#9ca3af"
  },

  pipeline: {
    maxWidth: 1000,
    margin: "0 auto 160px",
    padding: "0 6%"
  },

  pipelineGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
    gap: 28,
    marginTop: 40
  },

  stage: {
    background: "#020617",
    border: "1px solid #111827",
    borderRadius: 18,
    padding: 24
  },

  stageBody: {
    marginTop: 10,
    fontSize: 14,
    color: "#9ca3af",
    lineHeight: 1.6,
    whiteSpace: "pre-wrap"
  },

  cta: {
    textAlign: "center",
    padding: "0 6%"
  },

  ctaDesc: {
    marginTop: 12,
    color: "#9ca3af"
  },

  links: {
    marginTop: 28,
    display: "flex",
    justifyContent: "center",
    gap: 16,
    flexWrap: "wrap"
  },

  primary: {
    padding: "12px 26px",
    borderRadius: 10,
    background: "#38bdf8",
    color: "#020617",
    fontWeight: 600,
    textDecoration: "none"
  },

  secondary: {
    padding: "12px 26px",
    borderRadius: 10,
    border: "1px solid #1f2933",
    color: "#f8fafc",
    textDecoration: "none"
  }
};
