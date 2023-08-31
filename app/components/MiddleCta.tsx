import { Space, Button, Alert } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { Parallax } from 'rc-scroll-anim'

export default function MiddleCta() {
    const gtmDownloadMiddleClick = () => {
        (window as any)?.gtag('event', 'download_middle_click', {
            event_label: "Download Middle Click"
        })
    }

    return (
        <div>
            <Parallax
                animation={{ x: 0, opacity: 1, playScale: [0.1, 0.5] }}
                style={{ transform: 'translateX(-100px)', opacity: 0 }}
                className="code-box-shape"
                >
                    <Alert
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
            </Parallax>
        </div>
    )
}