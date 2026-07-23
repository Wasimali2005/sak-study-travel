import styles from "./HowItWorks.module.css";

const steps = [
  {
    title: "Discover your path",
    description: "Choose the right destination and program aligned with your goals.",
  },
  {
    title: "Prepare documents",
    description: "Get support for applications, transcripts, and visa paperwork.",
  },
  {
    title: "Submit and settle",
    description: "Receive guidance through final acceptance, visa issuance, and travel prep.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.header}>
        <p className={styles.kicker}>How it works</p>
        <h2 className={styles.title}>A simple process for international study success.</h2>
      </div>
      <div className={styles.grid}>
        {steps.map((step, index) => (
          <article key={step.title} className={styles.card}>
            <span className={styles.step}>{index + 1}</span>
            <h3 className={styles.cardTitle}>{step.title}</h3>
            <p className={styles.cardText}>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
