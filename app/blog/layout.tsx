import 'antd/dist/reset.css'
import '../globals.css'
import Script from 'next/script'
import { Roboto } from 'next/font/google'
import { ConfigProvider } from 'antd'

const roboto = Roboto({ 
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap',
  preload: true,
  fallback: [
    '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial',
    'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
  ]
})

export const metadata = {
  title: 'Max Blog',
  description: 'Blog for NuxtJS, NextJS, JavaScript, NodeJS, Webpack, Storyblok, GCP, CypressJS, PHP, MYSQL, ReactJS and anything new.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { style: { fontFamily }, className } = roboto

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: fontFamily
        }
      }}
    >
    <html lang="en">
      <body className={className}>
        {children}

        { /* Google tag (gtag.js) */ }
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KW3LN92T8H" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-KW3LN92T8H');
          `}
        </Script>
      </body>
    </html>
    </ConfigProvider>
  )
}
