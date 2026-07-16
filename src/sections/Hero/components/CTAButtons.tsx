import { ArrowRight, Download } from "lucide-react";

const CTAButtons = () => {
  return (
    <div className="hero-buttons">

      <button className="primary-btn">

        View Projects

        <ArrowRight size={18} />

      </button>

      <button className="secondary-btn">

        Download Resume

        <Download size={18} />

      </button>

    </div>
  );
};

export default CTAButtons;