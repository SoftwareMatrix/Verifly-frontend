import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import "../styles/Navbar.css";
import veriflyLogo from "../assets/logo1.png";
import profileIcon from "../assets/profile.svg";
import notificationIcon from "../assets/notification.svg";
import { useAuth } from "../hooks/useAuth";

const Navbar = ({ onCreateAccount }) => {
  const { user, logout } = useAuth();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
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

  useEffect(() => {
    if (!isProfileMenuOpen) return;

    const handleClickOutside = (event) => {
      if (!profileMenuRef.current?.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsProfileMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isProfileMenuOpen]);

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
              <div className="navbar-profile-menu" ref={profileMenuRef}>
                <button
                  type="button"
                  className="navbar-profile"
                  aria-haspopup="menu"
                  aria-expanded={isProfileMenuOpen}
                  onClick={() => setIsProfileMenuOpen((open) => !open)}
                >
                  <img
                    src={profileIcon}
                    alt=""
                    className="navbar-profile-icon"
                  />
                  <span className="navbar-user-name">{user.name}</span>
                  <svg
                    width="7"
                    height="3"
                    viewBox="0 0 7 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="navbar-profile-caret"
                    aria-hidden="true"
                  >
                    <path d="M0 0L3.5 3L7 0" fill="white" />
                  </svg>
                </button>
                {isProfileMenuOpen && (
                  <div className="navbar-dropdown" role="menu">
                    <button
                      type="button"
                      className="navbar-dropdown-item"
                      role="menuitem"
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        logout();
                      }}
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
              <button
                type="button"
                className="navbar-notification"
                aria-label="Notifications"
              >
                <img
                  src={notificationIcon}
                  alt=""
                  className="navbar-notification-icon"
                />
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
