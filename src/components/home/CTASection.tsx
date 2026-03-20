import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-10 md:p-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground mb-8">
                Every project is unique. Contact us to discuss your specific requirements and get a detailed quote for your residential drywall repair needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base transition-all duration-300 hover:bg-primary/90 btn-glow group"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold text-base transition-all duration-300 hover:bg-secondary/80 border border-border"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
