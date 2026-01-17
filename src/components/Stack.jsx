const stack = [
    "AWS", "Azure", "Terraform", "Kubernetes",
    "Docker", "GitHub Actions", "Linux", "Monitoring", "Security"
  ];
  
  export default function Stack() {
    return (
      <section style={styles.section}>
        <h2>Tech stack</h2>
        <div style={styles.grid}>
          {stack.map(s => <div key={s} style={styles.card}>{s}</div>)}
        </div>
      </section>
    );
  }
  
  const styles = {
    section: { padding: "100px 10%", background: "#0b0f19", color: "white" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))", gap: 20, marginTop: 40 },
    card: { padding: 20, background: "#111827", borderRadius: 12, textAlign: "center" }
  };
  