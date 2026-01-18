/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.main {...pageMotion} style={styles.page}>
      <section style={styles.hero}>
        <h1>Let’s build something solid</h1>
        <p style={styles.subtitle}>
          If you’re looking for a DevOps / Platform Engineer who builds reliable
          delivery systems and cloud platforms — let’s talk.
        </p>
      </section>

      <section style={styles.cards}>
        <Card
          title="LinkedIn"
          desc="Professional profile, experience and recommendations."
          link="https://www.linkedin.com/in/maciej-hofman-devops-engineer/"
          action="Open profile →"
        />

        <Card
          title="GitHub"
          desc="Public repositories, CI/CD demos and platform projects."
          link="https://github.com/GravityZap"
          action="View repositories →"
        />

        <Card
          title="Email"
          desc="Direct contact for collaboration or job opportunities."
          link="mailto:maciek.hofman@gmail.com"
          action="Send email →"
        />
      </section>

      <section style={styles.footer}>
        <p>
          Based in Europe · Open to remote and international projects
        </p>
      </section>
    </motion.main>
  );
}

function Card({ title, desc, link, action }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={styles.card}>
      <h3>{title}</h3>
      <p style={styles.cardDesc}>{desc}</p>
      <span style={styles.action}>{action}</span>
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
    paddingTop: 140,
    paddingBottom: 160,
    maxWidth: 1000,
    margin: "0 auto",
    paddingLeft: "6%",
    paddingRight: "6%"
  },

  hero: {
    marginBottom: 100
  },

  subtitle: {
    marginTop: 16,
    color: "#9ca3af",
    fontSize: 18,
    lineHeight: 1.7,
    maxWidth: 600
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
    gap: 32
  },

  card: {
    background: "#0b0f19",
    border: "1px solid #111827",
    borderRadius: 18,
    padding: 28,
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    transition: "transform .2s ease, box-shadow .2s ease"
  },

  cardDesc: {
    color: "#9ca3af",
    lineHeight: 1.6
  },

  action: {
    marginTop: "auto",
    color: "#38bdf8",
    fontWeight: 600
  },

  footer: {
    marginTop: 140,
    textAlign: "center",
    color: "#9ca3af",
    fontSize: 14
  }
};
