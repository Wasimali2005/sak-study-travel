"use client";

import { useState } from "react";
import faqItems from "@/data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section className="py-20 bg-white scroll-reveal">
      <div className="max-w-3xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-[--color-border-subtle] rounded group"
              >
                <button
                  className="w-full text-left px-6 py-4 font-bold flex justify-between items-center hover:text-[--color-primary] transition-colors focus:outline-none"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-4 text-[--color-secondary] text-sm">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
