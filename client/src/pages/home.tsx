import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity, Globe, Cpu, Users, ChevronRight, Menu, X, Rocket, Zap, Laptop, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import heroBg from "@assets/generated_images/abstract_health_tech_network_visualization.png";
import virtualIncubatorImg from "@assets/generated_images/virtual_incubator_dashboard_ui.png";
import signLayerImg from "@assets/generated_images/signlayer_digital_signature_ui.png";
import wq3Img from "@assets/generated_images/wq3_real_estate_platform_ui.png";
import tawqe3yImg from "@assets/generated_images/tawqe3y_saas_platform_ui.png";
import instadrImg from "@assets/generated_images/instadr_telemedicine_app_ui.png";
import instamsgImg from "@assets/generated_images/instamsg_messaging_app_ui.png";
import aifabricaImg from "@assets/generated_images/aifabrica_ai_tools_ui.png";
import saaserpImg from "@assets/generated_images/saaserp_erp_dashboard_ui.png";
import sawaImg from "@assets/generated_images/sawa_secure_chat_ui.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30" ref={scrollRef}>
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tighter z-50">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Zap className="w-5 h-5" />
            </div>
            <span>vengine<span className="text-primary">.io</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium bg-background/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 shadow-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#ecosystem" className="hover:text-primary transition-colors">Ecosystem</a>
            <a href="#products" className="hover:text-primary transition-colors">Products</a>
            <a href="#process" className="hover:text-primary transition-colors">Process</a>
          </div>

          <div className="hidden md:block">
            <Button variant="default" className="rounded-full px-6 font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Contact Us
            </Button>
          </div>

          <button 
            className="md:hidden p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl p-6 flex flex-col items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-10 duration-300">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-display font-bold hover:text-primary transition-colors">About</a>
            <a href="#ecosystem" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-display font-bold hover:text-primary transition-colors">Ecosystem</a>
            <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-display font-bold hover:text-primary transition-colors">Products</a>
            <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-display font-bold hover:text-primary transition-colors">Process</a>
            <Button size="lg" className="w-full max-w-xs rounded-full text-lg mt-8">Contact Us</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background z-10" />
          <img 
            src={heroBg} 
            alt="Abstract Network Visualization" 
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              The Venture Engine
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95] mb-8 text-foreground">
              We engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600 animate-gradient-x">tomorrow's</span> giants.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Vengine.io is the operational backbone for breakthrough companies. Intelligent software, strategic growth, and world-class engineering.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-10 text-lg h-14 md:h-16 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 hover:scale-105 transition-all duration-300">
                Explore Ecosystem
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-10 text-lg h-14 md:h-16 backdrop-blur-md bg-background/30 border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                Partner With Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* Ecosystem Bento Grid */}
      <section id="ecosystem" className="py-20 md:py-32 bg-secondary/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className="mb-12 md:mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 md:mb-6">The Ecosystem</h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                Three pillars. One engine. We provide the infrastructure for exponential growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {/* Healiot */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl bg-background border border-border/50 shadow-sm group"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 mb-6">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Healiot</h3>
                <p className="text-muted-foreground">
                  Our Information Technology powerhouse. Building robust, scalable infrastructure.
                </p>
                <div className="mt-auto pt-8 flex justify-end">
                   <ArrowUpRight className="text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>

            {/* Growthlabs */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl bg-background border border-border/50 shadow-sm group"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-6">
                  <Rocket className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Growthlabs</h3>
                <p className="text-muted-foreground">
                  Ecosystem enabler through intelligent software.
                </p>
                <div className="mt-auto pt-8 flex justify-end">
                   <ArrowUpRight className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>

            {/* Bluecake */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl bg-background border border-border/50 shadow-sm group"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 mb-6">
                  <Laptop className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Bluecake</h3>
                <p className="text-muted-foreground">
                  Phygital Marketing Agency bridging worlds.
                </p>
                <div className="mt-auto pt-8 flex justify-end">
                   <ArrowUpRight className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Marquee/Grid */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
             <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Core Competencies</h2>
             <p className="text-lg md:text-xl text-muted-foreground font-light">
               We don't just advise; we execute. Our deep technical expertise allows us to tackle the most complex challenges.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Globe, title: "IT Consultation", desc: "Strategic technology assessment and roadmap planning." },
              { icon: Cpu, title: "Product Dev", desc: "End-to-end software engineering from MVP to scale." },
              { icon: Activity, title: "Data Analytics", desc: "Turning raw data into actionable business intelligence." },
              { icon: Users, title: "Cyber Security", desc: "Enterprise-grade protection for critical assets." }
            ].map((area, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-secondary/30 hover:bg-secondary/60 transition-colors duration-300 border border-transparent hover:border-primary/20">
                <div className="w-14 h-14 rounded-2xl bg-background shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase - Masonry/Grid */}
      <section id="products" className="py-20 md:py-32 bg-background relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 md:mb-6">Our Products</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                A suite of next-generation tools redefining industries.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex rounded-full group">
              View All Products <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { name: "Virtual Incubator", category: "Startup Tech", color: "from-blue-600 to-blue-800", link: "#", image: virtualIncubatorImg },
              { name: "SIGNLayer.net", category: "Digital Signature", color: "from-emerald-600 to-teal-800", link: "https://signlayer.net/", image: signLayerImg },
              { name: "Wq3.ae", category: "Real Estate", color: "from-amber-600 to-orange-800", link: "https://wq3.ae", image: wq3Img },
              { name: "Tawqe3y.com", category: "Platform", color: "from-orange-600 to-red-800", link: "https://tawqe3y.com", image: tawqe3yImg },
              { name: "Instadr.app", category: "Health Tech", color: "from-cyan-600 to-blue-800", link: "https://instadr.app", image: instadrImg },
              { name: "Instamsg.app", category: "Communication", color: "from-indigo-600 to-violet-800", link: "https://instamsg.app", image: instamsgImg },
              { name: "Aifabrica.app", category: "AI Tools", color: "from-purple-600 to-fuchsia-800", link: "https://aifabrica.app", image: aifabricaImg },
              { name: "Saaserp.net", category: "Startup ERP", color: "from-blue-500 to-indigo-700", link: "https://saaserp.net", image: saaserpImg },
              { name: "Sawa.chat", category: "Secure Chat", color: "from-emerald-500 to-green-700", link: "https://sawa.chat", image: sawaImg },
            ].map((product, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                href={product.link}
                target={product.link.startsWith("http") ? "_blank" : undefined}
                rel={product.link.startsWith("http") ? "noopener noreferrer" : undefined}
                key={i} 
                className="group relative overflow-hidden rounded-[2rem] bg-secondary/20 aspect-[3/4] cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10 mix-blend-multiply`} />
                <img 
                  src={product.image}
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 z-10" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                    {product.category}
                  </div>
                  <h3 className="text-white font-display text-2xl font-bold mb-2 leading-tight">{product.name}</h3>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 delay-100 flex items-center text-white/90 text-sm font-medium mt-4">
                    Visit Platform <ArrowUpRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Steps */}
      <section id="process" className="py-20 md:py-32 bg-secondary/5 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-display text-4xl font-bold mb-4 md:mb-6">The Studio Model</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              From zero to one, and one to scale. Our proven methodology for building category winners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
            
            {[
              { step: "01", title: "Ideation", desc: "Deep market research to identify unmet needs." },
              { step: "02", title: "Validation", desc: "Stress-testing viability with real-world data." },
              { step: "03", title: "Build", desc: "Rapid prototyping and MVP development." },
              { step: "04", title: "Scale", desc: "Growth hacking and commercial expansion." }
            ].map((item, i) => (
              <div key={i} className="relative pt-0 md:pt-0 group flex flex-col items-center md:block">
                <div className="relative md:absolute top-0 left-1/2 md:-translate-x-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-background border-4 border-secondary flex items-center justify-center font-display font-bold text-2xl md:text-3xl text-primary mb-6 z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {item.step}
                </div>
                <div className="mt-4 md:mt-32 text-center p-6 rounded-2xl hover:bg-background/80 transition-colors w-full">
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/90">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight">
            Ready to build <br/> the impossible?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 font-light">
            We partner with visionary founders and enterprises to create the next generation of technology companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4 sm:px-0">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-12 h-14 md:h-16 text-lg bg-white text-primary hover:bg-white/90 font-bold shadow-2xl">
              Pitch Your Idea
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-12 h-14 md:h-16 text-lg border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              Contact Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tighter mb-6">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                  <Zap className="w-4 h-4" />
                </div>
                <span>vengine<span className="text-primary">.io</span></span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                The operating system for venture building. We turn ambitious ideas into market-leading companies.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/50">
            <div className="text-sm text-muted-foreground">
              © 2024 Venture Engine. All rights reserved.
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
