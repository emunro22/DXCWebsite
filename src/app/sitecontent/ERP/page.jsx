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
          <h1 className={styles.h1}>ERP & Transformation</h1>
          <br></br>
          <p className={styles.desc}>
            The ERP (Enterprise Resource Planning) system at DXC Erskine{" "}
            <br></br> is a powerful and comprehensive software solution that
            plays a <br></br>vital role in streamlining and optimizing business
            processes. <br></br>This sophisticated system integrates various key
            functions across <br></br>the organization, including finance, human
            resources, procurement, <br></br> inventory management, and customer
            relationship management, <br></br> among others.
            <br></br>
            <br></br>
            By consolidating data and providing real-time insights, <br></br>the
            ERP system empowers decision-makers with valuable information{" "}
            <br></br>to make informed choices and improve operational
            efficiency.<br></br> With its user-friendly interface and
            scalability, the ERP system at <br></br>DXC Erskine enables
            businesses to adapt to changing market dynamics <br></br>and stay
            competitive in today's fast-paced digital landscape. <br></br>
            Moreover, the system enhances collaboration, facilitates <br></br>{" "}
            data-driven decision-making, and promotes better resource
            utilization, <br></br>fostering a more agile and successful business
            environment.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/erpimage.png" alt="" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default Category;
