'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Code,
  Database,
  GitBranch,
  LineChart,
  Sparkles,
  Terminal,
  Layers,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    icon: Brain,
    title: 'Machine Learning',
    skills: [
      { name: 'Deep Learning', level: 95 },
      { name: 'NLP', level: 90 },
      { name: 'Computer Vision', level: 85 },
      { name: 'Reinforcement Learning', level: 75 },
    ],
  },
  {
    icon: Code,
    title: 'Programming',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'R', level: 70 },
      { name: 'SQL', level: 90 },
      { name: 'JavaScript', level: 75 },
    ],
  },
  {
    icon: Layers,
    title: 'Frameworks',
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 92 },
      { name: 'Scikit-learn', level: 95 },
      { name: 'Keras', level: 88 },
    ],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    skills: [
      { name: 'Apache Spark', level: 85 },
      { name: 'Airflow', level: 80 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    icon: GitBranch,
    title: 'MLOps',
    skills: [
      { name: 'MLflow', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 80 },
      { name: 'CI/CD', level: 85 },
    ],
  },
  {
    icon: LineChart,
    title: 'Visualization',
    skills: [
      { name: 'Matplotlib', level: 90 },
      { name: 'Plotly', level: 85 },
      { name: 'Seaborn', level: 90 },
      { name: 'Power BI', level: 75 },
    ],
  },
];

export function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const skillBars = sectionRef.current.querySelectorAll('.skill-bar');

      skillBars.forEach((bar) => {
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: bar.getAttribute('data-level') + '%',
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group relative p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-200">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 text-sm">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <div
                          className="skill-bar h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative"
                          data-level={skill.level}
                          style={{ width: '0%' }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
        >
          <div className="flex items-center gap-4 mb-4">
            <Sparkles className="text-cyan-400" size={32} />
            <h3 className="text-2xl font-bold text-slate-200">Core Competencies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'Statistical Analysis',
              'Model Deployment',
              'Data Preprocessing',
              'Feature Engineering',
              'Hyperparameter Tuning',
              'A/B Testing',
              'Time Series Analysis',
              'Ensemble Methods',
              'Transfer Learning',
              'Model Optimization',
            ].map((competency, index) => (
              <motion.span
                key={competency}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full text-cyan-400 text-sm cursor-default"
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
