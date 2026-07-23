"use client";

import { FormEvent, useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import styles from "./Contact.module.css";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    setStatus("sending");
    setFeedback("");

    try {
      await sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY"
      );

      setStatus("success");
      setFeedback("Thank you! Your message has been sent.");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback(
        "Something went wrong while sending your message. Please try again later."
      );
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <div className={styles.headerBlock}>
          <p className={styles.kicker}>Get in touch</p>
          <h2 className={styles.title}>Start your application with SAK Study & Travel today.</h2>
          <p className={styles.text}>
            Contact us for a free consultation, visa support, and application guidance.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <label className={styles.label} htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              name="from_name"
              className={styles.input}
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className={styles.row}>
            <label className={styles.label} htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              name="reply_to"
              className={styles.input}
              type="email"
              placeholder="example@email.com"
              required
            />
          </div>

          <div className={styles.row}>
            <label className={styles.label} htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              className={styles.input}
              type="text"
              placeholder="What would you like support with?"
              required
            />
          </div>

          <div className={styles.row}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              rows={5}
              placeholder="Tell us about your study plans, destination, and questions."
              required
            />
          </div>

          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.button}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            <a href="mailto:info@sakstudytravel.com" className={styles.link}>
              Or email us directly
            </a>
          </div>

          {feedback ? (
            <p
              className={
                status === "success" ? styles.feedbackSuccess : styles.feedbackError
              }
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
