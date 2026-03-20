import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { CircleDot, Calendar, CheckCircle2, ArrowRight, Phone, Clock, ClipboardList } from "lucide-react";

const BookingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <div className="section-badge mb-6">
                <Calendar className="w-4 h-4" />
                <span>Free Consultation</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
                Schedule Your Appointment
              </h1>
              <p className="text-lg text-muted-foreground">
                Get a complimentary in-home assessment and detailed quote. Our expert craftsman will evaluate your project and provide professional recommendations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pre-Booking Info */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What to Expect */}
              <FadeIn delay={0}>
                <div className="feature-card p-8 h-full">
                  <div className="icon-box mb-6">
                    <ClipboardList className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                    What to Expect
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    During your free consultation, Mark will:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Assess the extent of drywall damage",
                      "Identify the best repair approach",
                      "Determine texture matching requirements",
                      "Provide a detailed written quote",
                      "Answer all your questions",
                      "Schedule the repair at your convenience",
                    ].map((item, index) => (
                      <li key={index} className="check-item">
                        <CheckCircle2 className="check-icon" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* How to Prepare */}
              <FadeIn delay={100}>
                <div className="feature-card p-8 h-full">
                  <div className="icon-box mb-6">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                    How to Prepare
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    To make the most of your consultation:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Clear the area around the damage if possible",
                      "Note when the damage occurred (if known)",
                      "Have photos ready if damage is hard to access",
                      "List any questions you want to ask",
                      "Be available for a 15-30 minute assessment",
                      "Know your preferred repair timeline",
                    ].map((item, index) => (
                      <li key={index} className="check-item">
                        <CheckCircle2 className="check-icon" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Service Area Note */}
            <FadeIn>
              <div className="mt-8 p-6 bg-secondary/50 rounded-xl border border-border text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Service Area:</strong> Salt Lake City, Sandy, West Valley City, Murray, Taylorsville, South Jordan, Draper, and surrounding Utah communities.
                </p>
              </div>
            </FadeIn>

            {/* CTA Card */}
            <FadeIn>
              <div className="mt-12 feature-card p-8 md:p-12 text-center">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Click below to choose a date and time that works for your schedule. Consultations typically take 15-30 minutes.
                </p>

                <a
                  href="https://calendly.com/llcprofile2bio/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-primary/90 btn-glow group"
                >
                  <Calendar className="w-6 h-6" />
                  Start Consultation Booking
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <p className="mt-6 text-sm text-muted-foreground">
                  Or call directly:{" "}
                  <a href="tel:+18019536789" className="text-primary hover:underline transition-colors duration-300">
                    (801) 953-6789
                  </a>
                </p>
              </div>
            </FadeIn>

            {/* Process Steps */}
            <div className="mt-16">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-10">
                  Our Simple Process
                </h2>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    step: "1",
                    title: "Schedule",
                    desc: "Book your free consultation at a time that works for you",
                  },
                  {
                    step: "2",
                    title: "Assess",
                    desc: "Mark visits your home to evaluate the drywall damage",
                  },
                  {
                    step: "3",
                    title: "Repair",
                    desc: "Professional repair completed with precision and care",
                  },
                ].map((item, index) => (
                  <FadeIn key={index} delay={index * 120}>
                    <div className="feature-card p-6 text-center card-hover group">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
