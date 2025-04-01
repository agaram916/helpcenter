"use client"
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function elnvideo() {
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
              <li><Link href="#" >Logilab ELN saas subscription guide </Link></li>
            </ul>
          </nav>
        </div>
        <div className="container my-3">
            {/* <h1 className="videostitele">Logilab ELN videos </h1> */}
            <div className="inner-video "> 
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-6  col-xl-6">
                <div className="video-txt text-left">
                    <h3  className="dark-heading mt-4" style={{fontSize:'37px'}}>Logilab ELN -Cloud-based Electronic Lab Notebook Quick Tour</h3> 	
                    <p>Logilab ELN Software is a time-tested Electronic Lab Notebook (ELN) application designed for test and research environments, to transform laboratories to perform their tasks in a digital and paperless manner. </p>
                    <div className="hero-button">
                        <Link href="https://logilabeln.com/" className="ht-btn ht-btn-md">Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="col-6 col-12 col-md-6 col-lg-6 col-xl-6">
                <div className=" video-popup wow move-up animated">
                    {/* <Link href="videos/ELN/LogilabELN-QuickTour.mp4" target="_blank" className="video-link "> */}
                    <Link href="https://www.youtube.com/watch?v=kRnDkU3sZ_M" target="_blank" className="video-link ">
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
          <h1 className="text-center mb-4">Logilab ELN Tutorial videos</h1> 
          <div className="row mt-5">
          <div className="col-6  mb-3">
                    <h2 className="text-left">SetUp</h2>
                    <ul className="artile-list text-left">
                        <li><Link href="https://youtu.be/4bjqsttkF6c" target="_blank" >Getting Started</Link></li>
                        <li><Link href="https://youtu.be/IYQJ1_zz-aw" target="_blank" >Folder and File Management</Link></li>
                        <li><Link href="https://youtu.be/lrrQSBpem-s" target="_blank" >Workflow Management</Link></li>
                        <li><Link href="https://youtu.be/MGW74qcdleM" target="_blank" >User Management</Link></li>
                    </ul>
                </div>


                <div className="col-6  mb-3">
                    <h2 className="text-left">Orders & Templates</h2>
                    <ul className="artile-list text-left">
                        <li><Link href="https://www.youtube.com/watch?v=oAb0bzkUHdI" target="_blank" >Sheet Templates</Link></li>
                        <li><Link href="https://youtu.be/DGyy9v4hcPA" target="_blank" >Register Sheet Orders with Templates</Link></li>
                        <li><Link href="https://youtu.be/-jeSgJRTPqs" target="_blank" >Template Validation</Link></li>
                        <li><Link href="https://youtu.be/JJ5jzjyCYnc" target="_blank" >Template Mapping</Link></li>
                        <li><Link href="https://youtu.be/ez-Dqa06ORc" target="_blank" >Process Sheet Orders with Templates</Link></li>
                        <li><Link href="https://youtu.be/-uriTQgdzPI" target="_blank" >Protocol Management</Link></li>
                    </ul>
                </div>
          
                <div className="col-6  mb-3">
                    <h2 className="text-left">Masters</h2>
                    <ul className="artile-list text-left">
                        <li><Link href="https://youtu.be/YgKbhs8B2M8" target="_blank" >Task Management</Link></li>
                        <li><Link href="https://youtu.be/1aY9Go_m8H0" target="_blank" >Sample Management</Link></li>
                        <li><Link href="https://youtu.be/r1NYPeLJpwk" target="_blank" > Projects and Project Team</Link></li>
                    </ul>
                </div>
                <div className="col-6  mb-3">
                    <h2 className="text-left">Inventory</h2>
                    <ul className="artile-list text-left">
                        <li><Link href="https://youtu.be/k78n-PuR2v0" target="_blank" >Inventory Management - Transactions</Link></li>
                        <li><Link href="../videos/ELN/LogilabELN-InventoryManagement-Masters.mp4" target="_blank" >Inventory Management - Masters</Link></li>
                      
                    </ul>
                </div>
                <div className="col-6  mb-3">
                    <h2 className="text-left">Audit Trail</h2>
                    <ul className="artile-list text-left">
                        <li><Link href="https://youtu.be/ax_Lqw8Dixg" target="_blank" >Audit Trail</Link></li>
                    </ul>
                </div>
                
                <div className="col-6  mb-3">
                    <h2 className="text-left">LogBook</h2>
                    <ul className="artile-list text-left">
                        <li><Link href="https://youtu.be/R9NdmppnPlo" target="_blank" >Logbook</Link></li>     
                    </ul>
                </div>
          </div>
          </div>
          {/* <Link className="btn btn-primary btn-more" href="./modules-video">More videos</Link> */}
        </div>
        <Help/>
    </div>
    </div>);
}