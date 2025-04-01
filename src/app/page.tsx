
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
// import AutoSearchInput from '@/components/AutoSearchInput';
export default function Home() {
// const suggestions = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

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
      <div className='promoted-articles'>
        <div className='container'>
          <h1>Popular Articles</h1>
          <ul className='list-unstyled row row-sm justify-content-center'>
            <div className='col-md-4'>
              <ul>
                <li className='text-left'><Link href='./limsartical/testmanagement'>Test management configuration</Link></li>
                <li className='text-left footer3'><Link href='./limsartical/samplemaster'>Sample master configuration</Link></li>
                <li className='text-left  footer3'><Link href='./limsartical/registeringsample'>Registering a Sample</Link></li>
              </ul>
            </div>
            <div className='col-md-4'>
              <ul>
                <li className='text-left'><Link href='./elnartical/sheettemplate'> How to create sheet template</Link></li>
                <li className='text-left footer3'><Link href='./elnartical/articeldetailsfour'>How to assign user rights</Link></li>
                <li className='text-left footer3'><Link href='./elnartical/registersheetorders'>Register sheet orders</Link></li>
              </ul>
            </div><div className='col-md-4'>
              <ul>
                <li className='text-left'><Link href='./sdmsartical/schedule'>How to create a schedule for file upload</Link></li>
                <li className='text-left  footer3'><Link  href='./sdmsartical/workflow'>How to setup work flow in sdms</Link></li>
                <li className='text-left  footer3'><Link  href='./sdmsartical/extractfile'>How to extract file metadata</Link></li>
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
