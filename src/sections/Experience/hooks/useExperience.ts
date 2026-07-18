import { useState } from "react";
import { experience } from "../../../data/experience";

const useExperience = () => {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const toggleCompany = (id: string) => {
    if (expandedCompany === id) {
      setExpandedCompany(null);
      setExpandedStep(null);
      return;
    }

    setExpandedCompany(id);
    setExpandedStep(null);
  };

  const toggleStep = (id: string) => {
    setExpandedStep((prev) => (prev === id ? null : id));
  };

  return {
    experience,

    expandedCompany,
    expandedStep,

    toggleCompany,
    toggleStep,
  };
};

export default useExperience;