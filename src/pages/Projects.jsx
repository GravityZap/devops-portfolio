/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";

const projects = [
  {
    name: "DevOps Portfolio Platform",
    desc: "Production-style CI/CD platform delivering this website with environment separation, quality gates and automated releases.",
    stack: ["React", "Vite", "GitHub Actions", "GitHub Pages", "CI/CD"],
    repo: "https://github.com/GravityZap/devops-portfolio",
    live: "https://maciejhofman.cloud"
  }
];

export default function Projects() {
  return (
    <motion.main {...pageMotion} style={styles.page}>
      <header style={styles.header}>
        <h1>Public Projects</h1>
        <p style={styles.subtitle}>
          Selected public repositories demonstrating cloud, platform and automation engineering.
        </p>
      </header>

      <section style={styles.grid}>
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={styles.card}
          >
            <h3>{p.name}</h3>
            <p style={styles.desc}>{p.desc}</p>

            <div style={styles.stack}>
              {p.stack.map(tag => (
                <span key={tag} style={styles.badge}>{tag}</span>
              ))}
            </div>

            <div style={styles.links}>
              <a href={p.repo} target="_blank" rel="noreferrer">GitHub →</a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer">Live →</a>
              )}
            </div>
          </motion.div>
        ))}
      </section>
    </motion.main>
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
    maxWidth: 1100,
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
    gap: 32
  },
  card: {
    background: "#0b0f19",
    border: "1px solid #111827",
    borderRadius: 18,
    padding: 28,
    display: "flex",
    flexDirection: "column",
    gap: 16
  },
  desc: {
    color: "#9ca3af",
    lineHeight: 1.6
  },
  stack: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap"
  },
  badge: {
    padding: "6px 12px",
    borderRadius: 999,
    background: "rgba(56,189,248,0.1)",
    color: "#38bdf8",
    fontSize: 13
  },
  links: {
    marginTop: "auto",
    display: "flex",
    gap: 20
  }
};
