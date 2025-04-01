'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const ApproveTests = () => {
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
                    <h1>How to Approve Tests</h1>
                    <section className='articel-content'>
                        <p>Once the tests are reviewed, the tests comes to the next user as configured in the Approval Configuration screen.</p>
                        <p>To approve result entry, follow these steps:</p>

                        <p>1.On the main menu, click <img  src='../../image/articel/LIMS/arrow.png' className='w-auto mx-2'/> Test approval and then click <b>Test Approval.</b> The  <b>Test Approval</b> screen appear.</p>

                        <p>2.In the Test Approval screen, click <img  src='../../image/articel/LIMS/filter.png' className='w-auto mx-2'/>  in the Filter dialog, select  <b>From</b> and <b>To</b> date, Sample Type: Product, <b>Registration Type:</b> Batch / Non Batch / Plasma Pool, <b>Registration Sub</b> </p>
                        <p> <b>Type </b>and <b>Test Status.</b>  Click the <img src='../../image/articel/LIMS/Rightarrow.png' className='w-auto mx-2'/> to view more fields in the filter. In the Config Version field select the latest template. Select Lab and Test. Select All to select all the test in the sample/component. And then click <b>SUBMIT</b> as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture75.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Using Filter</p>
                        <p>Samples for the given search criteria appears as shown in the figure: </p>

                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture76.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Test Approval Screen Showing Filtered Records </p>

                        <p>You can review the tests and then do any one of the following:.</p>

                        <ul>
                            <li className='circle mx-3'>Recommend recalculation: The tests go to the Analyst and appear <span className='orange'>ReCal</span>in state.</li>
                            <li className='circle mx-3'>Recommend retest: The tests go to the analyst and appear in <span className='orange'>ReTest</span> state.</li>
                            <li className='circle mx-3'> Approve: Tests appear as <span className='text-success'>Approved</span>state</li>
                        </ul>

                        <p> 3.Select tests to approve, click <img  src='../../image/articel/LIMS/thunder.png' className='w-auto mx-2'/>  and then click <b>Approve </b>as shown in the above figure. The test goes to the <b>Approved</b> state</p>
                        <p>4.Click<img  src='../../image/articel/LIMS/Picture77.png' className='w-auto mx-2'/>  to generate report as shown in the figure:</p>

                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture78.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Generating Report</p>

                        <p>The report  is generated and appears as shown in the figure: </p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture80.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Report Generated</p>
                    </section>

                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../registeringsample">Registering a Sample</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                           <Link href="../prerequisites">Test Approval - Prerequisites</Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <Help/>
        </div>
    );
}

export default ApproveTests; 