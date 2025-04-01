"use client";
import Help from '@/components/help';
import React, { useState ,useEffect } from "react";
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
export default function dmslayout() {
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

<div>
        <div className="inner-page">
          <nav className="navbar">
            <ul className="list-unstyled row mb-0">
            <li><Link href="./../">Home</Link></li>
            <li><Link href="./../product">Products</Link></li>
              <li><Link href='#'>Qualis data management system</Link></li>

            </ul>
          </nav>
        </div>
        <div className="container">
          <div className="inner-details">
          <h1 className="py-2">Qualis data management system</h1>
          <div className='flex'>
              <div className='media mt-2'>
                <div className='avatar'>
                   <img src='../image/userlogo.png' alt='userlogo' className="w-100" />
                </div>
                <div className='media-body text-left ml-3'>
                 
                  <ul>
                    <li className="updates">Updated by</li>
                    <li className="update">
                    <b>Agaram technologies</b>
                      {/* <time dateTime="2023-08-22T18:41:34Z" title="2023-08-23 00:11" data-datetime="relative">19 days ago</time> */}
                    </li>
                   </ul>
                </div>
              </div>
            </div>
                  <div className="related-articles">
                <h2 className="related-articles-title text-left">Related articles</h2>
                <ul className="list-unstyled text-left"> 
                  <li><a href="../ReleaseDetails/DMS/Qualis_DMS_User_Manual_v_6_0_4.pdf" download>Qualis DMS User Guide V 6.0.4<i className="fa fa-download pl-2" aria-hidden="true"></i></a></li>
                  <li><a href="../ReleaseDetails/DMS/MongoDB_Installation_Guide_v_1_0_0.pdf" download>MongoDB Installation Guide V 1.0.0<i className="fa fa-download pl-2" aria-hidden="true"></i></a></li>
                  
                </ul>
            </div>
            
          </div>

        </div>
          <Help/>
    </div>
    </div>);
}