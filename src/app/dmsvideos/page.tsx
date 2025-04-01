"use client"
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function dmsvideos() {
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
              <li> <Link href ="#"> Qualis DMS Product Demonstration</Link></li>

            </ul>
          </nav>
        </div>
        <div className="container my-3">
            {/* <h1 className="videostitele"> </h1> */}
            <div className="inner-video ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="video-txt text-left">
                    <h3  className="dark-heading mt-30 mb-20">Introducing Qualis DMS Product Demonstration</h3> 	
                    <p>Qualis DMS Software is a time-tested Data Management System (DMS) application designed for test and research environments, to transform laboratories to perform their tasks in a digital and paperless manner. </p>
                    <div className="hero-button mt-30">
                        <Link href="https://www.agaramtech.com/product/qualis-dms" className="ht-btn ht-btn-md">Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className=" video-popup wow move-up animated">
                    <a href="https://youtu.be/6NoKGf3ebSQ" target="_blank" className="video-link ">
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
          <div className="inner-video">
          <h1 className="text-center mb-4 ">Qualis DMS Tutorial Videos</h1>
          <div className="row mt-5">
                
          <div className="col-6  mb-3">
                    <h2 className="text-left">Getting Started</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/joPJhqmsacw" target="_blank" >Getting Started</a></li>
                    </ul>
                </div>

                <div className="col-6  mb-3">
                    <h2 className="text-left">Overview</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/6NoKGf3ebSQ" target="_blank" >Overview</a></li>
                        <li><a href="https://youtu.be/wzqzLicrhz4" target="_blank" >Product Demo</a></li>
                    </ul>
                </div>
                <div className="col-6  mb-3">
                    <h2 className="text-left">Masters</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/DnolMwk2t7g" target="_blank" >Masters Contacts</a></li>
                        <li><a href="https://youtu.be/D2KG2va1Ums" target="_blank" >Masters Configuration</a></li>
                        <li><a href="https://youtu.be/uheCKzzn5ow" target="_blank" >Masters User Management</a></li>
                        <li><a href="https://youtu.be/a4wJJDHNT1A" target="_blank" >Masters Mail</a></li>
                    </ul>
                </div>
                <div className="col-6 mb-3">
                    <h2 className="text-left">Document Management</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/WU449cwasOc" target="_blank" >Document Management</a></li>
                    </ul>
                </div>
                <div className="col-6 mb-3">
                    <h2 className="text-left">Transactions</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/WU449cwasOc" target="_blank" >Transaction-Document Initiation</a></li>
                        <li><a href="https://youtu.be/4enMyr_TY4U" target="_blank" >Transaction-Document Review</a></li>
                        <li><a href="https://youtu.be/HH_cM5KqEZk" target="_blank" >Transaction-Document Approval</a></li>
                    </ul>
                </div>
                <div className="col-6 mb-3">
                    <h2 className="text-left">Document Request, Response and Print</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/UQ26vsXaVVc" target="_blank" >Document Request, Response and Print</a></li>
                    </ul>
                </div>
                <div className="col-6 mb-3">
                    <h2 className="text-left">Document Repository View</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/WuKCnt-FFxc" target="_blank" >Document Repository View</a></li>
                    </ul>
                </div>
                <div className="col-6 mb-3">
                    <h2 className="text-left">Document Search</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/-rJ2Rq9l_zg" target="_blank" >Document Search</a></li>
                    </ul>
                </div>
                <div className="col-6 mb-3">
                    <h2 className="text-left">Dashboard</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/0CbRttRuY8o" target="_blank" >Dashboard</a></li>
                    </ul>
                </div>
          </div>
          </div>
          {/* <Link className="btn btn-primary btn-more" href="#">More videos</Link> */}
        </div>
        <Help/>
    </div>      
    </div>);
}