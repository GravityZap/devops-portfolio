import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav style={styles.nav}>
      {isMobile ? (
        <>
          <button style={styles.burger} onClick={() => setOpen(!open)}>
            ☰
          </button>

          {open && (
            <div style={styles.mobileMenu}>
              <MobileNavItem to="/" onClick={() => setOpen(false)}>Home</MobileNavItem>
              <MobileNavItem to="/platform" onClick={() => setOpen(false)}>Platform</MobileNavItem>
              <MobileNavItem to="/experience" onClick={() => setOpen(false)}>Experience</MobileNavItem>
              <MobileNavItem to="/case-studies" onClick={() => setOpen(false)}>Case Studies</MobileNavItem>
              <MobileNavItem to="/projects" onClick={() => setOpen(false)}>Projects</MobileNavItem>
              <MobileNavItem to="/contact" onClick={() => setOpen(false)}>Contact</MobileNavItem>
            </div>
          )}
        </>
      ) : (
        <div style={styles.links}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/platform">Platform</NavItem>
          <NavItem to="/experience">Experience</NavItem>
          <NavItem to="/case-studies">Case Studies</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>
      )}
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

function MobileNavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      end
      onClick={onClick}
      style={({ isActive }) => ({
        ...styles.mobileLink,
        color: isActive ? "#38bdf8" : "#f8fafc"
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
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "16px 20px",
    background: "rgba(2,6,23,0.75)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid #111827",
    zIndex: 1000
  },

  burger: {
    fontSize: 28,
    background: "transparent",
    border: "none",
    color: "#f8fafc",
    cursor: "pointer"
  },

  links: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
    justifyContent: "center"
  },

  link: {
    textDecoration: "none",
    paddingBottom: 4,
    transition: "all .2s ease"
  },

  mobileMenu: {
    position: "absolute",
    top: 72,
    right: 0,
    width: "100%",
    background: "rgba(2,6,23,0.95)",
    backdropFilter: "blur(12px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 0",
    gap: 22,
    borderBottom: "1px solid #111827"
  },

  mobileLink: {
    textDecoration: "none",
    fontSize: 20,
    fontWeight: 500
  }
};
