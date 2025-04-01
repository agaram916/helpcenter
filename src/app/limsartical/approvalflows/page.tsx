'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const Approvalflows = () => {
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
                    <h1>How to Configure Approval Flow Stages </h1>
                    <section className='articel-content'>
                        <p>Based on the template designed in the user role template screen you can define the approval flow stages in Approval Configuration screen. .</p>
                        <p>1.On the main menu, click <img  src='../../image/articel/LIMS/configuration.png' className='mx-2 w-auto'/>  <b>Configuration,</b> and then click <b>Approval Configuration.</b> The  <b>Approval Configuration </b>screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture43.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Approval Configuration Screen</p>
                        <p>2.In the filter <img  src='../../image/articel/LIMS/filter.png' className='mx-2 w-auto'/> , in the  <b>Approval Sub Type</b> field, select the module you want to create workflow. Select <b>Registration Type</b> and Registration Sub Type if prompted.</p>
                        <p>3.In the <b>User Role Template</b> field select the template. Template that is created and in  approved state for the selected registration sub type appears here.e</p>
                        <p>4.Click <b>SUBMIT.</b> The approval flow for the selected type and sub types appears.</p>
                        <p>5.Click.  <img  src='../../image/articel/LIMS/plus.png' className='mx-2 w-auto'/> The Add <b>Approval Configuration</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture44.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Approval Configuration Screen </p>
                        <p>6.In the <b>Version Name </b>field, type a name for the approval flow version.</p>
                        <p>7.Click to check the <b>Auto Approval</b> option to auto approve the sample upon accepting the sample in the Registration screen.</p>
                        <p>The roles available as per the User Role Template will appear as tabs in the approval route.</p>
                        <p>8.Set the approval flow options as required for the selected type for each role required in approval flow</p>
                        <p>9.Click to select the <b>e-Sign </b>check field, if e-signature is required to complete the approval stage.</p>
                        <p>10.In the <b>Approval Status</b> field, click and select the approval status which will be assigned to the sample after completing the approval stage by the selected role.</p>
                        <p>11.To set the <b>Filter Status</b> details for the selected role in the approval flow, select status values from the list. Selected status values will be available for filtering records for the selected role. Only records with selected status values will be available for the role.</p>
                        <p>12.To set the <b>Validation Status </b>details for the selected role in the approval flow, select status values from the list. Records with selected status values will be available for taking approval action to the selected role. </p>
                        <p>13.Repeat the steps for other roles in each tab.</p>
                        <p>14.Click <b>Save.</b> The approval configuration is saved as a draft as shown in the figure: </p>

                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture45.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Approval Configuration Added</p>
                        <p>15.In the draft state, you can edit or delete the configuration.</p>

                       <h3>1.1.1Approving Approval Configuration</h3>
                        <p>1.After completing settings for all the roles, click  <img  src='../../image/articel/LIMS/like.png' className='mx-2 w-auto'/>to approve the Approval Configuration.</p>
                        <p> <b>Note:</b> If a configuration exists for a particular Sub Type, it will get retired automatically when the new configuration is approved.</p>

                       <h3> 1.1.2Copying Approval Configuration</h3>
                       <p>The copy option can be used to replicate the Approval Configuration settings from one type to another type.</p>
                     <p>1.To copy Approval Configuration, in the Approval Configuration screen, select the configuration and then click. <img  src='../../image/articel/LIMS/file.png' className='mx-2 w-auto'/>t </p>
                      
                        <h4 className='inner-image'>
                            <img className='my-3' src='../../image/articel/LIMS/Picture46.png'/>
                        </h4>
                        <p className='figure mt-1'> FIGURE: Copy Approval Configuration Screen</p>
                        <p>2.In the Version Name field, type name for the version you copy.</p>
                        <p>In the <b>registration Type</b> field, select the registration type.</p>
                        <p>4.In the <b>registration Sub Typ</b>e field, select the registration sub type.</p>
                        <p>5.Click  <b>Save.</b> </p>
                        <p>6.Now the configuration is copied to the selected type / sub type</p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../configureapproval">How to configure approval hierarchy for approval flow</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                           <Link href="../userroles"> How to map user Roles to the workflows</Link>
                        </div>
                    </div>
                    </div>         
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default Approvalflows; 