export type MenuItem = {
    id: string;
    name: string;
    description?: string;
    price: string;
    category: string;
    image?: string;
    popular?: boolean;
};

export const menuCategories = [
    "Appetizers",
    "Greek Salads",
    "Gyros & Wraps",
    "Greek Platters",
    "Burgers & Sandwiches",
    "Sides",
    "Desserts",
];

export const menuData: MenuItem[] = [
    // Appetizers
    {
        id: "app-1",
        name: "Appetizer Sampler",
        description: "Gyro meat, spinach pie, dolmades, olives, feta cheese, and pita.",
        price: "$15.99",
        category: "Appetizers",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800",
        popular: true,
    },
    {
        id: "app-2",
        name: "Spanakopita",
        description: "Two triangles of crispy phyllo filled with spinach and feta.",
        price: "$10.99",
        category: "Appetizers",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "app-3",
        name: "Gyro Wontons",
        description: "Crispy wontons filled with gyro meat and cream cheese.",
        price: "$11.49",
        category: "Appetizers",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "app-4",
        name: "Homemade Hummus",
        description: "Served with two pitas. Check our board for 12+ flavors.",
        price: "$12.49",
        category: "Appetizers",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "app-5",
        name: "Saganaki",
        description: "Flaming Greek cheese served with pita. (Dine-in specialty)",
        price: "$16.49",
        category: "Appetizers",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=800",
    },

    // Salads
    {
        id: "sal-1",
        name: "Classic Greek Salad",
        description: "Mixed greens, tomatoes, cucumbers, onions, olives, and feta.",
        price: "$11.79",
        category: "Greek Salads",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "sal-2",
        name: "Greek Village Salad",
        description: "Authentic Horiatiki with tomatoes, cucumbers, peppers, onions, olives, and feta. No lettuce.",
        price: "$12.79",
        category: "Greek Salads",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    },

    // Gyros
    {
        id: "gyro-1",
        name: "Classic Gyro",
        description: "The original! Spiced beef and lamb with tomatoes, onions, and tzatziki.",
        price: "$13.99",
        category: "Gyros & Wraps",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=800",
        popular: true,
    },
    {
        id: "gyro-2",
        name: "Olympia Chicken Gyro",
        description: "Marinated chicken breast with tomatoes, onions, and tzatziki.",
        price: "$13.99",
        category: "Gyros & Wraps",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "gyro-3",
        name: "Firecracker Gyro",
        description: "Our classic gyro with a spicy kick of jalapeños and fire sauce.",
        price: "$15.99",
        category: "Gyros & Wraps",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "gyro-4",
        name: "Falafel Gyro",
        description: "Hand-made falafel with tomatoes, onions, and tzatziki.",
        price: "$13.99",
        category: "Gyros & Wraps",
        image: "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=800",
    },

    // Platters
    {
        id: "plat-1",
        name: "Gyro Platter",
        description: "Large portion of gyro meat, pita, tzatziki, and a Greek salad.",
        price: "$18.99",
        category: "Greek Platters",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "plat-2",
        name: "Greek Sampler Platter",
        description: "Gyro meat, chicken souvlaki, spanakopita, and dolmades.",
        price: "$21.99",
        category: "Greek Platters",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
        popular: true,
    },

    // Desserts
    {
        id: "des-1",
        name: "Baklava",
        description: "Phyllo pastry with honey and walnuts.",
        price: "$5.49",
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
        popular: true,
    },
    {
        id: "des-2",
        name: "Baklava Cheesecake",
        description: "The best of both worlds! Creamy cheesecake with a baklava crust.",
        price: "$7.99",
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&q=80&w=800",
    }
];
