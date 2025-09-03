import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 top-0 left-0"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between bg-sky-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 flex items-center justify-center text-deep-blue shadow-lg">
            <span className="font-extrabold text-sm">CSS</span>
          </div>
          <span className="font-semibold text-lg">Ngoding</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#package" className="hover:text-gray-900">Beranda</a>
          <a href="#process" className="hover:text-gray-900">Tentang Kami</a>
          <a href="#portfolio" className="hover:text-gray-900">Sosial Media</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:brightness-85">Hubungi Kami</a>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <div className="w-6 h-0.5 bg-gray-700 mb-1 transition-all" style={{ transform: isOpen ? "rotate(45deg) translateY(6px)" : "rotate(0)" }} />
            <div className="w-6 h-0.5 bg-gray-700 mb-1 transition-all" style={{ opacity: isOpen ? 0 : 1 }} />
            <div className="w-6 h-0.5 bg-gray-700 transition-all" style={{ transform: isOpen ? "rotate(-45deg) translateY(-6px)" : "rotate(0)" }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sky-50 px-6 py-4 flex flex-col gap-3 text-gray-700">
          <a href="#package" className="hover:text-gray-900" onClick={() => setIsOpen(false)}>Beranda</a>
          <a href="#process" className="hover:text-gray-900" onClick={() => setIsOpen(false)}>Tentang Kami</a>
          <a href="#portfolio" className="hover:text-gray-900" onClick={() => setIsOpen(false)}>Sosial Media</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:brightness-85" onClick={() => setIsOpen(false)}>Hubungi Kami</a>
        </div>
      )}
    </motion.nav>
  );
}
