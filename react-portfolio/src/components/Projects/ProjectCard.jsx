import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, description, skills, demo, source } }) => {
  const isComingSoon = description === "COMING SOON!";

  return (
    <div className={`${styles.card} ${isComingSoon ? styles.comingSoon : ""}`}>
      <div className={styles.imgArea}>
        <span className={styles.placeholder}>
          {isComingSoon ? "???" : title.slice(0, 2).toUpperCase()}
        </span>
        {!isComingSoon && (
          <span className={styles.badge}>{skills[0]} · {skills[1] || "Project"}</span>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>{skill}</li>
          ))}
        </ul>
        {!isComingSoon && (
          <div className={styles.links}>
            {source && source !== "https://www.github.com" && (
              <a href={source} className={`${styles.link} ${styles.linkSource}`} target="_blank" rel="noreferrer">
                Source code
              </a>
            )}
            {demo && demo !== "https://www.example.com" && (
              <a href={demo} className={`${styles.link} ${styles.linkDemo}`} target="_blank" rel="noreferrer">
                Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
