import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const ErskineDeliveryHub = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>Erskine Delivery Hub</h1>
            <p className={styles.desc}>
              The Erskine Delivery Hub is a dynamic and innovative center that
              forms the backbone of Erskine's commitment to excellence in
              project execution and service delivery. Staffed with a team of
              highly skilled professionals and equipped with state-of-the-art
              technology, the Erskine Delivery Hub serves as a driving force
              behind the company's mission to provide cutting-edge solutions to
              its clients.
            </p>
            <div className={styles.author}>
              <Image
                src="/dxcprofile.jpg"
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>DXC Erskine Member</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/dxcwork.jpg"
              alt=""
              width={600} // Adjust the width as per your requirements
              height={400} // Adjust the height as per your requirements
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            With a customer-centric approach at its core, the Erskine Delivery
            Hub ensures seamless collaboration with clients, understanding their
            unique needs and challenges to tailor bespoke solutions. Leveraging
            a diverse skillset and a culture of continuous improvement, the hub
            consistently strives to exceed expectations, delivering projects on
            time and within budget. By fostering an environment of innovation
            and creativity, the Erskine Delivery Hub plays a pivotal role in
            reshaping industries and empowering organizations to adapt and
            thrive in a rapidly changing business landscape. As a center of
            excellence, the hub stands as a testament to Erskine's unwavering
            commitment to quality, reliability, and customer satisfaction,
            making it the go-to partner for businesses seeking transformative
            solutions and unparalleled service delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErskineDeliveryHub;
