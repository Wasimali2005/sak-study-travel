export default function VisaTypes() {
  return (
    <section id="visa-types" className="py-24 bg-[#f8fafe] relative">
      <div className="max-w-[1280px] mx-auto px-8 scroll-reveal">
        <div className="text-center mb-16">
          <span className="text-[#ff5e5e] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[16px]">description</span>{" "}
            TYPES OF VISAS
          </span>
          <h2 className="font-headline-md text-3xl md:text-4xl font-extrabold text-slate-900">
            Varieties of Visas We Assist With
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Visa Card 1 */}
          <div className="bg-white p-8 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col items-start text-left cursor-pointer border border-transparent hover:border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-[#f4f7fb] flex items-center justify-center text-[#ff5e5e] mb-6 group-hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h3 className="font-label-bold text-xl text-slate-900 mb-3">Student Visa</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              For full-time degree programs at recognized institutions.
            </p>
          </div>
          {/* Visa Card 2 */}
          <div className="bg-white p-8 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col items-start text-left cursor-pointer border border-transparent hover:border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-[#f4f7fb] flex items-center justify-center text-[#ff5e5e] mb-6 group-hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-2xl">science</span>
            </div>
            <h3 className="font-label-bold text-xl text-slate-900 mb-3">Research Visa</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              For academic research and fellowship programs.
            </p>
          </div>
          {/* Visa Card 3 */}
          <div className="bg-white p-8 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col items-start text-left cursor-pointer border border-transparent hover:border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-[#f4f7fb] flex items-center justify-center text-[#ff5e5e] mb-6 group-hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-2xl">translate</span>
            </div>
            <h3 className="font-label-bold text-xl text-slate-900 mb-3">Language Course</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Short-term visas for intensive language studies.
            </p>
          </div>
          {/* Visa Card 4 */}
          <div className="bg-white p-8 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col items-start text-left cursor-pointer border border-transparent hover:border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-[#f4f7fb] flex items-center justify-center text-[#ff5e5e] mb-6 group-hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-2xl">work</span>
            </div>
            <h3 className="font-label-bold text-xl text-slate-900 mb-3">Post-Study Work</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Guidance on post-graduation work opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
