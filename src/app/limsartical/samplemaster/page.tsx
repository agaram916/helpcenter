'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';


 const SampleMaster = () => {
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
                    <h1>Qualis LIMS – sample master configuration</h1>
                    <section className='articel-content'>
                        <p>After logging into Qualis LIMS application as an administrator user with required privileges, click on  &apos;Sample Category &apos; page item under  &apos;Sample &apos; submenu which is under Master module.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/sample1.png' alt='Description of the image'/>
                        </h4>
                        <p>On  &apos;Sample Category &apos; page, the list of Sample categories already created will be displayed.</p>
                        <p>Click on  &apos;+ &apos;icon to create a new Sample category.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/sample2.png' />
                        </h4>
                        <p>It will open up a dialog window in which enter the values of fields such as Sample Category, Description and option of 'Category Based Flow'</p>
                        <p>Click on  &apos;Save &apos;button to complete creation of Sample category.</p>
                        <h4 className='inner-image'>
                            < img className='w-100 m-0 p-0' src='../../image/articel/LIMS/sample3.png'  alt='Description of the image'/>
                        </h4>
                        <p>The newly-created Sample category will get listed on Sample Category page.</p>
                        <p>You also have edit and delete options available on Sample Category page.</p>
                        <h4 className='inner-image'>
                            < img className='w-100 m-0 p-0' src='../../image/articel/LIMS/sample4.png' alt='Description of the image' />
                        </h4>
                        <p>Let us move on to create a new Sample type by clicking on 'Sample Type' page item under Sample submenu.</p>
                        <h4 className='inner-image'>
                            < img  className='w-100 m-0 p-0' src='../../image/articel/LIMS/sample5.png' alt='Description of the image'/>
                        </h4>
                        <p>On  &apos;Sample Type &apos; page, the list of Sample types already created will be displayed.</p>
                        <p>Click on  &apos;+ &apos;icon to create a new Sample type.</p>
                        <h4 className='inner-image'>
                            < img className='w-100 m-0 p-0' src='../../image/articel/LIMS/sample6.png' alt='Description of the image' />
                        </h4>
                        <p>It will open up a dialog window in which enter the values of fields such as Sample Category, Sample type and Description.</p>
                        <p>Click on  &apos;Save &apos; button to complete creation of method.</p>
                        <h4 className='inner-image'>
                            < img className='w-100 m-0 p-0' src='../../image/articel/LIMS/sample7.png'  alt='Description of the image'/>
                        </h4>
                        <p>If required, add more Sample types as mentioned above.</p>
                        <p>After completing configuration of Sample Master, log out of the application to navigate to login page.</p>
                        <p>This completes the demonstration of Sample Master Configuration in Qualis LIMS.</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../testmanagement'>Test management configuration</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../organizationmaster'>Organization master configuration</Link>
                        </div>
                    </div>
                    </div>                 
                </div>
                </div>
                <Help/>
        </div>
    );
}

export default SampleMaster; 