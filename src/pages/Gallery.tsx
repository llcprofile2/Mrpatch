import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { CircleDot, ArrowRight } from "lucide-react";

/*
  BEFORE & AFTER GALLERY
  
  Images are loaded from public/gallery/ folder with locked filenames.
  To update photos, replace the files in public/gallery/ with these exact names:
  - job1-before.jpg / job1-after.jpg
  - job2-before.jpg / job2-after.jpg
  - job3-before.jpg / job3-after.jpg
  - job4-before.jpg / job4-after.jpg
  
  Image recommendations:
  - Aspect ratio: 4:3 or 16:9
  - Min resolution: 800x600
  - Format: JPG
*/

const jobs = [
  {
    id: 1,
    title: "Ceiling Plumbing Access Repair",
    location: "Salt Lake City, UT",
    description: "Complete ceiling restoration after plumbing access, including drywall replacement and texture matching.",
    beforeImage: "/gallery/job1-before.jpg",
    afterImage: "/gallery/job1-after.jpg",
  },
  {
    id: 2,
    title: "Ceiling Beam Repair",
    location: "Sandy, UT",
    description: "Structural ceiling repair around beam area with seamless drywall finish.",
    beforeImage: "/gallery/job2-before.jpg",
    afterImage: "/gallery/job2-after.jpg",
  },
  {
    id: 3,
    title: "Wall Surface Restoration",
    location: "West Valley City, UT",
    description: "Full wall repair and smooth finish restoration after damage.",
    beforeImage: "/gallery/job3-before.jpg",
    afterImage: "/gallery/job3-after.jpg",
  },
  {
    id: 4,
    title: "Drywall Replacement",
    location: "Murray, UT",
    description: "Complete lower wall drywall replacement with professional finish.",
    beforeImage: "/gallery/job4-before.jpg",
    afterImage: "/gallery/job4-after.jpg",
  },
];

const GalleryPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <div className="section-badge mb-6">
                <CircleDot className="w-4 h-4" />
                <span>Our Work</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-6">
                Before & After Gallery
              </h1>
              <p className="text-lg text-muted-foreground">
                See the quality of our work through real project transformations. Every repair demonstrates our commitment to excellence and precision.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <FadeIn key={job.id} delay={index * 100}>
                <div className="feature-card p-0 overflow-hidden card-hover">
                  {/* Images */}
                  <div className="grid grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={job.beforeImage}
                        alt={`${job.title} - Before`}
                        className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <span className="badge-before absolute top-4 left-4">BEFORE</span>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={job.afterImage}
                        alt={`${job.title} - After`}
                        className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <span className="badge-after absolute top-4 right-4">AFTER</span>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">Residential</span>
                      <span className="text-xs text-muted-foreground">{job.location}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {job.description}
                    </p>
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
                Ready to Transform Your Walls?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let us bring the same quality and precision to your drywall repair project.
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-primary/90 btn-glow group"
              >
                Schedule Your Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
