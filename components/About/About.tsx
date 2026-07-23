import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <p className={styles.kicker}>About SAK Study & Travel</p>
        <h2 className={styles.heading}>Your trusted partner for international education.</h2>
        <p className={styles.text}>
          We help ambitious students find the right university, visa pathway, and scholarship opportunities across top study destinations.
        </p>
        <ul className={styles.features}>
          <li>Personalized admission guidance</li>
          <li>End-to-end visa support</li>
          <li>Scholarship search and application help</li>
        </ul>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/about-img.jpg"
          alt="Student discussing study options"
          width={560}
          height={500}
          className={styles.image}
        />
      </div>
    </section>
  );
}
