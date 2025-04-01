'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const RegisterSheetOrders = () => {
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
                    <h1>Logilab ELN – register sheet orders</h1>
                    
                    <section className='articel-content'>
                        <ol>
                        <li>
                        <ul>
                        <li>
                        <p>After logging into Logilab ELN as administrator user, navigate to Sheet Orders page by clicking on first Orders menu followed by Sheet Orders submenu.</p>
                        <p>RTO register a sheet order, follow these steps:</p>
                        <ol>
                            <li>On the <strong><em><strong>Sheet Orders</strong></em></strong> screen, click <strong><em><strong>Register</strong></em></strong>. The <strong><em><strong>Create Order</strong></em></strong>&nbsp;dialog appears as shown in the figure:</li>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture180.png'  className=' m-0 p-0'/>
                            </h4>
                            <p className='text-center figure '>FIGURE: Create Order Dialog</p>
                        </ol>
                        
                        <ol>
                            <li>Under <strong><em><strong>Order Type</strong></em></strong>, select the order type. If you want to register an ELN order, then select <strong><em><strong>ELN Order with Template</strong></em></strong>.</li>
                            <li>In the <strong><em><strong>Task</strong></em></strong>field, select the task.</li>
                            <li>In the <strong><em><strong>Select Sheet Template</strong></em></strong>field, sheet templates mapped with the task appears. Select the template.</li>
                            <li>In the <strong><em><strong>Select a Material </strong></em></strong>field, select the material for the task.</li>
                            <li>Under <strong><em><strong>Order Visibility</strong></em></strong>, set the order visibility to <strong><em><strong>Site</strong></em></strong>/ <strong><em><strong>Only me</strong></em></strong>&nbsp;/ <strong><em><strong>Project Team</strong></em></strong>.</li>
                            <li>In the <strong><em><strong>Select a</strong></em></strong><strong><em><strong>Project </strong></em></strong>field, select the project. Based on the selected project, the project team workflow user list appears. The sheet will pass through the workflow steps and the respective user has to approve the sheet in each step.</li>
                            <li>In the <strong><em><strong>Sample</strong></em></strong>field, select the sample for the task.</li>
                            <li>In the <strong><em><strong>Assign To</strong></em></strong>field, select <strong><em><strong>Order Workflow</strong></em></strong>&nbsp;/ <strong><em><strong>User</strong></em></strong>&nbsp;for the order. If you select Order Workflow, then the order will pass through the workflow defined. If you select User then you must select the user to assign the order.</li>
                            <li>In the <strong><em><strong>Key Word</strong></em></strong>field, type a keyword for the order you want to register.</li>
                            <li>Under <strong><em><strong>Save Within</strong></em></strong>, you can see user defined folders if any. Click to select the folder to store the order.</li>
                            <li>Click <strong><em><strong>REGISTER</strong></em></strong>. The order is registered and the same appears in the folders <strong><em><strong>Pending Orders</strong></em></strong>&gt;&gt; <strong><em><strong>ELN Orders</strong></em></strong>folders as shown in the figure:</li>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture181.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>FIGURE: Order Created</p>
                        </ol>
                        
                        <ol start={12}>
                            <li>Click the order. You can see icons appear as shown in the figure:</li>
                            <h4 className='inner-image'>
                            <img  src='../../image/articel/eln/Picture2.png'  className='m-0 p-0'/>   
                            </h4>
                            <p className='text-center figure '>FIGURE: Order Options&nbsp;</p>
                        </ol>
                        
                        <p><img src='../../image/articel/Picture183.png' />&nbsp;<strong><em><strong>Copy Link:</strong></em></strong>&nbsp;Copy and send the link to any external user to enable then to view the order content/details.</p>
                        <p><img src='../../image/articel/Picture184.png' />&nbsp;<strong><em><strong>Share:</strong></em></strong>&nbsp;Share the order to other ELN users.</p>
                        <p><img src='../../image/articel/Picture185.png' /><strong><em><strong>&nbsp;Transaction History:</strong></em></strong>&nbsp;View version history, transaction history and workflow history.</p>
                        <p><img src='../../image/articel/Picture186.png' />&nbsp;<strong><em><strong>Open in New Tab:</strong></em></strong>&nbsp;Open the order in a new tab enables user to open multiple orders in new tabs for comparison.</p>
                        <p><img src='../../image/articel/Picture187.png' />&nbsp;<strong><em><strong>Cancel Order:</strong></em></strong>&nbsp;Cancel order for some reason.</p>
                        </li>
                        </ul>
                        </li>
                        </ol>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../projectteams">How to manage project and project teams</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../filemanagement">Folder and file management</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default RegisterSheetOrders; 