'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const DocumentReview = () => {
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
                        <li><Link href="../dmstroublearticle">DMS Articles</Link></li>
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
                  <h1>Qualis DMS Transaction Document Review</h1>
                  <div className='articel-content'>
                  <p className='text-left'>
                  Masters in Qualis DMS are used to store and maintain data outside a process and refer it in process using "Master" field type in the form. For example, when you store a sample, you may want to look up the storage data such as organisation, department, lab, site, section etc. In this example storage location data can be created and managed as a master. Also, user data can be created and managed as a master. </p>
                  <p className='text-left'>In Qualis DMS you can add/create masters, edit master details and delete existing masters</p>
                  <p className='text-left'>Qualis DMS allows you to create and manage mail configuration.</p>        
                        <h3 className='pb-3 mt-3'>1.Document Review</h3>
                        <p className='text-left'>
                        Document Review screen enables the reviewer to review the initiated document.:</p>
                        <p className='text-left'>
                        On the Explorer, click <b>DMS,</b> click <b>Transaction,</b> and then click <b>Document Review.</b> The Document Review screen appears as shown in the figure</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture127.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Review Screen</p>
                        <p className='text-left'>
                        In the Document Review screen the reviewer can do the following:</p>
                        <ul>
                            <li className='circle mx-3'>Download attachments for review</li>
                            <li className='circle mx-3'>Add review comments</li>
                            <li className='circle mx-3'>View complete review transactions</li>
                        </ul>
                        <h3 className='pb-3 mt-3'>Review Attached Document</h3>
                        <p className='text-left'>
                        To review the attached document, follow these steps::</p> 

                        <p className='text-left'>
                        1.In the <b>Document Review</b> screen, select the date range and <b>Document Category.</b> Documents initiated for review appears.</p> 
                        <p className='text-left'>
                        2.Click to select the document to review.</p> 
                        <p className='text-left'>
                        3.In the <b>Attachments</b> tab, click action menu and then click <b>View/Download</b> to download the document for review..</p> 

                        <p className='text-left'>
                        4.Review the downloaded document. Refer the above figure.</p> 
                        <p className='text-left'>
                        5.You can open the attached document in File Editor to review. Click action menu and then click <b>File Editor</b> The attached file opens in ONLY OFFICE editor as shown in the figure:.</p> 
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture128.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - File Editor</p>
                        <p className='text-left'>
                        <b>Note:</b> If some other user is using i.e. opened / viewing the same file, then you will receive an alert saying the file is opened/being used by some other user. </p> 
                        <p className='text-left'>6.Review the document. Do required changes and save.</p>

                        <h3 className='pb-3 mt-3'>2.Add Review Comments</h3>
                        <p className='text-left'>
                        1.In the <b>Comments</b> tab, click <b>Add</b> as shown in the figure:</p> 

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture129.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Adding Review Comments</p>

                        <p className='text-left'>2.The <b>Comments</b> dialog appears as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture130.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Comments Dialog</p>
                        <p className='text-left'>3.In the <b>File Name</b> field, the attached file name appears.</p>
                        <p className='text-left'>In the <b>Comments</b> field, type your review comments and then click SUBMIT.</p>

                        <h3 className='pb-3 mt-3'>3.Complete Review</h3>
                        <p className='text-left'>
                        1.Click   <img  src='../../image/articel/dms/Page.png' className='mx-2 w-auto'/> once you reviewed the document to complete the review as shown in the figure:</p> 

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture131.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Complete Reviewing the Document</p>

                        <p className='text-left'>The status of the document would appear as <b>Reviewed</b> as shown in the figure:</p>


                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture132.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Reviewed Document</p>

                        <p className='text-left'>Now the document goes to the initiator’s queue to complete the review process. The initiator shall address the comments for the review points given in the comments tab and then complete. The initiator can also attach document in the Attachment tab for approval.</p>

                        <p className='text-left'>To do so, follow these steps:</p>

                        <p className='text-left'>2.In the <b>Document Initiation</b> screen, after addressing the review comments, click action menu and then click <b>Complete</b> as shown in the figure::</p>


                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture133.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Address Review Comments and Complete</p>

                        <p className='text-left'> The status of the document changes to “Completed” as shown in the figure: </p>


                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture134.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Completed Status after Review</p>
                       
                        <p className='text-left'>Once completed, the document goes to the Approver’s queue for approval.</p>          

                    </div>
                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../documentinitiation'> Transaction Document Initiation</Link>
                        </div>
                        <div className='col-6 text-right'>
                            {/* <h4>Next article</h4>
                            <Link href='../dashboard'>Dashboard and Alerts</Link> */}
                        </div>
                    </div>
                    </div>
            </div>
             </div>
         <Help/>
        </div>
    );
}

export default DocumentReview; 