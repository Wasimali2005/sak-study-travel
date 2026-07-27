export default function VisaTypes() {
  return (
    <section className="py-section-padding bg-surface-container-low relative">
      <div className="max-w-container-max mx-auto px-8 scroll-reveal">
        <div className="text-center mb-12">
          <span className="text-primary-container font-label-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">public</span>{" "}
            Visas
          </span>
          <h2 className="font-headline-md text-3xl font-bold">
            Varieties of Visas
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Visa Card 1 */}
          <div className="bg-white p-8 rounded shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-primary-container group text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h3 className="font-label-bold text-lg mb-3">Student Visa</h3>
            <p className="text-sm text-secondary">
              Complete assistance for university students, including F1, Tier 4,
              and Study Permits.
            </p>
          </div>
          {/* Visa Card 2 */}
          <div className="bg-white p-8 rounded shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-primary-container group text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">work</span>
            </div>
            <h3 className="font-label-bold text-lg mb-3">Post-Study Work Visa</h3>
            <p className="text-sm text-secondary">
              Guidance on securing work permits after completing your degree
              abroad.
            </p>
          </div>
          {/* Visa Card 3 */}
          <div className="bg-white p-8 rounded shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-primary-container group text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">tour</span>
            </div>
            <h3 className="font-label-bold text-lg mb-3">Tourist Visa</h3>
            <p className="text-sm text-secondary">
              Hassle-free visitor visas for parents attending graduation
              ceremonies.
            </p>
          </div>
          {/* Visa Card 4 */}
          <div className="bg-white p-8 rounded shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-primary-container group text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-6 group-hover:bg-primary-container group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">
                family_restroom
              </span>
            </div>
            <h3 className="font-label-bold text-lg mb-3">Dependent Visa</h3>
            <p className="text-sm text-secondary">
              Reunite with your family through expert dependent visa application
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
