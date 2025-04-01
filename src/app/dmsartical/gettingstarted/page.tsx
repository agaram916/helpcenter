'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const GettingStarted = () => {
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
                        <li><Link href="../dmstroublearticle">DMS Articles</Link></li>
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
                  <h1> Qualis DMS – Getting Started</h1>
                  <div className='articel-content'>
                    <h2>1.1Login to Qualis DMS</h2>
                        <p className='text-left'>To login to Qualis DMS, follow these steps:</p>
                        <p className='text-left'>1.Open Browser, in the address bar, type URL applicable (by checking with the system administrator) and then press ENTER. Qualis DMS login screen appears as shown in the figure:.</p>
                    
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture17.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Qualis DMS – Log in Screen</p>

                        <p className='text-left'>2.In the <b>Login ID</b> field, type the login id received from your administrator.</p>
                        <p className='text-left'>3.In the <b>Password field,</b> type valid password. </p>               
                        <p className='text-left'>4.In the <b>Role,</b> select your role.</p>
                        <p className='text-left'> 5.Click <b>LOGIN.</b></p>
                        <p className='text-left'> On successful login, Qualis DMS Dashboard appears.</p>
                        
                        <h3 className='pb-3'>1.2The User Interface</h3>
                        <p className='text-left'>The figure below highlights the main components of the Qualis DMS user interface.</p>                     
                        <p className='text-left'>(1) The Explorer pane, used for accessing commonly-used items such as menus and options. You will access menus from here.</p>
                        <p className='text-left'>(2) The Workspace area, which displays tabbed pages opened from the Explorer.</p>
                        <p className='text-left'>(2) The Workspace area, which displays tabbed pages opened from the Explorer.</p>
                        <p className='server text-left'>(3) Action menu that contains Add, Edit, Delete common options that are available for most of the masters, transactions and settings</p>
                        <p className='text-left'>(4) Filter/Search tool that most of the tabbed pages contain, which you can use to filter, sort and refine the information displayed..</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture18.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - User Interface Components</p>
                        <h3 className='pb-3'>1.2 The Explorer</h3>
                        <p>At the left of the user interface, the Explorer provides quick and easy access to commonly used tools. </p>
                        <h3 className='pb-3'>To open an item from the Explorer</h3>
                        <p className='text-left'>1.Click the item. The relevant information is displayed on a tabbed page in the Workspace as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture19.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Opening an item from the Explorer</p>
                        <h3 className='pb-3'>1.2.1.2The Workspace:</h3>
                        <p>The Workspace is the center of activity in Qualis DMS. Here, you can work with masters, manage documents and search for and display information. Items displayed in the Workspace open on tabbed pages.</p>
                        <p className='text-left'>When you first open Qualis DMS, the Home tabbed page is displayed.</p>
                        <p className='text-left'>2.To open an item in the Workspace, click an item in the Explorer</p>
                        <h3 className='pb-3'>To hide the Explorer:</h3>
                        <p className='text-left'>3.Click  <img  src='../../image/articel/dms/align.png' className='mx-2 w-auto'/> that appears on the top of the Explorer. </p>
                    </div>  
                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../dashboard'>DMS Dashboard and Alerts</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../mailconfiguration'>Qualis DMS Mail Configuration</Link>
                        </div>
                    </div>
                    </div>
            </div>
             </div>
         <Help/>
        </div>
    );
}

export default GettingStarted; 