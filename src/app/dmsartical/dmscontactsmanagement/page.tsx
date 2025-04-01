'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Help from '@/components/help';  
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const DmsContactsManagement = () => {
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
                        <li><Link href="../dmstroublearticle">DMS Articles</Link></li>
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
                  <h1> Qualis DMS – Contacts Management</h1>
                  <div className='articel-content'>
                        <p className='text-left'>
                        Masters in Qualis DMS are used to store and maintain data outside a process and refer it in process using "Master" field type in the form. For example when you store a sample, you may want to look up the storage data such as organisation, department, lab, site, section etc. In this example storage location data can be created and managed as a master. Also user data can be created and managed as a master. </p>
                        <p className='text-left'>Qualis DMS allows you to create and manage countries under contact management module.</p>
                        <h3 className='pb-3 mt-3'>1.Contacts</h3>
                        <h3 className='pb-3'>Country Master</h3>
                        <p className='text-left'>Country master is used to add and manage countries. Country details are used in user master.</p>
                        <h3 className='pb-3'> Adding a New Country</h3>
                        <p className='text-left'>To create a new country, follow these steps:</p>
                        <p className='text-left'>1.On the Explorer, click <b>MASTER,</b> Contacts and then click <b>Country.</b> The <b>Country.</b>master screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture67.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='text-left'>In the country master screen you can see the list of countries created. Also options to add, edit and delete countries appear as shown in the above figure.</p>               
                        <p className='text-left'>2.Click action menu and then click Add. The Add Country dialog appears as shown in the figure</p>                    
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture68.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='text-left'>3.In the <b>Country Name</b> field, type the country name you want to add.</p>
                        <p className='text-left'>4.In the <b>Two Char Country</b> field, type the two character code of the country.</p>
                        <p className='server text-left'>In the <b>Three Char Country</b> field, type the three character code of the country.</p>
                        <p className='text-left'>6.Click SUBMIT.</p>
                        <p className='text-left'>You can see the country you just created listed in the country master. </p>
                        <h3 className='pb-3'>2.Editing and Deleting Country</h3>
                        <p className='text-left'>1.To edit a country, in the Country master screen, select the country to edit, click action menu and then click Edit. In the Edit Country dialog, do required changes and then click SUBMIT.</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture69.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='text-left'>2.To delete a country, in the Country master screen, select the country you want to delete, click action menu and then click <b>Delete.</b> </p>
                    </div> 
                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../dmsusermanagement'>User Management</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../dmsdocumentmanagement'>Document Management</Link>
                        </div>
                    </div>
                    </div>
            </div>
             </div>
         <Help/>
        </div>
    );
}

export default DmsContactsManagement; 