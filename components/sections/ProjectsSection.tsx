'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VanillaTilt from 'vanilla-tilt';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const projects = [
  {
    title: 'Multi-Agent Assistant',
    description:
      'Designed a multi-agent assistant using LLMs to automate complex tasks. Integrated with ChromaDB for vector storage and Long-term Memory management. Used less demanding models locally for small task execution.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'PyTorch', 'ChromaDB', 'Multi-Agent Orchestration', 'LLMs', 'LangChain', 'Ollama'],
    github: 'https://github.com/aman-yadav-ds/friday',
    demo: 'https://github.com/aman-yadav-ds/friday',
    impact: 'Automated task management',
  },
  {
    title: 'Gun Detection',
    description:
      'Developed a gun detection system using FasterRCNN, achieving 92% accuracy. Deployed on Hugging Face Spaces with Flask and FastAPI for image analysis, enhancing public safety measures.',
    image: 'GunDetection.png',
    technologies: ['Python', 'PyTorch', 'Tensorboard', 'FastAPI', 'Docker'],
    github: 'https://github.com/aman-yadav-ds/guns-detection',
    demo: 'https://huggingface.co/spaces/aman-yadav-ds/guns-detection',
    impact: 'Public safety enhancement',
  },
  {
    title: 'Recommender System for Anime',
    description:
      'Built a hybrid recommender system combining collaborative and content-based filtering. Deployed using Flask on Hugging Face Spaces and GCP using jenkins for CI/CD, providing personalized anime recommendations to users.',
    image: 'Recommender.png',
    technologies: ['TensorFlow', 'Jenkins', 'ComitML', 'DVC', 'Flask', 'Kubernetes', 'GCP'],
    github: 'https://github.com/aman-yadav-ds/anime-recommender',
    demo: 'https://huggingface.co/spaces/aman-yadav-ds/anime-recommender',
    impact: 'Personalized user experience',
  },
  {
    title: 'Depression Detection App',
    description:
      'Created a production ready app for depression detection using Machine Learning. Implemented DAGs, CI/CD pipelines, and containerization with Docker and Kubernetes for scalable deployment.',
    image: 'depression_detection.png',
    technologies: ['Python', 'Scikit-learn', 'Apache Airflow', 'Feast', 'GCP'],
    github: 'https://github.com/aman-yadav-ds/depression-mlops',
    demo: 'https://huggingface.co/spaces/aman-yadav-ds/depression_prediction',
    impact: 'Mental health awareness',
  },
  // {
  //   title: 'Sentiment Analysis Platform',
  //   description:
  //     'Built a scalable sentiment analysis system processing millions of social media posts daily. Provides real-time brand monitoring and competitive intelligence.',
  //   image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   technologies: ['Python', 'BERT', 'Kafka', 'Elasticsearch', 'React'],
  //   github: 'https://github.com',
  //   demo: 'https://demo.com',
  //   impact: '5M+ posts analyzed',
  // },
  // {
  //   title: 'Time Series Forecasting',
  //   description:
  //     'Developed advanced forecasting models for demand prediction using LSTM networks. Improved inventory management efficiency by 40% and reduced waste by 30%.',
  //   image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   technologies: ['Python', 'PyTorch', 'LSTM', 'Prophet', 'MLflow'],
  //   github: 'https://github.com',
  //   demo: 'https://demo.com',
  //   impact: '40% efficiency gain',
  // },
];

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectCardsRef.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 5,
          speed: 400,
          glare: true,
          'max-glare': 0.2,
        });
      }
    });

    return () => {
      projectCardsRef.current.forEach((card) => {
        if (card && (card as any).vanillaTilt) {
          (card as any).vanillaTilt.destroy();
        }
      });
    };
  }, [inView]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              ref={(el) => {
                projectCardsRef.current[index] = el;
              }}
              className="group relative rounded-xl overflow-hidden bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  width={600}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                    <span className="text-cyan-400 text-xs font-semibold">{project.impact}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 rounded text-slate-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 rounded text-slate-400 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-xl overflow-hidden bg-slate-800/30 border border-slate-700/50">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-200 mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                        <span className="text-cyan-400 text-xs font-semibold">
                          {project.impact}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 rounded text-slate-400 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
