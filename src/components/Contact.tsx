import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  source: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactSection = () => {
  const [values, setValues] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    source: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!data.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', values);
      alert('Thank you! We will get back to you shortly.');
      
      // Reset form
      setValues({
        name: '',
        email: '',
        phone: '',
        source: '',
        service: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Left Side - Dark Background */}
          <div className="bg-gradient-to-br from-black to-gray-600 relative overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/src/assets/hero-scooter.jpg')"
              }}
            ></div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            
            <div className="relative z-10 p-12 h-full flex flex-col justify-center">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">RIDE</span>
                  <span className="text-xl font-bold text-white -mt-1">CRAFTED</span>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                LET'S BUILD{" "}
                <span className="text-white">YOUR RIDE</span>
              </h2>
              
              {/* Description */}
              <p className="text-lg text-white/90 leading-relaxed max-w-md">
                Ready to craft your perfect scooter? Our team is here to help you build the ride of your dreams. From custom parts to expert advice, we've got you covered.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Custom Build Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Expert Technical Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">Premium Parts & Accessories</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Ready to start your custom build? Fill out the form below and our team will reach out to discuss your perfect ride.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className={`w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                      placeholder="Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      className={`w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent ${
                        errors.phone ? 'border-red-500' : ''
                      }`}
                      placeholder="Phone"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={`w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select 
                      name="source"
                      value={values.source}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent text-gray-700"
                    >
                      <option value="">How did you find us?</option>
                      <option value="google">Google Search</option>
                      <option value="referral">Friend Referral</option>
                      <option value="social">Social Media</option>
                      <option value="event">Event/Show</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <select 
                      name="service"
                      value={values.service}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent text-gray-700"
                    >
                      <option value="">What interests you?</option>
                      <option value="custom-build">Custom Build</option>
                      <option value="parts">Parts & Accessories</option>
                      <option value="repair">Repair Service</option>
                      <option value="consultation">Consultation</option>
                      <option value="bulk">Bulk Orders</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-accent focus:outline-none bg-transparent resize-none"
                    placeholder="Tell us about your dream ride..."
                    rows={3}
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-black to-gray-500 hover:from-black/90 hover:to-gray-500 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;