'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';  
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
  const RegistrationType = () => {
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
                    <h1>Qualis LIMS-Registration Type </h1>
                    <section className='articel-content'>
                        <p>Registration Type master is used to add and manage registration types. Registration type is created for a selected sample type. </p>
                        <p>The previous one will expire once you approve an new registration sub type</p>
                        <h3>1.Adding a New Registration Type </h3>
                        <p>To create a new Registration type, follow these steps:</p>
                        <p>1.On the main menu, click,<img  src='../../image/articel/LIMS/configuration.png' className='mx-2 w-auto'/> <b>Configuration</b> and then click <b>Registration Sub Type.</b> The <b>Registration Sub Type</b> master screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='w-100 my-3 p-0' src='../../image/articel/LIMS/Picture14.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Registration Type Master Screen</p>
                        <p>In the Registration Sub Type master screen, you can see the list of registration sub types created. Options to edit and delete registration sub types appear in each record.</p>

                     
                        <p>2.Click.<img src='../../image/articel/LIMS/plus1.png' className='mx-2 w-auto'/>The<b>Add Registration Type</b> screen appears as shown in the figure:</p>
                       
                        <h4 className='inner-image'>
                            <img className='w-100 my-3 p-0' src='../../image/articel/LIMS/Picture15.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Registration Type Dialog</p>
                        <p>3.In the <b>Sample Type Name </b>field, select the sample type name to which you want to add the registration type.</p>
                        <p>4.In the <b>Registration Type</b> field, type the registration type name.</p>
                        <p>5.In the <b>Description</b> field, type the description.</p>
                        <p>6.Click <b>Save.</b></p>
                        <p>You can see the registration type you just created listed in the Registration Type master as shown in the  figure:</p>
                    
                        <h4 className='inner-image'>
                            <img className='w-100 my-3' src='../../image/articel/LIMS/Picture16.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Registration Type Master Screen with Registration Type Added</p>

                        <h3>1.1.1.2Editing and Deleting Registration Type</h3>
                        <p>Options to edit and delete registration type appear in each record in the Registration Type master.</p>
                        <p>1.To edit registration type details, in the Registration Type master screen, click <img  src='../../image/articel/LIMS/pencil.png' className='mx-2 w-auto'/>  to edit the registration type record. In the <b>Edit Registration Type </b>screen, do required changes and then click <b>Save.</b> </p>
                        <p>2.To delete a registration type, in the Registration Type master screen, click <img  src='../../image/articel/LIMS/delete.png' className='mx-2 w-auto'/> to delete the registration type record. </p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../contactsmaster"> Contacts master configuration</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                           <Link href="../registrationsub"> Registration Sub Type</Link>
                        </div>
                    </div>
                    </div>                   
                </div>
             </div>
             <Help/>
       </div>
    );
}
export default RegistrationType; 