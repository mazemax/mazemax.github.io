'use client'

import { useState } from 'react'
import TimelineItem from './TimelineItem'
import { BlurFade } from '@/components/ui/blur-fade'
import { AuroraText } from '@/components/ui/aurora-text'
import { NumberTicker } from '@/components/ui/number-ticker'
import { DotPattern } from '@/components/ui/dot-pattern'

interface Experience {
    id: number
    startDate: string
    endDate: string
    company: string
    role: string
    responsibilities: string[]
}

const experiences: Experience[] = [
    {
        id: 1,
        startDate: '2021',
        endDate: 'Present',
        company: 'Mindvalley Labs',
        role: 'Senior Full Stack Engineer',
        responsibilities: [
            'Created 10+ AI Solutions to improve productivity of tech team',
            'Led initiatives enabling $19M+ sales, aligning technical solutions with marketing objectives',
            'Delivered high-impact solutions using Headless Storyblok CMS and Nuxt.js',
            'Spearheaded the Evercoach & MV Coach merge, documenting architecture challenges',
            'Migrated project to Nuxt v2.15 and Nuxt Bridge to enhance maintainability and performance',
            'Managed up to 5 parallel initiatives to deliver key deliverables on time',
            'Collaborated with marketing and product teams to streamline workflows',
        ]
    },
    {
        id: 2,
        startDate: '2019',
        endDate: '2021',
        company: 'iProperty REA Group Asia',
        role: 'Senior Developer',
        responsibilities: [
            'Improved web application performance by upgrading Next.js v6 to v8 and Apollo Server',
            'Migrated React projects to functional components with Hooks',
            'Developed BigQuery - MySQL data sync service ensuring real-time location accuracy',
            'Enhanced core functionalities for Squarefoot and iProperty platforms, serving 500K+ users',
            'Participated in Optimize October Regional Web Initiative'
        ]
    },
    {
        id: 3,
        startDate: '2017',
        endDate: '2019',
        company: 'IPG Mediabrands',
        role: 'Software Analyst',
        responsibilities: [
            'Overhauled 95% of a legacy codebase for a content portal, serving 1,000+ active users',
            'Built scalable microservices architecture on AWS, improving performance and reliability',
            'Modernized platforms with tools like Symfony, Docker, and Webpack for robust solutions'
        ]
    },
    {
        id: 4,
        startDate: '2016',
        endDate: '2016',
        company: 'Litmus Labs',
        role: 'Senior Software Engineer',
        responsibilities: [
            'Developed Momvaz Travel application by integrating APIs like TBOHolidays and Travelport',
            'Customized and optimized Magento2 themes for large-scale eCommerce deployments'
        ]
    },
    {
        id: 5,
        startDate: '2014',
        endDate: '2016',
        company: 'Geekunit',
        role: 'Chief Information Officer',
        responsibilities: [
            'Executed 4 major projects while introducing modern DevOps practices and leading development teams',
            'Mentored developers and managed end-to-end project lifecycles, delivering high-quality solutions',
            'Published iOS and Android mobile applications',
            'Managed technical, financial and HR operations as executive leader'
        ]
    },
    {
        id: 6,
        startDate: '2013',
        endDate: '2014',
        company: 'Logic-Unit',
        role: 'Manager Software Engineer',
        responsibilities: [
            'Delivered mobile and FB apps',
            'Guided junior developers',
            'Managed social media accounts'
        ]
    }
]

export default function ProfessionalExperienceTimeline() {
    const [expandedId, setExpandedId] = useState<number | null>(1)

    const toggleExpand = (id: number) => {
        (window as any)?.gtag('event', 'experience_toggle_click', {
            event_label: "Experience Toggle Click"
        })

        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <section className="relative w-full border-t border-gray-200/60 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto p-4 md:p-8 py-16 lg:py-20 relative">
                {/* Dot Pattern Background */}
                <DotPattern 
                    className="opacity-30 text-purple-400/40"
                    width={20}
                    height={20}
                    cx={1}
                    cy={1}
                    cr={1}
                />
                
                <div className="relative z-10">
                {/* Section Heading */}
                <BlurFade delay={0.1} duration={0.5} inView={true} inViewMargin="-100px">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        <AuroraText 
                            colors={["#FF3CAC", "#FF8A00", "#6A0DAD", "#38bdf8"]}
                            speed={1.2}
                        >
                            Professional Journey
                        </AuroraText>
                    </h2>
                </BlurFade>

                {/* Stats Row */}
                <BlurFade delay={0.2} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl font-bold text-purple-700">
                                <NumberTicker value={13} />+
                            </div>
                            <div className="text-sm text-gray-600 mt-2">Years Experience</div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-6 text-center border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl font-bold text-orange-600">
                                <NumberTicker value={6} />
                            </div>
                            <div className="text-sm text-gray-600 mt-2">Companies</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl font-bold text-blue-600">
                                <NumberTicker value={50} />+
                            </div>
                            <div className="text-sm text-gray-600 mt-2">Projects Delivered</div>
                        </div>
                    </div>
                </BlurFade>
                
                <div className="relative md:grid md:grid-cols-2 md:gap-8">
                    {/* Enhanced center line with animated pulse dots */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF3CAC] via-[#FF8A00] to-[#6A0DAD] transform -translate-x-1/2 shadow-lg"></div>
                    
                    {experiences.map((experience, index) => (
                        <BlurFade 
                            key={experience.id}
                            delay={0.3 + index * 0.08} 
                            duration={0.5} 
                            inView={true} 
                            inViewMargin="-100px"
                        >
                            <div className={`mb-8 md:mb-12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                <TimelineItem
                                    experience={experience}
                                    isExpanded={expandedId === experience.id}
                                    onToggle={() => toggleExpand(experience.id)}
                                    isEven={index % 2 === 0}
                                    isCurrent={experience.id === 1}
                                />
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
            </div>
        </section>
    )
}
