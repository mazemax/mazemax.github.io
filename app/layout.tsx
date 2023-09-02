import 'antd/dist/reset.css'
import './globals.css'
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
  title: 'M.Saad Siddiqui - Full Stack Developer, Senior Software Engineer',
  description: 'M.Saad Siddiqui\'s Portfolio. Skills include NuxtJS, NextJS, JavaScript, NodeJS, Webpack, Storyblok, GCP, CypressJS, PHP, MYSQL, ReactJS.',
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
      <body className={className}>{children}</body>
    </html>
    </ConfigProvider>
  )
}
