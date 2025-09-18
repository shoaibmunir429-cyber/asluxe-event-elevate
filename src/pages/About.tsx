import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Award, Users, Target } from "lucide-react";
import luxuryOffice from "@/assets/luxury-office.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "We pour our heart into every project, ensuring each detail reflects our commitment to excellence."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest materials and most skilled artisans meet our standards of luxury and quality."
    },
    {
      icon: Users,
      title: "Client-Centered Approach",
      description: "Your vision is our priority. We listen, understand, and deliver beyond expectations."
    },
    {
      icon: Target,
      title: "Precision & Detail",
      description: "Every element is carefully considered and perfectly placed to create harmonious, stunning results."
    }
  ];

  return (
    <>
      {/* Page Header with SEO */}
      <div className="pt-24">
        <title>About AS Luxe Interiors & Events | Premium Interior Design & Event Planning Brisbane</title>
        <meta name="description" content="Learn about AS Luxe Interiors & Events, Brisbane's premier luxury interior design and event planning studio. Discover our passion for creating bespoke experiences." />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  About <span className="text-gradient-primary">AS Luxe</span>
                  <br />
                  <span className="text-gradient-gold">Interiors & Events</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  A luxury styling and event planning studio dedicated to transforming interiors 
                  and elevating events with elegance and creativity.
                </p>
                <Link to="/contact">
                  <Button className="btn-luxury">
                    Work With Us
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
              <div className="animate-slide-in-right">
                <div className="relative">
                  <img 
                    src={luxuryOffice} 
                    alt="Luxury interior design by AS Luxe"
                    className="rounded-2xl shadow-luxury w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-full blur-2xl opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our <span className="text-gradient-primary">Story</span>
              </h2>
              <div className="card-luxury text-left">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  AS Luxe Interiors & Events was born from a passion for creating extraordinary experiences 
                  that leave lasting impressions. Our journey began with a simple belief: every space tells 
                  a story, and every event should be a celebration of life's most precious moments.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From curated décor and seasonal styling to full-scale event production and destination 
                  setups, we deliver bespoke experiences that reflect your vision and lifestyle. Our team 
                  combines creative flair with meticulous attention to detail, ensuring every project 
                  exceeds expectations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether we're transforming a corporate space, designing a luxury bar, or orchestrating 
                  a destination wedding, our commitment remains the same: to bring sophistication, style, 
                  and seamless execution to every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient-gold">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do and shape every experience we create.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-glass text-center hover-lift">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                      <value.icon className="text-primary-foreground" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gradient-primary">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient-primary">AS Luxe</span>?
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gradient-primary">Tailored Design Concepts</h3>
                      <p className="text-muted-foreground">Every project is uniquely crafted to reflect your personal style, preferences, and vision. We don't do cookie-cutter solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gradient-primary">Meticulous Project Management</h3>
                      <p className="text-muted-foreground">From initial concept to final execution, we handle every detail with precision, ensuring your project stays on time and on budget.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gradient-primary">Premium Materials & Styling</h3>
                      <p className="text-muted-foreground">We source only the finest materials and work with top-tier suppliers to ensure every element meets our luxury standards.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gradient-primary">Creative, Trend-Forward Solutions</h3>
                      <p className="text-muted-foreground">Our designs blend timeless elegance with contemporary trends, creating spaces and events that feel both current and enduring.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gradient-primary">Exceptional Client Experience</h3>
                      <p className="text-muted-foreground">Your satisfaction is our priority. We provide personalized service, clear communication, and support throughout the entire process.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-luxury">
                <h3 className="text-2xl font-bold mb-6 text-gradient-gold">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-8">
                  Let's discuss your vision and create something extraordinary together. 
                  Contact us today for a consultation.
                </p>
                <div className="space-y-4">
                  <Link to="/contact" className="block">
                    <Button className="btn-luxury w-full">
                      Get Your Free Consultation
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <Link to="/gallery" className="block">
                    <Button className="btn-outline-luxury w-full">
                      View Our Portfolio
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

export default About;