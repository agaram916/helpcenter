"use client"
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function limsvideo() {
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
              <li><Link href="/">Home </Link></li>
              <li><Link href="../productvideo">Videos </Link></li>
              <li> <Link href ="#">LIMS Product Demonstration</Link> </li>

            </ul>
          </nav>
        </div>
        <div className="container my-3">
            {/* <h1 className="videostitele">Qualis LIMS Tutorial Videos</h1> */}
            <div className="inner-video ">
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-6  col-xl-6">
                <div className="video-txt text-left">
                    <h3  className="dark-heading mt-4">Introducing Qualis LIMS Product Demonstration</h3> 	
                    <p>Qualis LIMS Software is a time-tested Laboratory Information Management System (Lims) application designed for test and research environments, to transform laboratories to perform their tasks in a digital and paperless manner. </p>
                    <div className="hero-button ">
                        <Link href="https://www.agaramtech.com/product/qualis-lims-software" className="ht-btn ht-btn-md">Learn More</Link>
                    </div>
                </div>
            </div>
            
          
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className=" video-popup wow move-up animated">
                    <Link href="https://www.youtube.com/watch?v=2p5_40AORj4" target="_blank" className="video-link ">
                        <div className="single-popup-wrap">
                            <img className="img-fluid" src="../image/eln-video.jpg" alt=""/>
                            <div className="ht-popup-video video-button">
                                <div className="video-mark">
                                    <div className="wave-pulse wave-pulse-1"></div>
                                    <div className="wave-pulse wave-pulse-2"></div>
                                </div>
                                <div className="video-button__two">
                                    <div className="video-play">
                                        <span className="video-play-icon"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                                
                </div>
            </div>
            </div>
          </div>
          <div className="inner-video ">
          <h1 className="text-center mb-4">Qualis LIMS Tutorial Videos</h1>
          <div className="row">
                {/* <div className="col-6  mb-3">
                    <h2 className="text-left">Orders & Templates</h2>
                    <ul className="artile-list text-left">
                        <li><Link to="videos/ELN/LogilabELN-RegisterSheetOrderswithTemplates.mp4" target="_blank" >Register Sheet Orders with Templates</Link></li>
                        <li><Link to="videos/ELN/LogilabELN-SheetTemplates.mp4" target="_blank" >Sheet Templates</Link></li>
                        <li><Link to="videos/ELN/LogilaabELN-TemplateValidation.mp4" target="_blank" >Template Validation</Link></li>
                        <li><Link to="videos/ELN/LogilabELN-TemplateMapping.mp4" target="_blank" >Template Mapping</Link></li>
                        <li><Link to="videos/ELN/LogilabELN-ProcessSheetOrderswithTemplates.mp4" target="_blank" >Process Sheet Orders with Templates</Link></li>
                    </ul>
                </div> */}
                <div className="col-6  mb-3">
                    <h2 className="text-left">Management</h2>
                    <ul className="artile-list text-left">
                        <li><Link href="https://youtu.be/x1RV24WCIx4" target="_blank" >Test Management</Link></li>
                        <li><Link href="https://youtu.be/6kCdzBy2gYQ" target="_blank" >User Management</Link></li>
                        <li><Link href="https://youtu.be/sYfGV7JiVZw" target="_blank" >Instrument Management</Link></li>
                        <li><Link href="https://youtu.be/zean6xbEFts" target="_blank" >Competence Management</Link></li>
                        <li><Link href="https://youtu.be/UPPpw2dwaFg" target="_blank" >Material Management</Link></li>
                        <li><Link href="https://youtu.be/NrxZ19uznPU" target="_blank" >Test Group Management</Link></li>
                    </ul>
                </div>
                <div className="col-6  mb-3">
                    <h2 className="text-left">Masters</h2>
                    <ul className="artile-list text-left">
                        <li><Link href="https://youtu.be/A2O9ziY-ZbQ" target="_blank" >Contacts Master</Link></li>
                       <li><Link href="https://youtu.be/qBQC8jCXSTY" target="_blank" >Organization Master</Link></li>
                       <li><Link href="https://youtu.be/MhXgCl-35FY" target="_blank" >Sample Master</Link></li>
                    </ul>
                </div>
                {/* <div className="col-6  mb-3">
                    <h2 className="text-left">Inventory</h2>
                    <ul className="artile-list text-left">
                        <li><Link to="videos/ELN/LogilabELN-InventoryManagement-Transactions.mp4" target="_blank" >Inventory Management - Transactions</Link></li>
                        <li><Link to="videos/ELN/LogilabELN-InventoryManagement-Masters.mp4" target="_blank" >Inventory Management - Masters</Link></li>
                      
                    </ul>
                </div>
                <div className="col-6  mb-3">
                    <h2 className="text-left">Audit Trail</h2>
                    <ul className="artile-list text-left">
                        <li><Link to="videos/ELN/LogilabELNAuditTrail.mp4" target="_blank" >Audit Trail</Link></li>
                    </ul>
                </div>
                
                <div className="col-6  mb-3">
                    <h2 className="text-left">LogBook</h2>
                    <ul className="artile-list text-left">
                        <li><Link to="videos/ELN/LogilabELN-Logbook.mp4" target="_blank" >Logbook</Link></li>
                      
                    </ul>
                </div> */}
          </div>
          </div>
          {/* <Link className="btn btn-primary btn-more" to="#">More videos</Link> */}
        </div>
        <Help/>
    </div>
      
    </div>);
}