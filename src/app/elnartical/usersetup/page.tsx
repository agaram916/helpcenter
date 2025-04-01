'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const Usersetup = () => {
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
                       <h1><strong>Logilab ELN – User Setup </strong></h1>      
                    <section className='articel-content'>
                    <h2>1.1&nbsp; User Role</h2>
                    <p>User Role screen enables the administrator to create and manage user roles that are used in user management, workflows and approval configuration.</p>
                    <h3>1.1.1&nbsp;&nbsp;&nbsp;&nbsp; Creating User Role</h3>
                    <p><strong>Note:</strong> For administrators the Site field will appear. Hence, administrator user can create site specific user roles.</p>
                    <ol>
                    <li>On the main menu click <img src='../../image/articel/eln/Setup.png' className='m-0 p-0 w-auto'/> and then click User Role. The User Role tab appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture351.png' className='p-0 my-3'/>  
                    </div>
                    <p className='figure mt-1'>FIGURE: Setup &ndash; User Role Screen</p>
                    <p>You can see the list of user roles already created.</p>
                    <ol start={2}>
                    <li>In the User Role tab, click Add User Role. The Add User Role dialog appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture352.png' className='p-0 my-3'/>  
                    </div>
                    <p className='figure mt-1'>FIGURE: Add User Role Dialog</p>
                    <ol start={3}>
                    <li>In the User Role field, type the name of the user role you want to create.</li>
                    <li>Click SUBMIT. You can see the new user role created appear in the user role list.</li>
                    </ol>
                    <h3>1.1.2&nbsp;&nbsp;&nbsp;&nbsp; Activating or Deactivating User Role</h3>
                    <p>By default, the user role created will be in active status.</p>
                    <ol>
                    <li>To deactivate the user role, in the User Role tab, select the user role from the list and then click Activate/Deactivate.</li>
                    </ol>
                    <p>User roles with Inactive status will not appear on the other screens.</p>
                    <ol start={2}>
                    <li>To activate user role, in the User Role tab, select the inactive user role and then click Activate/Deactivate. The user role is activated, and the user role Status appears Active.</li>
                    </ol>
                    <h3>1.1.3&nbsp;&nbsp;&nbsp;&nbsp; Edit User Role</h3>
                    <ol>
                    <li>In the User Role screen, select a user role to edit and then click Edit. The Edit User Role dialog appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture353.png' className='p-0 my-3'/>  
                    </div>
                    <p className='figure mt-1'>FIGURE: Edit User Role Dialog</p>
                    <ol start={2}>
                    <li>You can update the user role name and then click SUBMIT.</li>
                    </ol>               
                    </section>
                    <div className='prevartical '>
                    <div className='row my-5'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../site-master'>Site Master</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../projectteamsetup">Project Team Setup</Link>
                        </div>
                    </div>
                    </div>
                    
                </div>
             </div>
                <Help/>
        </div>
    );
}

export default Usersetup; 