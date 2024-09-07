import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us - Daily News Hub",
  description: "Learn more about Daily News Hub, our mission, and our commitment to delivering reliable news.",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>
          Delivering Truthful and Timely News to You.
        </h1>
        <p className={styles.desc}>
          At Daily News Hub, we are committed to providing reliable and up-to-date news coverage from around the world. Our team of dedicated journalists and editors work tirelessly to bring you stories that matter, from breaking news to in-depth analysis. We believe in the power of information and strive to present it with accuracy and integrity.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>15+</h1>
            <p>Years of Journalism</p>
          </div>
          <div className={styles.box}>
            <h1>1M+</h1>
            <p>Daily Readers</p>
          </div>
          <div className={styles.box}>
            <h1>50+</h1>
            <p>Countries Covered</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
      <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
