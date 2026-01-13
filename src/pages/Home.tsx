import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import { 
  FaJava, FaPython, FaReact, FaDatabase, FaBrain, FaRobot, 
  FaGraduationCap, FaTrophy, FaBriefcase, FaPaintBrush
} from "react-icons/fa";
import { SiFastapi, SiRedis, SiApachekafka } from "react-icons/si";
import { SectionHeading } from "../components/SectionHeading";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { profilePic } from "../assets";

// -----------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------

function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-block px-4 py-2 rounded-full glass mb-6 text-primary font-semibold text-sm">
            Available for Opportunities
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Ananya Paul
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            2nd year B.Tech in CSE. AI Engineer Enthusiast & Fullstack Developer. 
            Passionate about building scalable applications and exploring the frontiers of AI.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-foreground border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              View Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
             {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-[2rem] rotate-6 transform translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-200/20 rounded-[2rem] -rotate-3 transform -translate-x-2 -translate-y-2 backdrop-blur-sm" />
            
            {/* Image Container */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl bg-white">
              <img 
                src={profilePic}
                alt="Ananya Paul" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
           <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {/* 4 Photo Placeholder Grid for dynamic personality showcase */}
            <div className="space-y-4 mt-8">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:rotate-2 transition-transform duration-300">
                {/* coding setup */}
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400" alt="Coding" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:-rotate-2 transition-transform duration-300">
                {/* university campus */}
                <img src="https://pixabay.com/get/g610853967b6b354256bcedb95336f1d4062c64731bce92201ccd3d2f9f0d706d5263381df01110c6a6ebac1d43bc403eebb4d4b782e84925d6ca914f5f8b24db_1280.jpg" alt="Campus" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:-rotate-2 transition-transform duration-300">
                 {/* tech event */}
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400" alt="Event" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:rotate-2 transition-transform duration-300">
                {/* creative work/art */}
                <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400" alt="Creative" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading title="About Me" subtitle="Who I Am" alignment="left" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p>
              I am a 2nd year B.Tech student in Computer Science Engineering at UEM Kolkata, with a burning passion for Artificial Intelligence and Fullstack Development.
            </p>
            <p>
              My journey in tech is driven by curiosity. From analyzing complex logs with Python to building responsive React interfaces, I love bridging the gap between data and design. I actively participate in tech events and hackathons, including those at prestigious IITs, constantly challenging myself to learn more.
            </p>
            <p>
              Beyond just coding, I have an entrepreneurial spirit and am engaging in opening a tech startup. When I'm not in front of a screen, you can find me expressing my creativity through handcrafting.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="glass p-6 rounded-2xl">
              <FaGraduationCap className="text-3xl text-primary mb-3" />
              <h4 className="font-bold text-foreground">Education</h4>
              <p className="text-sm text-muted-foreground mt-2">
                B.Tech in CSE (2nd Year)<br/>
                University of Engineering & Management, Kolkata
              </p>
            </div>
             <div className="glass p-6 rounded-2xl">
              <FaTrophy className="text-3xl text-primary mb-3" />
              <h4 className="font-bold text-foreground">Achievements</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Chancellor’s Award for Start-Up Venture 2024-2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSkillsSection() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "Kafka", icon: <SiApachekafka /> },
    { name: "Software Eng", icon: <FaBriefcase /> },
    { name: "DBMS", icon: <FaDatabase /> },
    { name: "AI", icon: <FaBrain /> },
  ];

  return (
    <section id="education" className="section-padding bg-white/30 backdrop-blur-sm rounded-[3rem] my-10">
      <SectionHeading title="Skills & Education" subtitle="My Arsenal" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <FaBrain />
            </span>
            Technical Expertise
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 px-5 py-3 glass rounded-xl text-foreground font-medium hover:bg-white hover:text-primary transition-colors cursor-default"
              >
                <span className="text-xl text-primary">{skill.icon}</span>
                {skill.name}
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
             <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FaBriefcase />
              </span>
              Experience
            </h3>
            <div className="glass-card p-6 border-l-4 border-l-primary">
              <h4 className="text-lg font-bold">Data Analytics Simulation</h4>
              <p className="text-primary font-medium text-sm">Deloitte Australia (Forage)</p>
              <p className="text-muted-foreground text-sm mt-3">
                Completed practical tasks in data analysis, forensic technology, and created comprehensive Tableau dashboards.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <FaGraduationCap />
            </span>
            Education Journey
          </h3>
          <div className="space-y-8 border-l-2 border-primary/20 pl-8 relative">
            {/* Timeline Item 1 */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm" />
              <h4 className="text-xl font-bold">B.Tech in Computer Science</h4>
              <p className="text-primary font-medium">UEM Kolkata • 2023 - 2027</p>
              <p className="text-muted-foreground mt-2 text-sm">
                Currently in 2nd Year. Focusing on core CS fundamentals, Data Structures, and AI.
              </p>
            </div>
            
             {/* Timeline Item 2 */}
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-primary/50 shadow-sm" />
              <h4 className="text-xl font-bold">Higher Secondary</h4>
              <p className="text-primary font-medium">School Name • Year</p>
              <p className="text-muted-foreground mt-2 text-sm">
                Specialized in Science with Computer Applications.
              </p>
            </div>

             {/* Timeline Item 3 */}
             <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-primary/50 shadow-sm" />
              <h4 className="text-xl font-bold">Secondary Education</h4>
              <p className="text-primary font-medium">School Name • Year</p>
              <p className="text-muted-foreground mt-2 text-sm">
                Foundation in mathematics and general sciences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "AI-LogAnalyzer",
      tags: ["Python", "FastAPI", "React SCSS"],
      description: "An intelligent system for log analysis, API monitoring, and anomaly detection. Helps identify service health issues proactively.",
      icon: <FaRobot className="text-4xl text-primary" />,
    },
    {
      title: "Event Driven Architecture",
      tags: ["Python", "Kafka", "System Design"],
      description: "Implemented a scalable event-driven system architecture focusing on asynchronous communication patterns and high throughput.",
      icon: <SiApachekafka className="text-4xl text-primary" />,
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <SectionHeading title="Featured Projects" subtitle="What I Build" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 flex flex-col h-full group"
          >
            <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {project.icon}
            </div>
            <h3 className="text-2xl font-bold font-display mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold px-2 py-1 bg-primary/5 text-primary rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="mt-6 pt-6 border-t border-dashed border-gray-200">
               <button className="text-primary font-semibold text-sm hover:underline">View Details →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HandcraftingSection() {
  return (
    <section id="handcrafting" className="section-padding">
       <div className="bg-gradient-to-br from-primary/5 to-purple-100/50 rounded-[3rem] p-10 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading title="Creative Side" subtitle="Hobbies" alignment="left" />
            <p className="text-lg text-muted-foreground mb-6">
              When I step away from code, I immerse myself in the world of handcrafting. 
              Creating tangible art allows me to express creativity in a different dimension, 
              focusing on texture, color, and intricate details.
            </p>
            <div className="flex items-center gap-4 text-primary font-medium">
               <FaPaintBrush />
               <span>Handmade Gifts & Decor</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
             <div className="relative w-full max-w-md aspect-[4/3] glass rounded-3xl p-4 rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
               <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                 {/* origami/crafts placeholder */}
                 <img 
                   src="https://images.unsplash.com/photo-1520699918507-6c3c322588a6?auto=format&fit=crop&w=800" 
                   alt="Handcrafting" 
                   className="w-full h-full object-cover" 
                 />
               </div>
               <div className="absolute -bottom-6 -right-6 glass w-32 h-32 rounded-full flex items-center justify-center animate-bounce duration-[3000ms]">
                 <span className="font-display font-bold text-primary">Passion</span>
               </div>
             </div>
          </div>
        </div>
       </div>
    </section>
  );
}

function ContactSection() {

  const form = useForm<any>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });


  return (
    <section id="contact" className="section-padding mb-20">
      <SectionHeading title="Get In Touch" subtitle="Contact Me" />
      
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">Let's talk about everything!</h3>
            <p className="text-muted-foreground mb-8">
              Whether you have a question, want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 </div>
                 <span className="text-foreground">+91 000 000 0000</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                 </div>
                 <span className="text-foreground">contact@ananya.dev</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <input 
                {...form.register("name")}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60"
              />
              {form.formState.errors.name && <span className="text-xs text-red-500 pl-1"></span>}
            </div>
            
             <div>
              <input 
                {...form.register("email")}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60"
              />
              {form.formState.errors.email && <span className="text-xs text-red-500 pl-1"></span>}
            </div>
            
             <div>
              <input 
                {...form.register("phone")}
                placeholder="Phone (Optional)"
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60"
              />
            </div>
            
             <div>
              <textarea 
                {...form.register("message")}
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60 resize-none"
              />
              {form.formState.errors.message && <span className="text-xs text-red-500 pl-1"></span>}
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// MAIN PAGE COMPONENT
// -----------------------------------------------------------------------------

export default function Home() {
  return (
    <div className="min-h-screen relative font-sans text-foreground selection:bg-primary/20">
      <Navigation />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <EducationSkillsSection />
        <ProjectsSection />
        <HandcraftingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
