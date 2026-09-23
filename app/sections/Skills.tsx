"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "AI & ML",
    items: ["LLMs", "Generative AI", "RAG", "LangGraph", "LangChain", "Microsoft AutoGen", "Prompt Engineering", "scikit-learn", "spaCy"],
  },
  {
    name: "Security",
    items: ["Datadog", "Okta", "CVE / Threat Intel", "JWT Sessions", "Auth & AuthZ", "ML Security"],
  },
  {
    name: "Dev & Design",
    items: ["Next.js", "Node.js", "REST APIs", "Unity", "Playwright", "Selenium"],
  },
  {
    name: "Languages",
    items: ["Python", "TypeScript", "Java", "C++", "C#", "C"],
  },
  {
    name: "Data & Cloud",
    items: ["MySQL", "MongoDB", "Supabase", "Docker", "Kubernetes", "AWS", "GCP"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-xl"
        >
          <span className="font-mono-tag text-sm text-clay uppercase tracking-widest">05 — Toolbox</span>
          <h2 className="font-display font-black text-4xl md:text-6xl text-ink mt-4">
            What I reach for
          </h2>
        </motion.div>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.06 }}
              className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 items-start border-t border-ink/10 pt-6"
            >
              <div className="font-display font-bold text-lg text-clay">{cat.name}</div>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.06 + i * 0.03 }}
                    whileHover={{ scale: 1.06, rotate: -1 }}
                    className="px-4 py-2 bg-white border border-ink/10 rounded-full text-ink/80 text-sm font-medium cursor-default hover:border-clay hover:text-clay transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
