export default function Services() {
  return (
    <section className="py-section-padding bg-surface-container-low">
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
          <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow duration-300 border border-border-subtle group">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform duration-300">
              flight
            </span>
            <h3 className="font-label-bold text-lg mb-2">Flight Booking</h3>
            <p className="text-sm text-secondary">
              Special student fares and extra baggage allowance.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow duration-300 border border-border-subtle group">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform duration-300">
              apartment
            </span>
            <h3 className="font-label-bold text-lg mb-2">Accommodation</h3>
            <p className="text-sm text-secondary">
              Assistance with on-campus and off-campus housing.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow duration-300 border border-border-subtle group">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform duration-300">
              health_and_safety
            </span>
            <h3 className="font-label-bold text-lg mb-2">Health Insurance</h3>
            <p className="text-sm text-secondary">
              Comprehensive student health cover for your stay.
            </p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow duration-300 border border-border-subtle group">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4 group-hover:scale-110 transition-transform duration-300">
              account_balance_wallet
            </span>
            <h3 className="font-label-bold text-lg mb-2">Forex Services</h3>
            <p className="text-sm text-secondary">
              Best exchange rates and travel cards for students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
