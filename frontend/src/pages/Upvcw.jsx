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
import upvcw5 from "../assets/upvcw5.png";
import upvcw6 from "../assets/upvcw6.png";
import upvcw7 from "../assets/upvcw7.png";
import upvcw8 from "../assets/upvcw8.png";
import upvcw9 from "../assets/upvcw9.png";
import upvcw10 from "../assets/upvcw10.png";

const windows = [
  {
    id: 1,
    name: 'Sliding Window',
    desc: 'Effortlessly glide open to invite fresh air in. Our sliding windows deliver panoramic views with ultra-slim profiles and whisper-quiet operation on precision steel tracks.',
    image: upvcw5,
    icon: <FiSliders />,
    tag: 'Best Seller',
    features: ['Dual Rail', 'Anti-Dust Seal', 'UV Shield'],
  },
  {
    id: 2,
    name: 'Casement Window',
    desc: 'Hinged at the side for maximum ventilation and clean sightlines. The European-style hardware provides secure locking with a single elegant handle turn.',
    image: upvcw6,
    icon: <FiMaximize />,
    tag: 'Classic',
    features: ['Multi-Point Lock', 'Tilt-Wash', 'Slim Frame'],
   
  },
  {
    id: 3,
    name: 'Fixed Window',
    desc: 'A frameless vision of the outdoors. Our fixed windows maximise natural light with structural glazing that blurs the boundary between interior and exterior.',
    image: upvcw7,
    icon: <FiBox />,
    tag: 'Panoramic',
    features: ['Floor-to-Ceiling', 'Triple Glaze', 'Soundproof'],
   
  },
  {
    id: 4,
    name: 'Tilt & Turn Window',
    desc: 'European engineering meets versatile function. Tilt inward for secure ventilation or swing open fully — ideal for easy cleaning and flexible airflow control.',
    image: upvcw8,
    icon: <FiRotateCcw />,
    tag: 'Versatile',
    features: ['2-in-1 Function', 'Child Safety', 'Draught-Free'],
  },
  {
    id: 5,
    name: 'Bay Window',
    desc: 'Project elegance beyond your walls. Bay windows create an architectural focal point while flooding rooms with light from three distinct angles for a truly expansive feel.',
    image: upvcw9,
    icon: <FiGrid />,
    tag: 'Statement',
    features: ['Custom Angle', 'Integrated Sill', 'Heritage Design'],
  },
  {
    id: 6,
    name: 'Combination Window',
    desc: 'Bespoke configurations that defy convention. Mix fixed, opening, and louvred panels in a single architectural composition tailored precisely to your vision.',
    image: upvcw10,
    icon: <FiLayers />,
    tag: 'Custom',
    features: ['Fully Bespoke', 'Mixed Glazing', 'Modular Design'],
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

const Upvcw = () => {
  return (
  <>
    <Navbar />

    <ProductSection
      id="windows"
      eyebrow="Premium Collections"
      title={<>Explore Our <em>UPVC Windows</em></>}
      description="Every window we craft is a masterclass in engineering and aesthetics — delivering exceptional thermal performance, acoustic insulation, and architectural beauty that endures for decades."
      products={windows}
    />

    <Footer />
  </>
  );
};

export default Upvcw;
