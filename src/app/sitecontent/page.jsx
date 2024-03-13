import React from "react";
import styles from "./page.module.css";

const SiteContent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>What Are We Up To?</h1>
      <div className={styles.items}>
        <a href="/sitecontent/Projects" className={styles.item}>
          <span className={styles.title}>Projects</span>
        </a>
        <a href="/sitecontent/EarlyCareers" className={styles.item}>
          <span className={styles.title}>Early Careers Programme</span>
        </a>
        <a href="/sitecontent/ERP" className={styles.item}>
          <span className={styles.title}>ERP Project</span>
        </a>
        <a href="/sitecontent/Change" className={styles.item}>
          <span className={styles.title}>Change</span>
        </a>
      </div>
    </div>
  );
};

export default SiteContent;
