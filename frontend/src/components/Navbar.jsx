import React from "react";
import SearchBar from "./SearchBar";
import "../styles/Navbar.css";

const Navbar = () => {
  const handleSearch = (term) => {};

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Verifly</h2>
      <SearchBar onSearch={handleSearch} />
    </nav>
  );
};

export default Navbar;
