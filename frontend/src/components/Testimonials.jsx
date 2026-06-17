import "../styles/testimonials.css";
import { useState, useEffect,useRef } from "react";
import { FaStar } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
const testimonials = [
  {
    quote: "The sliding windows transformed our living room into something out of an architectural magazine. Flawless finish, silent operation.",
    author: "Priya Mehta",
    role: "Interior Architect, Mumbai",
  },
  {
    quote: "Every detail was handled with care — from the site consultation to the final installation. Truly a premium experience.",
    author: "Rohan Singhania",
    role: "Homeowner, Bangalore",
  },
  {
    quote: "We specified their modular glass systems for an entire office block. On time, on spec, and the client was beyond pleased.",
    author: "Aditya Kulkarni",
    role: "Project Director, Pune",
  },
];
function FadeIn({ children, delay = 0, y = 24 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}>
      {children}
    </motion.div>
  );
}
export default function TestimonialsSection() {
  return (
    <section className="testimonials" id="about">
      <div className="testimonials-inner">
        <FadeIn>
          <div className="testimonials-header">
            <p className="section-tag">Client Voices</p>
            <h2 className="section-title">Trusted by <em>Visionaries</em></h2>
          </div>
        </FadeIn>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <FadeIn key={t.author} delay={i * 0.1}>
              <div className="testi-card">
                <div className="testi-stars">{[...Array(5)].map((_, j) => <FaStar key={j} />)}</div>
                <p className="testi-quote">"{t.quote}"</p>
                <p className="testi-author">{t.author}</p>
                <p className="testi-role">{t.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
