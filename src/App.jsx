import About from "./components/About";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <CTA />
    </div>
  );
};

export default App;
