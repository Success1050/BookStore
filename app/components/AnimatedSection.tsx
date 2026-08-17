"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  yOffset?: number;
  as?: React.ElementType;
}

export function AnimatedSection({ 
  children, 
  className, 
  id, 
  delay = 0,
  yOffset = 40,
  as = "div"
}: AnimatedSectionProps) {
  const MotionComponent = as === "section" ? motion.section : motion.div;
  
  return (
    <MotionComponent
      id={id}
      className={cn(className)}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionComponent>
  );
}
