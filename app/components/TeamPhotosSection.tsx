'use client'

import React, { useState } from 'react'
import Image, {StaticImageData} from 'next/image'
import {Dialog, DialogContent, DialogDescription, DialogTitle} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'

import IpgTeam from 'public/teams/ipg-team.jpg'
import IpropertyTeam1 from 'public/teams/iproperty-team1.jpg'
import IpropertyTeam2 from 'public/teams/iproperty-team2.jpg'
import MindvalleyTeam from 'public/teams/mindvalley-team.jpg'
import MindvalleyTeamBbq from 'public/teams/mindvalley-team-bbq.jpg'

interface Photo {
    id: number
    src: string | StaticImageData
    alt: string
    caption?: string
}

const photos: Photo[] = [
    { id: 1, src: MindvalleyTeamBbq, alt: "Mindvalley Team BBQ 2024", caption: "Mindvalley Team BBQ 2024" },
    { id: 2, src: IpropertyTeam2, alt: "Technical Kick Off Event 2021", caption: "Technical Kick Off Event 2021" },
    { id: 3, src: MindvalleyTeam, alt: "Mindvalley Acquisition Team 2023", caption: "Mindvalley Acquisition Team 2023" },
    { id: 4, src: IpropertyTeam1, alt: "Lifestyle Team Gathering 2019", caption: "Lifestyle Team Gathering 2019" },
    { id: 5, src: IpgTeam, alt: "IPG Drama Competition Winner 2018", caption: "IPG Drama Competition Winner 2018" },
]

export default function TeamPhotosSection() {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)

    const openLightbox = (index: number) => {
        (window as any)?.gtag('event', 'team_open_lightbox', {
            event_label: "Team Open Lightbox"
        })

        setCurrentPhotoIndex(index)
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
        setIsZoomed(false)
    }

    const nextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }

    const prevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
    }

    const toggleZoom = () => {
        setIsZoomed(!isZoomed)
    }

    return (
        <section className="py-16">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                    Thriving Together: Moments of Collaboration and Success
                </h2>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-600 text-center mb-8">
                    A snapshot of the incredible teams I&apos;ve had the privilege to work with. Great results come from strong collaboration.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {photos.map((photo, index) => (
                        <div
                            key={photo.id}
                            className={`relative cursor-pointer overflow-hidden rounded-lg ${
                                index === 0 ? 'md:col-span-2 md:row-span-1' :
                                    index === 5 ? 'md:row-span-2' : ''
                            }`}
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                height={400}
                                className="transition-transform duration-300 hover:scale-110 bg-cover w-full h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Dialog open={lightboxOpen} onOpenChange={closeLightbox}>
                <DialogContent className="max-w-4xl w-full h-full flex items-center justify-center bg-black">
                    <DialogTitle className='hidden'>{photos[currentPhotoIndex].caption}</DialogTitle>
                    <DialogDescription className='hidden'>{photos[currentPhotoIndex].caption}</DialogDescription>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                            src={photos[currentPhotoIndex].src}
                            alt={photos[currentPhotoIndex].alt}
                            className={`w-full h-auto bg-cover transition-transform duration-300 ${isZoomed ? 'scale-150 bg-contain' : 'scale-100 bg-cover'}`}
                        />
                        <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                            <p>{photos[currentPhotoIndex].caption}</p>
                        </div>
                        <Button variant="outline" size="icon" className="absolute top-4 right-4" onClick={toggleZoom}>
                            {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
                        </Button>
                        <Button variant="outline" size="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2" onClick={prevPhoto}>
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={nextPhoto}>
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    )
}

