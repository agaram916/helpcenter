'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const TemplateValidation = () => {
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
                    <h1>Logilab ELN – How to process Template Validation</h1>
                    <section className='articel-content'>
                        <ol>
                        <li>
                            <ul>
                            <li>
                            <p>After entering Username, Password, User role, site and domain, login to Logilab ELN.</p>
                            <p>First we need to verify whether the sheet template to be validated is in the status &apos;In Progress&apos;, only then it can be qualified for validation.</p>
                            <p>On the application home page, click on Menu item 'Templates'.</p>
                            <p>Then click on 'Sheet Templates' submenu.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture170.png' />
                            </h4>
                            <p>Verify whether the sheet template to be validated is in the right status. In this example, we choose to validate sheet &apos;Godrej Sheet&apos;.</p>
                            <p>Now click on 'Orders' menu followed by clicking on 'Sheet Orders'.</p>
                            <p>Click on 'Register' button.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture171.png' />
                            </h4>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture172.png' />
                            </h4>
                            <p>It will popup a dialog window in which choose 'Sheet Validation' as order type.</p>
                            <p>Then choose the sheet template as mentioned before, that is, Godrej Sheet.</p>
                            <p>Choose the values for the other fields.</p>
                            <p>Click 'REGISTER ORDER' button.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture173.png' />
                            </h4>
                            <p>Enter the password in the popup window, followed by entering or choosing Reasons and comments.</p>
                            <p>Click 'SUBMIT' button.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture174.png' />
                            </h4>
                            <p>Now order is registered for validation.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture175.png' />
                            </h4>
                            <p>Click on &apos;OPEN&apos;button.</p>
                            <p>Complete entering of fields in &lsquo;Audit Trail&rsquo;. Click &lsquo;SUBMIT&rsquo; button.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture176.png' />
                            </h4>
                            <p>The sheet template opens up for verification.</p>
                            <p>Verify all whether all the fields and contents are ok.</p>
                            <p>Now click on 'Complete Task' to mark the completion of Validation task.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture177.png' />
                            </h4>
                            <p>In the 'E-signature' popup window enter password and comments, followed by checking the 'Yes, I agree' checkbox. Click &lsquo;SUBMIT&rsquo; button.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture178.png' />
                            </h4>
                            <p>&nbsp;</p>
                            <p>Close the sheet template.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture179.png' />
                            </h4>
                            <p>The validated sheet appears in &apos;My Orders&apos; page.</p>
                            </li>
                            </ul>
                        </li>
                        </ol>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6  text-left'>
                            <h4>Previous article</h4>
                            <Link href="../articeldetailsthree">How to approve and map sheet template</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../inventorytransactions">How to create inventory transactions</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default TemplateValidation; 