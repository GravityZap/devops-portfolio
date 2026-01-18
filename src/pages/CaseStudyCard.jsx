export default function CaseStudyCard({ title, role, context, goal, responsibilities, stack, architecture, results }) {
    return (
      <div style={styles.card}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.meta}><strong>Role:</strong> {role}</p>
        <p style={styles.meta}><strong>Context:</strong> {context}</p>
  
        <Section title="Goal" items={goal} />
        <Section title="Responsibilities" items={responsibilities} />
        <Section title="Architecture & Solutions" items={architecture} />
        <Section title="Tech stack" items={stack} />
        <Section title="Results & impact" items={results} />
      </div>
    );
  }
  
  function Section({ title, items }) {
    return (
      <div style={styles.section}>
        <h4 style={styles.sectionTitle}>{title}</h4>
        <ul>
          {items.map((item, idx) => (
            <li key={idx} style={styles.listItem}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  const styles = {
    card: {
      background: "#0b0f19",
      borderRadius: 20,
      padding: 32,
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
    },
    title: {
      fontSize: 26,
      marginBottom: 8
    },
    meta: {
      color: "#9ca3af",
      marginBottom: 4
    },
    section: {
      marginTop: 20
    },
    sectionTitle: {
      marginBottom: 8,
      color: "#60a5fa"
    },
    listItem: {
      marginBottom: 6,
      lineHeight: 1.6
    }
  };
  