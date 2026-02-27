'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Phone, Mail, MapPin, ChevronDown, ArrowUp, Calendar, MessageCircle } from 'lucide-react'
import { linkedinLink, githubLink, whatsAppLink, calendlyLink } from '@/app/data/links'
import { BlurFade } from '@/components/ui/blur-fade'
import { Particles } from '@/components/ui/particles'

interface FAQItem {
    question: string
    answer: string
}

export default function Footer() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const whatsappOnClick = () => {
        (window as any)?.gtag('event', 'whatsapp_click', {
            event_label: "Whatsapp Click - Footer"
        })
        window.location.href = whatsAppLink
    }

    const calendlyOnClick = () => {
        (window as any)?.gtag('event', 'calendly_click', {
            event_label: "Calendly Click - Footer"
        })
        window.open(calendlyLink, '_blank')
    }

    const faqs: FAQItem[] = [
        {
            question: "What AI services does Max Saad offer?",
            answer: "Max offers three core services: AI Strategy Consulting for executives planning AI transformation initiatives, Full-Stack Development for building and scaling AI-powered applications, and Technical Leadership for team mentoring and technical decision-making support. Each service is tailored to drive measurable business outcomes."
        },
        {
            question: "What industries has Max Saad worked with?",
            answer: "Max has extensive experience across multiple industries including EdTech (Mindvalley - enabling $19M+ in revenue), PropTech (REA Group - serving 100K+ property seekers), and AdTech (IPG Mediabrands). His expertise spans enterprise workplace management, e-learning platforms, and real estate technology solutions."
        },
        {
            question: "How can I hire Max Saad for an AI project?",
            answer: "There are three ways to get started: Book a free 30-minute strategy call via Calendly for personalized AI roadmap discussions, start an instant conversation via WhatsApp for technical questions and feasibility assessments, or email directly at to.msaads@gmail.com. All initial consultations are commitment-free."
        },
        {
            question: "What is Max Saad's tech stack?",
            answer: "Max specializes in modern AI and full-stack technologies including Python, TypeScript, React/Next.js, Vue/Nuxt.js, Node.js, and Laravel on the backend. For AI/ML, he works with LlamaIndex, LangChain, OpenAI APIs, Hugging Face models, and RAG implementations. His cloud expertise includes AWS, Google Cloud, and containerization with Docker."
        },
        {
            question: "Where is Max Saad based?",
            answer: "Max is based in Kuala Lumpur, Malaysia, and is available for remote engagements globally. He has successfully delivered projects across Asia-Pacific, working with international teams at Mindvalley, REA Group, and IPG Mediabrands. Time zone flexibility and cross-cultural collaboration are core strengths."
        }
    ]

    const services = [
        { name: 'AI Strategy Consulting', href: '#services' },
        { name: 'Full-Stack Development', href: '#services' },
        { name: 'Technical Leadership', href: '#services' }
    ]

    const quickLinks = [
        { name: 'Case Studies', href: '#portfolio' },
        { name: 'Experience', href: '#experience' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Skills', href: '#skills' },
        { name: 'Achievements', href: '#achievements' }
    ]

    return (
        <footer className="relative overflow-hidden">
            {/* Gradient Top Border */}
            <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500" />

            {/* Main Footer Background */}
            <div className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
                {/* Particles Effect */}
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={30}
                    ease={80}
                    color="#9333ea"
                    size={0.5}
                    refresh={false}
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(147,51,234,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.06),transparent_50%)]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Brand Identity Row */}
                    <BlurFade delay={0.1} duration={0.5} inView={true} inViewMargin="-50px">
                        <div className="pt-16 pb-12 border-b border-gray-200/60">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Max Saad</h2>
                                    <p className="text-gray-600 text-sm md:text-base flex items-center gap-2 flex-wrap">
                                        <span>AI Solutions Engineer</span>
                                        <span className="text-purple-500">•</span>
                                        <MapPin className="w-4 h-4 inline" />
                                        <span>Kuala Lumpur, Malaysia</span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <a 
                                        href={linkedinLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="LinkedIn Profile"
                                        className="p-3 bg-white/80 hover:bg-white border border-gray-200/60 rounded-lg transition-all duration-300 hover:scale-110 hover:border-purple-400/50"
                                    >
                                        {(FaLinkedin as any)({ className: "w-5 h-5 text-purple-600 hover:text-purple-700" })}
                                    </a>
                                    <a 
                                        href={githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="GitHub Profile"
                                        className="p-3 bg-white/80 hover:bg-white border border-gray-200/60 rounded-lg transition-all duration-300 hover:scale-110 hover:border-orange-400/50"
                                    >
                                        {(FaGithub as any)({ className: "w-5 h-5 text-orange-600 hover:text-orange-700" })}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </BlurFade>

                    {/* 3-Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-gray-200/60">
                        {/* Services Column */}
                        <BlurFade delay={0.2} duration={0.5} inView={true} inViewMargin="-50px">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Services</h3>
                                <nav aria-label="Services navigation">
                                    <ul className="space-y-3">
                                        {services.map((service, idx) => (
                                            <li key={idx}>
                                                <Link 
                                                    href={service.href}
                                                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm flex items-center gap-2 group"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-purple-500/50 group-hover:bg-purple-600 transition-colors" />
                                                    {service.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </BlurFade>

                        {/* Quick Links Column */}
                        <BlurFade delay={0.3} duration={0.5} inView={true} inViewMargin="-50px">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
                                <nav aria-label="Footer navigation">
                                    <ul className="space-y-3">
                                        {quickLinks.map((link, idx) => (
                                            <li key={idx}>
                                                <Link 
                                                    href={link.href}
                                                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm flex items-center gap-2 group"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-orange-500/50 group-hover:bg-orange-600 transition-colors" />
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </BlurFade>

                        {/* Get in Touch Column */}
                        <BlurFade delay={0.4} duration={0.5} inView={true} inViewMargin="-50px">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Get in Touch</h3>
                                <address className="not-italic space-y-3">
                                    <a 
                                        href="tel:+60102440732" 
                                        className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors text-sm group"
                                    >
                                        <Phone className="w-4 h-4 text-purple-500 group-hover:text-purple-600" />
                                        +60 (102) 440-732
                                    </a>
                                    <a 
                                        href="mailto:to.msaads@gmail.com" 
                                        className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors text-sm group"
                                    >
                                        <Mail className="w-4 h-4 text-orange-500 group-hover:text-orange-600" />
                                        to.msaads@gmail.com
                                    </a>
                                    <button
                                        onClick={whatsappOnClick}
                                        className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors text-sm group w-full text-left"
                                    >
                                        <MessageCircle className="w-4 h-4 text-green-500 group-hover:text-green-600" />
                                        WhatsApp Chat
                                    </button>
                                    <button
                                        onClick={calendlyOnClick}
                                        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors text-sm group w-full text-left"
                                    >
                                        <Calendar className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
                                        Schedule a Call
                                    </button>
                                </address>
                            </div>
                        </BlurFade>
                    </div>

                    {/* FAQ Section */}
                    <BlurFade delay={0.5} duration={0.5} inView={true} inViewMargin="-50px">
                        <div className="py-12 border-b border-gray-200/60">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
                            <div className="max-w-3xl mx-auto space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div 
                                        key={idx}
                                        className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-lg overflow-hidden hover:border-purple-400/30 transition-all duration-300"
                                    >
                                        <button
                                            onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                            className="w-full px-6 py-4 flex items-center justify-between text-left"
                                            aria-expanded={openFAQ === idx}
                                        >
                                            <span className="text-gray-900 font-semibold text-sm md:text-base pr-4">
                                                {faq.question}
                                            </span>
                                            <ChevronDown 
                                                className={`w-5 h-5 text-purple-500 flex-shrink-0 transition-transform duration-300 ${
                                                    openFAQ === idx ? 'rotate-180' : ''
                                                }`}
                                            />
                                        </button>
                                        <div 
                                            className={`overflow-hidden transition-all duration-300 ${
                                                openFAQ === idx ? 'max-h-96' : 'max-h-0'
                                            }`}
                                        >
                                            <div className="px-6 pb-4 pt-2 text-gray-600 text-sm leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </BlurFade>

                    {/* Bottom Bar */}
                    <BlurFade delay={0.6} duration={0.5} inView={true} inViewMargin="-50px">
                        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-gray-500 text-sm text-center md:text-left">
                                © {new Date().getFullYear()} Max Saad. All rights reserved.
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-gray-400">Built with Next.js</span>
                            </p>
                            <button
                                onClick={scrollToTop}
                                className="flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white border border-gray-200/60 hover:border-purple-400/50 rounded-lg transition-all duration-300 group"
                                aria-label="Back to top"
                            >
                                <span className="text-gray-600 group-hover:text-purple-600 text-sm font-medium">Back to Top</span>
                                <ArrowUp className="w-4 h-4 text-purple-500 group-hover:text-purple-600 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </footer>
    )
}
