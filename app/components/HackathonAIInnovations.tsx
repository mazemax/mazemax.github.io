'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Play, BookOpen } from "lucide-react"
import { Trophy, Medal } from "lucide-react"
import {Button} from '@/components/ui/button'
import {ArrowRight, Sparkles, ChevronDown, ChevronUp} from 'lucide-react'
import { resumeLink } from '@/app/data/links'
import { ShineBorder } from '@/components/ui/shine-border'
import { BlurFade } from '@/components/ui/blur-fade'
import { MagicCard } from '@/components/ui/magic-card'
import { BorderBeam } from '@/components/ui/border-beam'
import { SparklesText } from '@/components/ui/sparkles-text'
import { HyperText } from '@/components/ui/hyper-text'

import placeholder from 'public/placeholder.svg'
import derivAIHack from 'public/hackathon-ai/event-derivai.png'
import derivAIHack2 from 'public/hackathon-ai/deriviq.png'
import pixuranceLogo from 'public/hackathon-ai/pixurance-logo.png'
import huggingfaceIcon from 'public/expert-icons/huggingface.svg'
import lovableHackathon from 'public/hackathon-ai/lovable-hackathon.avif'
import medibudy from 'public/hackathon-ai/medibudy-ai.gif'
import mohHackathon from 'public/hackathon-ai/moh-hackathon-png-vWx9.png'
import chromeBuiltinHackathon from 'public/hackathon-ai/chrome-builtin-cover.jpg'
import derivAiHackathon from 'public/hackathon-ai/event-derivai2.png'
import derivAiHackathon3 from 'public/hackathon-ai/event_derivhack3.png'

const HackathonAIInnovations = () => {
    const [expandedProject, setExpandedProject] = useState<number | null>(null)

    const toggleProjectExpand = (index: number) => {
        setExpandedProject(expandedProject === index ? null : index)
    }

    const hackathons = [
        {
            name: "Deriv AI Hackathon",
            year: "2026",
            image: derivAiHackathon3,
            badge: "Selected for Round 2",
            badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
            icon: <Trophy className="w-4 h-4" />,
            description: "Developed DerivIQ, an AI trading analyst using OpenAI Agents SDK etc.",
            projectLink: "https://v0-deriv-iq.vercel.app",
            isNew: true,
        },
        {
            name: "AAIMS25 AI Code Fest - Healthcare Reimagined",
            year: "2025",
            image: mohHackathon,
            badge: "1st Place Winner",
            badgeColor: "bg-gradient-to-r from-yellow-400 to-amber-500",
            icon: <Trophy className="w-4 h-4" />,
            description: "Built MediBuddyAI - AI scheduling, follow-ups, and care insights system",
            projectLink: "https://ai-healthcare-xi.vercel.app",
        },
        {
            name: "Google Chrome Built-in AI Challenge",
            year: "2025",
            image: chromeBuiltinHackathon,
            badge: "Participant",
            badgeColor: "bg-blue-500",
            icon: <Medal className="w-4 h-4" />,
            description: "Developed QuickDraw game using multimodal Gemini nano model",
            projectLink: "#",
        },
        {
            name: "Worldwide Hackathon by lovable",
            year: "2025",
            image: lovableHackathon,
            badge: "Participant",
            badgeColor: "bg-purple-500",
            icon: <Medal className="w-4 h-4" />,
            description: "Created a collaborative research platform CortexBook using Lovable",
            projectLink: "https://cortexbook.lovable.app",
        },
        {
            name: "Deriv AI Hackathon",
            year: "2025",
            image: derivAiHackathon,
            badge: "Participant",
            badgeColor: "bg-pink-500",
            icon: <Medal className="w-4 h-4" />,
            description: "LangGraph and OpenAI based AI-powered social trading app",
            projectLink: "https://drive.google.com/file/d/1HK83KihmAeyletUdB6utxbiyHy1HJv3e/view?usp=sharing",
        },
        {
            name: "Deriv NoCode Hackathon",
            year: "2024",
            image: derivAIHack,
            badge: "Top 10 Finalist",
            badgeColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
            icon: <Medal className="w-4 h-4" />,
            description: "Created an AI-powered social media intelligence platform",
            projectLink: "https://huggingface.co/spaces/maxsi/sentiment-sense",
        },
    ]

    const aiProjects = [
        {
            name: "MediBuddyAI",
            description: "AI-first health-tech agent with scheduling, follow-ups, and care insights using RAG. Features Groq-deployed AI models and LiveKit Voice AI agent",
            image: medibudy,
            techStack: ["RAG", "Groq", "LiveKit", "Voice AI", "Next.js"],
            demoLink: "https://ai-healthcare-xi.vercel.app",
            codeLink: "#",
            articleLink: "#",
            badge: "1st Place Winner - AAIMS25",
        },
        {
            name: "DerivIQ",
            description: "AI-native trading analyst built with OpenAI Agents SDK, MCP integrations, and Spline 3D visualizations",
            image: derivAIHack2,
            techStack: ["OpenAI Agents SDK", "MCP", "Magic UI", "Spline 3D"],
            demoLink: "https://v0-deriv-iq.vercel.app",
            codeLink: "#",
            articleLink: "#",
            badge: "Round 2 - 2026",
            isNew: true,
        },
        {
            name: "Pixurance",
            description: "Computer Vision mobile app for car accident insurance claims using YOLO V11 and Roboflow platform",
            image: pixuranceLogo,
            techStack: ["React Native", "Roboflow", "YOLO11", "Computer Vision"],
            demoLink: "https://universe.roboflow.com/pixurance/automobile-damage-detection-rzhxw",
            codeLink: "#",
            articleLink: "https://www.youtube.com/watch?v=RvSChOj_-rY",
        },
        {
            name: "Sentiment Sense",
            description: "NLP-based social media intelligence platform for sentiment tracking using Facebook BART",
            image: huggingfaceIcon,
            techStack: ["Python", "Hugging Face", "Facebook BART", "NLP"],
            demoLink: "https://huggingface.co/spaces/maxsi/sentiment-sense",
            codeLink: "https://huggingface.co/spaces/maxsi/sentiment-sense/tree/main",
            articleLink: "https://www.linkedin.com/pulse/empowering-innovation-through-code-low-ai-tools-my-hackathon-shaikh-ysyoc/",
        },
    ]

    const handleDownloadCV = () => {
        (window as any)?.gtag('event', 'download_middle_click', {
            event_label: "Download Middle Click"
        })
        window.open(resumeLink, '_blank');
    };

    return (
        <section className="w-full bg-white py-16 lg:py-20 border-t border-gray-200/60 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-50" />
            
            {/* Gradient transition to dark CTA section below */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-900/10 to-gray-900/30 pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                <BlurFade delay={0} inView>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Hackathon & AI Innovations
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 text-center mb-5">
                        Bringing AI to life through competitive hackathons and groundbreaking projects
                    </p>
                </BlurFade>

                {/* Hackathon Timeline - Using Magic Cards */}
                <div className="mb-16">
                    <h3 className="text-xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-500" />
                        Competition Track Record
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hackathons.map((hackathon, index) => (
                            <BlurFade key={index} delay={index * 0.1} inView>
                                <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ShineBorder 
                                        className="rounded-xl"
                                        shineColor={hackathon.isNew ? ["#ff6b6b", "#feca57", "#ff9ff3"] : ["#a855f7", "#ec4899", "#f43f5e"]}
                                    />
                                    <div className="bg-white rounded-xl overflow-hidden">
                                        {hackathon.isNew && (
                                            <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                                NEW
                                            </div>
                                        )}
                                        <div className="relative w-full overflow-hidden aspect-video">
                                            <Image
                                                src={hackathon.image || placeholder}
                                                alt={hackathon.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className={`inline-flex items-center gap-1 ${hackathon.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                                                    {hackathon.icon}
                                                    {hackathon.badge}
                                                </span>
                                                <span className="text-gray-500 text-sm font-medium">{hackathon.year}</span>
                                            </div>
                                            <h3 className="text-lg font-bold mb-2 line-clamp-2">
                                                {hackathon.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{hackathon.description}</p>
                                            {hackathon.projectLink !== "#" && (
                                                <Link
                                                    href={hackathon.projectLink}
                                                    target="_blank"
                                                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors"
                                                >
                                                    View Project
                                                    <ArrowRight className="ml-1 w-4 h-4" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </BlurFade>
                        ))}
                    </div>
                </div>

                {/* AI Projects Display - Using MagicCard with expandable details */}
                <div className="mb-16">
                    <h3 className="text-xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5 text-pink-500" />
                        Featured AI Projects
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {aiProjects.map((project, index) => (
                            <BlurFade key={index} delay={index * 0.15} inView>
                                <MagicCard 
                                    className="p-0 overflow-hidden"
                                    gradientSize={300}
                                    gradientColor={project.isNew ? "#FF8A0020" : "#9E7AFF20"}
                                    gradientFrom={project.isNew ? "#FF8A00" : "#9E7AFF"}
                                    gradientTo={project.isNew ? "#FF3CAC" : "#FE8BBB"}
                                >
                                    {project.isNew && (
                                        <BorderBeam 
                                            size={60}
                                            duration={6}
                                            delay={index * 0.5}
                                            colorFrom="#FF8A00"
                                            colorTo="#FF3CAC"
                                        />
                                    )}
                                    <div className="relative">
                                        <div className="md:flex">
                                            <div className="relative w-full md:w-48 overflow-hidden aspect-square md:aspect-[4/3] md:h-48 flex-shrink-0">
                                                <Image
                                                    src={project.image || placeholder}
                                                    alt={project.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 192px"
                                                    className="object-cover"
                                                />
                                                {project.isNew && (
                                                    <div className="absolute top-2 right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                                                        NEW
                                                    </div>
                                                )}
                                                {project.badge && (
                                                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                                                        {project.badge}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-6 flex-1">
                                                <HyperText 
                                                    as="h3"
                                                    className="text-xl font-bold mb-2"
                                                    duration={1200}
                                                    animateOnHover={true}
                                                >
                                                    {project.name}
                                                </HyperText>
                                                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.techStack.map((tech, techIndex) => (
                                                        <span key={techIndex} className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex flex-wrap gap-4">
                                                    {project.demoLink && project.demoLink !== "#" && (
                                                        <Link href={project.demoLink} className="flex items-center text-red-600 hover:text-red-800 text-sm font-medium transition-colors">
                                                            <Play className="mr-1 w-4 h-4" /> Demo
                                                        </Link>
                                                    )}
                                                    {project.codeLink && project.codeLink !== "#" && (
                                                        <Link href={project.codeLink} className="flex items-center text-gray-700 hover:text-black text-sm font-medium transition-colors">
                                                            <Github className="mr-1 w-4 h-4" /> Code
                                                        </Link>
                                                    )}
                                                    {project.articleLink && project.articleLink !== "#" && (
                                                        <Link href={project.articleLink} className="flex items-center text-amber-600 hover:text-amber-800 text-sm font-medium transition-colors">
                                                            <BookOpen className="mr-1 w-4 h-4" /> Article
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Expandable details section */}
                                        <div className="border-t border-gray-100">
                                            <button
                                                onClick={() => toggleProjectExpand(index)}
                                                className={`w-full flex items-center justify-between p-4 text-sm font-medium transition-colors ${
                                                    project.isNew 
                                                        ? 'text-orange-600 hover:text-orange-700' 
                                                        : 'text-purple-600 hover:text-purple-700'
                                                }`}
                                                aria-expanded={expandedProject === index}
                                            >
                                                <SparklesText 
                                                    className="text-sm font-medium"
                                                    colors={project.isNew ? { first: '#FF8A00', second: '#FF3CAC' } : { first: '#9E7AFF', second: '#FE8BBB' }}
                                                    sparklesCount={3}
                                                >
                                                    {expandedProject === index ? 'Hide details' : 'Show details'}
                                                </SparklesText>
                                                {expandedProject === index ? (
                                                    <ChevronUp className="w-4 h-4" />
                                                ) : (
                                                    <ChevronDown className="w-4 h-4" />
                                                )}
                                            </button>
                                            
                                            {expandedProject === index && (
                                                <div className="px-6 pb-6">
                                                    <div className="bg-gray-50 rounded-lg p-4">
                                                        <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
                                                        <ul className="space-y-2 text-sm text-gray-600">
                                                            {project.name === "MediBuddyAI" && (
                                                                <>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-purple-500 mt-1">•</span>
                                                                        <span>AI-first health-tech agent with intelligent scheduling capabilities</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-purple-500 mt-1">•</span>
                                                                        <span>Automated follow-ups and care insights using RAG technology</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-purple-500 mt-1">•</span>
                                                                        <span>Groq-deployed AI models for lightning-fast inference</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-purple-500 mt-1">•</span>
                                                                        <span>LiveKit Voice AI agent for natural conversational experience</span>
                                                                    </li>
                                                                </>
                                                            )}
                                                            {project.name === "DerivIQ" && (
                                                                <>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-orange-500 mt-1">•</span>
                                                                        <span>AI-native trading analyst with real-time market insights</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-orange-500 mt-1">•</span>
                                                                        <span>Built with OpenAI Agents SDK for advanced reasoning</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-orange-500 mt-1">•</span>
                                                                        <span>MCP integrations for seamless data connectivity</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-orange-500 mt-1">•</span>
                                                                        <span>Spline 3D visualizations for immersive data exploration</span>
                                                                    </li>
                                                                </>
                                                            )}
                                                            {project.name === "Pixurance" && (
                                                                <>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-purple-500 mt-1">•</span>
                                                                        <span>Computer Vision mobile app for car accident insurance claims</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-purple-500 mt-1">•</span>
                                                                        <span>YOLO V11 model for accurate damage detection</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-purple-500 mt-1">•</span>
                                                                        <span>Roboflow platform integration for model deployment</span>
                                                                    </li>
                                                                </>
                                                            )}
                                                            {project.name === "Sentiment Sense" && (
                                                                <>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-purple-500 mt-1">•</span>
                                                                        <span>NLP-based social media intelligence platform</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-purple-500 mt-1">•</span>
                                                                        <span>Real-time sentiment tracking across platforms</span>
                                                                    </li>
                                                                    <li className="flex items-start gap-2">
                                                                        <span className="text-purple-500 mt-1">•</span>
                                                                        <span>Facebook BART model for advanced text generation</span>
                                                                    </li>
                                                                </>
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </MagicCard>
                            </BlurFade>
                        ))}
                    </div>
                </div>

                {/* Section CTA */}
                <div className="text-center mt-5">
                    <Button
                        onClick={handleDownloadCV}
                        className="cta-secondary text-lg px-8 py-4"
                        size="lg"
                    >
                        Explore More Details
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HackathonAIInnovations;
