import "../styles/hero.css";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

import {
  FaArrowRight,
  FaArrowLeft,
  FaChevronDown,
  FaExpand,
  FaStar,
  FaShieldAlt,
  FaLeaf,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";


function FadeIn({ children, delay = 0, y = 24 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}>
      {children}
    </motion.div>
  );
}
export default function Hero() {
  const heroSlides = [
  {
    img: hero1,
    alt: "Modern villa with large glass windows",
  },
  {
    img: hero3,
    alt: "Luxury interior with floor-to-ceiling windows",
  },
  {
    img: hero2,
    alt: "Contemporary home with casement windows",
  },
  {
    img: hero4,
    alt: "Minimalist glass facade architecture",
  },
  ];
  
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setCurrent((c) => (c + 1) % heroSlides.length); }, 5500);
    return () => clearInterval(t);
  }, []);

  const go = (next) => {
    setDir(next > current ? 1 : -1);
    setCurrent((next + heroSlides.length) % heroSlides.length);
  };

  const variants = {
    enter: (d) => ({ opacity: 0, scale: d > 0 ? 1.04 : 0.96, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (d) => ({ opacity: 0, scale: d > 0 ? 0.96 : 1.04, x: d > 0 ? -40 : 40 }),
  };

  return (
    <section className="hero" id="home">
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={current} className="hero-slide"
          custom={dir} variants={variants}
          initial="enter" animate="center" exit="exit"
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <img src={heroSlides[current].img} alt={heroSlides[current].alt} className="hero-img" />
          <div className="hero-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="hero-content">
        <motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          Crafted With Precision · Delivered With Care
        </motion.p>
        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
          Galaxy Windows<br /><em>And Modulars</em>
        </motion.h1>
        <motion.p className="hero-sub" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          Elegant solutions for modern spaces — where glass meets architecture.
        </motion.p>
        <motion.div className="hero-btns" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
          <button className="btn-primary" onClick={() => document.querySelector("#products").scrollIntoView({ behavior: "smooth" })}>
            Explore Products <FaArrowRight />
          </button>
          <button className="btn-ghost" onClick={() => document.querySelector("#contact").scrollIntoView({ behavior: "smooth" })}>
            Get a Quote
          </button>
        </motion.div>
      </div>

      <div className="hero-arrows">
        <button className="hero-arrow" onClick={() => go(current - 1)}><FaArrowLeft /></button>
        <button className="hero-arrow" onClick={() => go(current + 1)}><FaArrowRight /></button>
      </div>

      <div className="hero-dots">
        {heroSlides.map((_, i) => (
          <button key={i} className={`hero-dot${i === current ? " active" : ""}`} onClick={() => go(i)} />
        ))}
      </div>

      
    </section>
  );
}
