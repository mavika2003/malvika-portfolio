"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/malvikasawant" },
  { icon: Github, label: "GitHub", href: "https://github.com/mavika2003" },
  { icon: Download, label: "Resume", href: "/resume.pdf", download: true },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-clay-50 border border-clay/15 px-7 py-14 md:px-16 md:py-20 text-center"
        >
          <div className="absolute inset-0 dot-grid opacity-70" aria-hidden="true" />
          <div className="relative">
            <span className="font-mono-tag text-xs text-clay uppercase tracking-[0.2em]">07 · Say hi</span>
            <h2 className="font-display font-black text-4xl md:text-7xl text-ink mt-4 leading-[1.05]">
              Let&apos;s make
              <br />
              <span className="italic text-clay">something good.</span>
            </h2>
            <p className="text-lg text-ink/60 mt-6 max-w-lg mx-auto">
              Research collabs, AI engineering roles, or just a good problem to chew on — my inbox is open.
            </p>

            <a
              href="mailto:mvs2153@columbia.edu"
              className="btn-tactile group mt-10 inline-flex items-center gap-3 px-8 py-4 bg-ink text-cream font-semibold rounded-full hover:bg-clay"
            >
              <Mail className="w-5 h-5" />
              mvs2153@columbia.edu
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.download
                    ? { download: true }
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="btn-tactile inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-ink/10 text-ink font-medium hover:border-clay hover:text-clay"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
