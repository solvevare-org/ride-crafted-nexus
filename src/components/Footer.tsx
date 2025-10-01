import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter mb-4"
            >
              RIDE
            </motion.h3>
            <p className="opacity-70 leading-relaxed">
              Precision-built scooters engineered for performance, crafted for style.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Shop</h4>
            <ul className="space-y-2 opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">All Products</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Pro Series</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Street Series</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Custom Build</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Support</h4>
            <ul className="space-y-2 opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Warranty</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Shipping</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Returns</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Stay Updated</h4>
            <p className="opacity-70 mb-4 text-sm">
              Get the latest drops and exclusive offers
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="opacity-70 text-sm">
            © 2025 RIDE. All rights reserved.
          </p>

          <div className="flex gap-4">
            {[Instagram, Twitter, Youtube, Facebook].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
