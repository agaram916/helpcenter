'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
const Usermanagement = () => {
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
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
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
                    <h1>Qualis LIMS – user management</h1>
                    <section className='articel-content'>
                        <p>After logging into Qualis LIMS application as an administrator user with required privileges,</p>
                        <p>click on &apos; Designation&apos; page item under User Management submenu under Master module.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement1.png' />
                        </h4>
                        <p>On Designation page, the list of designations already created will be displayed.</p>
                        <p>Click on + icon to add a new designation.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement2.png' />
                        </h4>
                        <p>On Add Designation dialog window, enter valid values in the fields.</p>
                        <p>Click on &apos; Save&apos; button after completing the entry of values.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement3.png' />
                        </h4>
                        <p>The newly-created Designation will be listed in Designation page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement4.png' />
                        </h4>
                        <p>Let us move on to configure User role by clicking &apos; User Role&apos; page item.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/usermanagement5.png' />
                        </h4>
                        <p>On &apos; User Role&apos; page, the list of user roles already created will be displayed.</p>
                        <p>Click on + icon to add a new user role.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement6.png' />
                        </h4>
                        <p>On Add User Role dialog window, enter valid values in the fields.</p>
                        <p>Click on &apos; Save&apos; button after completing the entry of values.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement7.png' />
                        </h4>

                        <p>The newly-created User role will be listed in User Role page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/usermanagement8.png' />
                        </h4>
                        <p>Now we need to configure Password policy applicable for the newly-created User role.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement9.png' />
                        </h4>
                        <p>Click on &apos; Password Policy&apos; page item, which will navigate to Password Policy page and displays the password policy records already created.</p>
                        <p>To create a new password policy, click on filter icon and select the user role first.</p>
                        <p>Click on + item which will open up &apos; Add Password Policy&apos; dialog window.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement10.png' />
                        </h4>
                        <p>Enter the Policy Name followed by other policy requirements as shown. This way you can optionally setup a password policy ranging from either simple one to more complex one.</p>
                        <p>Click on &apos; Save&apos; button after completing the entry of values.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement11.png' />
                        </h4>
                        <p>The policy thus created is in &apos; Draft&apos; status.</p>
                        <p>Click on &apos; Approve&apos; icon to change the status to approved one.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement12.png' />
                        </h4>
                        <p>If you want to create a new password policy superseding the already-approved one, click on + icon.</p>
                        <p>Follow the same above-mentioned procedure to create this new policy.</p>
                        <p>When you approve this newly-created policy, the already existing policy will be automatically retired, that is, its status will be changed from Approved to Retired.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/usermanagement13.png' />
                        </h4>
                        <p>There is an option to copy the existing policy to the new one and make modifications.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement14.png' />
                        </h4>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/usermanagement15.png' />
                        </h4>
                        <p>The delete option will work only on the policies which are in &apos; Draft&apos; status and not &apos; Approved&apos; ones.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement16.png' />
                        </h4>
                        <p>Let us move on to the next step, that is, screen rights configuration to the user roles.</p>
                        <p>Click on &apos; Screen Rights&apos; page item.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement17.png' />
                        </h4>
                        <p>On the Screen Rights page, first select the user role by clicking on Filter icon.</p>
                        <p>Click on + item which will open up Add Screen Rights dialog window.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement18.png' />
                        </h4>
                        <p>Select either one or multiple roles or choose Select all option.</p>
                        <p>Click on &apos; Save&apos; button.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement19.png' />
                        </h4>
                        <p>On the left hand panel, the list of selected screens will be displayed for selection.</p>
                        <p>On the right hand panel, the screens and control names will be displayed with option to select or deselect the control rights and e-Signature.</p>
                        <p>Select or deselect the control rights and or e-signature option for the screens.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement20.png' />
                        </h4>
                        <p>There is an option to group screen-wise controls for easy identification and selection.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement21.png' />
                        </h4>
                        <p>Let us proceed now to MIS rights by clicking the page item under User Management submenu.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement22.png' />
                        </h4>
                        <p>Select the user role for which MIS rights needs to be assigned.</p>
                        <p>On the right hand panel, there are various subtabs such as Report rights, Dashboard Rights, Dashboard Home rights, Alert rights and Alert Home rights.</p>
                        <p>Choose the tab, click on &apos; Report Rights&apos; link which will open-up the respective rights dialog window.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement23.png' />
                        </h4>
                        <p>Choose the rights from the list of values and then click on &apos; Save&apos; button.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement24.png' />
                        </h4>
                        <p>Repeat the process for other MIS rights the same way as described.</p>
                        <p>Having completed MIS rights, let us proceed to User Role configuration by clicking on the same page item.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement25.png' />
                        </h4>
                        <p>On the user role configuration page, the ability to perform approval, result entry and project-related tasks can be provided for different user roles.</p>
                        <p>It can be done by either enabling or disabling the options by slider controls.</p>
                        <p>Please note that there will be only one role that can be assigned with Result Entry Flow.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement26.png' />
                        </h4>
                        <p>Let us now move on to create users by clicking on &apos; Users&apos; page item.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement27.png' />
                        </h4>
                        <p>The list of users will be displayed on the left hand side panel whereas the details about the users will be displayed on the right hand side panel.</p>
                        <p>Click on + icon to create a new user.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement28.png' />
                        </h4>
                        <p>On the &apos; Add Users&apos; page, enter valid values in the fields displayed.</p>
                        <p>There are also options to attach signature and photo image for the users.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement29.png' />
                        </h4>
                        <p>On completing the entry of the values, click on &apos; Save&apos; button.</p>
                        <p>The newly-created user details will be displayed on the user home page.</p>
                        <p>There is an option to add this user to additional sites if required.</p>
                        <p>There are tabs for role and deputy user configuration.</p>
                        <p>By clicking &apos; Role&apos; tab, additional roles can be assigned &nbsp;for the user.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement30.png' />
                        </h4>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement31.png' />
                        </h4>
                        <p>There is also an option to change the Default role for the user by clicking Edit icon.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement32.png' />
                        </h4>
                        <p>There is a facility to configure a deputy user for this user so that in the absence of the user, the deputy user attached can perform assigned actions such as approvals, etc.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement33.png' />
                        </h4>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement34.png' />
                        </h4>
                        <p>After choosing the option &apos; Is Active&apos; for the deputy user, the same can be used for performing the tasks originally assigned for the current user.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement35.png' />
                        </h4>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0
                            ' src='../../image/articel/LIMS/usermanagement36.png' />
                        </h4>
                    </section>
                    <div className='prevartical mt-4'>
                        <div className='row'>
                            <div className='col-6 text-left'>
                                {/* <h4 className='text-center'>Previous article</h4>
                            <a href='#'>Why are my projects failing to load?</a> */}
                            </div>
                            <div className='col-6 text-right'>
                                <h4 className='left'>Next article</h4>
                                <Link href="../testmanagement"> Test management configuration</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Help/>
        </div>
    );
}

export default Usermanagement; 