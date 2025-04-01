'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import client from '../../../lib/sanityClient'; // Import Sanity client

// Define the type for articles
interface Article {
  title: string;
  section: string;
  subtitle?: string; // Subtitle is optional
  url?: string;
  slug?: string;
  _createdAt: string; // Include createdAt to track the order
  columnPosition?: 'left' | 'right'; // ✅ Add this new property
}

const ElntroubleArticle = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "article"] | order(_createdAt asc) {
        title,
        section,
        subtitle,
        url,
        "slug": slug.current,
        columnPosition, // Fetching the new field
        _createdAt
      }`;
      const data: Article[] = await client.fetch(query);
      setArticles(data);
    }
    fetchData();
  }, []);

  // Group articles by section and then by subtitle (if exists)
  const groupedArticles: Record<
  string,
  { column: 'left' | 'right'; articles: Record<string, Article[]> }
> = articles.reduce((acc, article) => {
  const section = article.section || 'Other'; // Default section if missing
  const subtitle = article.subtitle || '_noSubtitle'; // Handle missing subtitle

  if (!acc[section]) {
    acc[section] = { column: 'left', articles: {} }; // Default section to left
  }

  if (!acc[section].articles[subtitle]) {
    acc[section].articles[subtitle] = []; // Initialize subtitle
  }

  acc[section].articles[subtitle].push(article);

  // **Check if THIS section has columnPosition set**
  if (article.columnPosition) {
    acc[section].column = article.columnPosition; // Move only this section
  }

  return acc;
}, {} as Record<string, { column: 'left' | 'right'; articles: Record<string, Article[]> }>);

// **Automatically alternate left/right for sections WITHOUT manual selection**
let toggleLeft = true;
Object.keys(groupedArticles).forEach((section) => {
  if (!articles.some((article) => article.section === section && article.columnPosition)) {
    groupedArticles[section].column = toggleLeft ? 'left' : 'right';
    toggleLeft = !toggleLeft;
  }
});


 return (
    <div className='product'>
      <div className="inner-page">
        <nav className="navbar">
          <ul className="list-unstyled row mb-0">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/product-document">Article Products</Link></li>
          </ul>
        </nav>
      </div>

      <div className='troble-article-list'>
        <div className='container'>
             <h1 className='text-center'>Logilab ELN Tutorial Article</h1>
             <div className="row">
  {/* Left Column */}
  <div className="col-md-6">
    {Object.keys(groupedArticles).map((section) =>
      groupedArticles[section].column === 'left' ? (
        <div key={section}>
          <h3 className="text-left mt-5">{section}</h3>
          {Object.keys(groupedArticles[section].articles).map((subtitle) => (
            <div key={subtitle} className="mb-3">
              {subtitle !== "_noSubtitle" && <h5 className="text-left">{subtitle}</h5>}
              <ul className="artile-list text-left">
                {groupedArticles[section].articles[subtitle].map((article, i) => (
                  <li key={i}>
                    <Link href={`/elntroublearticlesanity/${article.slug}`}>{article.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null
    )}
  </div>

  {/* Right Column */}
          <div className="col-md-6">
            {Object.keys(groupedArticles).map((section) =>
              groupedArticles[section].column === 'right' ? (
                <div key={section}>
                  <h3 className="text-left mt-5">{section}</h3>
                  {Object.keys(groupedArticles[section].articles).map((subtitle) => (
                    <div key={subtitle} className="mb-3">
                      {subtitle !== "_noSubtitle" && <h5 className="text-left">{subtitle}</h5>}
                      <ul className="artile-list text-left">
                        {groupedArticles[section].articles[subtitle].map((article, i) => (
                          <li key={i}>
                            <Link href={`/elntroublearticlesanity/${article.slug}`}>{article.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ElntroubleArticle;
