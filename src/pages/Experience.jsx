/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import Expert from "../components/Expert";

export default function Experience() {
  return (
    <motion.main {...pageMotion}>
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
  title: {
    paddingTop: 140,
    textAlign: "center"
  }
};
