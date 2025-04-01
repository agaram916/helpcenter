'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const Audittrail = () => {
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
                        <li><Link href="../elntroublearticle">ELN Article</Link></li>
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
                    <h1><strong>Logilab ELN - Audit Trail Configuration</strong></h1>
                    <section className='articel-content'>
                    <h2>1.3&nbsp;Audit Trail Configuration</h2>
                    <p>Audit Trail Configuration screen helps you to enable audit trail feature for the selected tasks. List of modules, screens in each module and tasks in each screen will appear in the Audit Trail Configuration screen. You can click to check the check box in the Manual Audit column against the task to enable audit.</p>
                    <ol>
                    <li>On the main menu click <img src='../../image/articel/eln/Audit Trail.png' className='mx-2 w-auto'/>and then click <strong><strong>Audit Trail Configuration</strong></strong>. The <strong><strong>Audit Trail Configuration</strong></strong>&nbsp;tab appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                       <img  src='../../image/articel/eln/Picture104.png' className='my-3 w-100'/>  
                     </div>
                    <p className='figure mt-1 '>FIGURE: Audit Trail Configuration Screen</p>
                    <ol start={6}>
                    <li>Click the <strong><strong> Manual Audit </strong></strong> check box against the task name to enable manual audit. If you enable manual audit option, the Audit Trail dialog prompts for valid password, reason and comments to complete that task.</li>
                    <li>Click to uncheck the <strong> <strong>Manual Audit</strong></strong> checkbox to disable manual audit for a particular task.</li>
                    </ol>
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../cfr-settings">CFR settings</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../site-master">Site Master</Link>                           
                        </div>
                    </div>
                    </div>    
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default Audittrail; 