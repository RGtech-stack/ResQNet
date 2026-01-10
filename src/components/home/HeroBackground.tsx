"use client"

import { motion } from "framer-motion"

export function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Dark Gradient Base */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/0 via-slate-900/80 to-slate-950 dark:from-slate-900/0 dark:via-slate-900/80 dark:to-slate-950" />

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Radar Circles */}
            <div className="absolute inset-0 flex items-center justify-center top-[-10%] sm:top-[-20%]">
                <div className="relative w-[80vw] h-[80vw] sm:w-[600px] sm:h-[600px]">
                    {/* Pulsing Rings */}
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 border border-primary/20 rounded-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [0.8, 1.5],
                                opacity: [0.5, 0],
                                borderWidth: ["1px", "0px"]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 1.5,
                                ease: "easeOut"
                            }}
                        />
                    ))}

                    {/* Static Rings */}
                    <div className="absolute inset-0 border border-primary/5 rounded-full scale-100" />
                    <div className="absolute inset-0 border border-primary/5 rounded-full scale-75" />
                    <div className="absolute inset-0 border border-primary/5 rounded-full scale-50" />
                </div>
            </div>

            {/* Floating Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
                />
            </div>
        </div>
    )
}
