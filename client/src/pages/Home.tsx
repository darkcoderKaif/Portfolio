import HeroScene from "@/components/3d/HeroScene";
import GlitchText from "@/components/ui/GlitchText";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Globe } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <HeroScene />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary font-ui tracking-[0.2em] mb-4 text-sm md:text-base uppercase">
              Creative Developer & UI Designer
            </p>
            <GlitchText 
              text="BUILDING THE FUTURE" 
              className="text-5xl md:text-7xl lg:text-9xl font-display font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-sans leading-relaxed mb-10">
              Crafting immersive digital experiences with code, creativity, and chaos. 
              Specializing in 3D web, interactive UI, and next-gen frontend architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/projects">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-white border-0 font-ui text-lg px-8 h-14 rounded-none skew-x-[-10deg] hover:skew-x-[-5deg] transition-all duration-300">
                  <span className="skew-x-[10deg] flex items-center gap-2">
                    View Projects <ArrowRight size={18} />
                  </span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10 font-ui text-lg px-8 h-14 rounded-none skew-x-[-10deg] hover:skew-x-[-5deg] transition-all duration-300">
                  <span className="skew-x-[10deg]">Contact Me</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
        >
          <span className="text-xs text-muted-foreground font-ui uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* Intro Grid */}
      <section className="py-20 bg-background relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Code className="text-primary w-10 h-10" />}
              title="Modern Tech Stack"
              description="Built with Next.js, React, TypeScript, and TailwindCSS for peak performance."
            />
            <FeatureCard 
              icon={<Cpu className="text-secondary w-10 h-10" />}
              title="Creative Interactions"
              description="Immersive animations powered by Framer Motion and GSAP for fluid UX."
            />
            <FeatureCard 
              icon={<Globe className="text-accent w-10 h-10" />}
              title="3D Web Experiences"
              description="Integrating Three.js and WebGL to bring depth and dimension to the web."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-8 border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors group"
    >
      <div className="mb-6 bg-background/50 w-fit p-4 rounded-lg group-hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] transition-shadow duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
