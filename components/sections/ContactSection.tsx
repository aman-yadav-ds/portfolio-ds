'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    try {
      // Get EmailJS credentials from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are not configured');
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: 'ay2728850@gmail.com',
        },
        publicKey
      );

      if (result.status === 200) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ay2728850@gmail.com',
      href: 'mailto:ay2728850@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 74559 73188',
      href: 'tel:+917455973188',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Uttarakhand, India',
      href: 'https://maps.app.goo.gl/BRGPSyqKcsJ4nMySA',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss data science opportunities? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-200 mb-4">Let&apos;s Connect</h3>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m always interested in hearing about new projects and opportunities. Whether you
                have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    <p className="text-slate-200 font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
            >
              <h4 className="text-xl font-bold text-slate-200 mb-3">Open to Opportunities</h4>
              <p className="text-slate-400 text-sm">
                Currently available for freelance projects, consulting, and full-time positions in
                data science and machine learning engineering.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-8 rounded-xl bg-slate-800/30 border border-slate-700/50 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2 text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Your name"
                  className="bg-slate-900/50 border-slate-700 focus:border-cyan-500 text-slate-200"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2 text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  placeholder="your.email@example.com"
                  className="bg-slate-900/50 border-slate-700 focus:border-cyan-500 text-slate-200"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-300 mb-2 text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  placeholder="What's this about?"
                  className="bg-slate-900/50 border-slate-700 focus:border-cyan-500 text-slate-200"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2 text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-slate-900/50 border-slate-700 focus:border-cyan-500 text-slate-200 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}