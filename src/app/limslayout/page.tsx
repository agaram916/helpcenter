"use client"
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function limslayout() {
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

  return (
    <div>
      <div>

        <div className="inner-page">
          <nav className="navbar">
            <ul className="list-unstyled row mb-0">
              <li><Link href="./../">Home</Link></li>
              <li><Link href="./../product">Products</Link></li>
              <li> <Link href="#">Qualis  Laboratory information management system </Link></li>
            </ul>
          </nav>
        </div>
        <div className="container">
          <div className="inner-details">
            <h1 className="py-2">Qualis Laboratory information management system</h1>
            <div className='flex'>
              <div className='media mt-2'>
                <div className='avatar'>
                  <img src='../image/userlogo.png' alt='userlogo' className="w-100" />
                </div>
                <div className='media-body text-left ml-3'>

                  <ul>
                    <li className="updates"> Updated by</li>
                    <li className="update">
                    <b>Agaram technologies</b>
                      {/* <time datetime="2023-08-22T18:41:34Z" title="2023-08-23 00:11" data-datetime="relative">19 days ago</time> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="related-articles">
              <h2 className="related-articles-title text-left">Related articles</h2>
              <ul className="list-unstyled text-left">
                <li><a href="../ReleaseDetails/LIMS/QualisLIMSUserManual1.pdf" download>Qualis LIMS User Manual V 10.0.0.2<i className="fa fa-download pl-2" aria-hidden="true"></i></a></li>
                {/* <li><a href="ReleaseDetails/LIMS/NIBS-QualisLimsUserManualv9.0.0.1.pdf" download>NIBSC - QualisLims User Manual v 9.0.0.1<i className="fa fa-download pl-2" aria-hidden="true"></i></a></li>
                  <li><a href="ReleaseDetails/LIMS/QualisDMSUserManual.docx"download>Qualis DMS UserManual v 8.0.6<i className="fa fa-download pl-2" aria-hidden="true"></i></a></li> */}
              </ul>
            </div>
          </div>

        </div>
        <Help/>
      </div>
    </div>);
}