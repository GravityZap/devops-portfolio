/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.content}
      >
        <span style={styles.badge}>DevOps / Platform Engineer</span>

        <h1 style={styles.title}>
          Building cloud platforms <br />
          and delivery systems
        </h1>

        <p style={styles.subtitle}>
          Multi-cloud experience across AWS and Azure.  
          Focused on CI/CD, Infrastructure as Code and platform engineering.
        </p>

        <div style={styles.actions}>
          <a href="/platform" style={styles.primary}>Platform</a>
          <a href="/contact" style={styles.secondary}>Contact</a>
        </div>
      </motion.div>

      <div style={styles.glow} />
    </section>
  );
}

const styles = {
  wrapper: {
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "radial-gradient(circle at top, #020617, #000)",
    position: "relative",
    overflow: "hidden"
  },
  content: {
    maxWidth: 900,
    padding: "0 24px",
    textAlign: "center",
    zIndex: 2
  },
  badge: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: 999,
    background: "rgba(56,189,248,0.1)",
    color: "#38bdf8",
    fontSize: 14,
    marginBottom: 24
  },
  title: {
    fontSize: "clamp(2.6rem, 5vw, 4rem)",
    lineHeight: 1.1,
    marginBottom: 24
  },
  subtitle: {
    fontSize: 18,
    color: "#9ca3af",
    maxWidth: 640,
    margin: "0 auto 40px",
    lineHeight: 1.6
  },
  actions: {
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
  },
  glow: {
    position: "absolute",
    width: 600,
    height: 600,
    background: "radial-gradient(circle, rgba(56,189,248,0.18), transparent 70%)",
    top: -120,
    right: -120
  }
};
