const items = [
  "Columbia University",
  "Deriv",
  "BITS Pilani Dubai",
  "Dubai Police CTF — 3rd place",
  "Agentic AI",
  "AI × Security",
  "Research",
  "Teaching",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative border-y border-ink/10 bg-clay-50 text-ink py-4 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-5 px-5 shrink-0">
            <span className="font-display italic text-lg md:text-xl whitespace-nowrap">{item}</span>
            <span className="text-clay text-base">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
