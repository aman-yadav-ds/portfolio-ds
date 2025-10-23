'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Briefcase, value: 6, suffix: '+', label: 'Months Experience' },
  { icon: Award, value: 10, suffix: '+', label: 'Projects Completed' },
  { icon: GraduationCap, value: 8, suffix: '+', label: 'Certifications' },
];

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.stat-card'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="container mx-auto px-4 relative z-10 ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-b from-[#101648] to-[#0b1457] border border-slate-700 shadow-xl"
          >
            {/* Profile Photo */}
            <div className="relative w-40 h-40 rounded-full border-8 border-yellow-400 overflow-hidden mb-6 shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Profile photo"
                fill
                className="object-cover"
              />
            </div>

            {/* Role */}
            <h2 className="text-2xl font-bold text-white mb-3">DATA SCIENTIST</h2>

            {/* Location */}
            <div className="flex items-center text-slate-300 mb-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z" />
              </svg>
              Rudrapur, Uttarakhand
            </div>

            {/* Education */}
            <div className="flex items-center text-slate-300 mb-2 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.944C16.133 21.317 14.093 21.5 12 21.5s-4.133-.183-6-.556A12.083 12.083 0 017.84 10.578L12 14z" />
              </svg>
              CSE UG @ Kumaun University
            </div>

            {/* Tagline */}
            <div className="flex items-center text-slate-300 mb-6 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m9 3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Data Analysis &amp; Model Building
            </div>

            {/* Download Resume Button */}
            <a
              href="/Amandeep_Yadav_Resume.pdf"  // 👉 Place your resume in /public/Aman_Yadav_Resume.pdf
              download
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-200">
              Turning Data Into Actionable Insights
            </h3>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m a passionate Data Scientist and ML Engineer with expertise in building end-to-end
              machine learning solutions. My journey in data science started with a fascination for
              patterns and has evolved into a career focused on creating intelligent systems that
              drive real business value.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I specialize in deep learning, natural language processing, computer vision, and
              MLOps. I love working on challenging problems that require innovative solutions and
              have a measurable impact.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'Docker', 'GCP'].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card group relative p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-center">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-cyan-400" />
                <div className="text-3xl font-bold text-slate-200 mb-2">
                  {inView && (
                    <CountUp end={stat.value} duration={2.5} delay={0.5} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
