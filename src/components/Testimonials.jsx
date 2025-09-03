import React from "react";
import { motion } from "framer-motion";

const quotes = [
  { text: "Transformed our landing page into a high-converting experience.", author: "Founder, Startup A" },
  { text: "The ReactJS + TailwindCSS solution boosted our engagement by 45%.", author: "CEO, SaaS B" },
  { text: "Clean, interactive UI with smooth animations — exceeded expectations.", author: "Product Lead, E-commerce C" },
  { text: "Delivered fast, modern, and scalable web apps on time.", author: "CTO, Tech D" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.h3 
          initial={{opacity:0,y:20}} 
          whileInView={{opacity:1,y:0}} 
          className="text-3xl font-extrabold text-blue-800"
        >
          What Our Clients Say
        </motion.h3>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote 
              key={i} 
              initial={{opacity:0,y:20}} 
              whileInView={{opacity:1,y:0}} 
              transition={{delay:i*0.1}} 
              className="p-6 rounded-xl bg-blue-50 shadow-lg"
            >
              <p className="italic text-blue-700">“{q.text}”</p>
              <div className="mt-3 font-semibold text-blue-900">— {q.author}</div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
