'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const LockInstruments = () => {
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
                        <li><Link href="../sdmstroublearticle">SDMS Articles</Link></li>
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
                    <h1>How to lock instruments </h1>
                    <section className='articel-content'>
                        <p className='text-left'>Instrument Lock helps in linking metadata from the template tags. Before capturing data from an instrument, user can lock the instrument with   specific combination of tags. These tags are automatically linked to the next data capture from instrument. The Template Data tab helps in viewing the server data based on the templates. This gives a more meaningful view for the data captured from instruments. </p>
                        <p className='text-left'>For example: A quality control analyst will be interested in viewing data based on product test batch#.</p>
                        <p className='text-left'>Once you create a template, you need to lock the instrument to receive files in the specified combination of tags in the template. To do so, follow these steps:</p>
                        <p>1. 1.On the main menu click,<img  src='../../image/articel/SDMS/lock.png'  className='mx-2 w-auto'/>  <b>Lock Settings</b> and then click <b>Instrument Lock Settings.</b> The screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                           <img  src='../../image/articel/SDMS/Picture12.png' className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Instrument Lock Settings Screen</p>
                        <p><span>2.</span>In the <b>Instrument Name </b>field, select the instrument.</p>
                        <p><span>3.</span>In the <b>LIMS Order</b> field, select the LIMS order task.</p>
                        <p>4.In the <b>Template</b> field select the template for the instrument.</p>
                        <p><span>5.</span>You can see list of tags for the selected template. Set parameters for the tags. You can also set parameters for fields that are not included in the template.</p>
                        <p><span>6.</span>Click <b>Lock/Update.</b> You can see a success message as shown in the figure:</p>
                        <h4 className='inner-image'>
                           <img  src='../../image/articel/SDMS/Picture13.png' className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Instrument Lock Settings Screen</p>
                        <p><span>7.</span>Click Lock/Update. You can see a success message as shown in the figure:</p>
                        <p className='text-left'>At any point you can also update template parameters. You need to unlock a template before you update template parameters in the Instrument Lock screen. Select the instrument and template and then click <b>Unlock</b> to unlock. </p>
                        
                        <p className='text-left'><b>Merge File Count:</b> Applicable for interfacer instruments and RS-232 and TCP/IP.  Multiple results will be captured in single file, until the instrument is unlocked. For eg: if the merge count is 3, after capturing 3 files from the instrument it will put all 3 files in single file and the merge count will be reset to 1.</p>
                        <p className='text-left'> <b>Current Upload File Count:</b> Current number of captures that are merged appears here.</p>
                        <p className='text-left'> <b>Unlock After Capture:</b> when checked, will release the instrument for other users as soon as a file/data is captured. You can uncheck this option to keep the instrument locked for capturing more files.</p>                        
                        <p className='text-left'> <b>Note:</b> When a file is received from an instrument, the file is filtered and captured based on the template parameters set in the Instrument lock screen. And the files are listed with the tag values in the Template Data tab. <a href='' className='text-decoration-underline'>View Template Data tab.</a></p>
                    </section>
                    <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../passwordpolicy'>setup password policy</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../schedule'>create a schedule for file upload</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Help/>        
        </div>
    );
}

export default LockInstruments; 