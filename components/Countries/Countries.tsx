export default function Countries() {
  return (
    <section id="countries" className="py-24 bg-[#f8fafe] scroll-reveal">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-[#ff5e5e] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[16px]">map</span>{" "}
            GLOBAL REACH
          </span>
          <h2 className="font-headline-md text-3xl md:text-4xl font-extrabold text-slate-900">
            More Countries We Offer
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Country 1 */}
          <div className="relative rounded-sm overflow-hidden aspect-[4/3] md:aspect-[3/2] group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500">
            <img
              alt="Germany"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/images/country-germany.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-white font-label-bold text-xl tracking-wide drop-shadow-md">
                Germany
              </span>
            </div>
          </div>
          {/* Country 2 */}
          <div className="relative rounded-sm overflow-hidden aspect-[4/3] md:aspect-[3/2] group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500">
            <img
              alt="Australia"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/images/country-australia.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-white font-label-bold text-xl tracking-wide drop-shadow-md">
                Australia
              </span>
            </div>
          </div>
          {/* Country 3 */}
          <div className="relative rounded-sm overflow-hidden aspect-[4/3] md:aspect-[3/2] group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500">
            <img
              alt="New Zealand"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/images/country-nz.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-white font-label-bold text-xl tracking-wide drop-shadow-md">
                New Zealand
              </span>
            </div>
          </div>
          {/* Country 4 */}
          <div className="relative rounded-sm overflow-hidden aspect-[4/3] md:aspect-[3/2] group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500">
            <img
              alt="Ireland"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/images/country-ireland.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-white font-label-bold text-xl tracking-wide drop-shadow-md">
                Ireland
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
