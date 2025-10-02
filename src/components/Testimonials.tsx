import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  rating: number;
  comment: string;
  image: string;
}

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Alex Rodriguez",
      title: "Pro Rider & Content Creator",
      rating: 5,
      comment: "RideCrafted transformed my daily commute! The custom build process was incredible - I got exactly what I needed. The performance and quality exceeded all my expectations. Best scooter I've ever owned!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "2",
      name: "Sarah Chen",
      title: "Urban Commuter",
      rating: 5,
      comment: "The build quality is outstanding! I've been riding my custom scooter for 8 months now and it still feels brand new. The customer service team helped me choose the perfect setup for city riding.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "3",
      name: "Marcus Thompson",
      title: "Freestyle Rider",
      rating: 5,
      comment: "RideCrafted doesn't just sell scooters, they craft experiences. The custom options let me build my dream ride. The carbon fiber deck and pro wheels combo is absolutely perfect for tricks and stunts.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "4",
      name: "Emma Williams",
      title: "Student & Daily Rider",
      rating: 5,
      comment: "Amazing value for money! The build process was so smooth and the team guided me through every option. My scooter handles perfectly on campus and the battery life is incredible. Highly recommend!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Rider Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from riders who chose RideCrafted for their perfect ride
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-6xl mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="group"
            >
              <Card className="bg-gradient-to-r from-black to-blue-500 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  {/* Quote and Text Content */}
                  <div className="flex-1 text-white">
                    <div className="flex items-start gap-4">
                      <div className="text-6xl text-white font-bold leading-none">"</div>
                      <div className="flex-1">
                        <p className="text-lg lg:text-xl leading-relaxed mb-6">
                          {testimonials[currentTestimonial].comment}
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            {renderStars(testimonials[currentTestimonial].rating)}
                          </div>
                          <p className="text-lg font-semibold">
                            {testimonials[currentTestimonial].name}
                          </p>
                          <p className="text-white/80 text-sm">
                            {testimonials[currentTestimonial].title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Circular Portrait */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-48 h-48 border-4 border-white rounded-full shadow-2xl">
                        <img
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-gray text-black hover:bg-gray-600 hover:text-white bg-background shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-black' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-gray text-black hover:bg-gray-600 hover:text-white bg-background shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;