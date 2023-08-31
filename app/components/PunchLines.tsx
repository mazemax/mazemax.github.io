import { useState, useEffect } from 'react'
import { Typography, Divider } from 'antd'
import Texty from 'rc-texty'
import 'rc-texty/assets/index.css'

const delay = 2

export default function PunchLines() {
    const [show, setShow] = useState(true)
    useEffect(
        () => {
          let timer1 = setTimeout(() => setShow(!show), delay * 1000)
    
          // this will clear Timeout
          return () => {
            clearTimeout(timer1)
          }
        },
        [show]
      )

    return (
        <>
            <Typography.Title level={5} className='m-0 text-left leading-0'>
                M.Saad Siddiqui
            </Typography.Title>
            <Typography.Title level={2} className='m-0 text-left font-bold leading-0' style={{marginTop: 0}}>
                Hire a competent<br/>
                {
                    show && 
                    <Texty interval={30}>
                        Software Engineer
                    </Texty>
                }
                {
                    !show && 
                    `Engineering Lead`
                }
            </Typography.Title>
            <Typography.Title level={4} className='m-0 text-left font-bold leading-0' style={{marginTop: 0}}>
                Elevate your team with the leadership and mentorship of a senior having trailblazing record of technical brilliance and unmatched creativity
            </Typography.Title>
            <Divider className='block md:hidden' />
        </>
    ) 
}