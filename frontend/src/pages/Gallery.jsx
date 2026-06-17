import Navbar from "../components/Navbar";
import HomeGallery from "../components/HomeGallery";
import Footer from "../components/Footer";
import "../styles/gallery.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import proj1 from "../assets/proj1.png";


const projects = [
  {
    id: 1,
    image: proj1,
    name: "Hotel Empyrean",
    location: "Raipur, Chhattisgarh",
    tag: "Commercial",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    name: "Rajlakshmi Palace",
    location: "Raipur, Chhattisgarh",
    tag: "Commercial",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    name: "Anandam City",
    location: "Raipur, Chhattisgarh",
    tag: "Residential",
  },
  // {
  //   id: 4,
  //   image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  //   name: "Green Valley Villas",
  //   location: "Raipur, Chhattisgarh",
  //   tag: "Residential",
  // },
  // {
  //   id: 5,
  //   image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  //   name: "Skyline Tower",
  //   location: "Bhilai, Chhattisgarh",
  //   tag: "Architectural",
  // },
  // {
  //   id: 6,
  //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  //   name: "Central Plaza",
  //   location: "Raipur, Chhattisgarh",
  //   tag: "Commercial",
  // },
];

// ─── Animation Variants ────────────────────────────────────────────────────
const headerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Tag colour map ────────────────────────────────────────────────────────
const tagStyle = {
  Residential: { background: "rgba(212,196,167,0.22)", color: "#8a6e3e" },
  Commercial: { background: "rgba(100,130,180,0.18)", color: "#2b4f88" },
  Architectural: { background: "rgba(90,160,130,0.18)", color: "#1b6b52" },
};

   

export default function Gallery() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const gridRef = useRef(null);
  
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
    const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  
  return (
    <>
      <Navbar />
      <HomeGallery/>
      <section className="op-section" ref={sectionRef} aria-label="Our Projects">
            {/* Subtle decorative background blobs */}
            <div className="op-bg-blob op-bg-blob--left" aria-hidden="true" />
            <div className="op-bg-blob op-bg-blob--right" aria-hidden="true" />
      
            <div className="op-container">
              {/* ── Section Header ── */}
              <motion.div
                className="op-header"
                ref={headerRef}
                variants={headerVariants}
                initial="hidden"
                animate={headerInView ? "visible" : "hidden"}
              >
                <span className="op-eyebrow">Our Projects</span>
                <h2 className="op-heading">Galaxy at Work</h2>
                <p className="op-subheading">
                  Delivering premium doors and windows across residential, commercial,
                  and architectural projects.
                </p>
                <div className="op-divider" aria-hidden="true" />
              </motion.div>
      
              {/* ── Project Grid ── */}
              <motion.div
                className="op-grid"
                ref={gridRef}
                variants={gridVariants}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
              >
                {projects.map((project) => (
                  <motion.article
                    key={project.id}
                    className="op-card"
                    variants={cardVariants}
                    whileHover={{ y: -8, transition: { duration: 0.32, ease: "easeOut" } }}
                  >
                    {/* Image wrapper with zoom */}
                    <div className="op-card__img-wrap">
                      <motion.img
                        src={project.image}
                        alt={`${project.name} – ${project.location}`}
                        className="op-card__img"
                        loading="lazy"
                        whileHover={{ scale: 1.07, transition: { duration: 0.55, ease: "easeOut" } }}
                      />
      
                      {/* Category tag (top-right) */}
                      <span
                        className="op-card__tag"
                        style={tagStyle[project.tag] ?? tagStyle.Residential}
                      >
                        {project.tag}
                      </span>
      
                      {/* Glassmorphism overlay */}
                      <div className="op-card__overlay">
                        <p className="op-card__name">{project.name}</p>
                        <p className="op-card__location">
                          <svg
                            className="op-card__pin"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3.182-4.5 8.5-4.5 8.5S3.5 9.182 3.5 6A4.5 4.5 0 0 1 8 1.5Z"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinejoin="round"
                            />
                            <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                          </svg>
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
      
            </div>
      </section>
      <Footer />
    </>
  );
}