import { useState } from "react";
import { motion } from "framer-motion";
import { products, manufacturers } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Bookmark } from "lucide-react";
import product1 from "@/assets/featured-2.jpg";
import product2 from "@/assets/featured-2.jpg";
import product3 from "@/assets/featured-2.jpg";
import product4 from "@/assets/featured-2.jpg";
import product5 from "@/assets/featured-3.jpg";
import product6 from "@/assets/featured-3.jpg";
import product7 from "@/assets/featured-3.jpg";
import product8 from "@/assets/featured-3.jpg";
import product9 from "@/assets/featured-3.jpg";

const imageMap: { [key: string]: string } = {
  "product-1": product1,
  "product-2": product2,
  "product-3": product3,
  "product-4": product4,
  "product-5": product5,
  "product-6": product6,
  "product-7": product7,
  "product-8": product8,
  "product-9": product9,
};

const Products = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    if (selectedManufacturer && product.manufacturer !== selectedManufacturer) return false;
    if (selectedCategory && product.category !== selectedCategory) return false;
    return true;
  });

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            All Products
          </h2>
          <p className="text-xl text-muted-foreground">
            Find your perfect ride
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
          >
            All
          </Button>
          <Button
            variant={selectedCategory === "Pro" ? "default" : "outline"}
            onClick={() => setSelectedCategory("Pro")}
            className="rounded-full"
          >
            Pro
          </Button>
          <Button
            variant={selectedCategory === "Street" ? "default" : "outline"}
            onClick={() => setSelectedCategory("Street")}
            className="rounded-full"
          >
            Street
          </Button>
          {/* <Button
            variant={selectedCategory === "Signature" ? "default" : "outline"}
            onClick={() => setSelectedCategory("Signature")}
            className="rounded-full"
          >
            Signature
          </Button> */}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-muted aspect-square">
                <motion.img
                  src={imageMap[product.image]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.manufacturer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <Button
                    className="bg-accent hover:bg-accent/90 text-white rounded-full px-6"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;