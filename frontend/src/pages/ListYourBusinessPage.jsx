import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ListYourBusiness.css";

const WHY_CARDS = [
  {
    title: "Premium Profile",
    description: "Stand out with a fully customizable business page beyond a basic listing.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 3L21.09 11.26L30 12.57L23.5 18.9L25.18 27.78L17 23.47L8.82 27.78L10.5 18.9L4 12.57L12.91 11.26L17 3Z" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Reach More Customers",
    description: "Get discovered by people actively searching for local and online businesses.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="10" stroke="#AEAEAE" strokeWidth="2"/>
        <path d="M23 23L30 30" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Simple Setup",
    description: "Go live in minutes with no technical skills required.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3L10 19H17L15 31L24 15H17L19 3Z" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const HOW_STEPS = [
  {
    num: "01",
    title: "Create your free account",
    description: "Sign up in seconds — no credit card required.",
  },
  {
    num: "02",
    title: "Build and customize your business profile",
    description:
      "Add your story, services, photos, and contact details to create a profile that truly represents your brand.",
  },
  {
    num: "03",
    title: "Start getting discovered by customers",
    description:
      "Your profile goes live in the right category so customers searching for what you offer can find you.",
  },
];

const ListYourBusinessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="lyb-page">
      <Navbar onCreateAccount={() => navigate("/register")} />

      {/* ── HERO ── */}
      <section className="lyb-hero">
        <div className="lyb-hero-inner">
          <div className="lyb-hero-text">
            <p className="lyb-hero-kicker">For Business Owners</p>
            <h1 className="lyb-hero-title">List Your Business on Verifly</h1>
            <p className="lyb-hero-desc">
              Give your business a modern, customizable profile that goes beyond a basic listing — and get discovered by customers actively looking for what you offer.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY VERIFLY ── */}
      <section className="lyb-why">
        <div className="lyb-section-inner">
          <div className="lyb-separator" />
          <p className="lyb-section-kicker">Why Verifly</p>
          <h2 className="lyb-section-title">Everything your business needs to shine.</h2>

          <div className="lyb-cards">
            {WHY_CARDS.map((card) => (
              <div className="lyb-card" key={card.title}>
                <div className="lyb-card-icon">{card.icon}</div>
                <h3 className="lyb-card-title">{card.title}</h3>
                <p className="lyb-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="lyb-how">
        <div className="lyb-section-inner">
          <p className="lyb-section-kicker">How It Works</p>
          <h2 className="lyb-section-title">Everything your business needs to shine.</h2>
          <div className="lyb-separator" />

          <div className="lyb-steps">
            {HOW_STEPS.map((step, i) => (
              <div className="lyb-step" key={step.num}>
                <div className="lyb-step-spine">
                  <div className="lyb-step-num-box">{step.num}</div>
                  {i < HOW_STEPS.length - 1 && <div className="lyb-step-line" />}
                </div>
                <div className="lyb-step-body">
                  <h3 className="lyb-step-title">{step.title}</h3>
                  <p className="lyb-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET STARTED FORM ── */}
      <section className="lyb-form-section">
        <div className="lyb-section-inner">
          <p className="lyb-section-kicker">GET STARTED</p>
          <h2 className="lyb-section-title">Create Your Free Listing</h2>
          <p className="lyb-form-subtitle">No credit card required. Your profile goes live in minutes.</p>

          <form className="lyb-form-card" onSubmit={(e) => e.preventDefault()}>
            <div className="lyb-field">
              <label className="lyb-label" htmlFor="biz-name">Business Name</label>
              <input className="lyb-input" id="biz-name" type="text" />
            </div>

            <div className="lyb-field">
              <label className="lyb-label" htmlFor="biz-category">Category</label>
              <select className="lyb-input lyb-select" id="biz-category" defaultValue="">
                <option value="" disabled>Select A Category</option>
              </select>
            </div>

            <div className="lyb-field">
              <label className="lyb-label" htmlFor="biz-email">Email Address</label>
              <input className="lyb-input" id="biz-email" type="email" />
            </div>

            <button className="lyb-submit" type="submit">Submit Your Listing</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListYourBusinessPage;
