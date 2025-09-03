import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 top-0 left-0"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center text-deep shadow-lg">
            <span className="font-extrabold text-sm">RH</span>
          </div>
          <span className="font-semibold text-lg">Rizki Herbalindo — Atelier Digital</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#package" className="hover:text-gray-900">The 1B Package</a>
          <a href="#process" className="hover:text-gray-900">Process</a>
          <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-amber-400 text-green-900 font-semibold hover:brightness-95">Talk to Concierge</a>
        </div>
      </div>
    </motion.nav>
  );
}
