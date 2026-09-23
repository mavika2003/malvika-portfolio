"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Photo = { src: string; alt: string; caption: string; portrait?: boolean };

type Stop = {
  company: string;
  role: string;
  period: string;
  story: string;
  current?: boolean;
  photos?: Photo[];
};

const journey: Stop[] = [
  {
    company: "Columbia University",
    role: "Research Assistant",
    period: "Sep 2026 — now",
    current: true,
    story:
      "Teaching agents to look after their own hardware — compiling, deploying, and tuning FPGA workloads on their own, with guardrails so they play nicely across a shared lab.",
    photos: [
      {
        src: "/images/linkedin/columbia-university.png",
        alt: "Malvika at the Alma Mater statue, Columbia",
        caption: "new city, new snow",
      },
    ],
  },
  {
    company: "Columbia University",
    role: "Teaching Assistant, Artificial Intelligence",
    period: "Sep 2026 — now",
    current: true,
    story:
      "Office hours, recitations, and a lot of whiteboard arrows for 100+ students. Turns out explaining AI is its own kind of debugging.",
  },
  {
    company: "Deriv",
    role: "AI Engineer Intern",
    period: "Summer 2026",
    story:
      "Came back for a summer to build an agent that reads client escalations and routes them itself. Security and Compliance stopped waiting in queues — resolution time roughly halved.",
  },
  {
    company: "Deriv",
    role: "AI Engineer",
    period: "Jul 2025 — Jan 2026",
    story:
      "The stretch where things got real. I led an AI-powered identity platform that grew to six figures of requests a day, and a fraud & SOC system that caught what humans were missing. Somewhere in there I got to present it all to the leadership team on a very large screen.",
    photos: [
      {
        src: "/images/linkedin/deriv-presenting-2.jpg",
        alt: "Presenting to Deriv's leadership team",
        caption: "the leadership demo",
      },
      {
        src: "/images/linkedin/deriv-presenting-1.jpg",
        alt: "Pointing at the architecture on the big screen",
        caption: "checking every arrow",
      },
      {
        src: "/images/linkedin/deriv-team-photo.jpg",
        alt: "Group photo with the Deriv team",
        caption: "the crew after",
      },
    ],
  },
  {
    company: "Deriv",
    role: "AI Engineer Intern",
    period: "Feb 2025 — Jun 2025",
    story:
      "My first taste of production AI. Built a little tool-discovery system so teams could find AI tools that already existed, and anomaly detection that saved everyone hours of staring at dashboards.",
    photos: [
      {
        src: "/images/linkedin/deriv-office.png",
        alt: "Malvika under the Deriv sign on her first day",
        caption: "day one!",
        portrait: true,
      },
    ],
  },
  {
    company: "Techrobotix",
    role: "Digital Solutions Intern",
    period: "Summer 2023",
    story: "Built a campus navigation app in Unity that 500+ students used to stop getting lost.",
  },
];

const tilts = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3"];

export default function Experience() {
  return (
    <section id="journey" className="py-24 md:py-32 bg-paper/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="font-mono-tag text-xs text-clay uppercase tracking-[0.2em]">02 · Journey</span>
          <h2 className="font-display font-black text-4xl md:text-6xl text-ink mt-4 leading-[1.05]">
            Where I&apos;ve been <span className="italic text-clay">building</span>
          </h2>
          <p className="mt-5 text-lg text-ink/60">The short version, with photos where I have them.</p>
        </motion.div>

        <ol className="relative mt-16 border-l-2 border-dashed border-clay/30 ml-2 md:ml-4">
          {journey.map((stop, i) => (
            <motion.li
              key={stop.company + stop.role + stop.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-12 pb-14 last:pb-0"
            >
              <span
                className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-cream ${
                  stop.current ? "bg-emerald-500" : "bg-clay"
                }`}
              />

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono-tag text-xs px-3 py-1 rounded-full bg-white border border-ink/10 text-ink/60">
                  {stop.period}
                </span>
                {stop.current && (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    now
                  </span>
                )}
              </div>

              <div
                className={`mt-4 card-soft rounded-3xl p-6 md:p-8 ${
                  stop.photos?.length === 1 ? "md:grid md:grid-cols-[1fr_auto] md:gap-10 md:items-center" : ""
                }`}
              >
                <div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-ink">{stop.company}</h3>
                  <div className="text-clay font-semibold mt-1">{stop.role}</div>
                  <p className="mt-4 text-ink/70 leading-relaxed max-w-2xl">{stop.story}</p>
                </div>

                {stop.photos && (
                  <div
                    className={`flex flex-wrap gap-6 md:gap-8 pt-2 ${
                      stop.photos.length === 1 ? "mt-8 md:mt-0 md:pr-2" : "mt-8"
                    }`}
                  >
                    {stop.photos.map((photo, pi) => (
                      <motion.figure
                        key={photo.src}
                        whileHover={{ rotate: 0, scale: 1.04 }}
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        className={`polaroid ${tilts[(i + pi) % tilts.length]} ${
                          photo.portrait ? "w-36 sm:w-40" : "w-52 sm:w-60"
                        }`}
                      >
                        <div
                          className={`relative overflow-hidden rounded-[3px] ${
                            photo.portrait ? "aspect-[9/16]" : "aspect-[3/2]"
                          }`}
                        >
                          <Image src={photo.src} alt={photo.alt} fill sizes="240px" className="object-cover" />
                        </div>
                        <figcaption className="mt-2.5 text-center font-display italic text-sm text-ink/70">
                          {photo.caption}
                        </figcaption>
                      </motion.figure>
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
