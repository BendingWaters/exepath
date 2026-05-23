
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";

const App = () => {
  return <div>
    <Navbar />
    <Hero />
    <ServiceSection />
    <WhyUs />
    <Testimonials />
    <Contact />
    <Footer />
  </div>;
};

export default App;
