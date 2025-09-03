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
            Build a digital masterpiece — <span style={{color:"var(--gold)"}}>IDR 1,000,000,000</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-amber-100/90">
            A fully bespoke web experience: strategy, branding, UI/UX craft, private R&D, high-performance engineering,
            enterprise integrations, and white-glove post-launch growth — handled by our atelier as if we built your digital palace.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.a whileHover={{ scale: 1.03 }} href="#package" className="inline-block px-6 py-3 rounded-lg bg-white text-deep font-semibold shadow-lg">
              Explore the IDR 1B Package
            </motion.a>
            <motion.a whileHover={{ scale: 1.03 }} href="#contact" className="inline-block px-6 py-3 rounded-lg border border-amber-300 text-amber-200 font-medium">
              Request Private Pitch
            </motion.a>
          </div>

          <div className="mt-12 text-sm text-amber-100/70 max-w-xl">
            <em>Limited availability — we take a handful of 1B builds per year to ensure craft, secrecy and ROI.</em>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
