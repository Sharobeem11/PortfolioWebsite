import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
// import emailIcon from "../../assets/contact/emailIcon.png";
// import linkedinIcon from "../../assets/contact/linkedinIcon.png";
// import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          {/* <img src={emailIcon} alt="Email icon" /> */}
          <a href="mailto:sharobeem11@hotmail.com">sharobeem11@hotmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            // src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/michael-sharobeem-3a8bb1202">linkedin.com/michael-sharobeem-3a8bb1202</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          {/* <img src={githubIcon} alt="Github icon" /> */}
          <a href="https://www.github.com/Sharobeem11">github.com/Sharobeem11</a>
        </li>
      </ul>
    </footer>
  );
};