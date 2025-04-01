'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const TestResults = () => {
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
                    <h1>How to Review Test Results</h1>
                    <section className='articel-content'>
                        <p>To review the result entry, follow these steps:</p>
                        <p>1.On the main menu click <img  src='../../image/articel/LIMS/arrow.png' className='mx-2 w-auto'/> Test approval and then click <b>Test Approval</b>. The <b>Test Approval</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='w-auto my-3 p-0 ' src='../../image/articel/LIMS/Picture62.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Test Approval Screen</p>
                        <p>Click, <img  src='../../image/articel/LIMS/filter.png' className='mx-2 w-auto'/> in the Filter dialog, select <b>From </b>and <b>To</b> date, <b>Sample Type</b>: Product, <b>Registration Type:</b> </p>
                        <p>Batch / Non Batch / Plasma Pool, Registration Sub Type and Test Status.  Click <img  src='../../image/articel/LIMS/Rightarrow.png' className='mx-2 w-auto'/> the  to view more fields in the filter. In the Config Version field select the latest template. Select <b>Lab</b> and <b>Test.</b> Select <b>All</b> to select all the test in the sample/component. And then click <b>SUBMIT </b>as shown in the figure:</p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../resultentry">Understanding Result Entry Flow</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4 >Next article</h4>
                           <Link href="../registeringsample">Registering a Sample</Link>
                        </div>
                    </div>
                    </div>          
                </div>
                </div>
                <Help/>
        </div>
    );
}

export default TestResults; 