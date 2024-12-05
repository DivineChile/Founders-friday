import About from "./components/About";
import Community from "./components/Community";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Happen from "./components/Happening";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Sponsor from "./components/Sponsor";
import Testimony from "./components/Testimony";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* About Us */}
      <About />
      {/* What we offer */}
      <Offer />
      {/* What Happens */}
      <Happen />
      {/* Sponsors */}
      <Sponsor />
      {/* Call to Action */}
      <CTA />
      {/* Community */}
      <Community />
      {/* Testimony */}
      <Testimony />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
