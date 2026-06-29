import Navbar from "./components/global/Navbar";
import HeroSection from "./components/home/HeroSection";
import FeaturedCourses from "./components/home/FeaturedCourses";
import Statistics from "./components/home/Statistics";
// import MDSSpotlight from "./components/home/MDSSpotlight";
import InternationalPathways from "./components/home/InternationalPathways";
import FeaturedUniversities from "./components/home/FeaturedUniversities";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import BranchLocations from "./components/home/BranchLocations";
import PreFooterCTA from "./components/global/PreFooterCTA";
import Footer from "./components/global/Footer";
import WhatsAppButton from "./components/global/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCourses />
        <Statistics />
        {/* <MDSSpotlight /> */}
        <InternationalPathways />
        <FeaturedUniversities />
        <WhyChooseUs />
        <Testimonials />
        <BranchLocations />
        <PreFooterCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
