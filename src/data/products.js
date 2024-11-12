import thermalPaperImage from '../assets/bpa-free-thermal-paper.jpeg';
import garbageBagImage from '../assets/garbage-bag.jpeg';
import tshirtBagImage from '../assets/t-shirt-bags.jpeg';
import glovesImage from '../assets/nitrile-gloves.jpg'; // Import gloves image

const products = [
    {
        id: 1,
        name: "BPA-Free Thermal Paper",
        image: thermalPaperImage,
        description: `Our BPA-Free Thermal Paper is specially crafted for high-traffic environments like gas stations and logistics operations. It delivers crisp, smudge-resistant receipts and labels, ensuring smooth and efficient transactions at pumps, counters, and warehouses. With durability and eco-conscious materials, this thermal paper is the go-to solution for businesses that need high performance with a low environmental footprint.`,
        features: [
            "BPA-Free & Safe: No harmful chemicals, suitable for frequent handling by staff and customers.",
            "Sharp & Clear Prints: Produces smudge-proof, easy-to-read text, barcodes, and QR codes.",
            "Fade-Resistant Durability: Receipts stay legible over time for accurate record-keeping.",
            "Universal Compatibility: Works seamlessly with gas pumps, POS systems, kiosks, and mobile printers.",
            "Eco-Friendly Choice: Made from sustainable materials to support your green initiatives."
        ],
        options: [
            { size: '2 1/4" x 30ft', quantity: '100 rolls', price: 20 },
            { size: '2 1/4" x 60ft', quantity: '100 rolls', price: 30 },
            { size: '3 1/8" x 220ft', quantity: '50 rolls', price: 55 },
            { size: '3 1/8" x 220ft (Higher Quality)', quantity: '50 rolls', price: 80 },
            { size: '3 1/8" x 200ft', quantity: '50 rolls', price: 80 }
        ]
    },
    {
        id: 2,
        name: "Garbage & Recycle Bags - Durable & Eco-Friendly Waste Solutions",
        image: garbageBagImage,
        description: `Our Garbage & Recycle Bags are designed to make waste management easier and more sustainable. Crafted from strong, tear-resistant materials, these bags handle everything from kitchen waste to recyclables with ease. Perfect for homes, businesses, and outdoor use, they are built to meet your disposal needs while supporting eco-friendly practices.`,
        features: [
            "Heavy-Duty Strength: Tear-resistant and durable for handling heavy loads.",
            "Eco-Friendly Materials: Recyclable and made from sustainable sources, reducing environmental impact.",
            "Leak-Proof Design: Keeps messes contained, ideal for both wet and dry waste.",
            "Multiple Sizes Available: Options to fit small bins, large trash cans, and industrial use.",
            "Color-Coded Options: Easily separate garbage from recyclables with distinct bag colors."
        ],
        options: [
            { size: '35*47" strong', quantity: '200 bags', price: 33 },
            { size: '35*47" extra strong', quantity: '100 bags', price: 27 },
            { size: '35*47" 3mil construction', quantity: '50 bags', price: 30 },
            { size: '35*47" 6mil construction', quantity: '50 bags', price: 35 },
            { size: '30*38" strong', quantity: '200 bags', price: 27 },
            { size: '26*36" clear', quantity: '200 bags', price: 28 },
            { size: '26*36" black', quantity: '200 bags', price: 27 },
            { size: '22*24"', quantity: '500 bags', price: 30 },
            { size: '20*22" white', quantity: '500 bags', price: 28 },
            { size: '20*22" black', quantity: '500 bags', price: 27 },
            { size: '20*22" clear', quantity: '500 bags', price: 29 }
        ]
    },
    {
        id: 3,
        name: "T-Shirt Bags - Durable, Multipurpose & 14lb Capacity",
        image: tshirtBagImage,
        description: `Our T-Shirt Bags are the perfect solution for retail stores, restaurants, and events. With a sturdy 14lb capacity, these bags provide reliable performance for carrying groceries, take-out meals, or retail items. Their versatile and user-friendly design ensures easy handling while supporting eco-conscious practices.`,
        features: [
            "14lb Carrying Capacity: Strong enough to handle groceries, clothing, and more.",
            "Durable & Tear-Resistant: Built to withstand heavy loads without ripping.",
            "Eco-Friendly Options Available: Support sustainable practices with recyclable and reusable materials.",
            "Comfortable Handles: T-shirt style handles for easy carrying and secure grip.",
            "Compact & Easy Storage: Designed to take up minimal space when not in use."
        ],
        options: [
            { size: 'S1 White', quantity: '30 bags', price: 33 },
            { size: 'S2 White', quantity: '30 bags', price: 33 },
            { size: 'S3 White', quantity: '28 bags', price: 34 },
            { size: 'S3 Colour', quantity: '27 bags', price: 27 },
            { size: 'S4 White', quantity: '26 bags', price: 28 },
            { size: 'S4 Colour', quantity: '25 bags', price: 27 }
        ]
    },
    {
        id: 4,
        name: "Nitrile Gloves - Durable, Latex-Free, and Multi-Purpose Protection",
        image: glovesImage,
        description: `Our Nitrile Gloves offer reliable protection and versatility for a wide range of applications. Latex-free and comfortable, these gloves are ideal for individuals with latex allergies. Built to be strong and puncture-resistant, they are perfect for use in medical, industrial, food handling, and cleaning environments.`,
        features: [
            "Latex-Free & Allergy-Safe: Suitable for users with latex sensitivities.",
            "Puncture & Tear-Resistant: Provides durable protection during rigorous tasks.",
            "Comfortable Fit: Ensures flexibility and comfort for extended wear.",
            "Powder-Free Design: Prevents contamination and is gentle on skin.",
            "Disposable & Hygienic: Promotes cleanliness with easy disposal."
        ],
        options: [
            { size: 'Black - 6mil - Automotive', quantity: '10 * 100', price: 65.00 },
            { size: 'Clear-Rhino-DC2 - Medical & Restaurant', quantity: '10 * 500', price: 50.00 }
        ]
    }
];

export default products;
