import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <p className={styles.kicker}>Get in touch</p>
        <h2 className={styles.title}>Start your application with SAK Study & Travel today.</h2>
        <p className={styles.text}>
          Contact us for a free consultation, visa support, and application guidance.
        </p>
        <div className={styles.actions}>
          <a href="mailto:info@sakstudytravel.com" className={styles.button}>
            Email us
          </a>
          <a href="tel:+1234567890" className={styles.link}>
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
