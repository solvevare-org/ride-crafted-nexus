import { motion } from "framer-motion";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Star, Bookmark } from "lucide-react";
import featured1 from "@/assets/featured-2.jpg";
import featured2 from "@/assets/featured-2.jpg";
import featured3 from "@/assets/featured-3.jpg";

const imageMap: { [key: string]: string } = {
  "featured-1": featured1,
  "featured-2": featured2,
  "featured-3": featured3,
};

const FeaturedProducts = () => {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section id="featured" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground">
            Our most iconic rides
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
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
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.manufacturer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">${product.price}</span>
                  <Button
                    className="bg-accent hover:bg-accent/90 text-white rounded-full px-8"
                  >
                    Buy Now
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

export default FeaturedProducts;
