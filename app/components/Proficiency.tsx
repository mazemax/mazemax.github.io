import Image from 'next/image'
import { Card, Col, Row } from 'antd'
import { IconContext } from 'react-icons'
import { FaAngular, FaAws, FaBootstrap, FaLaravel, FaSymfony } from 'react-icons/fa'
import { SiMongodb, SiMocha, SiSencha, SiApachecordova } from 'react-icons/si'
import { FcAndroidOs } from 'react-icons/fc'
import ElasticSearchIcon from 'public/expert-icons/elasticsearch.svg'
import NgnixIcon from 'public/proficient-icons/nginx-icon.svg'
import BuildkiteIcon from 'public/proficient-icons/buildkite-mark-1.svg'
import JenkinsIcon from 'public/proficient-icons/jenkins-logo.svg'
import ApacheIcon from 'public/proficient-icons/apache-logo.svg'
import MysqlIcon from 'public/proficient-icons/mysql-7.svg'
import PostgresqlIcon from 'public/proficient-icons/postgresql.svg'

export default function Proficiency() {
    return (
        <Card 
            hoverable
            title="Previous Tools" 
            bordered={false}
        >
            <Row gutter={[16, 24]}>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <IconContext.Provider value={{ color: '#c3002f', className: 'angular-icon', size: '2.5em' }}>
                        <FaAngular />
                    </IconContext.Provider>
                    Angular JS
                </Col>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <IconContext.Provider value={{ color: '#07ac4f', className: 'mongodb-icon', size: '2.5em' }}>
                        <SiMongodb />
                    </IconContext.Provider>
                    MongoDB
                </Col>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <Image
                        src={ElasticSearchIcon}
                        height={28}
                        width={28}
                        alt="Elastic Search" />
                    Elastic Search
                </Col>

                <Col span={8} className='flex items-center justify-center flex-col'>
                    <IconContext.Provider value={{ color: '#8d6748', className: 'mocha-icon', size: '2.5em' }}>
                        <SiMocha />
                    </IconContext.Provider>
                    Mocha
                </Col>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <IconContext.Provider value={{ color: '#890afc', className: 'bootstrap-icon', size: '2.5em' }}>
                        <FaBootstrap />
                    </IconContext.Provider>
                    <span className='ml-1'>Twitter Bootstrap</span>
                </Col>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <IconContext.Provider value={{ color: '#95c93f', className: 'sencha-icon', size: '2.5em' }}>
                        <SiSencha />
                    </IconContext.Provider>
                    Sencha ExtJS
                </Col>

                <Col span={8} className='flex items-center justify-center flex-col'>
                    <IconContext.Provider value={{ color: '#ff291a', className: 'laravel-icon', size: '2.5em' }}>
                        <FaLaravel />
                    </IconContext.Provider>
                    <span className='ml-1'>Laravel</span>
                </Col>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <IconContext.Provider value={{ color: '#000000', className: 'symfony-icon', size: '2.5em' }}>
                        <FaSymfony />
                    </IconContext.Provider>
                    <span className='ml-1'>Symfony</span>
                </Col>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <Image
                        src={NgnixIcon}
                        height={28}
                        width={28}
                        alt="Ngnix" />
                    <span className='ml-1'>Ngnix</span>
                </Col>

                <Col span={8} className='flex items-center justify-center flex-col'>
                    <Image
                        src={BuildkiteIcon}
                        height={28}
                        width={30}
                        alt="Buildkite" />
                    <span className='ml-1'>Buildkite</span>
                </Col>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <Image
                        src={JenkinsIcon}
                        height={25}
                        width={25}
                        alt="Jenkins" />
                    <span className='ml-2'>Jenkins</span>
                </Col>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <Image
                        src={ApacheIcon}
                        height={20}
                        width={20}
                        alt="Apache" />
                    Apache
                </Col>

                <Col span={8} className='flex items-center justify-center flex-col'>
                    <IconContext.Provider value={{ color: '#FF9900', className: 'aws-icon', size: '2.5em' }}>
                        <FaAws />
                    </IconContext.Provider>
                </Col>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <Image
                        src={MysqlIcon}
                        height={40}
                        width={40}
                        alt="MYSQL" />
                </Col>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <Image
                        src={PostgresqlIcon}
                        height={25}
                        width={25}
                        alt="PostgreSQL" />
                    <span className='ml-2'>PostgreSQL</span>
                </Col>

                <Col span={8} className='flex items-center justify-center flex-col'>
                    <IconContext.Provider value={{ color: '#000000', className: 'cordova-icon', size: '2em' }}>
                        <SiApachecordova />
                    </IconContext.Provider>
                    <span  className='ml-1'>Cordova</span>
                </Col>
                <Col span={8} className='flex items-center justify-center flex-col'>
                    <IconContext.Provider value={{ color: '#FF9900', className: 'android-icon', size: '2.5em' }}>
                        <FcAndroidOs />
                    </IconContext.Provider>
                    Android
                </Col>

            </Row>
        </Card>
    )
}