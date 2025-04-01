'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const Masters = () => {
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
                    <h1><strong>Logilab ELN – site master </strong></h1>                    
                    <section className='articel-content'>                                      
                    <p>Setup module helps the administrator to create and manage user roles, user account, domain etc.</p>
                    <p><strong>Note:</strong> The Site master, Domain&nbsp; and Active User screens are visible only for the admin users. Other users cannot see these screens.</p>
                    <h2>1.1&nbsp; Site Master</h2>
                    <p>For Administrators</p>
                    <p>When you login as administrator, you can see the site master in the Setup module. You add and manage sites in the site master. In addition, the site field will appear in each master screen. The administrator can add and manage master records to the selected sites.</p>
                    <p>For other users</p>
                    <p>The site field will not appear in the master screens. Instead, the records added will be added to the default site mapped to the user.</p>
                    <p>Site master enables the administrator to add and manage sites in ELN. The Site master is visible only to the admin users.</p>
                    <ol>
                    <li>On the main menu click <img src='../../image/articel/eln/Setup.png' className='m-0 p-0 w-auto'/>and then click Site Master. The Site Master tab appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture350.png' className='p-0 my-3 w-100'/>  
                    </div>
                    <p className='figure mt-1'>FIGURE: Site Master</p>
                    <p>You can see the list of sites added in the left panel. Options to save and activate/deactivate sites appear.</p>
                    <h3>1.1.1&nbsp;&nbsp;&nbsp;&nbsp; Adding a Site</h3>
                    <ol>
                    <li>In the Site name field, type the name of the site you want to add and then click Save.</li>
                    </ol>
                    <p>You will see "SITE ADDED SUCCESSFULLY" message. The site will be added and appears in the list.</p>
                    <h3>1.1.2&nbsp;&nbsp;&nbsp;&nbsp; Editing Site</h3>
                    <ol>
                    <li>Select a site from the list. The selected site appears in the Site name</li>
                    <li>Do required changes and then click Save. In the Audit Trail dialog, in the Comments field type your comments and then click SUBMIT.</li>
                    </ol>
                    <h3>1.1.3&nbsp;&nbsp;&nbsp;&nbsp; Activating or Deactivating Site</h3>
                    <p>Sites with Active status will be listed in the login screen Site field.</p>
                    <ol>
                    <li>Select a site from the list. The selected site appears in the Site name</li>
                    <li>Click Active/Inactive. The status of the site will change to Active / Inactive.</li>
                    </ol>
                    <p>Sites with Inactive status will not appear in the login screen Site field.</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../audit-trail-configuration">Audit trail configuration</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../workflowsetup">Workflow Setup</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default Masters; 