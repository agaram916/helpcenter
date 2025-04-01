'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const Testmanagement = () => {
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
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
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
                        <li><Link href="../limstroublearticle">LIMS Article</Link></li>
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
                    <h1>Qualis LIMS – Test Management</h1>
                    <section className='articel-content'>
                         <p>After logging into Qualis LIMS application as an administrator user with required privileges, click on 'Method Category' page item under Test Management submenu which is under Master module.</p>
                         <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test1.png' />
                        </h4>
                        <p>On 'Method Category' page, the list of Method categories already created will be displayed.</p>
                        <p>Click on '+' icon to create a new method category.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test2.png' />
                        </h4>
                        <p>It will open up a dialog window in which enter the values of fields such as Method Category and Description.</p>
                        <p>Click on 'Save' button to complete creation of method category.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test3.png' />
                        </h4>
                        <p>The newly-created method category will get listed on Method Category page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test4.png' />
                        </h4>
                        <p>If required, continue to create more method categories as mentioned above.</p>
                        <p>Let us move on to create a new method by clicking on 'Method' page item under Test Management submenu.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test5.png' />
                        </h4>
                        <p>On 'Method' page, the list of Methods already created will be displayed.</p>
                        <p>Click on '+' icon to create a new method category.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test6.png' />
                        </h4>
                        <p>It will open up a dialog window in which enter the values of fields such as Method Category, Method Name and Remarks. Enter valid valid values in the fields. Depending upon the optional requirement of Method Valid, choose the option along with Validity Start and End Dates.</p>
                        <p>Click on 'Save' button to complete creation of method.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test7.png' />
                        </h4>
                        <p>If required, add more methods as mentioned above.</p>
                        <p>Let us move on to create a new method by clicking on 'Test Category' page item under Test Management submenu.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test8.png' />
                        </h4>
                        <p>On 'Test Category' page, the list of Test Categories already created will be displayed.</p>
                        <p>Click on '+' icon to create a new Test category.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test9.png' />
                        </h4>
                        <p>It will open up a dialog window in which enter the values of fields such as Test Category and Description.</p>
                        <p>Click on 'Save' button to complete creation of Test category.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test10.png' />
                        </h4>
                        <p>The newly-created Test category will get listed on Test Category page.</p>
                        <p>Let us move on to create a new Test by clicking on 'Test Master' page item under Test Management submenu.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test11.png' />
                        </h4>
                        <p>By clicking on 'Filter' icon, choose the appropriate Test Category.</p>
                        <p>Click on '+' icon to create a new Test under the selected Test Category.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test12.png' />
                        </h4>
                        <p>On 'Add Test' dialog window, enter valid appropriate values for the fields.</p>
                        <p>On completion of entry of fields, click on 'Save' button.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test13.png' />
                        </h4>
                        <p>The newly created Test will be displayed on 'Test Master' page on the right hand panel.</p>
                        <p>This has various subtabs for configuring additional fields.</p>
                        <p>In order to add parameter, click on 'Parameter' subtab followed by clicking on '+' ' Parameter' link.</p>
                        <p>In 'Add Parameter' popup dialog window, enter the valid appropriate values for various fields.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test14.png' />
                        </h4>
                        <p>If you want to add additional parameters, click on 'Save and Continue' button.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/test15.png' />
                        </h4>
                        <p>Repeat the above mentioned procedure to add more parameters.</p>
                        <p>After entering all the required parameters, click on 'Save' button to complete this task.</p>
                        <p>By clicking additional subtabs such as Section, Method, Instrument Category, File and Container type, corresponding values can be configured and mapped to this Test.</p>
                        <p>After completing configuration of Test Management Master, log out of the application to navigate to login page.</p>
                    </section>
                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../usermanagement'>User management</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../samplemaster'>Sample master configuration</Link>
                        </div>
                    </div>
                    </div>
                  
                </div>
                </div>
                <Help/>
                <Footer/>
        </div>
    );
}

export default Testmanagement; 