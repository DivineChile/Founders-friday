import About from "./components/About";
import Community from "./components/Community";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Happen from "./components/Happening";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Sponsor from "./components/Sponsor";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Offer />
      <Happen />
      <Sponsor />
      <CTA />
      <Community />
      <Footer />
    </div>
  );
};

export default App;
