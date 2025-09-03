import React from "react";
import { motion } from "framer-motion";

const items = [
  { title: "Luxury Brand A", desc: "Replatform + merchandising", img: "https://images.unsplash.com/photo-1508385082359-f0f2e6c0b6e6?auto=format&fit=crop&w=800&q=60" },
  { title: "Global FMCG B", desc: "Omnichannel & headless commerce", img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=60" },
  { title: "D2C Skincare C", desc: "Conversion-first design", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h3 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-3xl font-extrabold text-center">Selected Case Studies</motion.h3>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:idx*0.12}} className="rounded-xl overflow-hidden shadow-lg bg-white">
              <img src={it.img} alt={it.title} className="w-full h-44 object-cover" loading="lazy"/>
              <div className="p-4">
                <h4 className="font-semibold">{it.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
                <div className="mt-4">
                  <a href="#contact" className="text-amber-500 font-medium">Read more →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
