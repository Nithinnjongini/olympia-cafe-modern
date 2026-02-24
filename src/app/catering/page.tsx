"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Utensils, Calendar, Phone } from "lucide-react";
import Image from "next/image";

const cateringFeatures = [
    {
        title: "Build Your Own Gyro Bar",
        price: "$9.99 per person",
        description: "Our most popular option! Includes gyro meat, pita bread, tomatoes, onions, tzatziki sauce, and Greek salad. (Minimum 10 people)",
        icon: Users,
        image: "/images/catering/gyro-bar.jpg",
    },
    {
        title: "Hummus Platters",
        price: "Starts at $25.99",
        description: "A variety of our 12+ homemade hummus flavors served with fresh pita and vegetables.",
        icon: Utensils,
        image: "/images/catering/hummus-platters-v2.jpg",
    },
    {
        title: "Custom Event Planning",
        price: "Contact for Quote",
        description: "From weddings to corporate events, we'll help you design a menu that fits your needs and budget.",
        icon: Calendar,
        image: "/images/catering/event-planning.jpg",
    }
];

export default function CateringPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-brand-charcoal py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/catering/hero-background.jpg"
                        alt="Catering background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
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
                            className="rounded-3xl bg-white border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-10">
                                <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-brand-charcoal mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-brand-blue font-bold mb-6">
                                    {service.price}
                                </p>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
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
