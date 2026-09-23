"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "Columbia University",
    role: "Research Assistant",
    period: "Sep 2026 — Present",
    description:
      "Back in research mode — teaching agents to manage their own hardware. I'm building systems that can compile, deploy, and tune FPGA workloads on their own, with enough guardrails that they don't step on each other across a shared lab.",
  },
  {
    company: "Columbia University",
    role: "Teaching Assistant, Artificial Intelligence",
    period: "Sep 2026 — Present",
    description:
      "Spending office hours untangling search algorithms and neural nets for a room of 100+ students. Turns out explaining AI is its own kind of debugging.",
  },
  {
    company: "Deriv",
    role: "AI Engineer Intern",
    period: "Jun 2026 — Aug 2026",
    description:
      "Came back for a summer to build an agent that reads incoming client escalations and routes them itself — Security and Compliance stopped waiting around, resolution time roughly halved.",
  },
  {
    company: "Deriv",
    role: "AI Engineer",
    period: "Jul 2025 — Jan 2026",
    description:
      "The stretch where things got real. I led the build of an AI-powered identity platform that ended up handling six figures of requests a day, plus a fraud & SOC system that quietly caught what humans were missing. This is also when I found myself explaining agentic workflows to the leadership team on that big screen below.",
    images: [
      { src: "/images/linkedin/deriv-presenting-1.jpg", alt: "Presenting the AI SOC platform to leadership at Deriv" },
      { src: "/images/linkedin/deriv-presenting-2.jpg", alt: "Walking Deriv's leadership through the agentic workflow demo" },
    ],
  },
  {
    company: "Deriv",
    role: "AI Engineer Intern",
    period: "Feb 2025 — Jun 2025",
    description:
      "My first real taste of production AI — built a little tool-discovery system so teams could find the internal AI tools that already existed, and set up anomaly detection across Datadog, Okta & Cloudflare that saved everyone hours of manual watching.",
  },
  {
    company: "Techrobotix FZCO",
    role: "Digital Solutions Intern",
    period: "Jun 2023 — Aug 2023",
    description:
      "Way back when — built a campus navigation app in Unity that 500+ students actually used to not get lost.",
  },
];

export default function Experience() {
  return (
    <section className="py-28 md:py-36 relative bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono-tag text-sm text-clay uppercase tracking-widest">02 — Path</span>
          <h2 className="font-display font-black text-4xl md:text-6xl mt-4">
            Where I've been building
          </h2>
        </motion.div>

        <div className="divide-y divide-cream/15">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group grid md:grid-cols-[1fr_2.4fr] gap-4 md:gap-10 py-8 md:py-10"
            >
              <div>
                <div className="font-display font-bold text-xl md:text-2xl">{exp.company}</div>
                <div className="text-clay font-medium mt-1">{exp.role}</div>
                <div className="font-mono-tag text-xs text-cream/50 mt-2">{exp.period}</div>
              </div>
              <div className="max-w-2xl">
                <p className="text-cream/70 text-base md:text-lg leading-relaxed">
                  {exp.description}
                </p>

                {exp.images && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {exp.images.map((img) => (
                      <motion.div
                        key={img.src}
                        initial={{ opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03, rotate: -1 }}
                        className="relative w-40 sm:w-48 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-cream/15 shadow-xl"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover object-center"
                          sizes="200px"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
