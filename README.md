# Data Science & ML Engineer Portfolio

A modern, animated portfolio website built specifically for Data Science and Machine Learning professionals. Features advanced animations, smooth transitions, and interactive elements to showcase your projects and skills.

## Features

### 🎨 Design & Animations
- **Hero Section**: Dynamic typing effect, particle animation background, fade-in/slide-up animations
- **Navigation**: Sticky navbar with fade-in effect, smooth scroll, mobile-responsive menu
- **Scroll Progress**: Top bar indicator showing scroll position
- **Section Reveals**: Staggered animations as sections enter viewport
- **3D Tilt Effects**: Interactive project cards with vanilla-tilt
- **Count-Up Animations**: Animated statistics and metrics
- **Progress Bars**: Skill level animations with GSAP
- **Hover Effects**: Micro-interactions on buttons, links, and cards
- **Page Transitions**: Smooth transitions between sections

### 📱 Sections
1. **Hero/Intro**: Eye-catching introduction with typewriter effect and particle animations
2. **About**: Personal introduction with animated statistics
3. **Skills**: Comprehensive skill showcase with animated progress bars
4. **Experience**: Timeline-based work history with achievements
5. **Projects**: Portfolio showcase with carousel (mobile) and grid (desktop)
6. **Contact**: Functional contact form with validation
7. **Footer**: Social links and quick navigation

### 🛠 Tech Stack
- **Next.js 13**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Radix UI**: Accessible component primitives
- **GSAP**: Advanced animations
- **Framer Motion**: Smooth page transitions and animations
- **React Intersection Observer**: Viewport-based animations
- **Swiper.js**: Touch-enabled carousel
- **Vanilla Tilt**: 3D tilt effects
- **Typewriter Effect**: Dynamic typing animations
- **React CountUp**: Number animations
- **React Hook Form**: Form handling and validation

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`components/sections/HeroSection.tsx`):
   - Update the title, typing effect strings, and description
   - Change social media links (GitHub, LinkedIn, Email)

2. **About Section** (`components/sections/AboutSection.tsx`):
   - Update statistics (years of experience, projects, clients, certifications)
   - Modify the about text and technologies list

3. **Skills Section** (`components/sections/SkillsSection.tsx`):
   - Add/remove skill categories
   - Update skill levels and competencies

4. **Experience Section** (`components/sections/ExperienceSection.tsx`):
   - Replace with your work history
   - Update companies, positions, achievements, and technologies

5. **Projects Section** (`components/sections/ProjectsSection.tsx`):
   - Add your projects with descriptions, technologies, and links
   - Replace placeholder images with your project screenshots
   - Update GitHub and demo links

6. **Contact Section** (`components/sections/ContactSection.tsx`):
   - Update email, phone, and location
   - Configure form submission (currently logs to console)

7. **Footer** (`components/sections/Footer.tsx`):
   - Update social media links

### Colors & Theme

The portfolio uses a cyan/blue gradient theme. To change colors:

1. Update gradient classes in Tailwind (from-cyan-400, to-blue-500, etc.)
2. Modify the color scheme in `tailwind.config.ts`

### Images

Replace placeholder images from Pexels with your own:
- Project screenshots
- Profile photo (if desired)
- Background images

## Form Integration

The contact form currently logs data to the console. To integrate with a backend:

1. Install your preferred backend service (e.g., FormSpree, EmailJS, or custom API)
2. Update the `onSubmit` function in `ContactSection.tsx`

Example with EmailJS:
```typescript
import emailjs from '@emailjs/browser';

const onSubmit = async (data: ContactForm) => {
  setIsSubmitting(true);
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      data,
      'YOUR_PUBLIC_KEY'
    );
    toast.success('Message sent successfully!');
    reset();
  } catch (error) {
    toast.error('Failed to send message. Please try again.');
  }
  setIsSubmitting(false);
};
```

## Performance Optimization

- Images use lazy loading
- Animations are GPU-accelerated
- Code splitting with Next.js
- Static generation for fast load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Acknowledgments

- Images from [Pexels](https://www.pexels.com)
- Icons from [Lucide React](https://lucide.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
