"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
    "Freshly prepared gyros with traditional spices",
    "Homemade hummus and tzatziki",
    "Family-owned and operated since 1985",
    "Vegetarian and gluten-free options available",
];

export function AboutUsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
                                alt="Fresh Salad"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Overlay card */}
                        <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white p-8 rounded-2xl shadow-xl max-w-[280px]">
                            <p className="text-3xl font-display font-bold mb-2">39+</p>
                            <p className="text-sm text-blue-100 font-medium">Years of serving authentic Greek cuisine in Osseo.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] mb-4">Our Story</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-charcoal mb-8 leading-tight">
                            A Taste of <span className="text-brand-blue">Greece</span> in Your Neighborhood.
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Olympia Cafe & Gyros was founded in 1985 with a simple mission: to bring the authentic flavors of Greece to Osseo, Minnesota. Our recipes have been passed down through generations, ensuring every dish we serve is a tribute to our heritage.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
