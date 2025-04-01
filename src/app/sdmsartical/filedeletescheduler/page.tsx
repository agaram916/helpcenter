'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const FileDeleteScheduler = () => {
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
                        <li><Link href="../sdmstroublearticle">ELN Article</Link></li>
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
                <h1><strong>Logilab SDMS &ndash; File Delete Scheduler</strong></h1>
                    <section className='articel-content'>                    
                        <h2><strong>1.1&nbsp;</strong><strong><strong>Local File Delete Scheduler</strong></strong></h2>
                        <p>The data files that are expired in the local machine based on the expiry policy are scheduled in the Local File Delete Scheduler.</p>
                        <ol>
                        <li>On the main menu, click,  <img  src='../../image/articel/SDMS/calender.png' className='mx-2 w-auto'/> and then click <strong><strong>Local File Delete Scheduler</strong></strong>. The <strong><strong>Local File Delete Scheduler</strong></strong>screen appears as shown in the figure:</li>                       
                        </ol>

                      <h4 className='inner-image'>
                            <img src='../../image/articel/SDMS/Picture123.png'  className='p-0 my-2 w-100'/> 
                        </h4>
  <p className='figure mt-1 p-0'>FIGURE: 74 - Local File Delete Scheduler Screen</p>
                        <p>Here you see the list of files to be deleted. The files can be filtered using the date filter.</p>
                        <ol>
                        <li>Click <strong><strong> Select All </strong></strong> to select all files or choose the required files need to be removed from the local machine.</li>
                        <li>Click on <strong><strong>Authorize</strong></strong> button to authorize these files for deletion. The selected files are deleted from the local machine.</li>
                        <li>Click <strong><strong>Export </strong></strong> to export the file delete scheduler data to Excel.</li>
                        <li>Click <strong> <strong>Print </strong></strong> to print file delete scheduler data.</li>
                        </ol>
                        <h2><strong>1.2&nbsp;</strong><strong><strong> Server File Delete Scheduler </strong></strong></h2>
                        <p>The data files that are expired in the server machine based on the expiry policy are scheduled in the Server File Delete Scheduler.</p>
                        <ol>
                        <li>On the main menu, click <strong><strong> Scheduler</strong></strong> and then click <strong><strong>Server File Delete Scheduler</strong></strong>. The <strong><strong> Server File Delete Scheduler</strong></strong>&nbsp;screen appears as shown in the figure:</li>
                        </ol>
                        <h4 className='inner-image'>
                           <img  src='../../image/articel/SDMS/Picture124.png'  className='p-0 my-2 w-100'/> 
                       </h4>
               <p className='figure mt-1 p-0'>FIGURE: 74 - Local File Delete Scheduler Screen</p>
                        <p>Here you see the list of files to be deleted. The files can be filtered using the date filter.</p>
                        <ol start={5}>
                        <li>Select all or choose the required files need to be removed from the server machine.</li>
                        <li>Click on<strong><strong>Authorize</strong></strong> button to authorize these files for deletion. The selected files are deleted from the server.</li>
                        <li>Click <strong><strong> Export</strong></strong> to export the server file delete scheduler data to Excel.</li>
                        <li>Click <strong><strong>Print</strong></strong> to print server file delete scheduler data.</li>
                        </ol>
                       
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../clientservicmonitor'> Client Service Monitor</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../instrumentlock'>Logilab SDMS - Instrument Lock and Tags</Link>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default FileDeleteScheduler; 