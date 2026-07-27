export default function Services() {
  return (
    <section id="services" className="py-section-padding bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-8 scroll-reveal">
        <div className="text-center mb-12">
          <span className="text-primary-container font-label-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 mb-2">
            <span className="material-symbols-outlined text-sm">
              support_agent
            </span>{" "}
            Extra Support
          </span>
          <h2 className="font-headline-md text-3xl font-bold">
            Additional Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 border border-border-subtle group hover:border-primary-container hover:bg-[#1a1a2e]">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform duration-300">
              flight
            </span>
            <h3 className="font-label-bold text-lg mb-2 transition-colors duration-300 group-hover:text-white">Flight Booking</h3>
            <p className="text-sm text-secondary transition-colors duration-300 group-hover:text-white/80">
              Special student fares and extra baggage allowance.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 border border-border-subtle group hover:border-primary-container hover:bg-[#1a1a2e]">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform duration-300">
              apartment
            </span>
            <h3 className="font-label-bold text-lg mb-2 transition-colors duration-300 group-hover:text-white">Accommodation</h3>
            <p className="text-sm text-secondary transition-colors duration-300 group-hover:text-white/80">
              Assistance with on-campus and off-campus housing.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 border border-border-subtle group hover:border-primary-container hover:bg-[#1a1a2e]">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform duration-300">
              health_and_safety
            </span>
            <h3 className="font-label-bold text-lg mb-2 transition-colors duration-300 group-hover:text-white">Health Insurance</h3>
            <p className="text-sm text-secondary transition-colors duration-300 group-hover:text-white/80">
              Comprehensive student health cover for your stay.
            </p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-white p-6 rounded shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 border border-border-subtle group hover:border-primary-container hover:bg-[#1a1a2e]">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform duration-300">
              account_balance_wallet
            </span>
            <h3 className="font-label-bold text-lg mb-2 transition-colors duration-300 group-hover:text-white">Forex Services</h3>
            <p className="text-sm text-secondary transition-colors duration-300 group-hover:text-white/80">
              Best exchange rates and travel cards for students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
