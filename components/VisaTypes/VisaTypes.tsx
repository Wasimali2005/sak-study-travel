import { visaTypes } from "@/data/visaTypes";
import styles from "./VisaTypes.module.css";

export default function VisaTypes() {
  return (
    <section id="visa" className={styles.visaTypes}>
      <div className={styles.header}>
        <p className={styles.kicker}>Visa support</p>
        <h2 className={styles.title}>Visa pathways tailored to your study goals.</h2>
      </div>
      <div className={styles.grid}>
        {visaTypes.map((visa) => (
          <article key={visa.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{visa.title}</h3>
            <p className={styles.cardText}>{visa.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
