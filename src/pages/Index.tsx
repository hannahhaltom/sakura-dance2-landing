import sakuraHero from "@/assets/sakura-hero.jpg";
import sakuraIron from "@/assets/sakura-iron.jpg";
import sakuraLifestyle from "@/assets/sakura-lifestyle.jpg";
import sakuraAccessories from "@/assets/sakura-accessories.jpg";
import { useEffect, useRef, useState } from "react";

/* ── Floating petal component ── */
const Petal = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="pointer-events-none absolute"
    style={style}
  >
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path
        d="M8 0C8 0 14 5 14 10C14 14 11 17 8 18C5 17 2 14 2 10C2 5 8 0 8 0Z"
        fill="hsl(340 30% 92% / 0.65)"
      />
    </svg>
  </div>
);

const petals = Array.from({ length: 18 }, (_, i) => ({
  left: `${Math.random() * 100}%`,
  top: `-${Math.random() * 10 + 5}%`,
  animationDuration: `${6 + Math.random() * 8}s`,
  animationDelay: `${Math.random() * 6}s`,
  opacity: 0.5 + Math.random() * 0.5,
  transform: `scale(${0.6 + Math.random() * 0.8})`,
}));

/* ── Club specs data ── */
const clubs = [
  { name: "Driver", spec: "11.5°", icon: "🏌️" },
  { name: "Fairway Wood", spec: "16°", icon: "⛳" },
  { name: "Fairway Wood", spec: "19°", icon: "⛳" },
  { name: "Hybrid", spec: "22°", icon: "🔹" },
  { name: "Iron Set", spec: "#6–11, SW", icon: "⚡" },
  { name: "Putter", spec: "Mallet", icon: "🎯" },
];

/* ── Accessories data ── */
const accessories = [
  "Rangefinder",
  "Mini Golf Bag",
  "Dozen Golf Balls",
  "Golf Glove",
  "Visor",
  "Hat",
];

/* ── Features data ── */
const features = [
  {
    title: "Weight Reduction",
    desc: "Further reduced weight enables faster swing speeds and effortless, flowing motion.",
    icon: "✦",
  },
  {
    title: "Expanded Sweet Spot",
    desc: "Low CG design with a wider sweet zone forgives mishits and builds confidence.",
    icon: "◉",
  },
  {
    title: "Japanese Craftsmanship",
    desc: "Custom built at Honma's legendary Sakata factory — the pinnacle of golf artistry.",
    icon: "❋",
  },
  {
    title: "Graphite Shaft",
    desc: "Specially designed graphite shaft tuned for ladies' swing dynamics and power.",
    icon: "⬡",
  },
];

/* ── Color options ── */
const colorOptions = [
  { label: "Pink", hex: "#f4a0b0", url: "https://us.honmagolf.com/collections/sakura-dance-2-package-sets/products/sakura-dance-2" },
  { label: "White", hex: "#f5e8ec", url: "https://us.honmagolf.com/collections/sakura-dance-2-package-sets/products/sakura-dance-2-package-set-white" },
];

/* ─────────────────────────────────────────────── */

export default function Index() {
  const [selectedColor, setSelectedColor] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen overflow-x-hidden font-body">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-white/70 border-b border-sakura-dark/10">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-light tracking-[0.25em] text-sakura-dark">HONMA</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] text-sakura-dark/60 font-light uppercase">
          <a href="#story" className="hover:text-sakura-dark transition-colors">Story</a>
          <a href="#performance" className="hover:text-sakura-dark transition-colors">Performance</a>
          <a href="#whats-included" className="hover:text-sakura-dark transition-colors">Included</a>
          <a href="#colors" className="hover:text-sakura-dark transition-colors">Colors</a>
        </div>
        
          href="https://us.honmagolf.com/collections/sakura-dance-2-package-sets"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.2em] uppercase font-light px-5 py-2 border border-sakura-dark/40 text-sakura-dark hover:bg-sakura-dark hover:text-white transition-all duration-300"
        >
          Shop Now
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
      >
        {/* Petals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {petals.map((p, i) => (
            <Petal
              key={i}
              style={{
                left: p.left,
                top: p.top,
                animationName: "float-petal",
                animationDuration: p.animationDuration,
                animationDelay: p.animationDelay,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                opacity: p.opacity,
                transform: p.transform,
              }}
            />
          ))}
        </div>

        {/* BG image */}
        <div className="absolute inset-0">
          <img
            src={sakuraHero}
            alt="Sakura Dance 2 Golf Club Set"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-16 grid md:grid-cols-2 items-center gap-16">
          <div>
            <p className="animate-fade-up delay-100 text-xs tracking-[0.4em] uppercase text-sakura-dark/60 mb-4 font-light">
              Honma Golf · Limited Edition
            </p>
            <h1 className="animate-fade-up delay-200 font-display text-6xl md:text-8xl font-light leading-[1.05] text-sakura-dark mb-2">
              Sakura
            </h1>
            <h1 className="animate-fade-up delay-300 font-display text-6xl md:text-8xl font-light leading-[1.05] shimmer-text mb-8">
              Dance 2
            </h1>
            <p className="animate-fade-up delay-400 text-sakura-dark/60 text-base md:text-lg leading-relaxed mb-10 max-w-md font-light">
              Inspired by the grace of cherry blossoms in motion — a super-premium ladies' golf set where Japanese artistry meets cutting-edge performance.
            </p>
            <div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-4 items-start">
              
                href="https://us.honmagolf.com/collections/sakura-dance-2-package-sets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-3.5 gradient-cta text-primary-foreground text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition-opacity shadow-hero"
              >
                Shop the Set — $8,000
              </a>
              
                href="#story"
                className="inline-block px-10 py-3.5 border border-sakura-dark/40 text-sakura-dark text-xs tracking-[0.25em] uppercase font-light hover:border-sakura-dark transition-colors"
              >
                Discover More
              </a>
            </div>
            <p className="animate-fade-up delay-600 mt-6 text-xs tracking-widest text-sakura-dark/40 uppercase">
              Custom built in Sakata, Japan · 4–6 week delivery
            </p>
          </div>

          {/* Hero club image card */}
          <div className="hidden md:flex justify-center animate-fade-in delay-300">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-sakura-rose/10 blur-3xl" />
              <img
                src={sakuraHero}
                alt="Sakura Dance 2 Clubs"
                className="relative w-[420px] h-[320px] object-cover rounded-sm shadow-hero"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sakura-dark/40">
          <span className="text-[10px] tracking-[0.3em] uppercase font-light">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-sakura-dark/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── TAGLINE BAND ── */}
      <div className="bg-sakura-deep py-5 overflow-hidden">
        <div className="flex animate-[shimmer_8s_linear_infinite] whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-primary-foreground/80 text-xs tracking-[0.4em] uppercase font-light mx-12">
              Elegance Meets Performance ✦ Japanese Craftsmanship ✦ Limited Allocation ✦
            </span>
          ))}
        </div>
      </div>

      {/* ── STORY SECTION ── */}
      <section id="story" className="py-28 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-6 bg-sakura-blush rounded-sm" />
          <img
            src={sakuraLifestyle}
            alt="Golf lifestyle with cherry blossoms"
            className="relative w-full h-[480px] object-cover rounded-sm shadow-card"
          />
          <div className="absolute -bottom-5 -right-5 bg-sakura-dark text-sakura-petal px-6 py-4 text-center">
            <p className="font-display text-3xl font-light">2025</p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-sakura-petal/60">Collection</p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs tracking-[0.4em] uppercase text-sakura-deep mb-4">The Story</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight text-foreground mb-6">
            Like Blossoms<br />
            <em className="text-sakura-deep">Dancing</em><br />
            on a Spring Breeze
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5 font-light">
            Honma's Sakura Dance 2 is a celebration of the harmony between nature and precision. Every detail — from the delicate sakura engravings to the soft blush finish — is a tribute to the ephemeral beauty of cherry blossoms.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 font-light">
            Born from decades of Japanese golf-making excellence in Sakata, this super-premium ladies' set is crafted for those who believe the game should be as beautiful as it is rewarding.
          </p>
          <div className="w-12 h-px bg-sakura-deep" />
        </div>
      </section>

      {/* ── PERFORMANCE ── */}
      <section id="performance" className="py-24 gradient-section">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-sakura-deep mb-3">Engineering</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">Built to Perform</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-card border border-border p-8 hover:border-sakura-petal/40 hover:shadow-soft transition-all duration-300 group"
              >
                <span className="text-2xl text-sakura-deep mb-5 block">{f.icon}</span>
                <h3 className="font-display text-xl font-light text-foreground mb-3 group-hover:text-sakura-deep transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Iron feature callout */}
          <div className="mt-16 grid md:grid-cols-2 gap-0 overflow-hidden">
            <div className="bg-sakura-dark p-12 flex flex-col justify-center">
              <p className="text-xs tracking-[0.4em] uppercase text-sakura-petal/60 mb-4">Craftsmanship Detail</p>
              <h3 className="font-display text-4xl font-light text-sakura-petal leading-snug mb-6">
                The Sakura<br />Signature Iron
              </h3>
              <p className="text-sakura-petal/65 leading-relaxed mb-6 font-light">
                Each iron face bears a hand-etched cherry blossom motif — a mark of Honma's dedication to artistry and the Sakura Dance spirit. The low CG placement and expanded face deliver towering, forgiving ball flight.
              </p>
              <ul className="space-y-2">
                {["#6 through #11 Irons", "Sand Wedge (SW)", "Graphite Shaft — Ladies Flex", "Cherry Blossom Engraving"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-sakura-petal/70 font-light">
                    <span className="text-sakura-deep text-xs">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={sakuraIron}
                alt="Sakura Dance 2 Iron close-up"
                className="w-full h-full object-cover min-h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section id="whats-included" className="py-28 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-sakura-deep mb-3">Complete Package</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">Everything Included</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            The Sakura Dance 2 is a complete package set — clubs, bag, and a curated accessories collection, all in one luxurious offering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Club list */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-sakura-deep mb-6">Clubs in the Set</p>
            <div className="space-y-3">
              {clubs.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4 border-b border-border last:border-0 group hover:pl-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg">{c.icon}</span>
                    <span className="font-light text-foreground">{c.name}</span>
                  </div>
                  <span className="text-sm text-sakura-deep font-light tracking-wider">{c.spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accessories */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-sakura-deep mb-6">Accessory Pack</p>
            <div className="relative">
              <img
                src={sakuraAccessories}
                alt="Sakura Dance 2 Accessories"
                className="w-full h-64 object-cover rounded-sm shadow-card mb-6"
              />
              <div className="grid grid-cols-2 gap-3">
                {accessories.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-sakura-rose flex-shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLORS ── */}
      <section id="colors" className="py-24 bg-sakura-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-sakura-petal/60 mb-3">Choose Your Expression</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-sakura-petal">Two Colors,<br />One Spirit</h2>
          </div>

          <div className="flex gap-4 justify-center mb-10">
            {colorOptions.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(i)}
                className={`flex items-center gap-3 px-6 py-3 border text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 ${
                  selectedColor === i
                    ? "border-sakura-petal text-sakura-petal"
                    : "border-sakura-petal/20 text-sakura-petal/50 hover:border-sakura-petal/50 hover:text-sakura-petal/80"
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-sakura-petal/30"
                  style={{ backgroundColor: c.hex }}
                />
                {c.label}
              </button>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sakura-petal/60 font-light mb-3">
              {selectedColor === 0
                ? "The Pink — A warm, blushing hue that radiates joy and feminine elegance."
                : "The White — Clean, serene, and quietly powerful. Pure as fresh petals."}
            </p>
            
              href={colorOptions[selectedColor].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-10 py-3.5 gradient-cta text-primary-foreground text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition-opacity shadow-hero"
            >
              Shop {colorOptions[selectedColor].label} — $8,000
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={sakuraLifestyle}
            alt="Golfer with cherry blossoms"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 gradient-section opacity-90" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-8">
          <p className="text-xs tracking-[0.4em] uppercase text-sakura-deep mb-4">Limited Allocation</p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground leading-tight mb-6">
            Begin Your<br />
            <em className="text-sakura-deep">Sakura Dance</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 font-light max-w-lg mx-auto">
            Custom built in Sakata, Japan. Allow 4–6 weeks for crafting and delivery. Available in Pink and White — while allocations last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              href="https://us.honmagolf.com/collections/sakura-dance-2-package-sets/products/sakura-dance-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 gradient-cta text-primary-foreground text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition-opacity shadow-hero"
            >
              Shop Pink — $8,000
            </a>
            
              href="https://us.honmagolf.com/collections/sakura-dance-2-package-sets/products/sakura-dance-2-package-set-white"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border border-sakura-deep text-sakura-deep text-xs tracking-[0.25em] uppercase font-light hover:bg-sakura-deep hover:text-primary-foreground transition-all duration-300"
            >
              Shop White — $8,000
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-sakura-dark py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-light tracking-[0.25em] text-sakura-petal">HONMA</p>
            <p className="text-xs text-sakura-petal/40 tracking-widest mt-1">Sakura Dance 2 · 2025</p>
          </div>
          <p className="text-xs text-sakura-petal/30 font-light tracking-wide text-center">
            © 2025 Honma Golf. All rights reserved. All clubs are custom built in Sakata, Japan.
          </p>
          
            href="https://us.honmagolf.com/collections/sakura-dance-2-package-sets"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase font-light text-sakura-petal/50 hover:text-sakura-petal transition-colors"
          >
            us.honmagolf.com →
          </a>
        </div>
      </footer>
    </div>
  );
}
    </div>
  );
}
