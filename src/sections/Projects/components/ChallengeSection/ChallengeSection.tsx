import type { Challenge } from "../../../../data/projects";
import "./ChallengeSection.css";
interface Props {
  challenges: Challenge[];
}

const ChallengeSection = ({
  challenges,
}: Props) => {
  return (
    <section className="drawer-section">

      <h3>Engineering Challenges</h3>

      <div className="challenge-list">

        {challenges.map((challenge) => (
          <div className="challenge-card" key={challenge.problem}>

    <span className="challenge-label">
        Challenge
    </span>

    <h4>{challenge.problem}</h4>

    <span className="solution-label">
        Solution
    </span>

    <p>{challenge.solution}</p>

</div>
        ))}

      </div>

    </section>
  );
};

export default ChallengeSection;