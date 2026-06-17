import { useState } from "react";
import "../styles/enquiry.css";
import axios from "axios";

export default function EnquiryModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter 10-digit phone number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
    await axios.post("http://localhost:5000/send-enquiry", form);

    setSuccess(true); // 👈 trigger success UI

    setTimeout(() => {
      onClose();       // auto close after 2.5s
      setSuccess(false);
      setLoading(false);
    }, 2500);

    } catch (err) {
        alert("Error sending enquiry");
        setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onClose}>×</span>


        {success ? (
            <div className="success-box">
            <div className="checkmark">✔</div>
            <h3>Enquiry Sent!</h3>
            <p>We’ll contact you shortly.</p>
            </div>
        ) : (
        <>

            <h2>Get a Quote</h2>

            <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} /> {errors.name && <span className="error">{errors.name}</span>}
            <input name="email" placeholder="Email" onChange={handleChange} /> {errors.email && <span className="error">{errors.email}</span>}
            <input name="phone" placeholder="Phone" onChange={handleChange} /> {errors.phone && <span className="error">{errors.phone}</span>}
            <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>

            <button type="submit" disabled={loading}>
              {loading ? <div className="spinner"></div> : "Submit"}
            </button>
            </form>
        </>
        )}
      </div>
    </div>
  );
}