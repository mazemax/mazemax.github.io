'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
    Calendar, 
    MessageCircle, 
    Download, 
    Star, 
    Clock, 
    ArrowRight, 
    CheckCircle,
    Zap,
    Target,
    TrendingUp,
    Users,
    Award,
    LucideIcon
} from 'lucide-react'
import { whatsAppLink, resumeLink, calendlyLink } from '@/app/data/links'

interface CTAOption {
    id: string
    title: string
    subtitle: string
    description: string
    icon: any
    action: () => void
    variant: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'
    urgency?: string
    benefits?: string[]
    buttonText: string
    color: string
}

export default function EnhancedCTASection() {
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 })

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 }
                } else if (prev.minutes > 0) {
                    return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 }
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
                } else {
                    return { hours: 23, minutes: 59, seconds: 59 } // Reset
                }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

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
            title: 'AI Strategy Call',
            subtitle: 'For Decision Makers',
            description: '30-min consultation to discuss your AI implementation needs and roadmap',
            icon: Calendar,
            action: handleScheduleCall,
            variant: 'default',
            urgency: 'Limited slots available',
            benefits: ['Personalized AI roadmap', 'Technology recommendations', 'Implementation timeline'],
            buttonText: 'Book Strategy Call',
            color: 'from-purple-600 to-blue-600'
        },
        {
            id: 'quick-chat',
            title: 'Quick Discussion',
            subtitle: 'For Technical Teams',
            description: 'Immediate response for technical questions and project feasibility',
            icon: MessageCircle,
            action: handleQuickChat,
            variant: 'secondary',
            benefits: ['Instant technical insights', 'Project feasibility', 'Technology stack advice'],
            buttonText: 'Chat Now',
            color: 'from-green-500 to-teal-500'
        },
        {
            id: 'exclusive-cv',
            title: 'Exclusive Resume',
            subtitle: 'For Recruiters & HRs',
            description: 'CV with projects, education and work history',
            icon: Download,
            action: handleDownloadCV,
            variant: 'outline',
            urgency: `Expires in ${timeLeft.hours}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`,
            benefits: ['Detailed core competencies', 'Technical achievements', 'Professional career insights'],
            buttonText: 'Download CV',
            color: 'from-orange-500 to-red-500'
        }
    ]

    return (
        <section className="py-20 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-5"></div>
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2">
                        <Star className="w-4 h-4 mr-2" />
                        Award-Winning AI Solutions Engineer
                    </Badge>
                    
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">
                            Ready to Transform
                        </span>
                        <br />
                        <span className="text-white">Your Business with AI?</span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
                        Join the companies that achieved <span className="font-bold text-yellow-300">$19M+ in revenue growth</span> 
                        &nbsp;with<br className="hidden md:block"/> AI-powered solutions
                    </p>

                    {/* Social Proof Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-300">10+</div>
                            <div className="text-purple-200">AI Agents Built</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-300">$19M+</div>
                            <div className="text-purple-200">Revenue Driven</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-300">1,000+</div>
                            <div className="text-purple-200">Users Served</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-300">1st Place</div>
                            <div className="text-purple-200">AI Hackathon</div>
                        </div>
                    </div>
                </div>

                {/* CTA Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {ctaOptions.map((option) => {
                        const Icon = option.icon
                        return (
                            <Card key={option.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                                <CardContent className="p-8 text-center">
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                                    <p className="text-purple-200 text-sm mb-4">{option.subtitle}</p>
                                    <p className="text-purple-100 mb-6">{option.description}</p>

                                    {option.urgency && (
                                        <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-3 mb-4">
                                            <div className="flex items-center justify-center text-red-300 text-sm">
                                                <Clock className="w-4 h-4 mr-2" />
                                                {option.urgency}
                                            </div>
                                        </div>
                                    )}

                                    {option.benefits && (
                                        <div className="text-left mb-6">
                                            <p className="text-sm font-semibold text-purple-200 mb-2">You'll get:</p>
                                            <ul className="text-sm text-purple-100 space-y-1">
                                                {option.benefits.map((benefit, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <Button
                                        onClick={option.action}
                                        variant={option.variant}
                                        size="lg"
                                        className={`w-full font-semibold py-3 ${
                                            option.variant === 'default'
                                                ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-500 hover:to-orange-500' 
                                                : option.variant === 'secondary'
                                                ? 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                                                : option.variant === 'outline'
                                                ? 'border-2 border-white/50 text-white bg-transparent hover:bg-white/10 hover:text-white'
                                                : 'border-2 border-white/50 text-white hover:bg-white/10'
                                        }`}
                                    >
                                        {option.buttonText}
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Trust Signals */}
                <div className="text-center">
                    <p className="text-purple-200 mb-4">Trusted by global technology leaders</p>
                    <div className="flex justify-center items-center space-x-8 opacity-60">
                        <div className="text-2xl font-bold">Mindvalley</div>
                        <div className="text-2xl font-bold">REA Group</div>
                        <div className="text-2xl font-bold">IPG Mediabrands</div>
                    </div>
                </div>

                {/* Bottom Guarantee */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center bg-green-500/20 border border-green-400/30 rounded-full px-6 py-3">
                        <Award className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-green-300 font-semibold">
                            100% Satisfaction Guaranteed • Award-Winning Results
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}