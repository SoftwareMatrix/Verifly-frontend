import SearchBar from "./SearchBar";
import "../styles/Navbar.css";
import veriflyLogo from "../assets/logo1.png";
import { useAuth } from "../hooks/useAuth";

const Navbar = ({ onCreateAccount }) => {
  const { user, logout } = useAuth();
  const navLinks = [
    "Browse",
    "Businesses",
    "For Owners",
    "About",
    "Blog",
    "Contact",
  ];

  const handleSearch = (term) => {
    void term;
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-logo" aria-label="Verifly home">
          <img src={veriflyLogo} alt="Verifly" className="navbar-logo-image" />
        </a>

        <div className="navbar-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`} key={link}>
              {link}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <SearchBar onSearch={handleSearch} />
          {user ? (
            <div className="navbar-user">
              <span className="navbar-user-name">{user.name}</span>
              <button className="navbar-create-link" onClick={logout}>
                Log Out
              </button>
            </div>
          ) : (
            <button className="navbar-create-link" onClick={onCreateAccount}>
              Create Account
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
