import heroStorefront from "../assets/hero-storefront.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="browse">
      <img className="hero-image" src={heroStorefront} alt="" aria-hidden="true" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Premium Business Profiles
        </div>

        <h1>Every small business deserves a proper presence.</h1>

        <p className="hero-description">
          Verifly gives independent businesses a customizable profile page - brand story,
          services, pricing, and photos - all in one place. Discover them by category.
        </p>

        <div className="hero-actions">
          <a className="hero-button hero-button-primary" href="#businesses">
            Explore Businesses
            <span aria-hidden="true">-&gt;</span>
          </a>
          <a className="hero-button hero-button-secondary" href="#create-account">
            List Your Business
          </a>
        </div>

        <div className="hero-stats" aria-label="Business profile statistics">
          {[0, 1, 2].map((item) => (
            <div className="hero-stat" key={item}>
              <strong>6,767+</strong>
              <span>Business Profiles</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
