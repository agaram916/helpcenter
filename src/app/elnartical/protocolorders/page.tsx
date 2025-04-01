'use client';
import useScrollButton from '@/components/usescrollbutton';
import React, { useState ,useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const Protocolorders = () => {
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
                     <button id="btn-back-to-top" onClick={backToTop} style={{ display: 'block'}}>
                        <i className="fas fa-arrow-up"></i>
                    </button>
                )}
                 <div className='inner-details'>
                    <h1><strong>Logilab ELN - Register Protocol Orders</strong></h1>
                    <section className='articel-content'>
                              <p>The Register Protocol Orders &amp; Execute screen enables you to register protocol orders to be performed. The orders shall be registered for the following:</p>
                              <ul>
                              <li>ELN Protocol Order: Protocol orders shall be registered for tests and analysis created in Logilab ELN</li>
                              <li>Dynamic Protocol Order: Dynamic protocol orders shall be registered using the default template. Dynamic protocols enable add details / controls in each step in the protocol while processing.</li>
                              </ul>
                              <p>To register protocol order, follow these steps:</p>
                              <ol>
                              <li>On the main menu, click <img src='../../image/articel/eln/orders.png' className='m-2 w-auto'/> and then click Protocol Orders. The Protocol Orders screen appears as shown in the figure:</li>
                              </ol>
                              <div className='inner-image'>
                                     <img  src='../../image/articel/eln/Picture359.png' className='my-3 w-100'/>  
                             </div> 
                              <p className='figure mt-1'>FIGURE: Protocol Orders Screen</p>
                              <ol start={2}>
                              <li>Click Register to register an order. The Create Order dialog appears as shown in the figure:</li>
                              </ol>
                              <div className='inner-image'>
                                     <img  src='../../image/articel/eln/Picture360.png' className='my-3'/>  
                             </div> 
                              <p className='figure mt-1'>FIGURE: Create Order Dialog</p>
                              <ol start={3}>
                              <li>Select the order type. ELN Protocol Order / Dynamic Protocol Order.</li>
                              <li>In the Task field, select the test/task.</li>
                              <li>In the Select a Material field, select the material for the task.</li>
                              <li>In the Select Protocol Template field, select a template.</li>
                              <li>In the Select a Project field, select the project. Based on the selected project, the project team workflow user list appears. The sheet will pass through the workflow steps and the respective user must approve the sheet in each step.</li>
                              <li>In the Assign To field, select Order Workflow / User for the order. If you select Order Workflow, then the order will pass through the workflow defined. If you select User, then you must select the user to assign the order.</li>
                              <li>In the Key Word field, type a keyword for the order you want to register.</li>
                              <li>Under Order Visibility, set the order visibility to Site / Only me / Project Team.</li>
                              <li>Under Save Within, you can see user defined folders if any. Click to select the folder to store the order.</li>
                              <li>Click REGISTER ORDER. The order is registered and the same appears in the folders Pending Orders&gt;&gt;ELN Protocol Orders folder as shown in the figure:</li>
                              </ol>
                              <div className='inner-image'>
                                     <img  src='../../image/articel/eln/Picture360.png' className='my-3'/>  
                             </div>
                              <p className='figure mt-1'>FIGURE: Registered Protocol Orders</p>
                    </section>
                    <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../sheetorders">Sheet Orders</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../process-Sheet-Orders">process Sheet Order</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default Protocolorders; 