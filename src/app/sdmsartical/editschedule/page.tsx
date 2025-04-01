'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const EditSchedule = () => {
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
                    <h1>How to Edit Schedules</h1>
                    <p className='text-left'>To edit a schedule, follow these steps:   </p>                    
                    <section className='articel-content'>
                    <p className='text-left'>1.On the main menu, click, and then click <img  src='../../image/articel/SDMS/calender.png'  className='mx-2 w-auto'/> <b>1. View Edit Scheduler.</b>.  The  <b>View Scheduler</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture46.png'  className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: View Edit Scheduler Screen – Deactivated Task Tab</p>
                        <p> 2.Go to the <b>Activated Task </b>tab to view active tasks as shown in the figure</p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture47.png'  className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: View Edit Scheduler Screen – Activated Task Tab</p>
                        <p>3.You can edit only a deactivated schedule. On the Edit Task tab, select the schedule you want to edit and then click as   <img  src='../../image/articel/SDMS/pen.png'  className='mx-2 w-auto'/>  shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture48.png ' className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:  View Scheduler Screen-showing the Edit Task tab</p>
                        <p> <b>Note:</b> To edit an active schedule, you must deactivate it and then edit. To deactivate a schedule, go to the <b>Activated Task </b>tab, select a schedule, and then click<b>Deactive.</b>  Now the deactivated schedule appears in the <b>Edit Task </b>tab for edit.</p>
                        <p> When you deactivate a schedule, if the schedule path is locked in the Instrument Lock screen, then you will see a warning message saying “This schedule path is already locked,so cannot deactivate this schedule”.</p>
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../schedule'>create a schedule for file upload</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../extractfile'>extract file metadata</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Help/>        
        </div>
    );
}

export default EditSchedule; 