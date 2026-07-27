import { stats } from "@/data/stats";
import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";

export default function Stats() {
  return (
    <section className="py-16 bg-[--color-deep-navy] text-white relative overflow-hidden scroll-reveal">
      {/* Subtle red overlay tint matching Stitch design */}
      <div className="absolute inset-0 bg-[--color-primary-container]/10 mix-blend-overlay pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id}>
              {/* The counter number — large, bold, primary-fixed-dim color */}
              <div className="text-4xl font-extrabold text-[--color-primary-fixed-dim] mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2000}
                  threshold={0.3}
                  formatNumber={true}
                />
              </div>
              {/* Label */}
              <div className="text-sm font-bold uppercase tracking-wider text-[--color-surface-variant]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
