'use client'

import React from 'react'
import { Lightbulb, Code, Users, ArrowRight } from 'lucide-react'
import { MagicCard } from '@/components/ui/magic-card'
import { BorderBeam } from '@/components/ui/border-beam'
import { BlurFade } from '@/components/ui/blur-fade'
import { TextAnimate } from '@/components/ui/text-animate'
import { calendlyLink, whatsAppLink } from '@/app/data/links'

export default function ServicesSection() {
    const services = [
        {
            id: 'ai-strategy',
            icon: Lightbulb,
            title: 'AI Strategy Consulting',
            audience: 'For Executives',
            description: 'Transform your business with AI. I help executives plan and execute successful AI transformation initiatives.',
            benefits: [
                'Custom AI roadmap aligned with business goals',
                'Technology stack recommendations',
                'Implementation timeline & milestones',
                'ROI projection and metrics'
            ],
            gradientFrom: '#9E7AFF',
            gradientTo: '#FE8BBB',
            featured: true,
            cta: 'Schedule Strategy Call',
            ctaLink: calendlyLink
        },
        {
            id: 'development',
            icon: Code,
            title: 'Full-Stack Development',
            audience: 'For Technical Teams',
            description: 'Senior-level implementation expertise to build and scale your AI-powered applications from concept to production.',
            benefits: [
                'End-to-end application development',
                'AI/ML integration & optimization',
                'Scalable architecture design',
                'Code review & best practices'
            ],
            gradientFrom: '#0070F3',
            gradientTo: '#38bdf8',
            featured: false,
            cta: 'Start a Conversation',
            ctaLink: whatsAppLink
        },
        {
            id: 'leadership',
            icon: Users,
            title: 'Technical Leadership',
            audience: 'For Growing Companies',
            description: 'Elevate your team\'s capabilities with experienced technical leadership and mentorship for sustained growth.',
            benefits: [
                'Team mentoring & upskilling',
                'Technical decision-making support',
                'Process optimization',
                'Cross-functional collaboration'
            ],
            gradientFrom: '#FF8A00',
            gradientTo: '#FFD700',
            featured: false,
            cta: 'Discuss Leadership',
            ctaLink: calendlyLink
        }
    ]

    const handleCTAClick = (service: typeof services[0]) => {
        (window as any)?.gtag('event', 'service_cta_click', {
            event_label: `Service CTA - ${service.title}`
        })
        window.location.href = service.ctaLink
    }

    return (
        <section id="services" className="py-16 lg:py-20 bg-slate-50 border-t border-gray-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        How I Can Help
                    </TextAnimate>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Three proven ways to accelerate your business with AI and technical excellence
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <BlurFade 
                                key={service.id}
                                delay={0.1 + index * 0.1} 
                                duration={0.5} 
                                inView={true} 
                                inViewMargin="-100px"
                            >
                                <div className="relative h-full">
                                    <MagicCard
                                        className="h-full p-8 flex flex-col"
                                        gradientSize={200}
                                        gradientColor="#262626"
                                        gradientOpacity={0.8}
                                        gradientFrom={service.gradientFrom}
                                        gradientTo={service.gradientTo}
                                    >
                                        {/* Featured Badge */}
                                        {service.featured && (
                                            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                MOST POPULAR
                                            </div>
                                        )}

                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div className={`w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br`}
                                                 style={{
                                                     backgroundImage: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`
                                                 }}>
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>
                                        </div>

                                        {/* Title and Audience */}
                                        <div className="mb-4">
                                            <div className="text-sm font-semibold text-gray-500 mb-2">
                                                {service.audience}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Benefits List */}
                                        <div className="mb-6 flex-grow">
                                            <ul className="space-y-2">
                                                {service.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start text-sm text-gray-700">
                                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* CTA Button */}
                                        <button
                                            onClick={() => handleCTAClick(service)}
                                            className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 hover:transform hover:scale-105 flex items-center justify-center gap-2"
                                            style={{
                                                backgroundImage: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`
                                            }}
                                        >
                                            {service.cta}
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </MagicCard>

                                    {/* Border Beam for Featured Card */}
                                    {service.featured && (
                                        <BorderBeam 
                                            size={250}
                                            duration={12}
                                            delay={0}
                                            colorFrom={service.gradientFrom}
                                            colorTo={service.gradientTo}
                                            borderWidth={2}
                                        />
                                    )}
                                </div>
                            </BlurFade>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <BlurFade delay={0.4} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="mt-16 text-center">
                        <p className="text-gray-600 mb-4">
                            Not sure which service fits your needs?
                        </p>
                        <button
                            onClick={() => window.location.href = calendlyLink}
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                        >
                            Let's Discuss Your Project
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}
