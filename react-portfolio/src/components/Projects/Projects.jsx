import React, { useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
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
    <section className={styles.container} id="projects" ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>What I've built</span>
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.sub}>A selection of personal and experimental projects.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
