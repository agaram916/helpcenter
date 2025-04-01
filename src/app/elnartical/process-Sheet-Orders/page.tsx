'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const PocessSheetOrders = () => {
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
                     <h1><strong>Logilab ELN - Process Sheet Order&nbsp;</strong></h1>
                    <section className='articel-content'>
                        <p>Once an order is registered, the registered orders appear in the <strong><strong>Pending Orders </strong></strong>folder. You can process an order. When you open the order for processing, the results from the instrument are captured and appear on the sheet. You can review results, calculations etc. and approve/reject the task. When approved the task goes to the next step in the workflow. The rejected task goes to the previous step in the workflow for corrections.</p>
                        <p>When the task is in the final step of the workflow, you can complete the task.</p>
                        <p>To process order, follow these steps:</p>
                        <ol>
                          <li>On the <strong><strong>Sheet Orders</strong></strong>screen, select an order; click <strong><strong>PROCESS ORDER</strong></strong>&nbsp;that appears in the <strong><strong>Action</strong></strong>&nbsp;column of the order as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture300.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing Order 1</p>
                        <p>The lab sheet mapped to the order appears as shown in the figure:</p>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture301.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing Order 2</p> 
                        <p>You can see the Order ID and Task Name appear. The sheet is automatically locked for processing.</p>
                        <ol>
                        <li>Review test results, data, calculations etc. in the sheet.</li>
                        <li>In the workflow stage field select <strong><strong>Approve</strong></strong>to approve. The approved task goes to the next step in the workflow. For example, in the <strong><strong>Initiate</strong></strong>&nbsp;field, select <strong><strong>Approve</strong></strong>.</li>
                        <li>In the workflow stage field select <strong><strong>Reject</strong></strong>to return the task. The rejected task goes to the previous step in the workflow. For example, in the <strong><strong>Initiate</strong></strong>&nbsp;field, select <strong><strong>reject</strong></strong>.</li>
                        <li>When the task comes to the last step in the workflow, you can see the <img src='../../image/articel/eln/completetask.png' className='mx-2 w-auto'/> option Click to <img src='../../image/articel/eln/completetask.png' className='mx-2 w-auto'/> complete the test/task. The completed tasks appear in the <strong><strong>Completed Orders </strong></strong>folder.</li>
                        <li>Click <strong><strong>SUBMIT</strong></strong>.</li>
                        </ol>
                        <p>Based on the workflow, the approved task goes to the next step. The rejected task goes to the previous step for correction.</p>
                        <ul>
                        <li>Click <img src='../../image/articel/eln/fullscreen.png' className='mx-2 w-auto'/>to view full screen.</li>
                        <li>Click <img src='../../image/articel/eln/close2.png' className='mx-2 w-auto'/>to the order processing screen. If you close without saving, the following dialog appears:</li>
                        </ul>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture302.png' className='p-0 my-3'/>  
                        </div>
                        <ul>
                        <li>Click <strong><strong>SAVE</strong></strong>to save the order.</li>
                        <li>Click <strong><strong>DISCARD</strong></strong>to close the sheet without saving the changes.</li>
                        <li>Click <strong><strong>CANCEL</strong></strong>to cancel the closed operation.</li>
                        </ul>
                        <h3>1.1.1&nbsp;Compare Versions</h3>
                        <p>When you process the sheet orders, you can compare versions by clicking <strong><strong>Compare Versions</strong></strong>&nbsp;option as shown in the figure:</p>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture303.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Using the Compare Versions Options</p>
                        <p>The <strong><strong>Compare Versions</strong></strong>&nbsp;screen appears as shown in the figure:</p>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture304.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Compare Versions Screen</p>
                        <p>You can view the difference/changes between the selected versions highlighted in pink as shown in the above figure.</p>
                        <h3>1.1.2&nbsp;Share Order with Other Users</h3>
                        <p>To share the order with other users, follow these steps:</p>
                        <ol>
                        <li>While processing the order, click.<img src='../../image/articel/eln/share.png' className='mx-2 w-auto'/>  The <strong><strong>Share with Other Users</strong></strong>dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture305.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Share Order with Other Users</p>
                        <ol start={6}>
                        <li>In the <strong><strong>ELN Unique ID</strong></strong> field, type the unique id of the user you want to share the order with.</li>
                        <li>You can grant the user read only or read and write access: select <strong><strong> Read </strong></strong> or <strong><strong> Read/Write</strong></strong>.</li>
                        <li>Click <strong><strong> SHARE</strong></strong>.</li>
                        </ol>
                        <p><strong><strong>Note:</strong></strong>&nbsp; Alternatively, you can click <img src='../../image/articel/eln/share.png' className='mx-2 w-auto'/>that &nbsp;appears on the order record in the Sheet Orders screen to share with other users.</p>
                        <ol start={9}>
                        <li>The order will be shared with the selected user and the order appears in their <strong><strong>Shared Orders</strong></strong>&gt;&gt;<strong><strong>Orders to Me</strong></strong></li>
                        </ol>
                        <h3>1.1.3&nbsp;Upload Attachment</h3>
                        <p>Click <img src='../../image/articel/eln/pin.png' className='mx-2 w-auto'/> to attach files to the order. In the dialog, select file size option, click <strong><strong>Choose File</strong></strong>&nbsp;to attach files and then click <strong><strong> Upload</strong></strong>&nbsp; as shown in the figure:</p>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture306.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Attaching Files to the Order</p>
                          <h3>1.1.4&nbsp;View Version History, Transaction History and Workflow History</h3>
                        <p>Click<img src='../../image/articel/eln/eye2.png' className='mx-2 w-auto'/>to view version history, transaction history and workflow history of the order as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture307.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: View Order History</p>
                        <h3>1.1.5&nbsp;View Order Audit History</h3>
                        <p>Click <img src='../../image/articel/eln/indeed.png' className='mx-2 w-auto'/> to view audit history of the order as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture308.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Order Audit History Dialog</p>
                        <h4>1.1.5.1&nbsp;Cell Level Audit</h4> copy
                        <p>ELN captures cell level change history. Even if you edit / change value in a cell and do not save the change, the change is logged in ELN and the same appears in the Order Audit History dialog.</p>
                        <h3>1.1.6&nbsp;Copy Link</h3>
                        <p>Click <img src='../../image/articel/eln/copy.png' className='mx-2 w-auto'/>to copy the order link as shown in the figure and paste in the lab sheet/browser to open the order:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture309.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Copy Link</p>
                        <p>When you open the link in a new tab, the following dialog appears for authentication:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture310.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Copy Link Authentication</p>
                        <p>Type valid <strong><strong> Username </strong></strong>&nbsp;and <strong><strong> Password</strong></strong>&nbsp; and then click <strong><strong> Login</strong></strong>. The order opens as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture311.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Order Opened in New Tab</p>
                        <h3>1.1.7&nbsp;View Transaction History</h3>
                        <p>Click <img src='../../image/articel/eln/eye2.png' className='mx-2 w-auto'/>to view version history, transaction history and workflow history of the order as show in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture312.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Viewing Transaction History and Workflow History</p>
                        <p>Alternatively, you can click<img src='../../image/articel/eln/eye2.png' className='mx-2 w-auto'/>that appears inside the lab sheet to view history of the order.</p>
                        <h3>1.1.8&nbsp;ELN Task Order</h3>
                        <p>After registering the ELN Task Order, in the <strong><strong> Pending Orders </strong></strong> tab, click <strong><strong> PROCESS ORDER</strong></strong>&nbsp;that appears near the ELN Task Order you want to process as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture313.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing ELN Task Order</p>
                        <p>The lab sheet attached to the order opens in Excel.</p>
                        <p>You cannot edit the sheet that is in the Completed/Approved state. But still, you can use the link, export and chart options:</p>
                        <p><img src='../../image/articel/eln/link.png' className='mx-2 w-auto'/>- Link with other lab sheets</p>
                        <p><img src='../../image/articel/eln/Export.png' className='mx-2 w-auto'/>- Export lab sheet</p>
                        <p><img src='../../image/articel/eln/chart.png' className='mx-2 w-auto'/>- Add chart to the sheet</p>
                        <p><img src='../../image/articel/eln/DecreaseDecimal.png' className='mx-2 w-auto'/> Decrease Decimal</p>
                        <p><img src='../../image/articel/eln/IncreaseDecimal.png' className='mx-2 w-auto'/> Increase Decimal</p>
                        <h3>1.1.9&nbsp;Research Activity Order</h3>
                        <p>When you register a Research Activity Order for the first time, once you select the task, the sheets attached to the task are listed. &nbsp;You can select the <strong><strong>Default Template </strong></strong>&nbsp;option when the predefined template is not available.</p>
                        <p>After registering the research activity order, in the <strong><strong> Pending Orders </strong></strong> folder or in the user defined folder, click <strong><strong> PROCESS ORDER</strong></strong>&nbsp;that appears in the research activity order you want to process as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture314.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing Research Activity Order 1</p>
                        <p>The lab sheet attached to the order opens in Excel as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/ExcelOrder2.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing Research Activity Order 2</p>
                        <p>You can do the following in the Excel while processing the Research Activity Order:</p>
                        <h4>1.1.9.1<img src='../../image/articel/eln/shwdesigner.png' className='mx-2 w-auto'/> Add / edit / remove fields in the lab sheet.</h4>
                        <ol>
                        <li>Click. The screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture315.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Show Designer</p>
                        <ol start={10}>
                        <li>In the left panel, you can see the list of fields as you see in the lab sheet. Add / edit / remove fields in the sheet dynamically as required.</li>
                        <li>Click <img  src='../../image/articel/eln/hidedesin.png' className='p-0 w-auto'/>to hide the designer (left panel).</li>
                        </ol>
                        <h3>1.1.10&nbsp;Excel&nbsp;Orders</h3>
                        <p>Excel orders allow the user to open a lab sheet while processing.</p>
                        <ol>
                        <li>After registering the Excel order, in the <strong><strong>Pending Orders </strong></strong>&gt;&gt;<strong><strong>Excel Orders </strong></strong>folder or in the user defined folder, click <strong><strong> PROCESS ORDER </strong></strong>that appears in the Manage Excel order you want to process as shown in the figure:</li>
                        </ol> 
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture316.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing Manage Excel Order 1</p>
                        <p>The new template opens in Excel as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture317.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing Manage Excel Order 2</p>
                        <ol start={12}>  
                        <li>Click, in the  <img src='../../image/articel/eln/openfile.png' className='w-auto mx-2'/> <strong> <strong>File Open </strong></strong>dialog, locate the lab sheet and then click <strong><strong>Open </strong></strong>. The lab sheet opens as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture319.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing Manage Excel Order 3</p>
                        <p>Now you can process the lab sheet as you process the ELN order.</p>
                        <h3>1.1.11&nbsp;Sheet Validation</h3>
                        <p>Sheet validation order is registered only for sheets that are in-progress state. Sheet validation is done to evaluate the sheet or to test / check the status of the sheet.</p>
                        <p>After registering the Sheet Evaluation order, in the <strong><strong>Pending Orders </strong></strong>&gt;&gt;<strong><strong>Sheet Validation</strong></strong>&nbsp;folder, click <strong><strong>PROCESS ORDER</strong></strong>&nbsp;that appears in the Sheet Evaluation order you want to process as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture320.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing Sheet Validation Order 1</p>
                        <p>The order opens as shown in the figure for processing:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture321.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing Sheet Validation Order 2</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../protocolorders">Protocol Orders</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../process-protocol-orders">process Protocol Orders</Link>
                        </div>
                    </div>
                    </div>                    
                </div>
             </div>
          <Help/>
        </div>
    );
}

export default PocessSheetOrders; 