'use client';
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const DmstroubleArticle = () =>  {
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
                        <li><Link href="../../product-document">products Article </Link></li>
                    </ul>
                </nav>
             </div>
             <div className='troble-article-list'>
                <div className='container'>
                    <h1> Qualis DMS Tutorial Article </h1>
                    <div className='row'>
                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Getting Started</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../dmsconfiguration">Configuration</Link></li>
                                <li><Link href="../dashboard"> Dashboard and Alerts</Link></li>
                                <li><Link href="../gettingstarted">  Getting Started</Link></li>
                                <li><Link href="../mailconfiguration">Mail Configuration</Link></li>
                                <li><Link href="../dmsorganizationmaster"> Organization Master</Link></li>
                                <li><Link href="../dmsusermanagement"> User Management</Link></li>                                
                            </ul>
                        </div>
                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Document Management</h3>
                            <ul className='artile-list text-left'>
                            <li><Link href="../documentapproval">Document Approval</Link></li>
                                <li><Link href="../documentinitiation"> Document Initiation</Link></li>
                                <li><Link href="../documentreview">  Document Review</Link></li>
                            </ul>
                        </div>
                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Document Workflows</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../dmscontactsmanagement"> Contacts Management</Link></li>
                                <li><Link href="../dmsdocumentmanagement"> Document Management </Link></li>
                                <li><Link href="../dmsdocumentprinting"> Document Printing</Link></li> 
                                <li><Link href="../repositoryview">Document Repository View & Search</Link></li> 
                                <li><Link href="../documentrequest">Document Request and Response</Link></li>
                            </ul>
                        </div>    
                    </div>
                    
                </div>
             </div>
            <Help/>
        </div>
    </div>);
}
export default DmstroubleArticle; 