import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="Mr. Patch" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
              <div>
                <p className="font-display text-lg font-semibold text-foreground">Mr. Patch</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Drywall Repair</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Salt Lake City's trusted residential drywall repair specialist since 1997. Over 5,000 jobs completed with precision and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Book Now", path: "/booking" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Drywall Hole Repair",
                "Crack Repair",
                "Water Damage Repair",
                "Ceiling Repair",
                "Texture Matching",
                "Drywall Replacement",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+18019536789" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>(801) 953-6789</span>
                </a>
              </li>
              <li>
                <a href="mailto:llcprofile2bio@outlook.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>llcprofile2bio@outlook.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Salt Lake City, Utah<br />& Surrounding Areas</span>
                </div>
              </li>
              <li>
                <a href="https://instagram.com/mrpatchslc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group">
                  <Instagram className="w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span>@mrpatchslc</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Mr. Patch Drywall Repair. All rights reserved.</p>
            <p>Serving Salt Lake City homeowners since 1997</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
