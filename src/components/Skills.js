import React from "react";

import SkillsData from "./data/SkillsData";

import "../App.css";
import "./styles/skill.css";

function Skills() {
    return (
        <section className="skill">
            <div className="main_heading">Professional Skills ...</div>

            <div className="skill_main">
                {SkillsData.map((skills, index) => (
                    <div key={index} className="skill_img_div">
                        <img className="skill_img" src={skills.src} alt={skills.alt} />
                        <div className="skill_img_info">{skills.title}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;