import faqItems from "@/data/faq";
import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.header}>
        <p className={styles.kicker}>Common questions</p>
        <h2 className={styles.title}>Answers to your most asked study abroad questions.</h2>
      </div>
      <div className={styles.list}>
        {faqItems.map((item) => (
          <article key={item.id} className={styles.item}>
            <h3 className={styles.question}>{item.question}</h3>
            <p className={styles.answer}>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
