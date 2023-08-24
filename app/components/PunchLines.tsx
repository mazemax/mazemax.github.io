import { Typography, Divider } from 'antd'

export default function PunchLines() {
    return (
        <>
            <Typography.Title level={5} className='m-0 text-left leading-0'>
                M.Saad Siddiqui
            </Typography.Title>
            <Typography.Title level={2} className='m-0 text-left font-bold leading-0' style={{marginTop: 0}}>
                Hire a competent<br/> Software Engineer
            </Typography.Title>
            <Typography.Title level={4} className='m-0 text-left font-bold leading-0' style={{marginTop: 0}}>
                Elevate your team with the leadership and mentorship of a senior having trailblazing record of technical brilliance and unmatched creativity
            </Typography.Title>
            <Divider className='block md:hidden' />
        </>
    )
}