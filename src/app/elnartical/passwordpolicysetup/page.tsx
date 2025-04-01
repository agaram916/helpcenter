'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const Passwordpolicysetup = () => {

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
                  <h2><strong>Logilab ELN - Password Policy&nbsp;Setup</strong></h2>
                    
                    <section className='articel-content'>
                        <p>You can set up a password policy in the Password Policy screen.</p>
                        <ol>
                        <li>On the main menu click <img src='../../image/articel/eln/Setup.png' className='mx-2 w-auto'/>and then click <strong><strong>Password Policy</strong></strong>. The <strong><strong>Password Policy</strong></strong>&nbsp;tab appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture42.png' className='my-3 w-100'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Password Policy Screen</p>
                        <p><strong><strong>Note:</strong></strong>&nbsp;Administrators can set site specific password policies. Hence, for Administrator login the <strong><strong>Site Master</strong></strong>&nbsp;field appears. Select the site to set password policy.</p>
                        <ol>
                        <li>Setup basic rules for the password such as <strong><strong>Minimum password length </strong></strong>, <strong><strong> Maximum password length </strong></strong>, <strong><strong>Password history</strong></strong>, <strong><strong>Password expiry</strong></strong> duration and <strong><strong>A uto lock policy</strong></strong>.</li>
                        <li>To setup complex password policy, click to select the <strong><strong> Complex password policy</strong></strong> check box.</li>
                        <li>Set up values for complex policies such as: <strong><strong>Minimum number of uppercase characters</strong></strong>, <strong><strong> Minimum number of lowercase characters</strong></strong>, <strong><strong> Minimum number of numeric characters</strong></strong>, and<strong><strong> Minimum number of special characters</strong></strong>.</li>
                        </ol>
                        <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>Set Idle Timeout</strong></strong>&nbsp; field appears. By default, the idle timeout is set to 15 minutes.</p>
                             <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture43.png' className='my-3'/>  
                        </div>
                        <p>The administrator can enable the <strong><strong>Idle Timeout</strong></strong>&nbsp;check box and then set the idle timeout between 1-99 minutes. </p>
                        <ol start={4}>
                        <li>Click <strong><strong>Save</strong></strong>.</li>
                        </ol>
                        <p>&nbsp;</p> 
                    </section>
                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../domainsetup">Domain Setup</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../user-role">User Role</Link>
                        </div>
                    </div>
                    </div>
                    
                </div>
             </div>
                <Help/>
        </div>
    );
}

export default Passwordpolicysetup; 