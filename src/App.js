
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="faq" element={<FAQ />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
