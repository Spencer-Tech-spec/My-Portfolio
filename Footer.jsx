import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Github size={20} />, url: "https://github.com", label: "GitHub" },
        { icon: <Linkedin size={20} />, url: "https://linkedin.com", label: "LinkedIn" },
        { icon: <Twitter size={20} />, url: "https://twitter.com", label: "Twitter" },
        { icon: <Mail size={20} />, url: "mailto:oscar@example.com", label: "Email" }
    ];

    return (
        <footer className="py-12 relative overflow-hidden bg-[#050505] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand/Logo */}
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-bold tracking-tighter mb-2">
                            <span className="text-primary">Dev</span>
                            <span className="text-white">Nesh</span>
                        </div>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Building innovative digital solutions with precision and passion. Based in Nairobi, Kenya.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="h-10 w-10 rounded-full glass border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/40 transition-colors"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Navigation Mini */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-600 uppercase tracking-[0.2em]">
                    <p>© {new Date().getFullYear()} OSCAR MUNENE. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-2">
                        <span>MADE WITH</span>
                        <Heart size={12} className="text-red-500 fill-red-500" />
                        <span>IN NAIROBI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
