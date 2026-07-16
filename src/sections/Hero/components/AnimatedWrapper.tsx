import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const AnimatedWrapper = ({ children, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;