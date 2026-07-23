import styles from "./WhyChooseUs.module.css";

const reasons = [
  "Personalized study plans tailored to your goals.",
  "Expert visa consulting and document review.",
  "Trusted by students and families worldwide.",
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.intro}>
        <p className={styles.kicker}>Why choose us</p>
        <h2 className={styles.title}>A trusted guide throughout your international study journey.</h2>
      </div>
      <ul className={styles.list}>
        {reasons.map((reason) => (
          <li key={reason} className={styles.item}>
            <span className={styles.check}>✓</span>
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
