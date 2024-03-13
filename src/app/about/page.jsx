import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/discussion.png"
          alt=""
          className={styles.img}
          fill={true}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>DXC Technology: Erskine</h1>
          <h2 className={styles.imgDesc}>
            A central destination where employees can connect
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            DXC Technology Erskine represents a dynamic and inclusive global
            community, comprising passionate tech enthusiasts who share a common
            goal: to revolutionize the digital landscape and empower businesses
            with transformative solutions. As a leading IT services and
            solutions provider, we leverage our extensive expertise to craft
            tailored strategies that address the unique challenges faced by our
            clients across various industries.
            <br />
            <br />
            Our collaborative approach fosters a culture of innovation, where
            diverse perspectives and collective intelligence come together to
            pave the way for groundbreaking advancements in technology. With
            unwavering commitment, we strive to create meaningful connections
            and empower our clients to thrive in the ever-evolving digital age.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            At DXC Technology Erskine, we offer a diverse range of IT services
            and solutions, including:
            <br />
            <br />- Digital Transformation
            <br />
            <br />- Cloud Solutions
            <br />
            <br />- Data Analytics
            <br />
            <br />
            - Cybersecurity
            <br />
            <br />
            Our dedicated team collaborates with clients to drive success in the
            digital era, delivering cutting-edge solutions and tangible results.
            Together, we empower businesses to thrive and embrace opportunities
            for growth.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
