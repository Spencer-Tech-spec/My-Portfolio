import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-2xl' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter cursor-pointer"
        >
          <span className="text-primary">Dev</span>
          <span className="text-white">Nesh</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.target}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <motion.span whileHover={{ y: -2 }} className="inline-block">
                {link.name}
              </motion.span>
            </Link>
          ))}
          <a
            href="/resume.jpg"
            download="Oscar_Munene_Resume.jpg"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-white text-sm font-semibold rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all cursor-pointer"
            >
              Download CV
            </motion.button>
          </a>
        </div>


        {/* Mobile Toggle */}
        <div className="md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: nav ? 1 : 0, height: nav ? '100vh' : 0 }}
        className="md:hidden glass absolute top-full left-0 w-full overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-32">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.target}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setNav(false)}
              className="text-2xl font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
