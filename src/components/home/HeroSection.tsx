import { Link } from "react-router-dom";
import { ArrowRight, Circle } from "lucide-react";
import heroImage from "@/assets/hero-wall.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional drywall finish"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in backdrop-blur-sm">
            <Circle className="w-2 h-2 fill-primary text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Professional Drywall Repair</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-slide-up">
            Expert Drywall Solutions{" "}
            <span className="text-gradient">Delivered with Precision</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            From minor repairs to complete wall restoration, Mr. Patch provides superior craftsmanship and reliable service for Salt Lake City homeowners.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base transition-all duration-300 hover:bg-primary/90 btn-glow group"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary/80 backdrop-blur-sm text-secondary-foreground rounded-xl font-semibold text-base transition-all duration-300 hover:bg-secondary border border-border"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
