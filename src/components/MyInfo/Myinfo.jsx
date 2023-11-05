import React from "react";
import styles from "./Myinfo.module.css";
import { getImageUrl} from "../../utils"
export const MyInfo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priya</h1>
        <p className={styles.description}>
          Im a full-stack developer with good knowledge of React,NodeJs
          ,MongoDB. Reach out to bring your website vision to life!
        </p>
        <a
          href="mailto:priyadharshinipri3@gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("me/me.png")}
        className={styles.mypic}
        alt="mypic"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
