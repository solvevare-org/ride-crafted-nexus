export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  manufacturer: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "4",
    name: "Shadow Series",
    price: 449,
    image: "product-1",
    manufacturer: "Shadow",
    category: "Street",
    featured: true,
  },
  {
    id: "5",
    name: "Gold Edition",
    price: 699,
    image: "product-2",
    manufacturer: "Apex",
    category: "Street",
    featured: true,
  },
  {
    id: "6",
    name: "Navy Elite",
    price: 529,
    image: "product-3",
    manufacturer: "Phoenix",
    category: "Street",
    featured: true,
  },
  {
    id: "7",
    name: "Blaze Runner",
    price: 479,
    image: "product-4",
    manufacturer: "Blaze",
    category: "Street",
  },
  {
    id: "8",
    name: "Royal Chrome",
    price: 629,
    image: "product-5",
    manufacturer: "Royal",
    category: "Pro",
  },
  {
    id: "9",
    name: "Surge Pro",
    price: 549,
    image: "product-6",
    manufacturer: "Surge",
    category: "Pro",
  },
  {
    id: "10",
    name: "Thunder Strike",
    price: 499,
    image: "product-7",
    manufacturer: "Thunder",
    category: "Street",
  },
  {
    id: "11",
    name: "Titan Carbon",
    price: 679,
    image: "product-8",
    manufacturer: "Titan",
    category: "Pro",
  },
  {
    id: "12",
    name: "Velocity Pink",
    price: 459,
    image: "product-9",
    manufacturer: "Velocity",
    category: "Street",
  },
];

export const manufacturers = [
  "Apex",
  "Phoenix",
  "Quantum",
  "Shadow",
  "Blaze",
  "Royal",
  "Surge",
  "Thunder",
  "Titan",
  "Velocity",
];
