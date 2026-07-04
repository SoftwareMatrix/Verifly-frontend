import veriflyLogo from "../assets/logo2.png";
import heroStorefront from "../assets/hero-storefront.png";
import "../styles/Authorization.css";

const SearchIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="4" stroke="#AEAEAE" strokeWidth="2" />
    <path d="M8.5 8.5L11 11" stroke="#AEAEAE" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AuthNavbar = () => (
  <nav className="auth-navbar">
    <img className="auth-nav-logo" src={veriflyLogo} alt="Verifly" />
    <div className="auth-nav-links">
      <a href="#">Browse</a>
      <a href="#">Businesses</a>
      <a href="#">For Owners</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </div>
    <div className="auth-nav-right">
      <div className="auth-nav-search">
        <SearchIcon />
        <span>Search For Product...</span>
      </div>
      <button className="auth-nav-cta">Create Account</button>
    </div>
  </nav>
);

const AuthShell = ({ children, compact, signin }) => (
  <div className="auth-layout">
    <img className="auth-bg" src={heroStorefront} alt="" aria-hidden="true" />
    <AuthNavbar />
    <div className="auth-content">
      <div className={['auth-panel', compact && 'auth-panel--compact', signin && 'auth-panel--signin'].filter(Boolean).join(' ')}>
        {children}
      </div>
    </div>
  </div>
);

export default AuthShell;
