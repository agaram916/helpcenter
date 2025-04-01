'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const SheetTemplate = () => {
    const [showButton, setShowButton] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    });

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        const protocolmenu = document.querySelector('.protocolmenu');
        if (protocolmenu) {
            const offset = protocolmenu.getBoundingClientRect().top;
            const top = window.scrollY;

            if (top >= offset) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
    }
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
    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                    <h1>Logilab ELN – How to create sheet Template</h1>
                    <section className='articel-content'>
                        <p>After logging into Logilab ELN as administrator user, navigate to 'Sheet Templates' page by clicking on Templates Menu and then by clicking on 'Sheet Templates'. On this page, the list of sheet templates already created will be listed out. In order to create a new one, click on 'New' button.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture63.png' />
                        </h4>
                        <p>By default, an MS excel-like interface with 'Sheet1' as default will be displayed.</p>
                        <h4 className='inner-image'>
                            <img className='w-100'  src='../../image/articel/Picture64.png' />
                        </h4>
                        <p>Let us now see how to import a sheet template from an already-created excel file.</p>
                        <p>Click on 'Import' icon.</p>
                        <p>It will navigate to folder in the local system.</p>
                        <p>Locate the excel file, select it and click on 'Open' button.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture65.png' />
                        </h4>
                        <p>It will open the excel file in the Sheet Template.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture66.png' />
                        </h4>
                        <p>When you click on the arrow, it will expand the field list on the left hand side panel.</p>
                        <p>You can further expand the general fields to view the list of all available field types.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture67.png' />
                        </h4>
                        <p>Select the field, drag and drop onto the specific cell.</p>
                        <p>For example, the field 'Sample Name' is selected for the template field 'Product Name'.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture68.png' />
                        </h4>
                        <p>Select the fields one-after-the-another and complete the mapping of all the corresponding ones in the sample template.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture69.png' />
                        </h4>
                        <p>Inserting comments for any field is also possible as shown.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture70.png' />
                        </h4>
                        <p>In case of inserting an image, please click on Image icon, navigate the system folder and select the picture file.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture71.png' />
                        </h4>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture72.png' />
                        </h4>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture73.png' />
                        </h4>
                        <p>On the sheet, in addition to import, there are various options such as export, export as JSON, text formatting fields such as bold, italics, underscore, etc. link sheets,</p>
                        <p>add charts,</p>
                        <p>hyperlink, insert comment and insert images, etc. have been provided.</p>
                        <p>Other cell formatting options such as alignment, wrap text, etc. are also available.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture74.png' />
                        </h4>
                        <p>Once the sheet is fully configured, click on 'Save' button.</p>
                        <p>It will open up a dialog box named 'Save Sheet'.</p>
                        <p>Enter the Sheet name as the name in which the sheet will be saved.</p>
                        <p>After entering or selecting the other fields as required, click on 'SAVE' button.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture75.png' />
                        </h4>
                        <p>The message 'SHEET SAVED SUCCESSFULLY' is displayed.</p>
                        <p>Also there are other options available in this page such as Compare Versions (that is: to compare different versions of same template), template history, Full screen, etc.</p>
                        <p>The created sheet is in the created status which needs to be transmitted to the next level of approver as setup in workflow.</p>
                        <p>Select the required option such as 'Approve' to transmit to the next level or 'Reject' if the sheet is not ok to be approved.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture76.png' />
                        </h4>
                        <p>Once the 'SUBMIT' button is clicked, a new dialog box 'E-Signature' will be opened, in which the user has to enter the password.</p>
                        <p>Enter password first and then comment to authorise this entire process of template creation and approval at the user level.</p>
                        <p>Select the check-box "Yes, I agree" to complete the electronic signature process and click on 'SUBMIT' button.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture77.png' />
                        </h4>
                        <p>The message 'STATUS UPDATED SUCCESSFULLY' is displayed and status field has been updated to 'In Progress' which means further review or approval is required depending upon the workflow setup.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture78.png' />
                        </h4>
                        <p>Click on 'Close' icon to navigate to the previous page in which newly created sheet gets listed.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture79.png' />
                        </h4>
                        <p>In order to view the further workflow stages for this template, click on 'Setup' and 'Template workflow' menu items.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture80.png' />
                        </h4>
                        <p>The workflow details will be displayed with the details of further steps required to be completed. In this case, it is 'Review &amp; Approve'.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture81.png' />
                        </h4>
                        <p>Logout of the current user by clicking on the 'Logout' button followed by clicking on 'Yes' button in 'Confirm' dialog window.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture82.png' />
                        </h4>
                        <p>'USER LOGGED OUT SUCCESSFULLY' message gets displayed.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/Picture83.png' />
                        </h4>
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../processsheetorder">Process sheet order</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../articeldetailsthree">How to approve and map sheet template</Link>                           
                        </div>
                    </div>
                    </div>    
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default SheetTemplate; 