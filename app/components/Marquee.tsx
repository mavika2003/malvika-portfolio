const items = [
  "Columbia University",
  "Deriv",
  "BITS Pilani",
  "Techrobotix",
  "AI × Cybersecurity CTF — 3rd place",
  "AI Engineer",
  "Researcher",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative border-y border-ink/10 bg-ink text-cream py-4 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-6 shrink-0">
            <span className="font-display text-lg md:text-xl whitespace-nowrap">{item}</span>
            <span className="text-clay text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
