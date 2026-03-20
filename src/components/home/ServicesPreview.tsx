import { Link } from "react-router-dom";
import { Hammer, Droplets, Square, Layers, CircleDot, Home, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: Square,
    title: "Hole & Crack Repair",
    description: "Expert repair of holes, cracks, and damage with invisible finishing techniques. We handle everything from small nail holes to large structural damage.",
    features: ["Small to large hole repair", "Crack stabilization & filling", "Seamless texture matching", "Structural integrity assessment"],
  },
  {
    icon: Layers,
    title: "Texture Matching",
    description: "Precise texture replication to match any existing wall finish. Our craftsmen can replicate even the most complex wall textures perfectly.",
    features: ["Knockdown texture", "Smooth Level 5 finish", "Orange peel finish", "Custom texture application"],
  },
  {
    icon: Droplets,
    title: "Water Damage Repair",
    description: "Complete restoration of water-damaged drywall. We assess damage extent and restore walls to their original condition.",
    features: ["Damage assessment", "Mold prevention", "Complete restoration", "Surface preparation"],
  },
  {
    icon: Home,
    title: "Ceiling Repair",
    description: "Professional ceiling drywall repair including smooth ceiling restoration.",
    features: ["Smooth ceiling finish", "Crack repair", "Water stain removal", "Sagging repair"],
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20">
      <div className="container">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-badge mb-6">
              <CircleDot className="w-4 h-4" />
              <span>Our Expertise</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Professional Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive drywall solutions tailored to your specific needs. Every project is executed with precision, care, and attention to detail.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="feature-card p-8 card-hover h-full">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="icon-box">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

        {/* CTA */}
        <FadeIn>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesPreview;
