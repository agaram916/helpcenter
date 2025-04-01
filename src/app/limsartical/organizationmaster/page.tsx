'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const OrganizationMaster = () => {
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
                    <h1>Qualis LIMS – organization master</h1>
                    <section className='articel-content'>
                        <p>After logging into Qualis LIMS application as an administrator user with required privileges, navigate to Site page by clicking Organization Main menu followed by Site submenu.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization1.png' />
                        </h4>
                        <p>On the Site page, the existing list of sites will be displayed.</p>
                        <p>Click on  &apos;+ &apos; icon to add a new site.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization2.png' />
                        </h4>
                        <p>In 'Add Site' dialog window, enter valid values in the respective fields.</p>
                        <p>Click on 'Save' button, after completing the entry of values.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization3.png' />
                        </h4>
                        <p>The newly-added site record will be displayed in the Site page.</p>
                        <p>Let us now move to on to configure Department by clicking  &apos;Department &apos; page item in the Organization Submenu.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization4.png' />
                        </h4>
                        <p>Click on '+' icon to add a new Department.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization5.png' />
                        </h4>
                        <p>In 'Add Department' dialog window, enter valid values in the respective fields.</p>
                        <p>Click on 'Save' button, after completing the entry of values.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization6.png' />
                        </h4>
                        <p>The newly-added Department record will be displayed in the Department page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization7.png' />
                        </h4>
                        <p>Let us now move to on to configure Lab by clicking  &apos;Lab &apos;page item in the Organization Submenu.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/organization8.png' />
                        </h4>
                        <p>Click on  &apos;+ &apos;icon to add a new Lab.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization9.png' />
                        </h4>
                        <p>In  &apos;Add Lab &apos; dialog window, enter valid values in the respective fields.</p>
                        <p>Click on 'Save' button, after completing the entry of values.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/organization10.png' />
                        </h4>
                        <p>The newly-added Lab record will be displayed in the Lab page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization11.png' />
                        </h4>
                        <p>Let us now move to on to configure Section by clicking  &apos;Section &apos; page item in the Organization Submenu.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization12.png' />
                        </h4>
                        <p>Click on  &apos;+ &apos; icon to add a new Section.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization13.png' />
                        </h4>
                        <p>In  &apos;Add Section &apos; dialog window, enter valid values in the respective fields.</p>
                        <p>Click on  &apos;Save &apos; button, after completing the entry of values.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/organization14.png' />
                        </h4>
                        <p>The newly-added Section record will be displayed in the Lab page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization15.png' />
                        </h4>
                        <p>Now we need to map correct hierarchy of Site, Department, Lab and Section.</p>
                        <p>Click  &apos;Organization &apos; page item in the Organization Submenu.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization16.png' />
                        </h4>
                        <p>Choose site first followed by clicking on + icon which will open  &apos;Add Department &apos;dialog window.</p>
                        <p>Choose correct department from list of values and click 'Save' button.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization17.png' />
                        </h4>
                        <p>Repeat the same process to map subsequently Lab followed by Section.</p>
                        <p>Thus the organization hierarchy configured showing site, Department, Lab and Section relationship will be displayed.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/organization18.png' />
                        </h4>
                        <p>This completes the configuration of Organization master.</p>
                        <p>Logout of the application to navigate to login page.</p>
                        <p>&nbsp;</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../samplemaster"> Sample master configuration</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../contactsmaster">Contacts master configuration</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
             <Help/>
        </div>        
    );
}

export default OrganizationMaster; 