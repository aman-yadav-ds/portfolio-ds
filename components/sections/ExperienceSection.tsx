'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'Tech Innovations Inc.',
    position: 'Senior ML Engineer',
    period: '2022 - Present',
    description:
      'Leading the development of large-scale ML systems. Built and deployed models serving 10M+ users. Implemented MLOps pipelines reducing deployment time by 70%.',
    achievements: [
      'Designed and deployed NLP models for sentiment analysis with 94% accuracy',
      'Reduced model inference time by 60% through optimization techniques',
      'Led a team of 5 data scientists in delivering critical ML projects',
    ],
    technologies: ['PyTorch', 'TensorFlow', 'Kubernetes', 'AWS'],
  },
  {
    company: 'DataCorp Solutions',
    position: 'ML Engineer',
    period: '2020 - 2022',
    description:
      'Developed computer vision models for automated quality inspection. Implemented real-time object detection systems processing 1000+ images per second.',
    achievements: [
      'Built CV models reducing defect detection time by 85%',
      'Implemented automated data pipeline processing 500GB daily',
      'Mentored junior data scientists on best practices',
    ],
    technologies: ['TensorFlow', 'OpenCV', 'Docker', 'GCP'],
  },
  {
    company: 'Analytics Pro',
    position: 'Data Scientist',
    period: '2019 - 2020',
    description:
      'Performed exploratory data analysis and built predictive models. Created dashboards and reports for stakeholders to drive business decisions.',
    achievements: [
      'Developed recommendation system increasing user engagement by 35%',
      'Created automated reporting system saving 20 hours/week',
      'Performed A/B testing leading to 15% revenue increase',
    ],
    technologies: ['Python', 'Scikit-learn', 'Tableau', 'SQL'],
  },
];

export function ExperienceSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.experience-card');

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500/50 to-blue-500/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-card flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right" />

                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-cyan-500/50 hidden md:block">
                    {index % 2 === 0 ? (
                      <div className="absolute right-full w-8 h-0.5 bg-cyan-500/50" />
                    ) : (
                      <div className="absolute left-full w-8 h-0.5 bg-cyan-500/50" />
                    )}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex-1 group"
                >
                  <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-cyan-400 mb-2">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-200 mb-1">{exp.position}</h3>
                      <p className="text-cyan-400 font-semibold mb-4">{exp.company}</p>

                      <p className="text-slate-400 mb-4 leading-relaxed">{exp.description}</p>

                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span className="text-slate-400 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-700/50 border border-cyan-500/20 rounded-full text-cyan-400 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
