"use client";

import { motion } from "framer-motion";
import { Bot, ShieldCheck, GraduationCap } from "lucide-react";

const facts = [
  { label: "Based in", value: "New York, by way of Dubai" },
  { label: "Studying", value: "MS Computer Science (ML), Columbia" },
  { label: "Undergrad", value: "B.E. Computer Science, BITS Pilani Dubai" },
  { label: "Currently", value: "Research + TA-ing AI at Columbia" },
  { label: "Previously", value: "AI Engineer at Deriv" },
];

const stats = [
  { value: "100K+", label: "requests a day through systems I built" },
  { value: "3.8", label: "GPA at Columbia so far" },
  { value: "100+", label: "students I help teach AI" },
  { value: "AED 18K", label: "won at a Dubai Police CTF" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono-tag text-xs text-clay uppercase tracking-[0.2em]">01 · Hello</span>
            <h2 className="font-display font-black text-4xl md:text-6xl text-ink mt-4 leading-[1.05]">
              Part engineer,
              <br />
              part <span className="italic text-clay">researcher.</span>
            </h2>
            <div className="mt-7 space-y-4 text-lg text-ink/70 leading-relaxed max-w-lg">
              <p>
                I spent the last couple of years at Deriv building AI that real teams leaned on every
                day — identity platforms, security tooling, and agents that sort through the noise so
                humans don&apos;t have to.
              </p>
              <p>
                Now I&apos;m back in the classroom (on both sides of it) at Columbia, researching agents
                that manage their own hardware and helping 100+ students fall in love with AI.
              </p>
              <p>
                I&apos;m happiest in the messy middle — where a model meets a production system and has to
                actually behave.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-soft rounded-[2rem] p-7 md:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-xl text-ink">Quick facts</span>
              <span className="font-mono-tag text-xs text-ink/40">about.me</span>
            </div>
            <dl className="mt-6 divide-y divide-ink/10">
              {facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-[110px_1fr] gap-4 py-3.5">
                  <dt className="text-sm text-ink/50">{fact.label}</dt>
                  <dd className="text-sm md:text-base font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-clay-50 p-4">
                  <div className="font-display font-black text-2xl md:text-3xl text-clay">{stat.value}</div>
                  <div className="text-xs text-ink/60 mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-2xl md:text-3xl text-ink"
          >
            What I spend my days on
          </motion.h3>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 rounded-[2rem] bg-ink text-cream p-8 md:p-10 relative overflow-hidden"
            >
              <Bot className="w-10 h-10 text-clay-400" />
              <h4 className="font-display font-bold text-2xl md:text-3xl mt-6">Agentic AI systems</h4>
              <p className="mt-3 text-cream/70 leading-relaxed max-w-lg">
                Agents that triage escalations, discover tools, and tune hardware on their own — built
                with LangGraph, AutoGen and a healthy amount of guardrails.
              </p>
              <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-clay/30 blur-3xl" aria-hidden="true" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="card-soft rounded-[2rem] p-8"
            >
              <ShieldCheck className="w-10 h-10 text-clay" />
              <h4 className="font-display font-bold text-2xl mt-6 text-ink">AI × Security</h4>
              <p className="mt-3 text-ink/60 leading-relaxed">
                Fraud detection, SOC automation, and identity platforms — plus the occasional CTF.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="card-soft rounded-[2rem] p-8"
            >
              <GraduationCap className="w-10 h-10 text-clay" />
              <h4 className="font-display font-bold text-2xl mt-6 text-ink">Research & teaching</h4>
              <p className="mt-3 text-ink/60 leading-relaxed">
                Researching agentic hardware workflows and TA-ing Columbia&apos;s AI course.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="md:col-span-2 rounded-[2rem] bg-clay-50 border border-clay/15 p-8 md:p-10 flex items-center"
            >
              <p className="font-display italic text-2xl md:text-3xl text-ink leading-snug">
                &ldquo;The best AI is the kind people forget is there — it just quietly makes their day
                easier.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
