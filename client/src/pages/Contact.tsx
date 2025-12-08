import GlitchText from "@/components/ui/GlitchText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-ui tracking-widest uppercase mb-2">Get In Touch</p>
          <GlitchText text="LET'S CONNECT" className="text-5xl md:text-7xl font-display font-black mb-8" />
          
          <p className="text-xl text-muted-foreground mb-12 max-w-lg">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
          </p>

          <div className="space-y-8">
            <ContactItem icon={<Mail />} label="Email" value="hello@devpf.com" />
            <ContactItem icon={<Phone />} label="Phone" value="+1 (555) 123-4567" />
            <ContactItem icon={<MapPin />} label="Location" value="San Francisco, CA" />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/30 backdrop-blur-md border border-border p-8 md:p-10 rounded-xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-ui text-muted-foreground uppercase tracking-wider">Name</label>
                <Input placeholder="John Doe" className="bg-background/50 border-white/10 focus:border-primary h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-ui text-muted-foreground uppercase tracking-wider">Email</label>
                <Input placeholder="john@example.com" className="bg-background/50 border-white/10 focus:border-primary h-12" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-ui text-muted-foreground uppercase tracking-wider">Subject</label>
              <Input placeholder="Project Inquiry" className="bg-background/50 border-white/10 focus:border-primary h-12" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-ui text-muted-foreground uppercase tracking-wider">Message</label>
              <Textarea placeholder="Tell me about your project..." className="bg-background/50 border-white/10 focus:border-primary min-h-[150px]" />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/80 text-white h-14 font-ui text-lg tracking-wide uppercase">
              <Send className="mr-2 h-5 w-5" /> Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center space-x-4 group cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground font-ui uppercase tracking-wider">{label}</p>
        <p className="text-xl font-medium text-white group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  );
}
