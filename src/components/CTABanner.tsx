import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-foreground to-foreground/90 text-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Ride the Best.
            <br />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Built for You.
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Start building your custom scooter today
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("custom-build")}
            className="bg-accent hover:bg-accent/90 text-white text-lg px-12 py-6 rounded-full font-semibold"
          >
            Start Building
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
