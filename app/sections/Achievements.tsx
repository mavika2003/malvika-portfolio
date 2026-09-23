"use client";

import { motion } from "framer-motion";
import { Trophy, BookOpen, Users, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "3rd place at a cybersecurity CTF",
    org: "Dubai Police × CTF.ae",
    detail: "Went up against teams from across the region and came home with AED 18,000 and a great story.",
  },
  {
    icon: BookOpen,
    title: "Got a paper published",
    org: "Neural networks for renewable energy",
    detail: "Wrote up how neural nets can make sustainable homes a little smarter about their own energy use.",
  },
  {
    icon: Users,
    title: "Ran workshops for ACM-W",
    org: "BITS Pilani Dubai",
    detail: "Taught ML, Python & Bootstrap sessions and organized alumni events for 100+ students.",
  },
  {
    icon: Award,
    title: "Kept the security skills sharp",
    org: "HackTheBox × O'Reilly",
    detail: "Cleared a global cyber-skills benchmark and picked up a Docker & Kubernetes certification along the way.",
  },
];

export default function Achievements() {
  return (
    <section className="py-28 md:py-36 relative bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-xl"
        >
          <span className="font-mono-tag text-sm text-clay uppercase tracking-widest">04 — Wins</span>
          <h2 className="font-display font-black text-4xl md:text-6xl text-ink mt-4">
            A few highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24, rotate: i % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-soft rounded-3xl p-8 flex gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-clay/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-clay" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink leading-snug">{item.title}</h3>
                <div className="font-mono-tag text-xs text-clay mt-1">{item.org}</div>
                <p className="text-ink/60 mt-2 leading-relaxed">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
