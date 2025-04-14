import React, { useState } from 'react';
import logo from "./assets/images/Group 2 (1).svg";
import logosvg from "./assets/images/Section.svg";
import teamImage from './assets/images/team.svg';
import team1 from './assets/images/team1.svg';
import team2 from './assets/images/team2.svg';
import team3 from './assets/images/team3.svg';
import team4 from './assets/images/team4.svg';
import team5 from './assets/images/team5.svg';
import home from "./assets/images/homelogo.svg";
import social from "./assets/images/faimage.svg";
import single from "./assets/images/single.svg";
import single1 from "./assets/images/single1.svg";
import single2 from "./assets/images/single2.svg";
import single3 from "./assets/images/single3.svg";
import single4 from "./assets/images/single4.svg";
import single5 from "./assets/images/single5.svg";

import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaFacebookF, FaYoutube, FaLinkedinIn, FaSkype } from 'react-icons/fa';
import { MdCall, MdLocationOn, MdEmail } from 'react-icons/md';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex items-start justify-between h-[500px] relative bg-cover bg-center" style={{ backgroundImage: `url(${logosvg})` }}>
        <div className="w-full">
          {/* Top Bar */}
          <div className="bg-[#0A0F2C] text-white text-sm py-2 px-4 flex justify-between items-center flex-wrap">
            <div className="flex items-center space-x-2">
              <span>⚡</span>
              <span>We will go through all the stages of construction</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MdLocationOn className="text-orange-400" />
                <span>203 Madison Ave, New York, USA</span>
              </div>
              <div className="flex items-center space-x-1">
                <MdEmail className="text-orange-400" />
                <span>info@example.com</span>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <div className="bg-orange-500 flex items-center justify-between px-6 py-3 relative flex-wrap">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-white rounded-tr-full rounded-br-full px-4 py-2">
                <img src={logo} alt="Logo" className="h-8" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-white font-semibold">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">Pages ▾</a>
              <a href="#" className="hover:text-gray-300">Services ▾</a>
              <a href="#" className="hover:text-gray-300">Blog ▾</a>
              <a href="#" className="hover:text-gray-300">Shop ▾</a>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </div>
            <div className="flex items-center md:hidden space-x-4">
              <FaSearch className="text-white cursor-pointer" />
              <div className="relative">
                <FaShoppingCart className="text-white cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-white text-orange-500 rounded-full text-xs w-4 h-4 flex items-center justify-center">0</span>
              </div>
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
            <div className="hidden md:flex">
              <button className="bg-white text-orange-500 font-bold px-4 py-2 rounded hover:bg-gray-100 ml-4">
                GET A QUOTE
              </button>
            </div>
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-orange-500 flex flex-col items-center text-white font-semibold py-4 space-y-4 md:hidden z-50">
                <a href="#" className="hover:text-gray-300">Home</a>
                <a href="#" className="hover:text-gray-300">Pages ▾</a>
                <a href="#" className="hover:text-gray-300">Services ▾</a>
                <a href="#" className="hover:text-gray-300">Blog ▾</a>
                <a href="#" className="hover:text-gray-300">Shop ▾</a>
                <a href="#" className="hover:text-gray-300">Contact</a>
                <button className="bg-white text-orange-500 font-bold px-4 py-2 rounded hover:bg-gray-100">
                  GET A QUOTE
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="px-4 md:px-20 mt-16">
        <div className="text-center">
          <div className="text-center mt-10 px-4 md:px-0">
            <h1 className="text-orange-600 text-lg sm:text-xl md:text-2xl">
              Great Experience in building
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Professional Team
            </h2>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 place-items-center">
            {[{ img: teamImage, name: 'Marc Chiasson' }, { img: team1, name: 'Marc Boucher' }, { img: team2, name: 'Mitchel Johnson' },
            { img: team3, name: 'Jorse Buttler' }, { img: team4, name: 'Cris Wood' }, { img: team5, name: 'Mark Stone' }]
              .map((member, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <img src={member.img} alt={member.name} className="h-80 object-cover" />
                  <div className="bg-gray-100 rounded-tr-xl rounded-bl-[60px] px-6 py-4 w-fit shadow-md mt-2">
                    <h2 className="text-lg font-bold text-gray-900">{member.name}</h2>
                    <p className="text-sm text-gray-500">Head Railway Construction</p>
                  </div>
                </div>
              ))}
          </div>
          </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#14072B] text-white md:px-20 mt-20 ">
        <div className="flex flex-wrap justify-center ">
          {[single, single1, single2, single3, single4, single5].map((img, idx) => (
            <img key={idx} src={img} alt={`footer-icon-${idx}`} className="h-12" />
          ))}
        </div>

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-purple-800 py-6 mt-8 gap-6">
          {/* Call Info */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <MdCall className="text-orange-500 text-2xl" />
            <div>
              <p className="text-orange-500 font-semibold text-center md:text-left">Give us a call</p>
              <p className="font-bold text-white text-lg text-center md:text-left">+123-456-7890</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xl w-full md:w-auto justify-center">
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
            <FaYoutube className="hover:text-orange-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
            <FaSkype className="hover:text-orange-500 cursor-pointer" />
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto justify-center md:justify-end">
            <div className="text-white font-bold text-center sm:text-left">Join Newsletter</div>
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#2A0C4E] text-white rounded-full px-4 py-2 outline-none w-full sm:w-auto"
            />
            <button className="bg-[#2A0C4E] hover:bg-[#3a106e] text-white font-semibold rounded-full px-6 py-2 w-full sm:w-auto">
              Submit
            </button>
          </div>
        </div>


        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 pb-10 border-b border-purple-800">
          <div>
            <img src={home} alt="logo" className="h-6 mb-4" />
            <p className="text-sm text-gray-300">Improve efficiency, provide a better Customer experience with modern Technolo services available</p>
            <div className="flex gap-4 mt-4">
              <img src={social} alt="social" className="h-6" />
            </div>
          </div>
          {['Resources', 'Company', 'Help Page'].map((title, idx) => (
            <div key={idx}>
              <h3 className="text-white font-bold text-lg underline mb-3">{title}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>About</li>
                <li>Career</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-400 py-4">
          © Copyright 2023 All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default App;
