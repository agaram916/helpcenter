'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const Audittrail = () => {
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
                    <h1><strong>Logilab ELN - Audit Trail History</strong></h1>
                    <section className='articel-content'>
                    <h2>1.1&nbsp;Audit Trail History</h2>
                    <p>Audit Trail History menu helps you to view audit trail log. Also enables you to filter records based on specified duration, audit type, username and screen name. You can export records to excel file, create archive and open archive to view.</p>
                    <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>Site</strong></strong>&nbsp;field will appear. Hence, administrators can view site specific audit trail log.</p>
                    <p>&nbsp;To view audit trail log, follow these steps:</p>
                    <ol>
                    <li>On the main menu, click <img src='../../image/articel/eln/Audit Trail.png' className='mx-2 w-auto'/>and then click <strong><strong>Audit Trail History. </strong></strong>The screen appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture98.png' className='my-3 w-100'/>  
                     </div> 
                    <p className='figure mt-1'>FIGURE: Audit Trail History Screen</p>
                    <p>You can filter records based on anyone or all the following options:</p>
                    <ul>
                    <li><strong><strong>Username</strong></strong>: From the Username field, select the user and then click <strong><strong>Filter</strong></strong>to filter records based on the specified user.</li>
                    <li><strong><strong>Screen name</strong></strong>: From the Module Name field, select the module name and then click <strong><strong>Filter</strong></strong>to filter records based on the specified module.</li>
                    <li><strong><strong>Audit type</strong></strong>: In the Audit Type field, select the audit type: User Generated / System Generated and then click <strong><strong>Filter</strong></strong>to filter records based on the specified Audit Type.</li>
                    <li><strong><strong>Records duration</strong></strong>: Select the record duration and then click <strong><strong>Filter</strong></strong>to filter records based on the specified time frame.</li>
                    <li><strong><strong>All</strong></strong>: Includes all the above criteria to filter.</li>
                    </ul>
                    <p><img  src='../../image/articel/eln/pagination.png' className='mx-2 w-auto'/>  Use the arrows to navigate to the next, previous, first and last pages. Click the dropdown arrow and select the number of records to display on the screen.</p>
                    <h3>1.1.1&nbsp;Create Archive</h3>
                    <ol>
                    <li>In the <strong><strong>Audit Trail History</strong></strong>screen, click <strong><strong>Create Archive</strong></strong>. The confirmation dialog saying &ldquo;<strong><strong>Do you want to move all the records to a separate archive</strong></strong>? &ldquo;Appears. Click <strong><strong>Yes</strong></strong>. The audit trail records up to date and time is archived. You will see a success message.</li>
                    </ol>
                    <h3>1.1.2&nbsp;Open Archive</h3>
                    <ol>
                    <li>In the <strong><strong>Audit Trail History</strong></strong>screen, Click <strong><strong>Open Archive</strong></strong>. The <strong><strong>Open Archive</strong></strong>&nbsp;dialog appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture99.png' className='my-3'/>  
                     </div> 
                    <p className='figure mt-1'>FIGURE: Open Archive Dialog</p>
                    <ol start={2}>
                    <li>Click to select the archive from the list and then click <strong><strong>OPEN</strong></strong>to view the details.</li>
                    </ol>
                    <h3>1.1.3&nbsp;Exporting Audit Trail History</h3>
                    <p>You can export selected audit trail history records. You can select required records or select all records to export.</p>
                    <p>To export audit trail history to Excel, follow these steps:</p>
                    <ol>
                    <li>In the <strong><strong>Audit Trail History</strong></strong>screen, select the records to export and then click <strong><strong>Export</strong></strong>&nbsp;as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                       <img  src='../../image/articel/eln/Picture100.png' className='my-3 w-100'/>  
                   </div>
                    <p className='figure mt-1'>FIGURE: Exporting Audit Trail History</p>
                    <ol>
                    <li>The Excel file is downloaded. The audit trail log records are exported to the Excel sheet and the Excel sheet appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                         <img  src='../../image/articel/eln/Picture101.png' className='my-3 w-100'/>  
                     </div>
                    <p className='figure mt-1'>FIGURE: Exported Audit Trail Records in Excel Format</p>
                    <h3>1.1.4&nbsp;Review Audit</h3>
                    <p>You can review an audit on the <strong><strong>Audit Trail History</strong></strong>&nbsp;screen. To do so, follow these steps:</p>
                    <ol>
                    <li>In the <strong><strong>Audit Trail History</strong></strong>screen, click to select the audit trail records and then click <strong><strong> Review </strong></strong>. You will see a success message "AUDIT RECORDS REVIEWED SUCCESSFULLY".</li>
                    </ol>
                    <h3>1.1.5&nbsp;View Audit Review History</h3>
                    <p>You can view review details of the audit records in the <strong><strong>Audit Trail History</strong></strong>&nbsp; screen. To do so, follow these steps:</p>
                    <ol>
                    <li>In the <strong><strong>Audit Trail History</strong></strong>screen, select records or select all record and then click <strong><strong> Review History.</strong></strong>&nbsp;The <strong><strong>Review History</strong></strong>&nbsp;dialog appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture102.png' className='my-3'/>  
                     </div>
                    <p className='figure mt-1'>FIGURE: Review History Dialog</p>
                    <ol start={3}>
                    <li>You can see the list of audit trail records reviewed with details. Click <strong><strong>CLOSE</strong></strong> to close the <strong><strong> Review History</strong></strong></li>
                    </ol>
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../templatemapping">Template Mapping</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../cfr-settings">CFR settings</Link>                           
                        </div>
                    </div>
                    </div>    
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default Audittrail; 