import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hamza Nabeel</h1>
        <p className={styles.description}>
        I'm a frontend developer with expertise in HTML, CSS, JavaScript, and React, as well as proficiency in Tailwind CSS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:workhamzanabeel@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href={getImageUrl("about/hamza.pdf")} download className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/myphoto-removebg-preview.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
