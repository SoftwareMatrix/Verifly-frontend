import heroStorefront from "../assets/hero-storefront.png";
import veriflyLogo from "../assets/logo2.png";
import "../styles/Authorization.css";

const AuthShell = ({ children }) => (
  <main className="authorization-page">
    <img className="authorization-bg" src={heroStorefront} alt="" aria-hidden="true" />
    <div className="authorization-overlay" aria-hidden="true" />
    <section className="authorization-shell" aria-label="Create an account">
      <img className="authorization-logo" src={veriflyLogo} alt="Verifly" />
      {children}
    </section>
  </main>
);

export default AuthShell;
