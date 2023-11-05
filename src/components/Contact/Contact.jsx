import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
   <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2 >Contact</h2>
        <p> Don't forget to drop a line!</p>
        <br />
        &#169;2023 Priya,Inc.

    </div>
    <ul className={styles.links}>
        <li className={styles.link}> <img src={getImageUrl("contact/emailIcon.png")}  />
        <a href="mailto:priyadharshinipri3@gmail.com">mail</a></li>
        <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} />
        <a href="https://www.linkedin.com/in/priyadharshini-b-92917322a">linkedin</a></li>
        <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} />
        <a href="https://github.com/Priyapillai2378">github</a></li>
    </ul>
   </footer>
  )
}


