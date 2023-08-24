import 'antd/dist/reset.css'
import './globals.css'
import { Inter } from 'next/font/google'
import { ConfigProvider } from 'antd'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'M.Saad Siddiqui - Full Stack Developer, Senior Software Engineer',
  description: 'M.Saad Siddiqui\'s Portfolio. Skills include NuxtJS, NextJS, JavaScript, NodeJS, Webpack, Storyblok, GCP, CypressJS, PHP, MYSQL, ReactJS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConfigProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ConfigProvider>
  )
}
