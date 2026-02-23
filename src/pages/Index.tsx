import honmaLogo from "@/assets/honma-logo.png";
import myHeroBg from "@/assets/honma-sakura-dance-driver.jpg";
import myClubsImage from "@/assets/honma-sakura-dance-2-25.jpg";
import sakuraIron from "@/assets/honma-sakura-dance-iron.jpg";
import sakuraLifestyle from "@/assets/honma-sakura-dance-lifestyle.jpg";
import sakuraAccessories from "@/assets/honma-sakura-dance-accessories.jpg";
import { useState } from "react";

/* ── Floating petal ── */
const Petal = ({ style }: { style: React.CSSProperties }) => (
  <div className="pointer-events-none absolute" style={style}>
    <svg width={32 + Math.random() * 24} height={40 + Math.random() * 20} viewBox="0 0 18 24" fill="none">
  <path
    d="M9 0C9 0 17 7 17 13.5C17 18 13.5 22.5 9 24C4.5 22.5 1 18 1 13.5C1 7 9 0 9 0Z"
    fill="hsl(340 50% 70% / 0.35)"
  />
</svg>
  </div>
);

const petals = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i / 16) * 110 - 5 + (Math.random() * 8 - 4)}%`,
  top: `-${Math.random() * 8 + 2}%`,
  animationDuration: `${14 + Math.random() * 10}s`,
  animationDelay: `${Math.random() * 7}s`,
  opacity: 0.5 + Math.random() * 0.5,
  transform: `scale(${0.5 + Math.random() * 1})`,
}));

const clubs = [
  { name: "Driver",       spec: "11.5°",    icon: "✓" },
  { name: "Fairway Wood", spec: "16°",       icon: "✓" },
  { name: "Fairway Wood", spec: "19°",       icon: "✓" },
  { name: "Hybrid",       spec: "22°",       icon: "✓" },
  { name: "Iron Set",     spec: "#6–11, SW", icon: "✓" },
  { name: "Putter",       spec: "Mallet",    icon: "✓" },
];

const accessories = [
  "Rangefinder", "Mini Golf Bag", "Dozen Golf Balls",
  "Golf Glove", "Visor", "Hat",
];

const features = [
  {
    title: "Weight Reduction",
    desc: "Further reduced weight enables faster swing speeds and effortless, flowing motion.",

  },
  {
    title: "Expanded Sweet Spot",
    desc: "Low CG design with a wider sweet zone forgives mishits and builds confidence.",
  
  },
  {
    title: "Japanese Craftsmanship",
    desc: "Custom built at Honma's legendary Sakata factory — the pinnacle of golf artistry.",
    
  },
  {
    title: "Graphite Shaft",
    desc: "Specially designed graphite shaft tuned for ladies' swing dynamics and power.",
    
  },
];

const colorOptions = [
  {
    label: "Sakura Pink",
    hex: "#f4a0b0",
    url: "https://us.honmagolf.com/collections/sakura-dance-2-package-sets/products/sakura-dance-2",
    desc: "A warm, blushing hue that radiates joy and feminine elegance.",
  },
  {
    label: "Pure White",
    hex: "#f8eff2",
    url: "https://us.honmagolf.com/collections/sakura-dance-2-package-sets/products/sakura-dance-2-package-set-white",
    desc: "Clean, serene, and quietly powerful. Pure as fresh petals.",
  },
];

export default function Index() {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden font-body bg-background">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-white/90 border-b border-sakura-petal/30">
        <img src={honmaLogo} alt="Honma Golf" className="h-7 w-auto" />
        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] text-sakura-deep/60 font-normal uppercase">
          <a href="#story"       className="hover:text-sakura-deep transition-colors">Story</a>
          <a href="#performance" className="hover:text-sakura-deep transition-colors">Performance</a>
          <a href="#included"    className="hover:text-sakura-deep transition-colors">What's Included</a>
          <a href="#colors"      className="hover:text-sakura-deep transition-colors">Colors</a>
        </div>
        <a
          href="https://us.honmagolf.com/collections/sakura-dance-2-package-sets"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.2em] uppercase font-medium px-5 py-2 rounded-full gradient-cta text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Order Now
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* BG image with pink-to-white ombre overlay */}
        <div className="absolute inset-0">
          <img
            src={myHeroBg}
            alt="Sakura Dance 2"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/55 to-white/95" />
        </div>

        {/* Petals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {petals.map((p, i) => (
            <Petal key={i} style={{
              left: p.left,
              top: p.top,
              animationName: "float-petal",
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              opacity: p.opacity,
              transform: p.transform,
            }} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-8 items-center w-full py-12">
          {/* Left — text */}
          <div className="w-full">
            <p className="animate-fade-up delay-100 text-xs tracking-[0.4em] uppercase text-sakura-deep/60 mb-6 font-light">
              Honma Golf · Limited Edition
            </p>
            <h1 className="animate-fade-up delay-200 font-display leading-none text-foreground mb-6">
              <span className="block text-7xl md:text-[7rem] font-medium italic tracking-tight">Sakura</span>
              <span className="block text-7xl md:text-[7rem] font-semibold tracking-tight text-sakura-deep">Dance 2</span>
            </h1>
            <p className="animate-fade-up delay-300 text-foreground text-base md:text-lg leading-relaxed mb-8 max-w-md font-light"
>
              A complete 12-piece ladies' set designed for elegance, confidence, and effortless swings — crafted with over five decades of Honma artistry in Sakata, Japan, and built to elevate every round you play.
            </p>
            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 items-start mb-8">
              <a
                href="https://us.honmagolf.com/collections/sakura-dance-2-package-sets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-3.5 rounded-full gradient-cta text-primary-foreground text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition-opacity shadow-hero"
              >
                Order Now
              </a>
              <a
                href="#story"
                className="inline-block px-10 py-3.5 rounded-full border-2 border-sakura-deep/40 text-sakura-deep text-xs tracking-[0.25em] uppercase font-light hover:border-sakura-deep transition-colors"
              >
                Discover More
              </a>
            </div>
            <p className="animate-fade-up delay-500 text-xs tracking-widest text-sakura-deep/70 uppercase">
              Small-batch Offering · Limited Availability
            </p>
        
          </div>

          
        </div>

        {/* Color strip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-6 py-5 bg-white/60 backdrop-blur-sm border-t border-sakura-petal/20">
          <span className="text-xs tracking-[0.3em] uppercase text-sakura-deep/70 font-normal">Two Signature Finishes, Each with Matching Gear</span>
          <span className="text-sakura-deep font-display italic text-sm">Sakura Pink</span>
          <span className="text-sakura-deep/40">/</span>
          <span className="text-sakura-deep font-display italic text-sm">Pure White</span>
        </div>
      </section>

      {/* ── TAGLINE BAND ── */}
      <div className="bg-sakura-petal/40 py-4 overflow-hidden border-y border-sakura-rose/20">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-sakura-deep/60 text-xs tracking-[0.4em] uppercase font-light mx-12">
              Elegance Meets Performance ✦ Japanese Craftsmanship ✦ Limited Allocation ✦
            </span>
          ))}
        </div>
      </div>

      {/* ── STORY ── */}
      <section id="story" className="py-28 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-sakura-blush" />
          <img
            src={sakuraLifestyle}
            alt="Golf lifestyle with cherry blossoms"
            className="relative w-full h-[480px] object-cover rounded-2xl shadow-card"
          />
          <div className="absolute -bottom-5 -right-5 bg-sakura-deep text-primary-foreground px-6 py-4 text-center rounded-xl">
            <p className="font-display text-3xl font-light">Limited</p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/70">Edition</p>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-sakura-deep mb-4">The Story</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight text-foreground mb-6">
            Rare by Design.<br />
            <em className="text-sakura-deep">Remarkable by Nature.</em><br />
          
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5 font-light">
            Like cherry blossoms dancing on a spring breeze, your shots will rise high — beautifully painting the fairway. Sakura Dance 2 achieves significant weight reduction throughout the set, delivering faster swing speeds, improved ball speed, and +1.4 yards of carry distance over the original.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 font-light">
            Born from decades of Japanese golf-making excellence in Sakata, Sakura Dance 2 is crafted for those who believe the game should be as beautiful as it is rewarding.
          </p>
          <div className="w-12 h-0.5 bg-sakura-deep rounded-full" />
        </div>
      </section>

      {/* ── PERFORMANCE ── */}
      <section id="performance" className="py-24 bg-white border-t border-sakura-petal/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-sakura-deep mb-3">Engineering</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">Built to Perform</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-card border border-sakura-petal/30 p-8 rounded-2xl hover:border-sakura-deep/40 hover:shadow-soft transition-all duration-300 group"
              >
                <span className="text-2xl text-sakura-deep mb-5 block"></span>
                <h3 className="font-display text-xl font-light text-foreground mb-3 group-hover:text-sakura-deep transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Iron callout */}
          <div className="mt-16 grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-card">
            <div className="bg-sakura-deep p-12 flex flex-col justify-center">
              <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/50 mb-4">Craftsmanship Detail</p>
              <h3 className="font-display text-4xl font-light text-primary-foreground leading-snug mb-6">
                The Sakura Dance 2<br />Signature Iron
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed mb-6 font-light">
                An expanded sweet spot paired with low center of gravity positioning forgives mis-hits and delivers easy, high trajectory on every shot. The wide sole and high MOI design give you the confidence to attack every approach — from the fairway or out of the rough.
              </p>
              <ul className="space-y-2">
                {["#6 through #11 Irons", "Sand Wedge (SW)", "Graphite Shaft — Ladies Flex", "Cherry Blossom Engraving"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-primary-foreground/70 font-light">
                    <span className="text-sakura-petal text-xs">✦</span> {item}
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
      <section id="included" className="py-28 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-sakura-deep mb-3">Complete Package</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">Everything Included</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            Sakura Dance 2 is a complete package set — clubs, bag, and a curated accessories collection, all in one luxurious offering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-sakura-deep mb-6">Complete Set Includes</p>
            <div className="space-y-1">
              {clubs.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4 border-b border-sakura-petal/30 last:border-0 transition-all duration-300 hover:pl-3"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-sakura-deep">{c.icon}</span>
                    <span className="font-light text-foreground">{c.name}</span>
                  </div>
                  <span className="text-sm text-sakura-deep font-light tracking-wider">{c.spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-sakura-deep mb-6">Accessories Included</p>
            <img
              src={sakuraAccessories}
              alt="Sakura Dance 2 Accessories"
              className="w-full h-64 object-cover rounded-2xl shadow-card mb-6"
            />
            <div className="grid grid-cols-2 gap-3">
              {accessories.map((a, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                  <span className="w-2 h-2 rounded-full bg-sakura-rose flex-shrink-0" />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COLORS ── */}
      <section id="colors" className="py-24 bg-white overflow-hidden border-t border-sakura-petal/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase text-sakura-deep/60 mb-3">Choose Your Expression</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-foreground">
              Two Signature Finishes,<br />One Standard of Excellence
            </h2>
          </div>

          <div className="flex gap-4 justify-center mb-8">
            {colorOptions.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(i)}
                className={`flex items-center gap-3 px-8 py-3 rounded-full border-2 text-sm tracking-[0.15em] uppercase font-light transition-all duration-300 ${
                  selectedColor === i
                    ? "border-sakura-deep bg-sakura-deep text-primary-foreground"
                    : "border-sakura-deep/30 text-sakura-deep/70 hover:border-sakura-deep/60 hover:text-sakura-deep bg-white/60"
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-sakura-petal/50 flex-shrink-0"
                  style={{ backgroundColor: c.hex }}
                />
                {c.label}
              </button>
            ))}
          </div>

          <div className="text-center">
            <p className="text-foreground/60 font-light mb-6 max-w-sm mx-auto">
              {colorOptions[selectedColor].desc}
            </p>
            <a
              href={colorOptions[selectedColor].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-3.5 rounded-full gradient-cta text-primary-foreground text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition-opacity shadow-hero"
            >
              Shop {colorOptions[selectedColor].label} — $8,000
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-28 overflow-hidden gradient-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {petals.slice(0, 10).map((p, i) => (
            <Petal key={i} style={{
              left: p.left,
              top: p.top,
              animationName: "float-petal",
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              opacity: p.opacity * 0.7,
              transform: p.transform,
            }} />
          ))}
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-8">
          <p className="text-xs tracking-[0.4em] uppercase text-sakura-deep mb-4">Limited Allocation</p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground leading-tight mb-6">
            Experience the Beauty of<br />
            <em className="text-sakura-deep">Sakura Dance 2</em>
          </h2>
          <p className="text-foreground/60 leading-relaxed mb-10 font-light max-w-lg mx-auto">
            Custom built in Sakata, Japan. Designed for golfers who refuse to compromise — stunning Japanese artistry paired with lighter, faster, more forgiving performance. Available in Sakura Pink and limited Pure White while allocations last.

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://us.honmagolf.com/collections/sakura-dance-2-package-sets/products/sakura-dance-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full gradient-cta text-primary-foreground text-xs tracking-[0.25em] uppercase font-medium hover:opacity-90 transition-opacity shadow-hero"
            >
              Shop Sakura Pink — $8,000
            </a>
            <a
              href="https://us.honmagolf.com/collections/sakura-dance-2-package-sets/products/sakura-dance-2-package-set-white"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full border-2 border-sakura-deep text-sakura-deep text-xs tracking-[0.25em] uppercase font-light hover:bg-sakura-deep hover:text-primary-foreground transition-all duration-300"
            >
              Shop Pure White — $8,000
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-white py-12 px-8 border-t border-sakura-petal/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <img src={honmaLogo} alt="Honma Golf" className="h-6 w-auto opacity-80 mb-1" />
            <p className="text-xs text-sakura-deep/40 tracking-widest">Sakura Dance 2 · 2026</p>
          </div>
          <p className="text-xs text-foreground/30 font-light tracking-wide text-center">
            © 2026 Honma Golf. All rights reserved. Experience Stunning Performance.
          </p>
          <a
            href="https://us.honmagolf.com/collections/sakura-dance-2-package-sets"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.2em] uppercase font-light text-sakura-deep/50 hover:text-sakura-deep transition-colors"
          >
            us.honmagolf.com →
          </a>
        </div>
      </footer>

    </div>
  );
}
