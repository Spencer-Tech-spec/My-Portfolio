import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe, Cpu } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
    const highlights = [
        {
            icon: <Server className="text-primary" size={28} />,
            title: "Backend Mastery",
            description: "Specializing in scalable backend systems using FastAPI and Python. Building robust architectures from scratch."
        },
        {
            icon: <Globe className="text-secondary" size={28} />,
            title: "API Integration",
            description: "Expert in REST APIs with authentication, database integration (PostgreSQL/Supabase), and M-Pesa Daraja STK Push."
        },
        {
            icon: <Cpu className="text-primary" size={28} />,
            title: "Business Automation",
            description: "Designing ISP management systems and automated tools that streamline operations and increase efficiency."
        },
        {
            icon: <Code2 className="text-secondary" size={28} />,
            title: "Fullstack Versatility",
            description: "Modern frontend development with React and cross-platform mobile apps using React Native."
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Image/Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent group-hover:from-primary/40 transition-colors duration-500"></div>
                            <img
                                src={profileImg}
                                alt="Dev Nesh"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-2xl border border-white/10"
                        >
                            <div className="text-4xl font-black text-primary mb-1">Kenya</div>
                            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Base of Operations</div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-8 tracking-tight"
                        >
                            Transforming Ideas Into <br />
                            <span className="text-gradient">Robust Solutions.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg leading-relaxed mb-12"
                        >
                            I am a professional software developer based in Nairobi, Kenya, with a deep focus on creating high-performance digital ecosystems.
                            My expertise lies at the intersection of powerful backend logic and sleek frontend interfaces. Whether it's complex ISP management
                            or automated real estate platforms, I build with scalability and security in mind.
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="p-6 glass-card rounded-2xl"
                                >
                                    <div className="mb-4">{item.icon}</div>
                                    <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

