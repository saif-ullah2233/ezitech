import React, { useState, useEffect } from "react";
import hero from "./assets/images/hero.jpg"; // Hero image ka path
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaLinkedin, FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";

export const Home = () => {
  const words = ["Marketing", "Programming", "Web Design", "Social Skills"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true); // opacity control

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(true); // fade in
      }, 500); // fade duration 0.5s
    }, 3000); // each word visible 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[900px]">

      {/* Hero Background */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>

      {/* Top Bar */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center px-4 py-2 bg-white bg-opacity-70 rounded-md z-50">
        {/* Left side */}
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <FaMobileAlt className="text-blue-600" />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope className="text-red-500" />
            <span>info@example.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-green-600" />
            <span>Rawalpindi, Pakistan</span>
          </div>
        </div>

        {/* Right side social icons */}
        <div className="flex items-center space-x-2 text-sm">
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube className="text-red-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-blue-700" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-blue-600" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-pink-500" />
          </a>
        </div>
      </div>

      {/* Navbar below top bar */}
      <div className="absolute top-20 left-4 right-4">
        <div className="bg-blue-400 w-full h-16 flex items-center px-4 rounded-md">
          <span className="text-white font-semibold text-sm">Navbare</span>
        </div>
      </div>

      {/* Center Text with Smooth Fade Animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Learn the fundamentals from our experts in
          <br />
          <span
            className={`text-blue-500 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
          >
            {words[currentWordIndex]}
          </span>
        </h1>

        {/* Search Input */}
        <div className="relative w-full max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="search internship"
            className="w-full h-14 rounded-xl bg-white px-6 pr-12 focus:outline-none text-lg"
          />
          <FaSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>

        <p className="text-white text-3xl mt-10 font-sans">Explore our more usefull products</p>
       <div className="flex space-x-10 ml-110 mt-20">
  <p className="text-5xl font-bold text-white">
  AZI
  <span className="text-blue-500">O</span>
  BLOGS
</p>

<p className="text-5xl font-bold text-white">
  EZI
  <span className="text-white">O</span>
  POS
</p>

<p className="text-5xl font-bold text-white">
  EZIC
  <span className="text-white">O</span>
  ADING
</p>

</div>

      </div>
    </div>
  );
};
