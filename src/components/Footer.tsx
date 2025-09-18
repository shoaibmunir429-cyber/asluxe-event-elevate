import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import asLogo from "@/assets/as-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={asLogo} 
                alt="AS Luxe Interiors & Events" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold text-gradient-primary">
                  AS Luxe Interiors & Events
                </h3>
                <p className="text-sm text-muted-foreground">
                  Transforming Interiors, Elevating Events
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A luxury styling and event planning studio dedicated to transforming interiors 
              and elevating events with elegance and creativity. From curated décor to 
              full-scale event production, we deliver bespoke experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/asluxeinteriorsandevent_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Brisbane, Australia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a 
                  href="tel:+61406853553" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  +61 406 853 553
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a 
                  href="mailto:shoaibmunir429@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  shoaibmunir429@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram size={18} className="text-primary flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/asluxeinteriorsandevent_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  @asluxeinteriorsandevent_
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} AS Luxe Interiors & Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};