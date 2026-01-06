import React, { useState, useEffect } from "react";
import newboy from "../src/assets/images/newboy.jpg"; // Hero image ka path
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaLinkedin, FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";
import { Navbare } from "./Navbare";
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
        style={{ backgroundImage: `url(${newboy})` }}
      ></div>

      {/* Top Bar */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center px-4 py-2
      w-330 ml-50  bg-opacity-70 rounded-md z-50">
        {/* Left side */}
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <FaMobileAlt className="text-white text-xl" />
            <span className="text-white text-xl">+92 300 1234567</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaEnvelope className="text-white text-xl" />
            <span className="text-xl text-white">info@example.com</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-white  text-xl" />
            <span className="text-xl text-white">Rawalpindi, Pakistan</span>
          </div>
        </div>

        {/* Right side social icons */}
        <div className="flex items-center space-x-2 text-4xl">
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube className="text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-white text-4xl" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-white text-4xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-white text-4xl" />
          </a>
        </div>
      </div>

      {/* Navbar below top bar */}
      <div className="absolute top-2 left-4 right-4 fixed top-0 left-0  z-50">
        
          <Navbare />
        
      </div>

      {/* Center Text with Smooth Fade Animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight mt-10">
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
            className="w-full h-14 rounded-full bg-white px-6 pr-12 focus:outline-none text-lg"
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
      <div className="w-full h-300 bg-white">
  <div className="mt-60 flex justify-center ">
    <h1 className="text-blue-900 text-6xl font-semibold text-center w-300 text-bold ">
      <p >Shaping Empowering Future IT Talent</p> 
      <p className="mt-5">Through a Seamless Process</p>
    </h1>
  </div>
  <div className="w-full flex justify-center gap-10 mt-10">
  {/* Step 1 */}
  <div className="relative p-6 rounded-lg border border-gray-300">
    {/* Step text top-left */}
    <span className="absolute top-2 left-2 text-xs font-semibold text-gray-500">Step 1</span>
    {/* Number top-right */}
    <span className="absolute top-2 right-2 text-4xl font-bold text-gray-800">1</span>
    
    {/* Main content */}
    <p className="text-sm mt-6 text-gray-700 w-50">
      Discover Tech<br/>
      Explore internships across various technologies that align with your career goals. Start your journey by selecting a field that excites you.
    </p>
  </div>

  {/* Step 2 */}
  <div className="relative p-6 rounded-lg border border-gray-300 w-50">
    <span className="absolute top-2 left-2 text-xs font-semibold text-gray-500">Step 2</span>
    <span className="absolute top-2 right-2 text-4xl font-bold text-gray-800">2</span>
    <p className="text-sm mt-6 text-gray-700">
      <h1 className="text-5xl text-blue-900 font-bold">Evaluate Skill</h1><br/>
      Our process includes an interview and a short evaluation task to assess your skills and readiness, helping us match you with the right opportunity.
    </p>
  </div>

  {/* Step 3 */}
  <div className="relative p-6 rounded-lg border border-gray-300 w-50">
    <span className="absolute top-2 left-2 text-xs font-semibold text-gray-500">Step 3</span>
    <span className="absolute top-2 right-2 text-4xl font-bold text-gray-800">3</span>
    <p className="text-xl mt-6 text-gray-700">
      Track Record<br/>
      Once selected, gain access to our iPortal to monitor your internship progress, track your achievements, and stay on top of your goals.
    </p>
  </div>
</div>
<div className="mt-20 text-center text-gray-700">
  Still have a question?{' '}
  <a href="#" className="text-blue-600 hover:underline text-xl">Browse documentation</a>{' '}
  or{' '}
  <a href="#" className="text-blue-600 hover:underline text-xl">submit a ticket</a>.
</div>

<div className="w-full flex items-center gap-6 mt-10">
  {/* Left side - image placeholder */}
  <div className="w-1/2 h-64 bg-gray-200 flex items-center justify-center">
    {/* You can place your image here */}
    <span className="text-gray-400">Image goes here</span>
  </div>

  {/* Right side - text */}
  <div className="w-1/2">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Your Heading Here
    </h2>
    <p className="text-gray-700 text-sm">
      This is your text content. You can write any paragraph here that explains the image or provides information related to it. The text will stay on the right side while the image occupies the left.
    </p>
  </div>
</div>

<div className="w-full flex flex-col gap-10 p-10">

  {/* Successful Internships & Countings */}
  <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      Hundreds of Successful Internships & Countings
    </h2>
    <p className="text-gray-700 text-sm">
      With a commitment to quality training and career advancement, we've empowered students from diverse backgrounds. 
      Through structured Internship, hands-on projects, and expert mentorship, Ezitech Institute ensures that every student builds a solid foundation in IT.
    </p>
  </div>

  {/* Numbers / Stats */}
  <div className="grid grid-cols-3 gap-6 text-center">
    <div className="bg-green-100 p-6 rounded-lg">
      <h3 className="text-4xl font-bold text-gray-800">1000+</h3>
      <p className="text-sm text-gray-700 mt-1">Active Students</p>
    </div>
    <div className="bg-yellow-100 p-6 rounded-lg">
      <h3 className="text-4xl font-bold text-gray-800">95%</h3>
      <p className="text-sm text-gray-700 mt-1">Positive Feedback</p>
    </div>
    <div className="bg-pink-100 p-6 rounded-lg">
      <h3 className="text-4xl font-bold text-gray-800">50+</h3>
      <p className="text-sm text-gray-700 mt-1">Industry MoUs</p>
    </div>
    <div className="bg-purple-100 p-6 rounded-lg">
      <h3 className="text-4xl font-bold text-gray-800">1200+</h3>
      <p className="text-sm text-gray-700 mt-1">Successful Graduates</p>
    </div>
  </div>

  {/* Courses / Programs */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {/* App Development */}
    <div className="bg-indigo-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-2">App Development</h3>
      <p className="text-sm text-gray-700">
        We offer hands-on experience to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools.
      </p>
      <button className="mt-4 text-blue-600 hover:underline text-sm">Explore Landing</button>
    </div>

    {/* Graphics Design */}
    <div className="bg-pink-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Graphics Design</h3>
      <p className="text-sm text-gray-700">
        Your journey to becoming a skilled graphic designer. We provide inspiration, tools, and support to help bring your vision to life.
      </p>
      <button className="mt-4 text-blue-600 hover:underline text-sm">Explore Landing</button>
    </div>

    {/* AI */}
    <div className="bg-green-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Artificial Intelligence</h3>
      <p className="text-sm text-gray-700">
        Gain practical experience in AI by building and deploying ML models. Learn data processing, model training & real-world AI applications.
      </p>
      <button className="mt-4 text-blue-600 hover:underline text-sm">Explore Landing</button>
    </div>

    {/* 2D/3D Architecture */}
    <div className="bg-yellow-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-2">2D/3D Architecture</h3>
      <p className="text-sm text-gray-700">
        Mentorship and tools to bring your game or architecture ideas to life with practical guidance and support.
      </p>
      <button className="mt-4 text-blue-600 hover:underline text-sm">Explore Landing</button>
    </div>

    {/* Web Development */}
    <div className="bg-purple-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Web Development</h3>
      <p className="text-sm text-gray-700">
        Build exceptional web experiences using strategic and innovative design.
      </p>
      <button className="mt-4 text-blue-600 hover:underline text-sm">Explore Landing</button>
    </div>

    {/* Digital Marketing */}
    <div className="bg-orange-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Marketing</h3>
      <p className="text-sm text-gray-700">
        Master digital marketing with tools, strategies, and guidance to drive impactful campaigns.
      </p>
      <button className="mt-4 text-blue-600 hover:underline text-sm">Explore Landing</button>
    </div>
  </div>

  {/* Alumni Section */}
  <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-2">Alumni 😍</h3>
    <p className="text-sm text-gray-700">
      Our interns consistently share positive experiences, highlighting the practical skills and professional growth they achieve with us.
    </p>
  </div>

  {/* Support Links */}
  <div className="text-center mt-10 text-gray-700">
    <p>
      Still have a question?{' '}
      <a href="#" className="text-blue-600 hover:underline">Browse documentation</a>{' '}
      or{' '}
      <a href="#" className="text-blue-600 hover:underline">submit a ticket</a>.
    </p>
  </div>

  {/* Social Links */}
  <div className="flex flex-col md:flex-row justify-center gap-6 text-center mt-10">
    <div className="p-4 bg-blue-200 rounded-lg w-60">Follow us on LinkedIn<br/>Latest news and updates</div>
    <div className="p-4 bg-red-200 rounded-lg w-60">Follow us on YouTube<br/>Latest news and updates</div>
    <div className="p-4 bg-blue-500 rounded-lg w-60 text-white">Follow us on Facebook<br/>Latest news and updates</div>
    <div className="p-4 bg-green-400 rounded-lg w-60 text-white">WhatsApp Channel<br/>Join the Community</div>
  </div>

  {/* Call to Action */}
  <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 p-10 rounded-lg text-center mt-10">
    <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to get started?</h3>
    <p className="text-gray-700 mb-4">
      At Ezitech, we constantly push boundaries to deliver excellence. Our commitment to quality and innovation makes us your trusted partner for growth and success.
    </p>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Get started now</button>
    <p className="text-gray-700 mt-6">
      Office #304-B، Amna Plaza, Main Peshawar Rd, Rawalpindi, Punjab<br/>
      (92) 337-7777860 | info@ezitech.org
    </p>
  </div>

  {/* Footer Links */}
  <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-700">
    <span>Explore More</span>
    <span>About Us</span>
    <span>Partners</span>
    <span>Portfolio</span>
    <span>Careers</span>
    <span>Blog</span>
    <span>Internships</span>
    <span>Strategy</span>
    <span>eCommerce</span>
    <span>Digital Marketing</span>
    <span>Branding</span>
    <span>Design</span>
    <span>Updates</span>
  </div>

  {/* Newsletter */}
  <div className="flex flex-col items-center mt-10 gap-4">
    <p className="text-gray-700">Subscribe to our newsletter to get the latest news & updates.</p>
    <div className="flex gap-2">
      <input type="email" placeholder="Enter email address" className="p-2 border border-gray-400 rounded-l-lg"/>
      <button className="bg-blue-600 text-white px-4 rounded-r-lg">GO</button>
    </div>
  </div>

  {/* Copyright */}
  <div className="text-center text-gray-500 mt-10">
    © 2024 Ezitech Institute. All rights reserved | Design & Develop by Ezitech Solutions
  </div>

</div>


</div>

    </div>
  )
};
