import "./Hero.css";

import { motion } from "framer-motion";

import Container from "../../components/layout/Container/Container";

import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";
import Watermark from "./components/Watermark";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hero__wrapper"
        >
          <HeroLeft />

          <HeroRight />
          <Watermark />
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;