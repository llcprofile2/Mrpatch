import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { CheckCircle2, ArrowRight, CircleDot, Square, Layers, Droplets, Home, Wrench, Hammer, Grid3X3 } from "lucide-react";

const services = [
  {
    icon: Square,
    title: "Drywall Hole Repair",
    description: "Expert repair of holes of any size, from small nail holes to large openings. We ensure seamless blending with your existing wall.",
    features: ["Small nail holes", "Medium punch holes", "Large openings", "Doorknob damage", "Seamless patching", "Paint-ready finish"],
  },
  {
    icon: Wrench,
    title: "Crack Repair",
    description: "Professional crack repair that addresses both the cosmetic and structural aspects. We prevent cracks from returning.",
    features: ["Hairline cracks", "Settlement cracks", "Corner cracks", "Ceiling cracks", "Joint tape repair", "Stress crack prevention"],
  },
  {
    icon: Droplets,
    title: "Water Damage Repair",
    description: "Complete restoration of water-damaged drywall. We assess the full extent of damage and restore walls to original condition.",
    features: ["Damage assessment", "Removal of affected areas", "Mold prevention", "Complete restoration", "Stain blocking", "Texture matching"],
  },
  {
    icon: Home,
    title: "Ceiling Repair",
    description: "Specialized ceiling drywall repairs including sagging, cracks, water stains, and texture restoration.",
    features: ["Sagging repair", "Water stain removal", "Crack repair", "Texture restoration", "Smooth finish", "Joint repair"],
  },
  {
    icon: Layers,
    title: "Texture Matching",
    description: "Precise texture replication to match any existing wall finish. Our expertise ensures invisible repairs.",
    features: ["Knockdown texture", "Orange peel", "Smooth Level 5", "Skip trowel", "Sand texture", "Custom textures"],
  },
  {
    icon: Grid3X3,
    title: "Drywall Replacement",
    description: "When repair isn't enough, we provide complete drywall replacement with proper installation and finishing.",
    features: ["Panel replacement", "Section replacement", "Proper installation", "Taping & mudding", "Texture application", "Paint-ready surface"],
  },
  {
    icon: Hammer,
    title: "Patch and Finish",
    description: "Professional patching with expert finishing for a flawless result. Every repair is completed to the highest standard.",
    features: ["Expert patching", "Multi-coat finishing", "Smooth blending", "Texture matching", "Quality materials", "Dust-free cleanup"],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <div className="section-badge mb-6">
                <CircleDot className="w-4 h-4" />
                <span>Our Expertise</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
                Professional Services
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive drywall solutions tailored to your specific needs. Every project is executed with precision, care, and attention to detail.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 60}>
                <div className="feature-card p-8 card-hover">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="icon-box w-16 h-16">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="check-item">
                            <CheckCircle2 className="check-icon" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground mb-8">
                Every project is unique. Contact us to discuss your specific requirements and get a detailed quote.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-primary/90 btn-glow group"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-secondary/80 border border-border"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
