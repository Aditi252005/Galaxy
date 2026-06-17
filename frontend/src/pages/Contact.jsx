import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/contact.css";
import { useState } from "react";
import axios from "axios";


import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
  HiOutlineBuildingOffice2,
  HiOutlineWrenchScrewdriver,
  HiOutlineShoppingBag,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";



export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://galaxy-871z.onrender.com/send-enquiry", form);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      alert("Error sending message");
    } finally {
      setLoading(false);
    }
  };


  //
 
  return (
    <>
      <Navbar/>
      <div className="ct-page">
      
        {/* ── Form + Map ── */}
        <section className="ct-section" id="contact-form">
          <div className="ct-container">
            <div className="ct-section-header">
              <span className="ct-eyebrow">Get In Touch</span>
              <h2 className="ct-section-title">Send Us a Message</h2>
              <p className="ct-section-sub">Our team will get back to you within one business day.</p>
            </div>

            <div className="ct-two-col">
              {/* Form */}
              <div className="ct-form-card">
                <form className="ct-form" onSubmit={handleSubmit}>
                <h3>Enquiry</h3>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className="ct-input"/>
                  <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required className="ct-input"/>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="ct-input"/>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required className="ct-input"/>

                  <button type="submit" disabled={loading} className="ct-btn ct-btn--full">
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {success && (
                    <div className="ct-success">
                      <h3>Thank You!</h3>
                      <p>
                        Your enquiry has been submitted successfully.
                        Our team will contact you shortly.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            

              {/* Map */}
              <div className="ct-map-card">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59518.03474273955!2d81.59363802167974!3d21.197037800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda59d221cf3%3A0xa4bd85f206a580cf!2sGalaxy%20Windows%20and%20Modulars!5e0!3m2!1sen!2sin!4v1781645459218!5m2!1sen!2sin"></iframe>
                <p className="ct-map-label">
                  <HiOutlineMapPin aria-hidden="true" />
                  A90, Kamal Vihar, Sector 7B, Raipur, – 492001
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Office Locations ── */}
        <section className="ct-section ct-offices-section">
          <div className="ct-container">
            <div className="ct-section-header">
              <span className="ct-section-tag">Visit Us</span>
              <h2 className="ct-section-title">Experience Quality In Person</h2>
              <p className="ct-section-sub">
                Explore our premium range of uPVC windows, doors, and modular
                solutions at our locations.
              </p>
            </div>

            <div className="ct-offices-grid">

              {/* Head Office */}
              <div className="ct-office-card">
                <div className="ct-office-card__icon">
                  <HiOutlineBuildingOffice2 />
                </div>

                <h3>Head Office</h3>

                <p className="ct-office-card__desc">
                  Visit our corporate office for consultations and
                  product demonstrations.
                </p>

                <p>Galaxy Modulars</p>
                <p>A90, Kamal Vihar, Sector 7B, Raipur, – 492001</p>

              </div>

              {/* Manufacturing Unit */}
              <div className="ct-office-card">
                <div className="ct-office-card__icon">
                  <HiOutlineCog6Tooth />
                </div>

                <h3>Manufacturing Unit</h3>

                <p className="ct-office-card__desc">
                  State-of-the-art manufacturing facility focused
                  on quality and innovation.
                </p>

                <p>Vill: Godhi</p>
                <p>Tehsil: Dhamdha</p>
                <p>District: DURG - 490036</p>

              </div>

              {/* Contact */}
              <div className="ct-office-card">
                <div className="ct-office-card__icon">
                  <HiOutlinePhone />
                </div>

                <h3>Get In Touch</h3>

                <div className="contact-item">
                  <HiOutlinePhone />
                  <a href="tel:+919993811711">+91 99938 11711</a>
                </div>

                <div className="contact-item">
                  <HiOutlinePhone />
                  <a href="tel:+918757474445">+91 87574 74445</a>
                </div>

                <div className="contact-item">
                  <HiOutlinePhone />
                  <a href="tel:+919893593030">+91 98935 93030</a>
                </div>

                <div className="contact-item">
                  <HiOutlineEnvelope />
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=digambarareinforcement@gmail.com">
                    digambarareinforcement@gmail.com
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}
