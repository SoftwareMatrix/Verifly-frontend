import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BusinessCategories from "./components/BusinessCategories";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <BusinessCategories />
      </main>
    </div>
  );
}

export default App;
