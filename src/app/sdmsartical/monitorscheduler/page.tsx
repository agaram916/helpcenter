'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const MonitorScheduler = () => {
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
                    <h1><strong>1.1&nbsp;</strong><strong><strong>Monitor Scheduler</strong></strong></h1>   
                    <section className='articel-content'>
                    <p>Monitor Scheduler screen enables you to view schedules that are scheduled for upload and schedules that are failed to upload. You can view list of schedules queued, their priority, status etc as shown in the figure:</p>
                    <h3><strong>1.1.1&nbsp;</strong><strong><strong>View upload schedules</strong></strong></h3>
                    <p>To view upload schedules and failed schedules, follow these steps:</p>
                    <ol>
                    <li>On the main menu, click,  <img src='../../image/articel/SDMS/calender.png' className='w-auto mx-2'/> and then click <strong><strong>Monitor Schedule.</strong></strong></li>
                    </ol>
                    <ul>
                    <li>The <strong><strong> Upload Queue </strong></strong> appears as shown in the figure:</li>
                    </ul>
                    <h4 className='inner-image'>
                  <img  src='../../image/articel/SDMS/Picture150.png'  className='p-0 my-3 w-100'/> 
               </h4>
          <p className='figure mt-1 p-0'>FIGURE:- Monitor Schedule - Upload Queue Tab</p>
                    <ul>
                    <li>Click <strong><strong>Failed Queue</strong></strong> Schedules that are failed to upload appears as shown in the figure:</li>
                    </ul>
                    <h4 className='inner-image'>
                  <img  src='../../image/articel/SDMS/Picture151.png'  className='p-0 my-3 w-100'/> 
               </h4>
          <p className='figure m-0 p-0'>FIGURE:- Monitor Schedule - Failed Queue Tab</p>
                    <ul>
                    <li>Click <strong><strong>Upload Monitor</strong></strong> Status of the schedules appears as shown in the figure:</li>
                    </ul>
                    <h4 className='inner-image'>
                      <img  src='../../image/articel/SDMS/Picture152.png'  className='p-0 my-3 w-100'/> 
                  </h4>
          <p className='figure mt-1 p-0'>FIGURE:- Monitor Schedule - Upload Monitor Tab</p>
                    <p>You can see number of files uploaded for each schedules here.</p>
                    <ul>
                    <li>Click <strong><strong>Restore Monitor</strong></strong> Status of the schedules for restore appears as shown in the figure:</li>
                    </ul>
                    <h4 className='inner-image'>
                      <img  src='../../image/articel/SDMS/Picture153.png' className='p-0 my-3 w-100'/> 
                  </h4>
          <p className='figure mt-1 p-0'>FIGURE:- Monitor Schedule - Upload Monitor Tab</p>
                    <p>You can see list of files restored for each schedules here.</p>
                    <ul>
                    <li>Click<strong><strong>Download Monitor</strong></strong> Status of the files downloaded appears as shown in the figure:</li>
                    </ul>
                    <h4 className='inner-image'>
                  <img  src='../../image/articel/SDMS/Picture154.png'  className='p-0 my-3 w-100'/> 
               </h4>
          <p className='figure m-0 p-0'>FIGURE:- Monitor Schedule - Upload Monitor Tab</p>
                    <p>You can see list of files downloaded for each schedules here.</p>
                    <p>&nbsp;</p> 
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../downloadscheduler'>Logilab SDMS Download Scheduler</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../additionalfeatures'>Additional Features</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default MonitorScheduler; 