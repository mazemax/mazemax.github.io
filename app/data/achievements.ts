import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { MdHealthAndSafety } from 'react-icons/md';

export interface Achievement {
    id: string;
    type: 'hackathon' | 'certification' | 'award' | 'recognition';
    title: string;
    description: string;
    issuer: string;
    date: string;
    position?: string;
    technologies?: string[];
    icon: IconType;
    color: string;
    featured: boolean;
    credentialUrl?: string;
}

export const achievements: Achievement[] = [
    {
        id: 'aaims25-winner',
        type: 'hackathon',
        title: 'AAIMS25 AI Code Fest - Healthcare Reimagined',
        description: 'Built MediBuddyAI - a comprehensive healthcare solution for smarter scheduling, follow-ups, and care insights. Delivered complete solution in 2 days.',
        issuer: 'ASEAN AI Summit 2025',
        date: 'Aug 2025',
        position: '1st Place',
        technologies: ['ReactJS', 'NextJS', 'Vercel', 'Groq', 'LiveKit', 'Supabase'],
        icon: MdHealthAndSafety,
        color: '#10B981',
        featured: true
    },
    {
        id: 'deriv-hackathon',
        type: 'hackathon',
        title: 'Deriv Hackathon',
        description: 'Created Sentiment Sense - NLP-based social media intelligence platform using Facebook BART model for advanced sentiment tracking.',
        issuer: 'Deriv',
        date: '2024',
        position: 'Shortlisted',
        technologies: ['Python', 'Gradio', 'Facebook BART', 'NLP'],
        icon: FaMedal,
        color: '#F59E0B',
        featured: true
    },
    {
        id: 'js-rag-cert',
        type: 'certification',
        title: 'JavaScript RAG Web Apps with LlamaIndex',
        description: 'Advanced certification covering Retrieval-Augmented Generation implementation using JavaScript and LlamaIndex framework.',
        issuer: 'DeepLearning.AI',
        date: '2024',
        technologies: ['JavaScript', 'LlamaIndex', 'RAG', 'AI'],
        icon: FaCertificate,
        color: '#3B82F6',
        featured: true,
        credentialUrl: 'https://learn.deeplearning.ai/accomplishments/1deb9c5a-2aec-47d9-b678-a4c4b179ea00?usp=sharing'
    },
    {
        id: 'gradio-cert',
        type: 'certification',
        title: 'Building Generative AI Applications with Gradio',
        description: 'Certification covering the development of interactive AI applications using Gradio framework for machine learning demos.',
        issuer: 'DeepLearning.AI',
        date: '2024',
        technologies: ['Python', 'Gradio', 'AI', 'Machine Learning'],
        icon: FaCertificate,
        color: '#3B82F6',
        featured: true,
        credentialUrl: 'https://learn.deeplearning.ai/accomplishments/31d16249-3a76-44b3-a18d-68142ed380ef?usp=sharing'
    }
];

export const getAchievementsByType = (type: Achievement['type']): Achievement[] => {
    return achievements.filter(achievement => achievement.type === type);
};

export const getFeaturedAchievements = (): Achievement[] => {
    return achievements.filter(achievement => achievement.featured);
};