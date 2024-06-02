import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Slider from "../Slider";
import Activity from "../Activity";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Services from "../Pages/Services";
import NotFound from "../Pages/NotFound";
import Testimonials from "../Testimonials";
import Walpapers from "../Walpapers";
import Footer from "../Footer";

export default function Layout() {
  return (
    <BrowserRouter>
      {/* <ConditionalNavbar /> */}
      <Navbar />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/unique" element={<Services />} />
        {/* Route for any other path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Define a separate component for your homepage
function Home() {
  return (
    <>
      <Slider />
      <Activity />
      <Testimonials />
      <Walpapers />
      <Footer />
    </>
  );
}
