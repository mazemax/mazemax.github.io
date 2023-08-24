import React from 'react'
import { Typography, Col, Row } from 'antd'
import { SafetyCertificateTwoTone } from '@ant-design/icons'

export default function Featured() {
    return (
        <>
            <Typography.Title level={2} className='m-0 text-center font-bold leading-0'>
                <SafetyCertificateTwoTone twoToneColor="#faac16" /> Featured In
            </Typography.Title>

            <Row gutter={24} justify="center" align="middle">
              <Col span={8} xs={24} sm={24} md={24} lg={24} xl={24}>
                <iframe width="600" height="550" 
                        className='w-full h-40 sm:h-60 md:h-96 lg:h-126 rounded-lg'
                        src="https://www.youtube.com/embed/h-pMCZcC7s4?start=68" 
                        title="Saad featured by Storyblok" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                </iframe>
              </Col>
            </Row>
        </>
    )
}