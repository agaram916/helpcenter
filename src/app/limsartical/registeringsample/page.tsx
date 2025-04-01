'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const RegisteringSample = () => {
   
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
                    <h1>Registration</h1>
                    <section className='articel-content'>
                        <p>Sample Registration screen is where you add and register sample details. Once you pre-register samples, you can register, add tests and attach files to the samples and then accept the sample to register it. If required, you can cancel the sample registration or quarantine the sample for some reason.</p>
                        <p>Following is the list of color codes for the sample records in each status:</p>
                        <ul>
                            <li className='circle mx-5'>Pre-register<span className='text-secondary'>-Grey</span></li>
                            <li className='circle mx-5'>Registered <span className='text-primary'>-Blue</span></li>
                            <li className='circle mx-5'>Completed <span className='blue'>-Dark blue</span></li>
                            <li className='circle mx-5'>Partial <span className='text-danger'>-Red</span></li>
                            <li className='circle mx-5'>Quarantined<span className='orange'>-Orange</span></li>
                            <li className='circle mx-5'>Cancelled / Rejected<span className='text-danger'>-Red</span></li>
                        </ul>

                        <p>To register a sample, follow these steps:</p>
                        <p>1.On the main menu, click <img  src='../../image/articel/LIMS/arrow.png' className='w-auto mx-2'/> <b>Registration</b> and then click <b>Sample Registration.</b> The <b>Sample Registration</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0' src='../../image/articel/LIMS/Picture64.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Sample Registration Screen</p>
                        <p>Click <img  src='../../image/articel/LIMS/filter.png' className='w-auto mx-2'/> in the Filter dialog, select <b>From</b> and To date,  <b>Sample Type:</b> Product, <b>Registration Type:</b> Batch / Non Batch / Plasma Pool, <b>Registration Sub Type </b>and Filter Status. And then click <b>SUBMIT</b> as shown in the figure: </p>

                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture65.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Using Filter in Registration Screen</p>

                        <p>List of samples registered for the selected criteria appears. You can register sample for the selected Registration Type and Registration Sub Type.</p>
                        <p>2.Click <img  src='../../image/articel/LIMS/plus.png' className='w-auto mx-2'/>  to register a sample. The screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture66.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Registration Add Screen</p>
                        <p>3.In the <b>RMS No </b>field, select the RMS number for which the sample is registered. </p>
                        <p> <b>Note:</b> RMS number is generated in the Goods In screen.</p>
                        <p>4.In the <b>Product Category</b> field, select the product category.</p>
                        <p>5.In the <b>Product </b>field, select the product to register. Based on the selected product, the study plan created in the Study Plan screen for the selected product along with the <b>Study Plan</b> name will appear on the right side as shown in the above figure.</p>
                        <p>In the <b>Manufacturer Name</b> field, select the product manufacturer. Based on the selected manufacturer, the <b>Manufacturer Site </b>appears</p>
                        <p>In the <b>e-Protocol </b>field, select <b>e-Protocol</b> for the sample</p>
                        <p>8.Click <img  src='../../image/articel/LIMS/cart.png' className='w-auto mx-2'/>to get components from the study plan. All components from the study plan will appear under Components as shown in the above figure.</p>
                        <p>9.The  <b>All Test </b>option will be turned on by default and all the tests in the component will be available for registration. If required, you can turn off this option and remove tests from the selected component.</p>
                        <p>10.Note: <b>Manuf Lot No.</b> field in the component record is mandatory. Hence, click <img  src='../../image/articel/LIMS/pencil.png' className='w-auto mx-2'/> to edit the component. The Edit Component dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture67.png'/>
                        </h4>
                        <p className='figure mt-1'> FIGURE: Edit Component Dialog</p>
                        <p>11.In the <b>Manuf Lot No.</b> field, type the lot number.</p>
                        <p>12.In the <b>Storage Condition</b> field, select storage condition for the selected product.</p>
                        <p>13.In the <b>Storage Location</b> field, select storage location for the selected product.</p>
                        <p>13.In the <b>Storage Location </b>field, select storage location for the selected product.</p>
                        <p>14.Click <b>Save.</b> Same way, you can add <b>Manuf Lot No.</b> to other components.</p>
                        <p>15.Under <b>Tests,</b> you can see list of tests in the selected component. If required, you can delete tests from the list or add tests to the list. Click  <img  src='image/articel/LIMS/test17.png' className='w-auto mx-2'/>to add more tests to the component..</p>
                        <p>16.Click  <img  src='../../image/articel/LIMS/source.png' className='w-auto mx-2'/>and add source of sample.</p>
                        <p>17.Click <b>Save.</b> The sample is registered for each component in the registration screen, you can see samples registered as shown in the figure:</p>
                        <h4 className='inner-image'>
                         <img className='my-3 p-0' src='../../image/articel/LIMS/Picture68.png'/>
                       </h4>
                       <p className='figure mt-1'> FIGURE: Registered Sample</p>
                        <p>You can see the samples registered. In this example, there are two components, hence two records are generated for the sample as shown in the above figure.</p>
                        <p>The samples appear in <b>Pre-Register</b> state. In this state, you can accept the sample to register the sample. Or you can cancel / reject the sample.</p>
                        <h3>1.1Edit, Print Barcode and Add Source options</h3>
                        <p>Mouse over a record. You can see options to edit the record details, print barcode and add source options as shown in the figure:</p>
                        <h4 className='inner-image'>
                         <img className='my-3 p-0' src='../../image/articel/LIMS/Picture69.png'/>
                       </h4>
                       <p className='figure mt-1'>FIGURE: Registered Sample Showing Edit, Print Barcode and Add Source Options</p>
                       <h3>1.2Viewing Tests added to sample</h3>
                       <p>Select a record; you can see the tests added for the sample listed on the right side as shown in the figure:</p>
                       <h4 className='inner-image'>
                         <img className='my-3 p-0' src='../../image/articel/LIMS/Picture70.png'/>
                       </h4>
                       <p className='figure mt-1'>FIGURE: Viewing Tests Added to the Sample</p>
                        <p>Click <img  src='../../image/articel/LIMS/Add.png' className='w-auto mx-2'/> to add more test(s) to the selected sample registered. </p>
                        <p>Select a test and  then click  <img  src='../../image/articel/LIMS/game.png' className='w-auto mx-2'/> to cancel / Reject test.</p>
                    <h3>1.3Viewing Sample Details</h3>
                    <p>Click <img  src='../../image/articel/LIMS/sample.png' className='w-auto mx-2'/>  to view sample details. The sample details appear as shown in the figure:</p>
                    <h4 className='inner-image'>
                         <img className='my-3 p-0' src='../../image/articel/LIMS/Picture71.png'/>
                       </h4>
                    <p> Click <img  src='../../image/articel/LIMS/Attachment.png' className='w-auto mx-2'/> to add attachments to the sample.</p>
                    <h3>1.4Register Sample</h3>
                    <p>In the Pre-Register state, you can accept the sample. </p>
                        <p>1.In the Sample Registration screen, select a sample that is in the <b>Pre Register</b> state and then clic <img  src='../../image/articel/LIMS/note.png' className='w-auto mx-2'/>kto accept the sample as shown in the figure:</p>

                        <h4 className='inner-image'>
                         <img className=' my-3 p-0' src='../../image/articel/LIMS/Picture72.png'/>
                       </h4>
                       <p className='figure mt-1'>FIGURE: Accepting Sample</p>
                        <p>2.In the Confirmation dialog, click Ok. </p>
                        <p>The accepted sample appears as Registered and  the AR No is generated as shown in the above figure.</p>
                        <h3>1.5Cancel/Reject</h3>
                        <p>You can cancel/reject the sample before or after registration. </p>
                        <p>1.To cancel/reject the sample, in the <b>Sample Registration </b>screen, select the sample and then click  <img  src='../../image/articel/LIMS/game.png'/> as shown in the figure:</p>

                        <h4 className='inner-image'>
                         <img className='my-3 p-0' src='../../image/articel/LIMS/Picture73.png'/>
                       </h4>
                       <p className='figure mt-1'>FIGURE: Cancel / Reject Sample</p>
                    <p>1.If you cancel/reject sample in the preregister stage then the sample is rejected.</p>
                    <p>2.If you cancel/reject sample in the registered stage then the sample is cancelled</p>
                    <h3>1.6Quarantine </h3>
                    <p>You can quarantine the sample that is in the Pre-register state.</p>
                    <p>1.To quarantine the sample, in the Sample Registration screen, select the sample and then click <img  src='../../image/articel/LIMS/bottle.png'/>  as shown in the figure:</p>

                    <h4 className='inner-image'>
                         <img className='my-3 p-0' src='../../image/articel/LIMS/Picture74.png'/>
                       </h4>
                       <p className='figure mt-1'>FIGURE: <b>Quarantine</b> Sample</p>
                        <p>The status of the sample appears as Quarantined. You can accept a quarantined sample to register it or cancel/reject it.</p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../testresults"> How to Review Test Results</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4 >Next article</h4>
                           <Link href="../approvetests">How to Approve Tests</Link>
                        </div>
                    </div>
                    </div>     
                </div>
                </div>
                <Help/>
        </div>
    );
}

export default RegisteringSample; 