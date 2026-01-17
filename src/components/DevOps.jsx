export default function DevOps() {
    return (
      <section style={styles.section}>
        <h2>How this site is built</h2>
  
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Source Control</h3>
            <p>GitHub repository with protected main branch.</p>
          </div>
  
          <div style={styles.card}>
            <h3>CI Pipeline</h3>
            <p>
              GitHub Actions pipeline automatically installs dependencies,
              runs a production build and packages the site.
            </p>
          </div>
  
          <div style={styles.card}>
            <h3>CD / Hosting</h3>
            <p>
              The generated artifact is deployed to GitHub Pages.
              Every push to main triggers a new release.
            </p>
          </div>
  
          <div style={styles.card}>
            <h3>Tech stack</h3>
            <p>
              React, Vite, Node.js 22, automated workflows.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  const styles = {
    section: { padding: "100px 10%", background: "#111827", color: "white" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 24, marginTop: 40 },
    card: { padding: 24, background: "#0b0f19", borderRadius: 16 }
  };
  