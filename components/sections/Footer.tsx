'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/aman-yadav-ds', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/amandeep-yadav-2251b325a', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:ay2728850@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-slate-800/50">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Amandeep Yadav
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Data Scientist & ML Engineer passionate about building intelligent systems and
              extracting insights from data.
            </p>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> and lots of
              coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
