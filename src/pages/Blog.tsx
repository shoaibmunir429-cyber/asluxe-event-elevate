import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import blogLuxuryBarDesign from "@/assets/blog-luxury-bar-design.jpg";
import blogEcoFriendlyDesign from "@/assets/blog-eco-friendly-design.jpg";
import blogBiophilicFestival from "@/assets/blog-biophilic-festival.jpg";

const Blog = () => {
  useScrollAnimation();
  const blogPosts = [
    {
      id: 1,
      slug: "luxury-event-trends-australia-2025",
      title: "Top Luxury Event Trends in Australia 2025",
      excerpt: "Discover the latest trends shaping luxury events across Australia, from sustainable practices to immersive technology integration.",
      content: "As we move into 2025, the luxury event landscape in Australia is evolving with exciting new trends that prioritize both elegance and innovation...",
      image: blogLuxuryBarDesign,
      author: "AS Luxe Team",
      publishDate: "2025-01-15",
      category: "Trends",
      tags: ["Luxury Events", "2025 Trends", "Australia", "Event Planning"],
      readTime: "5 min read"
    },
    {
      id: 2,
      slug: "eco-friendly-interior-design-hotels-bars",
      title: "Eco-Friendly Interior Design for Hotels & Bars",
      excerpt: "Learn how to incorporate sustainable design elements while maintaining the luxury aesthetic your guests expect.",
      content: "Sustainability and luxury are no longer mutually exclusive. Today's discerning clients expect both environmental responsibility and premium aesthetics...",
      image: blogEcoFriendlyDesign,
      author: "AS Luxe Team",
      publishDate: "2025-01-10",
      category: "Sustainability",
      tags: ["Eco-Friendly", "Interior Design", "Hotels", "Bars", "Sustainability"],
      readTime: "7 min read"
    },
    {
      id: 3,
      slug: "elevate-festival-celebration-biophilic-design",
      title: "How to Elevate Your Festival or Celebration with Biophilic Design",
      excerpt: "Explore the power of biophilic design in creating memorable outdoor events that connect guests with nature while maintaining luxury standards.",
      content: "Biophilic design represents the intersection of nature and luxury, creating spaces that not only look stunning but also promote well-being...",
      image: blogBiophilicFestival,
      author: "AS Luxe Team",
      publishDate: "2025-01-05",
      category: "Design",
      tags: ["Biophilic Design", "Festivals", "Outdoor Events", "Nature", "Luxury"],
      readTime: "6 min read"
    }
  ];

  const categories = [
    { name: "All Posts", count: 3 },
    { name: "Trends", count: 1 },
    { name: "Sustainability", count: 1 },
    { name: "Design", count: 1 }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <div className="pt-24">
        <title>Blog | AS Luxe Interiors & Events - Design Tips & Event Trends</title>
        <meta name="description" content="Stay updated with the latest luxury interior design trends, event planning tips, and industry insights from AS Luxe Interiors & Events in Brisbane." />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <AnimatedSection animation="fade">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="text-gradient-primary">Blog</span>
                <br />
                <span className="text-gradient-gold">& Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay updated with the latest trends, tips, and insights in luxury interior design 
                and premium event planning from our expert team.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-4 gap-12">
              
              {/* Main Blog Posts */}
              <div className="lg:col-span-3">
                <div className="space-y-12">
                  {blogPosts.map((post, index) => (
                    <AnimatedSection key={post.id} animation="scale" delay={index * 150}>
                      <article className="card-luxury overflow-hidden hover-tilt group">
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="relative h-64 md:h-auto overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading={index === 0 ? "eager" : "lazy"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm rounded-full backdrop-blur-sm animate-float">
                                {post.category}
                              </span>
                            </div>
                          </div>
                        <div className="p-8">
                          <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-2" />
                              {formatDate(post.publishDate)}
                            </div>
                            <div className="flex items-center">
                              <User size={16} className="mr-2" />
                              {post.author}
                            </div>
                            <span>{post.readTime}</span>
                          </div>
                          
                          <h2 className="text-2xl font-bold mb-4 text-gradient-primary">
                            <Link 
                              to={`/blog/${post.slug}`}
                              className="hover:text-primary-glow transition-colors duration-300"
                            >
                              {post.title}
                            </Link>
                          </h2>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <Link to={`/blog/${post.slug}`}>
                            <Button className="btn-outline-luxury">
                              Read More
                              <ArrowRight className="ml-2" size={16} />
                            </Button>
                          </Link>
                        </div>
                        </div>
                      </article>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-8 sticky top-32">
                  
                  {/* Categories */}
                  <Card className="card-luxury">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-gradient-primary">Categories</h3>
                      <ul className="space-y-3">
                        {categories.map((category, index) => (
                          <li key={index} className="flex justify-between items-center">
                            <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                              {category.name}
                            </span>
                            <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {category.count}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card className="card-glass">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-4 text-gradient-gold">Stay Updated</h3>
                      <p className="text-muted-foreground mb-6 text-sm">
                        Subscribe to our newsletter for the latest design trends and event planning tips.
                      </p>
                      <div className="space-y-4">
                        <input 
                          type="email" 
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <Button className="btn-luxury w-full">
                          Subscribe
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Popular Tags */}
                  <Card className="card-luxury">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-gradient-primary">Popular Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Luxury Events", "Interior Design", "Event Planning", "Sustainability", 
                          "Biophilic Design", "Wedding Design", "Corporate Events", "Bar Design"
                        ].map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground text-sm rounded-full cursor-pointer transition-all duration-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact CTA */}
                  <Card className="card-glass text-center">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-gradient-gold">Need Expert Advice?</h3>
                      <p className="text-muted-foreground mb-6 text-sm">
                        Get personalized consultation for your next project.
                      </p>
                      <Link to="/contact">
                        <Button className="btn-luxury w-full">
                          Contact Us
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;