import SearchBar from "./SearchBar";
import "../styles/Navbar.css";
import veriflyLogo from "../assets/logo1.png";

const Navbar = () => {
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
      <a href="/" className="navbar-logo" aria-label="Verifly home">
        <img src={veriflyLogo} alt="Verifly" className="navbar-logo-image" />
      </a>

      <div className="navbar-content">
        <div className="navbar-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`} key={link}>
              {link}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <SearchBar onSearch={handleSearch} />
          <a className="navbar-create-link" href="#create-account">
            Create Account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
