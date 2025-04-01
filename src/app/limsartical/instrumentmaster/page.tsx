'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const InstrumentMaster = () => {
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
                    <h1>How to Add a New Instrument</h1>
                    <section className='articel-content'>
                        <p>To add a new instrument, follow these steps:</p>
                        <p>1.On the main menu, click, <img  src='../../image/articel/LIMS/configuration.png' className='w-auto mx-2'/>  and then click <b>Instrument Management</b> <b>Instrument. </b>The Instrument master screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 w-100' src='../../image/articel/LIMS/Picture49.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Instrument Master Screen</p>
                        <p>2.In the filter <img  src='../../image/articel/LIMS/filter.png' className='w-auto mx-2'/> select the <b>Instrument Category </b>and then click <b>Submit.</b>Instruments that are added to the selected instrument category will appear.</p>
                        <p>Options to edit and delete instruments appear in each record.</p>
                        <p>3.Click.<img src='../../image/articel/LIMS/plus.png' className='w-auto mx-2'/> The Add Instrument dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3' src='../../image/articel/LIMS/Picture50.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Instrument Dialog</p>
                        <p>4.In the <b>Instrument Category</b> field, select the instrument category to which you create the instrument.</p>
                        <p>5.In the <b>Instrument ID</b> field, type a unique identification number for the instrument.</p>
                        <p>6.In the <b>Instrument Name</b>field, type the name of the instrument.</p>
                        <p>7.In the <b>Supplier</b> field, select the instrument supplier name.</p>
                        <p>8.In the <b>Service By </b>field, select the vendor who will service the instrument.</p>
                        <p>9.In the <b>Serial No </b>field, type the serial number of the instrument.</p>
                       <p>10.In the <b>In Charge</b> field, select the person in charge for the instrument.</p>
                        <p>11.In the <b>Window </b>+ and <b>Window</b>- fields, mention the window period for the test. </p>
                        <p> <b>Note:</b> The window period for a test designed to detect a specific disease (particularly infectious disease) is the time between first infection and when the test can reliably detect that infection.</p>
                        <p>12.Fill in other fields appropriately</p>
                        <p>13.In the <b>Instrument Status</b> field, select <b>Active</b> to make the instrument active.</p>
                        <p>14.Click to turn on the <b>Default Status </b>option to keep the instrument active by default.</p>
                        <p>15.Click <b>Save.</b></p>
                        <p>You can see the instrument you just created listed in the Instrument master.</p>
                        <h3>1.1Editing and Deleting Instrument </h3>
                        <p>Options to edit and delete instrument appear in each record in the Instrument master</p>
                       <p>1.To edit instrument details, in the Instrument master screen, click <img src='../../image/articel/LIMS/pencil.png ' className='w-auto mx-2'/> to edit the instrument record. In the <b>Edit Instrument </b>screen, do required changes and then click <b>Save.</b> </p>
                        <p>2.To delete an instrument, in the Instrument master screen, click  <img src='../../image/articel/LIMS/delete.png' className='w-auto mx-2'/>to delete the instrument record. </p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../contactsmaster">Contacts master configuration</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                           <Link href="../newpassword">How to Create a New Password Policy</Link>
                        </div>
                    </div>
                    </div>    
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default InstrumentMaster; 