/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";

const projects = [
  {
    name: "DevOps Portfolio Platform",
    desc: "Production-style CI/CD platform delivering this website with environment separation, quality gates and automated releases.",
    stack: ["React", "Vite", "GitHub Actions", "GitHub Pages", "CI/CD"],
    repo: "https://github.com/GravityZap/devops-portfolio",
    live: "https://maciejhofman.cloud"
  },
  {
    name: "Azure Terraform Infracost FinOps CI",
    desc: "Production-inspired Azure platform project integrating Terraform, Infracost and CI pipelines to introduce automated cloud cost estimation and FinOps feedback directly into pull requests.",
    stack: ["Azure", "Terraform", "Infracost", "GitHub Actions", "Azure DevOps", "FinOps", "CI/CD"],
    repo: "https://github.com/GravityZap/azure-terraform-infracost-finops-ci"
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
            whileHover={{ y: -6 }}
            transition={{ delay: i * 0.1 }}
            style={styles.card}
          >
            <h3>{p.name}</h3>

            <p style={styles.desc} title={p.desc}>
              {p.desc}
            </p>

            <div style={styles.stack}>
              {p.stack.map(tag => (
                <span key={tag} style={styles.badge}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={styles.actions}>
              <ActionLink href={p.repo}>GitHub →</ActionLink>
              {p.live && <ActionLink href={p.live}>Live demo →</ActionLink>}
            </div>
          </motion.div>
        ))}
      </section>
    </motion.main>
  );
}

function ActionLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={styles.action}
    >
      {children}
    </a>
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
    paddingTop: 110,
    paddingBottom: 110,
    maxWidth: 1100,
    margin: "0 auto",
    paddingLeft: 20,
    paddingRight: 20
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
    borderRadius: 16,
    padding: 22,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    transition: "box-shadow .25s ease",
    boxShadow: "0 0 0 rgba(0,0,0,0)"
  },
  desc: {
    color: "#9ca3af",
    lineHeight: 1.6,  
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  
    minHeight: "6.4em"
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
  actions: {
    marginTop: "auto",
    display: "flex",
    gap: 22
  },
  action: {
    color: "#38bdf8",
    fontWeight: 600,
    textDecoration: "none",
    transition: "opacity .2s ease, transform .2s ease"
  }
};
