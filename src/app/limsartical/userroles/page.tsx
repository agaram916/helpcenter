'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const UserRoles = () => {
    const { showButton, backToTop, isFixed } = useScrollButton();
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
  
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
                    <h1>How to Map User Roles to the Workflows </h1>
                    <section className='articel-content'>
                        <p>User Role Configuration screen helps the administrator to map user roles to the workflows. To do so, follow these steps:</p>
                        <p>1.On the main menu, click <img  src='../../image/articel/LIMS/configuration.png' className='mx-2 w-auto'/> <b>User Management</b> and then click <b>User Role Configuration</b>. The <b>User Role Configuration </b>screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className=' my-3 p-0 w-100' src='../../image/articel/LIMS/Picture47.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Role Configuration Screen</p>
                        <p>You can see the list of user role and workflows.</p>
                        <p>1.Click to map the user roles to the workflow as shown in the above figure.</p>
                        <p> <b>Note:</b> You can map a user role to either Approval Flow or Result Entry Flow. And you cannot map a user to both Approval Flow and Result Entry Flow.</p>
                        <p>In the User Role Template screen, user roles mapped to the workflow are listed for selection in the level field.</p>

                        <h3>1.1Filter User Roles</h3>
                        <p>1.In the User Role Configuration screen, in the <b>User Role Name</b> field, click <img  src='../../image/articel/LIMS/pipe.png' className='mx-2 w-auto'/> . The filter appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className=' my-3 p-0' src='../../image/articel/LIMS/Picture48.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Filter User Role Name</p>
                        <p>2.Use the filter to search for the user role names and then click <b>Filter.</b></p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../approvalflows">How to define approval flows using user role template</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4 >Next article</h4>
                           <Link href="../receivinggoods"> How to Receive Goods</Link>
                        </div>
                    </div>
                    </div>    
                </div>
             </div>
            <Help/>
        </div>
    );
}
export default UserRoles; 