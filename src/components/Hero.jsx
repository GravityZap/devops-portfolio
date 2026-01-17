export default function Hero() {
    return (
      <section style={styles.section}>
        <h1 style={styles.h1}>DevOps and Cloud Engineer</h1>
        <h2 style={styles.h2}>AWS • Azure • Terraform • Kubernetes</h2>
        <p style={styles.p}>
        DevOps Engineer with extensive experience in international environments 
        (USA, China, France, Germany), specializing in cloud infrastructure 
        – with a strong focus on Amazon Web Services (AWS). 
        Hands-on expertise in managing Kubernetes clusters, automating CI/CD pipelines 
        and integrating tools such as Docker (Rancher), Jenkins (multi-node cluster), 
        Ansible, Git/Gerrit, Redshift, Aurora, Cloudflare, Datadog, Tableau Server, and Sophos UTM.
        Known for independence, initiative, and effective problem-solving across development 
        and infrastructure teams. I combine analytical thinking with flexibility and creativity, 
        enabling me to deliver innovative solutions and measurable results. I value collaboration 
        and have built trusted relationships with colleagues and clients at all levels.
        </p>
      </section>
    );
  }
  
  const styles = {
    section: { minHeight: "10vh", padding: "12px 10%", background: "#0b0f19", color: "white" },
    h1: { fontSize: "64px", marginBottom: 20 },
    h2: { fontSize: "28px", color: "#7aa2ff" },
    p: { maxWidth: 1000, fontSize: 19, lineHeight: 1.6 }
  };
  