"use client";

import { motion, useReducedMotion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const reducedVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  amount = 0.15,
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? reducedVariants : defaultVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{
        duration: reduceMotion ? 0.2 : 0.4,
        ease: "easeOut",
        delay: reduceMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
