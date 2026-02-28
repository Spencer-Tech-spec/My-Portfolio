import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Let's <span className="text-gradient">Connect.</span></h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-md">
                            Have a project in mind or looking to hire a fullstack developer? I'm always open to discussing new opportunities.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: <Mail className="text-primary" />,
                                    label: "Email",
                                    value: "muneneoscar35@gmail.com",
                                    links: [{ label: "muneneoscar35@gmail.com", url: "mailto:muneneoscar35@gmail.com" }]
                                },
                                {
                                    icon: <MessageCircle className="text-secondary" />,
                                    label: "WhatsApp",
                                    value: "0706656544 / 0793612801",
                                    links: [
                                        { label: "0706656544", url: "https://wa.me/254706656544" },
                                        { label: "0793612801", url: "https://wa.me/254793612801" }
                                    ]
                                },
                                {
                                    icon: <Github className="text-primary" />,
                                    label: "GitHub",
                                    value: "github.com/devnesh",
                                    links: [{ label: "github.com/devnesh", url: "https://github.com/devnesh" }]
                                },
                                {
                                    icon: <Linkedin className="text-secondary" />,
                                    label: "LinkedIn",
                                    value: "linkedin.com/in/devnesh",
                                    links: [{ label: "Connect on LinkedIn", url: "#" }]
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center space-x-4 glass p-4 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
                                >
                                    <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{item.label}</div>
                                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                                            {item.links.map((link, linkIdx) => (
                                                <a
                                                    key={linkIdx}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white font-medium hover:text-primary transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    </motion.div>

                    {/* Form UI */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-3xl relative"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] -z-10"></div>

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder=""
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Topic</label>
                                <input
                                    type="text"
                                    placeholder="Project Collaboration"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="I'd like to talk about..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-all resize-none"
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center space-x-3 shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all font-sans"
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>

            {/* Footer Branding */}
            <div className="container mx-auto px-6 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-50 text-xs uppercase tracking-widest font-bold">
                <div>© 2026 Dev Nesh Portofolio. All Rights Reserved.</div>
                <div className="mt-4 md:mt-0 italic">Designed for Impact. Built for Scale.</div>
            </div>
        </section>
    );
};

export default Contact;
