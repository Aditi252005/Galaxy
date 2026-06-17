import "../styles/homeGallery.css";
import "../styles/gallery.css";

import { useState, useEffect,useRef } from "react";
import gal2 from "../assets/gal2.jpeg";
import gal3 from "../assets/gal3.jpeg";
import galaxy1 from "../assets/galaxy1.jpeg";
import upvcw1 from "../assets/upvcw1.jpeg";
import upvcw2 from "../assets/upvcw2.jpeg";
import upvcw3 from "../assets/upvcw3.png";
import upvcw4 from "../assets/upvcw4.png";
import upvcd1 from "../assets/upvcd1.png";
import upvcd2 from "../assets/upvcd2.png";
import sys1 from "../assets/sys1.jpeg";
import sys2 from "../assets/sys2.jpeg";
import sys3 from "../assets/sys3.jpeg";
import steel1 from "../assets/steel1.png";
import { FaLeaf, FaArrowRight,FaExpand } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const galleryImgs = [
   gal3,galaxy1,
   upvcw1,upvcw2,upvcw3,upvcw4,upvcd1,upvcd2,sys1,sys2,sys3,steel1
  ,
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

export default function HomeGallery() {
  return (
    <section className="section" id="gallery">
      <div className="gallery-header">
        <div>
          <FadeIn><p className="section-tag">Portfolio</p></FadeIn>
          <FadeIn delay={0.08}><h2 className="section-title">Projects that <em>Inspire</em></h2></FadeIn>
        </div>
      </div>
      <FadeIn>
        <div className="gallery-grid">
          {galleryImgs.map((src, i) => (
            <div key={i} className="gallery-item">
              <img src={src} alt={`Project ${i + 1}`} className="gallery-img" loading="lazy" />
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}