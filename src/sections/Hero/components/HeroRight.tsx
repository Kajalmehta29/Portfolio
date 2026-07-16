import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Award,
  FolderGit2,
  GraduationCap,
} from "lucide-react";

import profile from "../../../assets/hero/kajal.png";

import FloatingCard from "./FloatingCard";
import Watermark from "./Watermark";

const HeroRight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [8, -8]);
  const rotateY = useTransform(mouseX, [-150, 150], [-8, 8]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(
      e.clientX - rect.left - rect.width / 2
    );

    mouseY.set(
      e.clientY - rect.top - rect.height / 2
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="hero-right"
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow */}

      <motion.div
        className="hero-glow"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Watermark */}

      <Watermark />

      {/* Profile */}

      <motion.img
        src={profile}
        alt="Kajal Mehta"
        className="hero-photo"
        style={{
          rotateX,
          rotateY,
        }}
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
      />

      {/* Floating Cards */}

      <FloatingCard
        Icon={Award}
        title="Open Source"
        subtitle="GSSoC Contributor"
        className="card-one"
      />

      <FloatingCard
        Icon={FolderGit2}
        title="Projects"
        subtitle="4+ Real-world Apps"
        className="card-two"
      />

      <FloatingCard
        Icon={GraduationCap}
        title="Academic"
        subtitle="8.97 CGPA"
        className="card-three"
      />
    </motion.div>
  );
};

export default HeroRight;