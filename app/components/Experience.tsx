import React from 'react'
import { Typography, Collapse, theme, Badge, Row, Col, Divider } from 'antd'
import type { CSSProperties } from 'react'
import type { CollapseProps } from 'antd'
import { PlusOutlined, MinusOutlined, CarTwoTone } from '@ant-design/icons'

const renderLabel = (position: string, years: string) => {
  return (
    <>
      <Row gutter={24} justify="center" align="middle">
        <Col span={10} xs={20} sm={18} md={12} lg={12} xl={12} className='font-bold md:text-left'>
          {position}
        </Col>
        <Col span={10} xs={20} sm={18} md={12} lg={12} xl={12} className='md:text-right'>
          <Badge count={years} color='#faad14' />
        </Col>
      </Row>
    </>
  )
}

const renderTech = (tool: string) => {
  return <Badge count={tool} color='#91caff' style={{color: 'rgba(0, 0, 0, 0.88)', marginRight: '2px'}} />
}

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
      key: '1',
      label: renderLabel('Senior Frontend Developer @ Mindvalley', '2021 - Present'),
      children: <>
        <Row gutter={24} justify="center" align="middle">
        <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
          <i className='font-bold'>Page builder – headless Storyblok CMS</i> <br />
          &#x2022; Engineering Lead at Acquisition team <br />
          &#x2022; Full stack development for mindvalley.com <br />
          &#x2022; Migrated to Nuxt v2.15 and Nuxt Bridge <br />
          &#x2022; Executed up to 5 initiatives in parallel <br />
          &#x2022; Helped marketing team make $19M+ sales <br />
          &#x2022; Played vital role in terminating various legacy apps
        </Col>
        <Divider className='block lg:hidden' />
        <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
          { renderTech('NuxtJS') }
          { renderTech('VueJS') }
          { renderTech('Storyblok') }
          { renderTech('Storyblok') }
          { renderTech('TailwindCSS') }
          { renderTech('NodeJS') }
          { renderTech('Google Cloud Platform') }
          { renderTech('JavaScript') }
          { renderTech('SASS') }
          { renderTech('Webpack') }
          { renderTech('Cypress') }
          { renderTech('Github') }
          { renderTech('Segment') }
          { renderTech('Jest') }
          { renderTech('Cake Affiliate Marketing') }
          { renderTech('Auth0') }
          { renderTech('Airtable') }
          { renderTech('Figma') }
          { renderTech('GTM') }
        </Col>
        </Row>
      </>,
      style: panelStyle,
    },
    {
      key: '2',
      label: renderLabel('Senior Developer @ iProperty REA Group Asia', '2019 - 2021'),
      children: <>
        <Row gutter={24} justify="center" align="middle">
        <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
          <i className='font-bold'>Regional Web - web app engine</i> <br />
          &#x2022; Full stack development for Squarefoot and iProperty <br />
          &#x2022; Contributed to 5+ git repositories <br />
          &#x2022; Participated in Optimize October Regional Web Initiative <br /><br />
          
          <i className='font-bold'>Lifestyle – headless Wordpress CMS</i> <br />
          &#x2022; Full stack development for ThinkOfLiving <br />
          &#x2022; Migrated React app to functional components (Hooks) <br />
          &#x2022; Migrated Apollo Server V1 to V2 <br />
          &#x2022; Migrated Next.js V6 to V8 for Squarefoot Lifestyle <br />
          &#x2022; Developed BigQuery to MYSQL location data sync service
        </Col>
        <Divider className='block lg:hidden' />
        <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
          { renderTech('NextJS') }
          { renderTech('ReactJS') }
          { renderTech('TypeScript') }
          { renderTech('Apollo GraphQL') }
          { renderTech('Mocha') }
          { renderTech('Cypress') }
          { renderTech('Github') }
          { renderTech('Webpack') }
          { renderTech('GTM') }
          { renderTech('ExpressJS') }
          { renderTech('NodeJS') }
          { renderTech('Pug') }
          { renderTech('Redux') }
          { renderTech('Buildkite') }
          { renderTech('Laravel Zero') }
          { renderTech('Elastic Search') }
          { renderTech('AWS') }
          { renderTech('Docker') }
          { renderTech('JavaScript') }
          { renderTech('Styled Components') }
          { renderTech('Jest') }
          { renderTech('PHP') }
          { renderTech('Ngnix') }
          { renderTech('Wordpress') }
          { renderTech('MYSQL') }
        </Col>
        </Row>
      </>,
      style: panelStyle,
    },
    {
      key: '3',
      label: renderLabel('Software Analyst @ IPG Mediabrands', '2017 - 2019'),
      children: <>
        <Row gutter={24} justify="center" align="middle">
        <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
          <i className='font-bold'>Huddle – custom content portal</i> <br />
          &#x2022; Rewritten 95% of code-base to serve 1000+ users <br />
          &#x2022; Wrote many micro-services over AWS <br />
          &#x2022; Upgraded PHP, Symfony and Webpack
        </Col>
        <Divider className='block lg:hidden' />
        <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
          { renderTech('ReactJS') }
          { renderTech('KoaJS') }
          { renderTech('NodeJS') }
          { renderTech('Redux-Saga') }
          { renderTech('Webpack') }
          { renderTech('PHP') }
          { renderTech('Symfony') }
          { renderTech('PostgreSQL') }
          { renderTech('Eloquent ORM') }
          { renderTech('Elasticsearch') }
          { renderTech('AWS') }
          { renderTech('Jenkins') }
          { renderTech('Docker') }
          { renderTech('Gitlab') }
          { renderTech('Gulp') }
          { renderTech('Gitlab') }
        </Col>
        </Row>
      </>,
      style: panelStyle,
    },
    {
      key: '4',
      label: renderLabel('Senior Software Engineer @ Litmus Labs', ' 2016 .'),
      children: <>
      <Row gutter={24} justify="center" align="middle">
      <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
        <i className='font-bold'>Momvaz Travel - Travel and tours web app</i> <br />
          &#x2022; Integrated TBOHolidays, Hotelbeds and Travelport APIs <br /><br />
        
          <i className='font-bold'>Petrichor Jackets - Ecommerce app</i> <br />
          &#x2022; Magento2 theme customization
      </Col>
        <Divider className='block lg:hidden' />
        <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
        { renderTech('LAMP Stack') }
        { renderTech('Yii framework') }
        { renderTech('Magento') }
        { renderTech('Codeigniter') }
        </Col>
        </Row>
      </>,
      style: panelStyle,
    },
    {
      key: '5',
      label: renderLabel('Chief Information Officer @ Geekunit', '2014 - 2016'),
      children: <>
      <Row gutter={24} justify="center" align="middle">
        <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
        &#x2022; Executed four projects <br />
        &#x2022; Performed DevOps tasks <br />
        &#x2022; Trained and mentored all developers <br />
        &#x2022; Published iOS and Android mobile apps <br />
        &#x2022; Dived into on-page SEO, financial and HR aspects
        </Col>
        <Divider className='block lg:hidden' />
        <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
        { renderTech('MEAN Stack') }
        { renderTech('LAMP Stack') }
        { renderTech('Codeigniter') }
        { renderTech('Digital Ocean') }
        { renderTech('Gitlab') }
        { renderTech('Docker') }
        </Col>
      </Row>
      </>,
      style: panelStyle,
    },
    {
      key: '6',
      label: renderLabel('Manager Software Engineer @ Logic-Unit', '2013 - 2014'),
      children: <>
      <Row gutter={24} justify="center" align="middle">
        <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
          Managed social media accounts and guided junior devs <br /><br />
          <i className='font-bold'>StalkHawk – FB App for friends</i> <br />
          &#x2022; Development and product management <br /><br />
          <i className='font-bold'>Instalacions77 - Admin mobile app</i> <br />
          &#x2022; Developed using PhoneGap for Android platform
        </Col>
        <Divider className='block lg:hidden' />
        <Col span={8} xs={20} sm={18} md={12} lg={10} xl={10}>
        { renderTech('Sencha ExtJS') }
        { renderTech('PhoneGap') }
        { renderTech('Cordova') }
        { renderTech('HTML5') }
        { renderTech('Android') }
        { renderTech('jQuery mobile') }
        { renderTech('Visual Studio') }
        { renderTech('VS Source Control') }
        { renderTech('Node.js') }
        { renderTech('JavaScript') }
        { renderTech('PHP') }
        { renderTech('Codeigniter') }
        { renderTech('Apache') }
        { renderTech('MySQL') }
        { renderTech('Filezilla') }
        </Col>
      </Row>
      </>,
      style: panelStyle,
    },
  ]

export default function Experience() {

    const {
        token: { colorBgContainer, colorFillAlter }
      } = theme.useToken()

    const onChange = (key: string | string[]) => {
        console.log(key)
      }
    const panelStyle: React.CSSProperties = {
        background: colorFillAlter
      }

    return (
        <>
            <Typography.Title level={2} className='m-0 text-center font-bold leading-0'>
              <CarTwoTone twoToneColor="#ff931f" /> Professional Experience
            </Typography.Title>

            <Collapse 
                items={getItems(panelStyle)} 
                defaultActiveKey={['1']} 
                size="large"
                style={{ background: colorBgContainer }}
                expandIconPosition="end"
                expandIcon={({ isActive }) => isActive ? <PlusOutlined/> : <MinusOutlined />}
                onChange={onChange} 
            />
        </>
    )
}