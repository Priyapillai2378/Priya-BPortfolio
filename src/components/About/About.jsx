import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container } id="about">
      <h2 className={styles.title }>About</h2>
      <div className={styles.content} >
        <img
          src={getImageUrl("about/aboutpic.png")}
          className={styles.aboutpic}
        />

        <ul className={styles.aboutroles}>
          <li className={styles.aboutrole}>
            <img src={getImageUrl("about/serverIcon.png")} />
            <div className={styles.aboutroleContent}>
              <h3>Fullstack Developer</h3>
              <p>
                I'm a versatile full stcakweb developer with expertise in
                crafting user interfaces and managing server-side
                functionalities .I excel at creating dynamic, user-centric web
                applications that ensure smooth user interactions.
              </p>
            </div>
          </li>
          <li className={styles.aboutrole}>
            <img src={getImageUrl("about/uiIcon.png")} />
            <div className={styles.aboutroleContent}>
              <h3>UI UX Designer</h3>
              <p>
                With a keen eye for aesthetics and a deep understanding of user
                needs, I design user-friendly interfaces that make technology
                enjoyable and intuitive.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
