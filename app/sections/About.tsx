"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "100K+", label: "daily requests running through systems I've built" },
  { value: "50%", label: "quicker escalations, once an agent started triaging" },
  { value: "30%", label: "fewer false alarms after the fraud models shipped" },
  { value: "3rd", label: "place finish at a Dubai Police AI × security CTF" },
];

export default function About() {
  return (
    <section id="work" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono-tag text-sm text-clay uppercase tracking-widest">01 — About</span>
            <h2 className="font-display font-black text-4xl md:text-6xl text-ink mt-4 leading-tight">
              Part engineer,<br />part <span className="italic text-clay">researcher.</span>
            </h2>
            <p className="text-lg text-ink/70 mt-6 leading-relaxed max-w-md">
              I spent the last two years shipping AI systems at Deriv — from IAM platforms
              processing six figures of requests daily, to SOC tooling that catches fraud before
              it spreads. Now I'm back in research mode at Columbia, building agentic systems
              for FPGA workloads and teaching AI to a room of 100+ students.
            </p>
            <p className="text-lg text-ink/70 mt-4 leading-relaxed max-w-md">
              I'm drawn to the messy middle — where a model meets a real production system
              and has to actually behave.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-soft rounded-3xl p-6 md:p-8"
              >
                <div className="font-display font-black text-3xl md:text-4xl text-clay">
                  {stat.value}
                </div>
                <div className="text-sm text-ink/60 mt-2 leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
