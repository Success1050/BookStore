"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

const covers = [
  { src: "/bookcovers/book-cover-one.png", title: "Osnove trgovanja" },
  { src: "/bookcovers/book-cover-two.png", title: "Candlestick Patterns" },
  { src: "/bookcovers/book-cover-three.png", title: "Chart Patterns" },
  { src: "/bookcovers/book-cover-four.png", title: "Analiza trga" },
  { src: "/bookcovers/book-cover-five.png", title: "Izvedba posla" },
];

export function BookCovers() {
  return (
    <section className="py-24 overflow-hidden relative" style={{ backgroundColor: "#000" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[#3b82f6] font-semibold tracking-wider text-sm mb-4">01 / ZBIRKA KNJIG</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Zasnovano za učenje.<br/>Narejeno, da traja.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            Pet skrbno oblikovanih knjig, ki vizualno in vsebinsko tvorijo popolno celoto. Vrhunski materiali za vsakodnevno branje in učenje.
          </p>
        </AnimatedSection>

        {/* 3D-ish Books Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-6 xl:gap-10 perspective-[1200px]">
          {covers.map((cover, index) => (
            <motion.div
              key={cover.title}
              initial={{ opacity: 0, y: 60, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ 
                scale: 1.05, 
                y: -15, 
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className="relative w-[280px] sm:w-[320px] lg:w-[220px] xl:w-[250px] aspect-[1/1.4] rounded-r-2xl shadow-[30px_30px_60px_rgba(0,0,0,0.8),_inset_1px_0_0_rgba(255,255,255,0.15)] bg-[#111] border-l-[4px] border-[#222] cursor-pointer group transform-gpu transition-shadow"
            >
              <Image
                src={cover.src}
                alt={cover.title}
                fill
                className="object-cover rounded-r-2xl"
                sizes="(max-width: 1024px) 320px, 250px"
              />
              {/* Highlight overlay to simulate gloss */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-2xl pointer-events-none" />
              
              {/* Reflection on hover */}
              <div className="absolute inset-0 rounded-r-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" style={{ mixBlendMode: 'overlay' }} />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
