'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Layout, Space, Button, Col, Row, Typography, Menu, Drawer, FloatButton } from 'antd'
import { Header, Content, Footer } from 'antd/es/layout/layout'
import { 
  PhoneTwoTone, CarTwoTone, MessageTwoTone, ShopTwoTone, CodeTwoTone, LinkedinOutlined, GithubOutlined, 
  SafetyCertificateTwoTone, ContactsTwoTone, MenuFoldOutlined, MenuUnfoldOutlined, DownloadOutlined
} from '@ant-design/icons'
import Expertise from './components/Expertise'
import Proficiency from './components/Proficiency'
import PunchLines from './components/PunchLines'
import FirstCta from './components/FirstCta'
import MiddleCta from './components/MiddleCta'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Stories from './components/Stories'
import Featured from './components/Featured'
import Teams from './components/Teams'

export default function Home() {
  try {
    const [open, setOpen] = useState(false)

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
                  style={{position: 'sticky', top: 0, zIndex: 1, width: '100%', display: 'flex', alignItems: 'center',}}>
            <Row justify="center" align="middle" className='w-full'>
              <Col className='w-full hidden lg:block'>
                <Menu
                  mode="horizontal"
                  theme='light'
                  className='border-none'
                >
                  <Menu.Item key="1">
                      <PhoneTwoTone twoToneColor="#7a12d4" />
                      <span>Contact</span>
                      <Link href="#contact" />
                  </Menu.Item>
                  <Menu.Item key="2">
                      <SafetyCertificateTwoTone twoToneColor="#faac16" />
                      <span>Featured</span>
                      <Link href="#featured" />
                  </Menu.Item>
                  <Menu.Item key="3">
                      <ShopTwoTone twoToneColor="#cf0000" />
                      <span>Work</span>
                      <Link href="#portfolio" />
                  </Menu.Item>
                  <Menu.Item key="4">
                      <CodeTwoTone twoToneColor="#b0b0b0" />
                      <span>Skills</span>
                      <Link href="#skills" />
                  </Menu.Item>
                  <Menu.Item key="5">
                      <CarTwoTone twoToneColor="#ff931f" />
                      <span>Experience</span>
                      <Link href="#experience" />
                  </Menu.Item>
                  <Menu.Item key="6">
                      <MessageTwoTone />
                      <span>Testimonials</span>
                      <Link href="#stories" />
                  </Menu.Item>
                  <Menu.Item key="7">
                      <ContactsTwoTone twoToneColor="#25d366" />
                      <span>Team Photos</span>
                      <Link href="#teams" />
                  </Menu.Item>
                </Menu>
              </Col>
              <Col className='w-full block lg:hidden'>
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
                        <span>Work</span>
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
                        <Link href="#stories" onClick={onClose} />
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

              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <span id="contact"></span>
                <Row gutter={24} justify="center" align="middle" className='mt-2.5 mb-10'>
                  <Col span={8} xs={20} sm={18} md={10} lg={10} xl={8}>
                    <PunchLines />
                  </Col>
                  <Col span={8} xs={20} sm={18} md={10} lg={10} xl={8}>
                    <FirstCta />
                  </Col>
                  <span id="featured"></span>
                </Row>
                
                <Row gutter={24} justify="center" align="middle" className='mt-2.5 mb-10'>
                  <Col xs={20} sm={18} md={20} lg={20} xl={16}>
                    <Featured />
                    <span id="portfolio"></span>
                  </Col>
                </Row>
                
                <Row gutter={24} justify="center" align="middle" className='mt-2.5 mb-10'>
                  <Col xs={20} sm={18} md={20} lg={20} xl={16}>
                    <Portfolio />
                    <span id="skills"></span>
                  </Col>
                </Row>
                
                <Row gutter={24} justify="center" align="bottom" className='mt-2.5'>
                  <Typography.Title level={2} className='m-0 text-center font-bold leading-0'>
                    <CodeTwoTone twoToneColor="#b0b0b0" /> My Skills
                  </Typography.Title>
                </Row>
                <Row gutter={24} justify="center" align="top" className='mb-10'>
                  <Col span={8} xs={20} sm={18} md={16} lg={10} xl={8}>
                    <Expertise />
                  </Col>
                  <Col span={8} xs={20} sm={18} md={16} lg={10} xl={8}>
                    <Proficiency />
                  </Col>
                </Row>

                <Row gutter={24} justify="center" align="middle" className='mt-2.5 mb-10'>
                  <Col xs={20} sm={18} md={20} lg={20} xl={16}>
                    <MiddleCta />
                  </Col>
                  <span id="experience"></span>
                </Row>

                <Row gutter={24} justify="center" align="middle" className='mt-2.5 mb-10'>
                  <Col xs={20} sm={18} md={20} lg={20} xl={16}>
                    <Experience />
                  </Col>
                  <span id="stories"></span>
                </Row>

                <Row gutter={24} justify="center" align="middle" className='mt-2.5 mb-10'>
                  <Col xs={20} sm={18} md={20} lg={20} xl={16}>
                    <Stories />
                  </Col>
                  <span id="teams"></span>
                </Row>

                <Row gutter={24} justify="center" align="middle" className='mt-2.5 mb-10'>
                  <Col xs={20} sm={18} md={20} lg={20} xl={16}>
                    <Teams />
                  </Col>
                </Row>
                
              </Content>
            </Layout>
          </Content>

          <Footer className='bg-white text-slate-600 drop-shadow text-center'>
            <Row justify="center" align="middle">
                <Col className='w-full'>
                  <a href="https://www.linkedin.com/in/maxsaad/">
                    <LinkedinOutlined style={{marginRight: '10px', fontSize: '40px'}} />
                  </a>
                  
                  <a href="https://github.com/mazemax">
                    <GithubOutlined style={{fontSize: '40px'}} />
                  </a>
                </Col>
            </Row>
          </Footer>
        </Layout>
      </Space>
      </div>
    )
  } catch(e) {
    console.log(e)
  }
}
