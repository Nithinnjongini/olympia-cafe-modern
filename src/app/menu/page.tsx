"use client";

import React, { useState } from "react";
import { menuData } from "@/data/menu";
import { CategoryNav } from "@/components/menu/CategoryNav";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? menuData
        : menuData.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-brand-charcoal py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/10 rounded-full blur-[100px]" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534422298391-e4f8c170db06?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-[10px] font-bold tracking-widest uppercase mb-6"
                    >
                        <UtensilsCrossed className="w-3 h-3" />
                        Authentic Greek Flavors
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight"
                    >
                        Our <span className="text-brand-blue">Menu</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Explore our wide variety of traditional Greek dishes, from our famous gyros to fresh salads and homemade desserts.
                    </motion.p>
                </div>
            </section>

            {/* Navigation & Grid */}
            <CategoryNav
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <section className="max-w-7xl mx-auto px-4 pb-24">
                <div className="mb-12 flex justify-between items-center">
                    <h2 className="text-2xl font-display font-bold text-brand-charcoal">
                        {activeCategory} <span className="text-gray-300 font-light ml-2">{filteredItems.length} items</span>
                    </h2>
                </div>

                <MenuGrid items={filteredItems} />
            </section>

            {/* Catering CTA */}
            <section className="bg-gray-50 py-20 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h3 className="text-3xl font-display font-bold text-brand-charcoal mb-4">Planning an Event?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Bring the taste of Olympia to your next gathering with our professional catering services and famous Gyro Bar.
                    </p>
                    <a
                        href="/catering"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-brand-blue text-brand-blue font-bold hover:bg-brand-blue hover:text-white transition-all"
                    >
                        Learn About Catering
                    </a>
                </div>
            </section>
        </div>
    );
}
