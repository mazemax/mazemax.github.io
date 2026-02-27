'use client'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { Layout, Space, Button, Col, Row, Menu, Drawer, FloatButton } from 'antd'
import { Header, Content } from 'antd/es/layout/layout'
import { 
  PhoneTwoTone, CodeTwoTone, LinkedinOutlined, GithubOutlined, 
  CarTwoTone, MessageTwoTone, MenuFoldOutlined, MenuUnfoldOutlined, DownloadOutlined,
  BulbOutlined, CalendarOutlined, TrophyOutlined, StarOutlined, RocketOutlined, ToolOutlined
} from '@ant-design/icons'
import HackathonAIInnovations from './components/HackathonAIInnovations'
import Featured from './components/Featured'
import HeroSectionNew from './components/HeroSectionNew'
import MySkills from './components/MySkills'
import ProfessionalExperienceTimeline from './components/ProfessionalExperienceTimeline'
import AchievementsSection from './components/AchievementsSection'
import EnhancedCTASection from './components/EnhancedCTASection'
import TestimonialsSection from './components/TestimonialsSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import { resumeLink, linkedinLink, githubLink, calendlyLink } from './data/links'
import { ScrollProgress } from '@/components/ui/scroll-progress'

import './styles/hero-section.css'
import './styles/work-screenshots.css'
import './styles/my-skills-section.css'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [showHeaderCTA, setShowHeaderCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA button after scrolling past 80vh (approximately after hero)
      setShowHeaderCTA(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  try {

      const showDrawer = () => {
      setOpen(true)
    }

    const onClose = () => {
      setOpen(false)
    }

    const handleHeaderCTAClick = () => {
      (window as any)?.gtag('event', 'header_cta_click', {
        event_label: "Book Call - Sticky Header"
      })
      window.open(calendlyLink, '_blank')
    }

    return (
      <div>
        {/* Scroll Progress Bar */}
        <ScrollProgress className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600" />
        
        <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
        size={[0, 48]}
      >
        <Layout>
          <Header className='flex items-center leading-4 ps-12 pe-12 h-16 bg-white text-slate-600 drop-shadow' 
                  style={{top: 0, zIndex: 40, width: '100%', display: 'flex', alignItems: 'center',}}>
            <Row justify="space-between" align="middle" className='w-full'>
              <Col>
                <Button type="default" onClick={showDrawer} icon={open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}>
                </Button>
                <Drawer title="Main Menu" placement="left" onClose={onClose} open={open}>
                  <Menu
                    mode="vertical"
                    theme='light'
                    className='drop-shadow rounded-lg'
                  >
                    <Menu.Item key="1">
                        <PhoneTwoTone twoToneColor="#7a12d4" />
                        <span>Contact</span>
                        <Link href="#contact" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="3">
                        <StarOutlined />
                        <span>Featured</span>
                        <Link href="#featured" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="4">
                        <MessageTwoTone />
                        <span>Testimonials</span>
                        <Link href="#testimonials" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="5">
                        <BulbOutlined />
                        <span>Services</span>
                        <Link href="#services" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="6">
                        <TrophyOutlined />
                        <span>Achievements</span>
                        <Link href="#achievements" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="7">
                        <CarTwoTone twoToneColor="#ff931f" />
                        <span>Experience</span>
                        <Link href="#experience" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="8">
                        <ToolOutlined />
                        <span>Skills</span>
                        <Link href="#skills" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="9">
                        <RocketOutlined />
                        <span>Hackathon & AI</span>
                        <Link href="#hackathon" onClick={onClose} />
                    </Menu.Item>
                  </Menu>
                </Drawer>
              </Col>
              <Col>
                {showHeaderCTA && (
                  <Button 
                    type="primary" 
                    size="large"
                    icon={<CalendarOutlined />}
                    onClick={handleHeaderCTAClick}
                    className="font-semibold"
                    style={{
                      background: 'linear-gradient(135deg, #9333ea 0%, #f97316 100%)',
                      borderColor: 'transparent',
                      boxShadow: '0 4px 12px rgba(147, 51, 234, 0.3)',
                    }}
                  >
                    Book a Call
                  </Button>
                )}
              </Col>
            </Row>
          </Header>

          <Content className='bg-white text-center min-h-full leading-4'>
            <Layout className='py-0 px-0 bg-white'>
              <FloatButton.Group shape="circle" style={{ right: 24 }}>
                <FloatButton icon={<DownloadOutlined />} tooltip='Download CV'
                              href={resumeLink}
                              target='_blank' />
                <FloatButton icon={<LinkedinOutlined />} tooltip='Visit LinkedIn'
                              href={linkedinLink}
                              target='_blank' />
                <FloatButton icon={<GithubOutlined />} tooltip='Visit Github'
                              href={githubLink}
                              target='_blank' />
                <FloatButton.BackTop visibilityHeight={0} tooltip='Back to Top' />
              </FloatButton.Group>

              <Content style={{ padding: '0 0', minHeight: 280 }}>
                {/* Hero Section */}
                <span id="contact"></span>
                <HeroSectionNew />
                
                {/* Hackathon & AI Innovations - Innovation showcase */}
                <span id="hackathon"></span>
                <HackathonAIInnovations />

                {/* Featured Video - third-party credibility */}
                <span id="featured"></span>
                <Featured />

                {/* Testimonials Section - MOVED to #4 after proof is shown */}
                <span id="testimonials"></span>
                <TestimonialsSection />

                {/* Services Section - MOVED DOWN to #5 after trust is built */}
                <span id="services"></span>
                <ServicesSection />

                {/* Awards & Certifications - Authority boost at #6 */}
                <span id="achievements"></span>
                <AchievementsSection />

                {/* CTA Section - MOVED UP to #7 for peak conversion moment */}
                <span id="cta"></span>
                <EnhancedCTASection />

                {/* Experience Timeline - Depth content for researchers */}
                <span id="experience"></span>
                <ProfessionalExperienceTimeline />

                {/* Skills Section - Technical reference material */}
                <span id="skills"></span>
                <MySkills/>

              </Content>
            </Layout>
          </Content>

          <Footer />

        </Layout>
      </Space>
      </div>
    )
  } catch(e) {
    console.log(e)
  }
}
