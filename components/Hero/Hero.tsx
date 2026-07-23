import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.kicker}>Study Abroad with Confidence</p>
        <h1 className={styles.title}>SAK Study & Travel helps you reach top universities worldwide.</h1>
        <p className={styles.subtitle}>
          Personalized admission guidance, visa consulting, and scholarship support for international students.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero-bg.jpg"
          alt="International students and travel scene"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={styles.heroImage}
          priority
        />
      </div>
    </section>
  );
}
