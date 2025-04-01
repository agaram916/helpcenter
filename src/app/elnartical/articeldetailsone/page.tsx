'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const ArticelDetailsone = () => {
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
                    <h1>Logilab ELN – workflow management </h1>
                    <section className='articel-content'>
                        <h2 className='text-left'>Order Workflow</h2>
                        <div>
                            <p>Order Workflow screen helps you to create workflows for sheet orders and protocol orders.</p>
                             <p>Workflows can be designed based on logic in each step. For example, the order created shall pass through the following steps in a workflow:</p>
                            
                            <table>
                                <thead>
                                    <tr><th>Workflow Step</th>
                                    <th>Role Mapped</th>
                                    <th>Workflow Status</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Initiate</td><td>Analyst</td><td>Completed</td>
                                    </tr>
                                    <tr><td>Review</td><td>Reviewer</td><td>Reviewed</td></tr>
                                    <tr><td>Approve</td><td>Approver</td><td>Approved</td></tr>
                                </tbody>
                            </table>
                            <p className='text-center figure'>Table: 2 - Order Workflow Steps</p>
                            <p>Each step in the workflow is mapped to a role. Once the sheet pass through a step, the status of the order is changed to the next step. The order should pass through all the steps in the workflow to successfully complete.</p>
                           <p></p>
                            <p><strong>Note:</strong> For administrators the Site field will appear. Hence, administrator user can create site specific workflows.</p>
                            <p>You can design work flow by adding user roles to each work flow step. To do so follow these steps:</p>
                            <ul className='text-left'>
                                <li><span>1.</span>On the main menu click and then click Order Workflow. The Order Workflow tab appears as shown in the figure: </li>
                                <h4 className='inner-image'>
                                    <img className=' m-0 p-0' src='../../image/setup.png' />
                                </h4>
                            </ul>
                            <p>You can see the list of existing work flow steps on the left panel.</p>
                            <p>To create a new work flow step, follow these steps:</p>
                            <ul className='text-left'>
                                <li><span>2.</span>Click Add Step. You can see a new step created and prompts for the name as shown in the figure:</li>
                                <li><span>3.</span>Type the workflow step name you want to create</li>
                                <p></p>
                                <p><strong>Note: </strong> For Administrator login the site name field appears. You can select the site and then select user roles in the selected site.</p>
                                <li><span>4.</span> Under Assign a User Role to the Workflow Step, click to select the user role for the selected work flow step. You can select multiple user roles for the step</li>
                                <li><span>5.</span> Click Save. You will see a success message as shown in the “Workflow Updated Successfully”</li>
                            </ul>
                            <p>The workflow step is created. Same way, you can add more steps to the workflow.</p>
                            <h2 className='text-left'>Template Workflow</h2>
                            <p>Template Workflow screen helps you to create workflows for sheet templates and protocol templates.</p>
                            <p>Workflows can be designed based on logic in each step. For example, the protocol created shall pass through the following steps in a workflow:</p>
                            
                            <table>
                                <thead>
                                    <tr><th>Workflow Step</th>
                                    <th>Role Mapped</th>
                                    <th>Workflow Status</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Initiate</td><td>Analyst</td><td>Completed</td>
                                    </tr>
                                    <tr><td>Review</td><td>Reviewer</td><td>Reviewed</td></tr>
                                    <tr><td>Approve</td><td>Approver</td><td>Approved</td></tr>
                                </tbody>
                            </table>
                            <p className='text-center figure'>Table: 3 - Template Workflow Steps</p>
                            <p>Each step in the workflow is mapped to a role. Once the template pass through a step, the status of the template is changed to the next step. The template should pass through all the steps in the workflow to successfully complete the task.</p>
                            <p>Note: For administrators the Site field will appear. Hence, administrator user can create site specific workflows.</p>
                            <p>You can design work flow by adding user roles to each work flow step. To do so follow these steps:</p>
                            <ul className='text-left'>
                                <li><span>1.</span>On the main menu click and then click Template Workflow. The Template Workflow tab appears as shown in the figure: </li>
                                <h4 className='inner-image'>
                                    <img className=' m-0 p-0' src='../../image/setup2.png' />
                                </h4>
                            </ul>
                            <p>You can see the list of existing work flow steps on the left panel. </p>
                            <p>To create a new work flow step, follow these steps:</p>
                            <ul className='text-left' >
                                <li><span>2.</span>Click Add Step. You can see a new step created and prompts for the name as shown in the above figure.</li>
                                <li><span>3.</span>Type the workflow step name you want to create</li>
                                <p>Note:  For Administrator login the site name field appears. You can select the site and then select user roles in the selected site.</p>
                                <li><span>3.</span> Under Assign a User Role to the Workflow Step, click to select the user role for the selected work flow step. You can select multiple user roles for the step</li>
                                <li><span>4.</span> Click Save. You will see a success message as shown in the “Workflow Updated Successfully”</li>
                            </ul>
                            <p>The template workflow step is created. Same way, you can add more steps to the template workflow.</p>
                        </div>
                       
                    </section>
                    <div className='prevartical '>
                    <div className='row my-5'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../quicktour'>Quick tour</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../articeldetailstwo">How newly created users can start using the system</Link>
                        </div>
                    </div>
                    </div>
                    
                </div>
             </div>
                <Help/>
        </div>
    );
}

export default ArticelDetailsone; 