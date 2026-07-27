"use client";

import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_0yndnl6";
const EMAILJS_TEMPLATE_ID = "template_yigcv4r";
const EMAILJS_PUBLIC_KEY = "PllvjNCVWWytwBvlw";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "University Admission",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.firstName || !form.email || !form.message) {
      return; // simple guard — fields required
    }
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${form.firstName} ${form.lastName}`.trim(),
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "University Admission",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border border-[--color-border-subtle] rounded px-4 py-2.5 bg-white focus:outline-none focus:border-[--color-primary-container] focus:ring-1 focus:ring-[--color-primary-container] text-sm transition-colors";

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-[--color-surface-container-low] relative scroll-reveal"
      >
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div>
                <span className="text-[--color-primary-container] text-sm font-bold uppercase tracking-wider flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-sm">
                    support_agent
                  </span>{" "}
                  Contact Us
                </span>
                <h2 className="text-4xl font-bold mb-4">
                  Get In Touch With Our Experts
                </h2>
                <p className="text-[--color-secondary]">
                  Have questions about your study abroad journey? Reach out to
                  us, and our team will get back to you shortly.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-[--color-primary-container] shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Location</h4>
                    <p className="text-sm text-[--color-secondary]">
                      123 Global Edu Street, Suite 500
                      <br />
                      New York, NY 10001, USA
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-[--color-primary-container] shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-sm text-[--color-secondary]">
                      +1 (555) 123-4567
                      <br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-[--color-primary-container] shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Address</h4>
                    <p className="text-sm text-[--color-secondary]">
                      info@sakstudy.com
                      <br />
                      support@sakstudy.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="w-full h-48 bg-[--color-surface-dim] rounded overflow-hidden shadow-sm relative group cursor-pointer">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9eQQRQP_JCv0yWW6-Ya3zwTozldbj-9gswFqBxqHW_I5Js7XpoGrSukEg1JmXPBsJqxyxxZ8pQ-Ru-rSHFS0CHDgIVjxDELOpIE387br76DH5XUaHjHmiRRSzD9ZKYKXuWziN0c9pEpX2slyg6t1g4j31nNNno9DEyNwOwY3-nUk8ptu9cNjQEV8NNWKoJuD3n4lC6TtSugOsKz2cyDTvKpTt_mVAp8xp8_T0v8l8gLOLdLzerML4"
                  alt="Map location"
                  fill
                  className="object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[--color-primary-container] text-4xl drop-shadow-md group-hover:scale-125 transition-transform duration-300">
                    location_on
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-8 rounded shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-bold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={form.firstName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-bold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option>University Admission</option>
                    <option>Visa Assistance</option>
                    <option>Scholarship Query</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                {status === "success" && (
                  <p className="text-[--color-status-success] text-sm font-bold">
                    ✓ Message sent! We&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-[--color-error] text-sm font-bold">
                    ✗ Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="w-full bg-[--color-primary-container] text-white px-8 py-3 rounded font-bold text-sm hover:bg-[--color-primary] transition-all duration-300 shadow-[0_10px_30px_rgba(225,36,36,0.3)] hover:shadow-[0_15px_40px_rgba(225,36,36,0.5)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[--color-primary-container] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
        <div className="max-w-[1280px] mx-auto px-8 text-center relative z-10 scroll-reveal">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free counseling session with our experts today and take the
            first step towards your global education.
          </p>
          <button className="bg-white text-[--color-primary-container] px-10 py-4 rounded font-bold text-lg hover:bg-[--color-surface] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg relative overflow-hidden group">
            <span className="relative z-10">Book Free Consultation</span>
          </button>
        </div>
      </section>
    </>
  );
}
