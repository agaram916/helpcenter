'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const ReceivingGoods = () => {
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
                    <h1>ReceivingGoods</h1>
                    <section className='articel-content'>
                        <p> <b>Goods In</b> screen helps the user to capture details of goods that are coming in to the company through courier or any other mode.</p>
                        <p>To receive goods in storage, follow these steps</p>
                        <p>1.On the main menu, click <b>Transaction, Sample Receiving</b> and then click <b>Goods In</b>. The <b>Goods In</b> screen appears as shown in the figure::</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture53.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Goods In Screen</p>
                        <p>To add goods details, follow these steps</p>
                        <p>2.In the <b>Goods In</b> screen, click. <img  src='../../image/articel/LIMS/plus.png' className='mx-2 w-auto'/>The <b>Add Goods In</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture54.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Goods In Screen</p>
                        <p>3.In the <b>Manufacturer Name</b> field, type the manufacturer of the goods.</p>
                        <p>4.In t he <b>Recipient Name</b>  field, select the user who receives the goods. Based on the selected recipient, the Division appears.</p>
                        <p>5.In the <b>No. Of Packages</b> field, type number of packages receiving..</p>
                        <p>6.In the <b>Courier/Carrier </b>field, select the courier or carrier name that delivers the goods to the company</p>
                        <p>7.In the Consignment No field, type the consignment number.</p>
                        <p>8.If the time of receiving the goods is out of office hours, then click to turn on the <b>Out of Hours</b> option. If the <b>Out of Hours</b> option is turned  on, then the <b>Security Ref. No </b>field becomes mandatory. Type the security reference number..</p>
                        <p>9.In the <b>Comments</b> field, type your comments if any..</p>
                        <p>10.Click <b>Save.</b> The goods are added and appear in the <b>Goods In</b> screen with status showing as <b>GOODS IN </b>as shown in the figure: </p>
                       
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture55.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Goods Showing Status as Goods In</p>
                       <h3>1.1Receiving Goods</h3>
                        <p>The recipient user should log in to their log in to receive goods. To receive goods, follow these steps:.</p>
                        <p> In the Goods In screen, select a record to receive goods and then click <img  src='../../image/articel/LIMS/good.png'/> as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture56.png' />
                        </h4>
                        <p className='figure mt-1'> FIGURE: Receiving Goods</p>
                        <p>The status will turn to <b>GOODS RECEIVED</b> as shown in the figure: </p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture57.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Record in GOODS RECEIVED State.</p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../userroles"> How to map user Roles to the workflows</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4 >Next article</h4>
                           <Link href="../storegoods">How to Split and Store Goods</Link>
                        </div>
                    </div>
                    </div>                    
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default ReceivingGoods; 