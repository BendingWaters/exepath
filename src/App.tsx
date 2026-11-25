
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ServiceSection from "./components/ServiceSection";
import Testimonials from "./components/Testimonials";
import VideoShowcase from "./components/VideoShowcase";
import WhyUs from "./components/WhyUs";

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <AboutSection />
    <ServiceSection />
    <VideoShowcase />
    <WhyUs />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
  </div>;
};

export default App;
