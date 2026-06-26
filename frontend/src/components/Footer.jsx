import "../styles/Footer.css";

const footerColumns = [
  {
    title: "Categories",
    links: [
      "Food & Beverage",
      "Technology",
      "Mobile Accessories",
      "Local Services",
      "Clothing & Fashion",
      "Other Businesses",
    ],
  },
  {
    title: "Platform",
    links: [
      "Browse",
      "Create a Profile",
      "How It Works",
      "Verified Businesses",
      "Pricing",
      "Help Center",
    ],
  },
  {
    title: "Company",
    links: [
      "About Verifly",
      "Blog",
      "Press",
      "Contact Us",
      "Privacy Policy",
      "Terms Of Serveses",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-separator" aria-hidden="true" />

      <div className="site-footer-inner">
        <div className="footer-brand">
          <h2>Verifly</h2>
          <p>
            The premium discovery platform for small businesses. Customizable
            profiles, real stories, direct connections.
          </p>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#browse">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
