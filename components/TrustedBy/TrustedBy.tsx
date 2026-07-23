import Image from "next/image";
import styles from "./TrustedBy.module.css";

const brandLogos = [
  "/images/logo.svg",
  "/images/vercel.svg",
  "/images/next.svg",
  "/images/window.svg",
];

export default function TrustedBy() {
  return (
    <section className={styles.trustedBy} aria-labelledby="trusted-by-heading">
      <div className={styles.inner}>
        <p id="trusted-by-heading" className={styles.label}>
          Trusted by students worldwide
        </p>
        <div className={styles.grid}>
          {brandLogos.map((logo) => (
            <div key={logo} className={styles.logoCard}>
              <Image src={logo} alt="Trusted brand logo" width={120} height={40} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
