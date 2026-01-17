export default function About() {
    return (
      <section style={styles.section}>
        <h2>O mnie</h2>
        <p>
          Jestem DevOps Engineerem z wieloletnim doświadczeniem w pracy
          w międzynarodowych zespołach. Specjalizuję się w projektowaniu
          środowisk cloudowych, automatyzacji infrastruktury i budowie
          bezpiecznych pipeline’ów CI/CD.
        </p>
      </section>
    );
  }
  
  const styles = {
    section: { padding: "100px 10%", background: "#111827", color: "white" }
  };
  