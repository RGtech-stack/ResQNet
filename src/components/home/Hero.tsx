"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Activity, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { HeroBackground } from "./HeroBackground"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-32">
            <HeroBackground />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm sm:text-base rounded-full border-primary/20 bg-primary/5 backdrop-blur-sm">
                            <span className="flex items-center gap-2 text-primary font-medium">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                ResQNet Live: Emergency Protocol Active
                            </span>
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 drop-shadow-sm"
                    >
                        Rapid Response for <br className="hidden sm:inline" />
                        <span className="text-primary italic">Critical Moments</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-[800px] text-lg text-muted-foreground md:text-xl leading-relaxed"
                    >
                        The centralized command platform connecting <strong>Citizens</strong>, <strong>Volunteers</strong>, and <strong>Agencies</strong>.
                        Real-time intelligence when every second counts.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4"
                    >
                        <Link href="/register">
                            <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
                                Join Response Team
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/citizen">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all">
                                Report Incident
                                <Activity className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
        </section>
    )
}
