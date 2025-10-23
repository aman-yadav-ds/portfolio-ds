'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.5)';
        ctx.fill();

        particles.forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.2 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-0" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Data Scientist & ML Engineer
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-slate-300 mb-8 h-20"
          >
            <Typewriter
              options={{
                strings: [
                  'Building intelligent systems',
                  'Extracting insights from data',
                  'Deploying ML models at scale',
                  'Transforming data into value',
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            Passionate about leveraging machine learning and data science to solve complex problems
            and drive business impact. Specializing in deep learning, NLP, and MLOps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 justify-center"
          >
            {[
              { Icon: Github, href: 'https://github.com/aman-yadav-ds' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/amandeep-yadav-2251b325a' },
              { Icon: Mail, href: 'mailto:ay2728850@gmail.com' },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ArrowDown className="text-cyan-400" size={32} />
      </motion.div>
    </section>
  );
}
