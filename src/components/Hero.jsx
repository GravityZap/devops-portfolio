export default function Hero() {
    return (
      <section style={styles.section}>
        <h1 style={styles.h1}>DevOps Engineer</h1>
        <h2 style={styles.h2}>AWS • Azure • Terraform • Kubernetes</h2>
        <p style={styles.p}>
          Wieloletnie doświadczenie w międzynarodowych projektach. 
          Projektuję, automatyzuję i skaluję platformy chmurowe.
        </p>
      </section>
    );
  }
  
  const styles = {
    section: { minHeight: "100vh", padding: "120px 10%", background: "#0b0f19", color: "white" },
    h1: { fontSize: "64px", marginBottom: 20 },
    h2: { fontSize: "28px", color: "#7aa2ff" },
    p: { maxWidth: 700, fontSize: 18, lineHeight: 1.6 }
  };
  