import Image from "next/image";
import styles from "./About.module.css";

const highlights = [
  { value: "15+", label: "years of guidance" },
  { value: "98%", label: "visa approval success" },
  { value: "1000+", label: "students supported" },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <p className={styles.kicker}>About SAK Study & Travel</p>
        <h2 className={styles.heading}>We are more than a consultancy—we are your international education partner.</h2>
        <p className={styles.text}>
          We help ambitious students find the right university, visa pathway, and scholarship opportunities across the world’s most sought-after study destinations.
        </p>
        <ul className={styles.features}>
          <li>Personalized admission guidance for every student profile</li>
          <li>End-to-end visa support with document review and planning</li>
          <li>Scholarship search and application help that makes your goals achievable</li>
        </ul>
        <div className={styles.metrics}>
          {highlights.map((item) => (
            <div key={item.label} className={styles.metricCard}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/about-img.jpg"
          alt="Student discussing study options"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={styles.image}
        />
      </div>
    </section>
  );
}
