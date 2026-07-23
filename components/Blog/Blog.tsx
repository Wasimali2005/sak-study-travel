import Image from "next/image";
import blogPosts from "@/data/blog";
import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.header}>
        <p className={styles.kicker}>Resources</p>
        <h2 className={styles.title}>Helpful articles for international students.</h2>
      </div>

      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className={styles.body}>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <a href={post.href} className={styles.link}>
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
