import React from "react";
import { MapPin } from "lucide-react";

export function MapContainer() {
    return (
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col">
            <div className="p-8 border-b border-gray-50">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-brand-blue/10 rounded-2xl text-brand-blue">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-display font-bold text-brand-charcoal">Find Us</h2>
                        <p className="text-sm text-gray-500">247 Central Ave, Osseo, MN 55369</p>
                    </div>
                </div>
            </div>

            <div className="flex-grow min-h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.8710317582236!2d-93.40428!3d45.1165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b3394856f67557%3A0xc6cb6900f089675c!2sOlympia%20Cafe%20%26%20Gyros!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>

            <div className="p-6 bg-brand-charcoal flex justify-between items-center group cursor-pointer">
                <span className="text-white font-bold text-sm tracking-wide">GET DIRECTIONS</span>
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-charcoal group-hover:bg-white transition-colors">
                    <MapPin className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}
