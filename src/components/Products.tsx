import { useState } from "react";
import { motion } from "framer-motion";
import { products, manufacturers } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";

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
          <Button
            variant={selectedCategory === "Signature" ? "default" : "outline"}
            onClick={() => setSelectedCategory("Signature")}
            className="rounded-full"
          >
            Signature
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <motion.img
                  src={imageMap[product.image]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{product.manufacturer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <Button
                    size="sm"
                    className="bg-accent hover:bg-accent/90 text-white rounded-full"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Add
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
