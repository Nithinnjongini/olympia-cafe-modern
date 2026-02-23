"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Utensils, Calendar, Phone } from "lucide-react";

const cateringFeatures = [
    {
        title: "Build Your Own Gyro Bar",
        price: "$9.99 per person",
        description: "Our most popular option! Includes gyro meat, pita bread, tomatoes, onions, tzatziki sauce, and Greek salad. (Minimum 10 people)",
        icon: Users,
    },
    {
        title: "Hummus Platters",
        price: "Starts at $25.99",
        description: "A variety of our 12+ homemade hummus flavors served with fresh pita and vegetables.",
        icon: Utensils,
    },
    {
        title: "Custom Event Planning",
        price: "Contact for Quote",
        description: "From weddings to corporate events, we'll help you design a menu that fits your needs and budget.",
        icon: Calendar,
    }
];

export default function CateringPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-brand-charcoal py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-display font-bold text-white mb-8"
                    >
                        Catering <span className="text-brand-gold">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-xl max-w-2xl mx-auto"
                    >
                        Make your next event unforgettable with the authentic taste of Greece. Authentic, fresh, and perfectly seasoned.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cateringFeatures.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-3xl bg-gray-50 border border-gray-100 group hover:bg-brand-blue transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-8 group-hover:bg-white transition-all">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-brand-charcoal mb-4 group-hover:text-white transition-all">
                                {service.title}
                            </h3>
                            <p className="text-brand-blue font-bold mb-6 group-hover:text-brand-gold transition-all">
                                {service.price}
                            </p>
                            <p className="text-gray-600 group-hover:text-blue-100 transition-all">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-brand-blue py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-8">Ready to Order?</h2>
                    <p className="text-blue-100 text-lg mb-12">
                        Give our catering specialist a call today to discuss your event and lock in your date.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            href="tel:7637423746"
                            className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-brand-blue font-bold text-xl rounded-2xl hover:bg-brand-gold hover:text-white transition-all shadow-xl shadow-black/10"
                        >
                            <Phone className="w-6 h-6" />
                            763-742-3746
                        </a>
                        <a
                            href="mailto:Olympiacafeandgyros@gmail.com"
                            className="flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/10 transition-all"
                        >
                            Email Inquiries
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
