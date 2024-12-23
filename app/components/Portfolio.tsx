'use client'

import Image, {StaticImageData} from 'next/image'
import React, { forwardRef } from 'react'
import {ArrowRight} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import {Gallery, Item} from 'react-photoswipe-gallery'
import { resumeLink } from '@/app/data/links'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'photoswipe/dist/photoswipe.css'

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
}

const projects: Project[] = [
    {
        id: 1,
        title: "Workway",
        description: "Implemented sales page for the new B2B product",
        imageUrl: Workway,
        projectUrl: 'https://www.getworkway.com'
    },
    {
        id: 2,
        title: "Growth SEO Transactional Keywords Pages",
        description: "Created a series of inter-linked, SEO-optimized pages that target non-brand transactional keywords",
        imageUrl: MvSpirituality,
        projectUrl: 'https://www.mindvalley.com/programs/spirituality'
    },
    {
        id: 3,
        title: "Mindvalley Free Courses",
        description: "Revamp and A/B testing of one of the best performing Mindvalley page in organic search",
        imageUrl: MvFreeCourses,
        projectUrl: 'https://www.mindvalley.com/free-courses/var'
    },
    {
        id: 4,
        title: "Squarefoot",
        description: "Lifestyle product powered by Headless Wordpress CMS, GraphQL and ReactJS",
        imageUrl: Squarefoot,
        projectUrl: 'https://www.squarefoot.com.hk'
    },
    {
        id: 5,
        title: "Think of Living",
        description: "Lifestyle product powered by Headless Wordpress CMS, GraphQL and ReactJS",
        imageUrl: ThinkOfLiving,
        projectUrl: 'https://thinkofliving.com'
    },
    {
        id: 6,
        title: "Huddle",
        description: "Custom CMS powered by Symfony, Eloquent ORM, Elastic Search and ReactJS",
        imageUrl: Huddle,
        projectUrl: '#'
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
        <section className="w-full" ref={ref}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Explore Notable Projects</h2>
                <p className="text-lg md:text-xl text-gray-600 text-center mb-5">A showcase of my technical expertise in
                    real-world projects</p>

                <Gallery>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{clickable: true}}
                        // autoplay={{delay: 5000, disableOnInteraction: false}}
                        loop={true}
                        className="work-screenshots-swiper"
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div
                                    className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl w-full md:w-5/6 lg:w-7/12 h-48 md:h-72 lg:h-72 xl:h-96 mx-auto">
                                    <Item
                                        original={typeof project.imageUrl === 'string' ? project.imageUrl : project.imageUrl.src}
                                        thumbnail={typeof project.imageUrl === 'string' ? project.imageUrl : project.imageUrl.src}
                                        width="800"
                                        height="600"
                                    >
                                        {({ref, open}) => (
                                            <Image
                                                ref={ref as unknown as React.MutableRefObject<HTMLImageElement>}
                                                onClick={open}
                                                src={project.imageUrl}
                                                alt={project.title}
                                                fill
                                                className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        )}
                                    </Item>
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 flex flex-col justify-end p-6">
                                        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-200 mb-4">{project.description}</p>
                                        <a
                                            href={project.projectUrl}
                                            className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:from-pink-500 hover:to-orange-500 hover:shadow-lg hover:scale-105 w-1/2 mx-auto"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Gallery>

                <div className="text-center mt-5">
                    <Button
                        onClick={handleDownloadCV}
                        className="cta-secondary text-lg px-8 py-4"
                        size="lg"
                    >
                        Know More
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </Button>
                </div>
            </div>
        </section>
    )
})

export default Portfolio;