'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

const ManageUser = () => {
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
                    <h1>How to create and manage new user group</h1>
                    <h2 className='text-left'>Create new user group</h2>
                    <p className='text-left'>To create/add a new user, follow these steps:</p>    
                    <section className='articel-content'>
                    <p> 1.On the main menu click,<img  src='../../image/articel/SDMS/contact.png' className='mx-2 w-auto'/>  and then click <b>User Management. </b>The In the User Management screen, click <b>User Master.</b> The <b>User Master</b> tab appear as shown in the figure: </p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture62.png'  className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Management - User Master Screen</p>
                        <p>2.In the <b>User Master</b> screen, in the <b>Group Name </b>field select the user group you want to create user. And then click. <img  src='../../image/articel/SDMS/addplus.png' className='mx-2 w-auto'/> The add user dialog appears as shown in the figure:.</p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture63.png'  className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add User Dialog</p>
                        <p>3.In the <b>User Name </b>field, type the user name that you want to create for the user to login to SDMS.</p>
                        <p>4.In the <b>Profile Name </b>field, type the designation of the user.</p>
                        <p>5.In the <b>Email ID</b> field, type the user email id that can be used to recover forgot password.</p>
                        <p>6.In the <b>Profile Image</b> field, click Choose File and select the profile photo of the user.</p>
                        <p>7.From the <b>Group Name</b> field, select the user group where you want to group this user.</p>
                        <p>8.You can set the <b>Default Login Site </b>in the edit user screen.</p>
                        <p>9.Click <b>Approve </b>to approve the user. You can also approve user later.</p>
                        <p>10.Click <b>Submit</b>.</p>
                        <h2 className='text-left'>Other options in the User master screen</h2>
                        <h2>Edit User</h2>
                        <p>1.On the main menu click  <img src='../../image/articel/SDMS/contact.png' className='mx-2 w-auto'/>, and then click <b>User Management.</b> In the User Management screen, click <b>User Master. </b></p>
                        <p>2.In the<b>User Master </b> tab select the user you want to edit and then click <img src='../../image/articel/SDMS/edit.png' className='mx-2 w-auto'/> . The <b>Edit User</b> dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture64.png'  className='my-3 p-0 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:  Edit User Dialog</p>
                        <p>3.In the <b>Default Login Site</b> field, select the site the user can login by default. In the Login screen the Site field will be automatically filled if the <b>Default Login Sit</b>e field is set here.</p>
                       <p> <b>Note:</b> You cannot edit <b>Username </b>and <b>Approve</b> fields.</p>
                        <p>4.Do required changes and then click <b>Submit </b>to save the changes</p>
                        <h2>Retire User Account</h2>
                        <p>If a user account is no longer required, you can retire the user account. To do so, follow these steps:</p>
                        <p><b>Warning:</b> An user account once retired cannot be activated again. </p>
                        <p>1.In the User Master tab, select the user you want to retire and then click <img  src='../../image/articel/SDMS/Retair.png' className='mx-2 w-auto'/> </p>
                        <p>2.An <b>Audit Trail</b> screen appears for authentication. Type your password, reason and comments appropriately and then click <b>Submit.</b></p>
                        <p> <b>Note:</b> The user account is retired. Hence, you cannot activate, edit or approve the user account.</p>
                        <h2 className='text-left'>Reset Password</h2>
                        <p>In the <b>User Master</b> tab, select the user account and then click.<img  src='../../image/articel/SDMS/power.png' className='mx-2 w-auto'/>  The user is allowed to reset the password on their next login.</p>
                       <h2>Unlock</h2>
                       <p>In the User Master tab, select the user account and then click.<img  src='../../image/articel/SDMS/unlock.png' className='mx-2 w-auto'/> The user is allowed to reset the password on their next login.</p>

                      <h2>Active/Deactive</h2> 
                        <p>You can temporarily deactivate a user account for some reasons. To do so, follow these steps:</p>
                        <p>1.In the User Master tab, select the user you want to deactivate and then click</p>
                        <ul>
                            <li><img  src='../../image/articel/SDMS/Active.png' className='mx-2 w-auto'/></li>
                        </ul>
                        
                        <p>2.An audit trail screen appears for authentication. Type your password, reason and comments appropriately and then click <b>Submit.</b></p>
                        <p>Note: The user account is deactivated. Hence, the useraccount cannot be used untill it is activated again.</p>
                        <p>3.To activate user account, select the user you want to activate and then click .</p>
                        <ul>
                            <li><img  src='../../image/articel/SDMS/Active.png ' className='mx-2 w-auto'/></li>
                        </ul>
                        
                        <p>4.An audit trail screen appears for authentication. Type your password, reason and comments appropriately and then click <b>Submit</b></p>
                        <h2>Approve</h2>
                        <p>While creating a user account, if it is not approved then the user account has to be approved to use it.</p>
                        <p>1.Select the user account you want to approve and then click<b>Approve.</b> </p>
                     </section>
                     <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../managenew'>How to create and manage new user group</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../passwordpolicy'>How to setup password policy</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Help/>        
        </div>
    );
}

export default ManageUser; 