import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <motion.main {...pageMotion} style={styles.page}>
      <header style={styles.header}>
        <h1>Case Studies</h1>
        <p style={styles.subtitle}>
          Technical deep-dives into how this platform is built and delivered.
        </p>
      </header>

      <section style={styles.section}>
        <h2>DevOps Portfolio Platform</h2>
        <p style={styles.lead}>
          This website is not only a portfolio, but also a production-style delivery platform.
          It demonstrates CI/CD architecture, environment strategy and automated releases.
        </p>

        <Block title="🎯 Goals">
          <ul>
            <li>Automated build and deployment pipeline</li>
            <li>Quality gates before production release</li>
            <li>Preview vs production environment separation</li>
            <li>Reproducible builds and artifact-based delivery</li>
            <li>Custom domain with managed TLS</li>
          </ul>
        </Block>

        <Block title="🏗 Architecture overview">
          <ul>
            <li>React + Vite application</li>
            <li>GitHub Actions as CI/CD platform</li>
            <li>Multi-stage pipeline (quality → build → deploy)</li>
            <li>Artifact-based promotion to production</li>
            <li>GitHub Pages as hosting layer</li>
          </ul>
        </Block>

        <Block title="🔄 Delivery flow">
          <pre style={styles.code}>
{`Developer → GitHub → GitHub Actions
        → Quality (lint, checks)
        → Build (env-aware)
        → Artifact
        → Deploy
        → GitHub Pages → Browser`}
          </pre>
        </Block>

        <Block title="🌍 Environment strategy">
          <ul>
            <li><strong>Preview</strong> — builds triggered by pull requests</li>
            <li><strong>Production</strong> — builds triggered from main branch</li>
            <li>Environment-specific configuration injected at build time</li>
            <li>Secrets isolated using GitHub Environments</li>
          </ul>
        </Block>

        <Block title="🛡 Platform principles">
          <ul>
            <li>Clear stage separation</li>
            <li>Fail-fast quality gates</li>
            <li>Deterministic builds</li>
            <li>Automated and auditable releases</li>
            <li>Infrastructure-as-platform mindset</li>
          </ul>
        </Block>

        <div style={styles.links}>
          <a
            href="https://github.com/GravityZap/devops-portfolio"
            target="_blank"
            rel="noreferrer"
            style={styles.primary}
          >
            View repository on GitHub
          </a>

          <a href="/platform" style={styles.secondary}>
            View platform architecture →
          </a>
        </div>
      </section>
    </motion.main>
  );
}

function Block({ title, children }) {
  return (
    <div style={styles.block}>
      <h3>{title}</h3>
      <div style={styles.blockContent}>{children}</div>
    </div>
  );
}

const pageMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

const styles = {
  page: {
    paddingTop: 140,
    paddingBottom: 140,
    maxWidth: 900,
    margin: "0 auto",
    paddingLeft: "6%",
    paddingRight: "6%"
  },
  header: {
    marginBottom: 80
  },
  subtitle: {
    color: "#9ca3af",
    marginTop: 12,
    maxWidth: 600
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 48
  },
  lead: {
    fontSize: 18,
    color: "#9ca3af",
    lineHeight: 1.7
  },
  block: {
    background: "#0b0f19",
    border: "1px solid #111827",
    borderRadius: 18,
    padding: 28
  },
  blockContent: {
    marginTop: 12,
    lineHeight: 1.8,
    color: "#d1d5db"
  },
  code: {
    background: "#020617",
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    overflowX: "auto"
  },
  links: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    marginTop: 20
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
