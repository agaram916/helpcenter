'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const ConfigureApproval = () => {
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
                    <h1>User Mapping </h1>
                    <section className='articel-content'>
                        <p>User Mapping screen enables you to define the approval hierarchy for the selected approval flow. You can add approver and then add analysts for the selected approver.</p>
                        <p>To set approval hierarchy, follow these steps:</p>
                        <p>1.On the main menu, click <img  src='../../image/articel/LIMS/configuration.png' className='mx-2 w-auto'/> Organization and then click  <b>User Mapping.</b> The  <b>User Mapping </b>screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture38.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Mapping Screen</p>
                        <p>2.In the filter <img  src='../../image/articel/LIMS/filter.png'  className='mx-2 w-auto'/> select  <b>Approval Sub type, Registration Type, Registration Sub Type and User Role Template Version</b></p>
                        <p>3.List of user roles for the selected user role template version appears as shown in the figure</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture39.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Mapping Screen </p>
                        <p>Based on the selected approval flow, sections appear for each role as shown in the above figure.</p>
                        <p>4.In each section, click. <img  src='../../image/articel/LIMS/plus.png' className='mx-2 w-auto'/> The <b>Add</b>User screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture40.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: User Mapping – Add User Screen</p>
                        <p>5.Click to select the users and then click <b>Save</b>.</p>
                        <p>6.Select a user in the first level and go to the next section. Click <img src='../../image/articel/LIMS/Plus.png'  className='mx-2 w-auto'/>as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3' src='../../image/articel/LIMS/Picture41.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Mapping User to the Next Level</p>
                    
                        <p>7.Click to select the users and then click  <b>Save..</b></p>
                        <p>8.Repeat steps to add users to the next level. </p>
                        <p>9.Now you can see the users mapped to each stage in the approval flow.</p>
                        <h3>1.1Graphical view of User Mapping</h3>
                        <p>In the User Mapping screen, click  <img src='../../image/articel/LIMS/share.png'  className='mx-2 w-auto'/>to view graphical representation of the user role mapping appears as shown in the figure </p>
                        <h4 className='inner-image'>
                            <img className='my-3 w-100' src='../../image/articel/LIMS/Picture42.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Graphical View of User Mapping - 1</p>
                        <p>You can also view graphical view role wise.</p>                        
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../maptemplates"> How to Map Templates to Registration Sub Type</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4 >Next article</h4>
                           <Link href="../approvalflows"> How to define approval flows using user role template</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
              <Help/>
        </div>
    );
}

export default ConfigureApproval; 