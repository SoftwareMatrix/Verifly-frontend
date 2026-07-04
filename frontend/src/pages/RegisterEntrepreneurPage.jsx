import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";
import georgiaFlag from "../assets/georgia-flag.svg";

const EyeOffIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <path d="M1 1l22 22" />
  </svg>
);

const EyeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1l4 4 4-4" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RegisterEntrepreneurPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <AuthShell compact>
      <h1 className="auth-form-title">Join as a Business Owner</h1>
      <p className="auth-form-subtitle">
        Create your business account and start reaching more customers.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="auth-row" style={{ marginBottom: 14 }}>
          <div className="auth-field">
            <label className="auth-label">Business Name</label>
            <input className="auth-input" type="text" placeholder="Business Name" />
          </div>
          <div className="auth-field">
            <label className="auth-label">Owner Name</label>
            <input className="auth-input" type="text" autoComplete="name" placeholder="Owner Name" />
          </div>
        </div>

        <div className="auth-field">
          <label className="auth-label">Email Address</label>
          <input className="auth-input" type="email" autoComplete="email" placeholder="Enter Your Email" />
        </div>

        <div className="auth-field">
          <label className="auth-label">Phone Number</label>
          <div className="auth-phone-wrap">
            <div className="auth-phone-country">
              <img src={georgiaFlag} alt="GE" className="auth-phone-flag" />
              <ChevronDown />
              <span className="auth-phone-code">+995</span>
            </div>
            <input
              className="auth-phone-input"
              type="tel"
              autoComplete="tel"
              placeholder=""
            />
          </div>
        </div>

        <div className="auth-field">
          <label className="auth-label">Password</label>
          <div className="auth-input-wrap">
            <input
              className="auth-input"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Enter Your Password"
            />
            <button
              type="button"
              className="auth-eye-btn"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
        </div>

        <div className="auth-field">
          <label className="auth-label">Confirm Password</label>
          <div className="auth-input-wrap">
            <input
              className="auth-input"
              type={showConfirm ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Confirm Your Password"
            />
            <button
              type="button"
              className="auth-eye-btn"
              aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
              onClick={() => setShowConfirm((v) => !v)}
            >
              {showConfirm ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
        </div>

        <button className="auth-btn auth-btn--60" style={{ marginTop: 45 }} type="submit">
          Create Business Account
        </button>
      </form>

      <p className="auth-switch auth-switch--sm">
        Already have an account?
        <button onClick={() => navigate("/signin")}>Sign In</button>
      </p>
    </AuthShell>
  );
};

export default RegisterEntrepreneurPage;
