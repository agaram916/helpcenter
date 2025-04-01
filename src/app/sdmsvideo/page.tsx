"use client"
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function sdmsvideo() {
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
              <li><Link href="../productvideo">Videos</Link></li>
              <li><Link href="#"> LogiLab SDMS Product Demonstration</Link></li>

            </ul>
          </nav>
        </div>
        <div className="container my-3">
            {/* <h1 className="videostitele"></h1> */}
            <div className="inner-video ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6  col-xl-6">
                <div className="video-txt text-left">
                    <h3  className="dark-heading ">Introducing LogiLab SDMS Product Demonstration</h3> 	
                    <p>LogiLab SDMS Software is a time-tested Scientific Data Management System (SDMS) application designed for test and research environments, href transform laborahrefries href perform their tasks in a digital and paperless manner. </p>
                    <div className="hero-button mt-4">
                        <Link href="https://www.agaramtech.com/product/logilab-sdms-software" className="ht-btn ht-btn-md">Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className=" video-popup wow move-up animated">
                    <a href="https://youtu.be/_6krjVhhd-E" target="_blank" className="video-link ">
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
                    </a>
                                
                </div>
            </div>
          </div>
          </div>
          <div className="inner-video ">
          <h1 className="text-center mb-4">Logilab SDMS Tutorial Videos</h1>
          <div className="row mt-5">
                <div className="col-6  mb-3">
                    <h2 className="text-left">Overview</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/_6krjVhhd-E" target="_blank" >Overview</a></li>
                        <li><a href="https://youtu.be/8QuFzKiYX70" target="_blank" >Quick Start Guide</a></li>
                    </ul>
                </div>
                
                <div className="col-6  mb-3">
                    <h2 className="text-left">SetUp</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/rzZLIzn_u-M" target="_blank">TCPIP Instrument Configuration and Operation in SDMS</a></li>
                        <li><a href="https://youtu.be/PizAICmFHeM" target="_blank" >RS232 Instrument Configuration and Operation in SDMS</a></li>
                        <li><a href="https://youtu.be/vjuPcaipSxY" target="_blank" >Scheduler Setup</a></li>
                    </ul>
                </div>
                <div className="col-6  mb-3">
                    <h2 className="text-left">Log History</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/xJfN9auhg4A" target="_blank">Log History</a></li>
                        <li><a href="https://youtu.be/ZL7H1P6hTuw" target="_blank" >Instrument Lock</a></li>
                    </ul>
                </div>
                <div className="col-6  mb-3">
                    <h2 className="text-left">User Management</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/FpaddGY4wOA" target="_blank">User Management</a></li>
                        <li><a href="https://youtu.be/utizDjq5xDo" target="_blank" >User Interface</a></li>
                    </ul>
                </div>
                <div className="col-6  mb-3">
                    <h2 className="text-left">Settings</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/ZL352EmLteg" target="_blank">Installation</a></li>
                        <li><a href="https://youtu.be/oIH6ml2c1As" target="_blank" >Settings</a></li>
                        <li><a href="https://youtu.be/lwKuql8kDSk" target="_blank" >Installation Qualification</a></li>
                    </ul>
                </div>
                <div className="col-6  mb-3">
                    <h2 className="text-left">Masters</h2>
                    <ul className="artile-list text-left">
                     <li><a href="https://youtu.be/pUucwViYAsI" target="_blank" >Tags Templates</a></li>
                    </ul>
                </div>
                <div className="col-6  mb-3">
                    <h2 className="text-left">FTP</h2>
                    <ul className="artile-list text-left">
                     <li><a href="https://youtu.be/hbOKiuk2BUc" target="_blank" >FTP Configuration</a></li>
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
          {/* <Link className="btn btn-primary btn-more" href="#">More videos</Link> */}
        </div>
    <Help/>
    </div>
    </div>);
}