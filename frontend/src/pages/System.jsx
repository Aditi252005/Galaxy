import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/products.css";
import React from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight, FiArrowUpRight,
  FiMaximize, FiRotateCcw, FiGrid, FiLayers, FiSliders, FiBox
} from 'react-icons/fi';
import '../styles/products.css';
import sys5 from "../assets/sys5.png";
import sys6 from "../assets/sys6.png";

const windows = [
  {
    id: 1,
    name: "Parallel Window",
    desc: "A premium outward-opening system window that provides excellent ventilation, superior weather sealing, and a sleek contemporary appearance. Designed for modern architectural projects requiring both performance and aesthetics.",
    image: sys5,
    icon: <FiSliders />,
    tag: "Premium",
    features: ["Weather Tight", "Thermal Insulation", "Modern Design"],
  },
  {
    id: 2,
    name: "Telescopic Window",
    desc: "A multi-track sliding system where multiple panels stack neatly behind one another, creating wider openings and uninterrupted views while maintaining smooth and effortless operation.",
    image: sys6,
    icon: <FiLayers />,
    tag: "Luxury",
    features: ["Wide Opening", "Smooth Sliding", "Panoramic View"],
  }
];


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const ProductCard = ({ item, index }) => {
  const reverse = index % 2 !== 0;

  return (
    <motion.div
      className={`window-card-horizontal ${reverse ? "reverse" : ""}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
    >
      <div className="card-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="card-body">
        <div className="card-icon-wrap">{item.icon}</div>

        <h3 className="card-name">{item.name}</h3>

        <p className="card-desc">
          {item.desc}
        </p>

        <div className="card-features">
          {item.features.map((feature) => (
            <span key={feature} className="feature-pill">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProductSection = ({
  id,
  eyebrow,
  title,
  description,
  products,
  className = ""
}) => {
  return (
    <section id={id} className={`windows-section ${className}`}>
      <div className="section-inner">

        <div className="section-header">
          <span className="section-eyebrow">{eyebrow}</span>

          <h2 className="section-title">
            {title}
          </h2>

          <p className="section-desc">
            {description}
          </p>

          <div className="divider-line" />
        </div>

        <div className="windows-grid">
          {products.map((item, index) => (
            <ProductCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const System = () => {
  return (
  <>
    <Navbar />

    <ProductSection
      id="system"
      eyebrow="Architectural Systems"
      title={<>Explore Our <em>System Windows</em></>}
      description="Our system windows are engineered for superior performance, combining advanced aluminium profiles, precision hardware, and modern aesthetics to deliver exceptional durability, insulation, and architectural elegance."
      products={windows}
    />

    <Footer />
  </>
  );
};

export default System;
