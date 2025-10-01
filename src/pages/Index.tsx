import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Products from "@/components/Products";
import Manufacturers from "@/components/Manufacturers";
import CustomBuild from "@/components/CustomBuild";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Products />
      <Manufacturers />
      <CustomBuild />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
