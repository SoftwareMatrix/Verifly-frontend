import { useState } from "react";
import heroStorefront from "../assets/hero-storefront.jpg";
import veriflyLogo from "../assets/logo2.png";
import "../styles/Authorization.css";

const roleLabels = {
  customer: "costumer",
  entrepreneur: "entrepreneur",
};

const Authorization = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const activeRole = selectedRole ? roleLabels[selectedRole] : null;

  return (
    <main className="authorization-page">
      <img
        className="authorization-bg"
        src={heroStorefront}
        alt=""
        aria-hidden="true"
      />
      <div className="authorization-overlay" aria-hidden="true" />

      <section className="authorization-shell" aria-label="Create an account">
        <img className="authorization-logo" src={veriflyLogo} alt="Verifly" />

        {!selectedRole ? (
          <>
            <h1>Create an account as:</h1>

            <div className="auth-choice-card">
              <button
                className="auth-primary-option"
                type="button"
                onClick={() => setSelectedRole("customer")}
              >
                <span className="auth-user-icon" aria-hidden="true" />A costumer
              </button>

              <div className="auth-divider">
                <span />
                or
                <span />
              </div>

              <button
                className="auth-primary-option"
                type="button"
                onClick={() => setSelectedRole("entrepreneur")}
              >
                <span className="auth-dollar-icon" aria-hidden="true">
                  $
                </span>
                An entrepreneur
              </button>
            </div>
          </>
        ) : (
          <>
            <h1>
              Join us as a {activeRole}
              <span aria-hidden="true">!</span>
            </h1>

            <form className="auth-form-card">
              <label className="auth-email-field">
                <span>Email address</span>
                <input type="email" autoComplete="email" />
              </label>

              <button className="auth-submit-button" type="submit">
                Continue with email
              </button>

              <div className="auth-divider">
                <span />
                or
                <span />
              </div>

              <div
                className="auth-socials"
                aria-label="Continue with social account"
              >
                <button type="button" aria-label="Continue with Google">
                  <span className="auth-google">G</span>
                </button>
                <button type="button" aria-label="Continue with Apple">
                  <span className="auth-apple">A</span>
                </button>
                <button type="button" aria-label="Continue with Facebook">
                  <span className="auth-facebook">f</span>
                </button>
              </div>

              <p className="auth-login-prompt">
                Already have a Verifly account?
                <a href="#login">Log in</a>
              </p>
            </form>
          </>
        )}
      </section>
    </main>
  );
};

export default Authorization;
