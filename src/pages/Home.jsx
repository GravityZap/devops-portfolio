/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import WhatIDo from "../components/WhatIDo";
import StackGrid from "../components/StackGrid";
import DevOps from "../components/DevOps";

export default function Home() {
  return (
    <motion.main {...pageMotion}>
      <Hero />
      <WhatIDo />
      <StackGrid />
      <DevOps />
    </motion.main>
  );
}

const pageMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 }
};
