import Image from "next/image";
import { countries } from "@/data/countries";
import styles from "./Countries.module.css";

export default function Countries() {
  return (
    <section id="countries" className={styles.countries}>
      <div className={styles.header}>
        <p className={styles.kicker}>Popular countries</p>
        <h2 className={styles.title}>Study in the most sought-after destinations.</h2>
      </div>
      <div className={styles.grid}>
        {countries.map((country) => (
          <article key={country.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={country.image}
                alt={country.name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className={styles.image}
              />
            </div>
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>{country.name}</h3>
              <p className={styles.description}>{country.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
