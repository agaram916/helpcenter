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
const ReleaseProduct = () => {
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
    return (
        <div className='product App'>

            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row">
                        <li><Link href="./../">Home</Link></li>
                        <li><Link href="../release-product"> Product Release Notes</Link></li>

                    </ul>
                </nav>
            </div>
            <div className='faq-list product-list'>
                <div className='container'>
                    <h1 className='text-center'>Product Release Notes</h1>
                    <ul>
                        <li>
                            <div className='pro-img'><Link href="../limsreleasedetails"><Image alt='logo' src={LIMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using Qualis LIMS. Qalis LIMS Web user manual is intended for administrators or anyone using  Qualis LIMS Web application.</p>
                                <ul className='moduleCount'>
                                    <li> 16 Version Release Notes</li>
                                    {/* <li className='mx-1'> Release Notes</li> */}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href="../elnreleasedetails"><Image alt='logo' src={ELNlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using Logilab ELN. Logilab ELN Web user manual is intended for administrators or anyone using Logilab ELN Web application.</p>
                                <ul className='moduleCount'>
                                    <li> 18 Version Release Notes</li>
                                    {/* <li className='mx-1'> 3 Release Notes</li> */}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href="../sdmsreleasedetails"><Image alt='logo' src={SDMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                {/* <span><img src='image/SDMS.jpg' /></span>
                                <h1><a href='#'>LogiLab SDMS</a></h1> */}
                                <p>This guide provides instructions about configuring and using Logilab SDMS. Logilab SDMS Web user manual is intended for administrators or anyone using Logilab SDMS Web application.</p>
                                <ul className='moduleCount'>
                                    <li> 14 Version Release Notes</li>
                                    <li className='mx-1'> 4 Release Notes</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href="../dmsreleasedetails"><Image alt='logo' src={DMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using Qualis DMS Qualis DMS Web user manual is intended for administrators or anyone using  Qualis SDMS Web application.</p>
                                <ul className='moduleCount'>
                                    <li> 6 Version Release Notes</li>
                                    <li className='mx-1'> 3 Release Notes</li>
                                </ul>
                            </div>

                        </li>
                        {/* <li>
                            <div className='pro-img'><Link href="../comingsoon"><img src='../image/CFR.jpg' /></Link></div>
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using CFR Gateway.CFR Gateway Web user manual is intended for administrators or anyone using Logilab SDMS
                                    Web application.</p>
                                <ul className='moduleCount'>
                                    <li> Version Release Notes</li>
                                    <li className='mx-1'> Release Notes</li>
                                </ul>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
            <Footertop/>
        </div>
    );
}

export default ReleaseProduct;  