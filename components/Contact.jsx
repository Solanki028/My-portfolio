'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageCircle, Clock, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const { ref, isVisible } = useScrollAnimation(0.2, '-50px');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus) {
      setSubmitStatus(null);
      setStatusMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setStatusMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Redirect to home section after successful submission
      setTimeout(() => {
        document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
        setSubmitStatus(null);
        setStatusMessage('');
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setStatusMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Priyanshusolankii@outlook.com',
      href: 'mailto:Priyanshusolankii@outlook.com',
      color: 'from-violet-500 to-purple-500',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+91 9996973755',
      href: 'https://wa.me/919996973755',
      color: 'from-blue-500 to-cyan-500',
      description: 'Chat with me on WhatsApp'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New Delhi, India',
      href: 'https://www.google.com/maps/search/New+Delhi,+India',
      color: 'from-emerald-500 to-green-500',
      description: 'Available for local meetings'
    }
  ];

  const availabilityOptions = [
    { icon: Star, text: 'Full-time opportunities' },
    { icon: MessageCircle, text: 'Freelance projects' },
    { icon: CheckCircle, text: 'Technical consulting' },
    { icon: Clock, text: 'Code reviews & mentoring' }
  ];

  return (
    <section ref={ref} id="contact" className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-28 h-28 border border-violet-500/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-40 right-16 w-20 h-20 border border-blue-500/20 rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-10 w-14 h-14 border border-cyan-500/20 rotate-12 animate-bounce-subtle" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                Get In Touch
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how we can bring your ideas to life
              and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              {/* Main Introduction */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with innovative teams. 
                  Whether you have a specific project in mind, need technical consultation, or just want to 
                  explore possibilities, I'd love to hear from you.
                </p>
                
                {/* Enhanced Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="group flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-violet-400/30 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]"
                      target={info.href.startsWith('http') || info.href.startsWith('mailto') || info.href.startsWith('tel') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') || info.href.startsWith('mailto') || info.href.startsWith('tel') ? 'noopener noreferrer' : ''}
                    >
                      <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${info.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white group-hover:text-violet-300 transition-colors duration-300 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-slate-300 font-medium mb-1 group-hover:text-white transition-colors duration-300">
                          {info.value}
                        </p>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                          {info.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Enhanced Availability Section */}
              <div className="bg-gradient-to-r from-violet-500/10 to-blue-500/10 backdrop-blur-xl border border-violet-400/20 rounded-3xl p-8">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Star className="w-6 h-6 text-violet-400" />
                  Available For
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {availabilityOptions.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="p-2 bg-violet-500/20 rounded-lg group-hover:bg-violet-500/30 transition-colors duration-300">
                        <option.icon className="w-4 h-4 text-violet-400" />
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                        {option.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-400/20 rounded-2xl">
                  <div className="flex items-center gap-2 text-emerald-400 font-medium">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span>Currently available for new projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-violet-400/30 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
              
              {/* Enhanced Status Message */}
              {submitStatus && (
                <div className={`mb-8 p-4 rounded-2xl flex items-center space-x-3 backdrop-blur-sm border ${
                  submitStatus === 'success' 
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="font-medium">{statusMessage}</span>
                </div>
              )}
              
              {/* Enhanced Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 text-white transition-all duration-300 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed hover:border-slate-600"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 text-white transition-all duration-300 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed hover:border-slate-600"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-300">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 text-white transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed hover:border-slate-600 placeholder-slate-400"
                    placeholder="Tell me about your project, timeline, and requirements..."
                  />
                </div>

                {/* Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 before:absolute before:inset-0 before:rounded-2xl before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Sending Message...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                  
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                </button>
              </form>

              {/* Form Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-400">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      {/* Contact Section Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 text-slate-500">
          <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-mono">Let's build something amazing together</span>
        </div>
      </div>
    </section>
  );
}