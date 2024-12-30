import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Trends and News by Khalid Hussain',
  description: 'Stay updated with the latest AI trends, innovations, and news',
}

async function getAINews() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=artificial+intelligence&apiKey=b39b2d86e4a243c6a8049bc727dd14d5`,
    { next: { revalidate: 3600 } } // Revalidate every hour
  )
  if (!res.ok) throw new Error('Failed to fetch AI news')
  return res.json()
}

export default async function Home() {
  const newsData = await getAINews()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 bg-green-500 text-center">Latest AI News and Trends by Khalid Hussain</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsData.articles.map((article: any, index: number) => (
          <article key={index} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <Link
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read full article
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}

