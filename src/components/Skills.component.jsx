import React from "react";
import { skills as skillsLists } from "../constants/Skills";
import { landing } from "../styles/components/Landing.module.scss";
import {
  skills,
  techTitle,
  skillsSection,
  skillListItem,
  skillListTitle,
  skillListContent,
} from "../styles/components/Skills.module.scss";
import classnames from "classnames";

const SkillSection = ({ skill, index }) => {
  return (
    <div
      className={skillListItem}
      data-aos={index % 2 ? "fade-left" : "fade-right"}
      data-aos-duration="750"
    >
      <div className={skillListContent}>{`${skill.list.join(", ")}`}</div>
      <div className={skillListTitle}>{skill.title}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className={classnames(landing, skills)}>
      <h2 className={techTitle} data-aos="fade-up" data-aos-duration="750">
        TECH <span>that I like</span>
      </h2>
      <div className={skillsSection}>
        {Object.keys(skillsLists).map((skill, idx) => (
          <SkillSection
            key={skillsLists[skill].title}
            skill={skillsLists[skill]}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
