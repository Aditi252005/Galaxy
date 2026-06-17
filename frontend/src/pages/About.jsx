import "../styles/about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaChevronDown,
  FaCheck,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaBuilding,
  FaSmile,
  FaAward,
  FaHandshake,
  FaEye,
  FaBullseye,
  FaArrowRight,
  FaLeaf,
  FaMedal,
  FaClock,
} from "react-icons/fa";
import logo3 from "../assets/logo3.jpeg";
import sys2 from "../assets/sys2.jpeg";
import exp from "../assets/exp.png";
import mat from "../assets/mat.png";
import about1 from "../assets/about1.png";
import who from "../assets/who.png";





/* ─── Animation Presets ──────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.72, delay, ease: [0.23, 1, 0.32, 1] },
  }),
};

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.65, delay },
  }),
};

const slideLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.75, delay, ease: [0.23, 1, 0.32, 1] },
  }),
};

const slideRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.75, delay, ease: [0.23, 1, 0.32, 1] },
  }),
};

/* ─── Reusable: FadeWhenVisible ──────────────────────── */
function FadeWhenVisible({ children, variants = fadeUp, delay = 0, className = "" }) {
  const ref  = useRef(null);
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

/* ─── Reusable: SectionLabel ─────────────────────────── */
function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

/* ─── Count-up Hook ──────────────────────────────────── */
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) ** 2;
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── StatCard ───────────────────────────────────────── */
function StatCard({ icon, target, suffix = "", label, delay }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count  = useCountUp(target, 2000, inView);

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
    >
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">
        {count}<span>{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
}

/* ─── WhyCard ────────────────────────────────────────── */
function WhyCard({ img, icon, title, desc, delay }) {
  return (
    <FadeWhenVisible delay={delay}>
      <div className="why-card">
        <div style={{ overflow: "hidden", borderRadius: "4px", marginBottom: "1.4rem" }}>
          <img src={img} alt={title} className="why-img" loading="lazy" />
        </div>
        <div className="why-icon-wrap">{icon}</div>
        <h3 className="why-card__title">{title}</h3>
        <p className="why-card__desc">{desc}</p>
      </div>
    </FadeWhenVisible>
  );
}

/* ─── VisionMission Card ─────────────────────────────── */
function VMCard({ type, icon, title, text, points, letter }) {
  return (
    <FadeWhenVisible delay={type === "vision" ? 0.1 : 0.22}>
      <div
        className={`vm-card vm-card--${type}`}
        data-letter={letter}
      >
        <div className="vm-icon-ring">{icon}</div>
        <h3 className="vm-card__title">{title}</h3>
        <p className="vm-card__text">{text}</p>
        <ul className="vm-card__list">
          {points.map((pt) => (
            <li key={pt}>
              <FaCheck /> {pt}
            </li>
          ))}
        </ul>
      </div>
    </FadeWhenVisible>
  );
}

/* ─── Hero Section ───────────────────────────────────── */
function HeroSection() {
  return (
    <section className="about-hero" id="about-hero">
      {/* Background image with subtle Ken Burns */}
      <motion.img
        src={about1}
        alt="Modern architectural glass building"
        className="about-hero__img"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      <div className="about-hero__overlay" />
      <div className="about-hero__grain" />

      {/* Copy */}
      <div className="about-hero__content">
        <motion.p
          className="about-hero__eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Est. 2025 · Raipur, India
        </motion.p>

        <motion.h1
          className="about-hero__title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <span>Galaxy Windows and Modulars</span><br/>
        </motion.h1>
        <motion.img
          src={logo3}
          alt="Digambara"
          className="about-hero__sublogo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
        <motion.p
          className="about-hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.7 }}
        >
          Crafting premium modular windows, doors, and glass systems — 
          where architectural vision meets flawless engineering.
        </motion.p>
      </div>

      {/* Social icons */}
      {/* <motion.div
        className="about-hero__socials"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a
          href="https://www.instagram.com/galaxy__windows/"
          target="_blank"
          rel="noreferrer"
          className="about-hero__social-link"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

      </motion.div> */}

      {/* Scroll cue */}
      
    </section>
  );
}

/* ─── Who We Are ─────────────────────────────────────── */
function WhoWeAre() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="who-section" id="who-we-are">
      <div className="section-inner">
        <div className="who-grid" ref={ref}>
          {/* Left: copy */}
          <motion.div
            className="who-copy"
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.05}
          >
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="section-heading">
              Years of<br /><em>Excellence</em>
            </h2>
            <p className="section-body">
              Galaxy Modulars offers high-quality doors and windows designed to improve the beauty, safety, and comfort of your home or workplace. We provide a wide range of stylish and durable solutions, including steel doors, upvc windows, aluminum windows, and customized designs to suit different spaces and requirements.            </p>
            <p className="section-body" style={{ marginBottom: "2.2rem" }}>
              With a focus on customer satisfaction, professional service, and reliable installation, Galaxy Modulars helps create secure and attractive spaces. We are committed to delivering products that combine functionality, durability, and elegant design.
            </p>

            <div className="who-pills">
              {[
                { icon: <FaLeaf />,      label: "Premium Quality Materials" },
                { icon: <FaMedal />,     label: "Enhanced Security" },
                { icon: <FaClock />,     label: "On-Time Delivery" },
                { icon: <FaHandshake />, label: "Customizable Solutions" },
              ].map(({ icon, label }) => (
                <span key={label} className="who-pill">
                  {icon} {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: image card */}
          <motion.div
            className="who-visual"
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.18}
          >
            <div className="who-deco" />
            <div className="who-img-card">
              <img
                src={who}
                alt="Premium modular windows showroom"
                loading="lazy"
              />
            </div>
            {/* <div className="who-badge">
              <div className="who-badge__number">25+</div>
              <div className="who-badge__label">Years of Craft</div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ──────────────────────────────────── */
function WhyChooseUs() {
  const cards = [
    {
      img:   sys2,
      icon:  <FaLightbulb />,
      title: "Innovative Designs",
      desc:  "Our in-house design studio blends European minimalism with Indian spatial sensibilities, producing fenestration that elevates.",
    },
    {
      img:   mat,
      icon:  <FaShieldAlt />,
      title: "Durable Materials",
      desc:  "We source only premium multi-chamber uPVC , triple-glazed glass units, and corrosion-proof hardware backed by a lifetime warranty.",
    },
    {
      img:   exp,
      icon:  <FaUsers />,
      title: "Expert Team",
      desc:  "50+ certified installation engineers and dedicated project managers ensure that every window and door is fitted to the millimetre.",
    },
  ];

  return (
    <section className="why-section" id="why-us">
      <div className="section-inner">
        <FadeWhenVisible className="why-header">
          <div className="why-header">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="section-heading">
              Built on <em>Three Pillars</em>
            </h2>
            <p className="section-body">
              Every project we undertake reflects our commitment to design integrity,
              material excellence, and engineering precision.
            </p>
          </div>
        </FadeWhenVisible>

        <div className="why-grid">
          {cards.map((card, i) => (
            <WhyCard key={card.title} {...card} delay={i * 0.13} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Section ──────────────────────────────────── */
function StatsSection() {
  const stats = [
    { icon: <FaBuilding />, target: 100, suffix: "+", label: "Projects Completed" },
    { icon: <FaSmile />,    target: 100, suffix: "+", label: "Happy Clients"      },
    { icon: <FaAward />,    target: 5,   suffix: " yrs", label: "Years Experience"  },
    { icon: <FaUsers />,    target: 50,  suffix: "+", label: "Team Members"       },
  ];

  return (
    <section className="stats-section" id="stats">
      <div className="section-inner">
        <FadeWhenVisible className="stats-header">
          <div className="stats-header">
            <SectionLabel>Our Numbers</SectionLabel>
            <h2 className="section-heading" style={{ color: "#fff" }}>
              Results that <em style={{ color: "var(--teal-light)" }}>Speak</em>
            </h2>
          </div>
        </FadeWhenVisible>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Vision & Mission ───────────────────────────────── */
function VisionMission() {
  return (
    <section className="vm-section" id="vision-mission">
      <div className="section-inner">
        <FadeWhenVisible>
          <div className="vm-header">
            <SectionLabel>Our Purpose</SectionLabel>
            <h2 className="section-heading">
              Vision &amp; <em>Mission</em>
            </h2>
          </div>
        </FadeWhenVisible>

        <div className="vm-grid">
          <VMCard
            type="vision"
            letter="V"
            icon={<FaEye />}
            title="Our Vision"
            text="To become one of India's most trusted doors and windows brands, known for quality, innovation, and craftsmanship, creating secure and beautiful spaces for every home and business."
            points={[
              "Expand our presence across major cities in India",
              "Set new standards in quality and customer satisfaction",
              "Deliver innovative and energy-efficient solutions",
            ]}
          />
          <VMCard
            type="mission"
            letter="M"
            icon={<FaBullseye />}
            title="Our Mission"
            text="To provide durable, stylish, and high-performance doors and windows that enhance safety, comfort, and aesthetics while ensuring exceptional service and value for our customers."
            points={[
              "Uncompromising quality at every touchpoint",
              "Ensure reliable installation and after-sales support",
              "Build lasting relationships through trust and excellence",
            ]}
          />
        </div>
      </div>
    </section>
  );
}



/* ─── AboutUs Page ───────────────────────────────────── */
export default function About() {
  return (
    <div className="about-page">
      <Navbar/>
      <HeroSection />
      <WhoWeAre />
      <WhyChooseUs />
      <StatsSection />
      <VisionMission />
      <Footer/>
    </div>
  );
}
