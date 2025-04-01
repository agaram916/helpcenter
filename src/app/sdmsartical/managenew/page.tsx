'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const ManageNew = () => {
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
                        <li><Link href="../sdmstroublearticle">SDMS Article</Link></li>
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
                    <h1>How to create and manage new user group</h1>
                    <h2 className='text-left'>Create new user group</h2>    
                    <section className='articel-content'>
                    <p > 1.On the main menu click,<img  src='../../image/articel/SDMS/contact.png'  className='mx-2 w-auto'/>  and then click <b>User Management. </b>The <b>User Group</b> screen appears as shown in the figure:  </p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture60.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Management – User Master Screen</p>
                        <p>2.In the User Group tab, click. <img  src='../../image/articel/SDMS/groupcontact.png' className='mx-2 w-auto'/>  The Add New Group dialog appears as shown in the figure: </p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture61.png'  className='my-3 p-0 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add New Group Dialog</p>
                        <p>3.In the <b>Group Name</b> field, type the name of the user group you want to create and then click <b>Save.</b> You can see the new user group created and appear in the user group list.</p>
                        <h2 className='text-left'>Edit user group</h2>
                        <p>1.To edit the user group, select the user group from the list and then click Edit. In the Edit User Group dialog, edit user group name and then click Save..</p>
                        <h2>Activate or deactivate user group:</h2>
                        <ul>
                            <li className='circle mx-3'>
                            To activate or deactivate an user group, select the user group from the list and then click  <img  src='../../image/articel/SDMS/groupcontact.png' className='mx-2 w-auto' /> . You will see a confirmation message saying “Do you want to Activate / Deactivate User Group? Click <b>Ok.</b> The user group will be activated / deactivated.
                            </li>
                        </ul>
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../workflow'>setup work flow in sdms</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../manageuser'>create and manage user account</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default ManageNew; 