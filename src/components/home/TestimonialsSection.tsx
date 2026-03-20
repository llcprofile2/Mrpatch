import { Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";

/* 
  TESTIMONIALS
  To update reviews, edit the testimonials array below with real customer feedback.
  Each review needs: name, city, rating (1-5), and quote.
*/

const testimonials = [
  {
    name: "Sarah M.",
    city: "Salt Lake City, UT",
    rating: 5,
    quote: "Mark did an amazing job repairing the water damage in our bathroom ceiling. You can't even tell there was ever a problem. Highly recommend!",
  },
  {
    name: "David R.",
    city: "Sandy, UT",
    rating: 5,
    quote: "Professional, punctual, and the texture matching was perfect. Mr. Patch is the only drywall repair service I'll ever use again.",
  },
  {
    name: "Jennifer L.",
    city: "West Valley City, UT",
    rating: 5,
    quote: "We had several holes from old TV mounts and shelving. Mark repaired them all and matched our knockdown texture flawlessly. Great work!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground">
              Real reviews from Salt Lake City homeowners who trust Mr. Patch
            </p>
            <a
              href="https://g.page/mrpatch/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-primary hover:text-primary/80 transition-colors duration-300"
            >
              See more reviews on Google →
            </a>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 120}>
              <div className="feature-card p-6 card-hover h-full flex flex-col">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
