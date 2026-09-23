"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Code2, Terminal, Cloud, Atom, type LucideIcon } from "lucide-react";

const categories: { name: string; icon: LucideIcon; items: string[] }[] = [
  {
    name: "AI & ML",
    icon: Brain,
    items: ["LLMs", "RAG", "LangGraph", "LangChain", "AutoGen", "Langfuse", "scikit-learn", "spaCy"],
  },
  {
    name: "Security",
    icon: Shield,
    items: ["Datadog", "Okta", "Threat intel", "Auth & AuthZ", "JWT", "ML security"],
  },
  {
    name: "Building",
    icon: Code2,
    items: ["Next.js", "Node.js", "REST APIs", "Unity", "Playwright", "n8n"],
  },
  {
    name: "Languages",
    icon: Terminal,
    items: ["Python", "TypeScript", "Java", "C++", "C#", "C"],
  },
  {
    name: "Data & cloud",
    icon: Cloud,
    items: ["MySQL", "MongoDB", "Supabase", "Docker", "Kubernetes", "AWS", "GCP"],
  },
  {
    name: "Currently curious about",
    icon: Atom,
    items: ["Quantum computing", "Responsible AI", "NLP"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-paper/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="font-mono-tag text-xs text-clay uppercase tracking-[0.2em]">05 · Toolbox</span>
          <h2 className="font-display font-black text-4xl md:text-6xl text-ink mt-4 leading-[1.05]">
            What I reach for
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-soft rounded-[2rem] p-7"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-clay/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-clay" />
                </div>
                <h3 className="font-display font-bold text-lg text-ink">{cat.name}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-cream border border-ink/10 text-sm text-ink/80 hover:border-clay hover:text-clay transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
