import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sparkles, Calendar, Home, Wine, MapPin } from "lucide-react";
import luxuryBar from "@/assets/luxury-bar.jpg";
import luxuryWedding from "@/assets/luxury-wedding.jpg";
import luxuryRestaurant from "@/assets/luxury-restaurant.jpg";
import luxuryFestival from "@/assets/luxury-festival.jpg";
import luxuryOffice from "@/assets/luxury-office.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Calendar,
      title: "Customized Interior & Event Planning & Management",
      description: "Full-service planning and coordination for private, corporate, and luxury events — from concept to flawless execution.",
      image: luxuryWedding,
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
      image: luxuryFestival,
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
      image: luxuryOffice,
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
      image: luxuryRestaurant,
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
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
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
              <Button className="btn-luxury">
                Get Your Custom Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {mainServices.map((service, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                        <service.icon className="text-primary-foreground" size={24} />
                      </div>
                      <h2 className="text-3xl font-bold text-gradient-primary">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="text-primary mr-3 flex-shrink-0" size={18} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact">
                      <Button className="btn-outline-luxury">
                        Learn More
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="rounded-2xl shadow-luxury w-full hover-lift"
                      />
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-gold rounded-full blur-xl opacity-30"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient-gold">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We follow a proven methodology to ensure every project exceeds expectations 
                and delivers exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="card-glass text-center hover-lift relative">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-gradient-primary mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
                  )}
                </Card>
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