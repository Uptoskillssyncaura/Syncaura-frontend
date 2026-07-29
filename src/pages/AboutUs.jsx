import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Zap, Users, Rocket, Target, Calendar, ArrowRight, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import CTABanner from '../components/home/CTABanner';

// Glowing blur effect background
const GlowingOrb = ({ className, color, delay = 0, duration = 8 }) => (
  <motion.div
    className={`absolute rounded-full blur-[120px] pointer-events-none opacity-20 dark:opacity-30 ${className}`}
    style={{ backgroundColor: color }}
    animate={{
      scale: [1, 1.15, 1],
      y: [0, -25, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// Tech Grid Lines background
const GridLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 dark:opacity-20 z-0">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="aboutGrid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" className="text-gray-400 dark:text-gray-600" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#aboutGrid)" />
    </svg>
  </div>
);

// Card for core values
const ValueCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ translateY: -6, scale: 1.01 }}
    style={{
      backgroundColor: 'var(--card-bg)',
      borderColor: 'var(--border-color)',
    }}
    className="p-6 md:p-8 rounded-3xl border flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
  >
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.07] pointer-events-none transition-opacity duration-300" 
      style={{ background: 'linear-gradient(135deg, var(--accent-color), transparent)' }} 
    />
    <div 
      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
      style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
    >
      <Icon size={22} />
    </div>
    <h3 className="text-lg md:text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h3>
    <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{description}</p>
  </motion.div>
);

// Timeline Item
const TimelineItem = ({ year, title, description, icon: Icon, isLeft, index }) => (
  <div className={`flex flex-col md:flex-row items-center w-full my-6 md:my-10 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
    {/* Left/Right Side Content */}
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="w-full md:w-1/2 flex justify-center px-4 md:px-8"
    >
      <div 
        className="p-6 md:p-8 rounded-3xl border w-full max-w-md shadow-sm relative overflow-hidden"
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--border-color)',
        }}
      >
        <span 
          className="text-3xl md:text-4xl font-black text-transparent bg-clip-text mb-2 block"
          style={{ backgroundImage: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
        >
          {year}
        </span>
        <h4 className="text-lg md:text-xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>{title}</h4>
        <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{description}</p>
      </div>
    </motion.div>

    {/* Timeline Node */}
    <div className="relative flex items-center justify-center my-4 md:my-0">
      <div className="h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 absolute pointer-events-none hidden md:block" />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, delay: index * 0.15 }}
        className="w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 text-white shadow-lg"
        style={{
          backgroundColor: 'var(--bg-primary)',
          borderColor: 'var(--accent-color)',
          background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
        }}
      >
        <Icon size={18} />
      </motion.div>
    </div>

    {/* Empty Spacer Column for Desktop */}
    <div className="hidden md:block w-1/2" />
  </div>
);

// Team Card
const TeamCard = ({ name, role, init, color, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    style={{
      backgroundColor: 'var(--card-bg)',
      borderColor: 'var(--border-color)',
    }}
    className="p-6 md:p-8 rounded-3xl border flex flex-col items-center text-center gap-4 group hover:shadow-xl transition-all duration-300"
  >
    {/* Profile Avatar Graphic */}
    <div 
      className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-black text-white bg-gradient-to-tr ${color} shadow-lg relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
    >
      {init}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="space-y-1">
      <h4 className="text-lg md:text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{name}</h4>
      <p className="text-sm font-semibold text-blue-600 dark:text-[#4FE6E6]">{role}</p>
    </div>

    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
      Dedicated to crafting clean, high-performance web systems and enabling productive workspaces.
    </p>

    {/* Social Links */}
    <div className="flex items-center gap-3 pt-2">
      {[
        { icon: Github, link: "#" },
        { icon: Linkedin, link: "#" },
        { icon: Twitter, link: "#" }
      ].map((social, i) => (
        <a 
          key={i} 
          href={social.link} 
          className="text-gray-400 hover:text-indigo-500 dark:hover:text-[#4FE6E6] transition-colors"
        >
          <social.icon size={16} />
        </a>
      ))}
    </div>
  </motion.div>
);

const AboutUs = () => {
  return (
    <div 
      className="min-h-screen transition-colors duration-500 relative overflow-hidden flex flex-col"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <Navbar />

      {/* ── BACKGROUND ORBS ── */}
      <GlowingOrb className="top-24 left-1/4 w-[400px] h-[400px]" color="#3b82f6" delay={0} />
      <GlowingOrb className="top-1/3 right-1/4 w-[500px] h-[500px]" color="#8b5cf6" delay={1.5} />
      <GlowingOrb className="bottom-1/4 left-10 w-[450px] h-[450px]" color="#06b6d4" delay={3} />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full py-20 md:py-32 z-10 flex flex-col items-center justify-center">
        <GridLines />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-semibold tracking-wider text-blue-600 dark:text-[#4FE6E6] uppercase"
          >
            <Rocket size={12} />
            Our Story
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
          >
            Connecting teams,{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)' }}
            >
              elevating work.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            At Syncaura, we are building the ultimate collaboration workspace where projects, chats, meetings, and performance insights converge. Say goodbye to app fatigue and hello to complete alignment.
          </motion.p>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="relative w-full py-12 md:py-20 z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
            className="p-8 md:p-10 rounded-3xl border shadow-sm relative overflow-hidden flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-blue-500 bg-blue-500/10">
              <Target size={24} />
            </div>
            <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text-primary)' }}>Our Mission</h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              To simplify workplace complexity and empower modern organizations to achieve alignment, transparency, and peak productivity. We believe that when collaboration is frictionless, teams can accomplish their most ambitious goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
            className="p-8 md:p-10 rounded-3xl border shadow-sm relative overflow-hidden flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-indigo-500 bg-indigo-500/10">
              <Shield size={24} />
            </div>
            <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text-primary)' }}>Our Vision</h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              To become the standard digital headquarters for teams worldwide, seamlessly bridging the gap between deep focus work and real-time coordination. We aim to design an ecosystem that adapts to the way teams naturally work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="relative w-full py-16 md:py-24 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Values That{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' }}
              >
                Drive Us
              </span>
            </h2>
            <p className="text-sm md:text-base mt-3 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              The principles behind how we build our product, serve our customers, and work together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon={Cpu}
              title="Relentless Innovation"
              description="We constantly challenge status quos and design features that simplify the future of work."
              index={0}
            />
            <ValueCard
              icon={Shield}
              title="Security First"
              description="Enterprise-grade privacy is built into our platform's foundations, protecting your conversations and assets."
              index={1}
            />
            <ValueCard
              icon={Zap}
              title="Extreme Usability"
              description="A collaboration platform shouldn't feel heavy. We design intuitive, fast-loading interfaces."
              index={2}
            />
            <ValueCard
              icon={Users}
              title="Team Centricity"
              description="We shape our roadmap and interface improvements entirely around the feedback of our users."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* ── TIMELINE / MILESTONES ── */}
      <section className="relative w-full py-16 md:py-24 z-10 border-t border-b" style={{ borderColor: 'var(--border-color)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Our Milestones</h2>
            <p className="text-sm md:text-base mt-3 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A look at how we started and how fast we are moving.
            </p>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute h-full w-0.5 bg-gray-200 dark:bg-gray-800" />

            <TimelineItem
              year="2024"
              title="The Inception"
              description="Syncaura was founded with the vision of consolidating fragmented workplace tools. We designed the core architecture of our unified platform, bringing tasks, chats, and meetings into a single cohesive, high-performance digital workspace."
              icon={Rocket}
              isLeft={true}
              index={0}
            />
            <TimelineItem
              year="2025"
              title="Beta Release"
              description="We launched our private beta to select organizations, validating the unified dashboard concept. The feedback gathered allowed us to optimize performance, refine the UX, and register our first 10,000 active users."
              icon={Calendar}
              isLeft={false}
              index={1}
            />
            <TimelineItem
              year="2026"
              title="Public Launch"
              description="Syncaura officially launched to the public, introducing real-time workspace sync, interactive project boards, and high-fidelity video meetings to modern teams globally."
              icon={Zap}
              isLeft={true}
              index={2}
            />
            <TimelineItem
              year="2027"
              title="AI Collaboration Suite"
              description="We introduced native AI integration, enabling automated meeting transcript summaries, intelligent action item generation, and predictive scheduling to eliminate routine administrative friction."
              icon={Cpu}
              isLeft={false}
              index={3}
            />
            <TimelineItem
              year="2028"
              title="Global Expansion"
              description="Expanding our server infrastructure to support multi-region enterprise deployments, local compliance standards, and seamless localized experiences for organizations in over 100 countries."
              icon={Globe}
              isLeft={true}
              index={4}
            />
          </div>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="relative w-full py-16 md:py-24 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Meet the{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)' }}
              >
                Dream Team
              </span>
            </h2>
            <p className="text-sm md:text-base mt-3 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              The minds behind the development, vision, and scale of Syncaura.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamCard name="Alex Rivers" role="Co-Founder & CEO" init="AR" color="from-blue-500 to-indigo-600" index={0} />
            <TeamCard name="Dr. Elena Vance" role="CTO" init="EV" color="from-cyan-400 to-blue-500" index={1} />
            <TeamCard name="Marcus Chen" role="Head of Product" init="MC" color="from-purple-500 to-pink-500" index={2} />
            <TeamCard name="Sarah Jenkins" role="Lead System Engineer" init="SJ" color="from-teal-400 to-emerald-500" index={3} />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner />

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
};

export default AboutUs;
