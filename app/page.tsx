import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import About from "@/components/About/About";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Services from "@/components/Services/Services";
import Destinations from "@/components/Destinations/Destinations";
import Countries from "@/components/Countries/Countries";
import Stats from "@/components/Stats/Stats";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Team from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials/Testimonials";
import Blog from "@/components/Blog/Blog";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <HowItWorks />
      <Services />
      <Destinations />
      <Countries />
      <Stats />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
