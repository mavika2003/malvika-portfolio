"use client";

import { motion } from "framer-motion";
import { Cpu, LineChart, Fingerprint, Leaf, type LucideIcon } from "lucide-react";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  icon: LucideIcon;
  tone: string;
};

const projects: Project[] = [
  {
    title: "Agentic FPGA orchestration",
    blurb: "Research project: agents that compile, deploy and tune FPGA workloads by themselves — with access guardrails so they share a lab politely.",
    tags: ["Agents", "FPGA", "Security"],
    icon: Cpu,
    tone: "bg-ink text-cream",
  },
  {
    title: "Salary prediction app",
    blurb: "Trained a model on LinkedIn data to guess what a role should pay, then wrapped it in a friendly Streamlit app.",
    tags: ["Python", "Pandas", "Streamlit"],
    icon: LineChart,
    tone: "bg-clay-50 text-ink",
  },
  {
    title: "Smart attendance manager",
    blurb: "Hardware meets software: an Arduino-powered attendance system with a Flutter app and MySQL behind it.",
    tags: ["Flutter", "Arduino", "MySQL"],
    icon: Fingerprint,
    tone: "bg-white text-ink",
  },
  {
    title: "Neural nets for greener homes",
    blurb: "A published research paper on using neural networks to help sustainable homes manage renewable energy.",
    tags: ["Neural Networks", "Research"],
    icon: Leaf,
    tone: "bg-white text-ink",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="font-mono-tag text-xs text-clay uppercase tracking-[0.2em]">04 · Projects</span>
          <h2 className="font-display font-black text-4xl md:text-6xl text-ink mt-4 leading-[1.05]">
            Things I&apos;ve <span className="squiggle">tinkered</span> with
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const dark = project.tone.includes("bg-ink");
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`${project.tone} ${dark ? "" : "card-soft"} rounded-[2rem] p-8 md:p-10 flex flex-col`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      dark ? "bg-cream/10" : "bg-clay/10"
                    }`}
                  >
                    <project.icon className={`w-7 h-7 ${dark ? "text-clay-400" : "text-clay"}`} />
                  </div>
                  <span className={`font-mono-tag text-xs ${dark ? "text-cream/40" : "text-ink/30"}`}>
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mt-8">{project.title}</h3>
                <p className={`mt-3 leading-relaxed ${dark ? "text-cream/70" : "text-ink/65"}`}>
                  {project.blurb}
                </p>
                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono-tag text-xs px-3 py-1.5 rounded-full ${
                        dark ? "bg-cream/10 text-cream/80" : "bg-clay-50 text-clay-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
