import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/olpmpians LOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeClassName = "font-bold md:border-b-4 md:border-blue-600 md:pb-2";

  return (
    <nav className="bg-white text-gray-800 p-3 shadow-md fixed top-0 left-0 w-full z-40">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-0">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-xl font-bold">
            <img src={logo} alt="logo" className="h-15 w-40" />
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">

            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassName : "pb-2")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? activeClassName : "pb-2")}
            >
              About 
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? activeClassName : "pb-2")}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeClassName : "pb-2")}
            >
              Contact
            </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 pr-4 md:pr-0">
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <div className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
            <div className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`}></div>
            <div className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-300">
          <div className="flex flex-col items-start space-y-4 mt-4 pb-1 text-gray-800 px-4">
          <NavLink
              to="/"
              onClick={()=>setIsOpen(false)}
              className={({ isActive }) => (isActive ? activeClassName : "pb-2")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              onClick={()=>setIsOpen(false)}
              className={({ isActive }) => (isActive ? activeClassName : "pb-2")}
            >
              About 
            </NavLink>
            <NavLink
              to="/products"
              onClick={()=>setIsOpen(false)}
              className={({ isActive }) => (isActive ? activeClassName : "pb-2")}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              onClick={()=>setIsOpen(false)}
              className={({ isActive }) => (isActive ? activeClassName : "pb-2")}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
