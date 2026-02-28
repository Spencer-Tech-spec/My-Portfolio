import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "React Native (Expo)", "Tailwind CSS", "JavaScript", "Framer Motion"]
        },
        {
            title: "Backend",
            skills: ["FastAPI", "Python", "PostgreSQL", "Supabase", "JWT Auth", "RESTful APIs"]
        },
        {
            title: "Integrations",
            skills: ["M-Pesa Daraja API", "STK Push", "Payment Callbacks", "Google Auth"]
        },
        {
            title: "Deployment & Tools",
            skills: ["Git / GitHub", "Vercel", "Linux Servers", "Docker", "Postman"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section id="skills" className="py-24 bg-[#0d0d0d]">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-black mb-4 tracking-tight">Technical <span className="text-gradient">Arsenal</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive list of technologies I use to bring complex digital applications to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="p-8 glass rounded-3xl text-left hover:border-primary/30 transition-all duration-300 group"
                        >
                            <h3 className="text-sm font-black text-primary mb-6 uppercase tracking-widest">{cat.title}</h3>
                            <ul className="space-y-4">
                                {cat.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-gray-300">
                                        <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                                        <span className="text-sm font-medium transition-colors group-hover:text-white">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
