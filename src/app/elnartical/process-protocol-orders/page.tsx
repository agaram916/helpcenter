'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const Processprotocolorders = () => {
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
                    <h1><strong>Logilab ELN - Process ELN Protocol Order</strong></h1>
                    <section className='articel-content'>
                        <p>Once an order is registered, the registered orders appear in the <strong><strong> Pending Orders</strong></strong>&gt;&gt;<strong><strong>ELN Protocol Orders </strong></strong>folder or in the selected user defined folder. You can process an order.</p>
                        <p>You can review descriptions, calculations, add inputs to the controls, attach files etc. and submit the order. When approved the task goes to the next step in the workflow. The rejected task goes to the previous step in the workflow for corrections.</p>
                        <p><strong><strong>Points to remember.</strong></strong></p>
                        <ol>
                        <li>When you process an order, the protocol opens, and you must complete all the steps in the protocol.</li>
                        <li>You can add values to the fields added to the protocol step.</li>
                        </ol>
                        <p>Add editors at run time: you can add content dynamically when you process by inserting text, image, table, editors as you do when you design the protocol template.</p>
                        <ol start={3}>
                        <li>You can complete each step by clicking the step checkbox. You can see the status change.</li>
                        <li>You may skip entering value to the fields in a step.</li>
                        <li>But you need to mandatorily complete the following if the following are added to complete a step: -</li>
                        </ol>
                        <ul>
                        <li>Signature: Defined signature</li>
                        <li>Multi-step procedure: complete all the steps in the multi-step procedure.</li>
                        </ul>
                        <ol start={6}>
                        <li>Once you complete the steps, you can add results. You can add results by adding editors or import results from the protocol steps.</li>
                        <li>You can view the protocol in full screen by clicking the <img  src='../../image/articel/eln/fullscreen.png' className='p-0 w-auto mx-2'/> icon that appears on the top-right corner of the protocol order screen. You can also view each section/step in full screen by clicking the <img  src='../../image/articel/eln/screen.png' className='p-0 w-auto mx-2'/>icon that appears in the top-right corner of each section/step.</li>
                        </ol>
                        <p>To process protocol orders, follow these steps:</p>
                        <ol> 
                        <li>On the main menu, click <img  src='../../image/articel/eln/orders.png' className='p-0 w-auto mx-2'/>and then click <strong><strong>Protocol Orders. </strong></strong>The<strong><strong>&nbsp;Protocol Orders </strong></strong>screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture322.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Protocol Orders Screen</p>
                        <p>By default, the <strong><strong>Pending Orders</strong></strong>&gt;&gt;<strong><strong>Protocol Orders </strong></strong>folder appears, and you can see the list of protocol orders registered and pending to process.</p>
                        <p>To process order, follow these steps:</p>
                        <ol>
                        <li>Select an order; click <strong><strong>PROCESS ORDER</strong></strong>. The screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture323.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing Protocol Order - Start Step</p>
                        <p>You can see the Order Type, Protocol ID, Task Name, Sample Name, Project Name, and status of the order appears.</p>
                        <ol start={2}>
                        <li>Click <img  src='../../image/articel/eln/start.png' className='p-0 my-3'/>as shown in the above figure. The protocol steps will start, and the status appears as <strong><strong>In-Progress </strong></strong>as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture324.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Protocol Order &ndash; Filling Placeholder</p>
                        <ol start={3}>
                        <li>You can see the status of the protocol steps as shown in the above figure.</li>
                        <li>If there is a place holder available, you can fill in the place holders. Provide / select values for the controls.</li>
                        </ol>
                        <p><strong><strong>Note:</strong></strong>&nbsp;Note that you can fill in data for the controls added in the template and you cannot delete content in the template. But you can add additional data at runtime.</p>
                        <ol start={5}>
                        <li>Logilab ELN enables adding data at runtime. You can add more content to the protocol order while processing. Place the cursor where you want to add content and then clickor &nbsp;to add an editor above or below, in the <strong><strong>ADD</strong></strong>&nbsp;dialog select an editor: Text / Image / Attachment / Labsheet / Resource etc. In the editor, add your content as you add while designing the template.</li>
                        <li>Once you finish filling values to the predefined controls and add required additional data to the step, you can click to check the checkbox in the step header as shown in the figure to complete the step:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture325.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p>Once you check the box and complete the step, you can see the status change as shown in the above figure.</p>
                        <ol start={7}>
                        <li>Once all the steps are completed, in the workflow field, select <strong><strong>Approve</strong></strong>and then click <strong><strong>SUBMIT </strong></strong>as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture326.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Process Protocol Order - Steps Completed</p>
                        <p><strong><strong>Note:</strong></strong>&nbsp;If you select <strong><strong>Approve</strong></strong>, the order goes to the next step in the workflow. You can also select <strong><strong>Reject</strong></strong>&nbsp;here. If you select <strong><strong>Reject</strong></strong>, the order goes to the previous workflow step. </p>
                        <ol start={8}>
                        <li>Clear the step check box to restart a step if required.</li>
                        <li>Once the protocol order is in the final stage of the workflow, for example: Approved status, theappears and the <strong><strong>Save</strong></strong>button is disabled as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture327.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Completing the Order</p>
                        <ol start={10}>
                        <li>Click <strong><strong>Finish/Complete Order</strong></strong>. You will see a confirmation message saying, &ldquo;ORDER COMPLETED SUCCESSFULLY&rdquo;. And the status appears as Completed.</li>
                        <li>The completed order appears in the <strong><strong>Completed Orders</strong></strong>&gt;&gt;<strong><strong>ELN Protocol Orders</strong></strong>folder as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture328.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Completed Order Appears in the Completed Orders Folder</p>
                        <p>The completed order appears in Green.</p>
                        <h3>1.1.1&nbsp;Cancelled and Rejected Orders</h3>
                        <p>Cancelled and rejected orders will be marked as cancelled and rejected and appears in the same folder and marked in Red. Cancelled and rejected orders will not be processed further. You can view the transaction details of the cancelled order by mouse-over and click theicon.</p>
                        <h2>1.2&nbsp;Process Dynamic Protocol Order</h2>
                        <p>Dynamic protocol orders are registered with the default template. While processing dynamic protocol orders, you can add content, controls and attachments dynamically as you do while creating a &nbsp;protocol template.</p>
                        <ol>
                        <li>On the main menu, click <img  src='../../image/articel/eln/orders.png' className='p-0 mx-2 w-auto'/> and then click <strong><strong>Protocol Orders</strong></strong>. In the <strong><strong>Protocol Orders</strong></strong>&nbsp;screen, go to the <strong><strong>Pending Orders</strong></strong>&gt;&gt;<strong><strong>Dynamic Protocol Orders </strong></strong>folder as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture329.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Register Protocol Orders &amp; Execute Screen</p>
                        <p>You can see the list of dynamic protocol orders registered and pending to process.</p>
                        <p>To process dynamic protocol order, follow these steps:</p>
                        <ol start={12}>
                        <li>Select an order; click <strong><strong>PROCESS ORDER</strong></strong>. The screen appears as shown in the figure:</li>
                        </ol>
                         <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture330.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Processing Dynamic Protocol Order</p>
                        <p>You can see the Order Number, Protocol ID, Task Name, and status appear.</p>
                        <ol start={13}>
                        <li>Add values/fill values to the controls. If there is a place holder fill the value.</li>
                        <li>In addition, dynamic protocols enable the user to add new sections, steps, controls and move steps up and down as you do while creating the protocol. You can add a new section dynamically by clicking the <strong><strong>ADD SECTION</strong></strong></li>
                        <li>Once you add a section, you can add steps and insert controls as you do while designing a protocol template.</li>
                        <li>To edit details, click to edit the step. In the edit mode you can add controls and resources dynamically.</li>
                        <li>Provide inputs / add details dynamically for all the tabs.</li>
                        <li>Click the step check box to complete the text. Once all the steps in the section are completed, the section checkbox is auto checked to denote the section is completed.</li>
                        <li>Once all the sections are completed, you can approve the order. In the workflow field, select <strong><strong>Approve</strong></strong>and then click <strong><strong>Submit</strong></strong>&nbsp;to approve the order as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture331.png' className='p-0 my-3 w-100'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Completing Steps and Sections</p>
                        <ol start={20}>
                        <li>You will see a confirmation message saying, &ldquo;STATUS UPDATED SUCCESSFULLY&rdquo;.</li>
                        <li>Once <img  src='../../image/articel/eln/finishorderpng.png' className='p-0 mx-2 w-auto'/> the protocol order is in the final stage of the workflow, for example: Approved status, the And the <strong><strong>Save</strong></strong>button is disabled.</li>
                        <li>Click <strong><strong>Finish/Complete Order</strong></strong>. You will see a confirmation message saying, &ldquo;ORDER COMPLETED SUCCESSFULLY&rdquo;. And the status appears as Completed.</li>
                        <li>The completed order appears in the <strong><strong>Completed Orders</strong></strong>&gt;&gt;<strong><strong>Dynamic Protocol Orders</strong></strong>folder as shown in the figure:</li>
                        </ol>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../process-Sheet-Orders">Process Sheet Orders</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../sheettemplates">Sheet Templates</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default Processprotocolorders; 