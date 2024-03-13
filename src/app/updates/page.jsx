import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Updates = async () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/updates/itsaknockout" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/knockout.jpg"
            alt=""
            width={350}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>It's a Knockout!</h1>
          <p className={styles.desc}>
            Tomorrow we are holding an on-site “thank you” event for the MSBD
            team on the Erskine campus. There will be street food vans, a
            charity raffle and a “It’s a knockout” game.{" "}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Updates;
