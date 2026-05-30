import React, { useEffect, useRef } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(styles.visible);
      }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container} id="experience" ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Skills &amp; history</span>
          <h2 className={styles.title}>Experience</h2>
        </div>
        <div className={styles.grid}>
          {/* Skills */}
          <div>
            <p className={styles.sub}>Technologies I work with</p>
            <div className={styles.skillsGrid}>
              {skills.map((skill, id) => (
                <div key={id} className={styles.skillItem}>
                  <div className={styles.skillIcon}>
                    {skill.title.length > 4 ? skill.title.slice(0, 4) : skill.title}
                  </div>
                  <span className={styles.skillName}>{skill.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className={styles.sub}>Where I've worked</p>
            <div className={styles.timeline}>
              {history.map((item, id) => (
                <div key={id} className={styles.timelineItem}>
                  <div className={styles.timelineDot}>
                    {String(id + 1).padStart(2, "0")}
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineHeader}>
                      <span className={styles.timelineRole}>{item.role}</span>
                      <span className={styles.timelineDate}>
                        {item.startDate} – {item.endDate}
                      </span>
                    </div>
                    <div className={styles.timelineOrg}>{item.organization}</div>
                    <ul className={styles.timelineList}>
                      {item.experiences.map((exp, eid) => (
                        <li key={eid}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
