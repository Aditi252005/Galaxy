import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/careers.css";
import axios from "axios";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaWhatsapp,
  FaChevronDown,
  FaArrowRight,
  FaAd,
  FaPalette,
  FaUsers,
  FaBalanceScale,
  FaUpload,
  FaCheck,
  FaCheckCircle,
  FaLeaf,
  FaMedal,
  FaClock,
  FaMapMarkerAlt,
  FaHeart,
  FaLaptop,
  FaGraduationCap,
  FaCoffee,
} from "react-icons/fa";

/* ─── Animation variants ─────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.72, delay: d, ease: [0.23, 1, 0.32, 1] },
  }),
};
const fadeLeft = {
  hidden:  { opacity: 0, x: -38 },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.72, delay: d, ease: [0.23, 1, 0.32, 1] },
  }),
};
const fadeRight = {
  hidden:  { opacity: 0, x: 38 },
  visible: (d = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.72, delay: d, ease: [0.23, 1, 0.32, 1] },
  }),
};

/* ─── Reusable: InView wrapper ───────────────────────── */
function Reveal({ children, variants = fadeUp, delay = 0, className = "" }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

/* ─── Tag / Eyebrow ──────────────────────────────────── */
function Tag({ children, center = false, light = false }) {
  const cls = ["tag", center && "tag--center", light && "tag--light"]
    .filter(Boolean).join(" ");
  return <p className={cls}>{children}</p>;
}



/* ══════════════════════════════
   SECTION 1 — HERO
══════════════════════════════ */
function HeroSection() {
  return (
    <section className="careers-hero" id="careers-hero">
      <motion.img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85"
        alt="Modern team workspace"
        className="careers-hero__bg"
        initial={{ scale: 1.07 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: "easeOut" }}
      />
      <div className="careers-hero__overlay" />
      <div className="careers-hero__grain" />

      <div className="careers-hero__content">
        <motion.p
          className="careers-hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.6 }}
        >
          Join Galaxy Windows & Modulars · We're Hiring
        </motion.p>

        <motion.h1
          className="careers-hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.82, ease: [0.23, 1, 0.32, 1] }}
        >
          Build Your <span>Career</span><br />With Us
        </motion.h1>

        <motion.p
          className="careers-hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
        >
          A place where innovation meets craftsmanship — grow your skills, spark
          your creativity, and shape the future of premium architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.6 }}
        >
          <button
            className="btn-primary"
            onClick={() =>
              document.querySelector("#careers-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Apply Now <FaArrowRight />
          </button>
        </motion.div>
      </div>

      
    </section>
  );
}

/* ══════════════════════════════
   SECTION 2 — INTRO
══════════════════════════════ */
function IntroSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="intro-section" id="intro">
      <div className="inner">
        <div className="intro-grid" ref={ref}>
          {/* Left copy */}
          <motion.div
            className="intro-copy"
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.05}
          >
            <Tag>Our Culture</Tag>
            <h2 className="heading">
              A Culture That<br /><em>Inspires Greatness</em>
            </h2>
            <p className="body-text">
              At Galaxy Modulars, our strength lies in the people who bring every project to life. We cultivate a professional and supportive environment where designers, engineers, installation experts, and customer service teams work together to deliver exceptional doors and window solutions.
            </p>
            <p className="body-text">
              Whether you're beginning your career or bringing years of industry experience, you'll find opportunities to learn, grow, and make a meaningful impact. We value dedication, craftsmanship, teamwork, and a commitment to excellence, empowering every team member to contribute to creating modern, durable, and innovative spaces for our clients.
            </p>

            <div className="intro-chips">
              {[
                { icon: <FaLeaf />,          label: "Sustainable Work Practices" },
                { icon: <FaMedal />,         label: "Performance Rewards" },
                { icon: <FaClock />,         label: "Flexible Hours" },
                { icon: <FaMapMarkerAlt />,  label: "Pan-India Locations" },
              ].map(({ icon, label }) => (
                <span key={label} className="intro-chip">{icon} {label}</span>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="intro-visual"
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.18}
          >
            <div className="intro-deco-ring" />
            <div className="intro-img-frame">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                alt="Team collaborating in modern office"
                loading="lazy"
              />
            </div>
            <div className="intro-float-card">
              <div className="intro-float-card__number">50+</div>
              <div className="intro-float-card__label">Team Members</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════
   SECTION 3 — WHY WORK WITH US
══════════════════════════════ */
const WHY_CARDS = [
  {
    icon:  <FaAd />,
    title: "Growth Opportunities",
    desc:  "Structured career paths, quarterly reviews, and sponsored certifications ensure you grow as fast as we do.",
  },
  {
    icon:  <FaUsers />,
    title: "Skilled Team",
    desc:  "Work alongside seasoned engineers, award-winning designers, and passionate sales leaders who genuinely invest in you.",
  },
  {
    icon:  <FaBalanceScale />,
    title: "Work-Life Balance",
    desc:  "Flexible hours, remote options, generous leave policies, and a culture that respects your time outside the office.",
  },
];

function WhySection() {
  return (
    <section className="why-section" id="why-us">
      <div className="inner">
        <Reveal className="why-header">
          <div className="why-header">
            <Tag center>Why Join Us</Tag>
            <h2 className="heading heading--center">
              Three Reasons to <em>Choose Galaxy</em>
            </h2>
            <p className="body-text body-text--center">
              We don't just build beautiful windows — we build careers that open
              doors to extraordinary possibilities.
            </p>
          </div>
        </Reveal>

        <div className="why-grid">
          {WHY_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="career-why-card">
                <div className="why-card__icon">{card.icon}</div>
                <h3 className="why-card__title">{card.title}</h3>
                <p className="why-card__desc">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════
   SECTION 4 — APPLICATION FORM
══════════════════════════════ */


function CareersForm() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  position: "",
  phone: "",
  });
  const [resume, setResume]   = useState(null);
  const [submitting, setSub]  = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSub(true);

      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("position", form.position);
      formData.append("phone", form.phone);
      formData.append("resume", resume);

      const res = await axios.post(
        "http://localhost:5000/apply",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Failed to submit application");
    } finally {
      setSub(false);
    }
  };

  const perks = [
    { icon: <FaHeart />,        text: "Comprehensive health & wellness benefits" },
    { icon: <FaLaptop />,       text: "Premium equipment & home-office allowance" },
    { icon: <FaGraduationCap />, text: "Annual learning & certification budget" },
    { icon: <FaCoffee />,       text: "Team retreats, events & cultural activities" },
  ];

  return (
    <section className="form-section" id="careers-form">
      <div className="inner">
        <div className="form-layout">
          {/* Left: copy */}
          <Reveal variants={fadeLeft} delay={0.05}>
            <div className="form-copy">
              <Tag light>Join the Team</Tag>
              <h2 className="heading heading--light">
                Start Your<br /><em style={{ color: "var(--teal-light)" }}>Journey Here</em>
              </h2>
              <p className="body-text">
                Fill in the form and one of our talent team members will get back
                to you within two business days. We review every application personally.
              </p>

              <div className="form-perks">
                {perks.map(({ icon, text }) => (
                  <div key={text} className="form-perk">
                    <div className="form-perk__icon">{icon}</div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: glass form */}
          <Reveal variants={fadeRight} delay={0.15}>
            <div className="form-card apply-section">
              {success ? (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="form-success__icon">
                    <FaCheckCircle />
                  </div>
                  <h3>Application Received!</h3>
                  <p>
                    Thank you for your interest in joining Galaxy. Our talent team
                    will review your profile and reach out within 2 business days.
                  </p>
                </motion.div>
              ) : (
                <form key={success} className="apply-form" onSubmit={handleSubmit}>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Full Name"
                    required
                  />

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    required
                  />

                  <input
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    type="text"
                    placeholder="Position Applied For"
                    required
                  />

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Phone Number"
                  />

                  <input
                    type="file"
                    name="resume"
                    accept=".pdf"
                    onChange={(e) => setResume(e.target.files[0])}
                    required
                  />

                  <button type="submit" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>

                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════
   PAGE ROOT
══════════════════════════════ */
export default function Careers() {
  return (
    <div className="careers-page">
      <Navbar/>
      <HeroSection />
      <IntroSection />
      <WhySection />
      <CareersForm />
      <Footer/>
    </div>
  );
}
