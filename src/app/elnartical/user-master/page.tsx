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
                     <h1><strong>Logilab ELN – User Master </strong></h1>      
                    <section className='articel-content'>
                    <h2>1.2&nbsp; User Master</h2>
                    <p>User master enables us to create and manage user accounts.</p>
                    <p><strong>Note:</strong> For administrators the Site field will appear. Hence, administrator users can create site specific user accounts.</p>
                    <h3>1.2.1&nbsp;&nbsp;&nbsp;&nbsp; Adding a New User/User Account</h3>
                    <p>To create a new user account, follow these steps:</p>
                    <ol>
                    <li>On the main menu click <img src='../../image/articel/eln/Setup.png' className='m-0 p-0 w-auto'/>and then click User Master. The User Master tab appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture354.png' className='p-0 my-3'/>  
                    </div>
                    <p className='figure mt-1'>FIGURE: Setup &ndash; User Master Tab</p>
                    <p>In the User Master tab, you can see the list of users created. Also, options to add, edit, and retire users appears as shown in the above figure.</p>
                    <ol start={2}>
                    <li>Click Add User. The Create New User dialog appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture355.png' className='p-0 my-3'/>  
                    </div>
                    <p className='figure mt-1'>FIGURE: Create New User Dialog</p>
                    <ol start={3}>
                    <li>In the Username field, type a username for the user account.</li>
                    <li>In the Profile Name field type the designation/profile for the user account.</li>
                    <li>In the E-mail ID field type the email id of the user.</li>
                    <li>The Signature field helps to attach signatures to the user account. In the Signature field, click Attach Signature. In the Open dialog, select the signature file and then click Open.</li>
                    <li>In the User role field, user roles added in the User Role master appears. Select the user role to map to the username. You can select multiple user roles.</li>
                    <li>In the Select default user Role field, select the user role to set as default user role for the user.</li>
                    <li>Click SUBMIT.</li>
                    </ol>
                    <p>You can see the user account you just added listed in the user master and will be in active state with new ELN Unique ID generated as shown in the figure:</p>
                    <div className='inner-image'>
                         <img  src='../../image/articel/eln/Picture356.png' className='p-0 my-3'/>  
                    </div>
                    <p className='figure mt-1'>FIGURE: New User Account Created</p>
                    <p>The user will receive a mail with the login credentials and ELN login link as shown in the figure:</p>

                    <div className='inner-image'>
                         <img  src='../../image/articel/eln/Picture357.png' className='p-0 my-3'/>  
                    </div>
                    <p className='figure mt-1'>FIGURE: Mail with Login Credentials Received by the User</p>
                    <h3>1.2.2&nbsp;&nbsp;&nbsp;&nbsp; Editing User Details</h3>
                    <p>To edit user details, in the User Master tab, select the user, and then click Edit. In the Edit User dialog, do required changes and then click SUBMIT.</p>
                    <h3>1.2.3&nbsp;&nbsp;&nbsp;&nbsp; Activate User Accounts</h3>
                    <p>To activate the user account, in the User Master tab, select the inactive user account and then click Activate/Deactivate. The user account is activated, and the user Status appears Active.</p>
                    <h3>1.2.4&nbsp;&nbsp;&nbsp;&nbsp; Deactivate User Accounts</h3>
                    <p>To deactivate user accounts, in the User Master tab, select the active user account and then click Activate/Deactivate.</p>
                    <h3>1.2.5&nbsp;&nbsp;&nbsp;&nbsp; Unlock User Account</h3>
                    <p>The user account will be locked after three or more unsuccessful password attempts as defined in the Password Policy screen. The administrator can unlock the locked user accounts. To do so, in the User Master tab, select the user account that is locked and then click Unlock.</p>
                    <h3>1.2.6&nbsp;&nbsp;&nbsp;&nbsp; Reset Password</h3>
                    <p>To reset password, follow these steps:</p>
                    <ol>
                    <li>In the User Master tab, select the user account and then click Reset Password.</li>
                    <li>In the Audit Trail dialog, type valid Password, select Reason and type Comments and then click SUBMIT.</li>
                    </ol>
                    <p>The password will be reset. When you login for the next time the system prompts for new password.</p>
                    <h3>1.2.7&nbsp;&nbsp;&nbsp;&nbsp; Retire User</h3>
                    <p>A user account shall be retired for some reason. Once retired, the user account cannot be activated.</p>
                    <ol>
                    <li>In the User Master tab, select the user to retire and then click Retire. The status of the user account appears Retired.</li>
                    </ol>
                                  
                    </section>
                    <div className='prevartical '>
                    <div className='row my-5'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../user-role'>User Role</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../user-rights">User Rights</Link>
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