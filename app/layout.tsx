import 'antd/dist/reset.css'
import './globals.css'
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
  title: 'Max Saad - AI Solutions Engineer | $19M+ Revenue Driven',
  description: 'Award-winning AI engineer helping enterprises drive revenue through intelligent solutions. 10+ years experience. Trusted by Mindvalley, REA Group, IPG Mediabrands.',
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

        { /* Structured Data - Person Schema */ }
        <Script id="schema-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Max Saad",
              "jobTitle": "Senior Full Stack AI Engineer",
              "url": "https://mazemax.github.io",
              "sameAs": [
                "https://www.linkedin.com/in/maxsaad",
                "https://github.com/mazemax"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Mindvalley Labs"
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Full Stack Development",
                "React",
                "Next.js",
                "Vue.js",
                "Nuxt.js",
                "Python",
                "TypeScript",
                "LlamaIndex",
                "LangChain",
                "OpenAI API"
              ],
              "award": [
                "1st Place AAIMS25 AI Code Fest - Healthcare Reimagined",
                "Deriv Hackathon Winner - Sentiment Sense"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kuala Lumpur",
                "addressCountry": "Malaysia"
              },
              "email": "to.msaads@gmail.com",
              "telephone": "+60102440732"
            }
          `}
        </Script>

        { /* Structured Data - Professional Service Schema */ }
        <Script id="schema-service" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "ProfessionalService",
              "name": "Max Saad AI Solutions",
              "description": "Award-winning AI engineering services helping enterprises drive revenue through intelligent solutions",
              "provider": {
                "@type": "Person",
                "name": "Max Saad"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Global"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI and Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Strategy Consulting",
                      "description": "Transform your business with AI. I help executives plan and execute successful AI transformation initiatives."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Full-Stack Development",
                      "description": "Senior-level implementation expertise to build and scale your AI-powered applications from concept to production."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Technical Leadership",
                      "description": "Elevate your team's capabilities with experienced technical leadership and mentorship for sustained growth."
                    }
                  }
                ]
              }
            }
          `}
        </Script>

        { /* Structured Data - FAQ Schema */ }
        <Script id="schema-faq" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What AI services does Max Saad offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Max offers three core services: AI Strategy Consulting for executives planning AI transformation initiatives, Full-Stack Development for building and scaling AI-powered applications, and Technical Leadership for team mentoring and technical decision-making support. Each service is tailored to drive measurable business outcomes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries has Max Saad worked with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Max has extensive experience across multiple industries including EdTech (Mindvalley - enabling $19M+ in revenue), PropTech (REA Group - serving 100K+ property seekers), and AdTech (IPG Mediabrands). His expertise spans enterprise workplace management, e-learning platforms, and real estate technology solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I hire Max Saad for an AI project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There are three ways to get started: Book a free 30-minute strategy call via Calendly for personalized AI roadmap discussions, start an instant conversation via WhatsApp for technical questions and feasibility assessments, or email directly at to.msaads@gmail.com. All initial consultations are commitment-free."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Max Saad's tech stack?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Max specializes in modern AI and full-stack technologies including Python, TypeScript, React/Next.js, Vue/Nuxt.js, Node.js, and Laravel on the backend. For AI/ML, he works with LlamaIndex, LangChain, OpenAI APIs, Hugging Face models, and RAG implementations. His cloud expertise includes AWS, Google Cloud, and containerization with Docker."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Max Saad based?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Max is based in Kuala Lumpur, Malaysia, and is available for remote engagements globally. He has successfully delivered projects across Asia-Pacific, working with international teams at Mindvalley, REA Group, and IPG Mediabrands. Time zone flexibility and cross-cultural collaboration are core strengths."
                  }
                }
              ]
            }
          `}
        </Script>

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
