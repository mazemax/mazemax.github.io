'use client'

import Image, { StaticImageData } from 'next/image'
import React, { forwardRef } from 'react'
import { ArrowRight, TrendingUp, Users, Zap, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { resumeLink } from '@/app/data/links'
import { BorderBeam } from '@/components/ui/border-beam'
import { BlurFade } from '@/components/ui/blur-fade'
import { TextAnimate } from '@/components/ui/text-animate'
import { MagicCard } from '@/components/ui/magic-card'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'

import Workway from 'public/portfolio/Mindvalley/workway.png'
import MvSpirituality from 'public/portfolio/Mindvalley/spirituality-program-2.png'
import MvFreeCourses from 'public/portfolio/Mindvalley/mv-free-courses-3.png'
import Squarefoot from 'public/portfolio/REA/squarefoot.png'
import ThinkOfLiving from 'public/portfolio/REA/thinkOfLiving.png'
import Huddle from 'public/portfolio/IPG/huddle.png'

interface Project {
    id: number
    title: string
    description: string
    imageUrl: string | StaticImageData
    projectUrl?: string
    outcome: string
    outcomeTag: {
        label: string
        icon: any
        color: string
        bgColor: string
    }
    tech: string[]
}

const projects: Project[] = [
    {
        id: 1,
        title: "Workway B2B Sales Page",
        description: "Sales page driving B2B conversions for workplace management platform",
        imageUrl: Workway,
        projectUrl: 'https://www.getworkway.com',
        outcome: "Enterprise workplace management SaaS launch",
        outcomeTag: { label: "Revenue Growth", icon: TrendingUp, color: "text-emerald-700", bgColor: "bg-emerald-50 border-emerald-200" },
        tech: ['Next.js', 'TypeScript', 'Tailwind']
    },
    {
        id: 2,
        title: "SEO Growth Strategy",
        description: "Organic traffic growth through transactional keyword optimization at Mindvalley",
        imageUrl: MvSpirituality,
        projectUrl: 'https://www.mindvalley.com/programs/spirituality',
        outcome: "High-value non-brand keyword targeting",
        outcomeTag: { label: "User Acquisition", icon: Users, color: "text-blue-700", bgColor: "bg-blue-50 border-blue-200" },
        tech: ['React', 'SEO', 'Analytics']
    },
    {
        id: 3,
        title: "Free Courses Optimization",
        description: "A/B testing and optimization of Mindvalley's top-performing organic landing page",
        imageUrl: MvFreeCourses,
        projectUrl: 'https://www.mindvalley.com/free-courses/var',
        outcome: "Highest-traffic organic page revamp",
        outcomeTag: { label: "Conversion", icon: TrendingUp, color: "text-purple-700", bgColor: "bg-purple-50 border-purple-200" },
        tech: ['A/B Testing', 'React', 'Optimization']
    },
    {
        id: 4,
        title: "Squarefoot Platform",
        description: "100K+ Hong Kong property seekers with headless CMS architecture",
        imageUrl: Squarefoot,
        projectUrl: 'https://www.squarefoot.com.hk',
        outcome: "Headless WordPress + GraphQL + React",
        outcomeTag: { label: "Scale", icon: Zap, color: "text-orange-700", bgColor: "bg-orange-50 border-orange-200" },
        tech: ['GraphQL', 'React', 'WordPress']
    },
    {
        id: 5,
        title: "Think of Living Portal",
        description: "Modern lifestyle platform with scalable headless architecture",
        imageUrl: ThinkOfLiving,
        projectUrl: 'https://thinkofliving.com',
        outcome: "Full-stack solution across Asia",
        outcomeTag: { label: "User Experience", icon: Users, color: "text-teal-700", bgColor: "bg-teal-50 border-teal-200" },
        tech: ['Next.js', 'Node.js', 'CMS']
    },
    {
        id: 6,
        title: "Huddle Enterprise CMS",
        description: "Custom content management system with advanced search capabilities",
        imageUrl: Huddle,
        projectUrl: '#',
        outcome: "Symfony + Elasticsearch for internal teams",
        outcomeTag: { label: "Enterprise", icon: Zap, color: "text-indigo-700", bgColor: "bg-indigo-50 border-indigo-200" },
        tech: ['Symfony', 'Elasticsearch', 'PHP']
    }
]

interface PortfolioProps {
    ref?: React.MutableRefObject<null>
}

const Portfolio = forwardRef<HTMLDivElement, PortfolioProps>((props, ref) => {
    const handleDownloadCV = () => {
        (window as any)?.gtag('event', 'download_middle_click', {
            event_label: "Download Middle Click"
        })
        window.open(resumeLink, '_blank');
    };

    return (
        <section className="w-full bg-slate-50 py-16 lg:py-20 px-4 border-t border-gray-200/60" ref={ref}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <BlurFade delay={0.1} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 mb-4">
                            <AnimatedShinyText className="text-purple-700 font-semibold text-sm">
                                Portfolio & Case Studies
                            </AnimatedShinyText>
                        </div>
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-4"
                        >
                            Client Success Stories
                        </TextAnimate>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Real-world business impact through technical excellence and AI-powered innovation
                        </p>
                    </div>
                </BlurFade>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => {
                        const OutcomeIcon = project.outcomeTag.icon
                        return (
                            <BlurFade
                                key={project.id}
                                delay={0.15 + index * 0.08}
                                duration={0.5}
                                inView={true}
                                inViewMargin="-80px"
                            >
                                <MagicCard
                                    className="h-full cursor-pointer"
                                    gradientSize={250}
                                    gradientColor="rgba(147, 51, 234, 0.08)"
                                    gradientFrom="#9E7AFF"
                                    gradientTo="#FE8BBB"
                                >
                                    <div className="flex flex-col h-full p-1">
                                        {/* Image Container */}
                                        <div className="relative group overflow-hidden rounded-lg h-44 mb-4">
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Outcome Badge */}
                                            <div className="absolute top-3 right-3 z-10">
                                                <Badge className={`${project.outcomeTag.bgColor} ${project.outcomeTag.color} border text-xs font-semibold px-2.5 py-1 flex items-center gap-1 shadow-sm`}>
                                                    <OutcomeIcon className="w-3 h-3" />
                                                    {project.outcomeTag.label}
                                                </Badge>
                                            </div>

                                            {/* Hover Link */}
                                            {project.projectUrl && project.projectUrl !== '#' && (
                                                <a
                                                    href={project.projectUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white"
                                                >
                                                    <ExternalLink className="w-4 h-4 text-gray-700" />
                                                </a>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow px-1">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{project.description}</p>
                                            <p className="text-xs font-medium text-purple-600 mb-3">{project.outcome}</p>
                                        </div>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-1.5 px-1 pb-1">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-xs bg-gray-100 text-gray-600 rounded-md px-2 py-0.5 font-medium">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Border Beam on entire card */}
                                    <BorderBeam
                                        size={200}
                                        duration={12}
                                        delay={index * 2}
                                        colorFrom="#9E7AFF"
                                        colorTo="#FE8BBB"
                                        borderWidth={1.5}
                                    />
                                </MagicCard>
                            </BlurFade>
                        )
                    })}
                </div>

                {/* CTA */}
                <BlurFade delay={0.6} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="flex justify-center mt-12">
                        <ShimmerButton
                            onClick={handleDownloadCV}
                            className="text-base px-8 py-3 shadow-lg"
                            shimmerColor="#ffffff"
                            shimmerSize="0.08em"
                            shimmerDuration="3s"
                            borderRadius="12px"
                            background="linear-gradient(135deg, #1e1b4b, #312e81)"
                        >
                            <span className="flex items-center gap-2 font-semibold">
                                View Full Portfolio
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </ShimmerButton>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
})

Portfolio.displayName = 'Portfolio'
export default Portfolio;
