'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const ArticelDetailsthree = () => {
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
                    <h1>Logilab ELN – how to approve and map sheet Template</h1>
                    <section className='articel-content'>
                    <p>In this process, we can see how the approver approves the created sheet template in Logilab ELN.</p>
                    <p>In order to complete the process of Template configuration, login as user who has the approval privileges.</p>
                    <h4 className='inner-image'>
                         <img className='w-100 m-0 p-0' src='../../image/articel/Picture7.png' />
                    </h4>
                    <p>To retrieve the template for approval, click on the workflow notifications that have reached the user by clicking on bell icon.</p>
                    <h4 className='inner-image'>
                        <img className='w-100 100 m-0 p-0' src='../../image/articel/Picture8.png' />
                    </h4>
                    <p>Note that the current user has to verify the correctness of the template and click to select the approval option whether to approve or return or reject as the case may be.</p>
                    <h4 className='inner-image'>
                        <img className='w-100 m-0 p-0' src='../../image/articel/Picture9.png' />
                    </h4>
                    <p>Once the option is chosen and &apos;SUBMIT&apos; button is clicked, &apos;E-Signature&apos; popup is displayed.</p>
                    <p>The current user has to authorise this action by entering password and comment first and then selecting &apos;Yes, I agree&apos; checkbox.</p>
                    <p>Once this process is completed, click on 'SUBMIT' button.</p>
                    <h4 className='inner-image'>
                        <img className='w-100 m-0 p-0' src='../../image/articel/Picture10.png' />
                    </h4>
                    <p>The template is currently in the status &apos;Approved&apos; due to the approval action completed.</p>
                    <h4 className='inner-image'>
                        <img className='w-100 m-0 p-0' src='../../image/articel/Picture11.png' />
                    </h4>
                    <p>Click to close the template to navigate to the previous page in which the status is updated for the current template as listed.</p>
                    <p>The next step is Template mapping. Click on 'Template Mapping' tab.</p>
                    <h4 className='inner-image'>
                        <img className='w-100 m-0 p-0' src='../../image/articel/Picture12.png' />
                    </h4>
                    <p>Select the template that has just been approved.</p>
                    <h4 className='inner-image'>
                        <img className='w-100 m-0 p-0' src='../../image/articel/Picture13.png' />
                    </h4>
                    <p>Select the ELN Task which needs to be mapped to the template. Click &apos;Save&apos; button.</p>
                    <h4 className='inner-image'>
                        <img className='w-100 m-0 p-0' src='../../image/articel/Picture14.png' />
                    </h4>
                    <p>It will popup &apos;Audit Trail&apos; dialog box in which the user has to enter the password, reason and comments.</p>
                    <h4 className='inner-image'>
                        <img className='w-100 m-0 p-0' src='../../image/articel/Picture15.png' />
                    </h4>
                    <p>Click &apos;SUBMIT&apos; button. The message &apos;SHEET MAPPED WITH TASK SUCCESSFULLY&apos; get displayed.</p>
                    <p>This completes the process of configuration of Sheet template.</p>
                    <h4 className='inner-image'>
                        <img className='w-100 m-0 p-0' src='../../image/articel/Picture16.png' />
                    </h4>
                       
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../sheettemplate"> How to create sheet template</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../templatevalidation">How to process template validation</Link>
                        </div>
                    </div>
                    </div>        
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default ArticelDetailsthree; 