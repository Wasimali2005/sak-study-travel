import Image from "next/image";
import destinations from "@/data/destinations";
import styles from "./Destinations.module.css";

export default function Destinations() {
  return (
    <section id="destinations" className={styles.destinations}>
      <div className={styles.header}>
        <p className={styles.kicker}>Top destinations</p>
        <h2 className={styles.title}>Study in the world’s most sought-after countries.</h2>
      </div>
      <div className={styles.grid}>
        {destinations.map((destination) => (
          <article key={destination.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={destination.image}
                alt={destination.title}
                width={420}
                height={300}
                className={styles.image}
              />
            </div>
            <div className={styles.body}>
              <p className={styles.country}>{destination.country}</p>
              <h3 className={styles.cardTitle}>{destination.title}</h3>
              <p className={styles.description}>{destination.description}</p>
              <span className={styles.tag}>{destination.universitiesCount} universities</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
