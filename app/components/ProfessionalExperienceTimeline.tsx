import { useState } from 'react'
import TimelineItem from './TimelineItem'

interface Experience {
    id: number
    startDate: string
    endDate: string
    company: string
    role: string
    responsibilities: string[]
}

const experiences: Experience[] = [
    {
        id: 1,
        startDate: '2021',
        endDate: 'Present',
        company: 'Mindvalley Labs',
        role: 'Senior Full Stack Engineer',
        responsibilities: [
            'Created 10+ AI Agents to improve productivity of tech team',
            'Led initiatives enabling $19M+ sales, aligning technical solutions with marketing objectives',
            'Delivered high-impact solutions using Headless Storyblok CMS and Nuxt.js',
            'Spearheaded the Evercoach & MV Coach merge, documenting architecture challenges',
            'Migrated project to Nuxt v2.15 and Nuxt Bridge to enhance maintainability and performance',
            'Managed up to 5 parallel initiatives to deliver key deliverables on time',
            'Collaborated with marketing and product teams to streamline workflows',
        ]
    },
    {
        id: 2,
        startDate: '2019',
        endDate: '2021',
        company: 'iProperty REA Group Asia',
        role: 'Senior Developer',
        responsibilities: [
            'Improved web application performance by upgrading Next.js v6 to v8 and Apollo Server',
            'Migrated React projects to functional components with Hooks',
            'Developed BigQuery - MySQL data sync service ensuring real-time location accuracy',
            'Enhanced core functionalities for Squarefoot and iProperty platforms, improving user experience',
            'Participated in Optimize October Regional Web Initiative'
        ]
    },
    {
        id: 3,
        startDate: '2017',
        endDate: '2019',
        company: 'IPG Mediabrands',
        role: 'Software Analyst',
        responsibilities: [
            'Overhauled 95% of a legacy codebase for a content portal, serving 1,000+ active users',
            'Built scalable microservices architecture on AWS, improving performance and reliability',
            'Modernized platforms with tools like Symfony, Docker, and Webpack for robust solutions'
        ]
    },
    {
        id: 4,
        startDate: '2016',
        endDate: '2016',
        company: 'Litmus Labs',
        role: 'Senior Software Engineer',
        responsibilities: [
            'Developed Momvaz Travel application by integrating APIs like TBOHolidays and Travelport',
            'Customized and optimized Magento2 themes for large-scale eCommerce deployments'
        ]
    },
    {
        id: 5,
        startDate: '2014',
        endDate: '2016',
        company: 'Geekunit',
        role: 'Chief Information Officer',
        responsibilities: [
            'Executed 4 major projects while introducing modern DevOps practices and leading development teams',
            'Mentored developers and managed end-to-end project lifecycles, delivering high-quality solutions',
            'Published iOS and Android mobile applications',
            'Managed technical, financial and HR operations as executive leader'
        ]
    },
    {
        id: 6,
        startDate: '2013',
        endDate: '2014',
        company: 'Logic-Unit',
        role: 'Manager Software Engineer',
        responsibilities: [
            'Delivered mobile and FB apps',
            'Guided junior devs',
            'Managed social media accounts'
        ]
    }
]

export default function ProfessionalExperienceTimeline() {
    const [expandedId, setExpandedId] = useState<number | null>(null)

    const toggleExpand = (id: number) => {
        (window as any)?.gtag('event', 'experience_toggle_click', {
            event_label: "Experience Toggle Click"
        })

        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <section className="max-w-7xl mx-auto p-4 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Professional Experience</h2>
            <div className="relative md:grid md:grid-cols-2 md:gap-8">
                <div
                    className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-br from-[#FF3CAC] via-[#FF8A00] to-[#6A0DAD] transform -translate-x-1/2"></div>
                {experiences.map((experience, index) => (
                    <div key={experience.id} className={`mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <TimelineItem
                            experience={experience}
                            isExpanded={expandedId === experience.id}
                            onToggle={() => toggleExpand(experience.id)}
                            isEven={index % 2 === 0}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
