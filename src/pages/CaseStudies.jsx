/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

          <Link to="/platform" style={styles.secondary}>
            View platform architecture →
          </Link>
        </div>
      </section>
    </motion.main>
  );
}
