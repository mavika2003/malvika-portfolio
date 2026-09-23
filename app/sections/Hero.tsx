"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-8 items-center">
        {/* Left: headline with inline photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono-tag text-sm text-clay uppercase tracking-widest">
            Hey, I'm Malvika ✦ based between NYC & Dubai
          </span>

          <h1 className="font-display font-black leading-[0.95] tracking-tight text-ink mt-6 text-[13vw] lg:text-[5.2vw]">
            I build{" "}
            <span className="inline-chip w-[0.85em] h-[0.85em] relative -translate-y-1">
              <Image
                src="/images/linkedin/deriv-presenting-1.jpg"
                alt="Malvika presenting"
                fill
                className="object-cover"
              />
            </span>{" "}
            agentic
            <br />
            AI systems that
            <br />
            <span className="text-clay italic">actually ship.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink/70 max-w-xl leading-relaxed">
            MS in Computer Science at <span className="text-ink font-semibold">Columbia</span>, previously
            building LLM & security platforms at <span className="text-ink font-semibold">Deriv</span> handling
            100K+ requests a day. I like turning messy problems into calm, working systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="btn-tactile group inline-flex items-center gap-2 px-7 py-4 bg-ink text-cream font-semibold rounded-full hover:bg-clay transition-colors"
            >
              Let's build something
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <span className="font-mono-tag text-sm text-ink/50">
              currently @ Columbia Research Lab
            </span>
          </div>
        </motion.div>

        {/* Right: portrait, tilted card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="relative w-64 sm:w-80 lg:w-full max-w-sm aspect-[4/5] rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl">
            <Image
              src="/images/linkedin/columbia-university.png"
              alt="Malvika at Columbia University"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 60vw, 30vw"
              priority
            />
          </div>
          <motion.div
            className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-ink/5 float-soft"
          >
            <div className="font-display font-bold text-ink text-sm">3rd place</div>
            <div className="text-xs text-ink/60">Dubai Police AI CTF</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
