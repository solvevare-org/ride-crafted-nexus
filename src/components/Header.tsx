import { useState, useEffect } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AuthDialog from "./AuthDialog";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className={`text-2xl font-bold tracking-tighter cursor-pointer transition-colors duration-300 ${
              scrolled || mobileMenuOpen ? "text-black" : "text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            RIDE
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {["products", "manufacturers", "custom-build", "featured", "testimonials", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors duration-300 ${
                  scrolled || mobileMenuOpen ? "text-black" : "text-white"
                }`}
              >
                {item.replace("-", " ")}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 hover:text-accent transition-colors duration-300 ${
                scrolled || mobileMenuOpen ? "text-black" : "text-white"
              }`}
              onClick={() => setAuthDialogOpen(true)}
            >
              <User size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 hover:text-accent transition-colors duration-300 relative ${
                scrolled || mobileMenuOpen ? "text-black" : "text-white"
              }`}
            >
              <ShoppingCart size={20} />
              <span className={`absolute -top-1 -right-1 w-5 h-5 text-xs rounded-full flex items-center justify-center transition-colors duration-300 ${
                scrolled || mobileMenuOpen ? "bg-accent text-white" : "bg-black text-white"
              }`}>
                0
              </span>
            </motion.button>
            
            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${
                scrolled || mobileMenuOpen ? "text-black" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-6 flex justify-center items-center flex-col gap-4">
              {["products", "manufacturers", "custom-build", "featured", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors py-2 text-black"
                >
                  {item.replace("-", " ")}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Dialog */}
      <AuthDialog 
        open={authDialogOpen} 
        onOpenChange={setAuthDialogOpen} 
      />
    </motion.header>
  );
};

export default Header;
