import "./TechStack.css";

interface Props {
  tech: string[];
}

const TechStack = ({ tech }: Props) => {
  return (
    <section className="drawer-section">

      <h3>Tech Stack</h3>

      <div className="tech-stack">

        {tech.map((item) => (
          <div
            key={item}
            className="tech-chip"
          >
            <span className="tech-dot" />

            <span>{item}</span>
          </div>
        ))}

      </div>

    </section>
  );
};

export default TechStack;