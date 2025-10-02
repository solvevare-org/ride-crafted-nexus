import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Products from "@/components/Products";
import Manufacturers from "@/components/Manufacturers";
import CustomBuild from "@/components/CustomBuild";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Products />
      <Testimonials />
      <Manufacturers />
      <CustomBuild />
      
      <Contact />
      <CTABanner />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
