import Image from "next/image";
import styles from "./page.module.css";
import hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Welcome to the DXC Technology Erskine Hub
          </h1>
          <p className={styles.desc}>
            A place for all staff at DXC Erskine, your go-to destination for all
            things related to DXC Technology at the Erskine location. This hub
            is designed to serve as a central platform where DXC Erskine staff
            can connect, collaborate, and access important resources.
          </p>
        </div>
        <div className={styles.item}></div>
        <Image src={hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
