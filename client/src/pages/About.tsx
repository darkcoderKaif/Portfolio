import GlitchText from "@/components/ui/GlitchText";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const skills = [
    "React", "TypeScript", "Next.js", "Three.js", "WebGL", "TailwindCSS", 
    "Node.js", "GraphQL", "Framer Motion", "PostgreSQL", "UI/UX Design", "Blender"
  ];

  const education = [
    {
      degree: "B.S. Computer Science",
      school: "University of Technology",
      year: "2018 - 2022",
      desc: "Specialized in Graphics Programming and Human-Computer Interaction."
    },
    {
      degree: "Full Stack Certification",
      school: "Advanced Coding Institute",
      year: "2023",
      desc: "Intensive bootcamp focusing on MERN stack and cloud architecture."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-20 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Image/Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 border-2 border-secondary -translate-x-4 -translate-y-4"></div>
            <div className="absolute inset-0 bg-zinc-900 overflow-hidden flex items-center justify-center">
              {/* Placeholder for Profile Image */}
              <div className="text-6xl font-display font-bold text-zinc-800 select-none">PHOTO</div>
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop" 
                alt="Profile" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-2 text-primary font-ui tracking-widest uppercase">Who I Am</div>
          <GlitchText text="DIGITAL ARTISAN" className="text-5xl md:text-6xl font-display font-bold mb-8 block" />
          
          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              I'm a creative developer obsessed with the intersection of design and technology. 
              I don't just write code; I craft digital experiences that leave a lasting impression.
            </p>
            <p>
              With a background in both traditional graphic design and software engineering, 
              I bridge the gap between aesthetic vision and technical implementation. 
              My goal is to build the future of the web—one pixel at a time.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-display font-bold mb-6 text-white border-b border-border pb-2 inline-block">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-white/20 hover:border-primary hover:text-primary transition-colors bg-transparent"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Education Section */}
      <div className="mt-32 max-w-4xl mx-auto">
        <h2 className="text-4xl font-display font-bold mb-12 text-center"><span className="text-secondary">#</span> EDUCATION</h2>
        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 border-l-2 border-border hover:border-primary bg-card/30 hover:bg-card/60 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{edu.degree}</h3>
                <span className="font-ui text-secondary">{edu.year}</span>
              </div>
              <p className="text-lg font-ui text-muted-foreground mb-2">{edu.school}</p>
              <p className="text-muted-foreground/80">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
