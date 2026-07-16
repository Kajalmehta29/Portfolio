import { motion } from "framer-motion";

import logo from "../../../assets/hero/km-logo.png";

const Watermark = () => {
  return (
    <motion.img
      src={logo}
      alt=""
      className="hero-watermark"
      animate={{
        rotate: [-6, -3, -6],
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default Watermark;