import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.jpeg";
import logo2 from "../assets/logo2.png";

import { FaWhatsapp } from "react-icons/fa";
import EnquiryModal from "./EnquiryModal";
import brochure from "../assets/brochure.pdf";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo"><Link to="/">
          <img src={logo2} alt="Galaxy Modulars Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/about">About Us</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/products">Products</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/gallery">Gallery</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/careers">Careers</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/contact">Contact Us</Link></li>
          <li>
            <a 
              href={brochure} 
              download 
              className="mobile-btn"
              onClick={() => setMenuOpen(false)}
            >
              Download Brochure
            </a>
          </li>
        </ul>
        <a href={brochure} download className="quote-btn" onClick={() => setMenuOpen(false)}>
              Download Brochure
        </a>
        
         <a
          href="https://wa.me/9993811711"
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp/>
        </a>
      
        <div 
          className={`hamburger ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      {/* Modal */}
        <EnquiryModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
    </>
  );
}