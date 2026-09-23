"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, FileDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono-tag text-sm text-clay uppercase tracking-widest">07 — Say hi</span>
          <h2 className="font-display font-black text-4xl md:text-7xl text-ink mt-4 leading-tight">
            Let's make<br /><span className="italic text-clay">something good.</span>
          </h2>
          <p className="text-lg text-ink/60 mt-6 max-w-lg mx-auto">
            Open to research collabs, AI engineering roles, and interesting problems in general.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-14"
        >
          <a
            href="mailto:mvs2153@columbia.edu"
            className="card-soft rounded-3xl p-8 flex flex-col items-center gap-3"
          >
            <Mail className="w-9 h-9 text-clay" />
            <div className="font-display font-bold text-ink">Email</div>
            <div className="text-ink/60 text-sm">mvs2153@columbia.edu</div>
          </a>

          <a
            href="https://www.linkedin.com/in/malvikasawant"
            target="_blank"
            rel="noopener noreferrer"
            className="card-soft rounded-3xl p-8 flex flex-col items-center gap-3"
          >
            <Linkedin className="w-9 h-9 text-clay" />
            <div className="font-display font-bold text-ink">LinkedIn</div>
            <div className="text-ink/60 text-sm">@malvikasawant</div>
          </a>
        </motion.div>

        <motion.a
          href="/resume.pdf"
          download
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="btn-tactile mt-10 inline-flex items-center gap-2 px-8 py-4 bg-ink text-cream font-semibold rounded-full hover:bg-clay transition-colors"
        >
          <FileDown className="w-5 h-5" />
          Download resume
        </motion.a>
      </div>
    </section>
  );
}
