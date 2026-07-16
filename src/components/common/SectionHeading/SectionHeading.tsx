import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => {
  return (
    <div className={`section-heading ${align}`}>
      <div className="section-heading__eyebrow">
        <span className="section-heading__line" />
        <span className="section-heading__label">{eyebrow}</span>
      </div>

      <h2 className="section-heading__title">
        {title}
      </h2>

      {description && (
        <p className="section-heading__description">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;