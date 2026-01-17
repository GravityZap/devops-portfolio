export default function Hero() {
    return (
      <section style={styles.wrapper}>
        <div style={styles.content}>
          <span style={styles.badge}>DevOps / Platform Engineer</span>
  
          <h1 style={styles.title}>
            Building cloud platforms and delivery systems
            <span style={styles.accent}> for modern teams</span>
          </h1>
  
          <p style={styles.subtitle}>
            Multi-cloud experience across AWS and Azure.  
            Focused on CI/CD, Infrastructure as Code and platform engineering.
          </p>
  
          <div style={styles.actions}>
            <a href="#experience" style={styles.primaryBtn}>View case studies</a>
            <a href="#contact" style={styles.secondaryBtn}>Contact me</a>
          </div>
        </div>
  
        <div style={styles.glow} />
      </section>
    );
  }
  
  const styles = {
    wrapper: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(circle at top, #020617, #000)",
      color: "#f8fafc",
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
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      lineHeight: 1.1,
      marginBottom: 24
    },
    accent: {
      color: "#38bdf8"
    },
    subtitle: {
      fontSize: 18,
      color: "#9ca3af",
      maxWidth: 700,
      margin: "0 auto 40px"
    },
    actions: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
      flexWrap: "wrap"
    },
    primaryBtn: {
      padding: "12px 24px",
      borderRadius: 10,
      background: "#38bdf8",
      color: "#020617",
      fontWeight: 600,
      textDecoration: "none"
    },
    secondaryBtn: {
      padding: "12px 24px",
      borderRadius: 10,
      border: "1px solid #1f2933",
      color: "#f8fafc",
      textDecoration: "none"
    },
    glow: {
      position: "absolute",
      width: 500,
      height: 500,
      background: "radial-gradient(circle, rgba(56,189,248,0.18), transparent 70%)",
      top: -100,
      right: -100
    }
  };
  