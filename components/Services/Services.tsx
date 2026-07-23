import { services } from "@/data/services";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.header}>
        <p className={styles.kicker}>Our services</p>
        <h2 className={styles.title}>Everything you need for study abroad success.</h2>
      </div>
      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.id} className={styles.card}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardText}>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
