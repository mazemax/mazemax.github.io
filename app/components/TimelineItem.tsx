'use client'

import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { SparklesText } from '@/components/ui/sparkles-text'
import { NeonGradientCard } from '@/components/ui/neon-gradient-card'
import { BorderBeam } from '@/components/ui/border-beam'
import { MagicCard } from '@/components/ui/magic-card'
import { HyperText } from '@/components/ui/hyper-text'
import { BlurFade } from '@/components/ui/blur-fade'

interface Experience {
    id: number
    startDate: string
    endDate: string
    company: string
    role: string
    responsibilities: string[]
}

interface TimelineItemProps {
    experience: Experience
    isExpanded: boolean
    onToggle: () => void
    isEven: boolean
    isCurrent?: boolean
}

export default function TimelineItem({ experience, isExpanded, onToggle, isEven, isCurrent = false }: TimelineItemProps) {
    const CardWrapper = isCurrent ? NeonGradientCard : MagicCard

    return (
        <div className={`relative pl-8 group text-left ${isEven ? 'md:pl-0 md:pr-8' : ''}`}>
            {/* Animated timeline dot with pulse effect */}
            <div
                className={`absolute top-0 w-5 h-5 rounded-full mt-1.5 transition-all duration-300 group-hover:scale-150 ${
                    isCurrent 
                        ? 'bg-gradient-to-r from-[#FF3CAC] to-[#FF8A00] shadow-lg shadow-orange-500/50 animate-pulse' 
                        : 'bg-[#FF8A00] group-hover:shadow-lg group-hover:shadow-orange-400/50'
                } ${isEven ? 'left-0 md:left-auto md:right-0' : 'left-0'}`}
            >
                {isCurrent && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF3CAC] to-[#FF8A00] opacity-75 animate-ping"></span>
                )}
            </div>

            {isCurrent ? (
                <NeonGradientCard 
                    className="relative"
                    borderSize={3}
                    borderRadius={16}
                    neonColors={{
                        firstColor: '#FF3CAC',
                        secondColor: '#FF8A00'
                    }}
                >
                    <BorderBeam 
                        size={80}
                        duration={8}
                        delay={0}
                        colorFrom="#FF3CAC"
                        colorTo="#FF8A00"
                    />
                    <CardContent 
                        experience={experience}
                        isExpanded={isExpanded}
                        onToggle={onToggle}
                        isCurrent={isCurrent}
                    />
                </NeonGradientCard>
            ) : (
                <MagicCard 
                    className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    gradientSize={300}
                    gradientColor="#9E7AFF20"
                    gradientFrom="#9E7AFF"
                    gradientTo="#FE8BBB"
                >
                    <CardContent 
                        experience={experience}
                        isExpanded={isExpanded}
                        onToggle={onToggle}
                        isCurrent={isCurrent}
                    />
                </MagicCard>
            )}
        </div>
    )
}

function CardContent({ 
    experience, 
    isExpanded, 
    onToggle, 
    isCurrent 
}: { 
    experience: Experience
    isExpanded: boolean
    onToggle: () => void
    isCurrent: boolean
}) {
    return (
        <>
            <div className="flex flex-col mb-3">
                <div className="flex items-center gap-2 mb-2">
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        isCurrent 
                            ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white' 
                            : 'bg-purple-100 text-purple-700'
                    }`}>
                        {experience.startDate} - {experience.endDate}
                    </span>
                    {isCurrent && (
                        <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full animate-pulse">
                            Current Role
                        </span>
                    )}
                </div>
                
                <HyperText 
                    as="h3"
                    className={`text-xl md:text-2xl font-bold py-1 ${
                        isCurrent ? 'text-gray-900' : 'text-gray-800'
                    }`}
                    duration={1200}
                    animateOnHover={true}
                >
                    {experience.role}
                </HyperText>
            </div>
            
            <div className="text-lg text-gray-600 mb-4">
                <SparklesText 
                    className="text-lg font-semibold"
                    colors={{ first: '#9E7AFF', second: '#FE8BBB' }}
                    sparklesCount={isCurrent ? 8 : 5}
                >
                    {experience.company}
                </SparklesText>
            </div>
            
            <button
                onClick={onToggle}
                className={`flex items-center font-medium focus:outline-none transition-all duration-200 ${
                    isCurrent 
                        ? 'text-orange-600 hover:text-purple-700' 
                        : 'text-[#FF8A00] hover:text-[#FF3CAC]'
                }`}
                aria-expanded={isExpanded}
            >
                {isExpanded ? (
                    <>
                        <span className="mr-1">Hide details</span>
                        <ChevronUpIcon className="w-4 h-4"/>
                    </>
                ) : (
                    <>
                        <span className="mr-1">Show details</span>
                        <ChevronDownIcon className="w-4 h-4"/>
                    </>
                )}
            </button>
            
            {isExpanded && (
                <div className="mt-4">
                    <ul className="ml-4 space-y-2 list-disc text-gray-700">
                        {experience.responsibilities.map((responsibility, index) => (
                            <BlurFade
                                key={index}
                                delay={index * 0.05}
                                duration={0.4}
                                inView={true}
                            >
                                <li className="leading-relaxed">
                                    {responsibility}
                                </li>
                            </BlurFade>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}
