/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";

const stack = [
  "AWS", "Azure", "Terraform", "Rancher", "Docker",
  "GitHub Actions", "Azure DevOps", "Linux", "Cloudflare",
  "Jenkins", "Ansible", "Datadog", "Pingdom", "Sophos", "MySQL"
];

export default function StackGrid() {
  return (
    <section style={styles.section}>
      <h2 style={styles.header}>Tech stack</h2>

      <div style={styles.grid}>
        {stack.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            style={styles.card}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 10%",
    background: "#020617",
    borderTop: "1px solid #020617"
  },
  header: {
    fontSize: 36,
    marginBottom: 40,
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: 20,
    maxWidth: 900,
    margin: "0 auto"
  },
  card: {
    background: "#0b0f19",
    borderRadius: 14,
    border: "1px solid #111827",
    padding: "20px 0",
    textAlign: "center",
    fontWeight: 600,
    letterSpacing: 0.5,
    cursor: "default"
  }
};
