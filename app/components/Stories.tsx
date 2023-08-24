import React from 'react'
import Image from 'next/image'
import { Typography, Card, Col, Row, Avatar } from 'antd'
import Meta from 'antd/es/card/Meta'
import { MessageTwoTone } from '@ant-design/icons'
import Prosper from 'public/stories/prosper.jpg'
import Sarah from 'public/stories/sarah.jpg'
import Haikal from 'public/stories/haikal.jpg'
import Timothy from 'public/stories/timothy.jpg'
import Kianyang from 'public/stories/kianyang.jpg'
import Usman from 'public/stories/usman.jpg'

export default function Stories() {
    return (
        <>
            <Typography.Title level={2} className='m-0 text-center font-bold leading-0'>
              <MessageTwoTone /> What people say about Saad
            </Typography.Title>

            <Row gutter={24} justify="center" align="middle" className='mt-2.5 mb-10'>
              <Col span={8} xs={24} sm={24} md={12} lg={12} xl={12} className='mb-2'>
                <Card hoverable={true} size="small" className=''>
                  <Meta
                    avatar={<Avatar shape="square" size={64} src={<Image src={Prosper} alt="Prosper avatar" loading="lazy" placeholder="blur" />} />}
                    title="Prosper Chiduku"
                    description="Saad is an amazing TechLead, colleague and friend. He is very thorough and never compromises on delivering high quality work. The most amazing part is even though he is driven, thorough, super effective, he also genuinely cares for the wellbeing of others and sees the best in everyone around him. He is also very patient in teaching and coaching and never withholds anything which promotes others growth."
                  />
                </Card>
              </Col>
              <Col span={8} xs={24} sm={24} md={12} lg={12} xl={12} className='mb-2'>
                <Card hoverable={true} size="small" className=''>
                  <Meta
                    avatar={<Avatar shape="square" size={64} src={<Image src={Sarah} alt="Sarah avatar" loading="lazy" placeholder="blur" />} />}
                    title="Sarah Khalisa"
                    description="I have a pleasure working with Saad when he was still with REA Group Asia. Saad is very passionate, brave and meticulous in his work. He is able to work independently and fast. Among his strongest area is React.js, to name a few. Saad also is keen on R&D and working on latest stuff. He is never short of coaching, reviewing and sharing knowledge with team member, making him a great person you want in a team."
                  />
                </Card>
              </Col>
              <Col span={8} xs={24} sm={24} md={12} lg={12} xl={12} className='mb-2'>
                <Card hoverable={true} size="small" className=''>
                  <Meta
                    avatar={<Avatar shape="square" size={64} src={<Image src={Haikal} alt="Haikal avatar" loading="lazy" placeholder="blur" />} />}
                    title="Haikal Aris"
                    description="Saad was a technically gifted developer. He has deep knowledge and researches a topic very well. A go-to person when I have technical questions. On a personal level, Saad is a great colleague and always enjoyed our conversations together."
                  />
                </Card>
              </Col>
              <Col span={8} xs={24} sm={24} md={12} lg={12} xl={12} className='mb-2'>
                <Card hoverable={true} size="small" className=''>
                  <Meta
                    avatar={<Avatar shape="square" size={64} src={<Image src={Timothy} alt="Timothy avatar" loading="lazy" placeholder="blur" />} />}
                    title="Timothy Teoh"
                    description="Saad was a key part of the web team at REA Asia, being a SME in React. He held useful training for other devs in the intricacies of React, and was always open to suggestions and focused on his work."
                  />
                </Card>
              </Col>
              <Col span={8} xs={24} sm={24} md={12} lg={12} xl={12} className='mb-2'>
                <Card hoverable={true} size="small" className=''>
                  <Meta
                    avatar={<Avatar shape="square" size={64} src={<Image src={Kianyang} alt="Kianyang avatar" loading="lazy" placeholder="blur" />} />}
                    title="Kian Yang Low"
                    description="Saad is passionate about technology and was a great contributor to the many teams in our engineering teams. I've worked on several projects with him and he shows dedication in using the latest technology, libraries or techniques in his work."
                  />
                </Card>
              </Col>
              <Col span={8} xs={24} sm={24} md={12} lg={12} xl={12} className='mb-2'>
                <Card hoverable={true} size="small" className=''>
                  <Meta
                    avatar={<Avatar shape="square" size={64} src={<Image src={Usman} alt="Usman avatar" loading="lazy" placeholder="blur" />} />}
                    title="Usman Khalid"
                    description="Saad is a brave developer who prefers to work with cutting edge technologies. He has the ability to upgrade the existing packages and libraries to its latest version. To assist with this, he is enthusiastic about reading official documentations."
                  />
                </Card>
              </Col>
            </Row>
        </>
    )
}