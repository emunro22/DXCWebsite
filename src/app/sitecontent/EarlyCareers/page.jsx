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
          <h1 h1 className={styles.h1}>
            Early Careers Programme
          </h1>
          <br></br>
          <p className={styles.desc}>
            Our 2-year academic programmes are designed to broaden and <br></br>
            deepen your knowledge and shape your future with us. A percentage{" "}
            <br></br> of your hours are on the job, and the remainder of{" "}
            <br></br> your time is dedicated to gaining practical experience and
            formal <br></br> qualifications. These are available to everyone on
            the Early Careers <br></br>Programme. As a virtual first company,
            the vast majority of our roles <br></br> are fulfilled remotely,
            however we do expect all our Early Careers <br></br>participants to
            have the majority of their time on one of our key sites, <br></br>
            closely engaging with their managers and teams and are also
            encouraged <br></br>to travel to meet customer needs. We also
            encourage regular collaboration <br></br>sessions through networking
            and community events. There is support <br></br>available for you
            throughout the programme, including mentoring to help you<br></br>{" "}
            get the most from your role and ensure you have a valuable
            experience. <br></br>In addition, you will have a dedicated manager
            who will work closely with you <br></br>up until you transition from
            the programme into mainstream employment with DXC.<br></br> You will
            also be assigned a buddy, a team-lead and an Early Careers group,
            all of <br></br>whom are there to help support you and your journey.{" "}
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/careers.jpg" alt="" fill={true} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.title}>
          <h1 h1 className={styles.h1}>
            DXC In The Community!
          </h1>
          <br></br>
          <p className={styles.desc}>
            DXC Technology encourages members of our early careers programme{" "}
            <br></br>to attend and support charity events and initiatives. DXC's
            graduates and <br></br>apprentices have already supported several
            charitable initiatives, <br></br>including the Manchester United
            Foundation and Walking with the Wounded. <br></br> These events have
            provided opportunities for our early careers programme <br></br>
            members to interact with colleagues, develop team-building skills,
            and contribute <br></br>to worthy causes. Our programme aims to
            foster a culture of social responsibility <br></br> and community
            engagement among its employees.
          </p>
        </div>
        <div className={styles.imgContainer2}>
          <Image src="/dxcmanu.jpg" alt="" fill={true} />
        </div>
      </div>
    </div>
  );
};

export default Category;
