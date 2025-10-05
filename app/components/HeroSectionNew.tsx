'use client'

import React, {useRef} from 'react'
import Image from 'next/image'
import {useParallax} from '../hooks/useParallax'
import {Button} from '@/components/ui/button'
import {ArrowRight, Award, Calendar, Star, TrendingUp} from 'lucide-react'
import { whatsAppLink, calendlyLink } from '@/app/data/links'
import { getFeaturedAchievements } from '@/app/data/achievements'
import Saad from 'public/saad-photo.jpg'
import MVLogo from 'public/org/mindvalley_logo.jpeg'
import REALogo from 'public/org/rea_group_logo.jpeg'
import IPGLogo from 'public/org/mediabrands_logo.jpeg'

interface HeroSectionProps {
    portfolioRef?: React.MutableRefObject<HTMLDivElement | null>
}

export default function HeroSectionNew({portfolioRef}: HeroSectionProps) {
    const parallaxRef = useRef<HTMLDivElement>(null)
    useParallax(parallaxRef)
    const featuredAchievements = getFeaturedAchievements()

    const whatsappOnClick = () => {
        (window as any)?.gtag('event', 'whatsapp_click', {
            event_label: "Whatsapp Click - Hero CTA"
        })
        window.location.href = whatsAppLink
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

    const scheduleCallClick = () => {
        (window as any)?.gtag('event', 'schedule_call_click', {
            event_label: "Schedule Call CTA"
        })
        window.location.href = calendlyLink
    }

    return (
        <section className="relative flex flex-col lg:flex-row overflow-hidden min-h-screen">
            {/* Left Side - Enhanced Content */}
            <div className="w-full lg:w-3/5 flex flex-col justify-center items-center p-8 lg:p-16 z-10">
                {/* Achievement Badge */}
                <div className="mb-6 flex items-center bg-gradient-to-r from-green-100 to-green-50 border border-green-200 rounded-full px-4 py-2">
                    <Award className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-semibold text-sm">
                        🏆 1st Place Winner - AAIMS25 AI Code Fest
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left mb-6">
                    <span className="bg-gradient-to-r from-purple-700 to-orange-500 text-transparent bg-clip-text">
                        Award-Winning AI Engineer
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text text-3xl md:text-4xl lg:text-5xl font-extrabold">
                        Unlock Your Team&apos;s Potential
                    </span>
                </h1>

                {/* Enhanced Value Proposition */}
                <p className="text-xl md:text-2xl text-gray-600 text-center lg:text-left mb-8 max-w-2xl">
                    AI Solutions Expert • Full Stack Leader
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">10+</div>
                        <div className="text-sm text-gray-600">AI Agents Built</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">$19M+</div>
                        <div className="text-sm text-gray-600">Sales Enabled</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">1,000+</div>
                        <div className="text-sm text-gray-600">Users Served</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">10+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button 
                        className="cta-primary text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg" 
                        size="lg" 
                        onClick={scheduleCallClick}
                    >
                        Get Your AI Strategy Call
                        <Calendar className="ml-2 h-5 w-5"/>
                    </Button>
                    <Button 
                        variant="outline" 
                        className="cta-secondary text-lg px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200" 
                        size="lg" 
                        onClick={portfolioButtonClick}
                    >
                        View Projects
                        <TrendingUp className="ml-2 h-5 w-5"/>
                    </Button>
                </div>

                {/* Trust Signals */}
                <div className="text-center lg:text-left">
                    <p className="text-sm text-gray-500 mb-4">Trusted by global leaders in technology and innovation</p>
                    <div className="flex justify-center lg:justify-start space-x-6 items-center">
                        <div className="flex flex-col items-center">
                            <Image src={MVLogo} alt="Mindvalley" width={60} height={60} title="Mindvalley" className="rounded-md mb-1"/>
                            <span className="text-xs text-gray-500">Mindvalley</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={REALogo} alt="iProperty REA" width={60} height={60} title="iProperty REA" className="rounded-md mb-1"/>
                            <span className="text-xs text-gray-500">REA Group</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={IPGLogo} alt="IPG Mediabrands" width={60} height={60} title="IPG Mediabrands" className="rounded-md mb-1"/>
                            <span className="text-xs text-gray-500">IPG Mediabrands</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Enhanced Visual */}
            <div className="w-full lg:w-2/5 relative">
                <div ref={parallaxRef} className="hero-bg absolute -inset-20">
                    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF3CAC" stopOpacity="0.1"/>
                                <stop offset="50%" stopColor="#FF8A00" stopOpacity="0.1"/>
                                <stop offset="100%" stopColor="#6A0DAD" stopOpacity="0.1"/>
                            </linearGradient>
                        </defs>
                        <path fill="url(#heroGradient)"
                              d="M45.3,-51.5C56.9,-37.8,63.3,-19.5,62.3,-2.3C61.4,14.9,53.1,29.8,41.6,41.6C30.1,53.3,15.1,61.8,-1.9,63.9C-18.9,66,-37.8,61.6,-51.5,50.3C-65.2,39,-73.7,20.7,-72.9,3.3C-72.2,-14.1,-62.3,-28.2,-49.4,-41.8C-36.5,-55.4,-20.7,-68.5,-1.6,-67.1C17.6,-65.6,33.7,-65.2,45.3,-51.5Z"
                              transform="translate(100 100)"/>
                    </svg>
                </div>
                <div className="relative h-full flex items-center justify-center p-8">
                    <div className="profile-image-container w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-200 ring-opacity-50">
                        <Image
                            src={Saad}
                            alt="Max Saad - AI Solutions Engineer"
                            width={320}
                            height={320}
                            className="profile-image w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Floating Achievement Cards */}
                    <div className="absolute top-20 right-4 bg-white rounded-lg shadow-lg p-3 animate-pulse">
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-sm font-semibold text-gray-800">AI Expert</span>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-20 left-4 bg-white rounded-lg shadow-lg p-3 animate-pulse delay-1000">
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                            <span className="text-sm font-semibold text-gray-800">Full Stack</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}