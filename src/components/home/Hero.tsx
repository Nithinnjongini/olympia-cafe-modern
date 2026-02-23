"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Utensils } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-charcoal">
            {/* Decorative background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-brand-blue/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand-gold/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/images/classic-gyro.png')] bg-cover bg-center opacity-30 mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-xs font-bold tracking-widest uppercase mb-6">
                            <Utensils className="w-3 h-3" />
                            Est. 1985 • Osseo, MN
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] mb-8">
                            Taste the <span className="text-brand-blue">Tradition</span> of Greece.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl leading-relaxed">
                            Experience authentic Mediterranean flavors crafted with family recipes passed down through generations. From our signature gyros to fresh Greek salads.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="https://www.toasttab.com/local/order/olympia-cafe-and-gyros-247-central-ave"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-blue text-white font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-brand-blue/20 group gap-3"
                            >
                                Order Online
                                <ShoppingBag className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/menu"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all gap-3 group"
                            >
                                View Menu
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-8">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-charcoal bg-gray-800 flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-400">
                                <span className="text-white font-bold">1,200+</span> Google Reviews
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                            <img
                                src="/images/classic-gyro.png"
                                alt="Delicious Gyro"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Float badge */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden xl:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl">
                                    4.7
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Google Rating</p>
                                    <div className="flex text-brand-gold mt-1">
                                        {"★".repeat(5)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
