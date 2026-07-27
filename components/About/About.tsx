export default function About() {
  return (
    <section id="about" className="py-section-padding bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-container-max mx-auto px-8 scroll-reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Stats & Image */}
          <div className="relative group">
            <div className="bg-white p-6 rounded shadow-[0_10px_30px_rgba(7,18,40,0.05)] w-48 absolute -top-8 -left-8 z-10 flex flex-col items-center justify-center border-l-4 border-primary-container transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-lg">
              <span className="font-display-lg text-primary-container">
                37
              </span>
              <span className="font-display-lg text-primary-container">+</span>
              <span className="font-label-bold text-on-surface uppercase text-center mt-2">
                Years of
                <br />
                Experience
              </span>
            </div>
            <div className="overflow-hidden rounded shadow-lg">
              <img
                className="w-full h-auto object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                alt="About our company"
                src="/images/about-img.jpg"
              />
            </div>
          </div>
          {/* Right: Content */}
          <div className="space-y-6">
            <span className="text-primary-container font-label-bold uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-sm animate-bounce">
                flight_takeoff
              </span>{" "}
              About Our Company
            </span>
            <h2 className="font-headline-md text-3xl font-bold">
              We Are About Expert Consultancy For Global Education
            </h2>
            <p className="font-body-md text-secondary">
              SAK Study & Travel is a premier education consultancy dedicated to
              guiding students through the complexities of international
              admissions and visa processes. Our track record speaks for itself.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0 transition-all duration-300 group-hover:bg-primary-container group-hover:text-white group-hover:scale-110">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-12">
                    school
                  </span>
                </div>
                <div>
                  <h3 className="font-label-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    University Admission Services
                  </h3>
                  <p className="font-body-md text-secondary text-sm">
                    Comprehensive support to secure your place in top-ranked
                    global universities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0 transition-all duration-300 group-hover:bg-primary-container group-hover:text-white group-hover:scale-110">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:-rotate-12">
                    description
                  </span>
                </div>
                <div>
                  <h3 className="font-label-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    Student Visa Assistance
                  </h3>
                  <p className="font-body-md text-secondary text-sm">
                    Expert guidance to ensure a smooth and successful visa
                    application process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
