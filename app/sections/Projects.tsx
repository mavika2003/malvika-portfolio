"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Salary Prediction Web App",
    description: "ML model trained on LinkedIn data to forecast salaries, shipped as an interactive Streamlit app.",
    image: "/images/projects/salary-prediction.jpg",
    tags: ["Python", "Pandas", "Streamlit"],
  },
  {
    title: "Attendance Manager",
    description: "End-to-end hardware + software attendance system built on Flutter, MySQL, and Arduino.",
    image: "/images/projects/attendance-system.jpg",
    tags: ["Flutter", "MySQL", "Arduino"],
  },
  {
    title: "Renewable Energy AI",
    description: "Published research on neural-network-based renewable energy solutions for sustainable homes.",
    image: "/images/projects/renewable-energy.jpg",
    tags: ["Neural Networks", "Research"],
  },
  {
    title: "Agentic FPGA Orchestration",
    description: "Agentic system that compiles, deploys, and tunes FPGA workloads with access-control guardrails.",
    image: "",
    tags: ["Agents", "FPGA", "Security"],
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(project.image) && !imgError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card-soft rounded-3xl overflow-hidden group"
    >
      <div className="relative aspect-[16/10] bg-clay-50">
        {hasImage ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-clay-100 to-cream flex items-center justify-center">
            <Sparkles className="w-14 h-14 text-clay/50" />
          </div>
        )}
      </div>
      <div className="p-7 md:p-8">
        <h3 className="font-display font-bold text-2xl text-ink">{project.title}</h3>
        <p className="text-ink/60 mt-2 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono-tag text-xs px-3 py-1.5 bg-clay-50 text-clay-700 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 inline-flex items-center gap-1.5 text-ink font-semibold text-sm group-hover:gap-3 transition-all">
          Details <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-xl"
        >
          <span className="font-mono-tag text-sm text-clay uppercase tracking-widest">03 — Projects</span>
          <h2 className="font-display font-black text-4xl md:text-6xl text-ink mt-4">
            Things I've <span className="squiggle">shipped</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
