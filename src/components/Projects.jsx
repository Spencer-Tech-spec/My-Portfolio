import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Layout, Smartphone, ShieldCheck, Globe } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "ISP Management System",
            desc: "Full-scale system for managing subscribers, monitoring routers, and handling automated billing through M-Pesa integration.",
            tech: ["FastAPI", "React Native", "PostgreSQL"],
            icon: <Globe className="text-primary" size={20} />,
            link: "#",
            github: "#"
        },
        {
            title: "Router Management Backend",
            desc: "API-driven system focused on device monitoring, payment tracking, and automated provisioning via Supabase.",
            tech: ["Python", "Supabase", "FastAPI"],
            icon: <Database className="text-secondary" size={20} />,
            link: "#",
            github: "#"
        },
        {
            title: "Inventory Management",
            desc: "A backend-heavy API system for stock control, automated reporting, and multi-warehouse tracking.",
            tech: ["FastAPI", "PostgreSQL", "JWT"],
            icon: <ShieldCheck className="text-primary" size={20} />,
            link: "#",
            github: "#"
        },
        {
            title: "Real Estate Management",
            desc: "Property listing platform with agent dashboards, client inquiry systems, and admin control panels.",
            tech: ["React", "Supabase", "Tailwind"],
            icon: <Layout className="text-secondary" size={20} />,
            link: "#",
            github: "#"
        },
        {
            title: "School Management System",
            desc: "Educational portal for student registration, fee tracking with statements, and academic reports.",
            tech: ["FastAPI", "React", "PostgreSQL"],
            icon: <Globe className="text-primary" size={20} />,
            link: "#",
            github: "#"
        },
        {
            title: "Hotel Management System",
            desc: "Booking engine and reservation system with integrated payment handling and administrative analytics.",
            tech: ["React Native", "FastAPI", "M-Pesa"],
            icon: <Smartphone className="text-secondary" size={20} />,
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-gradient-mesh">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Practical applications built to solve real-world problems. Most systems integrated with backend automation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/50 group transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Decorative Gradient Overlay */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl group-hover:bg-primary/20 transition-all"></div>

                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-primary/10 transition-colors">
                                    {project.icon}
                                </div>
                                <div className="flex space-x-2">
                                    <a href={project.github} className="text-gray-500 hover:text-white transition-colors">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.link} className="text-gray-500 hover:text-white transition-colors">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-white/5 group-hover:text-primary transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
