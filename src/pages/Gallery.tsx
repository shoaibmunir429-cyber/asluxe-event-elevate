import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import luxuryBar from "@/assets/luxury-bar.jpg";
import luxuryWedding from "@/assets/luxury-wedding.jpg";
import luxuryRestaurant from "@/assets/luxury-restaurant.jpg";
import luxuryFestival from "@/assets/luxury-festival.jpg";
import luxuryOffice from "@/assets/luxury-office.jpg";
import heroImage from "@/assets/hero-luxury-lobby.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "events", name: "Events" },
    { id: "interiors", name: "Interiors" },
    { id: "bars", name: "Bar Design" },
    { id: "weddings", name: "Weddings" },
    { id: "corporate", name: "Corporate" },
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Hotel Lobby",
      category: "interiors",
      description: "Modern luxury hotel lobby with dramatic lighting and sophisticated design elements.",
      image: heroImage,
      tags: ["Hotel", "Luxury", "Modern", "Lighting"]
    },
    {
      id: 2,
      title: "Sophisticated Bar Design",
      category: "bars",
      description: "Contemporary bar with premium materials and elegant ambient lighting.",
      image: luxuryBar,
      tags: ["Bar", "Contemporary", "Premium", "Lighting"]
    },
    {
      id: 3,
      title: "Elegant Wedding Venue",
      category: "weddings",
      description: "Romantic wedding setup with beautiful floral arrangements and luxury decor.",
      image: luxuryWedding,
      tags: ["Wedding", "Romantic", "Floral", "Luxury"]
    },
    {
      id: 4,
      title: "Fine Dining Restaurant",
      category: "interiors",
      description: "Upscale restaurant interior with sophisticated design and premium furnishings.",
      image: luxuryRestaurant,
      tags: ["Restaurant", "Fine Dining", "Sophisticated", "Interior"]
    },
    {
      id: 5,
      title: "Festival Event Setup",
      category: "events",
      description: "Large-scale festival with professional staging and elegant outdoor decor.",
      image: luxuryFestival,
      tags: ["Festival", "Outdoor", "Staging", "Event"]
    },
    {
      id: 6,
      title: "Executive Office Design",
      category: "corporate",
      description: "Modern executive office with luxury furnishings and professional aesthetics.",
      image: luxuryOffice,
      tags: ["Office", "Executive", "Modern", "Professional"]
    },
    {
      id: 7,
      title: "Corporate Event Space",
      category: "corporate",
      description: "Sophisticated corporate event venue with premium staging and lighting.",
      image: luxuryBar,
      tags: ["Corporate", "Event Space", "Premium", "Professional"]
    },
    {
      id: 8,
      title: "Luxury Wedding Reception",
      category: "weddings",
      description: "Opulent wedding reception with gold accents and romantic lighting.",
      image: luxuryRestaurant,
      tags: ["Wedding", "Reception", "Luxury", "Gold Accents"]
    },
    {
      id: 9,
      title: "Boutique Hotel Bar",
      category: "bars",
      description: "Intimate boutique hotel bar with sophisticated design and premium finishes.",
      image: luxuryOffice,
      tags: ["Hotel Bar", "Boutique", "Intimate", "Premium"]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <div className="pt-24">
        <title>Portfolio Gallery | AS Luxe Interiors & Events Brisbane</title>
        <meta name="description" content="Explore our stunning portfolio of luxury interior designs and premium event setups. See why AS Luxe is Brisbane's premier design and event planning studio." />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient-primary">Portfolio</span>
              <br />
              <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our collection of luxury interiors, sophisticated events, and bespoke designs 
              that showcase our commitment to excellence and attention to detail.
            </p>
            <Link to="/contact">
              <Button className="btn-luxury">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-gradient-card">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-muted-foreground mr-4">
                <Filter size={18} className="mr-2" />
                Filter by:
              </div>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`${
                    activeFilter === category.id 
                      ? "btn-luxury" 
                      : "btn-outline-luxury"
                  } transition-all duration-300`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="card-luxury overflow-hidden group hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gradient-primary">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                      <Button className="btn-outline-luxury py-2 px-4 text-xs">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No projects found in this category. Please try a different filter.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Services CTA */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Love What You See?
                  <br />
                  <span className="text-gradient-primary">Let's Create Together</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Each project in our portfolio represents a unique vision brought to life through 
                  our expertise in luxury design and event planning. We'd love to create something 
                  equally stunning for you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    <span>Custom design concepts tailored to your vision</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    <span>Premium materials and luxury finishes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    <span>Comprehensive project management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    <span>Exceptional attention to detail</span>
                  </div>
                </div>
              </div>
              <div className="card-luxury text-center">
                <h3 className="text-2xl font-bold mb-4 text-gradient-gold">Ready to Start?</h3>
                <p className="text-muted-foreground mb-8">
                  Contact us today for a consultation and let's discuss how we can transform 
                  your space or event into something extraordinary.
                </p>
                <div className="space-y-4">
                  <Link to="/contact" className="block">
                    <Button className="btn-luxury w-full">
                      Get Your Free Quote
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <Link to="/services" className="block">
                    <Button className="btn-outline-luxury w-full">
                      View Our Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;