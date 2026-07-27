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
      <section id="contact" className="py-section-padding bg-surface-container-low relative">
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
                <a href="https://maps.app.goo.gl/CRy43GJPC4nXtCwo6?g_st=aw" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-lg mb-1 group-hover:text-primary-container transition-colors">
                      Office Address
                    </h4>
                    <p className="text-sm text-secondary">
                      Office No. 322 (A), Block D, 3rd Floor,<br />
                      Sami Tower, Ring Road, Peshawar
                    </p>
                  </div>
                </a>
                
                <a href="mailto:info@tech4edges.com" className="flex items-start gap-4 group hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">mail</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-lg mb-1 group-hover:text-primary-container transition-colors">
                      Email
                    </h4>
                    <p className="text-sm text-secondary">
                      info@tech4edges.com
                    </p>
                  </div>
                </a>

                <a href="https://wa.me/923374005515" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">forum</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-lg mb-1 group-hover:text-primary-container transition-colors">
                      WhatsApp Number
                    </h4>
                    <p className="text-sm text-secondary">
                      03374005515
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined">share</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-lg mb-1">
                      Social Media
                    </h4>
                    <div className="flex gap-4 mt-2">
                      <a href="https://www.facebook.com/share/1857BNt9zY/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center text-secondary hover:text-white hover:bg-primary-container transition-all duration-300 hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/tech4edgesofficial?igsh=YzZoNnVubHkzMnlv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center text-secondary hover:text-white hover:bg-primary-container transition-all duration-300 hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.036 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/company/tech4edges/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center text-secondary hover:text-white hover:bg-primary-container transition-all duration-300 hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Simple Map Placeholder */}
              <a href="https://maps.app.goo.gl/CRy43GJPC4nXtCwo6?g_st=aw" target="_blank" rel="noopener noreferrer" className="block w-full h-48 bg-surface-dim rounded overflow-hidden shadow-sm relative group cursor-pointer mt-8">
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
              </a>
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
                      className="w-full border border-gray-300 rounded px-4 py-2.5 focus:border-primary-container focus:ring-1 focus:ring-primary-container hover:border-primary-container transition-all outline-none bg-surface-container-lowest"
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
                      className="w-full border border-gray-300 rounded px-4 py-2.5 focus:border-primary-container focus:ring-1 focus:ring-primary-container hover:border-primary-container transition-all outline-none bg-surface-container-lowest"
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
                    className="w-full border border-gray-300 rounded px-4 py-2.5 focus:border-primary-container focus:ring-1 focus:ring-primary-container hover:border-primary-container transition-all outline-none bg-surface-container-lowest"
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
                    className="w-full border border-gray-300 rounded px-4 py-2.5 focus:border-primary-container focus:ring-1 focus:ring-primary-container hover:border-primary-container transition-all outline-none bg-surface-container-lowest"
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
                    className="w-full border border-gray-300 rounded px-4 py-2.5 focus:border-primary-container focus:ring-1 focus:ring-primary-container hover:border-primary-container transition-all outline-none bg-surface-container-lowest"
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
