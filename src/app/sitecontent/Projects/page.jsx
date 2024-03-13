import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.title}>
          <h1 className={styles.h1}>Projects at Erskine</h1>
          <br></br>
          <p className={styles.desc}>
            At DXC Erskine, we are involved in a diverse portfolio <br></br>
            of projects that demonstrate our expertise and dedication <br></br>
            to driving innovation and transformation across various sectors.{" "}
            <br></br>
            <br></br>
            <br></br>
            BAE Project: Collaborating with BAE Systems, we focus on <br></br>
            cutting-edge defense and security solutions, leveraging <br></br>AI
            and data analytics to safeguard nations.
            <br></br>
            <br></br>
            <br></br>
            DEFRA Project: Prioritizing environmental sustainability, we work{" "}
            <br></br>
            with DEFRA to implement digital strategies for eco-friendly
            practices <br></br> and smart agriculture.
            <br></br>
            <br></br>
            <br></br>
            MOJ Project: Enhancing legal services, we utilize technology for{" "}
            <br></br>
            efficient case management and a seamless justice system at the{" "}
            <br></br>
            Ministry of Justice.
            <br></br>
            <br></br>
            <br></br>
            UKSS Project: Optimizing shared services, we centralize <br></br>
            administrative functions to increase efficiency and reduce costs{" "}
            <br></br>
            across government departments.
            <br></br>
            <br></br>
            <br></br>
            MOD Project: Strengthening national security, we provide advanced{" "}
            <br></br>
            technological solutions to the Ministry of Defence, including cyber
            defense.
            <br></br>
            <br></br>
            <br></br>
            NHS Project: Improving healthcare, we develop innovative health IT
            solutions for the <br></br>National Health Service, enhancing
            patient care and outcomes.
            <br></br>
            <br></br>Breakfix Initiatives: Prioritizing swift issue resolution
            and proactive maintenance, <br></br> we ensure robust and secure IT
            systems for our clients. In all our endeavors, <br></br>we strive to
            create a brighter future through technology and make a positive
            impact in the world.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/projects.jpg" alt="" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default Category;
