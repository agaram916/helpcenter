'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';

 const ArticelDetailstwo = () => {
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
                    <h1>Logilab ELN– how newly created users can start using the system</h1>
                    <section className='articel-content'>
                        <ol className='text-left'>
                        <li>Enter the newly created user name.</li>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/Pictureone.png' />
                        </h4>
                        <li>It will prompt the user to change the password.</li>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/Picturetwo.png' />
                        </h4>
                        <li>In order to enter the current password, check for the auto-generated email sent to the email id the newly created user. Open the mail and note down the current system-setup password.</li>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/Picturethree.png' />
                        </h4>
                        <li>Enter the current password in 'Old Password' field.</li>
                        <li>Enter the new password by carefully considering the password policy guidelines already setup in the system. Re-enter the same in 'Confirm Password' field.</li>
                        <li>Click on 'CREATE' button.</li>
                        </ol>
                        <p>'PASSWORD CREATED SUCCESSFULLY' message gets displayed.&nbsp;</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/Picturefour.png' />
                        </h4>
                        <ol className='text-left' start={7}>
                        <li>On the login page, enter the newly setup password in 'Password' field. The other fields such as User Role, site, Domain and Languages are defaulted from the system setup.</li>
                        <li>Click on 'Login' button to navigate to the system.</li>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/Picture5.png' />
                        </h4>
                        </ol>
                        <ol className='text-left' start={9}>
                        <li>Depending upon the user role setup, only those modules, screens and tasks will get displayed. In this case only Orders and Templates are assigned for this specific user and the other modules which are not assigned will not get displayed. In this way, the role-based access security is ensured.</li>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/Picture6.png' />
                        </h4>
                        </ol>
                        <p>&nbsp;</p>
                       
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../articeldetailsone" >Logilab ELN – Workflow Management</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../articeldetailsfour">How to assign user rights</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
              <Help/>
        </div>
    );
}

export default ArticelDetailstwo; 