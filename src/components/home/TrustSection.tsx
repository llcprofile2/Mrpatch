import { Shield, Clock, UserCheck, Award, Sparkles, Home } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const trustPoints = [
  {
    icon: Clock,
    title: "Since 1997",
    description: "Serving Salt Lake City homeowners for over 27 years with trusted, reliable service.",
  },
  {
    icon: Award,
    title: "5,000+ Jobs",
    description: "Over five thousand completed residential drywall repairs with proven results.",
  },
  {
    icon: UserCheck,
    title: "Owner-Operated",
    description: "Mark handles every project personally. No subcontractors, no middlemen.",
  },
  {
    icon: Sparkles,
    title: "Precision Work",
    description: "Clean, precise repairs with meticulous attention to detail on every job.",
  },
  {
    icon: Home,
    title: "Local Service",
    description: "Proudly serving Salt Lake City and surrounding communities.",
  },
  {
    icon: Shield,
    title: "Trusted Expert",
    description: "Decades of hands-on experience you can rely on for quality workmanship.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Why Choose Mr. Patch
            </h2>
            <p className="text-muted-foreground">
              Professional service backed by experience, quality, and commitment to excellence
            </p>
          </div>
        </FadeIn>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <FadeIn key={index} delay={index * 80}>
              <div className="feature-card group cursor-default">
                <div className="icon-box mb-4 group-hover:scale-110 transition-transform duration-500">
                  <point.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
