'use client'

import React from 'react'
import Image from 'next/image'
import { achievements, getAchievementsByType, Achievement } from '../data/achievements'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Calendar, Trophy, FileCheck, Award } from 'lucide-react'
import { MagicCard } from '@/components/ui/magic-card'
import { BlurFade } from '@/components/ui/blur-fade'
import { AuroraText } from '@/components/ui/aurora-text'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { NumberTicker } from '@/components/ui/number-ticker'
import { NeonGradientCard } from '@/components/ui/neon-gradient-card'
import { BorderBeam } from '@/components/ui/border-beam'
import { Meteors } from '@/components/ui/meteors'
import { ShineBorder } from '@/components/ui/shine-border'

const FeaturedHackathonCard = ({ achievement }: { achievement: Achievement }) => {
    const Icon = achievement.icon
    
    return (
        <BlurFade delay={0.2} duration={0.5} inView={true} inViewMargin="-100px">
            <div className="relative">
                <NeonGradientCard 
                    className="relative overflow-hidden"
                    borderSize={3}
                    borderRadius={20}
                    neonColors={{
                        firstColor: '#FFD700',
                        secondColor: '#FFA500'
                    }}
                >
                    <BorderBeam 
                        size={100}
                        duration={10}
                        delay={0}
                        colorFrom="#FFD700"
                        colorTo="#FFA500"
                        borderWidth={2}
                    />
                    <Meteors number={30} className="bg-yellow-400" />
                    
                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div 
                                    className="p-3 rounded-xl flex-shrink-0 bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300"
                                >
                                    <Icon 
                                        className="w-8 h-8" 
                                        style={{ color: achievement.color }}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {achievement.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-gray-600" />
                                        <span className="text-sm text-gray-600">{achievement.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <AnimatedShinyText 
                                    className="inline-flex bg-gradient-to-r from-yellow-600 to-orange-600 text-transparent bg-clip-text text-lg font-bold"
                                    shimmerWidth={150}
                                >
                                    {achievement.position}
                                </AnimatedShinyText>
                                <Award className="w-8 h-8 text-yellow-600" />
                            </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                            {achievement.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-base font-semibold text-gray-800 flex items-center gap-2">
                                <Trophy className="w-5 h-5 text-yellow-600" />
                                {achievement.issuer}
                            </div>
                        </div>

                        {achievement.technologies && (
                            <div className="flex flex-wrap gap-2">
                                {achievement.technologies.map((tech, idx) => (
                                    <Badge 
                                        key={idx} 
                                        variant="outline" 
                                        className="text-sm bg-white hover:bg-yellow-50 border-yellow-300 hover:border-yellow-400 transition-all"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                </NeonGradientCard>
            </div>
        </BlurFade>
    )
}

const StandardAchievementCard = ({ achievement, index, type }: { achievement: Achievement, index: number, type: 'hackathon' | 'certification' }) => {
    const Icon = achievement.icon
    
    const handleViewCredential = () => {
        if (achievement.credentialUrl) {
            (window as any)?.gtag('event', 'credential_click', {
                event_label: `Credential Click - ${achievement.title}`
            })
            window.open(achievement.credentialUrl, '_blank')
        }
    }

    return (
        <BlurFade 
            delay={0.25 + index * 0.08} 
            duration={0.5} 
            inView={true} 
            inViewMargin="-100px"
        >
            <div className="relative h-full">
                {type === 'certification' && (
                    <ShineBorder
                        borderWidth={2}
                        duration={10}
                        shineColor={["#9E7AFF", "#FE8BBB", "#38bdf8"]}
                    />
                )}
                <MagicCard 
                    className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                    gradientSize={250}
                    gradientColor="#9E7AFF20"
                    gradientFrom="#9E7AFF"
                    gradientTo="#FE8BBB"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div 
                                className="p-2 rounded-lg flex-shrink-0"
                                style={{ backgroundColor: `${achievement.color}20` }}
                            >
                                <Icon 
                                    className="w-6 h-6" 
                                    style={{ color: achievement.color }}
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
                                    {achievement.title}
                                </h4>
                                <div className="flex items-center mt-1 text-sm text-gray-600">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {achievement.date}
                                </div>
                            </div>
                        </div>
                        {achievement.position && (
                            <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                                {achievement.position}
                            </Badge>
                        )}
                    </div>
                    
                    <p className="text-gray-600 mb-4 flex-grow">
                        {achievement.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-medium text-gray-700">
                            {achievement.issuer}
                        </div>
                        {achievement.credentialUrl && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleViewCredential}
                                className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                            >
                                View
                                <ExternalLink className="w-4 h-4 ml-1" />
                            </Button>
                        )}
                    </div>

                    {achievement.technologies && (
                        <div className="flex flex-wrap gap-2">
                            {achievement.technologies.map((tech, idx) => (
                                <Badge 
                                    key={idx} 
                                    variant="outline" 
                                    className="text-xs bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    )}
                </MagicCard>
            </div>
        </BlurFade>
    )
}

export default function AchievementsSection() {
    const hackathons = getAchievementsByType('hackathon')
    const certifications = getAchievementsByType('certification')
    const featuredHackathon = hackathons.find(h => h.position === '1st Place')
    const otherHackathons = hackathons.filter(h => h.position !== '1st Place')

    return (
        <section className="py-16 lg:py-20 px-4 bg-slate-50 w-full border-t border-gray-200/60">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <BlurFade delay={0.1} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <AuroraText 
                                colors={["#FFD700", "#FF8A00", "#9E7AFF", "#FE8BBB"]}
                                speed={1}
                            >
                                Awards & Certifications
                            </AuroraText>
                        </h2>
                        <AnimatedShinyText className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Recognition for excellence in AI development and continuous learning in cutting-edge technologies
                        </AnimatedShinyText>
                    </div>
                </BlurFade>

                {/* Stats Row */}
                <BlurFade delay={0.15} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-center border border-yellow-200 shadow-sm">
                            <div className="text-4xl font-bold text-yellow-600 mb-2">
                                <NumberTicker value={hackathons.length} />
                            </div>
                            <div className="text-sm text-gray-700 font-medium">Hackathon Awards</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center border border-purple-200 shadow-sm">
                            <div className="text-4xl font-bold text-purple-600 mb-2">
                                <NumberTicker value={certifications.length} />
                            </div>
                            <div className="text-sm text-gray-700 font-medium">AI Certifications</div>
                        </div>
                    </div>
                </BlurFade>

                {/* Featured 1st Place Hackathon */}
                {featuredHackathon && (
                    <div className="mb-16">
                        <BlurFade delay={0.18} duration={0.5} inView={true} inViewMargin="-100px">
                            <div className="flex items-center gap-3 mb-6">
                                <Trophy className="w-8 h-8 text-yellow-600" />
                                <h3 className="text-3xl font-bold text-gray-800">Featured Achievement</h3>
                            </div>
                        </BlurFade>
                        <FeaturedHackathonCard achievement={featuredHackathon} />
                    </div>
                )}

                {/* Other Hackathons */}
                {otherHackathons.length > 0 && (
                    <div className="mb-16">
                        <BlurFade delay={0.2} duration={0.5} inView={true} inViewMargin="-100px">
                            <div className="flex items-center gap-3 mb-6">
                                <Award className="w-8 h-8 text-orange-600" />
                                <h3 className="text-3xl font-bold text-gray-800">Innovation Awards</h3>
                            </div>
                        </BlurFade>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {otherHackathons.map((achievement, index) => (
                                <StandardAchievementCard 
                                    key={achievement.id} 
                                    achievement={achievement} 
                                    index={index}
                                    type="hackathon"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Certifications Section */}
                <div className="mb-16">
                    <BlurFade delay={0.25} duration={0.5} inView={true} inViewMargin="-100px">
                        <div className="flex items-center gap-3 mb-6">
                            <FileCheck className="w-8 h-8 text-blue-600" />
                            <h3 className="text-3xl font-bold text-gray-800">Professional Certifications</h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((achievement, index) => (
                            <StandardAchievementCard 
                                key={achievement.id} 
                                achievement={achievement} 
                                index={index}
                                type="certification"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
