import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Daily News </h1>
        <p className={styles.desc}>
          Stay updated with the latest headlines, in-depth analysis, and breaking news from around the world. Your source for reliable and timely information.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Read More</button>
          <button className={styles.button}>Subscribe</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;

