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
    <nav class="navbar">
      <a href="/" class="navbar-logo" aria-label="Verifly home">
        <img src={veriflyLogo} alt="Verifly" class="navbar-logo-image" />
      </a>

      <div class="navbar-content">
        <div class="navbar-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`} key={link}>
              {link}
            </a>
          ))}
        </div>

        <div class="navbar-actions">
          <SearchBar onSearch={handleSearch} />
          <a class="navbar-create-link" href="#create-account">
            Create Account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
