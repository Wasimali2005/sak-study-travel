import Link from "next/link";
import { navLinks } from "@/data/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="#home" className={styles.brandLink}>
          <span className={styles.brandMark}>S</span>
          <span>SAK Study & Travel</span>
        </Link>
      </div>
      <nav className={styles.navigation} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
