import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-luxury-lobby.jpg";
import luxuryBar from "@/assets/luxury-bar.jpg";
import luxuryWedding from "@/assets/luxury-wedding.jpg";
import luxuryRestaurant from "@/assets/luxury-restaurant.jpg";

const Home = () => {
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-primary">Transforming</span>
              <br />
              <span className="text-foreground">Interiors,</span>
              <br />
              <span className="text-gradient-gold">Elevating Events</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Luxury styling and event planning studio dedicated to creating bespoke experiences 
              that reflect your vision and lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-luxury text-lg px-8 py-4">
                  Start Your Journey
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button className="btn-outline-luxury text-lg px-8 py-4">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gold/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-gold/30 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <stat.icon className="text-primary" size={32} />
                </div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient-primary">Premium</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we deliver bespoke experiences 
              that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-luxury group hover-lift overflow-hidden">
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
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
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="btn-gold text-lg px-8 py-4">
                Explore All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient-gold">AS Luxe</span>?
            </h2>
          </div>

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
              <div key={index} className="card-glass text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-primary">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto card-luxury">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="text-gradient-primary">Vision</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something extraordinary together. Contact us today for a consultation 
              and discover how we can bring your dream event or interior to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-luxury text-lg px-8 py-4">
                  Get Your Free Quote
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button className="btn-outline-luxury text-lg px-8 py-4">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;