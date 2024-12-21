import { FaJs, FaReact, FaNode, FaAws, FaDocker, FaSass, FaTrophy, FaUserCog } from 'react-icons/fa';
import { SiTypescript, SiVuedotjs, SiNuxtdotjs, SiNextdotjs, SiExpress, SiTailwindcss, SiStoryblok, SiWebpack, SiJest, SiCypress, SiGithub, SiGraphql, SiRedux, SiPython, SiPhp, SiStyledcomponents, SiGooglecloud, SiDigitalocean, SiPostgresql, SiMysql, SiElasticsearch, SiMongodb, SiJenkins, SiBuildkite, SiWordpress, SiLaravel, SiSymfony, SiApache, SiEnvoyproxy, SiSencha, SiBootstrap, SiApachecordova, SiAntdesign, SiFigma } from 'react-icons/si';
import { MdOutlineCrisisAlert, MdOutlineEmojiEmotions } from "react-icons/md";
import { GiTeamUpgrade, GiPuzzle, GiRead } from 'react-icons/gi';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { RiUserVoiceFill } from 'react-icons/ri';
import { FaRobot } from "react-icons/fa6";
import { GrDocumentStore } from "react-icons/gr";
import { DiRedis } from "react-icons/di";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import { TfiAndroid } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";
import HuggingFaceIcon from '../components/HuggingFaceIcon';
import React from "react";

export interface Skill {
    name: string;
    category: 'technical' | 'soft' | 'certifications';
    subcategory?: 'Artificial Intelligence' | 'Frontend' | 'Backend' | 'Database' | 'Mobile' | 'Tools' | 'Cloud Services';
    proficiency: number;
    icon: React.ElementType;
}

export const skills: Skill[] = [
    { name: 'Hugging Face', category: 'technical', subcategory: 'Artificial Intelligence', proficiency: 50, icon: HuggingFaceIcon },
    { name: 'Python', category: 'technical', subcategory: 'Artificial Intelligence', proficiency: 50, icon: SiPython },
    { name: 'Chatbot', category: 'technical', subcategory: 'Artificial Intelligence', proficiency: 50, icon: FaRobot },
    { name: 'RAG', category: 'technical', subcategory: 'Artificial Intelligence', proficiency: 50, icon: GrDocumentStore },

    { name: 'JavaScript', category: 'technical', subcategory: 'Frontend', proficiency: 100, icon: FaJs },
    { name: 'TypeScript', category: 'technical', subcategory: 'Frontend', proficiency: 80, icon: SiTypescript },
    { name: 'Vue.js', category: 'technical', subcategory: 'Frontend', proficiency: 100, icon: SiVuedotjs },
    { name: 'Nuxt.js', category: 'technical', subcategory: 'Frontend', proficiency: 100, icon: SiNuxtdotjs },
    { name: 'React.js', category: 'technical', subcategory: 'Frontend', proficiency: 100, icon: FaReact },
    { name: 'Next.js', category: 'technical', subcategory: 'Frontend', proficiency: 100, icon: SiNextdotjs },
    { name: 'TailwindCSS', category: 'technical', subcategory: 'Frontend', proficiency: 100, icon: SiTailwindcss },
    { name: 'SASS', category: 'technical', subcategory: 'Frontend', proficiency: 100, icon: FaSass },
    { name: 'Sencha ExtJS', category: 'technical', subcategory: 'Frontend', proficiency: 100, icon: SiSencha },
    { name: 'Twitter Bootstrap', category: 'technical', subcategory: 'Frontend', proficiency: 100, icon: SiBootstrap },

    { name: 'Node.js', category: 'technical', subcategory: 'Backend', proficiency: 100, icon: FaNode },
    { name: 'Express.js', category: 'technical', subcategory: 'Backend', proficiency: 85, icon: SiExpress },
    { name: 'GraphQL', category: 'technical', subcategory: 'Backend', proficiency: 80, icon: SiGraphql },
    { name: 'PHP', category: 'technical', subcategory: 'Backend', proficiency: 100, icon: SiPhp },
    { name: 'Laravel', category: 'technical', subcategory: 'Backend', proficiency: 100, icon: SiLaravel },
    { name: 'Symfony', category: 'technical', subcategory: 'Backend', proficiency: 100, icon: SiSymfony },

    { name: 'PostgreSQL', category: 'technical', subcategory: 'Database', proficiency: 100, icon: SiPostgresql },
    { name: 'Redis', category: 'technical', subcategory: 'Database', proficiency: 100, icon: DiRedis },
    { name: 'BigQuery', category: 'technical', subcategory: 'Database', proficiency: 100, icon: TbBrandGoogleBigQuery },
    { name: 'MySQL', category: 'technical', subcategory: 'Database', proficiency: 100, icon: SiMysql },
    { name: 'Elastic Search', category: 'technical', subcategory: 'Database', proficiency: 100, icon: SiElasticsearch },
    { name: 'MongoDB', category: 'technical', subcategory: 'Database', proficiency: 100, icon: SiMongodb },

    { name: 'Android', category: 'technical', subcategory: 'Mobile', proficiency: 100, icon: TfiAndroid },
    { name: 'React Native', category: 'technical', subcategory: 'Mobile', proficiency: 100, icon: FaReact },
    { name: 'Cordova', category: 'technical', subcategory: 'Mobile', proficiency: 100, icon: SiApachecordova },

    { name: 'Storyblok', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiStoryblok },
    { name: 'Wordpress', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiWordpress },
    { name: 'Webpack', category: 'technical', subcategory: 'Tools', proficiency: 90, icon: SiWebpack },
    { name: 'Jest', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiJest },
    { name: 'Cypress', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiCypress },
    { name: 'GitHub', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiGithub },
    { name: 'Redux', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiRedux },
    { name: 'Styled Components', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiStyledcomponents },
    { name: 'Jenkins', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiJenkins },
    { name: 'Buildkite', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiBuildkite },
    { name: 'Apache', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiApache },
    { name: 'Ngnix', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiEnvoyproxy },
    { name: 'Antd', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiAntdesign },
    { name: 'Figma', category: 'technical', subcategory: 'Tools', proficiency: 100, icon: SiFigma },

    { name: 'GCP', category: 'technical', subcategory: 'Cloud Services', proficiency: 50, icon: SiGooglecloud },
    { name: 'AWS', category: 'technical', subcategory: 'Cloud Services', proficiency: 50, icon: FaAws },
    { name: 'Digital Ocean', category: 'technical', subcategory: 'Cloud Services', proficiency: 50, icon: SiDigitalocean },
    { name: 'Docker', category: 'technical', subcategory: 'Cloud Services', proficiency: 75, icon: FaDocker },

    { name: 'Learning Agility', category: 'soft', proficiency: 90, icon: GiRead },
    { name: 'Leadership', category: 'soft', proficiency: 90, icon: GiTeamUpgrade },
    { name: 'Collaboration', category: 'soft', proficiency: 95, icon: GiTeamUpgrade },
    { name: 'Problem Solving', category: 'soft', proficiency: 92, icon: GiPuzzle },
    { name: 'Critical Thinking', category: 'soft', proficiency: 92, icon: MdOutlineCrisisAlert },
    { name: 'Communication', category: 'soft', proficiency: 93, icon: BiMessageRoundedDetail },
    { name: 'Mentoring', category: 'soft', proficiency: 88, icon: RiUserVoiceFill },
    { name: 'Emotional Intelligence', category: 'soft', proficiency: 88, icon: MdOutlineEmojiEmotions },
    { name: 'Stakeholder Management', category: 'soft', proficiency: 88, icon: FaUserCog },
    { name: 'Time Management', category: 'soft', proficiency: 88, icon: SlCalender },

    { name: 'AI Python for Beginners - DeepLearning.AI', category: 'certifications', proficiency: 100, icon: FaTrophy },
    { name: 'JavaScript RAG Web Apps with LlamaIndex - DeepLearning.AI', category: 'certifications', proficiency: 100, icon: FaTrophy },
    { name: 'Building Generative AI Applications with Gradio - DeepLearning.AI', category: 'certifications', proficiency: 100, icon: FaTrophy },
];
