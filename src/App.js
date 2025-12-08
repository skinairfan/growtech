import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import CourseDetails from "./pages/CourseDetails";
import Course from "./pages/Course";
import "./App.css";
import "./css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./theme.css";

AOS.init();

function App() {
  const [theme, setTheme] = useState("light");

  // load saved theme once
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.body.classList.toggle("dark-theme", saved === "dark");
  }, []);

  // unified toggle / setter: accepts optional 'light' or 'dark'
  const toggleTheme = (selected) => {
    const newTheme = selected || (theme === "light" ? "dark" : "light");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark-theme", newTheme === "dark");
  };

  return (
    <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/coursedetails" element={<CourseDetails />} />
        <Route path="/course" element={<Course />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
