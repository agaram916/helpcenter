'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const DownloadScheduler = () => {
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
                    <h1><strong>Logilab SDMS &ndash; Download Scheduler</strong></h1>   
                    <section className='articel-content'>
            <h3><strong>1.1&nbsp;</strong><strong><strong>Auto Download Configuration and Download Scheduler</strong></strong></h3>
            <p>Auto Download Configuration screen helps you to schedule download files uploaded based on a selected instrument. You can download files to a selected client. When the file &nbsp;is downloaded, it &nbsp;is downloaded in the original folder structure as uploaded.</p>
            <ol>
            <li>On the main menu, click, and then click  <img  src='../../image/articel/SDMS/calender.png' className='mx-2 w-auto'/> <strong><strong>Download Scheduler </strong></strong>. The <strong><strong>Auto Download Configuration </strong></strong> screen appears as shown in the figure:</li>
            </ol>
            <h4 className='inner-image'>
              <img  src='../../image/articel/SDMS/Picture147.png'  className='my-3 w-100'/> 
         </h4>
         <p className='figure mt-1 p-0'>FIGURE:– Auto Download Configuration Screen</p>
            <ol>
            <li>Under <strong><strong> Source</strong></strong>, select the <strong><strong> Instrument</strong></strong>and <strong><strong> Schedule Path</strong></strong>&nbsp; from where you want to download the files.</li>
            <li>Under <strong><strong>Download </strong></strong>, in the <strong><strong> Client Name</strong></strong> box select the client machine to download.</li>
            <li>Specify <strong><strong>Local Path</strong></strong> / <strong><strong> UNC Path</strong></strong>.</li>
            <li>If you choose <strong><strong>Local Path</strong></strong> then, type the local path where you want to download the files. Click <strong><strong> Check</strong></strong>&nbsp;to check if the mentioned path is valid and available.</li>
            <li>If you choose <strong><strong> UNC Path </strong></strong> then, under <strong> <strong> UNC Credentials</strong></strong>, provide valid user name, password and domain name.</li>
            <li>In the <strong><strong>Filter</strong></strong> box, type the file extension to download specific files. By default it is &ldquo;*.*&rdquo; will download all file types.</li>
            <li>Click <strong> <strong>Save</strong></strong>. The files that are uploaded from the selected instrument in the specified path will be downloaded automatically to the local /UNC path mentioned. You will see a success message as shown in the figure:</li>
            </ol>
            <h4 className='inner-image'>
              <img  src='../../image/articel/SDMS/Picture148.png'  className='p-0 my-3 '/> 
         </h4>
        <p className='figure mt-1 p-0'>FIGURE:– Auto Download Configuration Success Message</p>
            <h3><strong>1.1.1&nbsp;</strong><strong><strong>View Download Scheduler</strong></strong></h3>
            <p>Download Scheduler screen helps you to view downloads scheduled in the Auto Download Configuration screen. The View Download Scheduler screen appears as shown in the figure:</p>
            <h4 className='inner-image'>
              <img  src='../../image/articel/SDMS/Picture149.png'  className='p-0 my-3 w-100'/> 
         </h4>
        <p className='figure mt-1 p-0'>FIGURE:– Auto Download Configuration Success Message</p>
            <ul>
            <li>You can select a schedule and then click <img  src='../../image/articel/SDMS/view.png' className='mx-2 w-auto'/> to view schedule details.</li>
            <li>Select a deactivated schedule and then click <img  src='../../image/articel/SDMS/activeright.png' className='mx-2 w-auto'/> to activate.</li>
            <li>Select an active schedule and then click<img  src='../../image/articel/SDMS/deactive.png' className='mx-2 w-auto'/>  to deactivate the schedule.</li>
            <li>Select a schedule and then click <img  src='../../image/articel/SDMS/retire.png' className='mx-2 w-auto'/>  to retire a schedule. Schedule once retired cannot be activated.</li>
            </ul>
            <p>&nbsp;</p>

                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='.../extractfile'>How to extract file metadata</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../monitorscheduler'>Logilab SDMS  Monitor Scheduler</Link>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default DownloadScheduler; 