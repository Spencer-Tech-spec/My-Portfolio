import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Database, Smartphone } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-mesh">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span>AVAILABLE FOR HIRE</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
                        Building Digital <br />
                        <span className="text-gradient">Experiences</span> With <br />
                        Precision.
                    </h1>

                    <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
                        I'm <span className="text-white font-semibold">Dev Nesh</span>, a Backend & Frontend Developer based in Nairobi, Kenya.
                        I specialize in building scalable systems with FastAPI, React, and seamless M-Pesa integrations.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        {[
                            { icon: <Terminal size={14} />, label: 'FastAPI' },
                            { icon: <Smartphone size={14} />, label: 'React' },
                            { icon: <Database size={14} />, label: 'PostgreSQL' },
                            { icon: <ArrowRight size={14} />, label: 'MPesa' },
                        ].map((tech, i) => (
                            <div key={i} className="flex items-center space-x-2 px-4 py-2 glass rounded-lg text-sm font-medium">
                                {tech.icon}
                                <span>{tech.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="projects" smooth={true} duration={500} offset={-80}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center space-x-3 shadow-xl shadow-primary/20 hover:bg-primary/90 w-full sm:w-auto"
                            >
                                <span>View Projects</span>
                                <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={-80}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 glass text-white font-bold rounded-xl flex items-center justify-center space-x-3 w-full sm:w-auto hover:bg-white/10"
                            >
                                Contact Me
                            </motion.button>
                        </Link>
                        <a
                            href="/resume.jpg"
                            download="Oscar_Munene_Resume.jpg"
                            className="w-full sm:w-auto"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-secondary/20 text-white font-bold rounded-xl flex items-center justify-center space-x-3 w-full sm:w-auto border border-secondary/30 hover:bg-secondary/30 transition-all"
                            >
                                Download CV
                            </motion.button>
                        </a>
                    </div>

                </motion.div>

                {/* Right Content - Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
                    <div className="relative glass p-8 rounded-3xl border border-white/10 shadow-3xl">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                        <pre className="text-xs md:text-sm font-mono text-gray-300 leading-relaxed">
                            <code>{`const developer = {
  name: "Dev Nesh",
  role: "Fullstack Engineer",
  location: "Nairobi, Kenya",
  skills: ["FastAPI", "React", "Supabase"],
  passion: "Scalable Systems",
  motto: "Code that moves business forward",
  status: "Ready to build your next big idea"
};

function buildImpact(developer) {
  return developer.skills.map(skill => 
    innovate(skill, developer.passion)
  );
}`}</code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
