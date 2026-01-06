// About.jsx
import React from "react";
import { Navbare } from "./Navbare";
import aboutimage from "../src/assets/images/aboutimage.jpg"

export const About = () => {
  return (
    <div className="w-full flex flex-col gap-16 p-10 bg-gray-50">
    <div className=" h-100 bg-cover bg-center"
    style={{ backgroundImage: `url(${aboutimage})` }}
    >
    
    </div>

    <div className="absolute top-2 left-4 right-4 fixed top-0 left-0  z-50">
          
            <Navbare />
          
        </div>
      {/* Mission Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-10 rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-sm max-w-3xl mx-auto">
          Our mission is to empower students with practical skills that enable them to work while studying. We believe every student should have the opportunity to meet their financial needs for higher education, whether through home-based work or other part-time opportunities.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">10+</h3>
          <p className="text-sm text-gray-700">Years of Experience</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">1500+</h3>
          <p className="text-sm text-gray-700">Interns and Projects Completed</p>
        </div>
        <div className="bg-pink-100 p-6 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">98%</h3>
          <p className="text-sm text-gray-700">Satisfaction Rate</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-xl shadow">
          <h3 className="text-4xl font-bold text-gray-800 mb-2">1200+</h3>
          <p className="text-sm text-gray-700">Successful Internships</p>
        </div>
      </div>

      {/* Hero Text Section */}
      <div className="bg-indigo-100 p-10 rounded-xl shadow-md text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Empower Your Journey with Practical Skills</h2>
        <p className="text-gray-700 text-sm max-w-3xl mx-auto">
          As a leading institute in tech education, Ezitech goes beyond traditional training by building a lasting partnership with our students. 
          We strive to equip each learner with the hands-on skills and industry knowledge needed to excel. 
          At Ezitech, our commitment is to support you at every step, helping you turn your goals into tangible achievements in the tech world.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Start Your Internship</button>
      </div>

      {/* Features / Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Practical Skills Development */}
        <div className="bg-green-100 p-6 rounded-xl shadow hover:scale-105 transform transition duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Practical Skills Development</h3>
          <p className="text-sm text-gray-700">
            Gain hands-on experience and build the skills needed to succeed in today’s tech-driven world.
          </p>
          <button className="mt-4 text-blue-600 hover:underline text-sm">Learn more</button>
        </div>

        {/* Innovative Learning Environment */}
        <div className="bg-yellow-100 p-6 rounded-xl shadow hover:scale-105 transform transition duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Innovative Learning Environment</h3>
          <p className="text-sm text-gray-700">
            Immerse yourself in a supportive, innovation-driven environment that fosters growth and creativity.
          </p>
          <button className="mt-4 text-blue-600 hover:underline text-sm">Learn more</button>
        </div>

        {/* Career-Focused Training */}
        <div className="bg-pink-100 p-6 rounded-xl shadow hover:scale-105 transform transition duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Career-Focused Training</h3>
          <p className="text-sm text-gray-700">
            Learn industry-relevant skills and prepare for real-world challenges with our comprehensive training programs.
          </p>
          <button className="mt-4 text-blue-600 hover:underline text-sm">Learn more</button>
        </div>

        {/* Empowering Future Professionals */}
        <div className="bg-purple-100 p-6 rounded-xl shadow hover:scale-105 transform transition duration-300">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Empowering Future Professionals</h3>
          <p className="text-sm text-gray-700">
            Equip yourself with the tools and knowledge to excel in your chosen field and make a meaningful impact.
          </p>
          <button className="mt-4 text-blue-600 hover:underline text-sm">Learn more</button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 p-10 rounded-xl shadow-md text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to get started?</h3>
        <p className="text-gray-700 mb-4">
          At Ezitech, we constantly push boundaries to deliver excellence. Our commitment to quality and innovation makes us your trusted partner for growth and success.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Get Started Now</button>
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
  );
};

export default About;
