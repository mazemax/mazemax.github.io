'use client'

import { useRef } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiLinkedin } from "react-icons/si";
import { Quote } from "lucide-react";
import Image, {StaticImageData} from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { linkedinLink } from '@/app/data/links'
import { ShineBorder } from '@/components/ui/shine-border'
import { BlurFade } from '@/components/ui/blur-fade'
import { TextAnimate } from '@/components/ui/text-animate'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import styles from './TestimonialsSection.module.css';

import Prosper from 'public/stories/prosper.jpg'
import Sarah from 'public/stories/sarah.jpg'
import Haikal from 'public/stories/haikal.jpg'
import Kianyang from 'public/stories/kianyang.jpg'

interface Testimonial {
    id: number
    text: string
    author: string
    title: string
    company: string
    image: string | StaticImageData
    linkedinUrl: string
    highlight?: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "Saad is an amazing TechLead, colleague and friend. He is very thorough and never compromises on delivering high quality work. The most amazing part is even though he is driven, thorough, super effective, he also genuinely cares for the wellbeing of others and sees the best in everyone around him. He is also very patient in teaching and coaching and never withholds anything which promotes others growth.",
        author: "Prosper Chiduku",
        title: "Software Engineer",
        company: "Mindvalley Labs",
        image: Prosper,
        linkedinUrl: "https://www.linkedin.com/in/prosper-kudakwashe-chiduku-650444150",
        highlight: "Never compromises on delivering high quality work"
    },
    {
        id: 2,
        text: "I have a pleasure working with Saad when he was still with REA Group Asia. Saad is very passionate, brave and meticulous in his work. He is able to work independently and fast. Among his strongest area is React.js, to name a few. Saad also is keen on R&D and working on latest stuff. He is never short of coaching, reviewing and sharing knowledge with team member, making him a great person you want in a team.",
        author: "Sarah Khalisa",
        title: "Delivery Lead",
        company: "iProperty REA",
        image: Sarah,
        linkedinUrl: "https://www.linkedin.com/in/sarahkhalisa",
        highlight: "Able to work independently and fast"
    },
    {
        id: 3,
        text: "Saad was a technically gifted developer. He has deep knowledge and researches a topic very well. A go-to person when I have technical questions. On a personal level, Saad is a great colleague and always enjoyed our conversations together.",
        author: "Haikal Aris",
        title: "Business Analyst",
        company: "iProperty REA",
        image: Haikal,
        linkedinUrl: "https://www.linkedin.com/in/haikalma",
        highlight: "A go-to person for technical questions"
    },
    {
        id: 4,
        text: "Saad is passionate about technology and was a great contributor to the many teams in our engineering teams. I've worked on several projects with him and he shows dedication in using the latest technology, libraries or techniques in his work.",
        author: "Kian Yang Low",
        title: "Tech Lead",
        company: "iProperty REA",
        image: Kianyang,
        linkedinUrl: "https://www.linkedin.com/in/kianyang",
        highlight: "Great contributor to engineering teams"
    }
]

export default function TestimonialsSection() {
    const swiperRef = useRef(null)

    return (
        <section className="py-16 lg:py-20 px-8 md:px-16 bg-white border-t border-gray-200/60">
            <div className="max-w-6xl mx-auto">
                {/* Section Heading */}
                <BlurFade delay={0.1} duration={0.5} inView={true} inViewMargin="-100px">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4"
                    >
                        What Leaders Say About My Work
                    </TextAnimate>
                    <p className="text-lg md:text-xl text-gray-600 text-center mb-12">
                        Stories of collaboration, trust, and impactful results from <span className="font-semibold text-purple-600">Delivery Leads, Tech Leads, and Business Analysts</span>.
                    </p>
                </BlurFade>

                {/* Pull Quote - Highlighted Business Value */}
                <BlurFade delay={0.2} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="relative mb-12 max-w-3xl mx-auto">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 rounded-lg p-8 shadow-lg">
                            <Quote className="w-10 h-10 text-purple-600 mb-4" />
                            <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                                "Never compromises on delivering high quality work... able to work independently and fast."
                            </blockquote>
                            <div className="flex items-center">
                                <Image
                                    src={Sarah}
                                    alt="Sarah Khalisa"
                                    width={40}
                                    height={40}
                                    className="rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">Sarah Khalisa</p>
                                    <p className="text-sm text-gray-600">Delivery Lead, iProperty REA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlurFade>

                {/* Testimonials Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={true}
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        onSwiper={(swiper: any) => {
                            swiperRef.current = swiper
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3
                            }
                        }}
                        className={`!px-12 ${styles.testimonialSwiper}`}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={testimonial.id}>
                                <BlurFade 
                                    delay={0.3 + index * 0.1} 
                                    duration={0.5} 
                                    inView={true} 
                                    inViewMargin="-100px"
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </BlurFade>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* CTA */}
                <BlurFade delay={0.4} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="mt-12 text-center">
                        <Button asChild className="bg-[#0077b5] hover:bg-[#005582] text-white">
                            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                                <SiLinkedin className="mr-2 h-4 w-4" />
                                Explore My Full Recommendations
                            </a>
                        </Button>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="relative h-full">
            <Card className="h-full bg-white shadow-lg">
                <CardContent className="flex flex-col h-full p-6">
                    <div className="flex items-center mb-4">
                        <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={50}
                            height={50}
                            className="rounded-full mr-4"
                        />
                        <div className="text-left">
                            <h3 className="font-semibold text-xl text-gray-800">{testimonial.author}</h3>
                            <p className="text-sm text-gray-600 font-medium">{testimonial.title}, {testimonial.company}</p>
                        </div>
                    </div>
                    <p className="text-gray-700 flex-grow mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                    {testimonial.highlight && (
                        <div className="mb-4 p-3 bg-purple-50 border-l-2 border-purple-600 rounded">
                            <p className="text-sm font-semibold text-purple-900">{testimonial.highlight}</p>
                        </div>
                    )}
                    <a
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#0077b5] hover:underline"
                    >
                        <SiLinkedin className="mr-2 h-4 w-4" />
                        View on LinkedIn
                    </a>
                </CardContent>
            </Card>
            <ShineBorder
                className="absolute inset-0 pointer-events-none"
                borderWidth={2}
                duration={14}
                shineColor={["#9E7AFF", "#FE8BBB", "#FF8A00"]}
            />
        </div>
    )
}
