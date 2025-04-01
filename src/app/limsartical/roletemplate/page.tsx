'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const RoleTemplate = () => {
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
                        <li><Link href="../limstroublearticle">LIMS Article</Link></li>
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
                    <h1>How to Create and Manage User Role Template </h1>
                    <section className='articel-content'>
                        <p>User Role Template enables you to create templates to use in the approval configuration screen. You can design the user role template based on the approval stages in the workflows in your organisation.  Example for workflows: Test group approval, Registration approval etc. you can add user roles to the stages in the workflow.</p>
                        <p>Example stages in test group approval workflow: Analyst, Review and Approve.</p>
                        <h3>1.1Versioning</h3>
                        <p>You can add and approve versions to the user role template. Until you approve, the version will remain in the draft state. In the draft state, you can edit, approve and delete the version. Once approved, you cannot edit or delete the version. The existing approved template will retire once you add and approve a new version</p>
                    <h3>1.2Adding a New User Role Template</h3>
                    <p>To create a user role template, follow these steps:</p>
                    <p>1.On the main menu, click <img  src='../../image/articel/LIMS/configuration.png' className='mx-2 w-auto'/>  <b>User Management</b> and then click <b>User Role Template.</b> The  <b>User Role Template</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture31.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Role Template Screen Showing Filter</p>
                        <p>1.In the filter  <img  src='../../image/articel/LIMS/filter.png' className='mx-2 w-auto'/> , in the <b>Approval Sub Type</b> field, select the module you want to create template. Select <b>Registration Type </b>and <b>Registration Sub Type</b> if prompted.</p>
                        <p>2.Click <b>Submit.</b></p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture32.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Role Template Screen Showing List of Templates </p>
                        <p><b>Note:</b> If a template exists for a particular sub type, it will get retired automatically when the new template is approved.</p>
                        <p>3.Click <img  src='../../image/articel/LIMS/plus.png' className='mx-2 w-auto'/> The Add User Role Template screen appears as shown in the figure:</p>
                        {/* <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture32.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add User Role Template Screen</p> */}
                        <h4 className='inner-image'>
                            <img className='m-0 p-0' src='../../image/articel/LIMS/Picture33.png' />
                        </h4>
                        <p>4.In the Template Name field, type a name for the templa</p>

                        <p>5. <img src='../../image/articel/LIMS/level.png' className='mx-2 w-auto'/> will appear by default. Click and select user role for the level 1. (User roles that are added in the User Role Configuration screen for the workflow type appears here):</p>
                        <p><b>Note:</b>Add the roles in the user role approval flow in your organization in the user role template. Roles that are added can be removed and added again with required correction.</p>
                        <p>6.Click <img src='../../image/articel/LIMS/plus.png' className='mx-2 w-auto'/> to add more levels to the template and select user role for each levels.</p>
                        <p>7.After creating the required role levels for the approval flow, click <b>Save.</b></p>
                        <p>You can see the user role template added as a draft in the User Role Template screen as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3  w-100' src='../../image/articel/LIMS/Picture34.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Role Template Added</p>
                    
                        <h3>1.2.1Editing and Deleting User Role Template</h3>
                        <p>You can edit/delete user role templates that are in the draft state. You cannot edit/delete approved templates.</p>
                        <p>To edit a user role template, in the User Role Template master screen, select the template, </p>
                        <p>and then click. <img src='../../image/articel/LIMS/pencil.png' className='mx-2 w-auto'/> In the <b>Edit User Role Template</b> screen, do required changes and then click <b>Submit.</b> You can change Template Name, add roles and remove roles to the template.</p>
                        <p>To delete a user role template, in the User Role Template master screen, select the template, click and then click <img src='../../image/articel/LIMS/delete.png' className='mx-2 w-auto'/> </p>
                        
                        <h3>1.2.2Approving User Role Template </h3>
                        <p>You can approve a template in the draft state.</p>

                        <p>To approve a user role template, in the User Role Template master screen, select the </p>
                        <p>template, and then click <img src='../../image/articel/LIMS/like.png' className='mx-2 w-auto'/> The template is approved and the status appears as Approved</p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../templatedesign">How to add and Manage Template Design</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4 >Next article</h4>
                           <Link href="../maptemplates">How to Map Templates to Registration Sub Type</Link>
                        </div>
                    </div>
                    </div>      
                </div>
             </div>
                <Help/>
        </div>
    );
}
export default RoleTemplate; 