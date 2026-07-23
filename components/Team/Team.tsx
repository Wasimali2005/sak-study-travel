import Image from "next/image";
import teamMembers from "@/data/team";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section id="team" className={styles.team}>
      <div className={styles.header}>
        <p className={styles.kicker}>Meet the team</p>
        <h2 className={styles.title}>A dedicated team guiding your study abroad journey.</h2>
      </div>

      <div className={styles.grid}>
        {teamMembers.map((member) => (
          <article key={member.id} className={styles.card}>
            <div className={styles.avatar}>
              <Image src={member.image} alt={member.name} fill sizes="120px" />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
