'use client'

import React from 'react'
import { achievements, getAchievementsByType, Achievement } from '../data/achievements'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Calendar, Award, Trophy, FileCheck, ArrowRight } from 'lucide-react'
import { calendlyLink } from '@/app/data/links'

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
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
        <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
            <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
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
                            <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
                                {achievement.title}
                            </CardTitle>
                            <div className="flex items-center mt-1 text-sm text-gray-600">
                                <Calendar className="w-4 h-4 mr-1" />
                                {achievement.date}
                            </div>
                        </div>
                    </div>
                    {achievement.position && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            {achievement.position}
                        </Badge>
                    )}
                </div>
            </CardHeader>
            <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {achievement.description}
                </CardDescription>
                
                <div className="flex items-center justify-between">
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
                    <div className="mt-4 flex flex-wrap gap-2">
                        {achievement.technologies.map((tech, index) => (
                            <Badge 
                                key={index} 
                                variant="outline" 
                                className="text-xs bg-gray-50 hover:bg-gray-100"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export default function AchievementsSection() {
    const hackathons = getAchievementsByType('hackathon')
    const certifications = getAchievementsByType('certification')

    const scheduleCallClick = () => {
        (window as any)?.gtag('event', 'schedule_call_click', {
            event_label: "Schedule Call CTA"
        })
        window.location.href = calendlyLink
    }

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-orange-500 text-transparent bg-clip-text mb-4">
                        Awards & Certifications
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Recognition for excellence in AI development and continuous learning in cutting-edge technologies
                    </p>
                </div>

                {/* Hackathons & Awards Section */}
                <div className="mb-16">
                    <div className="flex items-center mb-8">
                        <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
                        <h3 className="text-3xl font-bold text-gray-800">Hackathon Victories</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {hackathons.map((achievement) => (
                            <AchievementCard key={achievement.id} achievement={achievement} />
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div>
                    <div className="flex items-center mb-8">
                        <FileCheck className="w-8 h-8 text-blue-600 mr-3" />
                        <h3 className="text-3xl font-bold text-gray-800">Professional Certifications</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((achievement) => (
                            <AchievementCard key={achievement.id} achievement={achievement} />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl p-8 text-white">
                        <h4 className="text-2xl font-bold mb-4">
                            Ready to leverage award-winning AI expertise?
                        </h4>
                        <p className="text-lg mb-6 opacity-90">
                            Let&apos;s discuss how these proven skills can drive results for your project
                        </p>
                        <Button 
                            variant="secondary" 
                            size="lg"
                            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3"
                            onClick={scheduleCallClick}
                        >
                            Schedule a Strategy Call
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}