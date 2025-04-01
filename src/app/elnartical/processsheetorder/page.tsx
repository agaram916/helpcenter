'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';

 const ProcessSheetOrder = () => {
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
                    <h1>Logilab ELN – process sheet order</h1>
                    
                    <section className='articel-content'>
                        <ol>
                        <li>
                        <ul>
                        <li>
                        <p>Once an order is registered, the registered orders appear in the <strong><em>Pending Orders</em></strong>&nbsp;folder. You can process an order. When you open the order for processing, the results from the instrument are captured and appear in the sheet. You can review results; calculations etc. and approve/reject the task. When approved the task goes to the next step in the workflow. The rejected task goes to the previous step in the workflow for corrections.</p>
                        <p>When the task is in the final step of the workflow, you can complete the task.</p>
                        <p>To process order, follow these steps:</p>
                        <ol>
                            <li>On the <strong><em><strong>Sheet Orders</strong></em></strong>screen, select an order; click <strong><em><strong>PROCESS ORDER</strong></em></strong>&nbsp;that appears in the <strong><em><strong>Action</strong></em></strong>&nbsp;column of the order as shown in the figure:</li>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture151.png' className='m-0 p-0' />
                            </h4>
                            <p className='text-center '>FIGURE: Processing Order1</p>
                        </ol>
                        
                        <p>The lab sheet mapped to the order appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture152.png' className='m-0 p-0' />
                            </h4>
                        <p className='text-center'>FIGURE: Processing Order 2</p>
                        <p>You can see the Order ID and Task Name appear. The sheet is automatically locked for processing.</p>
                        <ol>
                            <li>Review test results, data, calculations etc in the sheet.</li>
                            <li>In the workflow stage field select <strong><em><strong>Approve</strong></em></strong>to approve. The approved task goes to the next step in the workflow. For example, in the <strong><em><strong>Initiate</strong></em></strong>&nbsp;field, select <strong><em><strong>Approve</strong></em></strong>.</li>
                            <li>In the workflow stage field select <strong><em><strong>Reject</strong></em></strong>to return the task. The rejected task goes to the previous step in the workflow. For example, in the <strong><em><strong>Initiate</strong></em></strong>&nbsp;field, select <strong><em><strong>reject</strong></em></strong>.</li>
                            <li>When the task comes to the last step in the workflow, you can see the Clickto complete the test/task. The completed tasks appear in the <strong><em><strong>Completed Orders </strong></em></strong>folder.</li>
                            <li>Click <strong><em><strong>SUBMIT</strong></em></strong>.</li>
                        </ol>
                        <p>Based on the workflow, the approved task goes to the next step. The rejected task goes to the previous step for correction.</p>
                        <ul>
                        <li>Clickto view full screen.</li>
                        <li>Click to the order processing screen. If you close without saving, the following dialog appears:</li>
                        </ul>
                        <ul>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture153.png'/>
                            </h4>
                            <li>Click <strong><strong>SAVE</strong></strong> to save the order.</li>
                            <li>Click <strong><strong>DISCARD</strong></strong> to close the sheet without saving the changes.</li>
                            <li>Click <strong><strong>CANCEL</strong></strong> to cancel the close operation.</li>
                            </ul>
                        <h3>Compare Versions</h3>
                        <p>When you process the sheet orders, you can compare versions by clicking <strong><em><strong>Compare Versions</strong></em></strong>&nbsp;option as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture154.png' className='m-0 p-0'/>
                            </h4>
                        <p className='text-center'>FIGURE: Using the Compare Versions Options</p>
                        <p>The <strong><em><strong>Compare Versions</strong></em></strong>&nbsp;screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture155.png' className='m-0 p-0'/>
                            </h4>
                        <p className='text-center'>FIGURE: Compare Versions Screen</p>
                        <p>You can view the difference/changes between the selected versions highlighted in pink as shown in the above figure.</p>
                        <h3>Share Order with Other Users</h3>
                        <p>To share the order with other users, follow these steps:</p>
                        <ol>
                            <li>While processing the order, click. The <strong><em><strong>Share with Other Users</strong></em></strong>dialog appears as shown in the figure:</li>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture156.png'className='m-0 p-0' />
                            </h4>
                            <p className='text-center'>FIGURE: Share Order with Other Users</p>
                        </ol>
                        
                        <ol start= {6}>
                        <li>In the <strong><em><strong>ELN Unique ID</strong></em></strong>field, type the unique id of the user you want to share the order.</li>
                        <li>You can grant the user read only or read and write access: select <strong><em><strong>Read </strong></em></strong>or <strong><em><strong>Read/Write</strong></em></strong>.</li>
                        <li>Click <strong><em><strong>SHARE</strong></em></strong>.</li>
                        </ol>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;Alternatively, you can click</em></em><em><em>&nbsp;that appears on the order record in the Sheet Orders screen to share with other users.</em></em></p>
                        <ol start= {9}>
                        <li>The order will be shared with the selected user and the order appears in their <strong><em><strong>Shared Orders</strong></em></strong>&gt;&gt;<strong><em><strong>Orders Shared to Me</strong></em></strong></li>
                        </ol>
                        <h3>Upload Attachment</h3>
                        <p>Click&nbsp;to attach files to the order. In the dialog, select file size option, click <strong><em><strong>Choose File</strong></em></strong>&nbsp;to attach files and then click <strong><em><strong>Upload</strong></em></strong>&nbsp;as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture157.png'/>
                            </h4>
                        <p className='text-center'>FIGURE: Attaching Files to the Order</p>
                        <h3>View Version History, Transaction History and Workflow History</h3>
                        <p>Click&nbsp;to view version history, transaction history and workflow history of the order as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture158.png' />
                            </h4>
                        <p className='text-center'>FIGURE: View Order History</p>
                        <h3>View Order Audit History</h3>
                        <p>Click&nbsp;to view audit history of the order as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture159.png'/>
                            </h4>
                        <p className='text-center'>FIGURE: Order Audit History Dialog</p>
                        <h4>Cell Level Audit</h4>
                        <p>ELN captures cell level change history. Even if you edit / change value in a cell and do not save the change, the change is logged in ELN and the same appears in the Order Audit History dialog.</p>
                        <h3>Copy Link</h3>
                        <p>Click&nbsp;to copy the order link as shown in the figure and paste in the lab sheet/browser to open the order:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture160.png' />
                            </h4>
                        <p className='text-center'>FIGURE: Copy Link</p>
                        <p>When you open the link in a new tab, the following dialog appears for authentication:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture161.png'  />
                            </h4>
                        <p className='text-center'>FIGURE: Copy Link Authentication</p>
                        <p>Type valid <strong><em><strong>Username</strong></em></strong>&nbsp;and <strong><em><strong>Password</strong></em></strong>&nbsp;and then click <strong><em><strong>Login</strong></em></strong>. The order opens as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture162.png' />
                            </h4>
                        <p className='text-center'>FIGURE: Order Opened in New Tab</p>
                        <h3>View Transaction History</h3>
                        <p>Clickto view version history, transaction history and workflow history of the order as show in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture163.png' />
                            </h4>
                        <p className='text-center'>FIGURE: Viewing Transaction History and Workflow History</p>
                        <p>Alternatively, you can click&nbsp;that appears inside the lab sheet to view history of the order.</p>
                        <h3>ELN Task Order</h3>
                        <p>After registering the ELN Task Order, in the <strong><em><strong>Pending Orders </strong></em></strong>tab, click <strong><em><strong>PROCESS ORDER</strong></em></strong>&nbsp;that appears near the ELN Task Order you want to process as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture164.png'/>
                            </h4>
                        <p className='text-center'>FIGURE: Processing ELN Task Order&nbsp;</p>
                        <p>The lab sheet attached to the order opens in Excel.</p>
                        <p>You cannot edit the sheet that is in the Completed/Approved state. But still, you can use the link, export and chart options:</p>
                        <p><img src='../../image/articel/Picture165.png'/>&nbsp;- Link with other lab sheets</p>
                        <p><img src='../../image/articel/Picture166.png'/>&nbsp;- Export lab sheet</p>
                        <p><img src='../../image/articel/Picture167.png'/>&nbsp;- Add chart to the sheet</p>
                        <p><img src='../../image/articel/Picture168.png'/> &nbsp;- Decrease Decimal</p>
                        <p><img src='../../image/articel/Picture169.png'/>&nbsp; - Increase Decimal</p>
                        </li>
                        </ul>
                        </li>
                        </ol>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../filemanagement">Folder and file management</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../sheettemplate">How to create sheet template</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default ProcessSheetOrder; 