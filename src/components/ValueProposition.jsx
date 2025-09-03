import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaLock, FaGlobe } from "react-icons/fa";

const items = [
  { icon: <FaRocket size={28} className="text-blue-500"/>, title: "Launch Velocity", desc: "From idea to live ReactJS build — fast, polished, and scalable." },
  { icon: <FaHandshake size={28} className="text-blue-500"/>, title: "Concierge Collaboration", desc: "Dedicated project partner, weekly updates, and code reviews." },
  { icon: <FaLock size={28} className="text-blue-500"/>, title: "Enterprise-grade Security", desc: "Secure React/Tailwind infra, auth, and compliance-ready." },
  { icon: <FaGlobe size={28} className="text-blue-500"/>, title: "Global Readiness", desc: "Responsive, localized, and performance-optimized for all users." },
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{opacity:0,y:20}} 
          whileInView={{opacity:1,y:0}} 
          transition={{duration:0.6}} 
          className="text-3xl font-extrabold text-blue-800"
        >
          What Our ReactJS + TailwindCSS Package Unlocks
        </motion.h2>

        <motion.p 
          initial={{opacity:0,y:20}} 
          whileInView={{opacity:1,y:0}} 
          transition={{duration:0.6, delay:0.15}} 
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          A boutique ReactJS engagement that treats your product like a premium digital asset — we deliver not just a site, but a scalable, interactive experience.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          {items.map((it, idx) => (
            <motion.div 
              key={idx} 
              initial={{opacity:0,y:20}} 
              whileInView={{opacity:1,y:0}} 
              transition={{duration:0.6, delay:idx*0.12}} 
              className="p-6 rounded-xl shadow-lg bg-gradient-to-tr from-white to-blue-50"
            >
              <div className="mb-4">{it.icon}</div>
              <h4 className="font-semibold text-blue-700">{it.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
