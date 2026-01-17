export default function Platform() {
    return (
      <section style={styles.section}>
        <div style={styles.container}>
          
          <div style={styles.left}>
            <h2 style={styles.header}>Platform & CI/CD Architecture</h2>
            <p style={styles.subheader}>
              This portfolio is delivered using a production-style CI/CD platform
              designed around quality gates, environment separation and automated releases.
            </p>
  
            <ul style={styles.list}>
              <li>✔ Multi-stage CI/CD pipeline (quality → build → deploy)</li>
              <li>✔ Preview & production environment separation</li>
              <li>✔ Environment-aware builds and config injection</li>
              <li>✔ Artifact-based promotion</li>
              <li>✔ Automated deployment to GitHub Pages</li>
              <li>✔ Custom domain with managed TLS</li>
            </ul>
  
            <div style={styles.badges}>
              {["GitHub Actions", "CI/CD", "IaC mindset", "Environments", "Quality Gates", "Automation"].map(tag => (
                <span key={tag} style={styles.badge}>{tag}</span>
              ))}
            </div>
          </div>
  
          <div style={styles.right}>
            <div style={styles.panel}>
              <h4 style={styles.panelTitle}>Delivery flow</h4>
  
              <div style={styles.flow}>
                <span>Developer</span>
                <Arrow />
                <span>GitHub</span>
                <Arrow />
                <span>CI/CD</span>
                <Arrow />
                <span>Build</span>
                <Arrow />
                <span>Artifact</span>
                <Arrow />
                <span>Deploy</span>
                <Arrow />
                <span>Production</span>
              </div>
  
              <p style={styles.panelDesc}>
                Every change goes through automated quality validation, reproducible builds and controlled production release.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  
  function Arrow() {
    return <span style={{ color: "#38bdf8", fontWeight: 700 }}>→</span>;
  }
  
  const styles = {
    section: {
      padding: "120px 10%",
      background: "#020617",
      color: "white",
      borderTop: "1px solid #020617"
    },
    container: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 60,
      alignItems: "center"
    },
    left: {
      maxWidth: 600
    },
    header: {
      fontSize: 38,
      marginBottom: 16
    },
    subheader: {
      color: "#9ca3af",
      lineHeight: 1.7,
      marginBottom: 28
    },
    list: {
      listStyle: "none",
      padding: 0,
      marginBottom: 28,
      lineHeight: 1.9
    },
    badges: {
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
    right: {
      display: "flex",
      justifyContent: "center"
    },
    panel: {
      background: "#0b0f19",
      borderRadius: 20,
      padding: 28,
      border: "1px solid #111827",
      boxShadow: "0 10px 30px rgba(0,0,0,.4)",
      maxWidth: 480
    },
    panelTitle: {
      marginBottom: 16,
      color: "#38bdf8"
    },
    flow: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      alignItems: "center",
      fontWeight: 600,
      marginBottom: 20
    },
    panelDesc: {
      color: "#9ca3af",
      fontSize: 14,
      lineHeight: 1.6
    }
  };  