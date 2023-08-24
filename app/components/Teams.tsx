import React from 'react'
import Image from 'next/image'
import { Typography, Carousel } from 'antd'
import { ContactsTwoTone } from '@ant-design/icons'
import IpgTeam from 'public/teams/ipg-team.jpg'
import IpropertyTeam1 from 'public/teams/iproperty-team1.jpg'
import IpropertyTeam2 from 'public/teams/iproperty-team2.jpg'
import MindvalleyTeam from 'public/teams/mindvalley-team.jpg'

export default function Teams() {
    return (
        <>
            <Typography.Title level={2} className='m-0 text-center font-bold leading-0'>
                <ContactsTwoTone twoToneColor="#25d366" /> Team Photos
            </Typography.Title>
            <Carousel 
                autoplay 
                dotPosition='top' 
                waitForAnimate={true} 
                infinite={true} 
                accessibility={true}
            >
                <div>
                    <h3 className='bg-zinc-500 text-white text-center leading-4 h-100'>
                        <Image
                            src={MindvalleyTeam}
                            loading="lazy"
                            placeholder="blur"
                            className='w-full h-full'
                            alt="Mindvalley" />
                    </h3>
                </div>
                <div>
                    <h3 className='bg-zinc-500 text-white text-center leading-4 h-100'>
                        <Image
                            src={IpropertyTeam2}
                            loading="lazy"
                            placeholder="blur"
                            className='w-auto m-auto h-44 md:h-126'
                            alt="iProperty Team 2" />
                    </h3>
                </div>
                <div>
                    <h3 className='bg-zinc-500 text-white text-center leading-4 h-100'>
                        <Image
                            src={IpropertyTeam1}
                            loading="lazy"
                            placeholder="blur"
                            className='w-full h-full'
                            alt="iProperty Team 1" />
                    </h3>
                </div>
                <div>
                    <h3 className='bg-zinc-500 text-white text-center leading-4 h-100'>
                        <Image
                            src={IpgTeam}
                            loading="lazy"
                            placeholder="blur"
                            className='w-full h-full'
                            alt="IPG Team" />
                    </h3>
                </div>
            </Carousel>  
        </>
    )
}