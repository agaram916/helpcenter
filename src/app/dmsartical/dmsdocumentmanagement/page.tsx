'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const DmsDocumentManagement = () => {
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
                  <h1>Qualis DMS – Document Management</h1>
                  <div className='articel-content'>
                        <h3 className='pb-3 mt-3'> 1.Document Management</h3>
                        <h3 className='pb-3 mt-3'> Tag Master</h3>
                        <p className='text-left'>
                        When you initiate a document, you will have to add all tags relevant to the document in the Tag Master. To do so, follow these steps:</p>
                        <p className='text-left'>1.On the Explorer, click <b>DMS,</b> click <b>Document Management</b>, and then click Tag Master. The Tag Master screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture70.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Tag Master Screen</p>
                        <p className='text-left'>In the tag master screen you can see the list of tags added. Also options to add, edit and delete tags appear in the action menu as shown in the above figure.</p>

                        <p className='text-left'> 2.Click action menu and then click Add. The <b>Tag Entry</b> dialog appears as shown in the figure</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture71.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Tag Master Dialog</p>
                        <p className='text-left'>3.n the <b>Tag Type</b> field, select the type you want to add from the following list: </p>
                        <ul>
                            <li className='circle mx-3'>NA</li>
                            <li className='circle mx-3'>E-Sign</li>
                            <li className='circle mx-3'>User</li>
                            <li className='circle mx-3'>DateStamp</li>
                            <li className='circle mx-3'>Role</li>
                            <li className='circle mx-3'>DateTimeStamp</li>
                            <li className='circle mx-3'>DocumentNumber</li>
                            <li className='circle mx-3'>DocumentName</li>
                        </ul>

                        <p className='text-left'> If you select <b>NA</b> then you need to set tag value when you respond to a document request. All other tag type will be captured automatically.</p>
                        <p className='text-left'>4.In the Tag Status field, select the status.</p>
                        <p className='text-left'>5.In the <b>User Role</b> field, select the roles.</p>
                        <p className='text-left'>6.In the <b>Tag Name</b> field, type the tag name.</p>

                        <p className='text-left'><b>Note:</b> Type the tag name without space. The Tag Name field does not accept space.</p>
                        <p className='text-left'>7.In the Tag Description field, type description for the tag.</p>
                        <p className='text-left'> 8.Check the <b>Unique Tag Value</b> check field to make the tag unique. If this option is checked, then you cannot create another tag with the same tag name.</p>
                        <p className='text-left'> 9.Click <b>SUBMIT</b>.</p>
                        <p className='text-left'>You can see the tag you just created listed in the tag master.  </p>

                        <h3 className='pb-3'>1.Editing/Deleting Tags</h3>
                       
                        <p className='text-left'>10.To edit a tag, in the tag master screen, select the tag, click action menu and then click Edit. In the <b>Edit</b> Tag dialog, do required changes and then click <b>SUBMIT.</b></p>  
                        <p className='text-left'>11.To delete a tag, in the tag master screen, select the tag, click action menu and then click Delete. </p>

                        <h3 className='pb-3'>2.Document Workflow</h3>
                       
                       <p className='text-left'>Workflow guides you through the steps and organizes the information required to complete the document management process. This may include selecting the reviewers and approvers to manage document in each stage of the document lifecycle.</p> 
                       <p className='text-left'>Qualis DMS enables you to create custom workflows that meet your specific requirements.</p> 

                       <h3 className='pb-3'>Creating workflow</h3>
                       
                       <p className='text-left'>To create a new workflow, follow these steps:</p> 
                       <p className='text-left'>12.On the Explorer, click <b>DMS,</b> click <b>Document Management,</b> and then click Document Workflow. The <b>Document Workflow</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture72.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Workflow Screen</p>
        
                        <p className='text-left'>13.In the  <b>Document Workflow</b> screen, click action menu and then click <b>Add.</b> The <b>Add Workflow</b> Dialog appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture73.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add Workflow Dialog</p>

                        <p className='text-left'>14.In the <b>Work flow Name</b> field, type name for the workflow you create.</p>
                        <p className='text-left'>15.In the <b>Description</b> field, type description for the workflow if any.</p>
                        <p>16.Click <b>SUBMIT.</b></p>
                        <h3 className='pb-3'>2.Adding Role and User to Review Documents</h3>
                        <p className='text-left'>You can add user roles and then add users to review the documents in the workflow. To do so, follow these steps:</p>
                        
                        <p className='text-left'>17.In the  <b>Document Workflow </b>screen, under <b>Work flow name</b>, select the workflow you want to add role and user:</p>
                        <p className='text-left'>In the <b>Review Workflow </b>tab, click. <img  src='../../image/articel/dms/Plusminus.png' className='mx-2 w-auto'/>    The <b>Review Work flow</b> add and remove role level dialog appears as shown in the figur</p>


                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture74.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Review Workflow - Add and Remove Role Level Dialog</p>

                        <p className='text-left'>19.You can see the list of available roles in the left side. Select a role and click to add it to the workflow. You can add multiple or all roles to the workflow as required.</p>

                        <p className='text-left'>20.Click  <b></b>OK.</p>

                        <p className='text-left'>21.For each role, to add <b>users</b>, select the role, in the User section click.  <img  src='../../image/articel/dms/Plusminus.png'  className='mx-2 w-auto'/>  The <b>Review</b> workflow add and remove users dialog appears as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture75.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Review Workflow - Add and Remove Users Dialog</p>
                        <p className='text-left'>22.You can see the list of available users in the left side. Select a user and click to add them to the workflow. You can add multiple or all users to the workflow as required.</p>

                        <p className='text-left'>23.Click OK. You can see the role and the users added to the review work flow as shown in the figure:</p>


                        <h4 className='inner-image '>
                        <img  src='../../image/articel/dms/Picture87.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Role and Users Added to the Review Workflow</p>
                        <h3 className='pb-3'>3.Adding Role and User to Approve Documents</h3>

                        <p className='text-left'>You can add user roles and then add users to approve the documents in the workflow. To do so, follow these steps</p>

                        <p className='text-left'>24.In the Approval Workflow tab, click. <img  src='../../image/articel/dms/Plusminus.png' className='mx-2 w-auto'/>  The <b>Approval work flow </b>add and remove role level dialog appears as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture77.png'  className='my-2 p-0'/>   
                        </h4>

                        <p className='figure mt-1'>FIGURE: - Approval work flow - Add and Remove Role Level Dialog</p>

                        <p className='text-left'>25.You can see the list of available roles in the left side. Select a role and click  <img  src='../../image/articel/dms/arrowright.png' className='mx-2 w-auto' />to add it to the workflow. You can add multiple or all roles to the workflow as required</p>

                        <p className='text-left'>26.Click OK. The roles added to the workflow appears as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture78.png'  className='my-2 p-0'/>   
                        </h4>

                        <p className='figure mt-1'>FIGURE: - Adding Step Code</p>
                        <p className='text-left'>You must add step code to each role here.</p>
                        <p className='text-left'>27.In the Step Code field type the level of approval for each role to define the sequence of approval in the workflow.</p>

                        <p className='text-left'>28.For each role, to add users, select the role and then click. <img  src='../../image/articel/dms/Plusminus.png' className='mx-2 w-auto'/>   The Approval work flow add and remove users dialog appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture79.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Adding User Role Screen</p>

                        <p className='text-left'>The <b>Add</b> User Role dialog appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture52.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Approval workflow - Add and Remove Users Dialog</p>


                     <p className='text-left'> 29.You can see the list of available users in the left side. Select a user and click <img  src='../../image/articel/dms/arrowright.png' className='mx-2 w-auto'/>   to add them to the workflow. You can add multiple or all users to the workflow as required.</p>
                     <p className='text-left'>30.Click OK. You can see the role and the users added to the approval work flow as shown in the figure:.</p>

                     <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture80.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Role and Users Added to the Approval Workflow</p>   

                        <h3 className='pb-3'>3.Document Category</h3>
                     <p className='text-left'>Document categories are created to categorize documents based on the document type, workflow and template involved. You can create a document category and map the workflow to the category. </p>
                     <p className='text-left'>To create a document category, follow these steps:.</p>
                     <p className='text-left'> 31.On the Explorer, click <b>DMS,</b> click <b>Document Management,</b> and then click <b>Document Category.</b> The Document Category screen appears as shown in the figure:</p>
                     <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture81.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Category Screen</p>  
                        <p className='text-left'>You can see the list of document categories added and in the action menu you can see options to add, edit and delete document categories.  </p>
                        <p className='text-left'>32.In the <b>Document Category </b>screen, click action menu and then click <b>Add.</b> The Add Document Category dialog appears as shown in the figure:  </p>

                     <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture82.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add Document Category Dialog</p>
                     <p className='text-left'>33.In the Document Category Name field, type name for the category you create. </p>
                     <p className='text-left'>34.In the <b>Description</b> field, type description if any.</p>
                     <p className='text-left'>35.In the <b>Doc Prefix</b> field, type the document extension type: .Docx/PDF. </p>

                     <p className='text-left'>36.In the <b>Workflow</b> field, select the workflow to map it to the category you create</p>

                        <p className='text-left'>37.In the Template Type field, select the template for the category</p>

                        <ul>
                            <li className='circle mx-3'> <b>PDF</b> : Select “PDF” if the document category does not require a template</li>
                            <li className='circle mx-3'> <b>Docx format:</b> Select this option to make the tag mandatory. NA tags will be available</li>
                            <li className='circle mx-3'><b>Doc reference:</b> NA tags will not be available for this option</li>
                            <p className='text-left'>38.Click to enable the Document Validity option. If this option is enabled, then the following fields are enabled:</p>
                        </ul>
                            <ul>
                            <li className='circle mx-3'>In the <b>Validity</b> field, type the number and select the period. For example, 3 years.</li>
                            <li className='circle mx-3'>In the <b>Document crossing validity date should be marked</b> as field, select Obsolete / Extend.</li>
                            <li className='circle mx-3'>In the  <b>Alert Window Period </b>field, type the number and select period. For example, 10 days. Before which the system alerts about the expiry of document validity.</li>
                            </ul>
                            <p className='text-left'>39.Click SUBMIT. The document category is added and appears in the list:</p>
                        
                            <h3 className='pb-3'>4.Document Category View Rights</h3>
                            <p className='text-left'>Document Category View Rights screen enables you to grant or revoke view permissions for document category based on section and user.</p> 
                            <p className='text-left'>To define document category view rights, follow these steps:.</p> 
                            <p className='text-left'>1.On the Explorer, click <b>DMS</b>, click <b>Document Management</b>, and then click Document Category View Rights. The <b>Document Category View Rights</b> screen appears as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture83.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Document Category View Rights Screen</p>

                        <p className='text-left'>Follow the on screen instructions to add or revoke permission for the selected document category.</p> 
                            <h3 className='pb-3'>Section Based Document Rights</h3>
                        <p className='text-left'>1.To define document category rights based on section, follow these steps:</p>


                        <p className='text-left'>1.On the Explorer, click <b>DMS,</b> click <b>Document Management,</b> and then click Document Category View Rights. The <b>Document Category View Rights</b> screen appears as shown in the figure:</p>
                        <p className='text-left'>2.Under Section, select a section, under Document Category click  <img  src='../../image/articel/dms/Plusminus.png' className='mx-2 w-auto'/> . The Add and Remove Document Category dialog appears as shown in the figure:</p>


                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture84.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add and Remove Document Category Dialog</p>
                        <p className='text-left'>3.Select a category under <b>AVAILABLE LIST </b>and then click   <img  src='../../image/articel/dms/arrowright.png' className='mx-2 w-auto'/> to add to the <b>EXISTING LIST</b></p>

                        <p className='text-left'>4.Click <b>OK.</b> You can see the category added under <b>Document Category.</b> And the list of documents in the selected Document Category appears under <b>Document Name</b>.</p>
                    
                        <h3 className='pb-3'>2.User Based Document Rights</h3>

                        <p className='text-left'>To define document rights based on users, follow these steps:</p>

                        <p className='text-left'>1.On the Explorer, click <b>DMS,</b> click <b>Document Management</b> and then click Document Category  <b>View Rights.</b></p>
                        <p className='text-left'>Under <b>Section</b> select a section. You can see list of users in the selected section</p>
                        <p className='text-left'>3.Under <b>User Name</b> select a user you want to define rights. You can see list of categories the user has rights under <b>Document Category</b>.</p>
                        <p className='text-left'> 4.Under <b>Removed Document</b> Name, click. <img  src='../../image/articel/dms/plusminus.png' className='mx-2 w-auto'/>   The Remove Document dialog appears as shown in the figure: </p>

                
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture85.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add and Remove Document Category Dialog</p>
                        <p className='text-left'>Select a document under <b>AVAILABLE LIST</b> and then click   to add to the <b>EXISTING LIST.</b> The documents added to the <b>EXISTING LIST</b> are hidden from the user.</p>
                        <p className='text-left'>5. Click <b>OK.</b></p>
                        <p className='text-left'>The documents added under <b>EXISTING LIST </b>appear under <b>Removed Document</b> Name and the user cannot view these documents.</p>
                    </div>  

                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../dmscontactsmanagement'> Contacts Management</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../dmsdocumentprinting'>Document Printing</Link>
                        </div>
                    </div>
                    </div>
            </div>
             </div>
         <Help/>
        </div>
    );
}

export default DmsDocumentManagement; 