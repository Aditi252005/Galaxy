import "../styles/footer.css";
import logo from "../assets/logo.jpeg";
import logo2 from "../assets/logo2.png";

import { FaInstagram, FaLinkedin, FaWhatsapp,FaArrowRight,FaMapMarkerAlt,FaPhone,FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
   
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="logo" href="/">GALAXY WINDOWS</a>
          <br></br>
          <a className="logo" href="/"> & MODULARS</a>
          <p>Premium modular windows and doors for residential and commercial projects. Where precision meets elegance.</p>
          <div className="footer-socials">
            <a
              href="https://instagram.com/galaxy__windows"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/9993811711"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=digambarareinforcement@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li>
              <Link to="/products/upvcw">
                <FaArrowRight style={{ fontSize: "0.6rem" }} />
                Upvc Windows
              </Link>
            </li>
            <li>
              <Link to="/products/system">
                <FaArrowRight style={{ fontSize: "0.6rem" }} />
                System Windows
              </Link>
            </li>
            <li>
              <Link to="/products/upvcd">
                <FaArrowRight style={{ fontSize: "0.6rem" }} />
                Upvc Doors
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">
                <FaArrowRight style={{ fontSize: "0.6rem" }} />
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products">
                <FaArrowRight style={{ fontSize: "0.6rem" }} />
                Products
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <FaArrowRight style={{ fontSize: "0.6rem" }} />
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/careers">
                <FaArrowRight style={{ fontSize: "0.6rem" }} />
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FaArrowRight style={{ fontSize: "0.6rem" }} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-item"><FaMapMarkerAlt /><span>Plot No. A90, Sector-7B, Kamal Vihar, Raipur - 492001 </span></div>
          <div className="footer-contact-item"><FaPhone /><span>+91 9993811711, <br></br>+91 8757474445, <br></br> +91 9893593030</span></div>
          <div className="footer-contact-item"><FaEnvelope /><span>digambarareinforcement@gmail.com</span></div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Galaxy Windows And Modulars </p>
        <p>by Digambara Reinforcement Pvt. Ltd.</p>
        <p> All rights reserved.</p>
        {/* <p>Privacy Policy · Terms of Use</p> */}
      </div>
    </footer>
  
  );
}