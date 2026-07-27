import Image from "next/image";

const features = [
  {
    icon: "handshake",
    title: "Global Partnerships",
    description: "Direct affiliations with 500+ top universities worldwide.",
  },
  {
    icon: "trending_up",
    title: "High Success Rate",
    description: "98% visa approval rate and admission success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white overflow-hidden relative scroll-reveal">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[--color-secondary-container]/20 rounded-full blur-3xl -z-10" />
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-8">
          <div>
            <span className="text-[--color-primary-container] text-sm font-bold uppercase tracking-wider flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-sm">verified</span>{" "}
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold">Our Experienced Consultants</h2>
            <p className="text-[--color-secondary] mt-4">
              We provide end-to-end support for your international education
              journey, ensuring a seamless transition from application to
              arrival.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[--color-surface] p-6 rounded border border-[--color-border-subtle] hover:border-[--color-primary-container] transition-all duration-300 hover:shadow-md group hover:-translate-y-1"
              >
                <div className="text-[--color-primary-container] mb-4 transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-4xl">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-[--color-secondary]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <button className="bg-[--color-primary-container] text-white px-8 py-3 rounded font-bold text-sm hover:bg-[--color-primary] transition-all duration-300 shadow-[0_10px_30px_rgba(225,36,36,0.3)] hover:shadow-[0_15px_40px_rgba(225,36,36,0.5)] hover:-translate-y-1 active:scale-95">
            Learn More
          </button>
        </div>

        {/* Right: Image mosaic */}
        <div className="relative group">
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded shadow-lg col-span-2 aspect-video">
              <Image
                src="https://lh3.googleusercontent.com/aida/AP1WRLuaGbFOVQYNuV8ZrxKWyHE8KSvBE5U8415VvspZcZbH6KpLYEfHjiAlCh5pz141ExjxSCZwW279h-t082XAeOvUG06-PUiz8dwwxO56cRJsKxVY6jB_yY6dYxDlTWZEqGy7yYO0EV25gUiRA_2yRrGIyhCNDFTHWRa2E8jQn2PtAYgufVkVFDv4hJaG6JXL2fmBpSd-z-Ag5mSrTUvO8jGLDLV7N_6GIIBBPNdsQhGSNeJhda1q6jK19FA"
                alt="Travel assistance"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded shadow-lg mt-4">
              <Image
                src="https://lh3.googleusercontent.com/aida/AP1WRLumW7ay2ruFgTJblqJy9x0CuPsIs2Ru6_zkpQLTW8zIY5sJvfwy8Z3Y2PEJ56UITIg44XxNGaGmINvcreEC26XI76Xgx0TdWVBsQ2I4hnxUsYUREYkWc2PUVZxDqnJBscRD4S05KYOKGGEOxkaIGt1Th8F7wXXx9akUPoNK9R8cspoKXXJssXtFgRTZbx5A0xvYV-ADlqw1JBA96he42oUMP6R3sSzCyYg1rXP85v0psbMmrxSgvA8JcQU"
                alt="International students"
                width={300}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="bg-[--color-deep-navy] text-white p-6 rounded shadow-lg mt-4 flex flex-col justify-center transition-transform duration-500 hover:scale-105 hover:bg-[--color-primary-container]">
              <h4 className="text-xl font-bold mb-2">Choose Our Guidance</h4>
              <p className="text-sm text-[--color-surface-variant]">
                For a stress-free application process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
