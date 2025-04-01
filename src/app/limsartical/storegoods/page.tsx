'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const StoreGoods = () => {
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
                    <button id="btn-back-to-top" onClick={backToTop} style={{ display: 'block'}}>
                        <i className="fas fa-arrow-up"></i>
                    </button>
                )}
                    <div className='inner-details'>
                    <h1>Chain Custody</h1>
                    <section className='articel-content'>
                        <p> The Chain Custody option in the Goods In screen enables the user to split and receive goods in storage. .</p>
                        <p>1.In the <b>Goods In </b>screen, open the record to split and  receive goods  in storage. </p>
                        <p>2.Click <img  src='../../image/articel/LIMS/chain.png' className='w-auto mx-2'/> as shown in the figure::</p>
                        <h4 className='inner-image'>
                            <img className=' my-3 p-0' src='../../image/articel/LIMS/Picture58.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Chain custody Option</p>
                        <p> The <b>Add Chain Custody </b>dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture59.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Chain Custody Dialog</p>
                        <p>3.In the <b>Packages Received </b>field, type number of packages receiving in custody.</p>
                        <p>4.In the <b>Comments</b> field, type your comments if any..</p>
                        <p> 5.Click <b>Save.</b> Goods received  in custody is saved and appears as shown in the figure: </p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture59.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Goods  in Chain Custody</p>
                        <p>Same way, you can add more goods to chain custody. You can edit or delete chain custody record using edit and delete options that appear in each record.</p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../receivinggoods"> How to Receive Goods</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4 >Next article</h4>
                           <Link href="../resultentry">Understanding Result Entry Flow</Link>
                        </div>
                    </div>
                    </div>                    
                </div>
             </div>
                <Help/>
        </div>
    );
}

export default StoreGoods; 