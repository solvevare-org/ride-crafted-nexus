import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface BuildOption {
  id: string;
  name: string;
  options: string[];
  prices: number[];
}

const buildOptions: BuildOption[] = [
  {
    id: "deck",
    name: "Deck",
    options: ["Standard", "Pro", "Carbon Fiber"],
    prices: [0, 50, 150],
  },
  {
    id: "wheels",
    name: "Wheels",
    options: ["100mm", "110mm", "120mm"],
    prices: [0, 30, 60],
  },
  {
    id: "handlebar",
    name: "Handlebar",
    options: ["Standard", "T-Bar", "Y-Bar"],
    prices: [0, 40, 40],
  },
  {
    id: "color",
    name: "Color",
    options: ["Black", "Blue", "Red", "Green", "Custom"],
    prices: [0, 0, 0, 0, 50],
  },
];

const CustomBuild = () => {
  const [selections, setSelections] = useState<{ [key: string]: number }>({
    deck: 0,
    wheels: 0,
    handlebar: 0,
    color: 0,
  });

  const basePrice = 399;
  const totalPrice = basePrice + Object.keys(selections).reduce((sum, key) => {
    const option = buildOptions.find((o) => o.id === key);
    return sum + (option?.prices[selections[key]] || 0);
  }, 0);

  return (
    <section id="custom-build" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Build Your Dream Ride
          </h2>
          <p className="text-xl opacity-80">
            Customize every detail to match your style
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {buildOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold mb-4">{option.name}</h3>
                <div className="space-y-2">
                  {option.options.map((opt, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => setSelections({ ...selections, [option.id]: optIndex })}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between ${
                        selections[option.id] === optIndex
                          ? "border-accent bg-accent/10"
                          : "border-background/20 hover:border-background/40"
                      }`}
                    >
                      <span className="font-medium">{opt}</span>
                      <div className="flex items-center gap-3">
                        {option.prices[optIndex] > 0 && (
                          <span className="text-sm opacity-70">+${option.prices[optIndex]}</span>
                        )}
                        {selections[option.id] === optIndex && (
                          <Check size={20} className="text-accent" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 text-center"
          >
            <p className="text-sm uppercase tracking-wide mb-2 opacity-70">Total Price</p>
            <p className="text-6xl font-bold mb-6">${totalPrice}</p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg px-12 py-6 rounded-full font-semibold"
            >
              Build & Buy
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomBuild;
