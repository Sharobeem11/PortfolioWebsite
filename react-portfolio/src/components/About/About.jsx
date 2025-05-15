import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
// import aboutImage from "../../assets/about/aboutImage.png";
// import booksIcon from "../../assets/about/books.png";
// import certificateIcon from "../../assets/about/certificateIcon.png";
// import trophyIcon from "../../assets/about/trophyIcon.png";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          // src={aboutImage}
          alt="laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/books.png")} alt="Books icon" className={styles.aboutImage}/>
            {/* <img src={booksIcon} alt="Books icon" className={styles.aboutImage}/> */}
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                <ul>
                  <li>Bachelor of Computer Science from University of Waterloo</li>
                  <li>Bachelor of Business Administration from Wilfrid Laurier University</li>
                </ul>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certificateIcon.png")} alt="Certificate icon" className={styles.aboutImage}/>
            {/* <img src={certificateIcon} alt="Certificate icon" className={styles.aboutImage} /> */}
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <p>
                <ul>
                  <li>Certificate of Distinction: Ranking top 25% in Cayley Contest 2019
                    - The Centre for Education in Mathematics and Computing</li>
                </ul>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/trophyIcon.png")} alt="Trophy icon" className={styles.aboutImage}/>
            {/* <img src={trophyIcon} alt="Trophy icon" className={styles.aboutImage}/> */}
            <div className={styles.aboutItemText}>
              <h3>Awards</h3>
              <p>
                <ul>
                  <li>2021 Proficiency Award in Computer Science, University - Forest Heights C. I.</li>
                </ul>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};