'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const AddSite = () => {
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
                    <h1>How to add a Site in SDMS</h1>                
                    <section className='articel-content'>
                        <h3>1.Site Master</h3>
                        <p>Site master enables you to add new sites and manage sites in SDMS.</p>
                        <p> <span>1.</span> On the main menu, click, <img src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/>   and then click <b>Base Masters</b>. The <b>Base Masters </b>screen appears. Click Site to go to the <b>Site </b>master tab. The <b>Site Master</b> tab appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture14.png' className='my-3 p-0 w-100' />  
                        </h4>
                        <p className='figure mt-1'> FIGURE: Site Master Tab</p>
                        <p>The Site master tab enables you to do the following:</p>  
                            <ul>
                                <li className='circle mx-3'>Add sites</li>
                                <li className='circle mx-3'>Edit site details</li>
                            </ul>
                            <h3>1.2 Add Site</h3>
                             <p>To add a site to the Site master, follow these steps:</p>
                        <p><span>2.</span>In the <b>Site</b> master tab, click  <img  src='../../image/articel/SDMS/add.png' className='mx-2 w-auto'/>  . The <b>Add Site</b> dialog appears as shown in the figure:</p>
                       
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture15.png' className='my-3 p-0'/>  
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Site Dialog</p>

                        <p><span>3.</span>In the <b>Site Code</b> field, type a code for the site.</p>
                        <p><span>4.</span>In the <b>Site Name</b> field, type the name of the site to add.</p>
                        <p><span>5.</span>Fill in <b>Site Address,Contact Person ,</b> name <b>Mobile No</b> of the contact person, <b>Fax No, Email </b>fields as applicable.</p>
                        <p> <b>Note</b>: Before you save the site if required, click Reset to clear all fields for fresh entry.</p>
                        <p><span>6.</span>Click <b>Save.</b></p>
                        <h3>2.Edit Site Details</h3>
                        <p>To edit site details, follow these steps:</p>
                        <p>1.On the main menu, click,   <img  src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/>   and then click <b>Base Masters.</b> The <b>Base Masters </b>screen appears. Click Site to go to the site master tab. </p>
                        <p>2.In the <b>Site</b> master tab, click to select the site from the list you want to edit and then </p>
                        <p>click <img  src='../../image/articel/SDMS/edit.png' className='mx-2 w-auto'/>  The Edit Site screen appears. </p>
                        <p> <b>Note:</b> You cannot edit Site Code.</p>
                        <p>3.Do the required changes to the site details and then click <b>Save</b> to save the changes.</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../fTPdataview'>Logilab SDMS-FTP Data View</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../addinstrument'>How to add an instrument</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default AddSite; 