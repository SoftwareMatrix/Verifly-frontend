import { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <svg
        className="search-icon"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 13L8.99024 8.99024M10.3659 5.68293C10.3659 8.26924 8.26924 10.3659 5.68293 10.3659C3.09662 10.3659 1 8.26924 1 5.68293C1 3.09662 3.09662 1 5.68293 1C8.26924 1 10.3659 3.09662 10.3659 5.68293Z"
          stroke="#AEAEAE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="text"
        placeholder="Search For Business..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
    </form>
  );
};

export default SearchBar;
