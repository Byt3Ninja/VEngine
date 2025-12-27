import { motion } from "framer-motion";
import { ArrowRight, Activity, Globe, Cpu, Users, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import heroBg from "@assets/generated_images/abstract_health_tech_network_visualization.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tighter">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
              <Activity className="w-5 h-5" />
            </div>
            <span>healiot<span className="text-primary">.</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#process" className="hover:text-primary transition-colors">Process</a>
            <a href="#team" className="hover:text-primary transition-colors">Team</a>
            <Button variant="default" size="sm" className="rounded-full px-6">
              Contact Us
            </Button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">About</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Portfolio</a>
            <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Process</a>
            <a href="#team" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Team</a>
            <Button className="w-full">Contact Us</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background z-10" />
          <img 
            src={heroBg} 
            alt="Abstract Health Tech Network" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Building the Future of Care
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8 text-foreground">
              We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">breakthrough</span> health companies.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Healiot is a venture studio dedicated to transforming healthcare. We identify gaps, validate solutions, and build scalable companies that improve lives.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
                Our Portfolio <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 backdrop-blur-sm bg-background/50 border-primary/20 hover:bg-primary/5">
                How We Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border/50 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: "$120M+", label: "Capital Raised" },
              { number: "15+", label: "Companies Built" },
              { number: "2M+", label: "Lives Impacted" },
              { number: "4", label: "Exits" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium uppercase tracking-wide text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="about" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 mb-20">
            <div className="md:w-1/3">
              <h2 className="font-display text-4xl font-bold mb-6">Our Expertise</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We provide full-stack next generation services to transform your business. From strategic consultation to robust software delivery.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Globe, title: "IT Consultation", desc: "Expert assessment of your IT infrastructure with strategic recommendations to optimize technology investments." },
                { icon: Cpu, title: "Product Development", desc: "Custom software solutions delivered by skilled developers who work closely to understand your requirements." },
                { icon: Activity, title: "Cloud & Data Analytics", desc: "Leveraging technology to drive innovation, from system integration to IoT solutions." },
                { icon: Users, title: "Cyber Security", desc: "Comprehensive security services including vulnerability assessments and threat intelligence." }
              ].map((area, i) => (
                <Card key={i} className="border-border/50 bg-card hover:bg-secondary/50 transition-colors duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <area.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-display text-4xl font-bold mb-4">Our Products</h2>
              <p className="text-muted-foreground text-lg">Next generation software products building the future.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex group">
              View all products <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "TRSANA", category: "Process Management", color: "bg-blue-500", link: "https://trsana.net/" },
              { name: "SignLayer", category: "Digital Signature", color: "bg-emerald-500", link: "https://signlayer.net/" },
              { name: "TrustPass", category: "Security", color: "bg-purple-500", link: "#" },
              { name: "SaaHub", category: "Communication", color: "bg-indigo-500", link: "#" }
            ].map((company, i) => (
              <a href={company.link} key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer block">
                <div className={`absolute inset-0 ${company.color} mix-blend-multiply opacity-80 transition-opacity duration-500 group-hover:opacity-90`} />
                <img 
                  src={`https://images.unsplash.com/photo-${1550000000000 + i * 1000}?auto=format&fit=crop&w=800&q=80`} 
                  alt={company.name} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="text-white/80 text-xs font-medium uppercase tracking-wider mb-2">{company.category}</div>
                  <h3 className="text-white font-display text-2xl font-bold mb-2">{company.name}</h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                    <span className="text-white/90 text-xs inline-flex items-center">
                      Visit Website <ArrowRight className="ml-2 w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold mb-6">The Studio Model</h2>
            <p className="text-muted-foreground text-lg">
              We don't just invest. We co-found, build, and operationalize companies from day zero.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Ideation", desc: "Identifying unmet needs in clinical workflows." },
                { step: "02", title: "Validation", desc: "Rigorous testing of market and technical feasibility." },
                { step: "03", title: "Build", desc: "Assembling world-class teams and MVPs." },
                { step: "04", title: "Scale", desc: "Growth, commercialization, and exit strategy." }
              ].map((item, i) => (
                <div key={i} className="relative bg-background p-6 rounded-xl border border-border/50 shadow-sm z-10 group hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Ready to build the future?</h2>
          <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-10">
            Whether you're a founder, investor, or health system, we want to partner with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg text-primary font-bold">
              Pitch Your Idea
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs">
                <Activity className="w-3 h-3" />
              </div>
              <span>healiot<span className="text-primary">.</span></span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Healiot Venture Studio. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Users className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
