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
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
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
                            className="p-2 text-gray-600 hover:text-brand-blue"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "fixed inset-0 top-20 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col p-6 gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-xl font-display font-medium",
                                pathname === link.href ? "text-brand-blue" : "text-gray-900"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="https://www.toasttab.com/local/order/olympia-cafe-and-gyros-247-central-ave"
                        target="_blank"
                        className="mt-4 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-blue text-white text-lg font-bold shadow-lg shadow-brand-blue/20 gap-3"
                    >
                        Order Takeout
                        <ShoppingBag className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
