import React from "react";
import { Clock } from "lucide-react";

export function HoursTable() {
    const hours = [
        { day: "Monday", status: "CLOSED", highlighted: false },
        { day: "Tuesday", status: "9:00 AM – 9:00 PM", highlighted: true },
        { day: "Wednesday", status: "9:00 AM – 9:00 PM", highlighted: true },
        { day: "Thursday", status: "9:00 AM – 9:00 PM", highlighted: true },
        { day: "Friday", status: "9:00 AM – 9:00 PM", highlighted: true },
        { day: "Saturday", status: "7:00 AM – 9:00 PM", highlighted: true },
        { day: "Sunday", status: "8:00 AM – 3:00 PM", highlighted: true },
    ];

    return (
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-brand-gold/10 rounded-2xl text-brand-gold">
                    <Clock className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-display font-bold text-brand-charcoal">Business Hours</h2>
                    <p className="text-sm text-gray-500">Visit us for breakfast, lunch, or dinner.</p>
                </div>
            </div>

            <div className="space-y-4">
                {hours.map((item) => (
                    <div
                        key={item.day}
                        className={`flex justify-between items-center py-3 border-b border-gray-50 last:border-0 ${item.day === "Monday" ? "text-gray-400" : ""}`}
                    >
                        <span className="font-medium">{item.day}</span>
                        <span className={`font-bold ${item.highlighted ? "text-brand-blue" : "text-gray-400"}`}>
                            {item.status}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                <p className="text-xs text-brand-blue text-center font-medium leading-relaxed">
                    * Hours may vary on public holidays. Please call us to confirm.
                </p>
            </div>
        </div>
    );
}
