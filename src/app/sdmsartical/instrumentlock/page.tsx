'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const InstrumentLock = () => {
    const { showButton, backToTop, isFixed }=useScrollButton();
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
                <h1><strong>Logilab SDMS &ndash; Instrument Lock and Tags</strong></h1>
                    <section className='articel-content'>                                              
                    <h3><strong><strong>Instrument Lock and Tags</strong></strong></h3>                   
                    <p>Instrument Lock helps in linking metadata from the template tags. Before capturing data from an instrument, user can lock the instrument with specific combination of tags. These tags are automatically linked to the next data capture from instrument. The <strong><strong>Template Data</strong></strong>&nbsp;tab helps in viewing the server data based on the templates. This gives a more meaningful view for the data captured from instruments.</p>
                    <p>For example: A quality control analyst will be interested in viewing data based on product&gt;test&gt;batch#. To know more about Template Data view, refer <a href="#_Template_Data_Tab"><u>Template Data Tab</u></a>.</p>
                    <p>Once you create a template, you need to lock the instrument to receive files in the specified combination of tags in the template. To do so, follow these steps:</p>
                    <ol>
                    <li>On the main menu click, <img  src='../../image/articel/SDMS/lock.png' className='mx-2 w-auto'/> <strong><strong>Lock Settings</strong></strong>and then click <strong><strong>Instrument Lock Settings</strong></strong>. The screen appears as shown in the figure:</li>
                    </ol>
                    <h4 className='inner-image'>
                   <img  src='../../image/articel/SDMS/Picture125.png'  className='p-0 my-2 w-100'/> 
                </h4>
              <p className='figure mt-1 p-0'>FIGURE: 80 -Instrument Lock Settings Scre</p>
                    <ol>
                    <li>In the <strong><strong>Instrument Name </strong></strong> box, select the instrument.</li>
                    <li>In the <strong><strong>LIMS Order</strong></strong> field, select the LIMS order task.</li>
                    <li>In the <strong><strong>Template </strong></strong> box select the template for the instrument.</li>
                    <li>You can see list of tags for the selected template. Set parameters for the tags. You can also set parameters for fields that are not included in the template.</li>
                    <li>Click <strong><strong>Lock/Update</strong></strong>. You can see a success message as shown in the figure:</li>
                    </ol>
                    <h4 className='inner-image'>
                   <img  src='../../image/articel/SDMS/Picture126.png'  className='p-0 my-2 '/> 
                </h4>
              <p className='figure mt-1 p-0'>FIGURE: 81 - Instrument Lock - Success Message</p>
                    <ol start={6}>
                    <li>Once the instrument is locked, in the Instrument Lock and Tags screen, the <strong><strong>Unlock</strong></strong>&nbsp;button appears.</li>
                    </ol>
                    <p>At any point you can also update template parameters. You need to unlock a template before you update template parameters in the Instrument Lock screen. Select the instrument and template and then click <strong><strong>Unlock</strong></strong>&nbsp;to unlock.</p>
                    <p><strong><strong>Merge File Count</strong></strong>: Applicable for interfacer instruments and RS-232 and TCP/IP. &nbsp;Multiple results will be captured in single file, until the instrument is unlocked. For eg: if the merge count is 3, after capturing 3 files from the instrument it will put all 3 files in single file and the merge count will be reset to 1.</p>
                    <p><strong><strong>Current Upload File Count</strong></strong>: Current number of captures that are merged appears here.</p>
                    <p><strong><strong>Unlock After Capture</strong></strong>: when checked, will release the instrument for other users as soon as a file/data is captured. You can uncheck this option to keep the instrument locked for capturing more files.</p>
                    <p><strong><strong>Info:</strong></strong>&nbsp;When a file is received from an instrument, the file is filtered and captured based on the template parameters set in the Instrument lock screen. And the files are listed with the tag values in the Template Data tab. <a href="#_Template_Data_Tab"><u>View Template Data tab</u></a>.</p>
                    <h2><strong>1.1&nbsp;</strong><strong><strong> Data tab</strong></strong></h2>
                    <p><strong><strong>Note:</strong></strong> When a file is received from an instrument, the file is filtered and captured based on the template parameters set in the <strong><strong>Instrument Lock</strong></strong>&nbsp;screen. And the files are listed with the tag values in the <strong><strong>Data</strong></strong>&nbsp;tab as shown in the figure:</p>
                    <h4 className='inner-image'>
                   <img  src='../../image/articel/SDMS/Picture127.png'  className='p-0 my-2 w-75'/> 
                </h4>
              <p className='figure mt-1 p-0'>FIGURE:- Data Tab showing locked instrument details with files uploaded and tag details</p>
                    <h2><strong>1.2&nbsp;</strong><strong><strong>My Instruments</strong></strong></h2>
                    <p>The My Instruments tab in the Instrument Lock screen displays list of instruments locked by you (current user) as shown in the figure:</p>
                    <h4 className='inner-image'>
                   <img  src='../../image/articel/SDMS/Picture128.png'  className='p-0 my-2 w-100'/> 
                </h4>
              <p className='figure mt-1 p-0'>FIGURE:- Instruments Locked by the Current User</p>


                    <h2><strong>1.3&nbsp;</strong><strong><strong>Others Instruments</strong></strong></h2>
                    <p>The Others Instruments tab in the Instrument Lock screen displays list of instruments locked by other users as shown in the figure:</p>
                    <h4 className='inner-image'>
                   <img  src='../../image/articel/SDMS/Picture129.png'  className='p-0 my-2 w-100'/> 
                </h4>
              <p className='figure mt-1 p-0'>FIGURE: - Instruments Locked by Other Users</p>

                    <p><strong><strong>Note:</strong></strong>&nbsp;Administrator can unlock instruments locked by other users.</p>
                    <p>&nbsp;</p>
                       
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../filedeletescheduler'>File Delete Scheduler</Link>
                        </div>
                        <div className='col-6 text-right'>
                            {/* <h4>Next article</h4>
                            <Link href="../managenew">How to create and manage new user group</Link> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default InstrumentLock; 