'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const DmsDocumentPrinting = () => {
    const [showButton, setShowButton] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    });

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        const protocolmenu = document.querySelector('.protocolmenu');
        if (protocolmenu) {
            const offset = protocolmenu.getBoundingClientRect().top;
            const top = window.scrollY;

            if (top >= offset) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
    }
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
    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
         <div className='product'>
            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row mb-0">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="../../product-document">Article Products</Link></li>
                        <li><Link href="../dmstroublearticle">DMS Articles</Link></li>
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
                  <h1>Qualis DMS – Document Printing</h1>
                  <div className='articel-content'>
                        <h3 className='pb-3 mt-3'>1.Document Printing</h3>
                        <p className='text-left'>
                        Once the user receives document response, they can print the document. To do so, follow these steps:</p>
                        <p className='text-left'>1.In the <b>Document Request</b> screen, go to the <b>Response Transaction</b> tab as shown in the figure::</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture88.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Printing Document 1</p>
                        <p className='text-left'>2.Select the request, click action menu and then click Print. The Print dialog appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture89.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Printing Document 2</p>
                        <p className='text-left'>3.In the <b>Printer</b> field, select the printer and then click <b>SUBMIT.</b></p>
                        <p className='text-left'>On successful printing, you will see an alert saying "Document printed successfully".</p>
                        <h3 className='pb-3 mt-3'>Test Print</h3>
                        <p className='text-left'>Before you print a document, you can test print the document. </p>
                        <p className='text-left'>1.Select the request, click action menu and then click <b>Test Print</b>. The <b>Alert Dialog</b> appears as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture90.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Alert Dialog</p>
                        <p className='text-left'>You can see a success message saying "Document is printed successfully!".</p>
                    </div> 

                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../dmsdocumentmanagement'>Document Management</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../repositoryview'>Document Repository View & Search</Link>
                        </div>
                    </div>
                    </div>
            </div>
             </div>
         <Help/>
        </div>
    );
}

export default DmsDocumentPrinting; 