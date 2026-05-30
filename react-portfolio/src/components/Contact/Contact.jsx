import React, { useEffect, useRef } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
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
    <section className={styles.container} id="contact" ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.left}>
            <span className={styles.label}>Get in touch</span>
            <h2 className={styles.title}>Let's build something together</h2>
            <p className={styles.desc}>
              Whether it's a job opportunity, a project, or just a chat — I'd love to hear
              from you. My inbox is always open.
            </p>
            <a href="mailto:sharobeem11@hotmail.com" className={styles.btn}>
              Send me an email
            </a>
          </div>
          <div className={styles.links}>
            <a href="mailto:sharobeem11@hotmail.com" className={styles.link}>
              <div className={styles.linkIcon}>✉️</div>
              <div className={styles.linkText}>
                <span className={styles.linkLabel}>Email</span>
                <span className={styles.linkValue}>sharobeem11@hotmail.com</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/michael-sharobeem-3a8bb1202"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.linkIcon}>💼</div>
              <div className={styles.linkText}>
                <span className={styles.linkLabel}>LinkedIn</span>
                <span className={styles.linkValue}>michael-sharobeem-3a8bb1202</span>
              </div>
            </a>
            <a
              href="https://www.github.com/Sharobeem11"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.linkIcon}>🐙</div>
              <div className={styles.linkText}>
                <span className={styles.linkLabel}>GitHub</span>
                <span className={styles.linkValue}>github.com/Sharobeem11</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
