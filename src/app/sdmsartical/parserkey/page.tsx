'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const ParserKey = () => {
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
                        <li><Link href="../sdmstroublearticle">SDMS Article</Link></li>
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
                    <h1>How to set parser key to methods</h1>
                    <p className='text-left'>Parser Key master enables you to set parser keys to methods loaded from Method Setup in SDMS. Parser key is a unique key word created for each method. While parsing, the file that matches with the parser key is assigned to the method.</p>
                    <section className='articel-content'>
                        <p className='text-left'>1.On the main menu, click, <img  src='../../image/articel/SDMS/share.png'  className='mx-2 w-auto'/>  and then click <b>Parent Parser Key</b>. The <b>Parser Key</b> master screen appears as shown in the figure:.</p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture22.png'  className='p-0 my-3 '/> 
                        </h4>
                        <p className='figure mt-1 p-0'>FIGURE: Parser Key Master Tab</p>
                        <p>List of methods loaded from Method setup appears. You can set parser key for methods here.To set parser key for a method, follow these steps:</p>
                        <p>2.Select a method from the list and then click.<img  src='../../image/articel/SDMS/edit.png' className='mx-2 w-auto'/> The Edit dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture23.png' className='p-0 my-3 ' /> 
                        </h4>
                        <p className='figure mt-1 p-0'>FIGURE: Parser Key Master - Edit Dialog</p>

                        <p>3. In the <b>Parser Key </b>field, type the parser key/keyword .</p>
                        <p>4.Click to enable <b>Use PDF </b>to <b>CSV </b>option. When this option is enabled, the PDF files  are converted to CSV and then parsed. To use this option, you must install the PDF to CSV converter.</p>
                        <p>5.Click <b>Submit..</b></p>
                        <h2 className='text-left'>Connecting Method Setup</h2>
                         <p>You must connect Web Method Setup to SDMS to load methods to the Parser Key master.To connect Web Method Setup to SDMS, follow these steps: </p>
                         <p>1.In the SDMS installation folder, go to the <b>InterFACER </b>folder as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture25.png' className='p-0 my-3 '/> 
                        </h4>
                        <p className='figure mt-1 p-0'>FIGURE: Connecting Web Method Setup</p>
                        <p>2.Double click the <b>AIIFacerSettings</b> file as shown in the above figure. The <b>InterFACER -Configuration and Settings</b> screen appe</p>
                        <p>3.Go to the <b>Settings</b> tab and then click <b>Preference.</b> The <b>Preference</b> dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture26.png' className='p-0 my-3 '/> 
                        </h4>
                        <p className='figure mt-1 p-0'>FIGURE: Preference Dialog</p>
                        <p>In the <b>WebMethodSetup_BaseURL </b>field, type the Web Method Setup link and save.</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../addinstrument'>How to add an instrument</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../setuptemplates'>How to setup templates</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default ParserKey; 