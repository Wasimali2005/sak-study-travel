export default function Team() {
  return (
    <section className="py-section-padding bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-8 scroll-reveal">
        <div className="text-center mb-12">
          <span className="text-primary-container font-label-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">groups</span> Our
            Experts
          </span>
          <h2 className="font-headline-md text-3xl font-bold">
            Meet Our Counselors
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="relative overflow-hidden h-64">
              <img
                alt="Team Member"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/team-1.jpg"
              />
              <div className="absolute inset-0 bg-deep-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-label-bold text-lg">Michael Chen</h3>
              <p className="text-sm text-secondary">
                Senior Admissions Consultant
              </p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="relative overflow-hidden h-64">
              <img
                alt="Team Member"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/team-2.jpg"
              />
              <div className="absolute inset-0 bg-deep-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-label-bold text-lg">Jessica Taylor</h3>
              <p className="text-sm text-secondary">Visa Specialist</p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="relative overflow-hidden h-64">
              <img
                alt="Team Member"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/team-3.jpg"
              />
              <div className="absolute inset-0 bg-deep-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-label-bold text-lg">David Rodriguez</h3>
              <p className="text-sm text-secondary">Financial Aid Advisor</p>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className="relative overflow-hidden h-64">
              {/* Assuming team-4.jpg exists */}
              <img
                alt="Team Member"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/images/team-4.jpg"
              />
              <div className="absolute inset-0 bg-deep-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-label-bold text-lg">Anita Patel</h3>
              <p className="text-sm text-secondary">Pre-Departure Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
