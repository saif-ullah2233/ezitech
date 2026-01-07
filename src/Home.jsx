import React, { useState, useEffect } from "react";

import "aos/dist/aos.css";
import newboy from "../src/assets/images/newboy.jpg";
import { FaMobileAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaLinkedin, FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";
import { Navbare } from "./Navbare";
import { Link } from "react-router-dom";
import first from "../src/assets/images/first.jpg"
import second from "../src/assets/images/second.jpg"
import third from "../src/assets/images/third.jpg"
export const Home = () => {
  const words = ["Marketing", "Programming", "Web Design", "Social Skills"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[900px]">


      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${newboy})` }}
      ></div>


      <div className="absolute top-4 left-4 right-4 flex justify-between items-center px-4 py-2
      w-330 ml-50  bg-opacity-70 rounded-md z-50">

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


      <div className="absolute top-2 left-4 right-4 fixed top-0 left-0  z-50">

        <Navbare />

      </div>


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight mt-10 ">
          Learn the fundamentals from our experts in
          <br />
          <span
            className={`text-blue-500 transition-opacity duration-3000 ${fade ? "opacity-100" : "opacity-10"}`}
          >
            {words[currentWordIndex]}
          </span>
        </h1>


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

      <div className="w-full overflow-hidden mt-10">


        <style>
          {`
      @keyframes marqueeRTL {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `}
        </style>

        <div
          className="flex items-center gap-20 whitespace-nowrap"
          style={{
            animation: "marqueeRTL 40s linear infinite",
          }}
        >
          <div className="flex items-center gap-3 text-red-500 text-2xl font-semibold">
            <i className="devicon-html5-plain text-5xl"></i> HTML5
          </div>

          <div className="flex items-center gap-3 text-blue-500 text-2xl font-semibold">
            <i className="devicon-css3-plain text-5xl"></i> CSS3
          </div>

          <div className="flex items-center gap-3 text-yellow-400 text-2xl font-semibold">
            <i className="devicon-javascript-plain text-5xl"></i> JavaScript
          </div>

          <div className="flex items-center gap-3 text-cyan-400 text-2xl font-semibold">
            <i className="devicon-react-original text-5xl"></i> React
          </div>

          <div className="flex items-center gap-3 text-sky-400 text-2xl font-semibold">
            <i className="devicon-tailwindcss-plain text-5xl"></i> Tailwind
          </div>

          <div className="flex items-center gap-3 text-green-500 text-2xl font-semibold">
            <i className="devicon-nodejs-plain text-5xl"></i> Node.js
          </div>

          <div className="flex items-center gap-3 text-gray-700 text-2xl font-semibold">
            <i className="devicon-express-original text-5xl"></i> Express
          </div>

          <div className="flex items-center gap-3 text-purple-600 text-2xl font-semibold">
            <i className="devicon-php-plain text-5xl"></i> PHP
          </div>

          <div className="flex items-center gap-3 text-green-600 text-2xl font-semibold">
            <i className="devicon-mongodb-plain text-5xl"></i> MongoDB
          </div>

          <div className="flex items-center gap-3 text-blue-600 text-2xl font-semibold">
            <i className="devicon-mysql-plain text-5xl"></i> MySQL
          </div>


          <div className="flex items-center gap-3 text-cyan-400 text-2xl font-semibold">
            <i className="devicon-react-original text-5xl"></i> React
          </div>

          <div className="flex items-center gap-3 text-yellow-400 text-2xl font-semibold">
            <i className="devicon-javascript-plain text-5xl"></i> JavaScript
          </div>
        </div>
      </div>


      <div className="w-full h-300">
        <div className="mt-60 flex justify-center ">
          <h1 className="text-gray-700 font-serif text-6xl font-semibold text-center w-300 text-bold ">
            <p >Shaping Empowering Future IT Talent</p>
            <p className="mt-5">Through a Seamless Process</p>
          </h1>
        </div>
        <div className="w-full flex justify-center gap-30 mt-20">
          <div className="relative p-6  w-100">

            <span className="absolute top-2 left-2 text-xl font-semibold text-gray-500 mt-20 opacity-20">Step 1</span>

            <span className="absolute top-2 right-2 text-9xl font-bold text-gray-800 opacity-20">1</span>


            <p className="text-xl mt-6 text-gray-700 w-80 ">
              <h1 className="text-7xl text-gray-700 font-poppins mt-30">Discover Tech</h1><br />
              <p className="text-xl"> Explore internships across various
                technologies that align with your career goals. Start your journey by selecting a field that excites you.</p>
            </p>
          </div>


          <div className="relative p-6   w-100">
            <span className="absolute top-2 left-2 text-xl font-semibold text-gray-500 mt-20 opacity-20">Step 2</span>
            <span className="absolute top-2 right-2 text-9xl font-bold text-gray-800 opacity-20">2</span>
            <p className="text-sm mt-6 text-gray-700 ">
              <h1 className="text-7xl text-blue-900 text-gray-700 font-poppins mt-30">Evaluate Skill</h1><br />
              <p className="text-xl"> Our process includes an interview and a short evaluation task to assess your skills
                and readiness, helping us match you with the right opportunity.</p>
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-6  w-100 ">
            <span className="absolute top-2 left-2 text-xl font-semibold text-gray-500 mt-20 opacity-20">Step 3</span>
            <span className="absolute top-2 right-2 text-9xl font-bold text-gray-800 opacity-20">3</span>
            <p className="text-3xl mt-6 text-gray-700">
              <h1 className="text-7xl text-blue-900 text-gray-700 font-poppins mt-30">Track Record</h1><br />
              <p className="text-xl">
                Once selected, gain access to our iPortal to monitor your internship progress,
                track your achievements, and stay on top of your goals.
              </p>
            </p>
          </div>
        </div>
        <div className="mt-20 text-center text-gray-700">
          Still have a question?{' '}
          <a href="#" className="text-blue-600 hover:underline text-xl">Browse documentation</a>{' '}
          or{' '}
          <a href="#" className="text-blue-600 hover:underline text-xl">submit a ticket</a>.
        </div>
        <div>

          <div className="w-full flex items-center gap-6 mt-10">

            <div className="w-1/2 h-300 w-auto  flex items-center justify-center">

              <div
                className="w-120 h-150 bg-cover bg-center mb-150  rounded-xl"
                style={{ backgroundImage: `url(${first})` }}
              >
                
                <div
                  className="w-120 h-150 bg-cover bg-center ml-70  rounded-xl mt-80"
                  style={{ backgroundImage: `url(${second})` }}
                >

                </div>

              </div>

            </div>


            <div className="w-1/2">

              <div className="w-140 ml-150 mb-20">
                <p className="w-40 h-10 bg-blue-300 opacity-40 rounded-full flex items-center justify-center">
                  <Link>What we do... ?</Link>
                </p>
                <h1 className="text-6xl font-bold text-gray-800 mb-4">
                  Empowering Connections in the Digital World
                </h1>
                <p className="text-gray-700 text-2xl  text-bold">
                  We equip future professionals with the essential tools to thrive in both traditional and digital IT landscapes.
                  With years of experience and countless successful placements,
                  Ezitech Institute has perfected a unique learning process that
                  goes beyond theory. We delve deep into practical skills
                  and real-world applications, helping students understand,
                  connect, and excel in the ever-evolving tech market.
                </p>
                <div className=" text-white bg-blue-500 rounded-full w-50 h-fit p-5 mt-10 font-bold"><button>MORE ABOUT US</button></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-10 p-10 ">


          <div className="h-auto w-auto  flex gap-15 p-6 w-100">


            <div className=" p-6 rounded-lg ">
              <div className="w-100  ">
                <h2 className="text-5xl font-bold text-gray-800 mb-4 w-150">
                  Hundreds of Successful Internships & Countings
                </h2>
              </div>
              <div className="w-150">
                <p className="text-gray-700 text-2xl">
                  With a commitment to quality training and career advancement,
                  we've empowered students from diverse backgrounds.
                  Through structured Internship, hands-on projects, and expert
                  mentorship, Ezitech Institute ensures that every student builds a solid foundation in IT.
                </p>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-6 text-center ml-24 w-200
                text-white 
                shadow-[0_10px_25px_rgba(59,130,246,0.5)]
                rounded-xl p-6">
              <div className=" p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-black">1000+</h3>
                <p className="text-sm text-black mt-1">Active Students</p>
              </div>

              <div className=" p-6 rounded-lg ">
                <h3 className="text-4xl font-bold text-black">95%</h3>
                <p className="text-sm text-black mt-1">Positive Feedback</p>
              </div>

              <div className=" p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-black">50+</h3>
                <p className="text-sm text-black mt-1">Industry MoUs</p>
              </div>

              <div className=" p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-black">1200+</h3>
                <p className="text-sm text-black mt-1">Successful Graduates</p>
              </div>
            </div>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-330 ml-50">


            <div className="bg-indigo-100 p-6 rounded-lg h-120 w-100 translate-y-0 transition-transform duration-300 hover:scale-110">
              <h3 className="text-5xl font-bold text-gray-800 mb-2 ">
                App Development
              </h3>
              <p className="text-xl mt-15 text-gray-700">
                We offer hands-on experience to develop cross-platform and native apps for iOS, Android, Windows, and Mac, using the latest tools.
              </p>
              <button className="mt-4 text-blue-600 hover:underline text-sm">
                Explore Landing
              </button>
            </div>


            <div className="bg-pink-100 p-6 rounded-lg h-120 w-100 translate-y-8 transition-transform duration-300 hover:scale-110">
              <h3 className="text-6xl font-bold text-gray-800 mb-2">
                Graphics Design
              </h3>
              <p className="text-xl mt-10 text-gray-700">
                Your journey to becoming a skilled graphic designer. We provide inspiration, tools, and support to help bring your vision to life.
              </p>
              <button className="mt-4 text-blue-600 hover:underline text-sm">
                Explore Landing
              </button>
            </div>


            <div className="bg-green-100 p-6 rounded-lg h-120 w-100 translate-y-0
             transition-transform duration-300 hover:scale-110">
              <h3 className="text-6xl font-bold text-gray-800 mb-2">
                Artificial Intelligence
              </h3>
              <p className="text-xl text-gray-700 mt-10">
                Gain practical experience in AI by building and deploying ML models. Learn data processing, model training & real-world AI applications.
              </p>
              <button className="mt-4 text-blue-600 hover:underline text-sm">
                Explore Landing
              </button>
            </div>


            <div className="bg-yellow-100 p-6 rounded-lg h-120 w-100 translate-y-0 transition-transform duration-300 hover:scale-110">
              <h3 className="text-6xl font-bold text-gray-800 mb-2">
                2D/3D Architecture
              </h3>
              <p className="text-xl mt-10 text-gray-700">
                Mentorship and tools to bring your game or architecture ideas to life with practical guidance and support.
              </p>
              <button className="mt-4 text-blue-600 hover:underline text-sm">
                Explore Landing
              </button>
            </div>


            <div className="bg-purple-100 p-6 rounded-lg h-120 w-100 translate-y-8 transition-transform duration-300 hover:scale-110">
              <h3 className="text-6xl font-bold text-gray-800 mb-2">
                Web Development
              </h3>
              <p className="text-xl text-gray-700 mt-10">
                Build exceptional web experiences using strategic and innovative design.
              </p>
              <button className="mt-4 text-blue-600 hover:underline text-sm">
                Explore Landing
              </button>
            </div>

            <div className="bg-orange-100 p-6 rounded-lg h-120 w-100 translate-y-0 transition-transform duration-300 hover:scale-110">
              <h3 className="text-6xl font-bold text-gray-800 mb-2">
                Digital Marketing
              </h3>
              <p className="text-xl text-gray-700 mt-20">
                Master digital marketing with tools, strategies, and guidance to drive impactful campaigns.
              </p>
              <button className="mt-4 text-blue-600 hover:underline text-sm">
                Explore Landing
              </button>
            </div>

          </div>



          <div className="text-center mt-10 text-gray-700">
            <p>
              Still have a question?{' '}
              <a href="#" className="text-blue-600 hover:underline">Browse documentation</a>{' '}
              or{' '}
              <a href="#" className="text-blue-600 hover:underline">submit a ticket</a>.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 text-center mt-10">
            <div className="p-4 bg-blue-200 rounded-lg w-60">
              Follow us on LinkedIn<br />
              Latest news and updates
            </div>

            <div className="p-4 bg-red-200 rounded-lg w-60">
              Follow us on YouTube<br />
              Latest news and updates
            </div>

            <div className="p-4 bg-blue-500 rounded-lg w-60 text-white">
              Follow us on Facebook<br />
              Latest news and updates
            </div>

            <div className="p-4 bg-green-400 rounded-lg w-60 text-white">
              WhatsApp Channel<br />
              Join the Community
            </div>
          </div>




          <div className="p-10 rounded-lg text-center mt-10 w-350 ml-30 h-80 shadow-lg shadow-blue-500/50">
            <div className="flex gap-6">
              {/* Left div */}
              <div className="flex-1">
                <h3 className="text-6xl font-bold text-gray-800 mb-4">Ready to get started?</h3>
                <p className="text-gray-700 mb-4 text-xl">
                  At Ezitech, we constantly push boundaries to deliver excellence.
                  Our commitment to quality and innovation makes us your trusted partner for growth and success.
                </p>
              </div>


              <div className="flex-1 flex items-center justify-center">
                <button className="bg-blue-600 text-white w-[280px] h-20 text-2xl font-bold rounded-full 
                         shadow-lg shadow-blue-500/50 hover:bg-blue-700 translate-y-0
             transition-transform duration-300 hover:scale-110">
                  Get started now
                </button>
              </div>
            </div>
          </div>




          <div className="flex  justify-center gap-20 mt-10 text-gray-700 ">
            <div className="p-6  rounded-lg w-[350px] text-gray-800">
              <p className="mb-2 font-semibold text-2xl  ">Office:</p>
              <p className="mb-4">#304-B, Amna Plaza, Main Peshawar Rd, Rawalpindi, Punjab</p>

              <p className="mb-2 font-semibold">Phone:</p>
              <p className="mb-4">(92) 337-7777860</p>

              <p className="mb-2 font-semibold">Email:</p>
              <p>info@ezitech.org</p>
            </div>

            <div className="flex  gap-60  w-auto">
              <div className="flex flex-col  text-sm">


                <span className="text-2xl text-gray-700 font-bold">Explore More</span>
                <span className="text-xl mt-5">About Us</span>
                <span className="text-xl">Partners</span>
                <span className="text-xl">Portfolio</span>
                <span className="text-xl">Careers</span>
                <span className="text-xl">Blog</span>
              </div>

              <div className="flex flex-col gap-2 text-sm ">
                <span className="text-2xl text-gray-700 font-bold">Internships</span>
                <span className="text-xl">Strategy</span>
                <span className="text-xl">eCommerce</span>
                <span className="text-xl">Digital Marketing</span>
                <span className="text-xl">Branding</span>
                <span className="text-xl">Design</span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 text-sm">
              <span className="font-bold text-2xl">Updates</span>
              <p className="text-gray-700 max-w-xs text-xl">
                Subscribe to our newsletter to get the latest news & updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="p-2 border border-gray-400 rounded-l-lg w-50 h-15"
                />
                <button className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700">
                  GO
                </button>
              </div>
            </div>
          </div>


        </div>


        <div className="text-center text-gray-500 mt-5">
          © 2024 Ezitech Institute. All rights reserved | Design & Develop by Ezitech Solutions
        </div>

      </div>


    </div>


  )
};
