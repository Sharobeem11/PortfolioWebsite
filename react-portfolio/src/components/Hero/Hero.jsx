import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroGlow} />
      <div className={styles.heroGlow2} />
      <div className={styles.heroGrid} />
      <div className={styles.container}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Open to opportunities
            </div>
            <h1 className={styles.heroTitle}>
              Hi, I'm<br /><em className={styles.heroAccent}>Michael</em><br />Sharobeem
            </h1>
            <p className={styles.heroDesc}>
              Software developer passionate about building thoughtful, impactful products.
              CS + Business from Waterloo &amp; Laurier — I bridge engineering and strategy.
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className={styles.btnPrimary}>Get in touch</a>
              <a href="#projects" className={styles.btnSecondary}>View my work</a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.cardStack}>
              <div className={`${styles.heroCard} ${styles.cardMain}`}>
                <div className={styles.avatar}>MS</div>
                <div className={styles.cardName}>Michael Sharobeem</div>
                <div className={styles.cardRole}>Software Developer</div>
                <div className={styles.cardTags}>
                  <span className={styles.tag}>React</span>
                  <span className={styles.tag}>Python</span>
                  <span className={styles.tag}>Node.js</span>
                  <span className={styles.tag}>ML</span>
                </div>
              </div>
              <div className={`${styles.heroCard} ${styles.cardStat}`}>
                <div className={styles.statNum}>4+</div>
                <div className={styles.statLabel}>roles &amp; internships</div>
              </div>
              <div className={`${styles.heroCard} ${styles.cardExp}`}>
                <span className={styles.expDot} />
                <span className={styles.expText}>Latest role</span>
                <div className={styles.expCompany}>Pepper · Ops Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
