import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import About from "@/components/About/About";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <HowItWorks />
      <Services />
    </main>
  );
}
