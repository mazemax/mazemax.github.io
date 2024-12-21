import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

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
}

export default function TimelineItem({ experience, isExpanded, onToggle, isEven }: TimelineItemProps) {
    return (
        <div className={`relative pl-8 group text-left ${isEven ? 'md:pl-0 md:pr-8' : ''}`}>
            <div
                className={`absolute top-0 w-4 h-4 bg-[#FF8A00] rounded-full mt-1.5 transition-all duration-300 group-hover:scale-125 ${isEven ? 'left-0 md:left-auto md:right-0' : 'left-0'}`}></div>
            <div className="flex flex-col mb-2">
        <span className="text-sm font-semibold text-[#6A0DAD]">
          {experience.startDate} - {experience.endDate}
        </span>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#FF3CAC] transition-colors duration-300">{experience.role}</h3>
            </div>
            <p className="text-lg text-gray-600 mb-2">{experience.company}</p>
            <button
                onClick={onToggle}
                className="flex items-center text-[#FF8A00] hover:text-[#FF3CAC] focus:outline-none transition-colors duration-200"
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
                <ul className="mt-4 ml-4 list-disc text-gray-700 animate-fadeIn w-52">
                    {experience.responsibilities.map((responsibility, index) => (
                        <li key={index} className="mb-2">
                            {responsibility}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
