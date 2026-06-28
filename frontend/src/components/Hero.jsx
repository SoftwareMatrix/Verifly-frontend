import { useNavigate } from "react-router-dom";
import heroStorefront from "../assets/hero-storefront.png";
import "../styles/Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero" id="browse">
      <img className="hero-image" src={heroStorefront} alt="" aria-hidden="true" />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Premium Business Profiles
          </div>

          <h1>Every small business<br />deserves a proper<br />presence.</h1>

          <p className="hero-description">
            Verifly gives independent businesses<br />
            a customizable profile page — brand story,<br />
            services, pricing, and photos — all in one place.<br />
            Discover them by category.
          </p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#businesses">
              Explore Businesses
              <span aria-hidden="true">-&gt;</span>
            </a>
            <button className="hero-button hero-button-secondary" onClick={() => navigate("/list-your-business")}>
              List Your Business
            </button>
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
      </div>
    </section>
  );
};

export default Hero;
