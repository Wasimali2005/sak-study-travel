export default function Countries() {
  return (
    <section className="py-8 bg-white border-t border-border-subtle scroll-reveal">
      <div className="max-w-container-max mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Small Country 1 */}
          <div className="relative rounded overflow-hidden h-32 group cursor-pointer">
            <img
              alt="Australia"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="/images/country-australia.jpg"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white font-label-bold text-lg tracking-wide drop-shadow-md">
                Australia
              </span>
            </div>
          </div>
          {/* Small Country 2 */}
          <div className="relative rounded overflow-hidden h-32 group cursor-pointer">
            <img
              alt="Germany"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="/images/country-germany.jpg"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white font-label-bold text-lg tracking-wide drop-shadow-md">
                Germany
              </span>
            </div>
          </div>
          {/* Small Country 3 */}
          <div className="relative rounded overflow-hidden h-32 group cursor-pointer">
            <img
              alt="New Zealand"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="/images/country-nz.jpg"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white font-label-bold text-lg tracking-wide drop-shadow-md">
                New Zealand
              </span>
            </div>
          </div>
          {/* Small Country 4 */}
          <div className="relative rounded overflow-hidden h-32 group cursor-pointer">
            <img
              alt="Ireland"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="/images/country-ireland.jpg"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white font-label-bold text-lg tracking-wide drop-shadow-md">
                Ireland
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
