export default function Experience() {
  return (
    <section style={styles.section}>
      <h2>Doświadczenie</h2>

      <div style={styles.card}>
        <h3>Multi-cloud platform (AWS + Azure)</h3>
        <p>Terraform • Kubernetes • GitHub Actions</p>
        <ul>
          <li>Automatyzacja infrastruktury jako kod</li>
          <li>Migracja systemów do chmury</li>
          <li>Budowa pipeline CI/CD</li>
        </ul>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 10%",
    background: "#0b0f19",
    color: "white"
  },
  card: {
    marginTop: 32,
    padding: 24,
    background: "#111827",
    borderRadius: 16
  }
};
