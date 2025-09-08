
// import Card from './Card';
"use client"
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
import Card from './../components/card';
import Productdoc from 'public/image/Product-documentation.svg';
import helpenter from 'public/image/help-entre-articel.svg';
import helpproduct from 'public/image/help-product-release-notes.svg';
import helpcentre from 'public/image/help-centre-videos.svg';
import helpfaq from 'public/image/help-centre-faq.svg';
import SearchFilter from '../components/SearchFilter';
import Link from 'next/link';
import Help from '@/components/help';
import client from '../../lib/sanityClient';

interface Article {
  title: string;
  slug: {
    current: string;
  };
}

interface PopularArticles {
  lims: Article[];
  eln: Article[];
  sdms: Article[];
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // ✅ Correct type for state
  const [popularArticles, setPopularArticles] = useState<PopularArticles>({
    lims: [],
    eln: [],
    sdms: [],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchPopular() {
      const query = `{
        "lims": *[_type == "limsarticle" && isPopular == true] 
          | order(_createdAt asc)[0...3] {title, slug},
        "eln": *[_type == "article" && isPopular == true] 
          | order(_createdAt asc)[0...3] {title, slug},
        "sdms": *[_type == "sdmsarticle" && isPopular == true] 
          | order(_createdAt asc)[0...3] {title, slug}
      }`;

      const result: PopularArticles = await client.fetch(query);
      setPopularArticles(result);
    }

    fetchPopular();
  }, []);

  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
        <SyncLoader color="#1163ea" size={20} />
      </div>
    );
  }

 

  return (<div>

    <div className='App'>
      <div className='home-header'>
        <div className='container'>
          <div className='my-6 text-center'>
            <h1 className='py-3'>Welcome to Agaram Tech Support & Knowledge base</h1>
            <h3 className='mb-4'>How can we help?</h3>
            <div className="d-flex justify-content-center">
              {/* <Search /> */}
              {/* <AutoSearchInput/>    */}
              {/* <SearchFilter /> */}
            </div>
            <div className='popular-keywords'>
              <ul>
                 <li><Link href='/product-document'>Popular,</Link></li>
                <li><Link href='/product-document'>Articles,</Link></li>
                <li><Link href='/productvideo'>Videos,</Link></li>
                <li><Link href='/faq-product'>FAQ's</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='relatives fulfil-wrapper z-40' id="page-container">
        <div className=' container '>
          <div className='row justifyContentCenter'>
            <div className='text-center py-4'>
              <ul className='list-unstyled row row-sm justify-content-center mt-4'>
                <li className=' col-12 col-md-6 col-lg-4'>
                  <div className="card-container">
                  <Link href="/product" className="d-block">
                    <Card
                      imgClassName=""
                      imgSrc={Productdoc}
                      linkTo="/product"
                      title="Product Documentation"
                    />
                  </Link>
                  </div>
                </li>
                <li className='col-12 col-md-6 col-lg-4'>
                  <div className="card-container">
                  <Link href="/product-document" className="d-block">
                    <Card
                      imgClassName={""}
                      imgSrc={helpenter}
                      linkTo="/product-document"
                      title="Articles"
                    />
                  </Link>
                  </div>
                </li>
                <li className='col-12 col-md-6 col-lg-4'>
                <Link href="/release-product" className="d-block">
                  <Card
                    imgSrc={helpproduct}
                    imgClassName="release-product"
                    linkTo="/release-product"
                    title="Product Release Notes"
                  />
                   </Link>
                </li>
                <li className='col-12 col-md-6 col-lg-4 mt-5'>
                <Link href="/productvideo" className="d-block">
                  <Card
                    imgSrc={helpcentre}
                    imgClassName="product-video"
                    linkTo="/productvideo"
                    title="Videos"
                  />
                   </Link>
                </li>
                <li className='col-12 col-md-6 col-lg-4 mt-5'>
                <Link href="/faq-product" className="d-block">
                  <Card
                    imgClassName={""}
                    imgSrc={helpfaq}
                    linkTo="/faq-product"
                    title="FAQ"
                  />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  <div className="promoted-articles">
        <div className="container">
          <h1>Popular Articles</h1>
          <ul className="list-unstyled row row-sm justify-content-center">
            {/* LIMS Articles */}
            <div className="col-md-4">
              <ul>
                {popularArticles.lims.length > 0 ? (
                  popularArticles.lims.map((article) => (
                    <li key={article.slug.current} className="text-left footer3">
                      <Link href={`/lims-article/${article.slug.current}`}>
                        {article.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <p>No LIMS articles yet.</p>
                )}
              </ul>
            </div>

            {/* ELN Articles */}
            <div className="col-md-4">
              <ul>
                {popularArticles.eln.length > 0 ? (
                  popularArticles.eln.map((article) => (
                    <li key={article.slug.current} className="text-left footer3">
                      <Link href={`/eln-article/${article.slug.current}`}>
                        {article.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <p>No ELN articles yet.</p>
                )}
              </ul>
            </div>

            {/* SDMS Articles */}
            <div className="col-md-4">
              <ul>
                {popularArticles.sdms.length > 0 ? (
                  popularArticles.sdms.map((article) => (
                    <li key={article.slug.current} className="text-left footer3">
                      <Link href={`/sdms-article/${article.slug.current}`}>
                        {article.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <p>No SDMS articles yet.</p>
                )}
              </ul>
            </div>
          </ul>
        </div>
      </div>
          <Help/>
    </div>
  </div>
  );
}
