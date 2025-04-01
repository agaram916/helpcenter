'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
const Ftprights = (props) => {
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
                        <li><Link href="./../">Home</Link></li>
                        <li><Link href="../product-document">Article products</Link></li>
                        <li><Link href="/Sdms-artical">SDMS Article </Link></li>
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
                    <h1>How to define FTP rights</h1>
                    <section className='articel-content'>
                        <p className='text-left'>You can define access rights to the user groups to view FTP directories. To do so, follow these steps:</p>
                        <p className='text-left'><span>1.</span>On the main menu click <img  src='../image/articel/SDMS/cloud.png' />   , and then click <b>FTP Rights.</b>  <b>The FTP User Mapping View </b>screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../image/articel/SDMS/Picture9.png' className='m-0 p-0 w-100' />   
                        </h4>
                        <p className='figure mt-1'>FIGURE: FTP User Mapping View Screen</p>


                        <p className='text-left'><span>2.</span>You can see list of FTP locations available. </p>
                        <p className='text-left'><span>3.</span>Select an FTP location from the list to map users and then click    <img  src='../image/articel/SDMS/map.png' /> . The  <b>FTP User Mapping Entry</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                          <img  src='../image/articel/SDMS/Picture11.png' className='m-0 p-0 w-100' />  
                        </h4>
                        <p className='figure mt-1'>FIGURE: FTP User Mapping Entry Screen</p>

                        <p><span>4.</span>In the <b>FTP Name</b> field, the selected FTP directory appears.</p>
                        <p><span>5.</span>In the <b>Group Name</b> field, select the user group you want to map to the FTP directory.</p>
                        <p><span>6.</span>Now you can see the selected user group under <b>User Map. </b>Click the check box under <b>Map </b>to select individual user to map. To map all the users in the selected user group, click to select the <b>Select All </b>check box.</p>
                        <p><span>7.</span>Click <b>Submit.</b> Users selected from the user group are mapped to the selected FTP directory.</p>
                        <ul>
                            <li className='circle mx-3'>In the FTP User Mapping View screen, click <b>Export </b>to export FTP locations to Excel.</li>
                            <li className='circle mx-3'>Click <b>Print</b> to print FTP location details.</li>
                        </ul>
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='/FTPConfiguration'>How to define FTP rights</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='/FTPDataView'>Logilab SDMS-FTP Data View</Link>
                        </div>
                    </div>
                    </div>
                    
                    <div className='card usefull' style={{ margin: 'auto' }}>
                        <h4>Was this article helpful?</h4>
                        <div className='button'>
                            <button className='btn btn-primary mr-5'>Yes</button>
                            <button className='btn btn-primary'>No</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='support'>
                <div className='container text-center'>
                    <h3 className='mb-4'>How do I get support?</h3>
                    <ul>
                        <li> If you have any questions or concerns, please do not hesitate to reach out to support via in-app chat, the form on the Help Center, or email <a href='#'>support@agaram.com.</a> </li>
                    </ul>
                </div>
            </div>
            <div className='help-line'>
                <div className='container'>
                    <div className='p-6'>
                        <h3 className='pb-3'>Still need help?</h3>
                        <p className="font-size-lg"> Our team of experts are available and just a click away</p>
                        <a className='button button-primary button-lg my-4' target='_blank' href="https://www.agaramtech.com/contact-us/"> Contact us</a>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='container p-3'>
                    <span>Powered by </span>
                    <a href="https://zoho.com/desk" target="_blank" rel="noopener" className="Footer__footerLink">Zoho Desk</a>
                    <span> | </span>
                    <a href="https://zoho.com/terms.html" target="_blank" rel="noopener" className="Footer__footerLink">Terms of Service</a>
                    <span> | </span>
                    <a href="https://zoho.com/privacy.html" target="_blank" rel="noopener" className="Footer__footerLink">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}

export default Ftprights; 