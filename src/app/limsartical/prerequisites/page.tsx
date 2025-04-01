'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const PrerequiSites = () => {  
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
                    <h1>Test Approval - Prerequisites</h1>
                    <section className='articel-content'>
                        <p>To receive completed samples from the result entry screen, ensure that the following configurations are done appropriately:.</p>
                        <h3>1.1User Role Configuration</h3>

                        <p>The test approval flow will be available for the users enabled in the User Role Configuration screen as shown in the figure:</p>

                        <h4 className='inner-image'>
                            <img className=' my-3 p-0' src='../../image/articel/LIMS/Picture81.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Role Configuration Screen Showing Approval Flow</p>
                        <h3>1.2Approval Configuration </h3>
                        <p>Once result entry is done, the completed samples will appear in the next user in the approval flow as configured in the Approval Configuration screen as shown in the figure:</p>
                       
                        <h4 className='inner-image'>
                            <img className=' my-3 p-0' src='../../image/articel/LIMS/Picture82.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Approval Configuration Screen Showing User in the Approval Flow </p>

                        <h3>1.3 User Mapping</h3>
                        <p>In the User Mapping screen, you can map user for the approval flow in the user level. Samples completed in the result entry screen by a selected user will go to the user selected in the next level in the approval configuration as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className=' my-3 p-0' src='../../image/articel/LIMS/Picture83.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Mapping Screen Showing User Level Mapping in the Approval Flow</p>
                        <h3>1.4 Organization Mapping</h3>
                        <p>Tests are mapped to labs in the test master. Users have to be mapped to that particular lab to receive tests/samples in the result entry and test approval screen as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className=' my-3 p-0' src='../../image/articel/LIMS/Picture84.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Organisation Screen Showing User Mapped to a Selected Lab</p>
                        <p>Once result entry is done, the completed samples will appear in the next user queue in the approval flow as configured in the Approval Configuration screen.</p>
                    </section>

                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../approvetests">How to Approve Tests</Link>
                        </div>
                        <div className='col-6 text-right'>
                            {/* <h4 >Next article</h4>
                           <Link to="/TestManagement"> How to add and Manage Template Design</Link> */}
                        </div>
                    </div>
                    </div>    
                </div>
                </div>
                <Help/>
        </div>
    );
}

export default PrerequiSites; 