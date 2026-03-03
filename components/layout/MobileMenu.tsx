"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Dispatch, SetStateAction } from "react"

interface MobileMenuProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  links: { href: string; label: string }[]
}

export function MobileMenu({ open, setOpen, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.16 }}
          className="border-border/80 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-4 pt-2 sm:px-6 lg:px-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-secondary hover:bg-surface hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

