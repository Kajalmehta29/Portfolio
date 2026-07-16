import "./FeatureGrid.css";
import { CheckCircle2 } from "lucide-react";

interface Props {
  features: string[];
}

const FeatureGrid = ({ features }: Props) => {
  return (
    <section className="drawer-section">

      <h3>Key Features</h3>

      <div className="feature-grid">

        {features.map((feature) => (
          <div
            className="feature-card"
            key={feature}
          >
            <CheckCircle2 size={18} />

            <span>{feature}</span>

          </div>
        ))}

      </div>

    </section>
  );
};

export default FeatureGrid;