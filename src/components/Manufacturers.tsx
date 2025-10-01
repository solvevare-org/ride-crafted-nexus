import { motion } from "framer-motion";
import { manufacturers } from "@/data/products";

const Manufacturers = () => {
  return (
    <section id="manufacturers" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Top Brands
          </h2>
          <p className="text-xl text-muted-foreground">
            Partnered with the best in the industry
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {manufacturers.map((manufacturer, index) => (
            <motion.div
              key={manufacturer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center justify-center p-8 bg-muted rounded-2xl cursor-pointer hover:bg-accent/10 transition-all duration-300"
            >
              <span className="text-2xl font-bold tracking-tight opacity-70 hover:opacity-100 transition-opacity">
                {manufacturer}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturers;
