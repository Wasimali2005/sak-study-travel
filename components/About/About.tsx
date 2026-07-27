import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[--color-surface] relative overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[--color-primary-container]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1280px] mx-auto px-8 scroll-reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image + Floating Stat */}
          <div className="relative group">
            {/* Floating stat card */}
            <div className="bg-white p-6 rounded shadow-[0_10px_30px_rgba(7,18,40,0.05)] w-44 absolute -top-8 -left-8 z-10 flex flex-col items-center justify-center border-l-4 border-[--color-primary-container] transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-lg">
              <span className="text-4xl font-extrabold text-[--color-primary-container]">
                37
              </span>
              <span className="text-[--color-primary-container] font-extrabold text-2xl -mt-2">
                +
              </span>
              <span className="text-xs font-bold text-[--color-on-surface] uppercase text-center mt-2 tracking-wide">
                Years of
                <br />
                Experience
              </span>
            </div>
            <div className="overflow-hidden rounded shadow-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida/AP1WRLuSHlY2mDvViX6-2tJwnoHa8lW2pWLMs9RhmYIfpVGAUyFVqRw08CmO8dSePfTvPBVaIzysInKFCSuquKjiZVBQyA2sRdsMzN97xz_0G-crWfrR9u7pviufnLq9uJXDcf707ks1BsNXlw6QzjVElrLTcRkfkQH99yS2eJBBPdKXF_1RDk6OKhOeCRfgbVHolf4vCf4hP78ZvRwm10r841beQ9EW1IolAQW3nXPjGd5ybTwHtkUvTyhdl6c"
                alt="Study abroad consultant with students"
                width={600}
                height={400}
                className="w-full h-auto object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <span className="text-[--color-primary-container] text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-sm animate-bounce">
                flight_takeoff
              </span>{" "}
              About Our Company
            </span>
            <h2 className="text-3xl font-bold">
              We Are About Expert Consultancy For Global Education
            </h2>
            <p className="text-[--color-secondary]">
              SAK Study &amp; Travel is a premier education consultancy
              dedicated to guiding students through the complexities of
              international admissions and visa processes. Our track record
              speaks for itself.
            </p>

            <div className="space-y-4 pt-4">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[--color-primary-container]/10 flex items-center justify-center text-[--color-primary-container] shrink-0 transition-all duration-300 group-hover:bg-[--color-primary-container] group-hover:text-white group-hover:scale-110">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-12">
                    school
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-[--color-primary] transition-colors">
                    University Admission Services
                  </h3>
                  <p className="text-[--color-secondary] text-sm">
                    Comprehensive support to secure your place in top-ranked
                    global universities.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[--color-primary-container]/10 flex items-center justify-center text-[--color-primary-container] shrink-0 transition-all duration-300 group-hover:bg-[--color-primary-container] group-hover:text-white group-hover:scale-110">
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:-rotate-12">
                    description
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-[--color-primary] transition-colors">
                    Student Visa Assistance
                  </h3>
                  <p className="text-[--color-secondary] text-sm">
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
