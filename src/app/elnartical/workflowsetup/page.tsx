'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const WorkflowSetup = () => {
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
                 <h1><strong>Logilab ELN &ndash; Workflow Setup</strong></h1>
                    <section className='articel-content'>                                        
                        <h2>1.1&nbsp;Order Workflow</h2>
                        <p>The Order Workflow screen helps you to create workflows for sheet orders and protocol orders.</p>
                        <p>Workflows can be designed based on logic in each step. For example, the order created shall pass through the following steps in a workflow:</p>
                        <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Workflow Step</th>
                                                <th scope="col">Role Mapped</th>
                                                <th scope="col">Workflow Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Initiate</td>
                                                <td>Analyst</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr>
                                                <td>Review</td>
                                                <td>Reviewer</td>
                                                <td>Reviewed</td>
                                            </tr>
                                            <tr>
                                                <td>Approve</td>
                                                <td>Approver</td>
                                                <td>Approved</td>
                                            </tr>
                                        </tbody>
                                    </table>                  
                        <p className='figure mt-1'>Table: 2 - Order Workflow Steps</p>
                        <p>Each step in the workflow is mapped to a role. Once the sheet passes through a step, the status of the order is changed to the next step. The order should pass through all the steps in the workflow to successfully complete.</p>
                        <p>You can see <strong><strong>Sheet </strong></strong>and <strong><strong>Template </strong></strong>radio buttons. To create sheet workflow, click <strong><strong>Sheet</strong></strong>&nbsp;option. To create protocol workflow, click <strong><strong>Protocol</strong></strong>&nbsp;option.</p>
                        <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>Site</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific workflows.</p>
                        <p>You can design workflow by adding user roles to each work flow step. To do so follow these steps:</p>
                        <ol>
                            <li>On the main menu click<img src='../../image/articel/eln/Setup.png' className='w-auto'/> and then click <strong><strong>Order Workflow</strong></strong>. The <strong><strong>Order Workflow</strong></strong>&nbsp;tab appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture37.png' className='my-3 w-100'/>
                        </div> 
                        <p className='figure mt-1'>FIGURE: Order Workflow Set up Screen</p>
                        <p>By default, the Sheet option is selected. You can see the list of existing workflow steps for the sheet orders on the left panel.</p>
                        <p>To create a new workflow step, follow these steps:</p>
                        <ol>
                        <li>Click to select <strong><strong>Sheet</strong></strong>/ <strong><strong>Protocol</strong></strong>. Select <strong><strong>Sheet</strong></strong>&nbsp;to create workflow for sheet orders. Select <strong><strong>Protocol</strong></strong>&nbsp;to create workflow for protocol orders.</li>
                        <li>Click <strong><strong>Add Step</strong></strong>. You can see a new step created and prompts for the name as shown in the figure:</li>
                        <li>Type the workflow step name you want to create.</li>
                        </ol>
                        <p><strong><strong>Note:</strong></strong>&nbsp;&nbsp;For Administrator login the site name field appears. You can select the site and then select user roles in the selected site.</p>
                        <ol start={3}>
                        <li>Under <strong><strong>Assign a User Role to the Workflow Step</strong></strong>, click to select the user role for the selected workflow step. You can select multiple user roles for the step.</li>
                        <li>Click <strong><strong>Save</strong></strong>. You will see a success message as shown in the &ldquo;Workflow Updated Successfully.&rdquo;</li>
                        </ol>
                        <p>The workflow step is created. Same way, you can add more steps to the workflow.</p>
                        <h2>1.2&nbsp;Template Workflow</h2>
                        <p>Template Workflow screen helps you to create workflows for sheet templates and protocol templates.</p>
                        <p>Workflows can be designed based on logic in each step. For example, the protocol created shall pass through the following steps in a workflow:</p>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Workflow Step</th>
                                <th>Role Mapped</th>
                                <th>Workflow Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Create</td>
                                <td>Analyst</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <td>Review</td>
                                <td>Reviewer</td>
                                <td>Reviewed</td>
                            </tr>
                            <tr>
                                <td>Approve</td>
                                <td>Approver</td>
                                <td>Approved</td>
                            </tr>
                            </tbody>
                        </table>
                        <p>Table: 3 - Template Workflow Steps</p>
                        <p>Each step in the workflow is mapped to a role. Once the template passes through a step, the status of the template is changed to the next step. The template should pass through all the steps in the workflow to successfully complete the task.</p>
                        <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>Site</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific workflows.</p>
                        <p>You can see <strong><strong>Sheet </strong></strong>and <strong><strong>Template </strong></strong>radio buttons. To create sheet workflow, click <strong><strong>Sheet</strong></strong>&nbsp;option. To create protocol workflow, click <strong><strong>Protocol</strong></strong>&nbsp;option.</p>
                        <p>You can design workflow by adding user roles to each work flow step. To do so follow these steps:</p>
                        <ol>
                        <li>On the main menu click <img src='../../image/articel/eln/Setup.png' className='w-auto'/>and then click <strong><strong>Template Workflow</strong></strong>. The <strong><strong>Template </strong></strong><strong><strong>Workflow</strong></strong>&nbsp;tab appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture38.png' className='my-3 w-100'/>  
                        </div>
                        <p>FIGURE: Template Workflow Set up Screen</p>
                        <p>By default, the Sheet option is selected. You can see the list of existing workflow steps for the sheet templates on the left panel.</p>
                        <p>To create a new workflow step, follow these steps:</p>
                        <ol start={5}>
                        <li>Click to select <strong><strong>Sheet </strong></strong>/ <strong><strong> Protocol </strong> </strong>. Select <strong><strong> Sheet</strong></strong>&nbsp;to create workflow for sheet template. Select <strong><strong>Protocol</strong></strong>&nbsp;to create workflow for protocol template.</li>
                        <li>Click <strong><strong> Add Step </strong></strong>. You can see a new step created and prompts for the name as shown in the above figure.</li>
                        <li>Type the workflow step name you want to create.</li>
                        </ol>
                        <p><strong><strong>Note:</strong></strong>&nbsp;&nbsp;For Administrator login the site name field appears. You can select the site and then select user roles in the selected site.</p>
                        <ol start={8}>
                        <li>Under <strong><strong> Assign a User Role to the Workflow Step</strong></strong>, click to select the user role for the selected workflow step.</li>
                        <li>Click <strong><strong>Save</strong></strong>. You will see a success message saying &ldquo; Workflow Updated Successfully.&rdquo;</li>
                        </ol>
                        <p>The template workflow step is created. Same way, you can add more steps to the template workflow.</p>
                        <p>&nbsp;</p>
                    </section>
                    <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                           <Link href="../site-master">Site Master</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../domainsetup">Domain Setup</Link>
                        </div>
                    </div>
                    </div>                 
                </div>
             </div>
            <Help/>
        </div>
    );
}
export default WorkflowSetup; 