import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import heroImage from "@/assets/hero-scooter.jpg";

const Hero = () => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set a timeout to show image if video takes too long
      const timeout = setTimeout(() => {
        if (!videoLoaded) {
          console.log("Video loading timeout, showing fallback image");
          setVideoError(true);
        }
      }, 5000);

      // Try to play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video playing successfully");
            setVideoLoaded(true);
            clearTimeout(timeout);
          })
          .catch(() => {
            console.log("Video autoplay failed, showing fallback image");
            setVideoError(true);
            clearTimeout(timeout);
          });
      }

      return () => clearTimeout(timeout);
    }
  }, [videoLoaded]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        {!videoError ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log("Video error:", e);
                setVideoError(true);
              }}
              onLoadStart={() => {
                console.log("Video loading started");
              }}
              onCanPlay={() => {
                console.log("Video can play");
                setVideoError(false);
                setVideoLoaded(true);
              }}
              onLoadedData={() => {
                console.log("Video data loaded");
                setVideoLoaded(true);
              }}
              style={{ objectFit: 'cover' }}
            >
              <source src="/istockphoto-1413990606-640_adpp_is-vmake.mp4" type="video/mp4" />
            </video>
          </>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white"
        >
          Ride Hard.
          <br />
          <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
            Build Yours.
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
        >
          Precision-built scooters for every ride.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("products")}
            className="flex items-center justify-center bg-gradient-to-r from-accent to-blue-500 hover:from-accent/90 hover:to-blue-500 text-white hover:-translate-y-0.5 hover:shadow-lg text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 ease-in-out"
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}
          >
            Shop Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("custom-build")}
            className="flex items-center justify-center text-white bg-transparent hover:bg-white hover:text-black border border-white hover:border-white hover:-translate-y-0.5 text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 ease-in-out"
          >
            Build Yours
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
