import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Upvcw from "./pages/Upvcw";
import System from "./pages/System";
import Upvcd from "./pages/Upvcd";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import "./styles/theme.css";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/upvcw" element={<Upvcw />} />
        <Route path="/products/system" element={<System />} />
        <Route path="/products/upvcd" element={<Upvcd />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />


      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;