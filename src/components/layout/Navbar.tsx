"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Location & Hours", href: "/info" },
    { name: "Catering", href: "/catering" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-display font-bold tracking-tight text-brand-blue uppercase">
                                Olympia
                            </span>
                            <span className="text-2xl font-display font-light text-brand-gold uppercase tracking-widest hidden sm:inline">
                                Cafe
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-brand-blue",
                                        pathname === link.href ? "text-brand-blue" : "text-gray-600"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="https://www.toasttab.com/local/order/olympia-cafe-and-gyros-247-central-ave"
                                target="_blank"
                                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold transition-transform hover:scale-105 active:scale-95 gap-2"
                            >
                                Order Online
                                <ShoppingBag className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-gray-600 hover:text-brand-blue transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Nav */}
            <div
                className={cn(
                    "fixed top-20 right-0 bottom-0 w-4/5 max-w-sm z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col p-8 gap-6 h-full">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-xl font-display font-medium py-3 px-4 rounded-lg transition-all",
                                    pathname === link.href 
                                        ? "text-brand-blue bg-brand-blue/10 border-l-4 border-brand-blue" 
                                        : "text-gray-900 hover:bg-gray-50"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-auto pt-6 border-t border-gray-100">
                        <Link
                            href="https://www.toasttab.com/local/order/olympia-cafe-and-gyros-247-central-ave"
                            target="_blank"
                            onClick={() => setIsOpen(false)}
                            className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-blue text-white text-lg font-bold shadow-lg shadow-brand-blue/20 gap-3 hover:bg-brand-blue/90 transition-colors"
                        >
                            Order Takeout
                            <ShoppingBag className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
