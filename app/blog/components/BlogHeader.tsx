'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Col, Row, Menu, Drawer } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { 
  PhoneTwoTone, CarTwoTone, MessageTwoTone, ShopTwoTone, CodeTwoTone,
  SafetyCertificateTwoTone, ContactsTwoTone, MenuFoldOutlined, MenuUnfoldOutlined
} from '@ant-design/icons'

export default function BlogHeader() {
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
      setOpen(true)
    }

    const onClose = () => {
      setOpen(false)
    }


    return (
        <>
        <Header className='flex items-center leading-4 ps-12 pe-12 h-16 bg-white text-slate-600 drop-shadow' 
                  style={{position: 'sticky', top: 0, zIndex: 1, width: '100%', display: 'flex', alignItems: 'center'}}>
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
        </>
    )
}