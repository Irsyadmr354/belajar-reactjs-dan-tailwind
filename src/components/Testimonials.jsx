import React from "react";
import { motion } from "framer-motion";

const quotes = [
  { text: "They turned our vision into a global product — results in 3 months.", author: "Founder, Luxury A" },
  { text: "Absolute craft. The ROI justified the investment within a year.", author: "CEO, FMCG B" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h3 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-2xl font-extrabold">What Leaders Say</motion.h3>
        <div className="mt-8 space-y-6">
          {quotes.map((q, i) => (
            <motion.blockquote key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.1}} className="p-6 rounded-xl bg-gray-50 shadow">
              <p className="italic text-gray-700">“{q.text}”</p>
              <div className="mt-3 font-semibold text-gray-900">— {q.author}</div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
