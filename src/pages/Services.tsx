import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sparkles, Calendar, Home, Wine, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import servicesCorporateOffice from "@/assets/services-corporate-office.jpg";
import servicesFineDining from "@/assets/services-fine-dining.jpg";
import servicesOutdoorEvents from "@/assets/services-outdoor-events.jpg";
import servicesLuxuryResidential from "@/assets/services-luxury-residential.jpg";
import luxuryBar from "@/assets/luxury-bar.jpg";

const Services = () => {
  useScrollAnimation();
  const mainServices = [
    {
      icon: Calendar,
      title: "Customized Interior & Event Planning & Management",
      description: "Full-service planning and coordination for private, corporate, and luxury events — from concept to flawless execution.",
      image: servicesCorporateOffice,
      features: [
        "Concept development and design",
        "Comprehensive project management",
        "Vendor coordination and management",
        "Timeline creation and execution",
        "On-site coordination and support",
        "Post-event follow-up and evaluation"
      ]
    },
    {
      icon: Sparkles,
      title: "Seasonal & Festive Styling",
      description: "Custom decor for holidays and special occasions, bringing warmth, elegance, and celebration into your space.",
      image: servicesOutdoorEvents,
      features: [
        "Holiday and seasonal decoration",
        "Custom festive themes",
        "Corporate seasonal styling",
        "Residential holiday decor",
        "Event-specific styling",
        "Installation and removal services"
      ]
    },
    {
      icon: Wine,
      title: "Bar Design",
      description: "Bespoke bar setups designed to impress — whether mobile or fixed, for events, homes, or commercial spaces.",
      image: luxuryBar,
      features: [
        "Custom bar design and build",
        "Mobile bar solutions",
        "Commercial bar installations",
        "Home bar styling",
        "Premium equipment sourcing",
        "Staff training and support"
      ]
    },
    {
      icon: Home,
      title: "Luxury Lifestyle",
      description: "Curated decor services that reflect refined taste and upscale living — ideal for clients seeking a touch of luxury in everyday life.",
      image: servicesLuxuryResidential,
      features: [
        "Residential interior styling",
        "Luxury home staging",
        "Personal shopping services",
        "Art and accessory curation",
        "Color consultation",
        "Space optimization"
      ]
    },
    {
      icon: MapPin,
      title: "Destination Event Planning & Setup",
      description: "Expert planning and styling for events held outside your city or country — with seamless logistics and on-site execution.",
      image: servicesFineDining,
      features: [
        "International event coordination",
        "Destination wedding planning",
        "Travel and accommodation management",
        "Local vendor partnerships",
        "Cultural considerations",
        "Comprehensive logistics support"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We begin with an in-depth consultation to understand your vision, preferences, and requirements."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our team creates a detailed concept and design proposal tailored to your specific needs and style."
    },
    {
      step: "03",
      title: "Planning & Coordination",
      description: "We handle all aspects of planning, from vendor selection to timeline management and logistics coordination."
    },
    {
      step: "04",
      title: "Execution",
      description: "Our experienced team brings your vision to life with meticulous attention to detail and flawless execution."
    },
    {
      step: "05",
      title: "Follow-up",
      description: "We ensure your complete satisfaction and provide ongoing support as needed for future projects."
    }
  ];

  return (
    <>
      <div className="pt-24">
        <title>Premium Interior Design & Event Planning Services | AS Luxe Brisbane</title>
        <meta name="description" content="Explore AS Luxe's comprehensive luxury interior design and event planning services in Brisbane. From bar design to destination events, we create bespoke experiences." />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <AnimatedSection animation="fade">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-gradient-primary">Premium</span>
                <br />
                <span className="text-gradient-gold">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From intimate gatherings to grand celebrations, commercial spaces to luxury homes, 
                we offer comprehensive design and event solutions tailored to your unique vision.
              </p>
              <Link to="/contact">
                <Button className="btn-luxury hover-tilt">
                  Get Your Custom Quote
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="space-y-16">
              {mainServices.map((service, index) => (
                <AnimatedSection key={index} animation="fade" delay={index * 200}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <AnimatedSection animation="slide-left" delay={(index * 200) + 100}>
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 animate-glow">
                            <service.icon className="text-primary-foreground" size={24} />
                          </div>
                          <h2 className="text-3xl font-bold text-gradient-primary">{service.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                          {service.features.map((feature, idx) => (
                            <AnimatedSection key={idx} animation="fade" delay={(index * 200) + 200 + (idx * 100)}>
                              <div className="flex items-center">
                                <CheckCircle className="text-primary mr-3 flex-shrink-0" size={18} />
                                <span className="text-sm">{feature}</span>
                              </div>
                            </AnimatedSection>
                          ))}
                        </div>
                        <Link to="/contact">
                          <Button className="btn-outline-luxury hover-tilt">
                            Learn More
                            <ArrowRight className="ml-2" size={18} />
                          </Button>
                        </Link>
                      </AnimatedSection>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <AnimatedSection animation="slide-right" delay={(index * 200) + 150}>
                        <div className="relative group hover-tilt">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="rounded-2xl shadow-luxury w-full group-hover:scale-[1.02] transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-gold rounded-full blur-xl opacity-30 animate-glow"></div>
                          <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-primary rounded-full blur-lg opacity-20 animate-float"></div>
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-card relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <AnimatedSection animation="fade" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient-gold">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We follow a proven methodology to ensure every project exceeds expectations 
                and delivers exceptional results.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={index} animation="scale" delay={index * 150}>
                  <Card className="card-glass text-center hover-tilt relative group">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-gradient-primary mb-4 group-hover:scale-110 transition-transform duration-300">{step.step}</div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2 animate-pulse"></div>
                    )}
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who We <span className="text-gradient-primary">Serve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our expertise spans across various industries and client types throughout Australia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Hotels & Hospitality", description: "Luxury accommodations and guest experiences" },
                { title: "Bars & Restaurants", description: "Sophisticated dining and entertainment venues" },
                { title: "Festivals & Events", description: "Large-scale celebrations and cultural events" },
                { title: "Real Estate", description: "Property staging and investment showcases" },
                { title: "Corporate Offices", description: "Professional workspaces and meeting facilities" },
                { title: "Retail Spaces", description: "Commercial showrooms and customer experiences" },
                { title: "Educational Institutions", description: "Schools, universities, and learning environments" },
                { title: "Cultural Venues", description: "Galleries, museums, and artistic spaces" },
                { title: "Private Residences", description: "Luxury homes and personal spaces" }
              ].map((area, index) => (
                <Card key={index} className="card-luxury hover-lift text-center">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gradient-primary">{area.title}</h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Create Something <span className="text-gradient-gold">Extraordinary</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your project and discover how our expertise can bring your vision to life. 
                Contact us today for a personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="btn-luxury text-lg px-8 py-4">
                    Start Your Project
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button className="btn-outline-luxury text-lg px-8 py-4">
                    View Our Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;