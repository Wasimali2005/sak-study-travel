import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

const highlights = ["98% visa success", "10+ study destinations", "1:1 counseling"];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.pill}>Trusted by ambitious students worldwide</p>
        <h1 className={styles.title}>Study abroad with expert guidance from start to finish.</h1>
        <p className={styles.subtitle}>
          From university selection and scholarship planning to visa support and pre-departure readiness, SAK Study & Travel helps you move forward with confidence.
        </p>

        <div className={styles.actions}>
          <Link href="#contact" className={styles.primaryButton}>
            Book a free consultation
          </Link>
          <Link href="#destinations" className={styles.secondaryButton}>
            Explore destinations
          </Link>
        </div>

        <div className={styles.highlights}>
          {highlights.map((item) => (
            <span key={item} className={styles.highlight}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.imageCard}>
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
        <div className={styles.overlayCard}>
          <p className={styles.overlayLabel}>Your global education partner</p>
          <p className={styles.overlayText}>
            Personalized admissions, visa prep, and scholarship strategy for the world’s top universities.
          </p>
        </div>
      </div>
    </section>
  );
}
