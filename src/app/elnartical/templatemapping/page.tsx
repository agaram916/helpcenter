'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";


 const Templatemapping = () => {
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
                    <h1><strong>Logilab ELN - Template Mapping</strong></h1>                    
                    <section className='articel-content'>                                      
                        <p>Template mapping screen helps you to map sheet templates and protocol templates to test(s). Here you specify the test for the selected sheet. Tests from Logilab ELN are listed. You can select the appropriate test for the sheet.</p>
                        <p>In the <strong><strong>Sheet Orders </strong></strong>screen, when you select a test to register an order, the sheet mapped to the test appears. Sheets that are completely processed based on sheet workflow will appear here.</p>
                        <ol>
                        <li>On the main menu, click <img src='../../image/articel/eln/Templates.png' className='m-0 p-0 w-auto'/>and then click <strong><strong>Template Mapping.
                            </strong></strong>The screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture278.png' className='my-3 w-100'/>  
                            </div>
                        <p className='figure mt-1'>FIGURE: Template Mapping Screen</p> sheet
                        <p>Template mapping is done for both sheet templates and protocol templates.</p>
                        <p>All approved templates in Logilab ELN appear in the left panel. You can select a sheet from the list and then add the same to the test in ELN. To do so, follow these steps:</p>
                        <ol>
                        <li>Click to select   <img  src='../../image/articel/eln/sheet.png' className='m-0 p-0 w-auto'/>  option to map templates.</li>
                        <li>Select a template from the left panel. The template is selected, and the name of the template appears on the right panel.</li>
                        <li>In the Select ELN Task field, select the task/test to map to the template.</li>
                        <li>Click <strong><strong>Save</strong></strong>. The template is mapped to the task selected and the same will be available to register an order in the Orders screen.</li>
                        </ol>
                    <p>&nbsp;</p>   
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../protocoltemplates">Protocol Templates</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                           <Link href="../audit-trail-history">Audit trail history</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default Templatemapping; 