import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, MapPin, ExternalLink, Terminal, Shield, Cpu, ChevronRight, Download, Server, Code, Database, Linkedin, BookText } from 'lucide-react';
import { personalInfo, experiences, projects, certifications, skills } from './portfolioData';

// Reusable Section Component
const Section = ({ title, children, id }) => (
  <section id={id} className="py-20 px-6 max-w-6xl mx-auto">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold mb-12 flex items-center gap-3 text-cyan-400"
    >
      <span className="text-slate-500">
        0{id === "about" ? 1 : id === "skills" ? 2 : id === "experience" ? 3 : id === "projects" ? 4 : 5}.
      </span> 
      {title}
      <div className="h-px bg-slate-700 flex-grow ml-4"></div>
    </motion.h2>
    {children}
  </section>
);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 selection:bg-cyan-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO UPDATED TO 'PORTFOLIO' */}
          <div className="text-cyan-400 font-bold text-xl tracking-tighter border border-cyan-400/30 p-1 px-3 rounded hover:bg-cyan-400/10 transition-colors cursor-pointer">
            Portfolio
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-cyan-400 font-mono mb-4"
        >
          Hi, my name is
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight"
        >
          {personalInfo.name}.
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-slate-400 mb-8"
        >
          {personalInfo.title}.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl text-lg text-slate-400 leading-relaxed mb-12"
        >
          {personalInfo.about}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded hover:bg-cyan-400/10 transition-all duration-300 font-mono">
            Check out my work
          </a>
          
          {/* NEW: Resume Download Button */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-600/10 text-cyan-400 px-8 py-4 rounded hover:bg-cyan-600/20 transition-all duration-300 font-mono"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>
      </header>

      {/* NEW: Tech Stack Section */}
      <Section id="skills" title="Technical Skills">
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="bg-slate-800/50 p-6 rounded border border-slate-700 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                {index === 0 ? <Code className="text-cyan-400"/> : index === 1 ? <Shield className="text-cyan-400"/> : <Server className="text-cyan-400"/>}
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span key={item} className="text-sm font-mono text-cyan-400/90 bg-cyan-900/20 px-3 py-1 rounded border border-cyan-900/50">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Where I've Worked">
        <div className="space-y-12 border-l border-slate-700 ml-3 pl-8 relative">
          {experiences.map((job) => (
            <div key={job.id} className="relative">
              <span className="absolute -left-[37px] top-1 bg-slate-900 border border-cyan-400 w-4 h-4 rounded-full"></span>
              <h3 className="text-xl font-bold text-slate-100">{job.role} <span className="text-cyan-400">@ {job.company}</span></h3>
              <p className="font-mono text-sm text-slate-500 mb-4">{job.period}</p>
              <p className="text-slate-400 max-w-2xl">{job.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section (With Fixes) */}
      <Section id="projects" title="Something I've Built">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div 
              whileHover={project.link && project.link !== '#' ? { y: -5 } : {}}
              key={project.id} 
              className={`bg-slate-800/50 p-6 rounded border border-transparent transition-all group relative
                ${project.link && project.link !== '#' 
                  ? 'hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 cursor-pointer' 
                  : 'cursor-default border-slate-800'}`}
            >
              <div className="flex justify-between items-start mb-6">
                <Shield className="w-10 h-10 text-cyan-400" />
                {project.link && project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 z-10">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-cyan-400/80 bg-cyan-900/20 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Make whole card clickable only if link exists */}
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-0"></a>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications Section (Vertical Layout) */}
      <Section id="certs" title="Certifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={index} 
              className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all flex flex-col items-center text-center gap-4 group"
            >
              <h4 className="font-bold text-slate-100 text-lg h-12 flex items-center justify-center group-hover:text-cyan-400 transition-colors">
                {cert.name}
              </h4>
              <div className="w-full aspect-video bg-slate-900 rounded-lg overflow-hidden border border-slate-700 relative shadow-lg">
                <img 
                  src={cert.image} 
                  alt={cert.issuer} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                <span className="text-cyan-400 font-medium">{cert.issuer}</span>
                <span className="text-slate-600">•</span>
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Footer / Contact */}
      {/* Footer / Contact */}
      <footer id="contact" className="py-20 text-center">
        <h2 className="text-4xl font-bold text-slate-100 mb-6">Get In Touch</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-10">
          I'm currently looking for new opportunities in Cloud Security and Software Engineering. Whether you have a question or just want to say hi, my inbox is open!
        </p>
        <a href={`mailto:${personalInfo.email}`} className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded hover:bg-cyan-400/10 transition-all">
          Say Hello
        </a>
        
        {/* Social Links Container */}
        <div className="mt-20 flex justify-center gap-8">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href={personalInfo.medium} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <BookText className="w-8 h-8" /> {/* Using BookText icon for Medium/Blog */}
          </a>
        </div>

        <p className="text-slate-700 text-xs mt-8">Designed & Built by Kent Michael Antony</p>
      </footer>
    </div>
  );
};

export default App;