'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaGithub, FaYoutube, FaBook } from "react-icons/fa"
import {Button} from '@/components/ui/button'
import {ArrowRight} from 'lucide-react'
import { resumeLink } from '@/app/data/links'

import placeholder from 'public/placeholder.svg'
import hackathon from 'public/hackathon-ai/hackathon.png'
import derivAIHack from 'public/hackathon-ai/event-derivai.png'
import derivAIHack2 from 'public/hackathon-ai/event-derivai2.png'
import pixuranceLogo from 'public/hackathon-ai/pixurance-logo.png'
import huggingfaceIcon from 'public/expert-icons/huggingface.svg'
import lovableHackathon from 'public/hackathon-ai/lovable-hackathon.avif'

const HackathonAIInnovations = () => {

    const hackathons = [
        {
            name: "Worldwide Hackathon by lovable",
            year: "2025",
            image: lovableHackathon,
            badge: "Participant",
            description: "Created a collaborative research platform CortexBook using Lovable",
            projectLink: "https://cortexbook.lovable.app",
        },
        {
            name: "Deriv AI Hackathon",
            year: "2025",
            image: derivAIHack2,
            badge: "Participant",
            description: "Developed an AI-powered social trading app using LangGraph and OpenAI",
            projectLink: "https://drive.google.com/file/d/1HK83KihmAeyletUdB6utxbiyHy1HJv3e/view?usp=sharing",
        },
        {
            name: "Deriv NoCode Hackathon",
            year: "2024",
            image: derivAIHack,
            badge: "Top 10 Finalist",
            description: "Created an AI-powered social media intelligence platform",
            projectLink: "https://huggingface.co/spaces/maxsi/sentiment-sense",
        },
        {
            name: "More Hackathons",
            year: "2025",
            image: hackathon,
            badge: "Coming Soon",
            description: "Actively participating in hackathons to innovate and learn AI skills",
            projectLink: "#",
        },
    ]

    const aiProjects = [
        {
            name: "Pixurance",
            description: "Computer Vision mobile app for car accident insurance claims",
            image: pixuranceLogo,
            techStack: ["React Native", "Roboflow", "YOLO11"],
            demoLink: "https://universe.roboflow.com/pixurance/automobile-damage-detection-rzhxw",
            codeLink: "#",
            articleLink: "https://www.youtube.com/watch?v=RvSChOj_-rY",
        },
        {
            name: "Sentiment Sense",
            description: "NLP-based social media intelligence platform for sentiment tracking",
            image: huggingfaceIcon,
            techStack: ["Python", "Hugging Face", "Facebook BART"],
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
        <section className="w-full">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Hackathon & AI Innovations</h2>
                <p className="text-lg md:text-xl text-gray-600 text-center mb-5">
                    Bringing AI to life through competitive hackathons and groundbreaking projects
                </p>

                {/* Hackathon Timeline */}
                <div className="mb-16 overflow-x-auto">
                    <div className="flex space-x-6 pb-4">
                        {hackathons.map((hackathon, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-80 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg overflow-hidden shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={hackathon.image || placeholder}
                                    alt={hackathon.name}
                                    width={300}
                                    height={200}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">
                                        {hackathon.name} {hackathon.year}
                                    </h3>
                                    <span className="inline-block bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full mb-2">
                    {hackathon.badge}
                  </span>
                                    <p className="text-sm text-gray-300 mb-4">{hackathon.description}</p>
                                    {
                                        hackathon.projectLink !== "#" && (
                                            <Link
                                                href={hackathon.projectLink}
                                                target="_blank"
                                                className="inline-block bg-white text-purple-800 font-semibold py-2 px-4 rounded hover:bg-purple-100 hover:text-pink-500 transition duration-300"
                                            >
                                                View Project
                                            </Link>
                                        )
                                    }
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* AI Projects Display */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {aiProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#f5e2ef] bg-opacity-50 rounded-lg overflow-hidden shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <Image
                                        src={project.image || placeholder}
                                        alt={project.name}
                                        width={400}
                                        height={300}
                                        className="h-48 w-full object-contain md:w-48"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex space-x-2 mb-4">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-purple-700 text-xs text-white font-semibold px-2 py-1 rounded">
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <Link href={project.demoLink} className="flex items-center text-red-600 hover:text-red-300">
                                            <FaYoutube className="mr-1" /> Watch Demo
                                        </Link>
                                        <Link href={project.codeLink} className="flex items-center text-black hover:text-gray-300">
                                            <FaGithub className="mr-1" /> View Code
                                        </Link>
                                        <Link href={project.articleLink} className="flex items-center text-amber-400 hover:text-amber-300">
                                            <FaBook className="mr-1" /> Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
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