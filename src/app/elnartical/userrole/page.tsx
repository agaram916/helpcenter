'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help'; 
import { SyncLoader } from 'react-spinners';

 const UserRole = () => {
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
                    <h1>Logilab ELN - How to create User Role</h1>
                    
                    <section className='articel-content'>
                        <ol>
                            <li>
                                <ul>
                                    <li>After logging into Logilab ELN as administrator user, navigate to Setup page by clicking on Setup Menu.</li>
                                    <h4 className='inner-image'>
                                        <img className='w-100' src='../../image/articel/Picture120.png' />
                                    </h4>
                                </ul>
                                <ul>
                                    <li>On the Setup page, click on 'User Role' submenu to navigate to the page where user roles can be created, edited, activated or deactivated. In this page, the list of user roles already created will be displayed.</li>
                                    <h4 className='inner-image'>
                                        <img className='w-100' src='../../image/articel/Picture121.png' />
                                    </h4>
                                </ul>
                                <ul>
                                    <li>Click on 'Add User Role' button.</li>
                                    <li>'Add User Role' popup dialog window is displayed in which the new user role can be entered.</li>
                                    <h4 className='inner-image'>
                                        <img className='w-100' src='../../image/articel/Picture122.png' />
                                    </h4>
                                </ul>
                                <ul>
                                    <li>Enter the name of the User Role that is to be created and click on 'SUBMIT' button.</li>
                                    <h4 className='inner-image'>
                                        <img className='w-100' src='../../image/articel/Picture123.png' />
                                    </h4>
                                </ul>
                                <ul>
                                    <li>A popup message 'USER ROLE ADDED SUCCESSFULLY' appears.</li>
                                    <h4 className='inner-image'>
                                        <img className='w-100' src='../../image/articel/Picture124.png' />
                                    </h4>
                                </ul>
                                <ul>
                                    <li>The newly created user role gets listed and displayed on the page.</li>
                                    <li>Optionally you can click the other buttons such as 'Edit' or 'Activate/Deactivate' for updating the existing user roles.</li>
                                </ul>
                            </li>
                        </ol>
                    </section>
                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../newusers">How to create new users</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../projectteams">How to manage project and project teams</Link>
                        </div>
                    </div>
                    </div>
                    
                </div>
             </div>
                <Help/>
        </div>
    );
}

export default UserRole; 