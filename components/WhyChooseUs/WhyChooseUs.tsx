export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-section-padding bg-surface">
      <div className="max-w-container-max mx-auto px-8 scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Mosaic */}
          <div className="relative grid grid-cols-2 gap-4 h-[500px]">
            <div className="relative rounded overflow-hidden shadow-lg translate-y-8 group">
              <img
                alt="Students"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/why-choose-1.jpg"
              />
            </div>
            <div className="relative rounded overflow-hidden shadow-lg -translate-y-8 group">
              <img
                alt="Campus"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/why-choose-2.jpg"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-32 h-32 bg-primary-container rounded-full mix-blend-multiply opacity-50 blur-2xl animate-pulse"></div>
            </div>
          </div>
          {/* Right: Content */}
          <div className="space-y-6">
            <span className="text-primary-container font-label-bold uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">verified</span>{" "}
              Why Us
            </span>
            <h2 className="font-headline-md text-3xl font-bold">
              Why Choose SAK Study & Travel for Your Education?
            </h2>
            <p className="font-body-md text-secondary mb-6">
              We don't just process applications; we mentor students to build
              successful careers. Our personalized approach ensures you find the
              perfect university fit.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-surface-container-highest rounded-full p-1 text-primary-container">
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-label-bold text-on-surface">
                    100% Transparent Process
                  </h4>
                  <p className="text-sm text-secondary">
                    No hidden fees or misleading information.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-surface-container-highest rounded-full p-1 text-primary-container">
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-label-bold text-on-surface">
                    Direct University Tie-ups
                  </h4>
                  <p className="text-sm text-secondary">
                    Partnerships with over 500 top-ranked institutions globally.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-surface-container-highest rounded-full p-1 text-primary-container">
                  <span className="material-symbols-outlined text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-label-bold text-on-surface">
                    End-to-End Support
                  </h4>
                  <p className="text-sm text-secondary">
                    From counseling to post-landing assistance.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
