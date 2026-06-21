import SearchBar from "./SearchBar";
import "../styles/Navbar.css";

const Navbar = () => {
  const navLinks = ["Browse", "Businesses", "For Owners", "About", "Blog", "Contact"];

  const handleSearch = (term) => {
    void term;
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo" aria-label="Verifly home">
        <span className="navbar-logo-mark" aria-hidden="true">
          <span className="navbar-logo-roof" />
          <span className="navbar-logo-house" />
          <span className="navbar-logo-dot navbar-logo-dot-one" />
          <span className="navbar-logo-dot navbar-logo-dot-two" />
          <span className="navbar-logo-dot navbar-logo-dot-three" />
        </span>
        <span>Verifly</span>
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
