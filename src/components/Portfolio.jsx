import React from "react";
import { motion } from "framer-motion";

const items = [
  { title: "Modern Dashboard", desc: "Interaktif, responsif, dan real-time analytics", img: "/assets/dashboard.webp" },
  { title: "E-Commerce Landing Page", desc: "Produk showcase dengan animasi dan UI elegan", img: "/assets/e-commerce.webp" },
  { title: "Portfolio Website", desc: "Clean design dengan interaksi modern dan responsif", img: "/assets/portfolio.png" },
];


export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h3 
          initial={{opacity:0,y:20}} 
          whileInView={{opacity:1,y:0}} 
          className="text-3xl font-extrabold text-center text-blue-800"
        >
          Portofolio ReactJS & TailwindCSS
        </motion.h3>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div 
              key={idx} 
              initial={{opacity:0,y:20}} 
              whileInView={{opacity:1,y:0}} 
              transition={{delay:idx*0.12}} 
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <img src={it.img} alt={it.title} className="w-full h-44 object-cover" loading="lazy"/>
              <div className="p-4">
                <h4 className="font-semibold text-blue-700">{it.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
                <div className="mt-4">
                  <a href="#contact" className="text-blue-500 font-medium">Read more →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
