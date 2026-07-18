import "./Timeline.css";
import TimelineItem from "../TimelineItem/TimelineItem";
import useExperience from "../../hooks/useExperience";

const Timeline = () => {
  const {
    experience,
    expandedCompany,
    expandedStep,
    toggleCompany,
    toggleStep,
  } = useExperience();

  return (
    <div className="timeline">
      <div className="timeline-line" />

      {experience.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          side={index % 2 === 0 ? "left" : "right"}
          index={index + 1}
          expanded={expandedCompany === item.id}
          expandedStep={expandedStep}
          onToggle={() => toggleCompany(item.id)}
          onToggleStep={toggleStep}
        />
      ))}
    </div>
  );
};

export default Timeline;