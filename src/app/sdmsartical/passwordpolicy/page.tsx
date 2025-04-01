'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const PasswordPolicy = () => {
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
                        <li><Link href="../sdmstroublearticle">SDMS Articles</Link></li>
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
                    <h1>How to setup password policy</h1>
                    <p className='text-left'>To setup password policy, follow these steps:</p>    
                    <section className='articel-content'>
                    <p> 1.On the main menu click,<img  src='../../image/articel/SDMS/contact.png'  className='mx-2 w-auto'/> and then click Password Policy. The Password Policy screen appears as shown in the figure: </p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture66.png'  className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Password Policy Screen</p>
                        <p>You can set up password policy for database based logins and domain based logins.</p>
                        <p>2.By default you can setup password policy to <b>Database Based Logins..</b></p>
                        <p>3.Setup basic rules for the password such as<b> Minimum Password Length, Maximum Password Length, Password History,</b> Password Expiry duration and <b>Auto Lock Policy.</b></p>
                        <p>4.To setup complex password policy, click to select the <b>Complex Password Policy</b> check box.</p>
                        <p>5.Set up values for complex policies such as: Minimum number of capital characters, Minimum number of small characters, <b>Minimum number of numeric characters, and     Minimum number of special characters.</b></p>
                        <p>6.Click <b>Save..</b></p>                      
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                         <h4>Previous article</h4>
                            <Link href='../manageuser'>create and manage user account</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../lockinstruments'>lock instruments</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
           <Help/>        
        </div>
    );
}

export default PasswordPolicy; 