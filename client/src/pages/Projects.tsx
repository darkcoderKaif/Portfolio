import GlitchText from "@/components/ui/GlitchText";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Campus Connect",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    description: "Responsive portal for students to track notices, events, and resources with clean navigation and fast load times.",
    tech: ["React", "CSS", "API Integration"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "SkillForge LMS",
    category: "Platform",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    description: "Learning platform prototype with course listings, progress tracking, and secure authentication flows.",
    tech: ["React", "Node.js", "MySQL"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Support Desk Lite",
    category: "Communication",
    image: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop",
    description: "Ticketing dashboard that prioritizes requests, shows status at a glance, and keeps updates in sync.",
    tech: ["React", "Express", "REST APIs"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Portfolio V2",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
    description: "Refined personal portfolio with smooth page transitions, accessible components, and consistent design language.",
    tech: ["React", "Framer Motion", "CSS"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
      <div className="mb-16">
        <GlitchText text="SELECTED WORKS" className="text-5xl md:text-7xl font-display font-black mb-6" />
        <p className="text-xl text-muted-foreground max-w-2xl">
          A showcase of practical web applications and projects built with modern technologies, focusing on clean code, responsive design, and reliable functionality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-lg aspect-video mb-6 border border-border group-hover:border-primary/50 transition-colors">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale" 
        />
        
        {/* Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-sm">
          <div className="flex gap-4">
            <Button size="icon" className="rounded-full bg-white text-black hover:bg-primary hover:text-white">
              <ExternalLink size={20} />
            </Button>
            <Button size="icon" className="rounded-full bg-white text-black hover:bg-secondary hover:text-black">
              <Github size={20} />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start mb-2">
        <h3 className="text-3xl font-display font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
        <span className="text-xs font-ui border border-white/20 px-2 py-1 rounded text-muted-foreground">{project.category}</span>
      </div>
      
      <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
      
      <div className="flex gap-3 text-sm font-ui text-secondary">
        {project.tech.map((t: string, i: number) => (
          <span key={i}>#{t}</span>
        ))}
      </div>
    </motion.div>
  );
}
