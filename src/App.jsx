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
      {/* Sponsors */}
      <Sponsor />
      <Offer />
      {/* What Happens */}
      <Happen />

      {/* Call to Action */}
      <CTA />
      {/* Community */}
      <Community />
      {/* Testimony */}
      <Testimony />
      {/* FAQs */}
      <FAQ />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
