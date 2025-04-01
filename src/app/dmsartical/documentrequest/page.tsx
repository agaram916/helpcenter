'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const DocumentRequest = () => {
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
                  <h1>Qualis DMS–Document Request and Response</h1>
                  <div className='articel-content'>
                        <h3 className='pb-3 mt-3'>1.Document Request and Response</h3>
                        <p className='text-left'>
                            Once document is released, user with document request rights can request a document for print. To request a document, follow these steps </p>

                        <p className='text-left'>1.On the Explorer, click <b>DMS, Request/Response</b> and then click <b>Document Request.</b> The Document Request screen appears as shown in the figure::</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture93.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Request Screen</p>

                        <p className='text-left'>2.Select <b>Date, Section, Document Category</b> and <b>Status Filter.</b> </p>

                        <p className='text-left'> 3.Select the document you want to request for print.</p>
                        <p className='text-left'>4.In the Request Transaction tab, click action menu and then click Request as shown in the above figure. The <b>Request Transaction</b> dialog appears as shown in the figure::</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture94.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Request Transaction Dialog</p>
                        <p className='text-left'>5.In the <b>Type</b> field, select the request type: <b>Print Right.</b> </p>
                        <p className='text-left'>6.In the <b>Comments</b> field, type your comments. </p>
                        <p className='text-left'>7.Click <b>SUBMIT</b>. The request appears in the grid as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture95.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Request Screen – Request Added</p>

                        <h3 className='text-left'>2.Document Response</h3>

                        <p className='text-left'> User with document response rights can respond document request for print. To respond to a document request, follow these steps: </p>

                        <p className='text-left'>1.On the Explorer, click <b>DMS, Request/Response and then click Document Response. </b> The Document Response screen appears as shown in the figure: </p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture96.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Response Screen</p>
                        <p className='text-left'> 2.Select <b>Date, Section, Document Category</b> and Status Filter..</p>
                        <p className='text-left'>3.Select the document you want to respond.</p>   
                        <p className='text-left'>4.Click action menu and then click <b>Tag Values.</b> In the Tag Values dialog, type value for the tags as shown in the figure:</p> 
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture97.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Tag Values Dialog</p>
                        <p className='text-left'> <b>Note:</b> Tags of Tag Type <b>“NA”</b> set in Tag Master would appear here for value entry.  </p>
                        <p className='text-left'>5.In the <b>Request Transactions</b> tab, select the request click action menu and then click Response as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture98.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Response</p> 
                        
                        <p className='text-left'> 6.The <b>Request Transaction</b> dialog appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture99.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>7.In the <b>Comments</b> field, type your comments. </p>
                        <p className='text-left'>8.In the No of Copies field, type number of copies for print.</p>
                        <p className='text-left'>9.Click <b>SUBMIT</b></p>
                        <p>Users who made document requests can view the document responses</p>
                    </div> 
                        <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../repositoryview'>Document Repository View & Search</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../documentapproval'>Transaction Document Approval</Link>
                        </div>
                    </div>
                    </div>                  
            </div>
        
             </div>
         <Help/>
        </div>
    );
}

export default DocumentRequest; 