'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.replace('https://maxsaad.com/')
  }, [])

  return (
    <main style={{ fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0, padding: '2rem', textAlign: 'center', background: '#f9fafb' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', marginBottom: '1rem' }}>
        Max Saad — AI Solutions Engineer
      </h1>
      <p style={{ color: '#374151', marginBottom: '2rem' }}>
        This site has moved to{' '}
        <a href="https://maxsaad.com/" style={{ color: '#7c3aed', fontWeight: 600 }}>
          maxsaad.com
        </a>
      </p>
      <a
        href="https://maxsaad.com/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, #9333ea 0%, #f97316 100%)',
          color: '#fff',
          borderRadius: '0.5rem',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Visit maxsaad.com
      </a>
    </main>
  )
}