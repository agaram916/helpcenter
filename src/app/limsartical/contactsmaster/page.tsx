'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const ContactsMaster = () => {
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
                    <h1>Qualis LIMS – contacts master configuration</h1>
                    <section className='articel-content'>
                         <p>After logging into Qualis LIMS application as an administrator user with required privileges, navigate to Country page by clicking Master Main menu followed by Contacts submenu.</p>
                         <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/cantact1.png' />
                        </h4>
                        <p>On the Country page, the existing list of countries will be displayed.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact2.png' />
                        </h4>
                        <p>Click on '+' icon to add a new country.</p>
                        <p>In 'Add Country' dialog window, enter Country Name followed by Country Abbreviation in the respective fields.</p>
                        <p>Click on 'Save' button.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact3.png' />
                        </h4>
                        <p>The newly-added country record will be displayed in the Country page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='image/articel/LIMS/contact4.png' />
                        </h4>
                        <p>Let us now move to on to create new supplier category by clicking 'Supplier Category' page item in the Contacts Submenu.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact5.png' />
                        </h4>
                        <p>On the Supplier Category page, click on '+' icon to add a new record.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact6.png' />
                        </h4>
                        <p>In 'Add Supplier Category' dialog window, enter Supplier Category and Description in the respective fields.</p>
                        <p>Click on 'Save' button.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact7.png' />
                        </h4>
                        <p>The newly-added Supplier Category record will be displayed in the Supplier Category page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact8.png' />
                        </h4>
                        <p>Next by clicking 'Supplier' page item in the Contacts Submenu, we will navigate to 'Supplier' page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact9.png' />
                        </h4>
                        <p>The list of existing suppliers will be displayed.</p>
                        <p>Click on '+' icon to add a new Supplier.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact10.png' />
                        </h4>
                        <p>On the resulting 'Add Supplier' dialog window, enter values in the fields.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact11.png' />
                        </h4>
                        <p>After completing the entry of values, click on 'Save' button which will result in adding a new supplier record in the draft status.</p>
                        <p>In the main page, there are tabs to add Supplier Category, Material Category, Supplier Contact and File attachment.</p>
                        <p>Click on Supplier Category link to map Supplier category.</p>
                        <p>Click 'Save' button on each stage to complete the mapping.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact12.png' />
                        </h4>
                        <p>After mapping, click on 'Approve' icon to approve this supplier.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact13.png' />
                        </h4>
                        <p>In order to configure client category, click on Client Category page item which will display the existing records on the resulting page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact14.png' />
                        </h4>
                        <p>Click on '+' button to add a new record.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact15.png' />
                        </h4>
                        <p>On the resulting 'Add Client Category' dialog window, enter the values in the field.</p>
                        <p>Click 'Save' button to complete the configuration.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact16.png' />
                        </h4>
                        <p>Let us move on to configure clients by clicking on 'Client' page item.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact17.png' />
                        </h4>
                        <p>On the resulting page, select the client category to which new clients need to be added by clicking the filter icon.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact18.png' />
                        </h4>
                        <p>To add a new client, click on '+' icon which will open up 'Add Client' dialog window.</p>
                        <p>Enter valid values in the respective fields.</p>
                        <p>Click on 'Save' button which will add a new client record.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact19.png' />
                        </h4>
                        <p>On the client page, the optional fields such as additional sites and site contacts can be added to the client record.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact20.png' />
                        </h4>
                        <p>In order to configure Manufacturer, click on Manufacturer page item which will display the existing records on the resulting page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact21.png' />
                        </h4>
                        <p>Click on '+' button to add a new record.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact22.png' />
                        </h4>
                        <p>On the resulting 'Add Manufacturer' dialog window, enter the values in the field.</p>
                        <p>Click 'Save' button to complete the configuration.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact23.png' />
                        </h4>
                        <p>In order to configure Courier, click on Courier page item which will display the existing records on the resulting page.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact24.png' />
                        </h4>
                        <p>Click on '+' button to add a new record.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact25.png' />
                        </h4>
                        <p>On the resulting 'Add Courier' dialog window, enter the values in the field.</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/contact26.png' />
                        </h4>
                        <p>Click 'Save' button to complete the configuration.</p>
                        {/* <h4 className='inner-image'>
                            <img className='w-100' src='image/articel/LIMS/contact27.png' />
                        </h4> */}
                        <p>This completes the configuration of contacts master.</p>
                        <p>Logout of the application to navigate to login page.</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../organizationmaster"> Organization master configuration </Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../instrumentmaster"> Add an Instrument to Instrument Master</Link>
                        </div>
                    </div>
                    </div>                    
                </div>
             </div>
            <Help/>
        </div>
    );
}
export default ContactsMaster; 