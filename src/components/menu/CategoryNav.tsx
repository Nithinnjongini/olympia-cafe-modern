"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { menuCategories } from "@/data/menu";

interface CategoryNavProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

export function CategoryNav({ activeCategory, setActiveCategory }: CategoryNavProps) {
    return (
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 mb-12 py-4 scrollbar-hide overflow-x-auto">
            <div className="max-w-7xl mx-auto px-4 flex gap-4 whitespace-nowrap">
                <button
                    onClick={() => setActiveCategory("All")}
                    className={cn(
                        "px-6 py-2 rounded-full text-sm font-bold transition-all",
                        activeCategory === "All"
                            ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                >
                    All Items
                </button>
                {menuCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-bold transition-all",
                            activeCategory === category
                                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}
