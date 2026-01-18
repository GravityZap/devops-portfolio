import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.links}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/platform">Platform</NavItem>
        <NavItem to="/experience">Experience</NavItem>
        <NavItem to="/case-studies">Case Studies</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </div>
    </nav>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      end
      style={({ isActive }) => ({
        ...styles.link,
        color: isActive ? "#38bdf8" : "#f8fafc",
        borderBottom: isActive ? "2px solid #38bdf8" : "2px solid transparent"
      })}
    >
      {children}
    </NavLink>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: 72,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 8%",
    background: "rgba(2,6,23,0.75)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid #111827",
    zIndex: 1000
  },
  logo: {
    fontWeight: 700,
    letterSpacing: 0.5,
    color: "#38bdf8"
  },
  links: {
    display: "flex",
    gap: 28
  },
  link: {
    textDecoration: "none",
    paddingBottom: 4,
    transition: "all .2s ease"
  }
};
