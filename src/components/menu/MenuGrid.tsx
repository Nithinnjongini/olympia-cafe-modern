"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import { MenuItem } from "@/data/menu";
import Link from "next/link";
import Image from "next/image";

interface MenuGridProps {
    items: MenuItem[];
}

export function MenuGrid({ items }: MenuGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/5 transition-all"
                    >
                        {item.image && (
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        )}
                        
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex flex-col gap-1">
                                    {item.popular && (
                                        <span className="flex items-center gap-1 text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-1">
                                            <Star className="w-3 h-3 fill-brand-gold" />
                                            Popular
                                        </span>
                                    )}
                                    <h4 className="text-xl font-display font-bold text-brand-charcoal group-hover:text-brand-blue transition-colors">
                                        {item.name}
                                    </h4>
                                </div>
                                <span className="text-lg font-bold text-brand-blue">{item.price}</span>
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed mb-6 min-h-[40px]">
                                {item.description}
                            </p>

                            <Link
                                href="https://www.toasttab.com/local/order/olympia-cafe-and-gyros-247-central-ave"
                                target="_blank"
                                className="w-full inline-flex items-center justify-center py-3 px-6 rounded-xl bg-gray-50 text-brand-charcoal font-bold text-sm hover:bg-brand-blue hover:text-white transition-all gap-2 group/btn"
                            >
                                Add to Cart
                                <ShoppingBag className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
