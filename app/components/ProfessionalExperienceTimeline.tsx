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
        role: 'Senior Frontend Developer',
        responsibilities: [
            'Engineering Lead at Acquisition team',
            'Full stack development for mindvalley.com',
            'Migrated to Nuxt v2.15 and Nuxt Bridge',
            'Executed up to 5 initiatives in parallel',
            'Helped marketing team make $19M+ sales',
            'Played vital role in terminating various legacy apps',
        ]
    },
    {
        id: 2,
        startDate: '2019',
        endDate: '2021',
        company: 'iProperty REA Group Asia',
        role: 'Senior Developer',
        responsibilities: [
            'Full stack development for Squarefoot, iProperty and ThinkOfLiving',
            'Participated in Optimize October Regional Web Initiative',
            'Migrated React app to functional components (Hooks)',
            'Migrated Apollo Server V1 to V2',
            'Migrated Next.js V6 to V8 for Squarefoot Lifestyle',
            'Developed BigQuery to MYSQL location data sync service'
        ]
    },
    {
        id: 3,
        startDate: '2017',
        endDate: '2019',
        company: 'IPG Mediabrands',
        role: 'Software Analyst',
        responsibilities: [
            'Rewritten 95% of Huddle (custom content portal) to serve 1000+ users',
            'Wrote many micro-services over AWS',
            'Upgraded PHP, Symfony and Webpack'
        ]
    },
    {
        id: 4,
        startDate: '2016',
        endDate: '2016',
        company: 'Litmus Labs',
        role: 'Senior Software Engineer',
        responsibilities: [
            'Integrated TBOHolidays, Hotelbeds and Travelport APIs in Momvaz Travel app',
            'Magento2 theme customization for Petrichor Jackets Ecommerce app'
        ]
    },
    {
        id: 5,
        startDate: '2014',
        endDate: '2016',
        company: 'Geekunit',
        role: 'Chief Information Officer',
        responsibilities: [
            'Executed four projects',
            'Performed DevOps tasks',
            'Trained and mentored all developers',
            'Published iOS and Android mobile apps',
            'Dived into on-page SEO, financial and HR aspects'
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
