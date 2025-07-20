'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Zap, Linkedin, Twitter, Github } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'AI Strategy & Planning', href: '#services' },
    { name: 'Workflow Implementation', href: '#services' },
    { name: 'Performance Optimization', href: '#services' },
    { name: 'Team Training', href: '#services' },
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'AI Readiness Assessment', href: '#contact' },
    { name: 'Implementation Guide', href: '#contact' },
    { name: 'ROI Calculator', href: '#contact' },
    { name: 'Blog', href: '#blog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 mb-12">
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold font-heading text-white">AI Operations Lead</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Weekly embedded AI consulting for growth-stage companies. We don&apos;t just strategize—we implement AI workflows that drive real business results.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">hello@ai-operations-lead.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div variants={fadeInUp} className="border-t border-slate-700 pt-8 mb-8">
            <div className="max-w-md">
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-slate-400 text-sm mb-4">
                Get the latest AI implementation strategies and case studies delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-medium hover:shadow-lg transition-shadow duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div variants={fadeInUp} className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-slate-400 text-sm">
                © 2024 AI Operations Lead. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => scrollToSection(social.href)}
                    className="w-8 h-8 bg-slate-800 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-lg flex items-center justify-center transition-all duration-200 group"
                  >
                    <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </button>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-4">
                {footerLinks.legal.map((link, index) => (
                  <span key={link.name} className="flex items-center gap-4">
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                    {index < footerLinks.legal.length - 1 && (
                      <span className="text-slate-600">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}