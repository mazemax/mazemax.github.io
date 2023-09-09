import Image from 'next/image'
import { Card, Tag } from 'antd'
import Meta from 'antd/es/card/Meta'
import { MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons'
import Saad from 'public/saad-photo.jpg'

export default function Cta() {
    const emailOnClick = () => {
        (window as any)?.gtag('event', 'email_click', {
            event_label: "Email Click"
        })
        window.location.href = "mailto:to.msaads@gmail.com?subject=Job Opportunity&body=Hey+M.Saad%2C++Reaching+out+to+you+sharing+an+opportunity."
      }
  
      const phoneOnClick = () => {
        (window as any)?.gtag('event', 'phone_click', {
            event_label: "Phone Click"
        })
        window.location.href = "tel:+60102440732"
      }
  
      const whatsappOnClick = () => {
        (window as any)?.gtag('event', 'whatsapp_click', {
            event_label: "Whatsapp Click"
        })
        window.location.href = "https://api.whatsapp.com/send?phone=60102440732"
      }

    return (
        <>
            <Card
                hoverable
                className='w-60 md:w-80 m-auto md:mr-0 md:ml-auto flex-row'
                cover={
                    <Image 
                        src={Saad}
                        width={300}
                        height={300}
                        loading="eager" 
                        placeholder="blur"
                        alt="Max Saad picture"
                    />
                }
                actions={[
                    <>
                        <MailOutlined 
                            key="email" 
                            style={{ color: '#ff931f', fontSize: '32px' }} 
                            onClick={emailOnClick} 
                            className='hover:scale-150 focus:scale-150 transition-all'
                        />
                        Email
                    </>
                ,
                    <>
                        <PhoneOutlined 
                            key="phone" 
                            style={{ color: '#7a12d4', fontSize: '32px' }} 
                            onClick={phoneOnClick} 
                            className='hover:scale-150 focus:scale-150 transition-all'
                        />
                        Phone
                    </>
                ,
                    <>
                        <WhatsAppOutlined 
                            key="whatsapp" 
                            style={{ color: '#25d366', fontSize: '32px' }} 
                            onClick={whatsappOnClick} 
                            className='hover:scale-150 focus:scale-150 transition-all'
                        />
                        Whatsapp
                    </>
                ]}
            >
                <Meta title={
                    <>
                    <Tag color="#87d068">Online</Tag>
                    Contact now
                    </>
                } />
            </Card>
        </>
    )
}