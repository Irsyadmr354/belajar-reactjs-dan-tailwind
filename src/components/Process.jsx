import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Discovery", sub: "NDA, competitors, stakeholders" },
  { title: "Strategy", sub: "Positioning & KPIs" },
  { title: "Design", sub: "Prototypes & design system" },
  { title: "Build", sub: "Engineering & infra" },
  { title: "Launch", sub: "Go-to-market & monitoring" },
  { title: "Grow", sub: "CRO & retainer" },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h3 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="text-3xl font-extrabold">Concierge Process</motion.h3>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">A crafted, risk-managed delivery model — complete with executive reporting and performance guarantees.</p>

        <div className="mt-10 grid md:grid-cols-6 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.12}} className="p-4">
              <div className="mx-auto w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 font-semibold shadow">{i+1}</div>
              <h5 className="mt-3 font-semibold">{s.title}</h5>
              <p className="text-sm text-gray-500 mt-1">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
