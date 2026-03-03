"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const container = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: delay
    }
  }
})

const child = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
}

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className, delay }: AnimatedTextProps) {
  const words = text.split(" ")

  return (
    <motion.span
      variants={container(delay)}
      initial="hidden"
      animate="visible"
      className={cn("inline-flex flex-wrap", className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="mr-2 inline-block whitespace-pre"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

