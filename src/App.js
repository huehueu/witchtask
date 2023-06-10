
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
