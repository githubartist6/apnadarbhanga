import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";
import { CreatePostBox } from "./createPost";
import { SearchComponent } from "./SearchComponent";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCreatePostBox, setShowCreatePostBox] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const headerRef = useRef(null);
  const searchBoxRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target) &&
      searchBoxRef.current &&
      !searchBoxRef.current.contains(event.target)
    ) {
      setIsOpen(false);
      setShowSearchBox(false);
    }
  };

  const handleUploadClick = () => {
    setShowCreatePostBox(!showCreatePostBox);
    setIsOpen(false);
  };

  const handleSearchClick = () => {
    setShowSearchBox(!showSearchBox);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="container" ref={headerRef}>
          <div className="header-content">
            <Link to="/" className="logo">
              ApnaDarbhanga
            </Link>
            <nav className={`nav ${isOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="attractions" onClick={toggleMenu}>
                    Attractions
                  </Link>
                </li>
                <li>
                  <Link to="culture" onClick={toggleMenu}>
                    Culture
                  </Link>
                </li>
                <li>
                  <Link to="gallery" onClick={toggleMenu}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="contact" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleUploadClick}
                    className="file-label"
                    style={{
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <FaPlus /> Upload
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSearchClick}
                    className="file-label search-label"
                  >
                    <FaSearch />
                  </button>
                </li>
              </ul>
            </nav>
            <button
              className="menu-button"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>
      <div className="post-container">
        {showCreatePostBox && <CreatePostBox className="createPostBox" />}
      </div>
      <div className="post-container" ref={searchBoxRef}>
        {showSearchBox && <SearchComponent className="searchComponent" />}
      </div>
    </>
  );
};
