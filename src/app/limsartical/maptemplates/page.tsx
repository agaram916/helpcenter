'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const MapTemplates = () => {
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
                    <h1>How to Map Template to Registration Sub Type </h1>
                    <section className='articel-content'>
                        <p>Template Mapping screen is used to map templates to the selected Registration Sub Type. You must map a template to the selected Registration Sub Type and approve it to use the template for the sub type. You can edit the details until the template mapping is in the Draft state. Once approved you cannot edit the details.</p>
                        <p>The previous one will expire once you approve an new template mapping.</p>
                        <h3>1.1Mapping Template  </h3>
                        <p>To map a template, follow these steps</p>
                    <h3>1.2Adding a New User Role Template</h3>
                    <p>To create a user role template, follow these steps:</p>
                    <p>1.On the main menu, click <img  src='../../image/articel/LIMS/configuration.png' className='mx-2 w-auto'/> <b>Configuration</b> and then click <b>Template Mapping</b>. The <b>Template Mapping</b> master screen appears as shown in the figure:	</p>
                        <h4 className='inner-image'>
                            <img className=' my-3 p-0 w-100' src='../../image/articel/LIMS/templetemap.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Mapping Master Screen</p>
                        <p>In the <b>Template Mapping</b> master screen, if there are templates already mapped, the list of  mapping appears. The approved template mapping will be in use..</p>
                        <p>Options to edit and delete templates mapping in DRAFT state appear in each record.</p>
                        <p>2.Click <img  src='../../image/articel/LIMS/filter.png' className='mx-2 w-auto'/> The filter dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/templetemap1.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Selecting Registration Type, and Sub Type  to add Template Design</p>
                        <p>3.Select the <b>Sample Type</b>, <b>Registration Type</b> and <b>Registration Sub</b> Type and then click <b>SUBMIT.</b> The screen appears as shown in the figure:</p>
                       <h4 className='inner-image'>
                            <img className=' my-3 p-0' src='../../image/articel/LIMS/Picture35.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template mapping for  the selected Registration Sub Type</p>
                        <p>If there are templates already mapped, the list of  mapping appears. The approved template mapping will be in use.</p>
                        <p>4.Click <img  src='../../image/articel/LIMS/plus.png' className='mx-2 w-auto'/> The <b>Add Template Mapping</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture36.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Mapping Dialog</p>

                        <p>5.In the <b>Template</b> field, select a template to map to the selected registration sub type. Templates that are created for the selected Sample Type in Template Design screen will appear here.</p>
                        <p>6.Click <b>Save.</b> The template is mapped and the record appears in DRAFT state as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 w-100' src='../../image/articel/LIMS/Picture37.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Mapped</p>                    
                        <p>You can delete the mapping in the DRAFT state. Once approved, the previous mapping will retire.</p>
                        <p>Select a template mapping  record and  then click <img  src='../../image/articel/LIMS/like.png' className='mx-2 w-auto'/>  to approve the mapping.</p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../roletemplate"> How to Create and Manage User Role Template</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4 >Next article</h4>
                           <Link href="../configureapproval">How to configure approval hierarchy for approval flow</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
                <Help/>
        </div>
    );
}

export default MapTemplates; 