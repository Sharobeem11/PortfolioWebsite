import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/booksIcon.png")} alt="Books icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                *UNDER CONSTRUCTION*
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certificateIcon.png")} alt="Certificate icon" />
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <p>
                *UNDER CONSTRUCTION*
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/trophyIcon.png")} alt="Trophy icon" />
            <div className={styles.aboutItemText}>
              <h3>Awards</h3>
              <p>
                *UNDER CONSTRUCTION*
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};