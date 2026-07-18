import "./Experience.css";
import Timeline from "./components/Timeline/Timeline";
import Aurora from "../../components/Aurora/Aurora";
const Experience = () => {
  return (
    <section id="experience" className="experience-section">
         <Aurora/>

    <div className="experience-overlay"/>
      <div className="experience-container">
        <div className="experience-header">
          <span className="section-tag">Career Journey</span>
          <h2>Experience</h2>
          <p>
            A timeline of my professional growth, from open-source contributions
            to building real-world software for clients.
          </p>
        </div>

        <Timeline />
      </div>
    </section>
  );
};

export default Experience;