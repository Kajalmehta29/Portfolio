import { Circle } from "lucide-react";

import AnimatedWrapper from "./AnimatedWrapper";
import CTAButtons from "./CTAButtons";
import Stats from "./Stats";

const HeroLeft = () => {
  return (
    <div className="hero-left">

      <AnimatedWrapper delay={0}>

        <div className="hero-availability">

          <Circle
            size={10}
            fill="#7C8CFF"
            strokeWidth={0}
          />

          <span>AVAILABLE FOR INTERNSHIPS • 2027 GRAD</span>

        </div>

      </AnimatedWrapper>

      <AnimatedWrapper delay={0.2}>

        <h1 className="hero-title">

          Engineering

          <span> digital experiences </span>

          <br />

          that create

          <br />

          real-world impact.

        </h1>

      </AnimatedWrapper>

      <AnimatedWrapper delay={0.4}>

        <h2 className="hero-role">

          Hi, I'm <span>Kajal Mehta</span>

        </h2>

      </AnimatedWrapper>

      <AnimatedWrapper delay={0.6}>

        <p className="hero-description">

          A Computer Science student at VIT Bhopal passionate
          about building scalable backend systems, modern web
          applications and intuitive digital experiences.

        </p>

      </AnimatedWrapper>

      <AnimatedWrapper delay={0.8}>

        <CTAButtons />

      </AnimatedWrapper>

      <AnimatedWrapper delay={1}>

        <Stats />

      </AnimatedWrapper>

    </div>
  );
};

export default HeroLeft;