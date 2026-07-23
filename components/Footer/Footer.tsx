import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brand}>SAK Study & Travel</p>
        <p className={styles.copy}>© {new Date().getFullYear()} SAK Study & Travel. All rights reserved.</p>
      </div>
    </footer>
  );
}
