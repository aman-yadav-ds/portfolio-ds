'use client';

import { useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Navigation } from '@/components/navigation/Navigation';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { Footer } from '@/components/sections/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id!);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <ScrollProgress />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* <ExperienceSection /> */}
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
