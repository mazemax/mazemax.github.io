'use client'

import React, {useRef} from 'react'
import Image from 'next/image'
import {useParallax} from '../hooks/useParallax'
import {Button} from '@/components/ui/button'
import {ArrowRight} from 'lucide-react'
import { whatsAppLink } from '@/app/data/links'
import Saad from 'public/saad-photo.jpg'
import MVLogo from 'public/org/mindvalley_logo.jpeg'
import REALogo from 'public/org/rea_group_logo.jpeg'

interface HeroSectionProps {
    portfolioRef?: React.MutableRefObject<HTMLDivElement | null>
}

export default function HeroSection({portfolioRef}: HeroSectionProps) {
    const parallaxRef = useRef<HTMLDivElement>(null)
    useParallax(parallaxRef)

    const whatsappOnClick = () => {
        (window as any)?.gtag('event', 'whatsapp_click', {
            event_label: "Whatsapp Click"
        })
        window.location.href = whatsAppLink
    }

    const portfolioButtonClick = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        (window as any)?.gtag('event', 'portfolio_click', {
            event_label: "Portfolio Click"
        })

        if (portfolioRef) {
            portfolioRef?.current?.scrollIntoView({ behavior: "smooth" })
        }
    };

    return (
        <section className="relative flex flex-col lg:flex-row overflow-hidden">
            {/* Left Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 z-10">
                <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left mb-6">
          <span className="bg-gradient-to-r from-purple-700 to-orange-500 text-transparent bg-clip-text">
            Unlock Your Team's Potential
          </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 text-center lg:text-left mb-8">
                    Over 10 years of experience with high-performance teams and delivering exceptional results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button className="cta-primary text-lg px-8 py-4" size="lg" onClick={whatsappOnClick}>
                        Contact Now
                        <ArrowRight className="ml-2 h-5 w-5"/>
                    </Button>
                    <Button variant="outline" className="cta-secondary text-lg px-8 py-4" size="lg" onClick={portfolioButtonClick}>
                        View Portfolio
                    </Button>
                </div>
                <div className="text-center lg:text-left">
                    <p className="text-sm text-gray-500 mb-2">Trusted by global leaders in technology and innovation</p>
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <Image src={MVLogo} alt="Mindvalley" width={60} height={60} title="Mindvalley"
                               className="rounded-md"/>
                        <Image src={REALogo} alt="iProperty REA" width={60} height={60} title="iProperty REA"
                               className="rounded-md"/>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 relative">
                <div ref={parallaxRef} className="hero-bg absolute -inset-20">
                    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 200 200"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF3CAC" fillOpacity="0.1"
                              d="M45.3,-51.5C56.9,-37.8,63.3,-19.5,62.3,-2.3C61.4,14.9,53.1,29.8,41.6,41.6C30.1,53.3,15.1,61.8,-1.9,63.9C-18.9,66,-37.8,61.6,-51.5,50.3C-65.2,39,-73.7,20.7,-72.9,3.3C-72.2,-14.1,-62.3,-28.2,-49.4,-41.8C-36.5,-55.4,-20.7,-68.5,-1.6,-67.1C17.6,-65.6,33.7,-65.2,45.3,-51.5Z"
                              transform="translate(100 100)"/>
                    </svg>
                </div>
                <div className="relative h-full flex items-center justify-center p-8">
                    <div
                        className="profile-image-container w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                        <Image
                            src={Saad}
                            alt="Profile"
                            width={320}
                            height={320}
                            className="profile-image w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

