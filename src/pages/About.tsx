import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { CircleDot, Clock, Award, UserCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <div className="section-badge mb-6">
                <CircleDot className="w-4 h-4" />
                <span>About Us</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
                Meet Mark, Your Local Drywall Expert
              </h1>
              <p className="text-lg text-muted-foreground">
                Over 27 years of dedicated service to Salt Lake City homeowners
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: Clock, value: "27+", label: "Years in Business" },
                { icon: Award, value: "5,000+", label: "Jobs Completed" },
                { icon: UserCheck, value: "100%", label: "Owner-Operated" },
              ].map((stat, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="feature-card text-center p-8 card-hover group">
                    <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Main About Section */}
            <FadeIn>
              <div className="feature-card p-8 md:p-12">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  A Legacy of Quality Craftsmanship
                </h2>
                
                <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My name is Mark Morrison, and I've been repairing drywall for Salt Lake City homeowners since 1997. What started as a passion for precision craftsmanship has grown into a trusted local business with over 5,000 completed residential drywall repairs.
                  </p>
                  
                  <p>
                    As a one-man operation, I take personal pride in every project I complete. When you hire Mr. Patch, you're not getting a random subcontractor—you're getting me, directly. This means consistent quality, clear communication, and the kind of attention to detail that only comes from someone who truly cares about their craft.
                  </p>
                  
                  <p>
                    Over nearly three decades, I've seen every type of drywall damage imaginable. From small nail holes to major water damage, from simple patches to complex texture matching, I've developed the skills and expertise to handle any residential drywall repair challenge. My goal on every job is simple: to make the repair invisible, as if the damage never happened.
                  </p>
                  
                  <p>
                    I believe in honest communication with my customers. I'll always give you a straightforward assessment of what needs to be done and a fair quote for the work. No upselling, no hidden fees, no surprises. Just quality workmanship you can rely on.
                  </p>
                  
                  <p>
                    Living and working in the Salt Lake City area, I understand the unique needs of homes in our community. Whether you're in Salt Lake City proper, Sandy, West Valley City, Murray, or the surrounding areas, I'm here to help restore your walls to their original condition.
                  </p>
                </div>

                {/* What Sets Us Apart */}
                <div className="mt-10 pt-10 border-t border-border">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                    What Sets Mr. Patch Apart
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Owner handles every project personally",
                      "27+ years of hands-on experience",
                      "Over 5,000 successful repairs",
                      "Expert texture matching skills",
                      "Clean, dust-controlled work",
                      "Honest, upfront pricing",
                      "Punctual and reliable service",
                      "Deep knowledge of local homes",
                    ].map((item, index) => (
                      <div key={index} className="check-item">
                        <CheckCircle2 className="check-icon" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
                Let's Discuss Your Project
              </h2>
              <p className="text-muted-foreground mb-8">
                I'd love to hear about your drywall repair needs. Schedule a free consultation and let's get your walls looking perfect again.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-primary/90 btn-glow group"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-secondary/80 border border-border"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
