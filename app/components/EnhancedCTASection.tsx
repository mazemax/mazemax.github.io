'use client'

import React from 'react'
import {
    Calendar,
    MessageCircle,
    Download,
    Star,
    CheckCircle,
    ArrowRight,
    Sparkles
} from 'lucide-react'
import { whatsAppLink, resumeLink, calendlyLink } from '@/app/data/links'
import { NeonGradientCard } from '@/components/ui/neon-gradient-card'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { SparklesText } from '@/components/ui/sparkles-text'
import { BlurFade } from '@/components/ui/blur-fade'
import { NumberTicker } from '@/components/ui/number-ticker'
import { WarpBackground } from '@/components/ui/warp-background'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { Marquee } from '@/components/ui/marquee'
import Image from 'next/image'
import MVLogo from 'public/org/mindvalley_logo.jpeg'
import REALogo from 'public/org/rea_group_logo.jpeg'
import IPGLogo from 'public/org/mediabrands_logo.jpeg'

interface CTAOption {
    id: string
    title: string
    subtitle: string
    description: string
    icon: any
    action: () => void
    isPrimary?: boolean
    benefits: string[]
    buttonText: string
    neonFirst: string
    neonSecond: string
}

export default function EnhancedCTASection() {
    const handleScheduleCall = () => {
        (window as any)?.gtag('event', 'cta_schedule_call', {
            event_label: "Schedule Call CTA - Enhanced Section"
        })
        window.open(calendlyLink, '_blank')
    }

    const handleQuickChat = () => {
        (window as any)?.gtag('event', 'cta_quick_chat', {
            event_label: "Quick Chat CTA - WhatsApp"
        })
        window.open(whatsAppLink, '_blank')
    }

    const handleDownloadCV = () => {
        (window as any)?.gtag('event', 'cta_download_cv', {
            event_label: "Download CV CTA - Enhanced"
        })
        window.open(resumeLink, '_blank')
    }

    const ctaOptions: CTAOption[] = [
        {
            id: 'strategy-call',
            title: 'Book Strategy Call',
            subtitle: 'For Executives & Decision Makers',
            description: '30-min consultation to discuss your AI implementation roadmap',
            icon: Calendar,
            action: handleScheduleCall,
            isPrimary: true,
            benefits: ['Personalized AI roadmap', 'Technology recommendations', 'Implementation timeline'],
            buttonText: 'Book Strategy Call',
            neonFirst: '#9333ea',
            neonSecond: '#f97316',
        },
        {
            id: 'quick-chat',
            title: 'Start a Conversation',
            subtitle: 'For Technical Teams',
            description: 'Instant response for technical questions and feasibility',
            icon: MessageCircle,
            action: handleQuickChat,
            isPrimary: false,
            benefits: ['Instant technical insights', 'Project feasibility', 'Technology stack advice'],
            buttonText: 'Chat Now',
            neonFirst: '#22c55e',
            neonSecond: '#06b6d4',
        },
        {
            id: 'download-cv',
            title: 'Download Resume',
            subtitle: 'For Recruiters & HRs',
            description: 'Comprehensive CV with projects, education, and history',
            icon: Download,
            action: handleDownloadCV,
            isPrimary: false,
            benefits: ['Core competencies', 'Technical achievements', 'Career insights'],
            buttonText: 'Download Resume',
            neonFirst: '#f97316',
            neonSecond: '#ef4444',
        }
    ]

    const logos = [
        { src: MVLogo, name: 'Mindvalley' },
        { src: REALogo, name: 'REA Group' },
        { src: IPGLogo, name: 'IPG Mediabrands' },
    ]

    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(147,51,234,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.1),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <BlurFade delay={0.1} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
                            <Star className="w-4 h-4 text-amber-400" />
                            <span className="text-amber-300 text-sm font-semibold">Award-Winning AI Solutions Engineer</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            <span className="text-white">Ready to </span>
                            <SparklesText
                                className="text-4xl md:text-6xl [&_strong]:text-amber-400"
                                colors={{ first: "#f59e0b", second: "#f97316" }}
                                sparklesCount={8}
                            >
                                Transform
                            </SparklesText>
                            <br />
                            <span className="text-white">Your Business with AI?</span>
                        </h2>

                        <p className="text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto">
                            Join the companies that achieved{' '}
                            <span className="font-bold text-amber-300">
                                $<NumberTicker value={19} className="text-amber-300" />M+ in revenue growth
                            </span>{' '}
                            with AI-powered solutions
                        </p>
                    </div>
                </BlurFade>

                {/* CTA Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {ctaOptions.map((option, index) => {
                        const Icon = option.icon
                        return (
                            <BlurFade
                                key={option.id}
                                delay={0.2 + index * 0.1}
                                duration={0.5}
                                inView={true}
                                inViewMargin="-100px"
                            >
                                <NeonGradientCard
                                    neonColors={{ firstColor: option.neonFirst, secondColor: option.neonSecond }}
                                    borderSize={2}
                                    borderRadius={16}
                                    className="h-full"
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                                                <Icon className="w-6 h-6 text-gray-700" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{option.title}</h3>
                                                <p className="text-xs font-medium text-purple-600">{option.subtitle}</p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-600 mb-5">{option.description}</p>

                                        <div className="flex-grow mb-5">
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">What you get:</p>
                                            <ul className="space-y-2">
                                                {option.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {option.isPrimary ? (
                                            <RainbowButton
                                                onClick={option.action}
                                                className="w-full py-3"
                                                size="lg"
                                            >
                                                <span className="flex items-center justify-center gap-2 font-semibold">
                                                    {option.buttonText}
                                                    <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </RainbowButton>
                                        ) : (
                                            <ShimmerButton
                                                onClick={option.action}
                                                className="w-full py-3 font-semibold"
                                                shimmerColor="#9333ea"
                                                shimmerSize="0.08em"
                                                shimmerDuration="3s"
                                                borderRadius="8px"
                                                background="rgba(0,0,0,0.9)"
                                            >
                                                <span className="flex items-center justify-center gap-2">
                                                    {option.buttonText}
                                                    <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </ShimmerButton>
                                        )}
                                    </div>
                                </NeonGradientCard>
                            </BlurFade>
                        )
                    })}
                </div>

                {/* Trust Logos */}
                <BlurFade delay={0.5} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="text-center">
                        <p className="text-sm text-purple-300/60 uppercase tracking-widest mb-6 font-medium">Trusted by global technology leaders</p>
                        <div className="flex justify-center items-center gap-10 opacity-60">
                            {logos.map((logo, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <Image src={logo.src} alt={logo.name} width={36} height={36} className="rounded-lg" />
                                    <span className="text-sm font-semibold text-white/70">{logo.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </BlurFade>

                {/* Bottom Guarantee */}
                <BlurFade delay={0.6} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/20 backdrop-blur-sm rounded-full px-6 py-3">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-300 font-semibold text-sm">
                                100% Satisfaction Guaranteed  &middot;  Award-Winning Results
                            </span>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}
