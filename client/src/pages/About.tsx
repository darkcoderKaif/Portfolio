import GlitchText from "@/components/ui/GlitchText";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import myProfileImg from "@assets/WhatsApp_Image_2025-12-09_at_12.28.25_PM_1765266174760.jpeg";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "Python",
    "Java",
    "C++",
    "C",
    "MySQL",
    "Oracle",
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "ARCADE BUSINESS COLLEGE",
      year: "2023 — 2026",
      desc: "Final year student focusing on software development, web technologies, database management, and practical problem-solving.",
    },
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
              <img 
                src={myProfileImg}
                alt="Ali Raja" 
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
          <GlitchText text="ALI RAJA" className="text-5xl md:text-6xl font-display font-bold mb-8 block" />
          
          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              I'm a dedicated and passionate BCA final-year student with a strong interest in software development. 
              I focus on problem-solving, backend logic, and building useful digital solutions that make a difference.
            </p>
            <p>
              My approach combines clear technical thinking with practical implementation, whether working on responsive web interfaces, 
              database-driven applications, or integrating APIs for seamless user experiences.
            </p>
            <p>
              I'm committed to continuous learning and collaborating on projects that are fast, reliable, and intuitive to use.
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

      {/* Experience Section */}
      <div className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-display font-bold mb-12 text-center">
          <span className="text-secondary">#</span> EXPERIENCE
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 border border-border bg-card/40 hover:border-primary/60 transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-2xl font-display font-bold text-white">Web Development Intern — CloudEdge Solutions</h3>
              <p className="text-secondary font-ui">June 2024 — September 2024</p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Developed responsive web interfaces using HTML and CSS.</li>
            <li>Collaborated with backend developers and integrated APIs.</li>
            <li>Optimized performance, improved UI/UX, and debugged issues.</li>
          </ul>
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
