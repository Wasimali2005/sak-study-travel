import Image from "next/image";
import testimonials from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[--color-surface] scroll-reveal">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[--color-primary-container] text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">star</span>{" "}
            Testimonials
          </span>
          <h2 className="text-3xl font-bold">Student Success Stories</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded shadow-sm border border-[--color-border-subtle] hover:shadow-md transition-shadow duration-300 relative"
            >
              {/* Decorative quote icon */}
              <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-[--color-primary-container]/20">
                format_quote
              </span>

              {/* Author */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[--color-surface-dim] rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-[--color-secondary]">
                    {t.university}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[--color-secondary] italic">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
