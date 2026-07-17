import "./ProductWalkthrough.css";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import BrowserFrame from "../BrowserFrame/BrowserFrame";
import { AnimatePresence, motion } from "framer-motion";
import type { WalkthroughStep } from "../../../../data/projects";

interface Props {
  steps: WalkthroughStep[];
  browserUrl: string;
  theme: "light" | "dark";
}

const ProductWalkthrough = ({ steps, browserUrl, theme }: Props) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) =>
      prev === steps.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? steps.length - 1 : prev - 1
    );
  };

  const step = steps[current];

  return (
    <section className="walkthrough-section">

      <h3>Product Walkthrough</h3>

      <BrowserFrame url={browserUrl} theme={theme}>

        <AnimatePresence mode="wait">

          <motion.img
            key={current}
            src={step.image}
            alt={step.title}
            className="walkthrough-image"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.3 }}
          />

        </AnimatePresence>

      </BrowserFrame>
      <div className="walkthrough-controls">

        <button
          className="walkthrough-arrow"
          onClick={previous}
          aria-label="Previous screen"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="walkthrough-progress">

          {steps.map((_, index) => (
            <span
              key={index}
              className={`progress-dot ${index === current ? "active" : ""
                }`}
            />
          ))}

        </div>

        <button
          className="walkthrough-arrow"
          onClick={next}
          aria-label="Next screen"
        >
          <ChevronRight size={20} />
        </button>

      </div>

      <div className="walkthrough-text">

        <span className="walkthrough-count">
          Screen {current + 1} of {steps.length}
        </span>

        <h4>{step.title}</h4>

        <p>{step.description}</p>

      </div>

    </section>
  );
};

export default ProductWalkthrough;