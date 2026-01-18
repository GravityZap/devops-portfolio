/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          <Link to="/case-studies" style={styles.primary}>
            View case study
          </Link>

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
