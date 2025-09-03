import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Discovery", sub: "Kumpulkan requirement & riset teknologi" },
  { title: "Planning", sub: "Tentukan struktur project & komponen" },
  { title: "Design", sub: "UI/UX prototipe dengan TailwindCSS" },
  { title: "Development", sub: "Bangun front-end dengan ReactJS" },
  { title: "Launch", sub: "Deploy & testing interaktif" },
  { title: "Optimize", sub: "Performance tuning & iterasi" },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h3 
          initial={{opacity:0,y:20}} 
          whileInView={{opacity:1,y:0}} 
          className="text-3xl font-extrabold text-blue-800"
        >
          ReactJS + TailwindCSS Process
        </motion.h3>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Proses terstruktur untuk membangun website interaktif dan modern menggunakan ReactJS & TailwindCSS.
        </p>

        <div className="mt-10 grid md:grid-cols-6 gap-6">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{opacity:0,y:20}} 
              whileInView={{opacity:1,y:0}} 
              transition={{delay:i*0.12}} 
              className="p-4"
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold shadow">
                {i+1}
              </div>
              <h5 className="mt-3 font-semibold text-blue-700">{s.title}</h5>
              <p className="text-sm text-gray-500 mt-1">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
