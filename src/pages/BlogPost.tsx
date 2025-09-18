import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Tag, Share2, ArrowRight } from "lucide-react";
import luxuryWedding from "@/assets/luxury-wedding.jpg";
import luxuryOffice from "@/assets/luxury-office.jpg";
import luxuryFestival from "@/assets/luxury-festival.jpg";

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    "luxury-event-trends-australia-2025": {
      id: 1,
      title: "Top Luxury Event Trends in Australia 2025",
      excerpt: "Discover the latest trends shaping luxury events across Australia, from sustainable practices to immersive technology integration.",
      image: luxuryWedding,
      author: "AS Luxe Team",
      publishDate: "2025-01-15",
      category: "Trends",
      tags: ["Luxury Events", "2025 Trends", "Australia", "Event Planning"],
      readTime: "5 min read",
      content: `
        <p>As we move into 2025, the luxury event landscape in Australia is evolving with exciting new trends that prioritize both elegance and innovation. At AS Luxe Interiors & Events, we've identified the key trends that will define luxury celebrations this year.</p>

        <h2>1. Sustainable Luxury</h2>
        <p>Environmental consciousness is no longer optional in the luxury event space. Clients are demanding beautiful events that also respect our planet. This includes:</p>
        <ul>
          <li>Locally sourced, seasonal florals and décor</li>
          <li>Reusable and biodegradable materials</li>
          <li>Carbon-neutral event planning</li>
          <li>Partnership with eco-conscious vendors</li>
        </ul>

        <h2>2. Immersive Technology Integration</h2>
        <p>Technology is seamlessly blending with traditional luxury aesthetics to create unforgettable experiences:</p>
        <ul>
          <li>Augmented reality guest interactions</li>
          <li>Smart lighting that responds to music and mood</li>
          <li>Digital art installations</li>
          <li>Interactive holographic displays</li>
        </ul>

        <h2>3. Biophilic Design Elements</h2>
        <p>The connection between nature and luxury continues to strengthen, with events featuring:</p>
        <ul>
          <li>Living walls and vertical gardens</li>
          <li>Natural materials like stone, wood, and bamboo</li>
          <li>Water features and natural soundscapes</li>
          <li>Outdoor-indoor flow design</li>
        </ul>

        <h2>4. Personalized Guest Experiences</h2>
        <p>2025 is all about creating unique, tailored experiences for each guest:</p>
        <ul>
          <li>Customized welcome gifts and amenities</li>
          <li>Personalized dining experiences</li>
          <li>Individual guest journey mapping</li>
          <li>Bespoke entertainment options</li>
        </ul>

        <h2>Conclusion</h2>
        <p>These trends represent more than just aesthetic choices – they reflect a deeper understanding of what luxury means in today's world. At AS Luxe, we're excited to incorporate these elements into our upcoming projects, creating events that are not only beautiful but also meaningful and memorable.</p>
      `
    },
    "eco-friendly-interior-design-hotels-bars": {
      id: 2,
      title: "Eco-Friendly Interior Design for Hotels & Bars",
      excerpt: "Learn how to incorporate sustainable design elements while maintaining the luxury aesthetic your guests expect.",
      image: luxuryOffice,
      author: "AS Luxe Team",
      publishDate: "2025-01-10",
      category: "Sustainability",
      tags: ["Eco-Friendly", "Interior Design", "Hotels", "Bars", "Sustainability"],
      readTime: "7 min read",
      content: `
        <p>Sustainability and luxury are no longer mutually exclusive. Today's discerning clients expect both environmental responsibility and premium aesthetics. Here's how to achieve both in hotel and bar design.</p>

        <h2>Sustainable Materials That Don't Compromise on Luxury</h2>
        <p>The key to eco-friendly luxury design lies in material selection:</p>
        <ul>
          <li>Reclaimed hardwoods for flooring and furniture</li>
          <li>Recycled metals for fixtures and accents</li>
          <li>Natural stone from local quarries</li>
          <li>Bamboo for sustainable, fast-growing wood alternatives</li>
        </ul>

        <h2>Energy-Efficient Lighting Solutions</h2>
        <p>Lighting plays a crucial role in both ambiance and sustainability:</p>
        <ul>
          <li>LED systems with smart controls</li>
          <li>Natural light maximization through strategic design</li>
          <li>Solar-powered outdoor lighting</li>
          <li>Motion-sensor technology in low-traffic areas</li>
        </ul>

        <h2>Water Conservation Strategies</h2>
        <p>Implement water-saving features without sacrificing guest experience:</p>
        <ul>
          <li>Low-flow fixtures with luxury finishes</li>
          <li>Greywater recycling systems</li>
          <li>Native landscaping requiring minimal irrigation</li>
          <li>Smart irrigation systems</li>
        </ul>

        <h2>Indoor Air Quality Enhancement</h2>
        <p>Create healthier environments through natural solutions:</p>
        <ul>
          <li>Living walls and indoor plants</li>
          <li>Natural ventilation systems</li>
          <li>Non-toxic paints and finishes</li>
          <li>Air-purifying plant installations</li>
        </ul>

        <h2>Local Sourcing and Artisan Partnerships</h2>
        <p>Support local communities while reducing transportation emissions:</p>
        <ul>
          <li>Collaborate with local artisans and craftspeople</li>
          <li>Source furniture and décor from regional suppliers</li>
          <li>Feature local art and cultural elements</li>
          <li>Build relationships with sustainable local businesses</li>
        </ul>

        <h2>The Business Case for Sustainable Luxury</h2>
        <p>Beyond environmental benefits, sustainable design offers significant business advantages:</p>
        <ul>
          <li>Reduced operational costs through energy efficiency</li>
          <li>Enhanced brand reputation and customer loyalty</li>
          <li>Compliance with evolving environmental regulations</li>
          <li>Access to green building certifications and incentives</li>
        </ul>

        <p>At AS Luxe Interiors & Events, we believe that the future of luxury lies in responsible design that respects both our clients' expectations and our planet's resources.</p>
      `
    },
    "elevate-festival-celebration-biophilic-design": {
      id: 3,
      title: "How to Elevate Your Festival or Celebration with Biophilic Design",
      excerpt: "Explore the power of biophilic design in creating memorable outdoor events that connect guests with nature while maintaining luxury standards.",
      image: luxuryFestival,
      author: "AS Luxe Team",
      publishDate: "2025-01-05",
      category: "Design",
      tags: ["Biophilic Design", "Festivals", "Outdoor Events", "Nature", "Luxury"],
      readTime: "6 min read",
      content: `
        <p>Biophilic design represents the intersection of nature and luxury, creating spaces that not only look stunning but also promote well-being and connection with the natural world. Here's how to incorporate these principles into your next festival or celebration.</p>

        <h2>Understanding Biophilic Design Principles</h2>
        <p>Biophilic design is based on our innate connection to nature. Key elements include:</p>
        <ul>
          <li>Direct connection with nature through plants, water, and natural light</li>
          <li>Indirect connection through natural materials, views, and patterns</li>
          <li>Spatial configuration that mimics natural environments</li>
          <li>Integration of natural processes and rhythms</li>
        </ul>

        <h2>Creating Natural Gathering Spaces</h2>
        <p>Design areas that feel organic and inviting:</p>
        <ul>
          <li>Curved seating arrangements that follow natural patterns</li>
          <li>Multi-level spaces that create intimate micro-environments</li>
          <li>Natural amphitheater-style staging areas</li>
          <li>Shaded groves using existing trees or planted installations</li>
        </ul>

        <h2>Water Features and Natural Elements</h2>
        <p>Incorporate water and natural textures for sensory engagement:</p>
        <ul>
          <li>Flowing water installations for ambient sound</li>
          <li>Natural stone pathways and gathering areas</li>
          <li>Textured bark, moss, and natural fiber elements</li>
          <li>Integration of local geological features</li>
        </ul>

        <h2>Sustainable Material Choices</h2>
        <p>Select materials that complement the natural environment:</p>
        <ul>
          <li>Locally sourced timber for structures and furnishing</li>
          <li>Natural fiber textiles for comfort and sustainability</li>
          <li>Living installations that grow and change over time</li>
          <li>Biodegradable décor elements</li>
        </ul>

        <h2>Lighting That Mimics Nature</h2>
        <p>Create lighting schemes that feel natural and magical:</p>
        <ul>
          <li>Warm, golden lighting that mimics sunset and sunrise</li>
          <li>Dappled light effects through canopy installations</li>
          <li>Fire features for primal warmth and gathering</li>
          <li>Star-like overhead installations for evening events</li>
        </ul>

        <h2>Sensory Integration</h2>
        <p>Engage all the senses for a complete biophilic experience:</p>
        <ul>
          <li>Natural fragrances from flowering plants and herbs</li>
          <li>Textural elements guests can touch and interact with</li>
          <li>Natural soundscapes with wind chimes and water</li>
          <li>Edible landscapes with herbs and fruit trees</li>
        </ul>

        <h2>Weather Integration and Adaptability</h2>
        <p>Design with natural weather patterns in mind:</p>
        <ul>
          <li>Flexible canopy systems that respond to conditions</li>
          <li>Natural windbreaks using vegetation</li>
          <li>Drainage solutions that become part of the design</li>
          <li>Seasonal adaptability for year-round use</li>
        </ul>

        <h2>The Psychological Impact</h2>
        <p>Biophilic design isn't just beautiful—it's beneficial:</p>
        <ul>
          <li>Reduced stress and increased well-being for guests</li>
          <li>Enhanced creativity and social interaction</li>
          <li>Deeper emotional connection to the event experience</li>
          <li>Memorable experiences that guests want to share</li>
        </ul>

        <p>At AS Luxe Interiors & Events, we've seen firsthand how biophilic design transforms festivals and celebrations from simple gatherings into transformative experiences that guests remember long after the event ends.</p>
      `
    }
  };

  const currentPost = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!currentPost) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="btn-luxury">
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const otherPosts = Object.entries(blogPosts)
    .filter(([postSlug]) => postSlug !== slug)
    .slice(0, 2);

  return (
    <>
      <div className="pt-24">
        <title>{currentPost.title} | AS Luxe Interiors & Events Blog</title>
        <meta name="description" content={currentPost.excerpt} />
        
        {/* Back to Blog */}
        <section className="py-8 bg-gradient-card">
          <div className="container mx-auto px-6">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-glow transition-colors duration-300">
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center text-sm text-muted-foreground mb-6 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {formatDate(currentPost.publishDate)}
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    {currentPost.author}
                  </div>
                  <span>{currentPost.readTime}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {currentPost.category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
                  {currentPost.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {currentPost.excerpt}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {currentPost.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Button className="btn-outline-luxury">
                  <Share2 className="mr-2" size={18} />
                  Share Article
                </Button>
              </div>

              {/* Featured Image */}
              <div className="relative mb-12 rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <article className="prose prose-lg max-w-none">
                    <div 
                      className="text-foreground leading-relaxed space-y-6"
                      dangerouslySetInnerHTML={{ __html: currentPost.content }}
                      style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.7'
                      }}
                    />
                  </article>

                  {/* Share and CTA */}
                  <div className="mt-16 p-8 card-luxury text-center">
                    <h3 className="text-2xl font-bold mb-4 text-gradient-gold">Inspired by This Article?</h3>
                    <p className="text-muted-foreground mb-8">
                      Let's discuss how we can bring these concepts to life in your next project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact">
                        <Button className="btn-luxury">
                          Start Your Project
                          <ArrowRight className="ml-2" size={20} />
                        </Button>
                      </Link>
                      <Link to="/gallery">
                        <Button className="btn-outline-luxury">
                          View Our Work
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="space-y-8 sticky top-32">
                    
                    {/* Table of Contents */}
                    <Card className="card-luxury">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-4 text-gradient-primary">In This Article</h3>
                        <nav className="space-y-2">
                          <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                            Introduction
                          </a>
                          <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                            Key Trends & Concepts
                          </a>
                          <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                            Implementation Strategies
                          </a>
                          <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                            Benefits & Considerations
                          </a>
                          <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                            Conclusion
                          </a>
                        </nav>
                      </CardContent>
                    </Card>

                    {/* Contact CTA */}
                    <Card className="card-glass text-center">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-4 text-gradient-gold">Need Expert Help?</h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                          Get personalized advice for your project from our expert team.
                        </p>
                        <Link to="/contact">
                          <Button className="btn-luxury w-full">
                            Get Consultation
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                More <span className="text-gradient-primary">Insights</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {otherPosts.map(([postSlug, post]) => (
                  <Card key={post.id} className="card-luxury overflow-hidden hover-lift">
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar size={14} className="mr-2" />
                        {formatDate(post.publishDate)}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gradient-primary">
                        <Link 
                          to={`/blog/${postSlug}`}
                          className="hover:text-primary-glow transition-colors duration-300"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link to={`/blog/${postSlug}`}>
                        <Button className="btn-outline-luxury">
                          Read More
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;