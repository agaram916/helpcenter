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
                     <h1><strong>Logilab ELN – User Rights </strong></h1>      
                    <section className='articel-content'>
                    <h2>1.3&nbsp; Set Access Rights to User Roles</h2>
                    <p>To define access rights to the user roles, follow these steps:</p>
                    <ol>
                    <li>On the main menu click <img src='../../image/articel/eln/Setup.png' className='m-0 p-0 w-auto'/>and then click User Rights. The User Rights tab appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                         <img  src='../../image/articel/eln/Picture358.png' className='p-0 my-3'/>  
                    </div>
                    <p className='figure mt-1'>FIGURE: Setup &ndash; User Rights Tab</p>
                    <p>In the User Rights tab, you can see the list of modules, screens in each module and tasks in each screen in ELN. And for each task you can define create, edit, delete/retire and view rights for the selected user role.</p>
                    <ol start={2}>
                    <li>From the User Role field, select the user role you want to define rights.</li>
                    <li>Click to check boxes under Create / Edit / Delete/Retire/View for the tasks in the modules that are applicable for the user role.</li>
                    </ol>
                    <p><strong>Note:</strong>When you enable Create / Edit / Delete/Retire rights for a task, the View option is enabled automatically. You cannot disable the View option until all the Create, Edit and Delete/Retire options are disabled.</p>
                    <ol start={4}>
                    <li>Click SAVE.</li>
                    </ol>
                    <p>Refer the following table for more details about create, edit and view access available for the tasks in each module in ELN and visibility of controls:</p>   
                    </section>
                    <div className='prevartical '>
                    <div className='row my-5'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../user-master'>User Master</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../project-master">Project master</Link>
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