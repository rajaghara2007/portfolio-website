import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Code2,
  Twitter,
  Youtube,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldAlert,
  Clock,
  Radio
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TacticalButton from '../components/TacticalButton';
import { socialLinks } from '../data/socialLinks';

const THROTTLE_SECONDS = 30;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [cooldown, setCooldown] = useState(0);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Subject line is required (at least 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check (anti-bot)
    if (honeypot) {
      console.warn('Bot submission blocked via honeypot.');
      setStatus('success');
      return;
    }

    // Rate limit / Throttle check
    const lastSent = localStorage.getItem('last_contact_sent');
    const now = Date.now();
    if (lastSent && now - parseInt(lastSent, 10) < THROTTLE_SECONDS * 1000) {
      const remaining = Math.ceil(
        (THROTTLE_SECONDS * 1000 - (now - parseInt(lastSent, 10))) / 1000
      );
      setCooldown(remaining);
      setErrorMessage(`Please wait ${remaining}s before sending another transmission.`);
      setStatus('error');
      return;
    }

    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS keys are configured
    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        setStatus('error');
        setErrorMessage(
          'EmailJS credentials are not yet configured in your .env file. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.'
        );
      }, 600);
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

      localStorage.setItem('last_contact_sent', Date.now().toString());
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error('EmailJS transmission failed:', err);
      setStatus('error');
      setErrorMessage(
        err?.text || 'Failed to send message. Please reach out directly via email.'
      );
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="// 09_BAT_SIGNAL"
          title="Encrypted Communications"
          subtitle="Direct transmission channel for engineering inquiries, security architecture, and technical roles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Hub */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel-glow bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-amber-500/20 space-y-4 tactical-bracket">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs">
                <Radio className="w-4 h-4 animate-pulse" />
                <span>SECURE DISPATCH FREQUENCY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Initiate encrypted transmission.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have an inquiry regarding AegisLens vulnerability orchestration, a software engineering role, or security architecture, dispatch a packet directly.
              </p>

              {socialLinks.email.address && (
                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-500 block mb-1">
                    Direct Channel
                  </span>
                  <a
                    href={`mailto:${socialLinks.email.address}`}
                    className="text-base font-mono font-medium text-amber-400 hover:text-white transition-colors"
                  >
                    {socialLinks.email.address}
                  </a>
                </div>
              )}
            </div>

            {/* Social Hub Cards */}
            <div className="glass-panel-subtle bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Targeted Profiles // WayneTech Uplinks
              </span>

              <div className="space-y-2.5">
                {/* Verified GitHub */}
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-200 transition-all active:scale-98 hover:shadow-bat-gold"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-sm font-semibold">GitHub</div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {socialLinks.github.handle}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    Verified Link
                  </span>
                </a>

                {/* LinkedIn Placeholder */}
                {socialLinks.linkedin.url ? (
                  <a
                    href={socialLinks.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 text-slate-200"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-amber-400" />
                      <div className="text-sm font-semibold">LinkedIn</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400">
                      Active
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-dashed border-slate-800 text-slate-500 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-slate-600" />
                      <span>LinkedIn: [Add in src/data/socialLinks.js]</span>
                    </div>
                  </div>
                )}

                {/* LeetCode Placeholder */}
                {socialLinks.leetcode.url ? (
                  <a
                    href={socialLinks.leetcode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 text-slate-200"
                  >
                    <div className="flex items-center gap-3">
                      <Code2 className="w-4 h-4 text-amber-400" />
                      <div className="text-sm font-semibold">LeetCode</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-dashed border-slate-800 text-slate-500 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-4 h-4 text-slate-600" />
                      <span>LeetCode: [Add in src/data/socialLinks.js]</span>
                    </div>
                  </div>
                )}

                {/* X / Twitter Placeholder */}
                {socialLinks.x.url ? (
                  <a
                    href={socialLinks.x.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 text-slate-200"
                  >
                    <div className="flex items-center gap-3">
                      <Twitter className="w-4 h-4 text-amber-400" />
                      <div className="text-sm font-semibold">X / Twitter</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-dashed border-slate-800 text-slate-500 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <Twitter className="w-4 h-4 text-slate-600" />
                      <span>X / Twitter: [Add in src/data/socialLinks.js]</span>
                    </div>
                  </div>
                )}

                {/* YouTube Placeholder */}
                {socialLinks.youtube.url ? (
                  <a
                    href={socialLinks.youtube.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 text-slate-200"
                  >
                    <div className="flex items-center gap-3">
                      <Youtube className="w-4 h-4 text-amber-400" />
                      <div className="text-sm font-semibold">YouTube</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-dashed border-slate-800 text-slate-500 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <Youtube className="w-4 h-4 text-slate-600" />
                      <span>YouTube: [Add in src/data/socialLinks.js]</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel-glow bg-slate-950/95 rounded-2xl p-6 sm:p-8 border border-amber-500/25 shadow-2xl tactical-bracket"
          >
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                Transmit Packet to Batcave
              </h3>
              <p className="text-xs text-amber-400/90 font-mono">
                Routed through EmailJS encrypted transmission protocol.
              </p>
            </div>

            {/* Success Banner */}
            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/50 text-emerald-300 text-sm flex items-start gap-3 mb-6">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block">Packet Transmitted Successfully!</strong>
                  Transmission acknowledged. Raj will respond to your frequency shortly.
                </div>
              </div>
            )}

            {/* Error Banner */}
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/50 text-red-300 text-sm flex items-start gap-3 mb-6">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block">Transmission Anomaly</strong>
                  {errorMessage}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-spam Honeypot field */}
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

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Operative Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Bruce Wayne"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500 text-white text-sm outline-none transition-all placeholder:text-slate-600 focus:ring-1 focus:ring-amber-500"
                  />
                  {errors.name && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    Transmission Frequency (Email) *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. bwayne@wayneenterprises.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500 text-white text-sm outline-none transition-all placeholder:text-slate-600 focus:ring-1 focus:ring-amber-500"
                  />
                  {errors.email && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  Objective / Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Full Stack Engineering Contract / AegisLens Discussion"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500 text-white text-sm outline-none transition-all placeholder:text-slate-600 focus:ring-1 focus:ring-amber-500"
                />
                {errors.subject && (
                  <span className="text-[11px] font-mono text-red-400 mt-1 block">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  Payload / Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Specify system parameters, project scope, or opportunity details..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-500 text-white text-sm outline-none transition-all placeholder:text-slate-600 resize-none focus:ring-1 focus:ring-amber-500"
                />
                {errors.message && (
                  <span className="text-[11px] font-mono text-red-400 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button with TacticalButton */}
              <div className="pt-2">
                <TacticalButton
                  type="submit"
                  variant="gold"
                  icon={status === 'submitting' ? Loader2 : Send}
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 text-sm"
                >
                  {status === 'submitting'
                    ? 'Broadcasting Encrypted Packet...'
                    : 'Dispatch Encrypted Packet'}
                </TacticalButton>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2">
                <span className="flex items-center gap-1 text-amber-500/80">
                  <ShieldAlert className="w-3 h-3" />
                  <span>Honeypot protocol active</span>
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3 h-3" />
                  <span>Cooldown rate-limit (30s)</span>
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
