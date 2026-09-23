"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, MapPin, Trophy } from "lucide-react";

const chips = [
  { label: "LangGraph", position: "top-10 -left-10", delay: "float-soft" },
  { label: "Python", position: "top-1/3 -right-10", delay: "float-soft-delay" },
  { label: "AutoGen", position: "bottom-28 -left-14", delay: "float-soft-delay" },
  { label: "Next.js", position: "bottom-10 -right-6", delay: "float-soft" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-28 pb-20 overflow-hidden dot-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-ink/10 px-4 py-2 text-sm text-ink/70 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Open to AI engineering & research roles
          </div>

          <p className="mt-8 font-display italic text-2xl md:text-3xl text-clay">Hi, I&apos;m</p>
          <h1 className="font-display font-black tracking-tight text-ink leading-[0.95] text-6xl sm:text-7xl xl:text-8xl">
            Malvika
            <br />
            Sawant<span className="text-clay">.</span>
          </h1>

          <p className="mt-7 text-xl md:text-2xl text-ink/80 max-w-xl leading-snug">
            I build <span className="squiggle font-semibold text-ink">agentic AI systems</span> — and
            make sure they behave once they meet the real world.
          </p>
          <p className="mt-4 text-base md:text-lg text-ink/60 max-w-lg leading-relaxed">
            Grad student at Columbia, ex-AI engineer at Deriv, occasional CTF winner. Mostly I like
            turning messy problems into calm, working systems.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#journey"
              className="btn-tactile group inline-flex items-center gap-2 px-7 py-4 bg-ink text-cream font-semibold rounded-full hover:bg-clay"
            >
              See my journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-tactile inline-flex items-center gap-2 px-7 py-4 bg-white border border-ink/15 text-ink font-semibold rounded-full hover:border-clay hover:text-clay"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/55">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-clay" /> New York · Dubai
            </span>
            <span className="font-mono-tag text-xs">MS CS @ Columbia &apos;27</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-[280px] sm:w-[340px] lg:w-[380px]"
        >
          <div
            className="absolute -inset-8 rounded-full border-2 border-dashed border-clay/30 animate-[spin_40s_linear_infinite]"
            aria-hidden="true"
          />
          <div className="absolute -inset-2 rounded-t-full rounded-b-[3rem] bg-clay-100" aria-hidden="true" />

          <div className="relative aspect-[4/5] rounded-t-full rounded-b-[3rem] overflow-hidden border-[6px] border-white shadow-2xl">
            <Image
              src="/images/linkedin/devfest-dubai.png"
              alt="Malvika Sawant"
              fill
              priority
              sizes="(max-width: 1024px) 340px, 380px"
              className="object-cover object-[center_30%]"
            />
          </div>

          {chips.map((chip) => (
            <div
              key={chip.label}
              className={`hidden sm:flex absolute ${chip.position} ${chip.delay} items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg border border-ink/5`}
            >
              <span className="w-2 h-2 rounded-full bg-clay" />
              {chip.label}
            </div>
          ))}

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rotate-[-4deg] flex items-center gap-3 rounded-2xl bg-ink text-cream px-5 py-3 shadow-xl whitespace-nowrap">
            <Trophy className="w-5 h-5 text-clay-400" />
            <div>
              <div className="font-display font-bold text-sm">3rd place</div>
              <div className="text-xs text-cream/70">Dubai Police AI CTF</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
