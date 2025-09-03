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
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 flex items-center justify-center text-deep-blue shadow-lg">
            <span className="font-extrabold text-sm">CSS</span>
          </div>
          <span className="font-semibold text-lg">Ngoding</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#package" className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:brightness-80">Beranda</a>
          <a href="#process" className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:brightness-80">Tentang Kami</a>
          <a href="#portfolio" className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:brightness-80">Sosial Media</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:brightness-80">Hubungi Kami</a>
        </div>
      </div>
    </motion.nav>
  );
}
