import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Code2,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { socialLinks } from '../data/socialLinks';
import { aboutData } from '../data/about';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Subject is required (at least 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (honeypot) {
      setStatus('success');
      return;
    }

    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        setStatus('error');
        setErrorMessage(
          'EmailJS credentials are not yet configured in .env. Please configure VITE_EMAILJS_* keys.'
        );
      }, 500);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error('EmailJS transmission error:', err);
      setStatus('error');
      setErrorMessage(
        err?.text || 'Failed to send message. Please send an email directly.'
      );
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 overflow-hidden">
      
      {/* 1. Cosmic Background Vector Graphic Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none -z-20 opacity-60 mix-blend-screen"
        style={{ backgroundImage: "url('/images/cosmic-bg.svg')" }}
      />

      {/* 2. Cyber Matrix Grid Overlay */}
      <div className="absolute inset-0 cosmic-cyber-grid opacity-70 pointer-events-none -z-10" />

      {/* 3. Deep Space Stars */}
      <div className="absolute inset-0 cosmic-stars opacity-40 pointer-events-none -z-10" />

      {/* 4. Layered Glowing Nebula Clouds */}
      <div className="absolute -top-12 left-1/3 w-[38rem] h-[38rem] bg-purple-600/18 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-20 w-[40rem] h-[40rem] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-[36rem] h-[36rem] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* 5. Cosmic Orbital Geometry in Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[52rem] h-[26rem] rounded-[100%] border border-purple-500/20 rotate-[-12deg] pointer-events-none -z-10 shadow-[0_0_35px_rgba(168,85,247,0.15)]" />
      <div className="absolute top-[37%] left-[48%] -translate-x-1/2 w-[56rem] h-[28rem] rounded-[100%] border border-cyan-400/15 rotate-[-15deg] pointer-events-none -z-10 shadow-[0_0_30px_rgba(0,245,255,0.1)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            badge="GET IN TOUCH"
            title="Contact &amp; Connect"
            subtitle="Interested in collaborating, hiring, or discussing software engineering opportunities? Reach out anytime."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="cosmic-card rounded-3xl p-6 sm:p-8 space-y-5 border border-purple-500/25 relative overflow-hidden group">
              {/* Subtle card top glowing light sheen */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-24 bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl pointer-events-none" />

              <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                Let's talk about building something extraordinary.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                I am actively seeking software engineering roles, full-stack internships, and high-impact development opportunities. Feel free to contact me via email or through my profiles below.
              </p>

              {/* Email Card */}
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                href={`mailto:${aboutData.email}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#090d24]/75 border border-purple-500/20 hover:border-purple-400 hover:bg-[#0e1436] transition-all group backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Address</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {aboutData.email}
                  </div>
                </div>
              </motion.a>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#090d24]/75 border border-purple-500/20 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(0,245,255,0.25)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {aboutData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Profiles Card */}
            <div className="cosmic-card rounded-3xl p-6 space-y-3 border border-purple-500/25">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-3">
                Professional Profiles
              </h4>

              <div className="space-y-2">
                <motion.a
                  whileHover={{ scale: 1.02, x: 4 }}
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#090d24]/65 hover:bg-[#0e1436] border border-purple-500/15 hover:border-purple-400 text-slate-300 hover:text-white transition-all backdrop-blur-md"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium">GitHub</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    {socialLinks.github.handle}
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </span>
                </motion.a>

                {socialLinks.linkedin.url && (
                  <motion.a
                    whileHover={{ scale: 1.02, x: 4 }}
                    href={socialLinks.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#090d24]/65 hover:bg-[#0e1436] border border-purple-500/15 hover:border-purple-400 text-slate-300 hover:text-white transition-all backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      {socialLinks.linkedin.handle}
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </span>
                  </motion.a>
                )}

                {socialLinks.leetcode.url && (
                  <motion.a
                    whileHover={{ scale: 1.02, x: 4 }}
                    href={socialLinks.leetcode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#090d24]/65 hover:bg-[#0e1436] border border-purple-500/15 hover:border-purple-400 text-slate-300 hover:text-white transition-all backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <Code2 className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-medium">LeetCode</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      {socialLinks.leetcode.handle}
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 cosmic-card rounded-3xl p-6 sm:p-8 space-y-6 border border-purple-500/25 relative overflow-hidden"
          >
            {/* Subtle card top glowing light sheen */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl pointer-events-none" />

            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 font-light">
                Fill in the details below and I will get back to you promptly.
              </p>
            </div>

            {status === 'success' && (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block">Message Sent!</strong>
                  Thank you for reaching out. I will respond to your inquiry as soon as possible.
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-200 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block">Failed to send</strong>
                  {errorMessage}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="_gotcha"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#090d24]/80 border border-purple-500/25 focus:border-purple-400 focus:bg-[#0e1436] text-white text-sm outline-none transition-all placeholder:text-slate-500"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. you@company.com"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#090d24]/80 border border-purple-500/25 focus:border-purple-400 focus:bg-[#0e1436] text-white text-sm outline-none transition-all placeholder:text-slate-500"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-slate-300 mb-1.5"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#090d24]/80 border border-purple-500/25 focus:border-purple-400 focus:bg-[#0e1436] text-white text-sm outline-none transition-all placeholder:text-slate-500"
                />
                {errors.subject && (
                  <span className="text-[11px] text-red-400 mt-1 block">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-300 mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#090d24]/80 border border-purple-500/25 focus:border-purple-400 focus:bg-[#0e1436] text-white text-sm outline-none transition-all placeholder:text-slate-500 resize-none"
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-neon-pill w-full py-3.5 rounded-full text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-cyan-500/25"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
