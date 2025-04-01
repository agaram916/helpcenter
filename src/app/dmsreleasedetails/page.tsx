"use client"
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function dmsreleasedetails() {
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

<div className='product'>
            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row mb-0">
                    <li><Link href="./../">Home</Link></li>
                    <li><Link href="../release-product"> Product Release Notes</Link></li>
                        <li><Link href="#">DMS Release Notes</Link></li>
                    </ul>
                </nav>
             </div>
             <div className='troble-article-list'>
                <div className='container'>
                    <h1>Product Release Notes</h1>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h2>Version Release Notes</h2>
                            <ul className='release-lists'>  
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/DMS/Release Notes_JDMS-8.0.6.docx' download>Release Notes : Version 8.0.6</a></span>
                                    <span className='d-block release-date'>August, 08, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/DMS/Release Note_JDMS-8.0.6.docx' download>Release Notes : Version 8.0.6</a></span>
                                    <span className='d-block release-date'>May, 25, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/DMS/Release Note_JDMS-8.0.5.docx' download>Release Notes : Version 8.0.5</a></span>
                                    <span className='d-block release-date'>January, 10, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/DMS/Release Notes_JDMS-8.0.2.docx' download>Release Notes : Version 8.0.4</a></span>
                                    <span className='d-block release-date'>September, 10, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/DMS/Release Notes_JDMS-8.0.2.docx' download>Release Notes : Version 8.0.2</a></span>
                                    <span className='d-block release-date'>April, 11, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/DMS/Release Notes_JDMS-8.0.1_Beta 01.docx' download>Release Notes : Version 8.0.1</a></span>
                                    <span className='d-block release-date'>January, 12, 2022</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 text-left'>
                            <h2>Technical Release Notes</h2>
                            <ul className='release-lists'>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/DMS/Release Notes_JDMS-8.0.6.docx' download>Release Notes : Version 8.0.6</a></span>
                                    <span className='d-block release-date'>August, 08, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/DMS/Release Note_JDMS-8.0.6.docx' download>Release Notes : Version 8.0.6</a></span>
                                    <span className='d-block release-date'>May, 25, 2023</span>
                                </li>
                            <li>
                                    <span className='release-title'><a href='../ReleaseDetails/DMS/Release Note_JDMS-8.0.5.docx' download>Release Notes : Version 8.0.5</a></span>
                                    <span className='d-block release-date'>January, 10, 2023</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
             </div>
            <Help/>
        </div>
    </div>);
}