"use client"
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function limsreleasedetails() {
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
                        <li><Link href="#">LIMS Release Notes</Link></li>
                    </ul>
                </nav>
             </div>
             <div className='troble-article-list'>
                <div className='container'>
                    <h1>LIMS Release Notes</h1>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h2>Version Release Notes</h2>
                            <ul className='release-lists'>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/LIMS/Releasenotes/ReReleaseNotes50919DEC.doc' download>Release Notes :  Version 10.0.0.2</a></span>
                                    <span className='d-block release-date'> december,19,2023 </span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/LIMS/Releasenotes/ReleaseNotes50918DEC.doc' download>Release Notes : LIMS Version 10.0.0.2 </a></span>
                                    <span className='d-block release-date'> december ,18,2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/LIMS/Releasenotes/ReleaseNotes50916DEC.doc' download>Release Notes : LIMS Version 10.0.0.2 </a></span>
                                    <span className='d-block release-date'>december  ,14, 2023</span>
                                </li>
                                
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/LIMS/Releasenotes/ReleaseNotes508.doc'download>Release Notes : LIMS Version 10.0.0.2</a></span>
                                    <span className='d-block release-date'> november,15,2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/LIMS/Releasenotes/ReleaseNotes50607OCT.doc'download>Release Notes : LIMS  Version 14</a></span>
                                    <span className='d-block release-date'> october ,07, 2023</span>
                                </li>

                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/LIMS/Releasenotes/ReleaseNotes507.doc'download>Release Notes : LIMS Version 15</a></span>
                                    <span className='d-block release-date'> october ,18,2023</span>
                                </li>

                                <li>
                               
                                    <span className='release-title'><a href='../ReleaseDetails/LIMS/Releasenotes/ReleaseNotes50625SEP.doc'download>Release Notes : LIMS Version 14</a></span>
                                    <span className='d-block release-date'> september ,25, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/LIMS/Releasenotes/ReleaseNotes5026AUG2023.doc'download>Release Notes : LIMS Version 13</a></span>
                                    <span className='d-block release-date'> august ,26, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/LIMS/Releasenotes/ReleaseNotes50505AUG2023.doc'download>Release Notes : LIMS Version 13</a></span>
                                    <span className='d-block release-date'>august, 05, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/LIMS/Releasenotes/ReleaseNotes505.doc'download>Release Notes : LIMS Version 13</a></span>
                                    <span className='d-block release-date'> July ,31,,2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/LIMS/Releasenotes/ReleaseNotes504.doc'download>Release Notes : LIMS Version 12</a></span>
                                    <span className='d-block release-date'> July ,08, 2023</span>
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