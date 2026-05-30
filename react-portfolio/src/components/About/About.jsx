import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";

export const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(styles.visible);
      }),
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container} id="about" ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.label}>About me</span>
          <h2 className={styles.title}>A developer who loves building things that matter</h2>
          <p className={styles.sub}>
            I'm always looking to gain new experiences and bring value through both technical
            execution and strategic thinking. I graduated with a double degree from UW and Laurier.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🎓</div>
            <h3>Education</h3>
            <ul>
              <li>Bachelor of Computer Science — University of Waterloo</li>
              <li>Bachelor of Business Administration — Wilfrid Laurier University</li>
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📜</div>
            <h3>Certifications</h3>
            <ul>
              <li>Certificate of Distinction — Top 25% in Cayley Contest (CEMC, 2019)</li>
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🏆</div>
            <h3>Awards</h3>
            <ul>
              <li>2021 Proficiency Award in Computer Science — Forest Heights C.I.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
