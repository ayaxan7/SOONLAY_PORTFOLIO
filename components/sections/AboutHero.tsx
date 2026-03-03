"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/Badge"
import { Check } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const specializations = [
  "SaaS Platforms",
  "Web & Mobile Apps",
  "AI / ML Solutions",
  "Hardware & IoT",
  "Embedded Systems"
]

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-dark">
      <div className="mesh-gradient" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6"
            >
              <Badge>About Us</Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="mb-6 font-display text-4xl leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl"
            >
              Building Ideas
              <span className="mt-2 block gradient-text">
                Into Impactful Products
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mb-8 text-lg text-secondary"
            >
              We turn your innovative ideas into scalable, production-ready
              products.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="mb-4 text-base text-accent">
                Product development studio specializing in:
              </h2>
              <ul className="space-y-3">
                {specializations.map((item, index) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 text-base text-secondary"
                  >
                    <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
              className="max-w-xl space-y-4 text-base leading-relaxed text-secondary"
            >
              <p>
                Whether you are{" "}
                <span className="font-semibold text-primary">
                  a founder with just an idea
                </span>{" "}
                or a business looking to build a complete product, we help
                define the scope, architect the system, and deliver with
                structured execution and clear timelines.
              </p>
            </motion.div>
          </div>

          {/* Right Visual - 3D Dashboard */}
          <div className="relative flex items-center justify-center lg:justify-end" style={{ perspective: "1200px" }}>
            <motion.div
              initial={{ opacity: 0, rotateY: -15 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[400px] w-full max-w-[600px] lg:h-[550px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Main 3D Card */}
              <motion.div
                animate={{ 
                  rotateY: [0, 2, 0, -2, 0],
                  rotateX: [0, -1, 0, 1, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 rounded-3xl border border-border/50 bg-gradient-to-br from-surface/60 to-surface/20 p-8 shadow-2xl backdrop-blur-md"
                style={{ 
                  transform: "translateZ(0px)",
                  boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.5), 0 0 40px -10px rgba(110, 231, 183, 0.15)"
                }}
              >
                {/* Top Navigation Bar */}
                <div className="absolute left-6 top-6 right-6 flex items-center gap-2 rounded-lg border border-border/30 bg-surface/50 px-4 py-2 backdrop-blur-sm"
                     style={{ transform: "translateZ(20px)" }}>
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="ml-3 h-2 flex-1 rounded-full bg-border/40"></div>
                </div>

                {/* Circular Progress - 3D */}
                <motion.div
                  animate={{ 
                    rotateZ: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute right-12 top-1/3 flex h-36 w-36 -translate-y-1/2 items-center justify-center rounded-full border-4 border-accent/40 bg-gradient-to-br from-surface/80 to-surface/40 shadow-xl backdrop-blur-sm"
                  style={{ 
                    transform: "translateZ(50px)",
                    boxShadow: "0 20px 40px -10px rgba(110, 231, 183, 0.4), inset 0 2px 10px rgba(110, 231, 183, 0.1)"
                  }}
                >
                  <div className="relative h-28 w-28 rounded-full border-[10px] border-accent/30 border-t-accent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-accent drop-shadow-lg">
                      75%
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl"></div>
                </motion.div>

                {/* Window Card 1 - 3D */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotateX: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-10 top-24 w-40 rounded-xl border border-border/50 bg-gradient-to-br from-surface/90 to-surface/60 shadow-xl backdrop-blur-sm overflow-hidden"
                  style={{ 
                    transform: "translateZ(70px)",
                    boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.4), 0 0 20px rgba(110, 231, 183, 0.2)"
                  }}
                >
                  {/* Window Header */}
                  <div className="flex items-center gap-1.5 border-b border-border/30 bg-surface/50 px-3 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/60"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/60"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/60"></div>
                  </div>
                  {/* Window Content */}
                  <div className="p-3">
                    <div className="mb-2 h-2.5 w-full rounded-full bg-gradient-to-r from-accent to-accent/50 shadow-lg"></div>
                    <div className="h-2 w-3/4 rounded-full bg-border/60"></div>
                  </div>
                </motion.div>

                {/* App Icons Card - 3D */}
                <motion.div
                  animate={{ 
                    y: [0, 12, 0],
                    rotateX: [0, -5, 0]
                  }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-24 left-14 rounded-xl border border-border/50 bg-gradient-to-br from-surface/90 to-surface/60 p-4 shadow-xl backdrop-blur-sm"
                  style={{ 
                    transform: "translateZ(60px)",
                    boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.4), 0 0 20px rgba(56, 189, 248, 0.2)"
                  }}
                >
                  <div className="flex gap-2.5">
                    <div className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-accent/40 to-accent/20 shadow-md">
                      <div className="absolute inset-1.5 rounded-md border border-accent/30"></div>
                    </div>
                    <div className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/40 to-blue-500/20 shadow-md">
                      <div className="absolute inset-1.5 rounded-md border border-blue-500/30"></div>
                    </div>
                    <div className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-accent/40 to-accent/20 shadow-md">
                      <div className="absolute inset-1.5 rounded-md border border-accent/30"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Chart/Analytics Panel - 3D */}
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-16 right-12 rounded-lg border border-border/30 bg-surface/40 p-3 backdrop-blur-sm"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="mb-2 flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                    <div className="h-1 w-12 rounded-full bg-border/50"></div>
                  </div>
                  <div className="space-y-1.5">
                    {[45, 70, 50, 85, 60].map((width, i) => (
                      <motion.div
                        key={i}
                        animate={{ width: [width * 0.8, width, width * 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                        className="h-1.5 rounded-full bg-gradient-to-r from-accent to-blue-400 shadow-lg"
                        style={{ 
                          width: `${width}px`,
                          boxShadow: "0 0 10px rgba(110, 231, 183, 0.5)"
                        }}
                      ></motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Notification Badge */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-6 top-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent/50 bg-accent/20 shadow-lg backdrop-blur-sm"
                  style={{ transform: "translateZ(45px)" }}
                >
                  <div className="h-5 w-5 rounded-full border-2 border-accent bg-accent/40"></div>
                </motion.div>

                {/* Decorative 3D Elements */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute right-6 top-6 h-20 w-20 rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-accent/10 to-transparent shadow-lg"
                  style={{ transform: "translateZ(30px)" }}
                ></motion.div>
                
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-6 left-6 h-16 w-16 rounded-full border-2 border-blue-400/40 bg-gradient-to-br from-blue-400/10 to-transparent shadow-lg"
                  style={{ transform: "translateZ(25px)" }}
                ></motion.div>
              </motion.div>

              {/* Enhanced Glow Effects */}
              <div className="absolute -right-12 top-1/4 h-80 w-80 rounded-full bg-accent/30 blur-3xl"></div>
              <div className="absolute -left-12 bottom-1/4 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent/5 via-transparent to-blue-500/5 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
