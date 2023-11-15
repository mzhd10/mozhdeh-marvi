import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import SkillBar from "./SkillBar/SkillBar";
import Reveal from "../Reveal/Reveal";

const skillsData = [
  {
    label: "JavaScript",
    percentage: 85,
    style: "progress-line js",
  },
  {
    label: "React",
    percentage: 80,
    style: "progress-line react",
  },
  {
    label: "Bootstrap",
    percentage: 95,
    style: "progress-line boot",
  },
  {
    label: "HTML & CSS",
    percentage: 98,
    style: "progress-line hc",
  },
  {
    label: "Java",
    percentage: 65,
    style: "progress-line java",
  },
];
const Skills = () => {
  const [isInterSected, setIsInterSected] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.15,
    };

    const handleIntersection = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInterSected(true);
        observer.unobserve(entry.target);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <Reveal>
        <div className="container">
          <div className="skill-title">
            <h2>
              <span>My</span> Skills
            </h2>
            <hr />
          </div>
          <div className={`grid skills-grid`}>
            <div className="skill-content">
              <h1>
                In <span>Designing</span> <br />
                And <span>Developing</span>
              </h1>
              <p>
                EveryDay is a new challenge, and i am trying to gain more
                knowledge and experience. Learning new technologies has always
                been interesting to me. As technology is evolving so fast, I try
                to keep myself up to date.
              </p>
            </div>
            <div className="skill-bars">
              {skillsData.map((skill) => (
                <SkillBar
                  key={skill.label}
                  label={skill.label}
                  percentage={skill.percentage}
                  style={isInterSected ? skill.style : ""}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="skill-bottom">
          <div className={`flex container`}>
            <div>
              <h3>I'm available for work</h3>
            </div>
            <div>
              <a href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
