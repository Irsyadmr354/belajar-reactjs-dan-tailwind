import React from "react";
import { motion } from "framer-motion";

export default function The1BPackage() {
  return (
    <section id="package" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}}>
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-4">
                  <div className="text-amber-400 text-3xl font-extrabold">IDR 1,000,000,000</div>
                  <div className="text-sm text-gray-500">— Bespoke Digital Atelier</div>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">What you get — end to end</h3>
                <ul className="mt-4 space-y-3 text-gray-700">
                  <li>• Strategic kickoff workshop + market & tech due diligence</li>
                  <li>• Brand & visual system bespoke (typography, motion, tone)</li>
                  <li>• Fully custom UI/UX prototypes, validated with users</li>
                  <li>• High-performance frontend + SSR + CDN + analytics</li>
                  <li>• Private integrations (ERP/CRM), payments, and enterprise SSO</li>
                  <li>• 12 months white-glove maintenance, growth & CRO support</li>
                  <li>• Legal packaging: privacy, T&C, export readiness</li>
                </ul>

                <div className="mt-8 flex gap-4">
                  <a href="#contact" className="px-6 py-3 bg-amber-400 rounded-full text-green-900 font-semibold shadow">Request Private Briefing</a>
                  <a href="#portfolio" className="px-6 py-3 border rounded-full text-gray-700">See Case Studies</a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-100 to-amber-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800">Concierge Process Snapshot</h4>
                <ol className="mt-4 space-y-3 text-gray-700">
                  <li>1) Private NDA & Discovery (1 week)</li>
                  <li>2) Strategy Sprint & KPI definition (2 weeks)</li>
                  <li>3) Design System & Prototype (4–6 weeks)</li>
                  <li>4) Engineering (8–12 weeks)</li>
                  <li>5) QA, Launch & Growth Handoff (4 weeks)</li>
                  <li>6) Ongoing Strategy & Growth (12 months)</li>
                </ol>
                <div className="mt-6 text-sm text-gray-500">Estimated timeline: 5–6 months (end-to-end).</div>
              </div>
            </div>

            <div className="border-t border-gray-100 p-6 text-sm text-gray-600">
              <strong>Note:</strong> This premium offering is tailor-made — final scope & pricing are aligned during the private briefing.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
