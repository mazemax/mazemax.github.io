'use client'

import React from 'react'
import Image from 'next/image'
import { Award, Calendar, ArrowRight, Sparkles, Zap, Code2, Eye } from 'lucide-react'
import { calendlyLink } from '@/app/data/links'
import { WordRotate } from '@/components/ui/word-rotate'
import { NumberTicker } from '@/components/ui/number-ticker'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { Particles } from '@/components/ui/particles'
import { BlurFade } from '@/components/ui/blur-fade'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { Marquee } from '@/components/ui/marquee'
import { SparklesText } from '@/components/ui/sparkles-text'
import { Ripple } from '@/components/ui/ripple'
import { BorderBeam } from '@/components/ui/border-beam'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import Saad from 'public/saad-photo.jpg'
import MVLogo from 'public/org/mindvalley_logo.jpeg'
import REALogo from 'public/org/rea_group_logo.jpeg'
import IPGLogo from 'public/org/mediabrands_logo.jpeg'

interface HeroSectionProps {
    portfolioRef?: React.MutableRefObject<HTMLDivElement | null>
}

const statCards = [
    { icon: Zap, value: 10, suffix: '+', label: 'AI Solutions', color: 'from-purple-500 to-violet-600' },
    { icon: Sparkles, value: 19, prefix: '$', suffix: 'M+', label: 'Revenue Driven', color: 'from-orange-500 to-amber-500' },
    { icon: Code2, value: 12, suffix: '+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
]

const logos = [
    { src: MVLogo, alt: 'Mindvalley', name: 'Mindvalley' },
    { src: REALogo, alt: 'iProperty REA', name: 'REA Group' },
    { src: IPGLogo, alt: 'IPG Mediabrands', name: 'IPG Mediabrands' },
]

export default function HeroSectionNew({ portfolioRef }: HeroSectionProps) {
    const scheduleCallClick = () => {
        (window as any)?.gtag('event', 'schedule_call_click', {
            event_label: "Schedule Call CTA"
        })
        window.location.href = calendlyLink
    }

    const portfolioButtonClick = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        (window as any)?.gtag('event', 'portfolio_click', {
            event_label: "Portfolio Click - Hero"
        })
        if (portfolioRef) {
            portfolioRef?.current?.scrollIntoView({ behavior: "smooth" })
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30 py-20 lg:py-24">
            {/* Layered Background Effects */}
            <Particles
                className="absolute inset-0 z-0"
                quantity={60}
                ease={80}
                color="#9333ea"
                size={0.5}
                refresh={false}
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(147,51,234,0.08),transparent_50%)] z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.06),transparent_50%)] z-0" />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                {/* Top Badge */}
                <BlurFade delay={0} duration={0.4} inView={true} inViewMargin="-50px">
                    <div className="flex justify-center mb-10">
                        <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-green-50 border border-amber-200/60 rounded-full px-5 py-2.5 shadow-sm">
                            <Award className="w-4 h-4 text-amber-600" />
                            <AnimatedShinyText className="text-amber-800 font-semibold text-sm">
                                1st Place Winner - AAIMS25 AI Code Fest
                            </AnimatedShinyText>
                            <BorderBeam size={80} duration={8} colorFrom="#f59e0b" colorTo="#22c55e" borderWidth={1.5} />
                        </div>
                    </div>
                </BlurFade>

                {/* Hero Grid: Content + Visual */}
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    {/* Left Content - 3 cols */}
                    <div className="lg:col-span-3 text-center lg:text-left">
                        <BlurFade delay={0.1} duration={0.5} inView={true} inViewMargin="-50px">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                                <SparklesText
                                    className="text-4xl md:text-5xl lg:text-6xl"
                                    colors={{ first: "#9333ea", second: "#f97316" }}
                                    sparklesCount={6}
                                >
                                    I Help Enterprises Generate Revenue
                                </SparklesText>
                                <br />
                                <span className="text-gray-900">with AI Solutions</span>
                            </h1>
                        </BlurFade>

                        <BlurFade delay={0.2} duration={0.5} inView={true} inViewMargin="-50px">
                            <div className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                                <span>Award-winning AI engineer specializing in </span>
                                <WordRotate
                                    words={[
                                        "AI Strategy Consulting",
                                        "Technical Team Leadership",
                                        "Full-Stack AI Development",
                                        "Revenue-Driven Solutions"
                                    ]}
                                    duration={3000}
                                    className="inline-block font-bold bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text"
                                />
                            </div>
                        </BlurFade>

                        {/* CTA Buttons */}
                        <BlurFade delay={0.3} duration={0.5} inView={true} inViewMargin="-50px">
                            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                                <ShimmerButton
                                    className="text-lg px-8 py-4 shadow-xl shadow-purple-500/20"
                                    onClick={scheduleCallClick}
                                    shimmerColor="#ffffff"
                                    shimmerSize="0.1em"
                                    shimmerDuration="2.5s"
                                    borderRadius="12px"
                                    background="linear-gradient(135deg, #7c3aed, #9333ea, #c026d3)"
                                >
                                    <span className="flex items-center gap-2 font-semibold">
                                        Book a Free Strategy Session
                                        <Calendar className="h-5 w-5" />
                                    </span>
                                </ShimmerButton>

                                <InteractiveHoverButton
                                    className="text-lg px-8 py-4 border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-xl"
                                    onClick={portfolioButtonClick}
                                    icon={Eye}
                                >
                                    View Case Studies
                                </InteractiveHoverButton>
                            </div>
                        </BlurFade>

                        {/* Stats Row */}
                        <BlurFade delay={0.4} duration={0.5} inView={true} inViewMargin="-50px">
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                {statCards.map((stat, i) => {
                                    const Icon = stat.icon
                                    return (
                                        <div
                                            key={i}
                                            className="relative group flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                                        >
                                            <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-gray-900">
                                                    {stat.prefix}<NumberTicker value={stat.value} />{stat.suffix}
                                                </div>
                                                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </BlurFade>
                    </div>

                    {/* Right Visual - 2 cols */}
                    <div className="lg:col-span-2 flex items-center justify-center">
                        <BlurFade delay={0.2} duration={0.6} inView={true} inViewMargin="-50px">
                            <div className="relative">
                                {/* Ripple Effect Behind Image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Ripple
                                        mainCircleSize={200}
                                        mainCircleOpacity={0.15}
                                        numCircles={6}
                                    />
                                </div>

                                {/* Profile Image with Glow */}
                                <div className="relative z-10">
                                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-purple-500/20 ring-4 ring-white/80">
                                        <Image
                                            src={Saad}
                                            alt="Max Saad - AI Solutions Engineer"
                                            width={320}
                                            height={320}
                                            className="w-full h-full object-cover"
                                            priority
                                        />
                                    </div>

                                    {/* Orbiting badges */}
                                    <div className="absolute -top-2 -right-2 bg-white rounded-xl shadow-lg px-4 py-2 border border-purple-100 animate-bounce" style={{ animationDuration: '3s' }}>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-sm font-bold text-gray-800">AI Expert</span>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-2 -left-2 bg-white rounded-xl shadow-lg px-4 py-2 border border-orange-100 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse" />
                                            <span className="text-sm font-bold text-gray-800">Full Stack</span>
                                        </div>
                                    </div>

                                    <div className="absolute top-1/2 -right-6 bg-gradient-to-r from-purple-600 to-orange-500 rounded-xl shadow-lg px-3 py-1.5 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                                        <span className="text-xs font-bold text-white">12+ Years</span>
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>

                {/* Trust Logos */}
                <BlurFade delay={0.5} duration={0.5} inView={true} inViewMargin="-50px">
                    <div className="mt-16 pt-8 border-t border-gray-200/60">
                        <p className="text-sm text-gray-400 text-center mb-6 uppercase tracking-widest font-medium">Trusted by global leaders in technology</p>
                        <Marquee pauseOnHover className="[--duration:25s]">
                            {[...logos, ...logos].map((logo, i) => (
                                <div key={i} className="flex items-center gap-3 mx-8 opacity-70 hover:opacity-100 transition-opacity">
                                    <Image src={logo.src} alt={logo.alt} width={44} height={44} className="rounded-lg" />
                                    <span className="text-sm font-semibold text-gray-600">{logo.name}</span>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}
