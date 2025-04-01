'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const DocumentInitiation = () => {
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
                  <h1>Qualis DMS – Transaction: Document Initiation</h1>
                  <div className='articel-content'>
                        <h3 className='pb-3 mt-3'>1.1Document Initiation</h3>
                        <p className='text-left'>
                        The initiator initiates the document and the document initiation process consists of the following steps:</p>
                        <ul>
                            <li className='circle mx-3'>Add document</li>
                            <li className='circle mx-3'>Add version</li>
                            <li className='circle mx-3'>Attach document</li>
                            <li className='circle mx-3'>Set tags</li>
                        </ul>

                        <p className='text-left'>
                        To initiate a document, follow these steps:</p> 

                        <p className='text-left'>
                        1.On the Explorer, click <b>DMS</b> click <b>Transaction,</b> and then click Document Initiation. The <b>Document Initiation</b> screen appears as shown in the figure:</p> 
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture110.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Initiation Screen</p>
                        <h3 className='pb-3 mt-3'>1.Add Document</h3>
                        <p className='text-left'>
                        To add a document, follow these steps:</p> 
                        <p className='text-left'>2.In the <b>Document Initiation</b> screen, In the <b>Document Section</b> click action menu and then click <b>Add.</b> The <b>Add</b> Document screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture111.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add Document Screen</p>

                        <p className='text-left'>3.In the <b>Document Category</b> field, select document category to add the document.</p>

                        <p className='text-left'>4.In the <b>Document Name</b> field, type the name of the document you add.</p>
                        <p className='text-left'>5. In the  <b>Document Reference</b> No field, type the reference number for the document.</p>
                        <p className='text-left'>6.In the  <b>Description</b> field, type description if an</p>
                        <p className='text-left'>7.Click <b>SUBMIT.</b> You can see the document you added in the document section listed as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture112.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Added</p>
                        <h3 className='pb-3'>2.Add Version</h3>
                        <p className='text-left'>Once you add a document, you must add document version. By default the document version will be in the “draft” status until it is changed manually.   </p>
                        <p className='text-left'>To add a version for the document, follow these steps:.</p>

                        <p className='text-left'>8.In the <b>Document Initiation</b> screen, In the <b>Document Section</b> select the document to add a version.:</p>
                        <p className='text-left'>9.In the <b>Document Version Section,</b> click action menu and then click <b>Add</b> as shown in the figure:</p>


                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture113.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Adding a Document Version</p>

                        <p className='text-left'> 10.In the confirmation dialog click <b>OK.</b> A version of the document is added and appears in the ‘Draft’ status as shown in the figure: </p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture114.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Version Added</p>
                        <h3 className='pb-3'>3.Add or Remove Users to the Review Workflow</h3>
                        <p className='text-left'>You can add or remove users to the review workflow until the document is initiated. Once the document is initiated, you cannot modify the list of users in the workflow.</p>

                        <p className='text-left'> To add/remove users to the review workflow, follow these steps: </p>

                        <p className='text-left'> In the <b>Document Initiation </b>screen, In the <b>Review workflow</b> tab, click   <img  src='../../image/articel/dms/Plusminus.png'  className='m-0 p-0'/></p>
                        <p className='text-left'> 2.For  more details on adding and removing roles/users to  review workflow <a href='#'>click </a>here.</p>
                            <h3 className='pb-3 mt-3'>4.Add Attachments</h3>

                            <p className='text-left'> You must add the document as attachment in the Document Initiation screen. Documents with Docx and PDF extension can be added. </p>

                            <p className='text-left'>To add attachment, follow these steps:</p>

                            <p className='text-left'>3.In the <b>Document Initiation</b> screen, In the <b>Document Version Section,</b> select the document version to add attachment.</p>

                            <p className='text-left'>4.In the <b>Attachments</b> tab, click action menu and then click Upload as shown in the figure</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture115.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Adding Attachments</p>


                        <p className='text-left'> The Attachment dialog appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture116.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - File Attachment Dialog</p>
                        <p className='text-left'> 5.In the <b>File</b> field, click.  <img  src='../../image/articel/dms/Pin.png' className='mx-2 w-auto'/>  In the file Open dialog, locate the file and then click Open.   </p>
                        
                        <p className='text-left'> 6.In the <b>Description</b> field, type description about the file. </p>

                        <p className='text-left'>7.Click <b>SUBMIT.</b> The attached file is listed as shown in the figure</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture117.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - File Attached</p> 
                        <p className='text-left'>8.Click action menu and then click <b>File Editor.</b> </p>

                        <p className='text-left'> <b>Note:</b> If some other user is using i.e. opened / viewing the same file, then you will receive an alert saying the file is opened/being used by some other user.  </p>
                        <p className='text-left'> The attached file opens in ONLY OFFICE editor as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture119.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - File Editor</p> 
                        <p className='text-left'>9.Do required edits and save.</p>

                        <p className='text-left'>You can add attachments in the <b>Training Attachments</b> tab as shown in the figure:</p>
                    
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture120.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Uploading Training Attachment</p> 

                        <p className='text-left'>Click <b>View/Download</b> to download the attached document to t he local storage as shown in the figure: </p>                   
                       
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture121.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'> FIGURE: - Downloading Training Attachment</p> 
                    </div>
                        <h3 className='pb-3'>5.Add Comments</h3>
                        <p className='text-left'>1.In the <b>Attachment</b> tab, select the file you want to add comments. </p>   
                        <p className='text-left'>2.In the <b>Comments </b>tab, click action menu and then click <b>Add.</b> The <b>Add</b> dialog appears as shown in the figure: </p>

                 <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture122.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'> FIGURE: - Add Comments Dialog</p>
                        <p className='text-left'>3.In the <b>Comments</b> field, type your comments and then click <b>SUBMIT.</b> </p>
                        <p className='text-left'>4.Now you can see comments you just added appears in the grid. </p>

                        <h3 className='pb-3'>6.Tag Setting</h3>
                 <p className='text-left'> <b>Note:</b> Before adding tags here in the Tag Setting tab, go to the Tag Master and add all tags relevant to the current document. </p>   
                 <p className='text-left'>To set tags to the document, follow these steps; </p>
                 <p className='text-left'> 5.In the <b>Document Initiation</b> screen, In the <b>Attachment</b> tab select the attached file to add tags. And then go to the <b>Tag Setting</b> tab. </p> 
                 <p className='text-left'> 6.In the <b>Tag Setting</b> tab, click.   <img  src='../../image/articel/dms/Plusminus.png'  className='mx-2 w-auto'/> The Add / Remove Tag dialog as shown in the figure: </p>   

                 <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture123.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'> FIGURE: - Add / Remove Tags Dialog</p>
                        <p className='text-left'>7.You can see the list of available tags in the left side. Select a tag and click   <img  src='../../image/articel/dms/arrowright.png'  className='mx-2 w-auto'/> to add them to the document. You can add multiple or all tags to the document as required. </p>
                        <p className='text-left'>8.Click <b>SUBMIT</b> </p>
                        <p className='text-left'>The added tags appear in the grid as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture124.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'> FIGURE: - Tag Setting Tab Showing Tags Added</p>
                    <h3 className='pb-3'>7.Initiate Document</h3>
                    <p className='text-left'>The document has to be initiated by the initiator to make the document available for review for the reviewer. To initiate the document follow these steps: </p>
                    <p className='text-left'>In the <b>Document Initiation</b> screen, after you add document, add version, add attachment and set tags, follow these steps to initiate the docume</p>
                    <p className='text-left'>9.Select the document, select the version you want to <b>initiate</b> click action menu and then click Initiate as shown in the figure:</p>
                    <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture125.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'> FIGURE: - Initiate Document</p>
                        <p className='text-left'>10.The document is initiated and the status appears as <b>Initiated</b> as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture126.png'  className='my-2 p-0 w-75'/>   
                        </h4>

                        <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../documentapproval'>Qualis DMS Transaction Document Approval</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../documentreview'>Qualis DMS Transaction Document Review</Link>
                        </div>
                    </div>
                    </div>
                        </div>

             </div>
         <Help/>
        </div>
    );
}

export default DocumentInitiation; 