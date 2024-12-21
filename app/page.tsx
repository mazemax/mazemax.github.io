'use client'
import Link from 'next/link'
import React, { useState, useRef } from 'react'
import { Layout, Space, Button, Col, Row, Menu, Drawer, FloatButton } from 'antd'
import { Header, Content } from 'antd/es/layout/layout'
import { 
  PhoneTwoTone, CarTwoTone, MessageTwoTone, ShopTwoTone, CodeTwoTone, LinkedinOutlined, GithubOutlined, 
  SafetyCertificateTwoTone, ContactsTwoTone, MenuFoldOutlined, MenuUnfoldOutlined, DownloadOutlined
} from '@ant-design/icons'
import Portfolio from './components/Portfolio'
import Featured from './components/Featured'
import HeroSection from './components/HeroSection'
import MySkills from './components/MySkills'
import ProfessionalExperienceTimeline from './components/ProfessionalExperienceTimeline'
import CTASection from './components/CTASection'
import TestimonialsSection from './components/TestimonialsSection'
import TeamPhotosSection from './components/TeamPhotosSection'
import Footer from './components/Footer'

import './styles/hero-section.css'
import './styles/work-screenshots.css'

export default function Home() {
  try {
    const [open, setOpen] = useState(false)
      const viewPortfolioRef = useRef(null)

      const showDrawer = () => {
      setOpen(true)
    }

    const onClose = () => {
      setOpen(false)
    }

    return (
      <div>
        <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
        size={[0, 48]}
      >
        <Layout>
          <Header className='flex items-center leading-4 ps-12 pe-12 h-16 bg-white text-slate-600 drop-shadow' 
                  style={{top: 0, zIndex: 1, width: '100%', display: 'flex', alignItems: 'center',}}>
            <Row justify="center" align="middle" className='w-full'>
              <Col className='w-full'>
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
                    <Menu.Item key="2">
                        <SafetyCertificateTwoTone twoToneColor="#faac16" />
                        <span>Featured</span>
                        <Link href="#featured" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="3">
                        <ShopTwoTone twoToneColor="#cf0000" />
                        <span>Portfolio</span>
                        <Link href="#portfolio" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="4">
                        <CodeTwoTone twoToneColor="#b0b0b0" />
                        <span>Skills</span>
                        <Link href="#skills" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="5">
                        <CarTwoTone twoToneColor="#ff931f" />
                        <span>Experience</span>
                        <Link href="#experience" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="6">
                        <MessageTwoTone />
                        <span>Testimonials</span>
                        <Link href="#testimonials" onClick={onClose} />
                    </Menu.Item>
                    <Menu.Item key="7">
                        <ContactsTwoTone twoToneColor="#25d366" />
                        <span>Team Photos</span>
                        <Link href="#teams" onClick={onClose} />
                    </Menu.Item>
                  </Menu>
                </Drawer>
              </Col>
            </Row>
          </Header>

          <Content className='bg-gray-100 text-center min-h-full leading-4'>
            <Layout className='py-6 px-0 bg-gray-100'>
              <FloatButton.Group shape="circle" style={{ right: 24 }}>
                <FloatButton icon={<DownloadOutlined />} tooltip='Download CV'
                              href='https://drive.google.com/file/d/10Ud0OdwO4HfLPGMcS0tlickbUq3v3ICY/view?usp=sharing' 
                              target='_blank' />
                <FloatButton icon={<LinkedinOutlined />} tooltip='Visit LinkedIn'
                              href='https://www.linkedin.com/in/maxsaad'
                              target='_blank' />
                <FloatButton icon={<GithubOutlined />} tooltip='Visit Github'
                              href='https://github.com/mazemax'
                              target='_blank' />
                <FloatButton.BackTop visibilityHeight={0} tooltip='Back to Top' />
              </FloatButton.Group>

              <Content style={{ padding: '0 0', minHeight: 280 }}>
                <span id="contact"></span>
                <Row justify="center" align="middle" className='mt-2.5 mb-10'>
                  <span id="featured"></span>
                  <HeroSection portfolioRef={viewPortfolioRef} />
                </Row>
                
                <Row justify="center" align="middle" className='mt-2.5 mb-10'>
                    <Featured />
                    <span id="portfolio"></span>
                </Row>
                
                <Row gutter={24} justify="center" align="middle" className='mt-2.5 mb-10'>
                    <Portfolio ref={viewPortfolioRef} />
                    <span id="skills"></span>
                </Row>


                  <Row gutter={24} justify="center" align="middle" className='mt-2.5'>
                      <MySkills/>
                      <span id="experience"></span>
                  </Row>

                <Row gutter={24} justify="center" align="middle" className='pt-2.5 pb-10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
                    <ProfessionalExperienceTimeline />
                  <span id="cta"></span>
                </Row>

                <Row gutter={24} justify="center" align="middle" className='pt-2.5 pb-2.5 bg-gradient-to-br from-[#FF3CAC] via-[#FF8A00] to-[#6A0DAD]'>
                    <CTASection />
                    <span id="testimonials"></span>
                </Row>

                 <div className='bg-white'>
                    <TestimonialsSection />
                    <span id="teams"></span>
                 </div>

                 <div>
                    <TeamPhotosSection />
                 </div>
                
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
