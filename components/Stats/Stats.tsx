import { stats } from "@/data/stats";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.header}>
        <p className={styles.kicker}>Results that speak for themselves</p>
        <h2 className={styles.title}>A high-touch process designed for real outcomes.</h2>
      </div>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div key={stat.id} className={styles.card}>
            <h3 className={styles.value}>{stat.value}</h3>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
