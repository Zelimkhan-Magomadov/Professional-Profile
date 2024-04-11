import React from 'react';
import styles from './SkillList.module.css'
import {skills} from "./data/Skills.jsx";
import SkillCard from "../skill-card/SkillCard.jsx";

const SkillList = () => {
    return (
        <div className={styles.list}>
            {
                skills.map(skill => <SkillCard title={skill.title} path={skill.path}/>)
            }
        </div>
    );
};

export default SkillList;
