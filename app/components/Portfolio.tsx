import React from 'react'
import Image from 'next/image'
import { Typography, Carousel } from 'antd'
import { ShopTwoTone } from '@ant-design/icons'
import Squarefoot from 'public/portfolio/REA/squarefoot.png'
import ThinkOfLiving from 'public/portfolio/REA/thinkOfLiving.png'
import Huddle from 'public/portfolio/IPG/huddle.png'
import MvAffiliateSignup from 'public/portfolio/Mindvalley/mv-affiliate-signup.png'
import MvFreeCourses from 'public/portfolio/Mindvalley/mv-free-courses-2.png'
import MvU from 'public/portfolio/Mindvalley/mvu.png'
import MvSpirituality from 'public/portfolio/Mindvalley/spirituality-program.png'

export default function Portfolio() {
    return (
        <>
            <Typography.Title level={2} className='m-0 text-center font-bold leading-0'>
                <ShopTwoTone twoToneColor="#cf0000" /> Work Screenshots
            </Typography.Title>
            <Carousel 
                autoplay={true}
                dotPosition='top'
                waitForAnimate={true} 
                infinite={true} 
                accessibility={true}
            >
                <div>
                    <h3 className='bg-zinc-500 text-white text-center leading-4 h-100'>
                        <Image
                            src={MvFreeCourses}
                            width="1898" 
                            height="1082"
                            loading="lazy"
                            placeholder="blur"
                            className='w-auto m-auto h-44 md:h-124'
                            alt="Mindvalley Free Courses" />
                    </h3>
                </div>
                <div>
                    <h3 className='bg-zinc-500 text-white text-center leading-4 h-100'>
                        <Image
                            src={MvSpirituality}
                            width="1187" 
                            height="800"
                            loading="lazy"
                            placeholder="blur"
                            className='w-auto m-auto h-48 md:h-124'
                            alt="Mindvalley Spirituality Programs" />
                    </h3>
                </div>
                <div>
                    <h3 className='bg-zinc-500 text-white text-center leading-4 h-100'>
                        <Image
                            src={MvU}
                            width="523" 
                            height="800"
                            loading="lazy"
                            placeholder="blur"
                            className='w-auto m-auto h-48 md:h-124'
                            alt="Mindvalley University" />
                    </h3>
                </div>
                <div>
                    <h3 className='bg-zinc-500 text-white text-center leading-4 h-100'>
                        <Image
                            src={MvAffiliateSignup}
                            width="1198" 
                            height="800"
                            loading="lazy"
                            placeholder="blur"
                            className='w-auto m-auto h-48 md:h-124'
                            alt="Mindvalley Affiliate Signup" />
                    </h3>
                </div>
                <div>
                    <h3 className='bg-zinc-500 text-white text-center leading-4 h-100'>
                        <Image
                            src={Squarefoot}
                            width="1351" 
                            height="768"
                            loading="lazy"
                            placeholder="blur"
                            className='w-full h-full'
                            alt="Squarefoot" />
                    </h3>
                </div>
                <div>
                    <h3 className='bg-zinc-500 text-white text-center leading-4 h-100'>
                        <Image
                            src={ThinkOfLiving}
                            width="1340" 
                            height="768"
                            loading="lazy"
                            placeholder="blur"
                            className='w-full h-full'
                            alt="ThinkOfLiving" />
                    </h3>
                </div>
                <div>
                    <h3 className='bg-zinc-500 text-white text-center leading-4 h-100'>
                        <Image
                            src={Huddle}
                            width="2880" 
                            height="1401"
                            loading="lazy"
                            placeholder="blur"
                            className='w-full h-full'
                            alt="Huddle" />
                    </h3>
                </div>
            </Carousel>  
        </>
    )
}