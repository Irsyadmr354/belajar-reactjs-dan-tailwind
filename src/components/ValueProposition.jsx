import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaLock, FaGlobe } from "react-icons/fa";

const items = [
  { icon: <FaRocket size={28} />, title: "Launch Velocity", desc: "From boardroom to live in curated phases — no fluff." },
  { icon: <FaHandshake size={28} />, title: "Concierge Collaboration", desc: "Dedicated project partner, weekly board-level updates." },
  { icon: <FaLock size={28} />, title: "Enterprise-grade Security", desc: "Secure infra, SSO, compliance & legal readiness." },
  { icon: <FaGlobe size={28} />, title: "Global Readiness", desc: "Localization, payment rails, and export-ready UX." },
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="text-3xl font-extrabold">What IDR 1B Unlocks</motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6, delay:0.15}} className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A boutique engagement that treats your brand like a sovereign product — we deliver not just a site but an enduring digital asset.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6, delay:idx*0.12}} className="p-6 rounded-xl shadow-lg bg-gradient-to-tr from-white to-gray-50">
              <div className="text-amber-500 mb-4">{it.icon}</div>
              <h4 className="font-semibold">{it.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
