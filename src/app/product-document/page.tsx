"use client"
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import LIMSlogo from 'public/image/LIMS-logo.png';
import ELNlogo from 'public/image/ELN-logo.png';
import SDMSlogo from 'public/image/SDMS-logo.png';
import DMSlogo from 'public/image/DMS-logo.png';
import Footertop from '@/components/footertop';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const ProductDocument = () => {
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

       <>
             <div className='product App'>
            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row">
                        <li><Link href="./../">Home</Link></li>
                        {/* <li><Link href="./Product-document">Article products</Link></li> */}
                    </ul>
                </nav>
            </div>
            <div className='product-list'>
                <div className='container'>
                    <h1 className='text-center'> Product Tutorial Articles </h1>
                    <ul>
                        <li>
                            {/* <div className='pro-img'><Link href="../Limstroublearticle"><img src='../image/LIMS-logo.png' /></Link></div> */}
                            <div className='pro-img'><Link href="/lims-article"><Image alt='logo' src={LIMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                {/* <h1><a href='#'>Qualis LIMS</a></h1> */}
                                <p>This guide provides instructions about configuring and using Qualis LIMS. Qualis LIMS Web user manual is intended for administrators or anyone using Qualis LIMS
                                    Web application.</p>
                                <ul className='moduleCount'>
                                     <li>61 Articles</li>
                                     <li className='mx-1'>10 Sections</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href="/eln-articel"><Image alt='logo' src={ELNlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                {/* <span><img src='image/ELN.jpg' /></span>
                                <h1><a href='#'>LogiLab ELN</a></h1> */}
                                <p>This guide provides instructions about configuring and using Logilab ELN. Logilab ELN Web user manual is intended for administrators or anyone using Logilab 
                                ELN Web application.</p>
                                <ul className='moduleCount'>
                                    <li>51 Articles</li>
                                    <li className='mx-1'>11 Sections</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href='/sdms-article'> <Image alt='logo' src={SDMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                {/* <span><img src='image/SDMS.jpg' /></span>
                                <h1><a href='#'>LogiLab SDMS</a></h1> */}
                                <p>This guide provides instructions about configuring and using Logilab SDMS. Logilab SDMS Web user manual is intended for administrators or anyone using Logilab SDMS
                                    Web application.</p>
                                <ul className='moduleCount'>
                                    <li>56 Articles</li>
                                    <li className='mx-1'>10 Sections</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href='/comingsoon'><Image alt='logo' src={DMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using Qualis DMS.Qualis DMS Web user manual is intended for administrators or anyone using Qualis SDMS
                                    Web application.</p>
                                {/* <ul className='moduleCount'>
                                    <li>14 Articles</li>
                                    <li className='mx-1'>3 Sections</li>
                                </ul> */}
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href='/eln-free-edition'><img src='../image/eln-free.svg' /></Link></div> 
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using Logilab ELN free edition. This Web user manual is intended for administrators or anyone using Logilab ELN free edition Web application.</p>
                                <ul className='moduleCount'>
                                    <li> 23 Articles</li>
                                    <li className='mx-1'>5 Sections</li>
                                </ul>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footertop/>
       </>  
    );
}

export default ProductDocument; 