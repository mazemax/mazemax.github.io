'use client'

import React, { useState, useId } from 'react'
import { skills, Skill } from '../data/skills'
import { Input } from "@/components/ui/input"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function MySkills() {
    const [activeTab, setActiveTab] = useState<'technical' | 'soft' | 'certifications'>('technical')
    const [searchTerm, setSearchTerm] = useState('')
    const stableId = useId()

    const filteredSkills = skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const technicalSubcategories = ['Artificial Intelligence', 'Frontend', 'Backend', 'Database', 'Mobile', 'Tools', 'Cloud Services']

    const renderSkill = (skill: Skill) => {
        const IconComponent = skill.icon as React.ElementType;
        return (
            <div
                key={skill.name}
                className="bg-secondary rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-[#FF8A00] via-[#FF3CAC] to-[#6A0DAD] hover:text-white cursor-pointer"
            >
                <IconComponent className="text-4xl mb-2" />
                <span className="font-semibold text-center">{skill.name}</span>
                <div className="w-full bg-background/50 h-1 mt-2 rounded-full overflow-hidden">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FF8A00] via-[#FF3CAC] to-[#6A0DAD]"
                        style={{ width: `${skill.proficiency}%` }}
                    />
                </div>
            </div>
        )
    }

    const renderTechnicalSkills = () => (
        <Accordion type="single" defaultValue="Artificial Intelligence" collapsible className="w-full">
            {technicalSubcategories.map((subcategory) => (
                <AccordionItem value={subcategory} key={subcategory}>
                    <AccordionTrigger className='text-sm'>{subcategory}</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredSkills
                                .filter((skill) => skill.category === 'technical' && skill.subcategory === subcategory)
                                .map(renderSkill)}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Skills Overview
                </h2>
                <p className="text-lg md:text-xl text-gray-600 text-center mb-5">
                    Explore my expertise to align with your team's needs
                </p>

                <Input
                    type="text"
                    placeholder="Search for skills (e.g., Python, React, AWS)"
                    className="mb-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as typeof activeTab)}>
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger key={`${stableId}-technical`} value="technical">Technical Skills</TabsTrigger>
                        <TabsTrigger key={`${stableId}-soft`} value="soft">Soft Skills</TabsTrigger>
                        <TabsTrigger key={`${stableId}-certifications`} value="certifications">Certifications</TabsTrigger>
                    </TabsList>
                    <TabsContent key={`${stableId}-content-technical`} value="technical" className="mt-4">
                        {renderTechnicalSkills()}
                    </TabsContent>
                    <TabsContent key={`${stableId}-content-soft`} value="soft" className="mt-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredSkills.filter((skill) => skill.category === 'soft').map(renderSkill)}
                        </div>
                    </TabsContent>
                    <TabsContent key={`${stableId}-content-certifications`} value="certifications" className="mt-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredSkills.filter((skill) => skill.category === 'certifications').map(renderSkill)}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
