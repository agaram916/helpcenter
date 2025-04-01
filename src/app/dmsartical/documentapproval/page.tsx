'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const DocumentApproval = () => {
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
                  <h1>Qualis DMS – Transaction - Document Approval</h1>
                  <div className='articel-content'>
                        <h3 className='pb-3 mt-3'>1.1Document Approval</h3>
                        <p className='text-left'>
                        To approve documents, follow these steps:</p>

                        <p className='text-left'>1.On the Explorer, click <b>DMS,</b> click <b>Transaction,</b> and then click Document Approval. The <b>Document Approval</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture100.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Approval Screen</p>

                        <p className='text-left'>2.Select the date range and <b>Document Category.</b> Documents completed review would appear as shown in the above figure. </p>

                        <p className='text-left'> 3.Click to select the document to approve.</p>

                        <p className='text-left'>4.In the <b>Attachments</b> tab, click action menu and then click <b>View/Download</b> to download the document for review and approve.</p>
                        <p className='text-left'>5.You can open the attached document in File Editor to review. Click action menu and then click <b>File Editor.</b>The attached file opens in ONLY OFFICE editor as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture101.png'  className='my-2  p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - File Editor</p>
                        <p className='text-left'><b>Note:</b> If some other user is using i.e. opened / viewing the same file, then you will receive an alert saying the file is opened/being used by some other user.   </p>
                        <p className='text-left'>6.Review the document.</p>
                        <p className='text-left'>7.In the Document section click action menu and then click <b>Approve</b> to approve the document. The document status is changed to <b>“Approved”</b> as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture102.png'  className='my-2  p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Approval Screen Showing Approved Status</p>
                        <p className='text-left'> <b>Note:</b> The approver can reject the document if required. To reject a document, in the action menu select Reject. </p>

                        <p className='text-left'>The approved or rejected document goes to the initiator’s queue. </p>
                        <p className='text-left'> <b>Note:</b> All the approvers in the workflow should approve the document based on the step provided in the document workflow. </p>
                            <h3 className='pb-3 mt-3'> 1.1.1Effective Date</h3>

                            <p className='text-left'> Now the approved document appears in the initiator’s queue. The initiator can set effective date for the approved document. To do so, follow these steps: </p>
                            <p className='text-left'>1.In the <b>Document Initiation</b> screen, select the approved document, click action menu and then click <b>Effective Date</b> as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture96.png'  className='my-2  p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Response Screen</p>
                        <p className='text-left'> 2.Select <b>Date, Section, Document Category</b> and Status Filter..</p>
                        <p className='text-left'>3.Select the document you want to respond.</p>   
                        <p className='text-left'>4.Click action menu and then click <b>Tag Values.</b> In the Tag Values dialog, type value for the tags as shown in the figure:</p> 
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture103.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Setting Effective Date</p>
                        <p className='text-left'> 2. The  <b>Choose Effective Date</b> dialog appears as shown in the figure  </p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture104.png'  className='my-2  p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Choose Effective Date Dialog</p> 
                        
                        <p className='text-left'> 3.In the <b>Effective Date</b> field, select effective date for the document. </p>

                        <p className='text-left'>4.In the <b>Description </b>field, type description if any.</p>
                        <p className='text-left'>5.In the <b>Validity Date</b> field, select the date until the document is valid.</p>
                        <p>6.Click <b>SUBMIT.</b> The document will be available for document request for the users from the effective date. The effective date appears with the description as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture105.png'  className='my-2  p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Initiation Screen Showing Effective Date</p> 
                        <h3 className='pb-3'>2.Releasing the Document</h3>
                        <p className='text-left'>After setting the effective date the document can be released. To release the document, follow these steps:</p>

                        <p className='text-left'>1.In the <b>Document Initiation</b>screen, select the document click action menu and then click Release as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture106.png'  className='my-2  p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Releasing the Document</p> 
                        <p className='text-left'>2.The status is changed to <b>“Released” </b>as shown in the figure:</p>
                    
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture107.png'  className='my-2  p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Released Document</p> 

                        <h3 className='pb-3 mt-3'>3.Viewing Initiation History</h3>
                        <p className='text-left'>User can view the complete document initiation history in the Initiation History tab as shown in the figure</p>                   
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture108.png'  className='m-0 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Initiation History Tab</p> 
                        <h3 className='pb-3 mt-3'>4.Viewing Transaction History</h3>                        
                        <p className='text-left'>User can view the complete document transaction history in the <b>Transaction History</b> tab as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture109.png'  className='my-2  p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Transaction History Tab</p> 
                    </div>
                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../documentrequest'>Document Request and Response</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../documentinitiation'>Transaction Document Initiation</Link>
                        </div>
                    </div>
                    </div>
            </div>
             </div>
         <Help/>
        </div>
    );
}

export default DocumentApproval; 