export const metadata = {
  title: 'Max Saad - AI Solutions Engineer',
  description: 'Redirecting to maxsaad.com',
  alternates: {
    canonical: 'https://maxsaad.com/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://maxsaad.com/" />
        <meta httpEquiv="refresh" content="0; url=https://maxsaad.com/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace('https://maxsaad.com/')`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
