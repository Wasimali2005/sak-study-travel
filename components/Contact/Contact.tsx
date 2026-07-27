"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_0yndnl6";
const EMAILJS_TEMPLATE_ID = "template_yigcv4r";
const EMAILJS_PUBLIC_KEY = "PllvjNCVWWytwBvlw";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!firstName || !email || !message) {
      setErrorMsg("Please fill in required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        subject: subject,
        message: message,
        reply_to: email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMsg("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section className="py-section-padding bg-surface-container-low relative">
        <div className="max-w-container-max mx-auto px-8 scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <span className="text-primary-container font-label-bold uppercase tracking-wider text-sm flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-sm">
                    support_agent
                  </span>{" "}
                  Contact Us
                </span>
                <h2 className="font-headline-md text-4xl font-bold mb-4">
                  Get In Touch With Our Experts
                </h2>
                <p className="font-body-md text-secondary">
                  Have questions about your study abroad journey? Reach out to
                  us, and our team will get back to you shortly.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-lg mb-1">
                      Office Location
                    </h4>
                    <p className="text-sm text-secondary">
                      123 Global Edu Street, Suite 500<br />
                      New York, NY 10001, USA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-sm text-secondary">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-lg mb-1">
                      Email Address
                    </h4>
                    <p className="text-sm text-secondary">
                      info@sakstudytravel.com<br />
                      support@sakstudytravel.com
                    </p>
                  </div>
                </div>
              </div>
              {/* Simple Map Placeholder */}
              <div className="w-full h-48 bg-surface-dim rounded overflow-hidden shadow-sm relative group cursor-pointer">
                <img
                  alt="Map location"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  src="/images/map.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-4xl drop-shadow-md group-hover:scale-125 transition-transform duration-300">
                    location_on
                  </span>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white p-8 rounded shadow-lg">
              <h3 className="font-headline-md text-2xl font-bold mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-label-bold mb-2 text-on-surface"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full border-border-subtle rounded focus:border-primary-container focus:ring-primary-container bg-surface-container-lowest"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-label-bold mb-2 text-on-surface"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full border-border-subtle rounded focus:border-primary-container focus:ring-primary-container bg-surface-container-lowest"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-label-bold mb-2 text-on-surface"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full border-border-subtle rounded focus:border-primary-container focus:ring-primary-container bg-surface-container-lowest"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-label-bold mb-2 text-on-surface"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <select
                    className="w-full border-border-subtle rounded focus:border-primary-container focus:ring-primary-container bg-surface-container-lowest"
                    id="subject"
                    name="subject"
                  >
                    <option>University Admission</option>
                    <option>Visa Assistance</option>
                    <option>Scholarship Query</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-label-bold mb-2 text-on-surface"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full border-border-subtle rounded focus:border-primary-container focus:ring-primary-container bg-surface-container-lowest"
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={4}
                    required
                  ></textarea>
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
                )}
                {isSuccess && (
                  <p className="text-green-600 text-sm font-medium">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                )}

                <button
                  className="w-full bg-primary-container text-white px-8 py-3 rounded font-label-bold hover:bg-primary transition-all duration-300 shadow-[0_10px_30px_rgba(225,36,36,0.3)] hover:shadow-[0_15px_40px_rgba(225,36,36,0.5)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-container text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>
        <div className="max-w-container-max mx-auto px-8 text-center relative z-10 scroll-reveal">
          <h2 className="font-headline-md text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="font-body-md text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free counseling session with our experts today and take the
            first step towards your global education.
          </p>
          <button className="bg-white text-primary-container px-10 py-4 rounded font-label-bold text-lg hover:bg-surface transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg relative overflow-hidden group">
            <span className="relative z-10">Book Free Consultation</span>
            <div className="absolute inset-0 bg-surface scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
          </button>
        </div>
      </section>
    </>
  );
}
