'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const ResultEntry = () => {
    const { showButton, backToTop, isFixed } = useScrollButton();
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
         <div className='product'>
            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row mb-0">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="../../product-document">Article Products</Link></li>
                        <li><Link href="../limstroublearticle">LIMS Article</Link></li>
                    </ul>
                </nav>
             </div>
             <div className='troble-article-list'>
                {showButton && (
                    <button id="btn-back-to-top" onClick={backToTop} style={{ display: 'block' }}>
                        <i className="fas fa-arrow-up"></i>
                    </button>
                )}
               <div className='inner-details'>
                    <h1>Understanding Result Entry Flow</h1>
                    <section className='articel-content'>
                        <p>The result entry flow will be available for the users enabled in the User Role Configuration screen as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture60.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Role Configuration Screen Showing Result Entry Flow </p>
                        <p>Also ensure that the user is mapped to the lab the test is mapped to as shown in the Organization screen::</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture61.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Organisation Screen Showing User  Mapped to the Test Lab</p>
                        <p>For registered samples, you can enter results. To do so, follow these steps:</p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../storegoods"> How to Split and Store Goods</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4 >Next article</h4>
                           <Link href="../testresults"> How to Review Test Results</Link>
                        </div>
                    </div>
                    </div>                    
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default ResultEntry; 