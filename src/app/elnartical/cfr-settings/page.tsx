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
                    <h1><strong>Logilab ELN - CFR Settings</strong></h1>
                    <section className='articel-content'>
                    <h2>1.2&nbsp;CFR Settings</h2>
                    <p>CFR Settings menu helps you to add or delete reasons that are used in the audit trail reason box.</p>
                    <p>To set up audit trail reasons, follow these steps:</p>
                    <ol>
                    <li>On the main menu, click <img  src='../../image/articel/eln/Audit Trail.png' className='mx-2 w-auto'/>and then click <strong><strong> CFR Settings</strong></strong>. The <strong><strong>CFR Settings</strong></strong>&nbsp;tab appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture103.png' className='my-3 w-100'/>  
                     </div>
                    <p className='figure mt-1 '>FIGURE: CFR Settings Screen</p>
                    <ol start={4}>
                    <li><strong><strong>Add:</strong></strong>In the <strong><strong>Create New CFR Reason</strong></strong>&nbsp; box, type the reason/comment you want to add to the list. These reasons/comments appear in the Audit Trail dialogs. Click <strong><strong>Save</strong></strong>.</li>
                    <li><strong><strong>Delete:</strong></strong>To delete a reason from the list, select the reason and then click <strong><strong>Delete</strong></strong>. In the confirmation dialog, click</li>
                    </ol>
                    <p>Click <strong><strong>Reset</strong></strong>&nbsp;to clear selection.</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../audit-trail-history">Audit trail history</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../audit-trail-configuration">Audit trail configuration
                            </Link>                           
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