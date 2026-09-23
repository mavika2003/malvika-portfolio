"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { moments } from "@/lib/gallery-data";

const tilts = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1"];

export default function Gallery() {
  return (
    <section id="moments" className="py-24 md:py-32 dot-grid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="font-mono-tag text-xs text-clay uppercase tracking-[0.2em]">03 · Moments</span>
          <h2 className="font-display font-black text-4xl md:text-6xl text-ink mt-4 leading-[1.05]">
            Life outside the <span className="italic text-clay">IDE</span>
          </h2>
          <p className="mt-5 text-lg text-ink/60">
            A few snapshots from competitions, conferences, and the offices in between.
          </p>
        </motion.div>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-8">
          {moments.map((moment, i) => (
            <motion.figure
              key={moment.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid mb-10"
            >
              <div
                className={`polaroid ${tilts[i % tilts.length]} hover:rotate-0 transition-transform duration-500`}
              >
                {moment.height > moment.width ? (
                  // tall phone shots would dominate the wall, so crop them to 4:5
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
                    <Image
                      src={moment.src}
                      alt={moment.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-[center_45%]"
                    />
                  </div>
                ) : (
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    width={moment.width}
                    height={moment.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto rounded-[3px]"
                  />
                )}
                <figcaption className="px-2 pt-4 pb-1">
                  <span className="font-mono-tag text-[11px] uppercase tracking-wider text-clay">
                    {moment.tag}
                  </span>
                  <h3 className="font-display font-bold text-xl text-ink mt-1.5 leading-snug">
                    {moment.title}
                  </h3>
                  <p className="text-sm text-ink/65 mt-2 leading-relaxed">{moment.story}</p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
