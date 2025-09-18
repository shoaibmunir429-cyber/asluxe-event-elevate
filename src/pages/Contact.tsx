import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Instagram, Clock, Calendar, Upload } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FAQ } from "@/components/FAQ";
import luxuryOffice from "@/assets/luxury-office.jpg";

const Contact = () => {
  const { toast } = useToast();
  useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting AS Luxe. We'll respond within 24 hours.",
      duration: 5000,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      projectType: "",
      budget: "",
      timeline: ""
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Brisbane, Australia", "Serving Australia Wide"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+61 406 853 553", "Available 9 AM - 6 PM AEST"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["shoaibmunir429@gmail.com", "Response within 24 hours"]
    },
    {
      icon: Instagram,
      title: "Social Media",
      details: ["@asluxeinteriorsandevent_", "Follow for latest updates"]
    }
  ];

  const services = [
    "Interior & Event Planning",
    "Bar Design",
    "Wedding Planning",
    "Corporate Events",
    "Seasonal Styling",
    "Destination Events",
    "Luxury Lifestyle",
    "Other"
  ];

  return (
    <>
      <div className="pt-24">
        <title>Contact AS Luxe Interiors & Events | Get Your Free Quote Brisbane</title>
        <meta name="description" content="Contact AS Luxe Interiors & Events for luxury interior design and premium event planning in Brisbane. Get your free consultation and quote today." />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Create Something
              <br />
              <span className="text-gradient-primary">Extraordinary</span>
              <br />
              <span className="text-gradient-gold">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your vision into reality? Contact our expert team for a 
              personalized consultation and discover how we can elevate your next project.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-gradient-primary">Get Your Free Quote</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a 
                    personalized proposal for your project.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-12 bg-background/50 border-border/50 focus:border-primary"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-12 bg-background/50 border-border/50 focus:border-primary"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-12 bg-background/50 border-border/50 focus:border-primary"
                        placeholder="+61 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectType" className="text-sm font-medium mb-2 block">
                        Project Type *
                      </Label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="h-12 w-full px-3 bg-background/50 border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="budget" className="text-sm font-medium mb-2 block">
                        Budget Range
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="h-12 w-full px-3 bg-background/50 border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timeline" className="text-sm font-medium mb-2 block">
                        Timeline
                      </Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="h-12 w-full px-3 bg-background/50 border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="over-year">Over a year</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                      placeholder="Tell us about your project, vision, and any specific requirements..."
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button
                      type="button"
                      className="btn-outline-luxury flex-1"
                    >
                      <Upload className="mr-2" size={18} />
                      Upload Files
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      Optional: Images, plans, inspiration
                    </span>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury w-full h-14 text-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message & Get Quote"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and 
                    consent to be contacted about your project.
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-gradient-gold">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    We're here to help bring your vision to life. Reach out through any 
                    of these channels and let's start the conversation.
                  </p>
                </div>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-glass hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <info.icon className="text-primary-foreground" size={24} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gradient-primary">
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Business Hours */}
                <Card className="card-luxury">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Clock className="text-primary mr-3" size={24} />
                      <h3 className="text-lg font-semibold text-gradient-primary">Business Hours</h3>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>By Appointment</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Booking Calendar */}
                <Card className="card-glass mt-6">
                  <CardContent className="p-6 text-center">
                    <Calendar className="text-primary mx-auto mb-4" size={32} />
                    <h3 className="text-lg font-semibold mb-2 text-gradient-gold">
                      Book a Consultation
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm">
                      Schedule a free 30-minute consultation to discuss your project.
                    </p>
                    <Button className="btn-gold w-full">
                      Schedule Meeting
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Enhanced Component */}
        <FAQ 
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and process"
          items={[
            {
              question: "How far in advance should I contact you?",
              answer: "For major events and renovations, we recommend 3-6 months advance notice. However, we can accommodate shorter timelines depending on availability and project scope."
            },
            {
              question: "Do you work outside of Brisbane?",
              answer: "Yes! We serve clients throughout Australia and offer destination event planning services internationally. Travel costs are factored into project quotes."
            },
            {
              question: "What's included in your consultation?",
              answer: "Our free consultation includes project assessment, initial concept discussion, timeline overview, and a preliminary budget range. No obligation required."
            },
            {
              question: "Do you handle permits and vendor coordination?",
              answer: "Absolutely. We manage all aspects of project coordination including permits, vendor relationships, timeline management, and on-site supervision."
            },
            {
              question: "What is your design process like?",
              answer: "Our process begins with understanding your vision, followed by concept development, detailed planning, material selection, and finally flawless execution with ongoing support."
            },
            {
              question: "Do you offer payment plans?",
              answer: "Yes, we offer flexible payment schedules tailored to your project timeline. Payment terms are discussed during the consultation phase and outlined in our agreements."
            }
          ]}
        />
      </div>
    </>
  );
};

export default Contact;