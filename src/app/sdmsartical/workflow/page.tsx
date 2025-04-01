'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const WorkFlow = () => {
   
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
                        <li><Link href="../sdmstroublearticle">SDMS Articles</Link></li>
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
                    <h1>How to setup work flow in SDMS</h1>
                    <p className='text-left'>Workflows can be designed based on logic in each stage. For example, the data captured from an instrument shall pass through the following stages in a workflow:</p>
                    <table className="table table-bordered">
                            <thead>
                                <tr>
                                <th >Workflow Stage</th>
                                <th >Role Mapped </th>
                                <th>Workflow Status </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td scope="row">Assign</td>
                                <td>Analyst</td>
                                <td>Reviewed</td>
                                </tr>
                                <tr>
                                <td>Analyze</td>
                                <td>Data Analyst</td>
                                <td>Analysis Completed</td>
                                </tr>
                                <tr>
                                <td>Verify</td>
                                <td>QC </td>
                                <td>Verified</td>
                                </tr>
                                <tr>
                                <td>Approve</td>
                                <td>QC </td>
                                <td>Verified</td>
                                </tr>
                            </tbody>
                            </table>
                              <p className='text-left'>Each stage in the workflow is mapped to a role. Once the data pass through a stage, the status of the data/file is changed to the next status. The data/file should pass through all the stages in the workflow to successfully complete the job.</p>
                              <p>You can design work flow by adding user groups to each work flow stage</p>
                    <section className='articel-content'>
                    <p >1.On the main menu, click   <img  src='../../image/articel/SDMS/setings.png'  className='mx-2 w-auto'/> , and then click <b>Workflow Setup.</b>The screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture59.png'  className='my-3 p-0 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Work Flow Setup Screen</p>
                        <p>You can see the list of existing work flow steps on the left panel. </p>
                        <p>To create a new work flow, follow these steps:</p>
                        <p> 2.In the  <b>Work Flow Step</b> field, the current Workflow Step name selected is displayed.</p>
                        <p>3.Under <b>User Group Name field,</b> click to select the user group for the selected work flow step..</p>
                        <p>4.Click <b>Reset</b> to clear all fields for fresh entry if required..</p>
                        <p>4.Set Workflow for each step by selecting respective User Group Name.</p>
                        <p>5.Click <b>Save.</b></p>
               
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../configurepreferences '>How to configure Preferences in SDMS</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../managenew'>How to create and manage new user group</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default WorkFlow; 