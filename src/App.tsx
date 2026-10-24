import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "@/app/page"
import About from "@/app/about/page"
import AboutUs from "@/app/about-us/page"
import ServicesPage from "@/app/services/page"
import Pricing from "@/app/pricing/page"
import Contact from "@/app/contact/page"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/courses" element={<ServicesPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
