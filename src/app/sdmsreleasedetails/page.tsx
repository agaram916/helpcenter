"use client"
import Help from '@/components/help';
import Link from 'next/link';
  
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function sdmsreleasedetails() {
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
                    <li><Link href="#">SDMS Release Notes</Link></li>
                    </ul>
                </nav>
             </div>
             <div className='troble-article-list'>
                <div className='container'>
                    <h1>SDMS Release Notes</h1>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h2>Version Release Notes</h2>
                         
                            <ul className='release-lists'>
                                 <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662023101601.doc'download>Release Notes :  Version v6.6_20231016_01</a></span>
                                    <span className='d-block release-date'>October, 16, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662023082101.doc' download>Release Notes :  Version v6.6_20230821_01</a></span>
                                    <span className='d-block release-date'>August, 21, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662023051001.doc' download>Release Notes :  Version v6.6_20230510_01</a></span>
                                    <span className='d-block release-date'>May, 10, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662023012001.doc' download>Release Notes :  Version ELN 6.6.5</a></span>
                                    <span className='d-block release-date'>February, 12, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662022102201.doc' download>Release Notes :  Version v6.6_20230120_01</a></span>
                                    <span className='d-block release-date'>January, 20, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662022102201.doc'>Release Notes :  Version v6.6_20221022_01</a></span>
                                    <span className='d-block release-date'>October, 22, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662022091601.doc' download>Release Notes :  Version v6.6_20220916_01</a></span>
                                    <span className='d-block release-date'>September, 16, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662022091601.doc' download>Release Notes :  Version v6.6_20220916_01</a></span>
                                    <span className='d-block release-date'>September, 16, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662022090901.doc'>Release Notes :  Version v6.6_20220909_01</a></span>
                                    <span className='d-block release-date'>September, 08, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv652022041801.doc' download>Release Notes :  Version v6.5_20220418_01</a></span>
                                    <span className='d-block release-date'>April, 18, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv652022022501.doc' download>Release Notes :  Version v6.5_20220225_01</a></span>
                                    <span className='d-block release-date'>February, 25, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWeReleaseNotesv652022020201.doc' download>Release Notes :  Version v6.5_20220202_01</a></span>
                                    <span className='d-block release-date'>February, 08, 2022</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv652021102501.doc' download>Release Notes :  Version v6.5_20211025_01</a></span>
                                    <span className='d-block release-date'>November, 24, 2021</span>
                                </li>
                               
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv652021070101.doc' download>Release Notes : Version v6.5_20210701_01</a></span>
                                    <span className='d-block release-date'>July, 07, 2021</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv652021071401.doc' download>Release Notes :  Version v6.5_20210714_01</a></span>
                                    <span className='d-block release-date'>June, 14, 2021</span>
                                </li>
                            </ul>
                            
                        </div>
                        <div className='col-6 text-left'>
                            <h2>Technical Release Notes</h2>
                            <ul className='release-lists'>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662023101601.doc' download>Release Notes :  Version v6.6_20231016_01</a></span>
                                    <span className='d-block release-date'>October, 16, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662023082101.doc' download>Release Notes :  Version v6.6_20230821_01</a></span>
                                    <span className='d-block release-date'>August, 21, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662023051001.doc' download>Release Notes :  Version v6.6_20230510_01</a></span>
                                    <span className='d-block release-date'>May, 10, 2023</span>
                                </li>
                                <li>
                                    <span className='release-title'><a href='../ReleaseDetails/SDMS/SDMSWebReleaseNotesv662023012001.doc' download>Release Notes :  Version ELN 6.6.5</a></span>
                                    <span className='d-block release-date'>February, 12, 2023</span>
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