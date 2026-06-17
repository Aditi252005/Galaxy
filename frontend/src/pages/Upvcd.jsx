import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/products.css";
import React from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight, FiArrowUpRight,
  FiMaximize, FiRotateCcw, FiGrid, FiLayers, FiSliders, FiBox
} from 'react-icons/fi';
import "../styles/products.css";
import upvcd3 from "../assets/upvcd3.png";
import upvcd4 from "../assets/upvcd4.png";
import upvcd5 from "../assets/upvcd5.png";
import upvcd6 from "../assets/upvcd6.png";
import upvcd7 from "../assets/upvcd7.png";



const doors = [
  {
    id: 1,
    name: "Sliding Door",
    desc: "Large glass panels that glide effortlessly, creating seamless indoor-outdoor living spaces with maximum natural light.",
    image: upvcd3,
    icon: <FiSliders />,
    features: ["Space Saving", "Weather Resistant", "Smooth Operation"],
  },
  {
    id: 2,
    name: "Casement Door",
    desc: "Traditional side-hinged doors that provide excellent ventilation, security, and timeless elegance.",
    image: upvcd5,
    icon: <FiMaximize />,
    features: ["Wide Opening", "Strong Locking", "Elegant Design"],
  },
  {
    id: 3,
    name: "French Door",
    desc: "Classic double-door styling with expansive glass panels that flood interiors with natural light.",
    image: upvcd4,
    icon: <FiBox />,
    features: ["Luxury Look", "Double Opening", "Natural Light"],
  },
  {
    id: 4,
    name: "Fold & Slide Door",
    desc: "Bi-fold systems that open entire walls, seamlessly connecting indoor and outdoor spaces.",
    image: upvcd7,
    icon: <FiLayers />,
    features: ["Maximum Opening", "Modern Design", "Flexible Layout"],
  },
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


export default function Steel() {
 return (
   <>
    <Navbar/>
    <ProductSection
      id="doors"
      className="doors-section"
      eyebrow="Luxury Entry Systems"
      title={<>Explore Our <em>UPVC Doors</em></>}
      description="Designed for elegance, security, and durability, our UPVC doors combine premium aesthetics with advanced engineering to create beautiful and functional living spaces."
      products={doors}
    />
    
    <Footer/>
   </>
   )
}