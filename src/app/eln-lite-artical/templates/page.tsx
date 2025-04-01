'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const Templates = () => {
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
                        <li><Link href="../eln-lite-trouble-article">ELN Lite Article</Link></li>
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
                <div className='inner-details'>            
                    <section className='articel-content'>
                    <h1><strong>Logilab ELN Lite - Templates</strong></h1>
                    <p>The Sheet Templates module enables you to create lab sheets in Logilab ELN Lite. You can create, design, capture data, calculate and view results using lab sheets.</p>                   
                    <h2>1. Sheet Templates</h2>
                    <p>On the main menu, click <img src='../../image/articel/eln/Templates.png' className='mx-2 w-auto'/> and then click Sheet Templates.</p>
                    <div className='inner-image'>
                       <img src='../../image/articel/elnlite/elnlite56.png' className='my-3 w-100'/>  
                    </div>
                    <p>The Sheet tab appears as shown in the figure. The list of pre-configured sheet templates will get listed.</p>
                    <div className='inner-image'>
                       <img src='../../image/articel/elnlite/elnlite57.png' className='my-3 w-100'/>  
                    </div>
                    <p>In order to create a new one, click on '<strong>New</strong>' button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite58.png' className='my-3 w-100'/>  
                    </div>
                    <p>By default, an MS excel-like interface with 'Sheet1' as default will be displayed.</p>
                    <p>Let us now see how to import a sheet template from an already-created excel file.</p>
                    <p>Click on 'Import' icon.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite59.png' className='my-3 w-100'/>  
                    </div>
                    <p>It will navigate to folder in the local system.</p>
                    <p>Locate the excel file, select it and click on 'Open' button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite60.png' className='my-3 w-100'/>  
                    </div>
                    <p>It will open the excel file in the Sheet Template.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite61.png' className='my-3 w-100'/>  
                    </div>
                    <p>When you click on the arrow, it will expand the field list on the left-hand side panel.</p>
                    <p>You can further expand the general fields to view the list of all available field types.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite62.png' className='my-3 w-100'/>  
                    </div>
                    <p>Select the field, drag and drop onto the specific cell.</p>
                    <p>For example, the field 'Add Resource' is selected, dragged and dropped on to one of the cells of spreadsheet.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite63.png' className='my-3 w-100'/>  
                    </div>
                    <p>Select the fields one-after-the-another and complete the mapping of all the corresponding ones in the sheet template.</p>
                    <p>Inserting comments for any field is also possible as shown.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite64.png' className='my-3 w-100'/>  
                    </div>
                    <p>In case of inserting an image, please click on Image icon, navigate the system folder and select the picture file.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite65.png' className='my-3 w-100'/>  
                    </div>
                    <p>Click &lsquo;Open&rsquo; button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite66.png' className='my-3 w-100'/>  
                    </div>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite67.png' className='my-3 w-100'/>  
                    </div>
                    <p>On the sheet, in addition to import, there are various options such as export, text formatting fields,&nbsp; hyperlink, insert comment and insert images, etc. have been provided.</p>
                    <p>Other cell formatting options such as alignment, wrap text, etc. are also available.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite68.png' className='my-3 w-100'/>  
                    </div>
                    <p>Once the sheet is fully configured, click on '<strong>Save</strong>' button.</p>
                    <p>It will open up a dialog box named <strong>'Save Sheet</strong>'.</p>
                    <p>Enter the Sheet name as the name in which the sheet will be saved.</p>
                    <p>After entering or selecting the other fields as required, click on '<strong>SAVE</strong>' button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite69.png' className='my-3 w-100'/>  
                    </div>
                    <p>The message <strong>SHEET SAVED SUCCESSFULLY</strong> is displayed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite70.png' className='my-3 w-100'/>  
                    </div>
                    <p>The created sheet is in the created status which needs to be transmitted to the next level of approver as setup in workflow.</p>
                    <p>Select the required option such as 'Approve' to transmit to the next level or 'Reject' if the sheet is not ok to be approved.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite71.png' className='my-3 w-100'/>  
                    </div>
                    <p>Once the '<strong>SUBMIT</strong>' button is clicked, a new dialog box <strong>E-Signature</strong> will be opened, in which the user has to enter the password.</p>
                    <p>Enter password first and then comment to authorise this entire process of template creation and approval at the user level.</p>
                    <p>Select the check-box "Yes, I agree" to complete the electronic signature process and click on '<strong>SUBMIT</strong>' button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite72.png' className='my-3 w-100'/>  
                    </div>
                    <p>The message '<strong>STATUS UPDATED SUCCESSFULLY</strong>' is displayed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite73.png' className='my-3 w-100'/>  
                    </div>
                    <p>Click on 'Close' icon to navigate to the previous page in which newly created sheet gets listed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite74.png' className='my-3 w-100'/>  
                    </div>
                  
                    <h2>2.Protocol Templates</h2>
                  
                    <p>To create a protocol template, follow these steps:</p>
                    <p>On the main menu, click <img src='../../image/articel/eln/Templates.png' className='mx-2  w-auto'/> and then click <strong><em>Protocol Templates</em></strong>. The <strong><em>Protocol Templates</em></strong> screen appears</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite75.png' className='my-3 w-100'/>  
                    </div>
                    <p>The list of pre-configured protocol templates will be displayed.</p>
                    <p>To create a new protocol template, click on <strong>NEW</strong> button.</p>
                    <p>It will open up &lsquo;<strong>Create New Protocol</strong>&rsquo; dialog window.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite76.png' className='my-3 w-100'/>  
                    </div>
                    <p>Enter a valid unique value in Protocol Name field.</p>
                    <p>Click SUBMIT button.</p>
                    <p>The newly-created protocol template will appear on Protocol Templates page.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite77.png' className='my-3 w-100'/>  
                    </div>
                    <p>Complete the configuration of protocol template by adding Steps i.e. Sections followed steps for each section</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite78.png' className='my-3 w-100'/>  
                    </div>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite79.png' className='my-3 w-100'/>  
                    </div>
                    <p>You can optionally import protocol section by clicking on <strong>Import Section</strong></p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite80.png' className='my-3 w-100'/>  
                    </div>
                    <p>Once the protocol template is created, the sections can be exported by choosing Export PDF or Export Section options</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite81.png' className='my-3 w-100'/>  
                    </div>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite82.png' className='my-3 w-100'/>  
                    </div>
                    <p>In <strong>Resources</strong> Tab, resources such as Material can be added by clicking <strong>ADD MATERIAL</strong>.</p>
                 
                    <p>In &lsquo;<strong>Add Material</strong>&rsquo; dialog window, select the Material by clicking in the respective check-boxes, followed by clicking on &lsquo;<strong>ADD MATERIAL</strong>&rsquo; button.</p>
                    <p>In <strong>References</strong> tab, you can add reference text.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite83.png' className='my-3 w-100'/>  
                    </div>
                    <p>In <strong>Result </strong>tab, results of test or experiments or procedures can be added by clicking <strong>ADD</strong> button.</p>
                  
                    <p>On clicking &lsquo;<strong>ADD</strong>&rsquo; button, <strong>Add</strong> dialog window appears in which various types such as Text, Image, Attachment, Labsheet, Resource, Multi-step procedure, Grid, Signature and Checklist can be added.</p>
                    <p>Certain options such as Well-plate and Chemical diagram are not enabled for Logilab ELN lite but are available for full-version. In order to use them, Lite version needs to be upgraded to full version.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite84.png' className='my-3 w-100'/>  
                    </div>
                    <p>In order to click an image, choose Image icon and click <strong>ADD</strong> button.</p>
                    <p>Navigate to the system/local folder, select the file and click on Open button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite85.png' className='my-3 w-100'/>  
                    </div>
                    <p>The selected image will be displayed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite86.png' className='my-3 w-100'/>  
                    </div>
                    <p>Once the image is added, the confirmation message will be displayed.</p>
                    <p>Save the protocol template and submit for approval by selecting &lsquo;Approve&rsquo; option and clicking <strong>SUBMIT</strong> button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite87.png' className='my-3 w-100'/>  
                    </div>
                    <p>Now <strong>E-Signature</strong> dialog window will be displayed in which the user has to enter Password, Comment and select &lsquo;Yes, I agree&rsquo; checkbox, followed by clicking <strong>SUBMIT</strong> button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite88.png' className='my-3 w-100'/>  
                    </div>
                 
                  
                    <p>The status has been changed to &lsquo;In Progress&rsquo; which means it has been transmitted to next level of approval hierarchy.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite89.png' className='my-3 w-100'/>  
                    </div>

                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite90.png' className='my-3 w-100'/>  
                    </div>
                    <p>The next higher level user will have open the protocol and choose to approve the same by choosing &lsquo;Approve&rsquo; option and click on SUBMIT button.</p>
                         <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite91.png' className='my-3 w-100'/>  
                    </div>
                    <p>Now <strong>E-Signature</strong> dialog window will be displayed in which the user has to enter Password, Comment and select &lsquo;Yes, I agree&rsquo; checkbox, followed by clicking <strong>SUBMIT</strong> button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite92.png' className='my-3 w-100'/>  
                    </div>
                    <p>Since it is the highest level of approval, the status has been changed to <br /> &lsquo;Approved&rsquo; from &lsquo;In-Progress&rsquo;.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite93.png' className='my-3 w-100'/>  
                    </div>
                    <p>Now the template is in the status &lsquo;Approved&rsquo; and can be used for creating protocol tasks after template mapping.</p>
                    <ul>
                    <li>Template Mapping</li>
                    </ul>
                    <h2>3.Sheet Template Mapping</h2>
                    <p>Template mapping screen helps you to map sheet templates and protocol templates to tasks. Here you specify the Task for the selected sheet. Tasks from Logilab ELN are listed. You can select the appropriate Tasks for the sheet.</p>
                    <p>In the <strong><em>Sheet tasks </em></strong>or<strong><em> Protocol Tasks </em></strong>page, when you select a Task to register it, the sheet mapped to the Task appears. Sheets or Protocol tasks that are processed based on sheet workflow will appear here.</p>
               
                    <p>On the main menu, click <img  src='../../image/articel/eln/Templates.png' className='mx-2  w-auto'/>and then click <strong><em>Template Mapping. </em></strong>The page displays the pre-configured mapping of templates with tasks.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite94.png' className='my-3 w-100'/>  
                    </div>
                    <p><strong>Sheet Template Mapping</strong></p>
                    <p>Select the <strong>Sheet</strong> radio button on Template Mapping page.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite95.png' className='my-3 w-100'/>  
                    </div>
                    <p>To map an unmapped Sheet, choose the same on the left-hand panel.</p>
                    <p>On the right-hand panel, select the ELN task from the list of values.</p>
                    <p>Choose the appropriate task from the list of values and click on &lsquo;<strong>Save</strong>&rsquo; button</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite96.png' className='my-3 w-100'/>  
                    </div>
                    <p><strong>Protocol Template Mapping</strong></p>
                    <p>Select the <strong>Protocol</strong> radio button on Template Mapping page.</p>
                    <p>To map an unmapped Sheet, choose the same on the left-hand panel.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite97.png' className='my-3 w-100'/>  
                    </div>
                    <p>On the right-hand panel, select the ELN task from the list of values.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite98.png' className='my-3 w-100'/>  
                    </div>
                    <p>Choose the appropriate task from the list of values and click on &lsquo;<strong>Save</strong>&rsquo; button</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite99.png' className='my-3 w-100'/>  
                    </div>
                    </section>                   
                </div>
                    <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../set-up">User Setup</Link>
                        </div>
                        {/* <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../templates'>Templates</Link>
                        </div> */}
                    </div>
                    </div>                    
                </div>
             </div>
            <Help/>
        </div>
    );
}
export default Templates; 