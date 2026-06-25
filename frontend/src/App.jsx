import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BusinessCategories from "./components/BusinessCategories";
import HowItWorks from "./components/HowItWorks";
import VeriflyDifference from "./components/VeriflyDifference";

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
    </div>
  );
}

export default App;
