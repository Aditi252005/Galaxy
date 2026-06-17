import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Testimonials from "../components/Testimonials";
import { FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef,useState } from "react";
import Footer from "../components/Footer";
import HomeGallery from "../components/HomeGallery";
import EnquiryModal from "../components/EnquiryModal";
import brochure from "../assets/brochure.pdf";


function FadeIn({ children, delay = 0, y = 24 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}>
      {children}
    </motion.div>
  );
}
function CtaBand({ onOpenModal }) {
  return (
    <section className="cta-band" id="contact">
      <FadeIn>
        <p className="section-tag" style={{ justifyContent: "center" }}>Ready to Begin?</p>
        <h2 className="section-title" style={{ color: "#fff", textAlign: "center" }}>Let's Design Your <em style={{ color: "var(--teal-light)" }}>Perfect Space</em></h2>
        <p className="section-desc" style={{ textAlign: "center", margin: "0 auto 2.5rem" }}>Our specialists are ready to guide you from concept to completion. Book a free consultation today.</p>
        <div className="cta-band-btns">
          <button className="btn-primary" onClick={onOpenModal}>Book Consultation <FaArrowRight /></button>
          {/* <a href={brochure} download className="btn-ghost">
            Download Catalogue
          </a> */}
        </div>
      </FadeIn>
    </section>
  );
}
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <HomeGallery/>
      <Testimonials/>
      <CtaBand onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}









