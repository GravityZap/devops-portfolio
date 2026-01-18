import { motion } from "framer-motion";

const items = [
  { title: "Cloud & Platform", desc: "Designing and building cloud-native platforms." },
  { title: "CI/CD & Automation", desc: "Delivery pipelines, quality gates and release automation." },
  { title: "Infrastructure as Code", desc: "Terraform-driven, reproducible cloud environments." }
];

export default function WhatIDo() {
  return (
    <section style={styles.section}>
      <h2 style={styles.header}>What I do</h2>

      <div style={styles.grid}>
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            style={styles.card}
          >
            <h3>{item.title}</h3>
            <p style={styles.desc}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 10%",
    background: "#020617"
  },
  header: {
    fontSize: 36,
    marginBottom: 40,
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
    gap: 30
  },
  card: {
    background: "#0b0f19",
    padding: 28,
    borderRadius: 18,
    border: "1px solid #111827"
  },
  desc: {
    marginTop: 10,
    color: "#9ca3af",
    lineHeight: 1.6
  }
};
