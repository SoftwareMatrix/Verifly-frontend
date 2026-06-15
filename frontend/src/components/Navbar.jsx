import "../styles/Navbar.css";

const Navbar = () => {
  const isLoggedIn = false;

  const guestLinks = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Login", href: "/login" },
  ];

  const userLinks = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Dashboard", href: "/dashboard" },
    { id: 3, label: "Profile", href: "/profile" },
  ];

  const navLinks = isLoggedIn ? userLinks : guestLinks;

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Verifly</h2>
      <div className="navbar-links">
        {navLinks.map((link) => (
          <a className="navbar-link" href={link.href} key={link.id}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
