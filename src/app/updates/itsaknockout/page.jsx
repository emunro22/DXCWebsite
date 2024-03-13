import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const UpdatePosts = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>It's A Knockout!</h1>
            <p className={styles.desc}>
              Just a reminder of the MSBD Thank You Event on the 21st July. This
              event is being funded by the DXC accounts to say a Big Thank You
              everyone for your hard work and we are looking forward to seeing
              as many of you there as possible!
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
              src="/itsknockout.jpg"
              alt=""
              width={600} // Adjust the width as per your requirements
              height={400} // Adjust the height as per your requirements
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            All are welcome - you can attend and join in the games or come
            along, spectate (and cheer people on!) + just enjoy the food and
            fun! We will also be holding a charity raffle on the day for the
            Veteran hospital. If you haven’t done so already please respond to
            the original invite and let us know if you will be participating or
            spectating in the games. Please also let me know any dietary
            requirements you may have so we can ensure the food vendors cater
            for all. If you change your mind on or before the event with regards
            to participating in the games that is no problem – let us know and
            we can assign you a team on the day. There will be prizes for
            winners! We would love to see some interaction between departments
            with the teams - however if you would be more comfortable teaming up
            with specific people then that's absolutely fine just let us know
            Any questions please contact Megan Docherty! Thanks
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdatePosts;
