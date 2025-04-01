'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const ProjectTeams = () => {
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
                    <h1>Logilab ELN – how to manage project and project Teams</h1>
                    
                    <section className='articel-content'>
                        <ol>
                        <li>
                            <ul>
                            <li>
                            <p>After logging into Logilab ELN as administrator user, navigate to &lsquo;Project Team&rsquo; page by clicking on &lsquo;Setup&rsquo; menu item and then &lsquo;Project Team&rsquo; submenu item.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture139.png' />
                            </h4>
                            <p>'Project Team' subpage will be displayed.</p>
                            <p>On the left hand side, the existing project teams will be displayed and on the right hand side, the corresponding team members' user names will be displayed.</p>
                            <p>In order to create a new project team, enter the name of the team in 'Project Team' field.</p>
                            <p>From the list of all users belonging to the site of the logged-in user, select only those users who are need to be part of this project team.</p>
                            <p>Click 'Save' button to complete the creation of project team.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture140.png' />
                            </h4>
                            <p>The meesage 'PROJECT TEAM SAVED SUCCESSFULLY' gets displayed.</p>
                            <p>The newly created project team will get listed on the left hand side.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture141.png' />
                            </h4>
                            <p>This completes the creation of new project team.</p>
                            <p>Let us move on to how to create project in Logilab ELN.</p>
                            <p>On the application home page, click on Menu item 'Masters'. This will expand to display various submenu items under Masters.</p>
                            <p>Click on 'Project Master'.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture142.png' />
                            </h4>
                            <p>'Project Master' subpage will be displayed which will list out the projects created so far.</p>
                            <p>Click on 'ADD' button.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture143.png' />
                            </h4>
                            <p>'Add New Project' pop-up window will be displayed in which the new project name can be entered.</p>
                            <p>This is followed by selecting project team to be attached to this project. It means that this new project can be accessed only by members belonging to that project team.</p>
                            <p>Click on 'SUBMIT' button.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture144.png' />
                            </h4>
                            <p>The message 'PROJECT CREATED SUCCESSFULLY' will get displayed.</p>
                            <p>The newly created project gets listed.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture145.png' />
                            </h4>
                            <p>If you want to edit the details, click 'Edit' button after selecting the project.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture146.png' />
                            </h4>
                            <p>On 'Edit Project' popup window, optionally change the details such Project Name and Project Team. In order to save, click 'SUBMIT' button; otherwise click on 'CLOSE' button not to save.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture147.png' />
                            </h4>
                            <p>In order to retire any project, select the project and click on 'Retire' button. This will make the project permanently retire and cannot be used in future.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture148.png' />
                            </h4>
                            <p>This requires user confirmation as shown.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture149.png' />
                            </h4>
                            <p>The message 'PROJECT RETIRED SUCCESSFULLY' is displayed.</p>
                            <p>Logout of the application to navigate back to login page.</p>
                            <h4 className='inner-image'>
                                <img className='w-100' src='../../image/articel/Picture150.png' />
                            </h4>
                            </li>
                            </ul>
                        </li>
                        </ol>   
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../userrole"> How to create user role</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../registersheetorders">Register sheet orders</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
             <Help/>
        </div>
    );
}
export default ProjectTeams; 