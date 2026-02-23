"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";

const products = [
    {
        name: "Classic Gyro",
        description: "Our signature blend of beef and lamb, rotisserie-seared and served with tomatoes, onions, and tzatziki.",
        price: "$13.99",
        image: "/images/classic-gyro.png",
        tag: "Bestseller"
    },
    {
        name: "Chicken Souvlaki",
        description: "Marinated chicken skewers grilled to perfection, served with pita and our house specialty sauce.",
        price: "$14.49",
        image: "/images/chicken-souvlaki.png",
        tag: "Popular"
    },
    {
        name: "Spanakopita",
        description: "Crispy phyllo pastry filled with spinach and feta cheese, served with a side of tzatziki.",
        price: "$10.99",
        image: "/images/spanakopita.png",
        tag: "Traditional"
    }
];

export function FeaturedProducts() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-brand-gold uppercase tracking-[0.2em] mb-4">Our Favorites</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-charcoal leading-tight">
                            Featured <span className="text-brand-blue">Greek</span> Delights.
                        </h3>
                    </div>
                    <Link
                        href="/menu"
                        className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-8 decoration-2 decoration-brand-blue/30"
                    >
                        Explore Full Menu
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-brand-blue uppercase tracking-widest shadow-sm">
                                        {product.tag}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-xl font-display font-bold text-brand-charcoal">{product.name}</h4>
                                    <span className="font-bold text-brand-blue">{product.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                    {product.description}
                                </p>
                                <Link
                                    href="https://www.toasttab.com/local/order/olympia-cafe-and-gyros-247-central-ave"
                                    target="_blank"
                                    className="w-full inline-flex items-center justify-center py-4 px-6 rounded-xl border-2 border-brand-blue/10 text-brand-blue font-bold text-sm hover:bg-brand-blue hover:text-white transition-all gap-2"
                                >
                                    Add to Order
                                    <ShoppingBag className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
