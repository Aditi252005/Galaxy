import "../styles/featured.css";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";
import upvcw2 from "../assets/upvcw2.jpeg";
import sys1 from "../assets/sys1.jpeg";
import upvcd2 from "../assets/upvcd2.png";
import { useNavigate } from "react-router-dom";
import { FaLeaf, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


function FadeIn({ children, delay = 0, y = 24 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}>
      {children}
    </motion.div>
  );
}
function ProductCard({ p, i,navigate }) {
  return (
    <FadeIn delay={i * 0.12}>
      <div className="product-card">
        <div className="product-img-wrap">
          <img src={p.img} alt={p.name} className="product-img" />
          <span className="product-badge">{p.badge}</span>
        </div>
        <div className="product-body">
          <p className="product-number">{p.number} / 03</p>
          <h3 className="product-name">{p.name}</h3>
          <p className="product-desc">{p.desc}</p>
          <div className="product-features">
            {p.features.map((f) => (
              <span key={f} className="product-feature"><FaLeaf style={{ fontSize: "0.65rem" }} />{f}</span>
            ))}
          </div>
          <button className="btn-outline" onClick={() => navigate(p.path)}>View Details <FaArrowRight /></button>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Featured() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState("");
   const navigate = useNavigate();
   const products = [
  {
    name: "UPVC Windows",
    path: "/products/upvcw",
    badge: "Bestseller",
    img: upvcw2,
    desc: "Effortlessly glide open to blend your interior with the outdoors. Crafted with multi-chamber profiles for superior insulation and sound dampening.",
    features: ["Triple Glazed", "UV Resistant", "Low Maintenance"],
    number: "01",
  },
  {
    name: "System Windows",
    path: "/products/system",
    badge: "Premium",
    img: sys1,
    desc: "A timeless classic silhouette reimagined with precision engineering and modern performance. Outward-opening panels with concealed hinges and multipoint locking.",
    features: ["Soundproofing", "Weatherproof", "Custom Sizes"],
    number: "02",
  },
  {
    name: "UPVC Doors",
    path: "/products/upvcd",
    badge: "Signature",
    img: upvcd2,
    desc: "UPVC doors combine modern aesthetics with superior durability, energy efficiency, and enhanced security for residential and commercial spaces.",
    features: ["Weather Resistance", "Energy Efficient", "Enhanced Security"],
    number: "03",
  },
  ];
  
  return (
    <>
      <section className="section products" id="products">
        <FadeIn>
          <div className="products-header">
            <p className="section-tag">Our Collection</p>
            <h2 className="section-title">Designed for the <em>Discerning</em></h2>
            <p className="section-desc">Each product is engineered to stand the test of time — balancing aesthetic grace with technical excellence.</p>
          </div>
        </FadeIn>
        <div className="products-grid">
          {products.map((p, i) => <ProductCard key={p.name} p={p} i={i} navigate={navigate}/>)}
        </div>
      </section>
  
      {/* Modal */}
      <EnquiryModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}