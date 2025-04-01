'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const ClientServicMonitor = () => {
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
                <h1>Logilab SDMS – Client Service Monitor</h1>
                    <section className='articel-content'>
                    <h3><strong>1.1&nbsp;</strong><strong><strong>Client Service Monitor</strong></strong></h3>
                    <p>The <strong><strong>Client Service Monitor</strong></strong>&nbsp;screen helps you to monitor services running on the client machines. You can monitor status of the following services in the client machines:</p>
                    <ul>
                    <li className='circle mx-3'>RoboticsServiceManager</li>
                    <li className='circle mx-3'>RoboticsDriveWatcher</li>
                    <li className='circle mx-3'>RoboticsFileDownload</li>
                    <li className='circle mx-3'>RoboticsFileMonitor</li>
                    <li className='circle mx-3'>RoboticsPatchService</li>
                    <li className='circle mx-3'>RoboticsFileUpload</li>
                    <li className='circle mx-3'>Agaram InterFACER</li>
                    <li className='circle mx-3'>Agaram InterFACER-ServiceManager</li>
                    <li className='circle mx-3'>RoboticsLDAPSync</li>
                    <li className='circle mx-3'>RoboticsEmailNotification</li>
                    </ul>
                    <ol>
                    <li>On the main menu, click, <img  src='../../image/articel/SDMS/calender.png' className='mx-2 w-auto'/> and then click <strong><strong>Client Service Monitor</strong></strong>. The <strong><strong>Client Service Monitor</strong></strong>screen appears as shown in the figure:</li>
                    </ol>
                 <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture122.png'  className='p-0 my-2 w-100'/> 
                       </h4>
                        <p className='figure mt-1 p-0'>FIGURE: 79 - Client Service Monitor Screen</p>

                    <ol>
                    <li>From the <strong><strong> Module Name </strong></strong> box, select the service you want to monitor. You can see the list of clients running the selected service and status as shown in the above figure.</li>
                    </ol>
                    <p>&nbsp;</p>
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../additionalfeatures'>Logilab SDMS Additional Features</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../filedeletescheduler'>Logilab SDMS File Delete Scheduler</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default ClientServicMonitor; 