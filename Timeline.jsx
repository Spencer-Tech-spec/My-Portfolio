import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Timeline = () => {
    const events = [
        {
            year: "2023 - Present",
            title: "Fullstack Software Developer",
            location: "Nairobi, Kenya",
            desc: "Architecting scalable backend APIs with FastAPI and crafting responsive frontends with React. Specialized in M-Pesa integration and business automation.",
            icon: <Briefcase size={20} />,
            category: "Work"
        }
    ];

    return (
        <section id="timeline" className="py-24 relative bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Professional <span className="text-gradient">Timeline</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My journey from academic foundations to building complex digital solutions.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent"></div>

                    <div className="space-y-12">
                        {events.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className={`relative flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                            >
                                <div className="hidden md:block w-5/12"></div>

                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full glass border border-primary/30 z-10 bg-[#0a0a0a]">
                                    <div className="text-primary">{event.icon}</div>
                                </div>

                                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="glass-card p-6 rounded-3xl border border-white/5 hover:border-primary/20 transition-all shadow-xl"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-black text-primary uppercase tracking-widest">{event.category}</span>
                                            <span className="text-xs text-gray-500 font-bold">{event.year}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                                        <p className="text-xs text-secondary/80 font-medium mb-4">{event.location}</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {event.desc}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
