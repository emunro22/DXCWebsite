import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 DXC Technology : Erskine Hub. All Rights Reserved</div>
      <div>
        <div className={styles.social}>
          <a
            href="https://www.facebook.com/search/top?q=dxc%20technology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/1.png"
              width={15}
              height={15}
              className={styles.icon}
              alt="DXC Facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/dxctechnology/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/2.png"
              width={15}
              height={15}
              className={styles.icon}
              alt="DXC Instagram"
            />
          </a>
          <a
            href="https://twitter.com/DXCTechnology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/3.png"
              width={15}
              height={15}
              className={styles.icon}
              alt="DXC Twitter"
            />
          </a>
          <a
            href="https://www.youtube.com/@DXCTechnology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/4.png"
              width={15}
              height={15}
              className={styles.icon}
              alt="DXC Youtube"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
