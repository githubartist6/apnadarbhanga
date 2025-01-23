import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { CreatePostBox } from "./createPost";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCreatePostBox, setShowCreatePostBox] = useState(false); // State to control CreatePostBox visibility
  const headerRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleUploadClick = () => {
    setShowCreatePostBox(!showCreatePostBox); // Toggle visibility of CreatePostBox
    setIsOpen(false); // Close the menu
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <header className="header">
        <div className="container" ref={headerRef}>
          <div className="header-content">
            <Link to="/" onClick={toggleMenu} className="logo">
              ApnaDarbhanga
            </Link>
            <nav className={`nav ${isOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <Link to="/" onClick={toggleMenu}>
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
                    style={{ cursor: "pointer", background: "none", border: "none" }}
                  >
                    <FaPlus /> Upload
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
{showCreatePostBox && <CreatePostBox className="createPostBox" />}

    </>
  );
};
