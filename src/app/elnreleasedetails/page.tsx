"use client"
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function Releasedetails() {
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
                    <li><Link href="#">ELN Release Notes</Link></li>
                 </ul>
                </nav>
             </div>
             <div className='troble-article-list'>
                <div className='container'>
                    <h1>ELN Release Notes</h1>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h2>Version Release Notes</h2>
                            <ul className='release-lists'>
                            <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/Release notes V 6.7.3.docx' download>Release Notes :  Version ELN 6.7.3</a></span>
                                    <span className='d-block release-date'>Sep, 27, 2024</span>
                                </li>
                           
                            <li>
                                    {/* <span className='release-title'><a href='ReleaseDetails/ELN/Release notes V 6.7.2.docx'>Release Notes :  Version ELN 6.7.1.1</a></span> */}
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/Release notes V 6.7.2.docx' download>Release Notes :  Version ELN 6.7.2</a></span>
                                    <span className='d-block release-date'>Feb, 22, 2024</span>
                                </li>
                            <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.7.11.docx' download>Release Notes :  Version ELN 6.7.1</a></span>
                                    <span className='d-block release-date'>June, 19, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.6.91.docx' download>Release Notes :  Version ELN 6.6.9.1</a></span>
                                    <span className='d-block release-date'>July, 09, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.6.8.1.docx' download>Release Notes :  Version ELN 6.6.8.1</a></span>
                                    <span className='d-block release-date'>February, 18, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.6.7.1.docx' download>Release Notes :  Version ELN 6.6.7.1</a></span>
                                    <span className='d-block release-date'>October, 08, 2021</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.6.6.1.docx'download>Release Notes :  Version ELN 6.6.6.1</a></span>
                                    <span className='d-block release-date'>June, 29, 2021</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.6.5.docx' download>Release Notes :  Version ELN 6.6.5</a></span>
                                    <span className='d-block release-date'>February, 12, 2021</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.6.4.docx'download>Release Notes :  Version ELN 6.6.4</a></span>
                                    <span className='d-block release-date'>January, 09, 2021</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.6.31.docx'>Release Notes :  Version ELN 6.6.3.1</a></span>
                                    <span className='d-block release-date'>December, 04, 2020</span>
                                </li>
                            
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.6.2.docx' download>Release Notes :  Version ELN 6.6.2</a></span>
                                    <span className='d-block release-date'>October, 16, 2020</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.5.2.docx' download>Release Notes :  Version ELN 6.5.2</a></span>
                                    <span className='d-block release-date'>December, 14, 2020</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.4.4.docx' download>Release Notes :  Version ELN 6.4.4</a></span>
                                    <span className='d-block release-date'>August, 28, 2020</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.3.4.docx' download>Release Notes :  Version ELN 6.3.4</a></span>
                                    <span className='d-block release-date'>July, 29, 2020</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.3.2.docx' download>Release Notes :  Version ELN 6.3.2</a></span>
                                    <span className='d-block release-date'>July, 13, 2020</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.3.1.docx' download>Release Notes :  Version ELN 6.3.1</a></span>
                                    <span className='d-block release-date'>July, 03, 2020</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.2.2.docx' download>Release Notes :  Version ELN 6.2.2</a></span>
                                    <span className='d-block release-date'>June, 15, 2020</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/ELN/ReleasenotesV6.2.1.docx' download>Release Notes : Version ELN 6.2.1</a></span>
                                    <span className='d-block release-date'>June, 05, 2020</span>
                                </li>
                            </ul>

                        </div>
                        <div className='col-6 text-left'>
                            {/* <h2>Technical Release Notes</h2>
                            <ul className='release-lists'>
                                <li>
                                    <span className='release-title'>Technical Release Notes :  Version ELN 6.7.1</span>
                                    <span className='d-block release-date'>August , 28, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'>Technical Release Notes :  Version ELN 6.5.1</span>
                                    <span className='d-block release-date'>May , 22, 2020</span>
                                </li>
                                <li>
                                    <span className='release-title'>Technical Release Notes : Version ELN 6.6.1</span>
                                    <span className='d-block release-date'>August , 28, 2017</span>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    
                </div>
             </div>
            <Help/>
        </div>
    </div>);
}