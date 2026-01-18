import { motion } from "framer-motion";
import Expert from "../components/Expert";

export default function Experience() {
  return (
    <motion.main {...pageMotion} style={styles.page}>
      <Expert />
    </motion.main>
  );
}

const pageMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

const styles = {
  page: {
    paddingTop: 120,
    paddingBottom: 120,
    maxWidth: 1100,
    margin: "0 auto",
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    textAlign: "center",
    marginBottom: 60
  }
};
