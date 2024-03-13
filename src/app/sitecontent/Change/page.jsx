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
          <h1 className={styles.h1}>Change at Erskine</h1>
          <br></br>
          <p className={styles.desc}>
            DXC Technology Erskine is poised to lead transformative change in
            the digital landscape. With a steadfast commitment to innovation and
            cutting-edge solutions, we are on a mission to redefine the
            possibilities for businesses across various sectors. Embracing
            emerging technologies, data-driven strategies, and collaborative
            approaches, we are empowering organizations to thrive in the
            ever-evolving digital era.
            <br></br>
            <br></br>
            <br></br> As we continue to shape the future, our focus remains on
            fostering sustainability, driving environmental consciousness, and
            revolutionizing healthcare to enhance the overall well-being of
            communities. Additionally, our dedication to strengthening national
            security through advanced technological solutions and cyber defense
            initiatives underscores our unwavering commitment to safeguarding
            nations.
            <br></br>
            <br></br>
            DXC Erskine is committed to empowering the workforce of tomorrow
            through our Early Careers Programme, nurturing young talent and
            fostering a culture of continuous learning and growth. Our agile
            approach to shared services and efficient data integration further
            drives efficiency and cost optimization for government departments.
            <br></br>
            <br></br>
            Through our diverse portfolio of projects, including breakthrough
            defense initiatives, transformative ERP projects, and impactful NHS
            collaborations, we are making a positive impact on the world and
            creating a brighter future. At DXC Technology Erskine, change is not
            just a vision; it's a reality we embrace wholeheartedly, pushing the
            boundaries of what's possible to create lasting, meaningful change
            that benefits society at large.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/projects.jpeg" alt="" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default Category;
