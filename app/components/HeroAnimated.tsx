"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="m4.5 10.3 3.2 3.2 7.8-8" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

const heroPoints = [
  "Začni pri osnovah in napreduj po jasnem vrstnem redu",
  "Razumi, kaj na grafu dejansko iščeš",
  "Sestavi ponovljiv proces pred vsakim poslom",
];

// Variants for staggering the text elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export function HeroAnimated({ primaryCtaUrl }: { primaryCtaUrl: string }) {
  return (
    <section className="hero" id="vrh">
      {/* Background decorations - slow pulse/fade */}
      <motion.div
        className="market-grid"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="chart-line chart-line-one"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      />
      <motion.div
        className="chart-line chart-line-two"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      />

      <div className="hero-inner">
        {/* Left side text content */}
        <motion.div
          className="hero-copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="eyebrow" variants={itemVariants}>
            <span />
            IZOBRAŽEVALNI SISTEM TRGOVANJA V 5 KNJIGAH
          </motion.p>
          <motion.h1 variants={itemVariants}>
            Ne uči se trgovanja naključno. Nauči se ga po <em>sistemu</em>.
          </motion.h1>
          <motion.p className="hero-lead" variants={itemVariants}>
            Pet povezanih knjig te vodi od razumevanja finančnih trgov do analize, vstopa v posel in upravljanja tveganja.
          </motion.p>

          <motion.ul className="hero-points" variants={itemVariants}>
            {heroPoints.map((point, index) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <CheckIcon />
                {point}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="price-row" aria-label="Cena kompleta" variants={itemVariants}>
            <span className="price">199 €</span>
            <span className="old-price">299 €</span>
            <motion.span
              className="saving"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              Prihraniš 100 €
            </motion.span>
          </motion.div>

          <motion.a
            className="primary-cta"
            href={primaryCtaUrl}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Želim komplet 5 knjig
            <ArrowIcon />
          </motion.a>

          <motion.p className="purchase-note" variants={itemVariants}>
            <span className="status-dot" />
            Enkraten nakup
            <span aria-hidden="true">•</span>
            Za polnoletne uporabnike
          </motion.p>
        </motion.div>

        {/* Right side product images */}
        <div
          className="hero-product"
          aria-label="Komplet petih trgovalnih knjig"
        >
          <motion.div
            className="product-glow"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Main Book Set Cluster */}
          <motion.div
            className="book-set relative aspect-[4/3] w-full max-w-[760px] mx-auto z-10"
            style={{ perspective: "1200px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.1 }
            }}
          >
            {[
              { src: "/bookcovers/book-cover-one.png", top: "5%", left: "10%", zIndex: 1 },
              { src: "/bookcovers/book-cover-two.png", top: "5%", left: "37%", zIndex: 2 },
              { src: "/bookcovers/book-cover-three.png", top: "5%", left: "64%", zIndex: 3 },
              { src: "/bookcovers/book-cover-four.png", top: "40%", left: "23.5%", zIndex: 10 },
              { src: "/bookcovers/book-cover-five.png", top: "40%", left: "50.5%", zIndex: 11 },
            ].map((cover, i) => (
              <motion.div
                key={cover.src}
                initial={{ opacity: 0, y: 50, rotateY: 30 }}
                animate={{ opacity: 1, y: 0, rotateY: 12 }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute w-[28%] aspect-[1/1.42] rounded-r-xl shadow-[25px_25px_45px_rgba(0,0,0,0.7),_inset_1px_0_0_rgba(255,255,255,0.2)] bg-[#0a0a0a] border-l-[6px] border-[#1f2937] transform-gpu"
                style={{ top: cover.top, left: cover.left, zIndex: cover.zIndex }}
              >
                <Image
                  src={cover.src}
                  alt={`Book cover ${i + 1}`}
                  fill
                  className="object-cover rounded-r-xl"
                  sizes="(max-width: 1024px) 200px, 300px"
                  unoptimized
                />
                {/* Surface highlights */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-r-xl pointer-events-none" />
                <div className="absolute inset-0 rounded-r-xl bg-gradient-to-b from-white/10 to-transparent opacity-30 pointer-events-none mix-blend-overlay" />
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Chips */}
          <motion.div
            className="product-chip chip-top"
            initial={{ opacity: 0, scale: 0.5, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: [0, -5, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.8 },
              scale: { type: "spring", delay: 0.8 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.3 }
            }}
          >
            <span>01—05</span>
            Celotna zbirka
          </motion.div>

          <motion.div
            className="product-chip chip-bottom"
            initial={{ opacity: 0, scale: 0.5, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: [0, 5, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 1.0 },
              scale: { type: "spring", delay: 1.0 },
              y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }
            }}
          >
            <span>−40 %</span>
            Paketna cena
          </motion.div>
        </div>
      </div>
    </section>
  );
}
