import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-fade flex items-center" style={{paddingTop: "72px"}}>
      {/* subdued loop video (optional) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="https://cdn.pixabay.com/video/2019/07/10/25213-345929071_tiny.mp4"
      />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Mari membangun website menggunakan <span style={{color:"#3B82F6"}}>teknologi web modern dan framework CSS elegan</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-blue-100/90">
            Dengan teknologi web modern dan framework CSS elegan, Anda dapat menciptakan website yang interaktif,
            elegan, beranimasi, dan terlihat profesional dengan sentuhan modern yang memukau!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.a whileHover={{ scale: 1.03 }} href="#package" className="inline-block px-6 py-3 rounded-lg bg-white text-blue-800 font-semibold shadow-lg">
              Explore the Premium Package
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} href="#contact" className="inline-block px-6 py-3 rounded-lg border border-blue-500 text-blue-400 font-medium">
              Request Private Consultation
            </motion.a>
          </div>

          <div className="mt-12 text-sm text-blue-100/70 max-w-xl">
            <em>Limited availability — we take only a few premium builds per year to ensure craftsmanship, secrecy, and ROI.</em>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
