import { useNavigate } from "react-router-dom";
import heroStorefront from "../assets/hero-storefront.png";
import Navbar from "./Navbar";
import "../styles/Authorization.css";

const AuthShell = ({ children, compact, signin }) => {
  const navigate = useNavigate();
  return (
    <div className="auth-layout">
      <img className="auth-bg" src={heroStorefront} alt="" aria-hidden="true" />
      <Navbar onCreateAccount={() => navigate("/register")} />
      <div className="auth-content">
        <div className={['auth-panel', compact && 'auth-panel--compact', signin && 'auth-panel--signin'].filter(Boolean).join(' ')}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthShell;
