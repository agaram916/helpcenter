'use client';
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

const Limstroublearticle = () =>  {
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
    return (<div>
                 <div className='product'>
            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row mb-0">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="../../product-document">Article products</Link></li>
                    </ul>
                </nav>
             </div>
             <div className='troble-article-list'>
                <div className='container'>
                    <h1> Qualis LIMS Tutorial Article </h1>
                    <div className='row'>
                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Setup</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../usermanagement" >User management</Link></li>
                                <li><Link href="../testmanagement">Test management configuration</Link></li>
                                <li><Link href="../samplemaster"> Sample master configuration</Link></li>
                                <li><Link href="../organizationmaster">Organization master configuration</Link></li>
                                <li><Link href="../contactsmaster">Contacts master configuration</Link></li>                                
                            </ul>
                        </div>
                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Configuration</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../registrationtype">Registration Type</Link></li>
                                <li><Link href="../registrationsub">Registration Sub Type </Link></li>
                                <li><Link href="../templatedesign">How to add and  Manage Template Design</Link></li> 
                                <li><Link href="../roletemplate">How to Create and Manage User Role Template</Link></li> 
                                <li><Link href="../maptemplates">How to Map Templates to Registration Sub Type</Link></li>
                                <li><Link href="../configureapproval">How to configure approval hierarchy for approval flow</Link></li>  
                                <li><Link href="../approvalflows">How to define approval flows using user role template</Link></li> 
                                <li><Link href="../userroles">How to map user Roles to the workflows</Link></li> 
                            </ul>
                        </div>
                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Masters</h3>
                            <ul className='artile-list text-left'>
                            <li><Link href="../instrumentmaster">How to Add an Instrument to Instrument  Master</Link></li>
                                <li><Link href="../newpassword"> How to Create a New Password Policy</Link></li>
                            </ul>
                        </div>
                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Transactions</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../receivinggoods">How to Receive Goods</Link></li>
                                <li><Link href="../storegoods">How to Split and Store Goods</Link></li>
                                <li><Link href="../resultentry">Understanding Result Entry Flow</Link></li>
                                <li><Link href="../testresults">How to Review Test Results</Link></li>
                                <li><Link href="../registeringsample">Registering a Sample</Link></li>
                                <li><Link href="../approvetests">How to Approve Tests</Link></li>
                                <li><Link href="../prerequisites">Test Approval - Prerequisites</Link></li>   
                            </ul>
                       </div>                      
                    </div>
                    
                </div>
             </div>
            <Help/>
        </div>
    </div>);
}
export default Limstroublearticle; 