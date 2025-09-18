import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-luxury-lobby.jpg";
import luxuryBar from "@/assets/luxury-bar.jpg";
import luxuryWedding from "@/assets/luxury-wedding.jpg";
import luxuryRestaurant from "@/assets/luxury-restaurant.jpg";

const Home = () => {
  useScrollAnimation();
  const services = [
    {
      title: "Interior & Event Planning",
      description: "Full-service planning and coordination for private, corporate, and luxury events — from concept to flawless execution.",
      image: luxuryWedding,
      features: ["Concept Development", "Project Management", "Vendor Coordination", "On-site Execution"]
    },
    {
      title: "Bar Design",
      description: "Bespoke bar setups designed to impress — whether mobile or fixed, for events, homes, or commercial spaces.",
      image: luxuryBar,
      features: ["Custom Design", "Premium Materials", "Mobile Solutions", "Commercial Spaces"]
    },
    {
      title: "Luxury Lifestyle",
      description: "Curated decor services that reflect refined taste and upscale living — ideal for clients seeking luxury in everyday life.",
      image: luxuryRestaurant,
      features: ["Refined Taste", "Upscale Living", "Curated Decor", "Personal Style"]
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Calendar, number: "1000+", label: "Events Completed" },
    { icon: Star, number: "5.0", label: "Average Rating" },
    { icon: Sparkles, number: "10+", label: "Years Experience" }
  ];

  return (
    <>
      {/* Enhanced Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-element"
          data-speed="0.5"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <AnimatedSection animation="fade" className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <AnimatedSection animation="slide-left" delay={200}>
                <span className="text-gradient-primary block">Transforming</span>
              </AnimatedSection>
              <AnimatedSection animation="fade" delay={400}>
                <span className="text-foreground block -mt-2">Interiors,</span>
              </AnimatedSection>
              <AnimatedSection animation="slide-right" delay={600}>
                <span className="text-gradient-gold block -mt-2">Elevating Events</span>
              </AnimatedSection>
            </h1>
            
            <AnimatedSection animation="fade" delay={800}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Luxury styling and event planning studio dedicated to creating bespoke experiences 
                that reflect your vision and lifestyle.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="scale" delay={1000}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button className="btn-luxury text-lg px-8 py-4 hover-tilt">
                    Start Your Journey
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button className="btn-outline-luxury text-lg px-8 py-4 hover-tilt">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>

        {/* Enhanced Floating Elements with 3D Motion */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float parallax-element" data-speed="0.3" style={{ animation: 'float 6s ease-in-out infinite, morphing 8s ease-in-out infinite' }}></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-float parallax-element" data-speed="0.2" style={{ animationDelay: "2s", animation: 'float 6s ease-in-out infinite 2s, morphing 10s ease-in-out infinite 1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-gold/30 rounded-full blur-xl animate-float parallax-element" data-speed="0.4" style={{ animationDelay: "4s", animation: 'levitate 8s ease-in-out infinite 4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-primary-glow/15 rounded-full blur-2xl animate-float parallax-element" data-speed="0.1" style={{ animation: 'pulse3d 4s ease-in-out infinite' }}></div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-gold/5"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 200} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-all duration-500 hover-tilt">
                  <stat.icon className="text-primary" size={32} />
                </div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="fade" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient-primary">Premium</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we deliver bespoke experiences 
              that exceed expectations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 150}>
                <Card className="card-floating group hover-tilt overflow-hidden">
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <CardContent className="p-6 relative">
                    <h3 className="text-2xl font-bold mb-3 text-gradient-primary">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Star className="text-primary mr-2" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade" delay={600} className="text-center mt-12">
            <Link to="/services">
              <Button className="btn-gold text-lg px-8 py-4 hover-tilt">
                Explore All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 bg-gradient-card relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="fade" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient-gold">AS Luxe</span>?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Tailored Design Concepts",
                description: "Every project is uniquely crafted to reflect your personal style and vision."
              },
              {
                title: "Meticulous Project Management",
                description: "From planning to execution, we handle every detail with precision and care."
              },
              {
                title: "Premium Materials & Styling",
                description: "We source only the finest materials and work with top-tier suppliers."
              },
              {
                title: "Exceptional Client Experience",
                description: "Your satisfaction is our priority, with personalized service every step of the way."
              }
            ].map((reason, index) => (
              <AnimatedSection key={index} animation="slide-left" delay={index * 200}>
                <div className="card-glass text-center hover-tilt group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{ animation: 'pulse3d 3s ease-in-out infinite' }}>
                    <span className="text-primary-foreground font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gradient-primary">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection animation="scale" className="max-w-3xl mx-auto card-floating">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient-primary">Vision</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something extraordinary together. Contact us today for a consultation 
              and discover how we can bring your dream event or interior to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-luxury text-lg px-8 py-4 hover-tilt">
                  Get Your Free Quote
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button className="btn-outline-luxury text-lg px-8 py-4 hover-tilt">
                  View Our Work
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Floating decoration elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float parallax-element" data-speed="0.2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-gold/30 rounded-full animate-float parallax-element" data-speed="0.3" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-3 h-3 bg-rose-gold/40 rounded-full animate-float parallax-element" data-speed="0.1" style={{ animationDelay: '4s' }}></div>
      </section>
    </>
  );
};

export default Home;