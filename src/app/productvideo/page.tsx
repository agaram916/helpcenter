"use client"
import Footertop from '@/components/footertop';
import Link from 'next/link';
import Image from 'next/image';
import LIMSlogo from 'public/image/LIMS-logo.png';
import ELNlogo from 'public/image/ELN-logo.png';
import SDMSlogo from 'public/image/SDMS-logo.png';
import DMSlogo from 'public/image/DMS-logo.png';
import CFR from 'public/image/CFR.jpg'; 
import Elnlite from 'public/image/eln_lite_logo.svg'; 
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function productvideo() {
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
                  <div className='product App'>
            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row">
                        <li><Link href="./../">Home</Link></li>

                    </ul>
                </nav>
             </div>
             <div className='product-list'>
                <div className='container'>
                    <h1 className='text-center'>Videos</h1>
                    <ul>
                        <li>
                            <div className='pro-img'><Link href="../limsvideo"><Image alt='logo' src={LIMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using Qualis LIMS. Qualis LIMS Web user manual is intended for administrahrefrs or anyone using Qualis LIMS
                                    Web application.</p>
                                    <ul className='moduleCount'>
                                        <li>9 Videos</li>
                                        <li className='mx-1'> 2 Sections</li>
                                    </ul>
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href='../elnvideo'><Image alt='logo' src={ELNlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                {/* <span><img src='image/ELN.jpg' /></span>
                                <h1><a href='#'>LogiLab ELN</a></h1> */}
                                <p>This guide provides instructions about configuring and using Logilab ELN. Logilab ELN Web user manual is intended for administrahrefrs or anyone using Logilab ELN
                                    Web application.</p>
                                    <ul className='moduleCount'>
                                        <li>16 Videos</li>
                                        <li className='mx-1'> 6 Sections </li>
                                    </ul>
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href='../sdmsvideo'><Image alt='logo' src={SDMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                {/* <span><img src='image/SDMS.jpg' /></span>
                                <h1><a href='#'>LogiLab SDMS</a></h1> */}
                                <p>This guide provides instructions about configuring and using Logilab SDMS. Logilab SDMS Web user manual is intended for administrahrefrs or anyone using Logilab SDMS
                                    Web application.</p>
                                    <ul className='moduleCount'>
                                        <li>14 Videos</li>
                                        <li className='mx-1'>7 Sections</li>
                                    </ul>
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href='../dmsvideos'><Image alt='logo' src={DMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using Qualis DMS Qualis DMS Web user manual is intended for administrahrefrs or anyone using DMS Qualis
                                    Web application.</p>
                                    <ul className='moduleCount'>
                                        <li>2 Videos</li>
                                        <li className='mx-1'>1 Sections</li>
                                    </ul>
                            </div>
                            
                        </li>
                        <li>
                            <div className='pro-img'><Link href='../cfrvideos'><Image alt='logo' src={CFR} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using CFR Gateway.CFR Gateway Web user manual is intended for administrahrefrs or anyone using CFR Gateway
                                    Web application.</p>
                                    <ul className='moduleCount'>
                                        <li>3 Videos</li>
                                        <li className='mx-1'>1 Sections</li>
                                    </ul>
                            </div>
                            
                        </li>
                        <li>
                            <div className='pro-img'><Link href='../eln-lite-videos'><Image alt='logo' src={Elnlite} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using Logilab ELN Lite.Logilab ELN Lite Web user manual is intended for administrators or anyone using Logilab ELN Lite Web application.</p>
                                    <ul className='moduleCount'>
                                        <li>5 Videos</li>
                                        <li className='mx-1'>4 Sections</li>
                                    </ul>
                            </div>                           
                        </li>
                    </ul>
                </div>
             </div>
            <Footertop/>
        </div>
        
    </div>);
}