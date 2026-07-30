import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";
import { useAuth } from "../hooks/useAuth";

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

const RegisterCustomerPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await signup(username, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell>
      <h1 className="auth-form-title">Create Your Customer Account</h1>
      <p className="auth-form-subtitle">
        Create your account to discover and connect with trusted businesses.
      </p>

      <form onSubmit={handleSubmit}>
        {error && <p className="auth-error">{error}</p>}

        <div className="auth-field">
          <label className="auth-label">Username</label>
          <input
            className="auth-input"
            type="text"
            autoComplete="username"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="auth-field">
          <label className="auth-label">Email</label>
          <input
            className="auth-input"
            type="email"
            autoComplete="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="auth-field">
          <label className="auth-label">Password</label>
          <div className="auth-input-wrap">
            <input
              className="auth-input"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
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

        <button className="auth-btn" type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>

      <p className="auth-switch">
        Already have an account?
        <button onClick={() => navigate("/signin")}>Sign In</button>
      </p>
    </AuthShell>
  );
};

export default RegisterCustomerPage;
