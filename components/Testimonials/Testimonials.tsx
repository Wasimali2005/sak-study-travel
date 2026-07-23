import Image from "next/image";
import testimonials from "@/data/testimonials";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.header}>
        <p className={styles.kicker}>Student stories</p>
        <h2 className={styles.title}>Trusted support from students who made it abroad.</h2>
      </div>

      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className={styles.card}>
            <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
            <div className={styles.meta}>
              <div className={styles.avatar}>
                <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="80px" />
              </div>
              <div>
                <p className={styles.name}>{testimonial.name}</p>
                <p className={styles.role}>{testimonial.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
