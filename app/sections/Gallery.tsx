"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { linkedInGallery } from "@/lib/gallery-data";

// Varying heights create a playful masonry rhythm instead of a uniform grid
const heightPattern = ["md:h-[420px]", "md:h-[280px]", "md:h-[320px]", "md:h-[380px]", "md:h-[260px]", "md:h-[340px]"];

export default function Gallery() {
  return (
    <section id="moments" className="py-28 md:py-36 relative bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-xl"
        >
          <span className="font-mono-tag text-sm text-clay uppercase tracking-widest">06 — Moments</span>
          <h2 className="font-display font-black text-4xl md:text-6xl mt-4">
            Life outside the IDE
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {linkedInGallery.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl break-inside-avoid h-64 ${heightPattern[i % heightPattern.length]}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="font-display font-bold text-xl">{item.title}</h3>
                <p className="text-sm text-cream/80 mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
