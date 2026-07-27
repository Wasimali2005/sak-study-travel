"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-section-padding bg-white">
      <div className="max-w-3xl mx-auto px-8 scroll-reveal">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-3xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="border border-border-subtle rounded group">
            <button
              onClick={() => toggleFaq(0)}
              className="w-full text-left px-6 py-4 font-label-bold flex justify-between items-center hover:text-primary transition-colors focus:outline-none"
            >
              <span>What are the basic requirements to study abroad?</span>
              <span
                className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-180"
                style={{
                  transform: openIndex === 0 ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                expand_more
              </span>
            </button>
            <div
              className={`px-6 pb-4 text-secondary text-sm ${
                openIndex === 0 ? "block" : "hidden"
              }`}
            >
              Requirements vary by country and program, but generally include
              academic transcripts, language proficiency test scores
              (IELTS/TOEFL), statement of purpose, and letters of recommendation.
            </div>
          </div>
          {/* FAQ Item 2 */}
          <div className="border border-border-subtle rounded group">
            <button
              onClick={() => toggleFaq(1)}
              className="w-full text-left px-6 py-4 font-label-bold flex justify-between items-center hover:text-primary transition-colors focus:outline-none"
            >
              <span>Do you help with scholarships?</span>
              <span
                className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-180"
                style={{
                  transform: openIndex === 1 ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                expand_more
              </span>
            </button>
            <div
              className={`px-6 pb-4 text-secondary text-sm ${
                openIndex === 1 ? "block" : "hidden"
              }`}
            >
              Yes, we provide comprehensive guidance on available scholarships,
              grants, and financial aid options, and assist with the application
              process.
            </div>
          </div>
          {/* FAQ Item 3 */}
          <div className="border border-border-subtle rounded group">
            <button
              onClick={() => toggleFaq(2)}
              className="w-full text-left px-6 py-4 font-label-bold flex justify-between items-center hover:text-primary transition-colors focus:outline-none"
            >
              <span>How long does the visa process take?</span>
              <span
                className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-180"
                style={{
                  transform: openIndex === 2 ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                expand_more
              </span>
            </button>
            <div
              className={`px-6 pb-4 text-secondary text-sm ${
                openIndex === 2 ? "block" : "hidden"
              }`}
            >
              Visa processing times depend on the destination country and time of
              year. On average, it takes 3 to 8 weeks. We recommend starting the
              process as early as possible.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
