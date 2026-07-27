export default function Testimonials() {
  return (
    <section id="testimonials" className="py-section-padding bg-surface">
      <div className="max-w-container-max mx-auto px-8 scroll-reveal">
        <div className="text-center mb-12">
          <span className="text-primary-container font-label-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">star</span>{" "}
            Testimonials
          </span>
          <h2 className="font-headline-md text-3xl font-bold">
            Student Success Stories
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded shadow-sm border border-border-subtle hover:shadow-md transition-shadow duration-300 relative">
            <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-primary-container/20">
              format_quote
            </span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-surface-dim rounded-full overflow-hidden">
                <img
                  alt="Student"
                  className="w-full h-full object-cover"
                  src="/images/student-1.jpg"
                />
              </div>
              <div>
                <h4 className="font-label-bold text-lg">Sarah Jenkins</h4>
                <p className="text-sm text-secondary">
                  University of Toronto, Canada
                </p>
              </div>
            </div>
            <p className="font-body-md text-secondary italic">
              "SAK Study & Travel made my dream of studying in Canada a reality.
              Their team guided me through every step of the admission and visa
              process seamlessly."
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded shadow-sm border border-border-subtle hover:shadow-md transition-shadow duration-300 relative">
            <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-primary-container/20">
              format_quote
            </span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-surface-dim rounded-full overflow-hidden">
                <img
                  alt="Student"
                  className="w-full h-full object-cover"
                  src="/images/student-2.jpg"
                />
              </div>
              <div>
                <h4 className="font-label-bold text-lg">Ahmed Khan</h4>
                <p className="text-sm text-secondary">Oxford University, UK</p>
              </div>
            </div>
            <p className="font-body-md text-secondary italic">
              "The counselors at SAK Study & Travel are incredibly knowledgeable.
              They helped me secure a scholarship that covered 50% of my tuition
              fees."
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded shadow-sm border border-border-subtle hover:shadow-md transition-shadow duration-300 relative">
            <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-primary-container/20">
              format_quote
            </span>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-surface-dim rounded-full overflow-hidden">
                <img
                  alt="Student"
                  className="w-full h-full object-cover"
                  src="/images/student-3.jpg"
                />
              </div>
              <div>
                <h4 className="font-label-bold text-lg">Elena Rodriguez</h4>
                <p className="text-sm text-secondary">NYU, USA</p>
              </div>
            </div>
            <p className="font-body-md text-secondary italic">
              "From shortlisting universities to pre-departure briefing, the
              support was outstanding. Highly recommend their services to anyone
              planning to study abroad."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
