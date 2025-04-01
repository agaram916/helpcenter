"use client"
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function Elnlitevideos() {
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
              <li> <Link href="#">Logilab ELN Lite Product Demonstration</Link></li>

            </ul>
          </nav>
        </div>
        <div className="container my-3">
            {/* <h1 className="videostitele">Logilab ELN Lite  videos</h1> */}
            <div className="inner-video ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="video-txt text-left">
                    <h3  className="dark-heading mt-30 mb-20">Introducing logilab ELN Lite a saas-based eln software</h3> 	
                    <p>Logilab ELN Lite Software is a time-tested Electronic Lab Notebook (ELN) application designed for test and research environments, to transform laboratories to perform their tasks in a digital and paperless manner. </p>
                    <div className="hero-button mt-30">
                        <a href="https://logilabeln.com/" className="ht-btn ht-btn-md">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className=" video-popup wow move-up animated">
                    <a href="https://www.youtube.com/watch?v=SSSyl2DUpDM" target="_blank" className="video-link ">
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
          <h1 className="text-center mb-4">Logilab ELN Lite  Tutorial videos</h1>
          <div className="row mt-5 ">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h2 className="text-left"> ELN Lite SetUp</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://www.youtube.com/watch?v=SSSyl2DUpDM" target="_blank" >Getting Started</a></li>
                        <li><a href="https://www.youtube.com/watch?v=-E-6giylIi8" target="_blank" >Logilab ELN Lite Setup</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h2 className="text-left">ELN Lite Templates</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/cyjeYPKCeoo" target="_blank" >Templates</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h2 className="text-left">ELN Lite Inventory</h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/9TfP2xzz3g0" target="_blank" >Inventory</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h2 className="text-left">ELN lite Tasks </h2>
                    <ul className="artile-list text-left">
                        <li><a href="https://youtu.be/cmB_U8od7-c" target="_blank" >Tasks</a></li>
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