import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BusinessCategories from "./components/BusinessCategories";
import HowItWorks from "./components/HowItWorks";
import VeriflyDifference from "./components/VeriflyDifference";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <BusinessCategories />
        <HowItWorks />
        <VeriflyDifference />
      </main>
      <Footer />
    </div>
  );
}

export default App;
