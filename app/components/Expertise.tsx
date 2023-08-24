import Image from 'next/image'
import { Card, Col, Row, Divider } from 'antd'
import { IconContext } from 'react-icons'
import { FaReact, FaDocker, FaVuejs, FaSass, FaWordpress } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'
import { SiNuxtdotjs, SiGooglecloud, SiTailwindcss, SiCypress, SiStoryblok } from 'react-icons/si'
import { TbBrandGoogleBigQuery } from 'react-icons/tb'
import { DiRedis } from 'react-icons/di'
import NextJsIcon from 'public/expert-icons/next-js.svg'
import ApolloIcon from 'public/expert-icons/apollo-graphql-compact.svg'
import TypeScriptIcon from 'public/expert-icons/typescript.svg'
import ExpressJsIcon from 'public/expert-icons/expressjs.svg'
import ReduxIcon from 'public/expert-icons/redux.svg'
import GitIcon from 'public/expert-icons/git-icon.svg'
import JestIcon from 'public/expert-icons/jest-logo.svg'
import WebpackIcon from 'public/expert-icons/webpack-icon.svg'
import PHPIcon from 'public/expert-icons/php-1.svg'
import StyledCompIcon from 'public/expert-icons/styled-components.png'
import AntdIcon from 'public/expert-icons/ant-design.svg'

export default function Expertise() {
    return (
        <>
            <Card
                hoverable
                title="Recent Tools" 
                bordered={false}
            >
                <Row gutter={[16, 24]}>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#41b883', className: 'nuxt-icon', size: '2.5em' }}>
                            <SiNuxtdotjs />
                        </IconContext.Provider>
                        NuxtJS
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#41b883', className: 'vuejs-icon', size: '2.5em' }}>
                            <FaVuejs />
                        </IconContext.Provider>
                        VueJS
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#38bdf8', className: 'tailwindcss-icon', size: '2.5em' }}>
                            <SiTailwindcss />
                        </IconContext.Provider>
                        Tailwind CSS
                    </Col>

                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#00D8FF', className: 'react-icon', size: '2em' }}>
                            <FaReact />
                        </IconContext.Provider> 
                        <span className='ml-1'>ReactJS</span>
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <Image
                            src={NextJsIcon}
                            height={28}
                            width={28}
                            alt="NextJS" />
                        <span className='ml-1'>NextJS</span>
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <Image
                            src={ApolloIcon}
                            height={28}
                            width={28}
                            alt="Apollo GraphQL" />
                        <span className='ml-1'>Apollo GraphQL</span>
                    </Col>

                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <Image
                            src={TypeScriptIcon}
                            height={28}
                            width={28}
                            alt="TypeScript" />
                        <span className='ml-1'>Typescript</span>
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#f7df1e', className: 'js-icon', size: '2.75em' }}>
                            <BiLogoJavascript />
                        </IconContext.Provider>
                        JavaScript
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <Image
                            src={ExpressJsIcon}
                            height={28}
                            width={28}
                            alt="ExpressJS" />
                        <span className='ml-1'>ExpressJS</span>
                    </Col>

                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <Image
                            src={JestIcon}
                            height={28}
                            width={28}
                            alt="Jest" />
                        <span className='ml-1'>Jest</span>
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <Image
                            src={ReduxIcon}
                            height={28}
                            width={28}
                            alt="Redux" />
                        <span className='ml-1'>Redux</span>
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <Image
                            src={WebpackIcon}
                            height={28}
                            width={28}
                            alt="Webpack bundler" />
                        Webpack
                    </Col>

                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <Image
                            src={StyledCompIcon}
                            height={28}
                            width={28}
                            alt="Styled Components" />
                        <span className='ml-1'>Styled Components</span>                
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <Image
                            src={GitIcon}
                            height={28}
                            width={28}
                            alt="Git" />
                        <span className='ml-1'>Git</span>
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#808080', className: 'gcp-icon', size: '2.5em' }}>
                            <SiGooglecloud />
                        </IconContext.Provider>
                        Google Cloud Platform
                    </Col>

                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <Image
                            src={PHPIcon}
                            height={28}
                            width={44}
                            alt="PHP" />
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#2496ed', className: 'docker-icon', size: '2.5em' }}>
                            <FaDocker />
                        </IconContext.Provider>
                        <span  className='ml-1'>Docker</span>
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#5c5c5e', className: 'cypress-icon', size: '2em' }}>
                            <SiCypress />
                        </IconContext.Provider>
                        <span  className='ml-1'>CypressJS</span>
                    </Col>

                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#cf649a', className: 'sass-icon', size: '2em' }}>
                            <FaSass />
                        </IconContext.Provider>
                        <span  className='ml-1'>SASS</span>
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#4387fb', className: 'big-query-icon', size: '2em' }}>
                            <TbBrandGoogleBigQuery />
                        </IconContext.Provider>
                        <span  className='ml-1'>BigQuery</span>
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#d82f27', className: 'redis-icon', size: '2.5em' }}>
                            <DiRedis />
                        </IconContext.Provider>
                        <span  className='ml-1'>Redis</span>
                    </Col>

                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#09b3af', className: 'storyblok-icon', size: '2em' }}>
                            <SiStoryblok />
                        </IconContext.Provider>
                        <span  className='ml-1'>Storyblok</span>
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <IconContext.Provider value={{ color: '#00769d', className: 'wordpress-icon', size: '2em' }}>
                            <FaWordpress />
                        </IconContext.Provider>
                        <span  className='ml-1'>Wordpress</span>
                    </Col>
                    <Col span={8} className='flex items-center justify-center flex-col'>
                        <Image
                            src={AntdIcon}
                            height={28}
                            width={28}
                            alt="Antd" />
                        <span  className='ml-1'>Antd</span>
                    </Col>

                </Row>
            </Card>
            <Divider className='block lg:hidden' />
        </>
    )
}