'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const NewPassword = () => {
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
                    <h1>Password Policy</h1>
                    <section className='articel-content'>
                        <p>Password policy can be set to control user authentication behavior. Password policy is must for regulatory compliance and also depends on the organisation policy defined for the individual applications.</p>
                        <p>Qualis LIMS enables you to create password policies for each role. You can also create multiple password policies for a role. </p>
                        <p>1.On the main menu, click, <img  src='../../image/articel/LIMS/configuration.png' className='w-auto mx-2'/> <b>User Management</b> and then click, <b>Password Policy</b>. The <b>Password Policy</b> screen appears as shown in the figure:</p>

                        <p>When you create a policy, it will be in the Draft state. You need to approve the policy to enforce. When a new policy is approved for a role, the existing policy will retire automatically.</p>
                        <p><b>Note:</b>When a new password policy is approved for a role, the password of the entire users in that user role will be changed.</p>
                        <p>Password Policy master is used to create and manage Password Policies. </p>
                        <h3>1.1Creating a New Password Policy</h3>
                        <p>To create a new Password Policy, follow these steps:</p>
                        <p className='figure mt-1'>1.On the main menu, click <img  src='../../image/articel/LIMS/configuration.png' className='w-auto mx-2'/>,  <b>User Managemen</b>t and then click, <b>Password Policy.</b> The  <b>Password Policy</b>screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture51.png'/>
                        </h4>
                        <p className='figure mt-1'> FIGURE: Password Policy Screen</p>
                        <p>To filter click <img  src='../../image/articel/LIMS/filter.png' className='w-auto mx-2'/> select the role and then click <b>Submit</b>. You can see the list of Password Policies created for the selected role. Options to add, edit, delete, approve and copy policy appear in the action menu.</p>
                        <p>2.Click. <img  src='../../image/articel/LIMS/plus.png' className='w-auto mx-2'/> The <b>Add Password Policy</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture52.png'/>
                        </h4>

                        <p className='figure mt-1'>FIGURE: Add Password Policy Screen.</p>
                        <p>3.In the <b>Policy Name</b>field, type the name for the policy you want to create..</p>
                        <p>4.Fill in all fields appropriately</p>

                        <p>5.Click to turn on the <b>Expiry Required </b>option if you want the password to be expired after a period. In the <b>Expiry Policy Days</b> field, type number of days after the password should expire. In the <b>Remainder Days</b> field, type number of days before expiry of the password the remainder to be sent.</p>
                       <p>6.Click <b>Submit.</b></p>
                        <p>You can see the password policy you just created listed in the Password Policy master </p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                          <h4>Previous article</h4>
                            <Link href="../instrumentmaster"> How to Add an Instrument to Instrument Master</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4 >Next article</h4>
                           <Link href="../registrationtype"> Registration Type</Link>
                        </div>
                    </div>
                    </div>      
                </div>
             </div>
            <Help/>
        </div>
    );
}
export default NewPassword; 