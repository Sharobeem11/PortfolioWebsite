import React, {useState} from "react";
import styles from "./Avatar.module.css";
import {getImageUrl} from "../../utils";

export const Avatar = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Michael</h1>
                <p className={styles.description}>
                    I'm a someone who is passionate about helping people
                    and I'm always looking to gain new experiences.
                    Reach out if you'd like to learn more!
                </p>
                <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("avatar/avatarImage.png")} alt="Avatar image of me" className={styles.AvatarImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};