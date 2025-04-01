'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const Domainsetup = () => {
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
              <h1><strong>Logilab ELN &ndash; Domain Setup</strong></h1>
                    <section className='articel-content'>                                        
                            <h2>1.1&nbsp;Domain</h2>
                            <p>Domain screen helps the administrator to add and manage domains. Domains added here are listed in the login screen <strong><em><strong>Domain</strong></em></strong>&nbsp;field.</p>
                            <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>The Domain master is visible only to the administrator users.</em></em></p>
                            <ol>
                            <li>On the main menu click  <img src='../../image/articel/eln/Setup.png' className='w-auto'/> and then click <strong><em><strong>Domain</strong></em></strong>. The <strong><em><strong>Domain</strong></em></strong>&nbsp;tab appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture39.png' className='my-3  w-100'/>  
                           </div> 
                            <p className='figure mt-1'>FIGURE: Domain Screen</p>
                            <p>List of domains added appears on the left panel.</p>
                            <ol>
                            <li>In the left panel, select a domain. In the <strong><em><strong>Domain</strong></em></strong><strong><em><strong>Name</strong></em></strong>&nbsp;field, the selected domain appears.</li>
                            </ol>
                            <h3>1.1.1&nbsp;Adding a Domain</h3>
                            <ol>
                            <li>Click <strong><em><strong>Reset </strong></em></strong>to clear any selection.</li>
                            <li>In the <strong><em><strong>Domain</strong></em></strong><strong><em><strong>Name </strong></em></strong>field, type the domain name you want to add.</li>
                            <li>Click <strong><em><strong>Save</strong></em></strong>. The domain is added and appended in the domain list. Based on the name, the domain is categorized into <strong><em><strong>Server</strong></em></strong>or <strong><em><strong>DB</strong></em></strong>.</li>
                            </ol>
                            <h3>1.1.2&nbsp;Editing Domain</h3>
                            <ol>
                            <li>In the left panel, select a domain. In the <strong><em><strong>Domain</strong></em></strong><strong><em><strong>Name </strong></em></strong>field, the selected domain appears.</li>
                            <li>Do required edit to the <strong><em><strong>Domain</strong></em></strong><strong><em><strong>Name</strong></em></strong>&nbsp;and then click <strong><em><strong>Save</strong></em></strong>.</li>
                            </ol>
                            <h3>1.1.3&nbsp;Retiring Domain</h3>
                            <ol>
                            <li>In the left panel, select a domain. In the <strong><em><strong>Domain</strong></em></strong><strong><em><strong>Name </strong></em></strong>field, the selected domain appears.</li>
                            <li>Click <strong><em><strong>Retire </strong></em></strong>to retire the domain. You cannot use retired Domains.</li>
                            </ol>
                            <h2>1.2&nbsp;Password Policy</h2>
                            <p>You can set up a password policy in the Password Policy screen.</p>
                            <ol>
                            <li>On the main menu click <img src='../../image/articel/eln/Setup.png' className='w-auto'/>and then click <strong><em><strong>Password Policy</strong></em></strong>. The <strong><em><strong>Password Policy</strong></em></strong>&nbsp;tab appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture40.png' className='my-3 w-100'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Password Policy Screen</p>
                            <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;Administrators can set site specific password policies. Hence, for Administrator login the </em></em><strong><strong>Site Master</strong></strong><em><em>&nbsp;field appears. Select the site to set password policy.</em></em></p>
                            <ol>
                            <li>Setup basic rules for the password such as <strong><em><strong>Minimum password length</strong></em></strong>, <strong><em><strong>Maximum password length</strong></em></strong>, <strong><em><strong>Password history</strong></em></strong>, <strong><em><strong>Password expiry</strong></em></strong>duration and <strong><em><strong>Auto lock policy</strong></em></strong>.</li>
                            <li>To setup complex password policy, click to select the <strong><em><strong>Complex password policy</strong></em></strong>check box.</li>
                            <li>Set up values for complex policies such as: <strong><em><strong>Minimum number of uppercase characters</strong></em></strong>, <strong><em><strong>Minimum number of lowercase characters</strong></em></strong>, <strong><em><strong>Minimum number of numeric characters</strong></em></strong>, and<strong><em><strong>Minimum number of special characters</strong></em></strong>.</li>
                            </ol>
                            <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;For administrators the </em></em><strong><strong>Set Idle Timeout</strong></strong><em><em>&nbsp;field appears. By default, the idle timeout is set to 15 minutes.</em></em></p>
                            <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture41.png' className='my-3'/>  
                           </div>
                            <p><em><em>The administrator can enable the </em></em><strong><strong>Idle Timeout</strong></strong><em><em>&nbsp;check box and then set the idle timeout between 1-99 minutes. </em></em></p>
                            <ol start={4}>
                            <li>Click <strong><em><strong>Save</strong></em></strong>.</li>
                            </ol>                                                
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../workflowsetup">Workflow Setup</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../passwordpolicysetup"> Password Policy Setup</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default Domainsetup; 