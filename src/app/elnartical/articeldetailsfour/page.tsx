'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const ArticelDetailsfour = () => {
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
                    <h1>Logilab Eln – how to assign User Rights</h1>
                    <section className='articel-content'>
                        <p>We need to assign User Rights to user roles in order to authorise the use of specific modules, screens and tasks to the right users.</p>
                            <p>1.After logging into Logilab ELN as administrator user, navigate to Setup page by clicking on Setup Menu.</p>
                            <h4 className='inner-image'>
                                <img className='w-100 m-0 p-0' src='../../image/articel/Picture17.png' />
                            </h4>
                            <p>2.Click on 'User Rights' tab which will open the page in which the currently configured user rights are displayed.</p>
                            <p>3.Select the user role for which the rights needs to be assigned from the drop-down.</p>
                            <p>4.Select the specific privileges such as Create, Edit, Delete and View for the specific tasks as shown in this example. This will ensure the role-based user access controls so that the users belonging to the particular user group can access only the permitted modules, screens and tasks and not the others.</p>
                            <h4 className='inner-image'>
                                <img className='w-100 m-0 p-0' src='../../image/articel/Picture18.png' />
                            </h4>
                            <p>5.Once the action is completed, click on 'SAVE' button. The message 'CHANGES SAVED SUCCESSFULLY' is displayed.</p>
                            <h4 className='inner-image'>
                                <img className='w-100 m-0 p-0' src='../../image/articel/Picture19.png' />
                            </h4>              
                            <p>6.We can now logout of the system by clicking 'Logout' button.</p>
                            <h4 className='inner-image'>
                                <img className='w-100 m-0 p-0' src='../../image/articel/Picture20.png' />
                            </h4>
                       
                            <p>7.It will prompt to enter the confirmation message in the popup dialog box. Click on 'Yes' button to confirm.</p>
                            <h4 className='inner-image'>
                                <img className='w-100 m-0 p-0' src='../../image/articel/Picture21.png' />
                            </h4>
                            <p>8.It will navigate back to the system login page.</p>
                            <h4 className='inner-image'>
                                <img className='w-100 m-0 p-0' src='../../image/articel/Picture22.png' />
                            </h4>
                    </section>
                    <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                           <Link href="../articeldetailstwo">How newly created users can start using the systems</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../newusers">How to create new users</Link>
                        </div>
                    </div>
                    </div>                 
                </div>
             </div>
            <Help/>
        </div>
    );
}
export default ArticelDetailsfour; 