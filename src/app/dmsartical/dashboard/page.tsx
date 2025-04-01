'use client';
import useScrollButton from '@/components/usescrollbutton';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image'
import Help from '@/components/help';

 const Dashboard = () => {
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
                  <h1> Qualis DMS – Dashboard and Alerts</h1>
                  <div className='articel-content'>
                    <h2>1.1Dashboard</h2>
                    <h3 className='text-left mt-5'>1.1.1Dashboard Rights</h3>
                        <p className='text-left'>Dashboard Rights screen enables you to set dashboard rights to the user. You can define dashboard rights in the user role level by adding/removing dashboard types for the selected role. You can also set dashboard rights to the individual user. </p>
                        <p className='text-left'>To set dashboard rights, follow these steps:.</p>

                        <p className='text-left'>1.On the Explorer, click <b>DASHBOARD, DashBoard </b>and then click Dashboard Rights. The <b>Dashboard Rights</b> screen rights to the individual user level.</p>
                        <p className='text-left'>2.Under <b>User Levels</b> you can see the list of roles. Click to select a role. Now you can see the dashboards added to the role selected appears as shown in the figure:</p>
                
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture13.png' className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Dashboard Rights Screen</p>
                        <p>3. Under <b>User Level</b>, select the <b>User Role</b> to set dashboard rights to the role level. .</p>
                        <p>4.Click <img  src='../../image/articel/dms/plusminus.png' className='mx-2 w-auto'/>   . The DashBoards dialog appears as shown in the figure:</p>
                            
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture14.png' className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add / Remove Dashboard</p>

                        <p className='server text-left'>5.Add / remove dashboards for the selected user role and then click OK..</p>
                        <p className='text-left'>Same way, you can set dashboard rights for the other roles.</p>
                    
                    </div>
                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../dmsconfiguration'> Dashboard and Alerts</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../gettingstarted'> Getting Started</Link>
                        </div>
                    </div>
                    </div>
            </div>
             </div>
         <Help/>
        </div>
    );
}

export default Dashboard; 