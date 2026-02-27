'use client'

import React, { useState, useId } from 'react'
import { skills, Skill } from '../data/skills'
import { Input } from "@/components/ui/input"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { BlurFade } from '@/components/ui/blur-fade'
import { TextAnimate } from '@/components/ui/text-animate'
import { MagicCard } from '@/components/ui/magic-card'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { IconCloud } from '@/components/ui/icon-cloud'
import { BorderBeam } from '@/components/ui/border-beam'
import { Search, Brain, Layout, Server, Database, Smartphone, Wrench, Cloud, Users, Award } from 'lucide-react'

const categoryIcons: Record<string, any> = {
    'Artificial Intelligence': Brain,
    'Frontend': Layout,
    'Backend': Server,
    'Database': Database,
    'Mobile': Smartphone,
    'Tools': Wrench,
    'Cloud Services': Cloud,
}

const categoryColors: Record<string, string> = {
    'Artificial Intelligence': 'from-purple-500 to-violet-600',
    'Frontend': 'from-blue-500 to-cyan-500',
    'Backend': 'from-green-500 to-emerald-500',
    'Database': 'from-orange-500 to-amber-500',
    'Mobile': 'from-pink-500 to-rose-500',
    'Tools': 'from-gray-600 to-gray-700',
    'Cloud Services': 'from-sky-500 to-blue-600',
}

const techIconSlugs = [
    "typescript", "javascript", "react", "nextdotjs", "vuedotjs", "nuxtdotjs",
    "nodedotjs", "python", "php", "laravel", "graphql", "postgresql",
    "mongodb", "redis", "docker", "amazonaws", "googlecloud",
    "tailwindcss", "sass", "jest", "cypress", "github", "figma",
    "openai", "langchain", "elasticsearch",
    "anthropic", "replicate", "fastapi", "supabase", "vercel", "githubactions",
]

export default function MySkills() {
    const [activeTab, setActiveTab] = useState<'technical' | 'soft' | 'certifications'>('technical')
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const stableId = useId()

    const filteredSkills = skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const technicalSubcategories = ['Artificial Intelligence', 'Frontend', 'Backend', 'Database', 'Mobile', 'Tools', 'Cloud Services']

    const getSkillsByCategory = (subcategory: string) =>
        filteredSkills.filter((skill) => skill.category === 'technical' && skill.subcategory === subcategory)

    const renderSkill = (skill: Skill) => {
        let IconComponent: React.ReactNode;
        if (typeof skill.icon === 'function' || typeof skill.icon === 'object') {
            IconComponent = React.createElement(skill.icon as React.ElementType, { className: "text-3xl" });
        } else {
            IconComponent = skill.icon;
        }
        return (
            <div
                key={skill.name}
                className="group bg-white border border-gray-200/60 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-purple-300 cursor-pointer"
            >
                <div className="text-gray-600 group-hover:text-purple-600 transition-colors mb-2">
                    {IconComponent}
                </div>
                <span className="font-semibold text-sm text-gray-800 text-center">{skill.name}</span>
                <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500"
                        style={{ width: `${skill.proficiency}%` }}
                    />
                </div>
            </div>
        )
    }

    const renderTechnicalSkills = () => (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left: Icon Cloud */}
            <div className="lg:col-span-2 flex items-center justify-center">
                <BlurFade delay={0.2} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="relative w-full max-w-[400px] mx-auto">
                        <IconCloud
                            images={techIconSlugs.map(slug => `https://cdn.simpleicons.org/${slug}`)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent pointer-events-none" />
                    </div>
                </BlurFade>
            </div>

            {/* Right: Category Cards */}
            <div className="lg:col-span-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {technicalSubcategories.map((subcategory, idx) => {
                        const Icon = categoryIcons[subcategory] || Wrench
                        const count = getSkillsByCategory(subcategory).length
                        const isSelected = selectedCategory === subcategory
                        return (
                            <BlurFade key={subcategory} delay={0.15 + idx * 0.05} duration={0.4} inView={true} inViewMargin="-80px">
                                <button
                                    onClick={() => setSelectedCategory(isSelected ? null : subcategory)}
                                    className={`w-full text-left transition-all duration-300 ${isSelected ? 'scale-[1.02]' : ''}`}
                                >
                                    <MagicCard
                                        className="h-full"
                                        gradientSize={150}
                                        gradientColor={isSelected ? "rgba(147, 51, 234, 0.15)" : "rgba(147, 51, 234, 0.05)"}
                                        gradientFrom="#9E7AFF"
                                        gradientTo="#FE8BBB"
                                    >
                                        <div className={`p-4 rounded-xl ${isSelected ? 'bg-purple-50/50' : ''}`}>
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className={`p-2 rounded-lg bg-gradient-to-br ${categoryColors[subcategory]} text-white`}>
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-sm text-gray-900">{subcategory}</h3>
                                                    <p className="text-xs text-gray-500">{count} skills</p>
                                                </div>
                                            </div>
                                        </div>
                                    </MagicCard>
                                </button>
                            </BlurFade>
                        )
                    })}
                </div>

                {/* Expanded Skills Grid */}
                {selectedCategory && (
                    <BlurFade delay={0} duration={0.3} inView={true} inViewMargin="-50px">
                        <div className="relative bg-white border border-gray-200/60 rounded-xl p-6 shadow-sm">
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                {React.createElement(categoryIcons[selectedCategory] || Wrench, { className: "w-5 h-5 text-purple-600" })}
                                {selectedCategory}
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {getSkillsByCategory(selectedCategory).map(renderSkill)}
                            </div>
                            <BorderBeam size={200} duration={10} colorFrom="#9E7AFF" colorTo="#FE8BBB" borderWidth={1.5} />
                        </div>
                    </BlurFade>
                )}

                {!selectedCategory && (
                    <BlurFade delay={0.4} duration={0.4} inView={true} inViewMargin="-80px">
                        <div className="text-center py-8 text-gray-400 border border-dashed border-gray-200 rounded-xl">
                            <Brain className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">Click a category above to explore skills</p>
                        </div>
                    </BlurFade>
                )}
            </div>
        </div>
    )

    return (
        <section className="w-full bg-white py-16 lg:py-20 border-t border-gray-200/60">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <BlurFade delay={0.1} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
                            <AnimatedShinyText className="text-blue-700 font-semibold text-sm">
                                Skills & Technologies
                            </AnimatedShinyText>
                        </div>
                        <TextAnimate
                            animation="blurIn"
                            by="word"
                            className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-4"
                        >
                            Technical Expertise
                        </TextAnimate>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Interactive overview of my technology stack and skills
                        </p>
                    </div>
                </BlurFade>

                {/* Search */}
                <BlurFade delay={0.15} duration={0.5} inView={true} inViewMargin="-100px">
                    <div className="relative max-w-md mx-auto mb-10">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="Search skills (e.g., Python, React, AWS)"
                            className="pl-10 bg-white border-gray-200 shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </BlurFade>

                {/* Tabs */}
                <BlurFade delay={0.2} duration={0.5} inView={true} inViewMargin="-100px">
                    <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as typeof activeTab)}>
                        <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 shadow-sm border bg-white mb-8">
                            <TabsTrigger key={`${stableId}-technical`} value="technical" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700">
                                <Layout className="w-4 h-4 mr-2" />
                                Tech Stack
                            </TabsTrigger>
                            <TabsTrigger key={`${stableId}-soft`} value="soft" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700">
                                <Users className="w-4 h-4 mr-2" />
                                Leadership
                            </TabsTrigger>
                            <TabsTrigger key={`${stableId}-certifications`} value="certifications" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700">
                                <Award className="w-4 h-4 mr-2" />
                                Certifications
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent key={`${stableId}-content-technical`} value="technical">
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
                </BlurFade>
            </div>
        </section>
    )
}
