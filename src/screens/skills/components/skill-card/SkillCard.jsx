import React from 'react';
import {FaFigma} from "react-icons/fa";
import styles from './SkillCard.module.css'

const SkillCard = (props) => {
    const {title, path} = props

    return (
        <div className={styles.card}>
            <a href={path}>
                <FaFigma className={styles.skillIcon}/>
                <span style={{color: "white"}}>{title}</span>
            </a>
        </div>
    );
};

export default SkillCard;
