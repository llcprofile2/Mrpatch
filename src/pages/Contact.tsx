import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { CircleDot, Phone, Mail, MapPin, Clock, Send, Upload } from "lucide-react";

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(searchParams.get('submitted') === 'true');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <div className="section-badge mb-6">
                <CircleDot className="w-4 h-4" />
                <span>Get in Touch</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions? Need a quote? Reach out and we'll respond promptly.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <FadeIn delay={0}>
              <div className="feature-card p-8 h-full">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="icon-box flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+18019536789" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        (801) 953-6789
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Call or text for fastest response</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="icon-box flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:llcprofile2bio@outlook.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        llcprofile2bio@outlook.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-4 group">
                    <div className="icon-box flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                      <p className="text-muted-foreground">Salt Lake City & Surrounding Areas</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Including Sandy, West Valley City, Murray, Taylorsville, South Jordan, and more
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 group">
                    <div className="icon-box flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={100}>
              <div className="feature-card p-8 h-full">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                  Quick Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="icon-box mx-auto mb-4 w-16 h-16">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    action="https://formsubmit.co/llcprofile2bio@outlook.com"
                    method="POST"
                    onSubmit={() => {
                      setIsSubmitting(true);
                    }}
                    className="space-y-6"
                  >
                    {/* FormSubmit configuration */}
                    <input type="hidden" name="_subject" value="New contact from Mr. Patch website" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value={`${window.location.origin}/contact?submitted=true`} />
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="input-field"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input-field"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="input-field"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="input-field resize-none"
                        placeholder="Tell us about your drywall repair needs..."
                      />
                    </div>

                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      <span>Photos can be sent via text or email after initial contact</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-primary/90 btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    <p className="text-xs text-center text-muted-foreground">
                      For immediate service, please call us directly
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <FadeIn>
            <div className="feature-card p-8 md:p-12">
              <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
                Why Choose Mr. Patch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Licensed & Insured", desc: "Fully licensed contractors with comprehensive insurance coverage" },
                  { title: "Since 1997", desc: "Over 27 years of experience serving Salt Lake City homeowners" },
                  { title: "Premium Materials", desc: "We use only the highest quality materials and compounds" },
                  { title: "Clean & Efficient", desc: "Advanced dust containment and meticulous cleanup" },
                  { title: "On-Time Service", desc: "We respect your schedule and complete all projects as promised" },
                  { title: "Expert Craftsmen", desc: "Owner-operated with decades of hands-on experience" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
