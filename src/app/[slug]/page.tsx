'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import { PortableText } from '@portabletext/react';
import client from '../../../lib/sanityClient';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity image URL builder
const builder = imageUrlBuilder(client);
const getSanityImageUrl = (source: any) => builder.image(source).url();
// Define the Article interface
interface Article {
  title: string;
  body: any[];
  mainImage?: { asset: { _ref: string } };
  publishedAt: string;
  prevArticle?: { title: string; slug: { current: string } };
  nextArticle?: { title: string; slug: { current: string } };
}

const Usersetup = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [showButton, setShowButton] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [article, setArticle] = useState<Article | null>(null);

  // Fetch article data
  useEffect(() => {
    if (!slug) return;
    const fetchData = async () => {
      try {
        const query = `*[_type == "article" && slug.current == $slug][0] {
          title,
          body,
          mainImage,
          publishedAt,
          prevArticle->{title, slug},
          nextArticle->{title, slug}
        }`;

        const data = await client.fetch(query, { slug });
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);


  // Scroll event handling
  useEffect(() => {
    const scrollFunction = () => {
      setShowButton(window.scrollY > 20);
      const protocolmenu = document.querySelector('.protocolmenu');
      if (protocolmenu) {
        const offset = protocolmenu.getBoundingClientRect().top;
        setIsFixed(window.scrollY >= offset);
      }
    };
    window.addEventListener('scroll', scrollFunction);
    return () => window.removeEventListener('scroll', scrollFunction);
  }, []);


  // Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 300);
    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
        <SyncLoader color="#1163ea" size={20} />
      </div>
    );
  }


  function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="product">
      <div className="inner-page">
        <nav className="navbar">
         <ul className="list-unstyled row mb-0">
            <li><Link href="/">Home</Link></li>
            <li><Link href="../../product-document">Article Products</Link></li>
            <li><Link href="../elntroublearticle">ELN Article</Link></li>
          </ul>
        </nav>
      </div>


      <div className="trouble-article-list">
        {showButton && (
          <button id="btn-back-to-top" onClick={backToTop} style={{ display: 'block' }}>
            <i className="fas fa-arrow-up"></i>
          </button>
        )}


        <div className="inner-details">
          {article.mainImage?.asset?._ref && (
            <div className="inner-image">
              <img src={getSanityImageUrl(article.mainImage.asset)} alt={article.title} className="p-0 my-3" />
            </div>
          )}

          {/* Dynamic Article Content */}
          <div className='inner-details'>
          <section className="article-content">
          <PortableText
  value={article.body}
  components={{
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) return null;
        const imageUrl = getSanityImageUrl(value.asset);
        const className = value.className || ''; // Dynamically get class from Sanity
        return (
          <figure className={`inner-image ${className}`}>
            <img
              src={imageUrl}
              alt={value.alt || 'Article Image'}
              className={`p-0 my-3 ${className}`.trim()}
            />
            {value.caption && <figcaption className="figure-caption text-center">{value.caption}</figcaption>}
          </figure>
        );
      },
      table: ({ value }) => {
        if (!value?.rows || value.rows.length === 0) return null;
        // Extract header row (first row)
        const headerRow = value.rows[0];
        const bodyRows = value.rows.slice(1);  
        return (
          <div className="table-responsive">
            <table className="table table-bordered">
              {/* Table Header */}
              <thead>
                <tr>
                  {headerRow.cells?.map((cell, index) => (
                    <th key={index}>{cell}</th>
                  ))}
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {bodyRows.map((row, rowIndex) => (
                 <tr key={rowIndex}>
                    {row.cells?.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      },
    },
    block: {
      h1: ({ children }) => <h1 className="text-center mb-3">{children}</h1>,
      h2: ({ children }) => <h2 className="text-left">{children}</h2>,
      h3: ({ children }) => <h3 className="text-left">{children}</h3>,
      normal: ({ children }) => <p className="text-left">{children}</p>,
      li: ({ children }) => <li className="text-left">{children}</li>, // Added li tag styling
    },
    marks: {
      color: ({ children, value }) => (
        <span style={{ color: value?.hex || 'black'}}>
          {children}
        </span>
      ),
      largeText: ({ children }) => (
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {children}
        </span>
      ),
    },
  }}
/>
       </section>
          </div>
          <div className="prevarticle">
            <div className="row my-5">
              <div className="col-6 text-left">
                {article.prevArticle ? (
                  <>
                    <h4>Previous article</h4>
                    <Link href={`/article/${article.prevArticle.slug.current}`}>{article.prevArticle.title}</Link>
                  </>
                ) : null}
              </div>
              <div className="col-6 text-right">
                {article.nextArticle ? (
                  <>
                    <h4>Next article</h4>
                    <Link href={`/article/${article.nextArticle.slug.current}`}>{article.nextArticle.title}</Link>
                  </>
                ) : null}
              </div>
            </div>
          </div>
       </div>
      </div>
      <Help />
    </div>
  );
};

export default Usersetup;

