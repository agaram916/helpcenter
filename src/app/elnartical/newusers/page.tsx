'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const NewUsers = () => {
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
                    <h1>Logilab ELN – How to create new users</h1>
                    <section className='articel-content'>                      
                             <p>1.After logging into Logilab ELN as administrator user, navigate to Setup page by clicking on Setup Menu. Click on &apos;User Master&apos; tab.</p>
                             <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture115.png' />
                            </h4>
                        
                       
                            <p>2.The list of existing users gets displayed.</p>
                            <p>3.Click on &apos;Add User&apos; button which will popup a dialog window in which the details of new users can be entered.</p>
                            <p>4.nter Username, Profile Name and Email ID which are mandatory fields.</p>
                        <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture116.png' />
                            </h4>
                      
                     
                            <p>5.Optionally, you can setup signature of the user by clicking on &apos;Attach Signature&apos; button, navigate to the file having signature in the local system and selecting it.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture117.png' />
                            </h4>
                      
                     
                            <p>6.Now the signature from the file is displayed.</p>
                            <p>7.ext, the user role to which the new user needs to be attached is selected from the drop-down. It may be single role or multiple roles. In the case of multiple roles, you need to configure the default user role.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture118.png' />
                            </h4>
                       
                    
                            <p>8.Click on &apos;SUBMIT&apos; button to save the record.</p>
                            <p>9.USER NAME SAVED SUCCESSFULLY  gets displayed and the newly created user gets listed on the User Master page.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture119.png' />
                            </h4>
                       
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../articeldetailsfour">How to Create and manage task</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../userrole"> How to create user role</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default NewUsers; 