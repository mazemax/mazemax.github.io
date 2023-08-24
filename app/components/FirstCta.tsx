import Image from 'next/image'
import { Card, Tag } from 'antd'
import Meta from 'antd/es/card/Meta'
import { MailOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons'
import Saad from 'public/saad-photo.jpg'

export default function Cta() {
    const emailOnClick = () => {
        window.location.href = "mailto:to.msaads@gmail.com?subject=Job Opportunity&body=Hey+M.Saad%2C++Reaching+out+to+you+sharing+an+opportunity.";
      }
  
      const phoneOnClick = () => {
        window.location.href = "tel:+60102440732";
      }
  
      const whatsappOnClick = () => {
        window.location.href = "https://api.whatsapp.com/send?phone=60102440732";
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
                        alt="Saad picture"
                    />
                }
                actions={[
                    <>
                        <MailOutlined 
                            key="email" 
                            style={{ color: '#ff931f', fontSize: '32px' }} 
                            onClick={emailOnClick} 
                        />
                        Email
                    </>
                ,
                    <>
                        <PhoneOutlined 
                            key="phone" 
                            style={{ color: '#7a12d4', fontSize: '32px' }} 
                            onClick={phoneOnClick} 
                        />
                        Phone
                    </>
                ,
                    <>
                        <WhatsAppOutlined 
                            key="whatsapp" 
                            style={{ color: '#25d366', fontSize: '32px' }} 
                            onClick={whatsappOnClick} 
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