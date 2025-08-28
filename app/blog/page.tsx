'use client'
import React from 'react'
import { Layout, Space, Col, Row, FloatButton } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import { 
  LinkedinOutlined, GithubOutlined, DownloadOutlined
} from '@ant-design/icons'
import BlogHeader from './components/BlogHeader'

export default function Blog() {
  try {
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
          <BlogHeader></BlogHeader>

          <Content className='bg-gray-100 text-center min-h-full leading-4'>
            <Layout className='py-6 px-0 bg-gray-100'>
              <FloatButton.Group shape="circle" style={{ right: 24 }}>
                <FloatButton icon={<DownloadOutlined />} tooltip='Download CV'
                              href='https://drive.google.com/file/d/1wi0jBbL0N2UxLv6pcFKJi8Uipuug9AmI/view' 
                              target='_blank' />
                <FloatButton icon={<LinkedinOutlined />} tooltip='Visit LinkedIn'
                              href='https://www.linkedin.com/in/msaadsiddiqui'
                              target='_blank' />
                <FloatButton icon={<GithubOutlined />} tooltip='Visit Github'
                              href='https://github.com/mazemax'
                              target='_blank' />
                <FloatButton.BackTop visibilityHeight={0} tooltip='Back to Top' />
              </FloatButton.Group>

              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <span id="contact"></span>
                <Row gutter={24} justify="center" align="middle" className='mt-2.5 mb-10'>
                  
                </Row>
                
                <Row gutter={24} justify="center" align="middle" className='mt-2.5 mb-10'>
                  <Col xs={20} sm={18} md={20} lg={20} xl={16}>
                    
                    
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
