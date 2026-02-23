import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brand-charcoal text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-display font-bold text-white mb-4">
                            OLYMPIA <span className="text-brand-gold">CAFE</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Authentic Greek flavors in the heart of Osseo. Established 1985.
                            Serving the community with passion and tradition.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-brand-blue transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-white/10 hover:bg-brand-blue transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                                <span>247 Central Ave,<br />Osseo, MN 55369</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                                <a href="tel:7634243935" className="hover:text-white transition-colors">763-424-3935</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                                <a href="mailto:Olympiacafeandgyros@gmail.com" className="hover:text-white transition-colors">Email Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-6">Business Hours</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex justify-between"><span>Mon</span> <span>CLOSED</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-1"><span>Tue - Fri</span> <span>9:00 AM – 9:00 PM</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-1"><span>Sat</span> <span>7:00 AM – 9:00 PM</span></li>
                            <li className="flex justify-between"><span>Sun</span> <span>8:00 AM – 3:00 PM</span></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-display font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">Our Menu</Link></li>
                            <li><Link href="/catering" className="hover:text-brand-gold transition-colors">Catering Services</Link></li>
                            <li><Link href="/info" className="hover:text-brand-gold transition-colors">Location & Map</Link></li>
                            <li><Link href="https://www.toasttab.com/local/order/olympia-cafe-and-gyros-247-central-ave" target="_blank" className="text-brand-gold font-semibold uppercase tracking-wider">Order Now</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Olympia Cafe & Gyros. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white underline underline-offset-4">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white underline underline-offset-4">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
