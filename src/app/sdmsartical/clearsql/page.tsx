'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const ClearSql = () => {
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
                        <li><Link href="../sdmstroublearticle">SDMS Articles</Link></li>
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
                    <h1>How to clear SQL log</h1>
                    <p className='text-left'>When SDMS is connected to SQL server, the SQL Database Log Maintenance screen enables you to clear the SQL log.</p>
                    <p className='text-left'>To clear SQL log manually, follow these steps:</p>
                    <section className='articel-content'>
                    <p className='text-left'>1.On the main menu, click  <img  src='../../image/articel/SDMS/setings.png' className='mx-2 w-auto'/>  and then click <b>Maintenance.</b> <b>The SQL Database Log Maintenance </b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture55.png'  className='my-3 p-0 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: SQL Database Log Maintenance Screen</p>
                        <p> 2.Click Shrink. Wait un till the log is cleared. </p>
                        <p>3.You will see a message as shown in the figure:</p>
                        <p>4.In the<b>Delimiter </b> field, select an appropriate delimiter to split the file metadata.</p>
                      
                     </section>
                     <div className='prevartical '>
                    <div className='row my-5'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../sdmsusermanagement'>Logilab SDMS User Management</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../configurepreferences'>configure Preferences in SDMS</Link>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default ClearSql; 