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
  "5 knjig v logičnem zaporedju",
  "Vizualni primeri in jasne razlage",
  "Praktičen checklist za vsak posel",
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
            Izobraževalna zbirka za odrasle
          </motion.p>
          <motion.h1 variants={itemVariants}>
            Zgradi trgovalno znanje z <em>načrtom</em>, ne z ugibanjem.
          </motion.h1>
          <motion.p className="hero-lead" variants={itemVariants}>
            Pet knjig te po jasnem vrstnem redu vodi od osnov finančnih
            trgov do analize, izvedbe in upravljanja tveganja.
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
            <span className="price">149 €</span>
            <span className="old-price">249 €</span>
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
          
          {/* Main Book Set Floating Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.3 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.1 }
            }}
          >
            <Image
              className="book-set"
              src="/books-terminal-5.png"
              alt="Pet knjig iz zbirke B A Trading"
              width={1536}
              height={1024}
              priority
              unoptimized
            />
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
