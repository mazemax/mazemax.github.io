import { Space, Button, Alert } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

export default function MiddleCta() {
    const gtmDownloadMiddleClick = () => {
        (window as any)?.gtag('event', 'download_middle_click', {
            event_label: "Download Middle Click"
        })
    }

    return (
        <>
            <Alert
                // message="Want to learn more?"
                description="To download CV in printable form click on the Download button now"
                type="info"
                showIcon
                action={
                    <Space direction="vertical">
                    <Button type="primary" 
                            shape="round" 
                            icon={<DownloadOutlined />} 
                            size='large' 
                            className='mx-auto sm:mt-2'
                            href='https://drive.google.com/file/d/10Ud0OdwO4HfLPGMcS0tlickbUq3v3ICY/view?usp=sharing' 
                            target='_blank'
                            onClick={gtmDownloadMiddleClick}
                    >
                        Download
                    </Button>
                    </Space>
                }
                className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0'
                />
        </>
    )
}