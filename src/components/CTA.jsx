import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-amber-400 to-green-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h3 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-4xl font-extrabold">Ready to commission a masterpiece?</motion.h3>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:0.15}} className="mt-4 max-w-2xl mx-auto text-lg">
          Book a private briefing with our executive atelier. We respect confidentiality and craft — NDA available on request.
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="mailto:hello@rizkiherbalindo.com?subject=Private%20Briefing%20Request" className="px-6 py-3 bg-white text-green-900 rounded-full font-semibold shadow">Email Executive</a>
          <a href="#contact" className="px-6 py-3 border rounded-full text-white">Schedule Call</a>
        </div>
      </div>
    </section>
  );
}
