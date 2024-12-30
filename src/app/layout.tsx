import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'AI Trends and News',
    template: '%s | AI Trends and News',
  },
  description: 'Stay updated with the latest AI trends, innovations, and news',
  keywords: ['AI', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Tech News'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'AI Trends and News',
    title: 'AI Trends and News',
    description: 'Stay updated with the latest AI trends, innovations, and news',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Trends and News',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Trends and News',
    description: 'Stay updated with the latest AI trends, innovations, and news',
    images: ['https://your-domain.com/twitter-image.jpg'],
    creator: '@your_twitter_handle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
