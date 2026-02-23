"use client";

import React from "react";
import { motion } from "framer-motion";
import { HoursTable } from "@/components/info/HoursTable";
import { MapContainer } from "@/components/info/MapContainer";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function InfoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Dynamic Header */}
            <section className="bg-brand-blue py-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[100px]" />
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-multiply opacity-20" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                    >
                        Visit <span className="text-brand-gold">Us.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 text-lg max-w-xl leading-relaxed"
                    >
                        Find us in the heart of Osseo. We're ready to serve you the best Greek food in town.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Contact Info & Hours */}
                    <div className="lg:col-span-1 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-6">Contact Details</h3>
                            <div className="space-y-6">
                                <a href="tel:7634243935" className="flex items-center gap-4 group">
                                    <div className="p-4 bg-white rounded-2xl shadow-sm text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Phone</p>
                                        <p className="text-lg font-bold text-brand-charcoal">763-424-3935</p>
                                    </div>
                                </a>

                                <a href="mailto:Olympiacafeandgyros@gmail.com" className="flex items-center gap-4 group">
                                    <div className="p-4 bg-white rounded-2xl shadow-sm text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Email</p>
                                        <p className="text-lg font-bold text-brand-charcoal">Email Us</p>
                                    </div>
                                </a>

                                <div className="flex gap-4 pt-4">
                                    <a href="#" className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-charcoal hover:bg-brand-blue hover:text-white transition-all">
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-charcoal hover:bg-brand-blue hover:text-white transition-all">
                                        <Instagram className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <HoursTable />
                        </motion.div>
                    </div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <MapContainer />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
