"use client"
import Footertop from '@/components/footertop';
import Link from 'next/link';
import Image from 'next/image';
import LIMSlogo from 'public/image/LIMS-logo.png';
import ELNlogo from 'public/image/ELN-logo.png';
import SDMSlogo from 'public/image/SDMS-logo.png';
import DMSlogo from 'public/image/DMS-logo.png';
import CFR from 'public/image/CFR.jpg'; 
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function Product() { 
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

    return (<div className='product App'> 
        <div className="inner-page">
            <nav className="navbar">
                <ul className="list-unstyled row">
                    <li><Link href="./../">Home</Link></li>
                </ul>
            </nav>
        </div>
        <div className='product-list'>
            <div className='container'>
                <h1 className='text-center'>Products</h1>
                <ul>
                    <li>
                        <div className='pro-img'><Link href="../limslayout"><Image alt='logo' src={LIMSlogo} className='img-fluid'/></Link></div>
                        <div className='prot-dis'>
                            {/* <h1><a href='#'>Qualis LIMS</a></h1> */}
                            <p>This guide provides instructions about configuring and using Logilab LIMS. Qualis LIMS Web user manual is intended for administrators or anyone using Qualis LIMS
                                Web application.</p>
                            <ul className='moduleCount'>
                                <li>1 Document </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='pro-img'><Link href='../elnlayout'><Image alt='logo' src={ELNlogo} className='img-fluid'/></Link></div>
                        <div className='prot-dis'>
                            {/* <span><img src='image/ELN.jpg' /></span>
                                <h1><a href='#'>LogiLab ELN</a></h1> */}
                            <p>This guide provides instructions about configuring and using Logilab ELN. Logilab ELN Web user manual is intended for administrators or anyone using Logilab ELN
                                Web application.</p>
                            <ul className='moduleCount'>
                                <li>4 Document</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='pro-img'><Link href='../sdmslayout'><Image alt='logo' src={SDMSlogo} className='img-fluid'/></Link></div>
                        <div className='prot-dis'>
                            {/* <span><img src='image/SDMS.jpg' /></span>
                                <h1><a href='#'>LogiLab SDMS</a></h1> */}
                            <p>This guide provides instructions about configuring and using Logilab SDMS. Logilab SDMS Web user manual is intended for administrators or anyone using Logilab SDMS
                                Web application.</p>
                            <ul className='moduleCount'>
                                <li>4 Document</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='pro-img'><Link href='../dmslayout'><Image alt='logo' src={DMSlogo} className='img-fluid'/></Link></div>
                        <div className='prot-dis'>
                            <p>This guide provides instructions about configuring and using Logilab DMS.Qualis DMS Web user manual is intended for administrators or anyone using Qualis DMS
                                Web application.</p>
                            <ul className='moduleCount'>
                                <li>2 Document</li>
                            </ul>
                        </div>

                    </li>
                    <li>
                        <div className='pro-img'><Link href='../cfrlayout'><Image alt='logo' src={CFR} className='img-fluid'/></Link></div>
                        <div className='prot-dis'>
                            <p>This guide provides instructions about configuring and using CFR Gateway.CFR Gateway Web user manual is intended for administrators or anyone using CFR GATEWAY
                                Web application.</p>
                            <ul className='moduleCount'>
                                <li>1 Document</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Footertop/>
    </div>);
}