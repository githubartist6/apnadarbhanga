import React, { useState } from "react";
import "./css/searchComponent.css";

export const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Added state to control visibility

  const allItems = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredResults = allItems.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleClose = () => {
    setIsVisible(false); // Hide the search container when the "x" button is clicked
  };

  return (
    isVisible && ( // Only render search container if it's visible
      <div className={`search-container ${isFocused ? "focused" : ""}`}>
        <form onSubmit={handleSearch}>
          <div className="input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch(e);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        </form>
        <button className="close-btn" onClick={handleClose}>
          &times; {/* The "x" mark */}
        </button>
        {searchResults.length > 0 && (
          <ul className="search-results">
            {searchResults.map((item, index) => (
              <li key={index} className="search-result-item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  );
};
