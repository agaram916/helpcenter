'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const RepositoryView = () => {
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
                  <h1>Qualis DMS–Document Repository View & Search</h1>
                  <div className='articel-content'>
                        <h3 className='pb-3 mt-3'>1.Document Repository View</h3>
                        <p className='text-left'>
                        Document Repository View screen enables the user to view documents in the repository. You can filter documents based on selected date range, section, document category and status  of the document. </p>
                        <p className='text-left'>To view documents in the document repository, follow these steps:</p>
                        <p className='text-left'>1.On the Explorer, click <b>DMS, Document Repository </b> and then click <b>Document Repository View.</b> The Document Repository View screen appears as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture91.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Repository View</p>
                        <p className='text-left'>2.Use the filter: Select  <b>From</b> and To date,  <b>select Section, Document Categor</b>y and Document Status and then click <img  src='../../image/articel/dms/roatate.png'/> </p>

                        <p className='text-left'> 3.You can see the list of documents in the repository for the selected fields in the filter as shown in the above figure.</p>
                        <p className='text-left'>4.You can do the following  in the Document Repository View screen:</p>
                        <ul>
                            <li className='circle mx-3'>Select a document, click action menu and then click <b>View/Download</b> to download the document to local storage.</li>
                            <li className='circle mx-3'>Select a document, click action menu and then click <b>Convert as PDF</b> to convert the document to PDF.</li>
                            <li className='circle mx-3'>Select a document, click action menu and then click view as PDF to view the document in PDF format. The document opens in PDF format.</li>
                            <li className='circle mx-3'>Select a document, click action menu and then click Active  to activate document.</li>
                            <li className='circle mx-3'>Select a document, click action menu and then click Inactive to deactivate the document.</li>
                        </ul>
                        <h3 className='pb-3'>2. Document Search</h3>
                        <p className='text-left'>Document Search screen enables the user search documents in the repository. You can search documents based on selected document category and document name. </p>
                        <p className='text-left'>To search documents in the document repository, follow these steps: </p>
                        <p className='text-left'>On the Explorer, click <b>DMS, Document Repository </b>and then click Document Search. The <b>Document Search </b>screen appears as shown in the figure:</p>



                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture92.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Search</p>
                        <p className='text-left'>2.In the <b>Document Type</b>  field, select type. </p>
                        <p className='text-left'>3.In the <b>Document</b> field, type name of the  document and then click . <img  src='../../image/articel/dms/search.png'/> </p>
                      

                        <p className='text-left'> 4. Document matching the search criteria are fetched and appears  in the left panel.</p>
                        <p className='text-left'>5.select the document. details of the selected document appears in the right panel as shown in the above figure.</p>                        
                    </div>    

                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../dmsdocumentprinting'>Qualis DMS Document Printing</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../documentrequest'>Qualis DMS Document Request and Response</Link>
                        </div>
                    </div>
                    </div>
            </div>
             </div>
         <Help/>
        </div>
    );
}

export default RepositoryView; 