'use client'

import { BlurFade } from '@/components/ui/blur-fade'
import { TextAnimate } from '@/components/ui/text-animate'

export default function Featured() {
    return (
        <section className="w-full bg-slate-50 py-12 lg:py-20 border-t border-gray-200/60">
            <div className="container mx-auto px-4 max-w-5xl">
                <BlurFade delay={0.1} duration={0.5} inView={true} inViewMargin="-100px">
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        className="text-3xl md:text-4xl font-bold text-center mb-4"
                    >
                        Discover My Journey with Industry Leaders
                    </TextAnimate>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
                        Featured in exclusive interview and success story
                    </p>
                </BlurFade>

                <div className="flex justify-center">
                    <div className="w-full max-w-2xl lg:max-w-3xl">
                        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/h-pMCZcC7s4`}
                                title="Max's Interview with Storyblok"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}