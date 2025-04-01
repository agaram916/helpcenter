'use client';
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

const ElntroubleArticle = () =>  {
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
                    <h1>Logilab ELN Tutorial Article</h1>
                    <div className='row'>
                    <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Quick Tour</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../quicktour">Quick Tour</Link></li>     
                            </ul>

                            <h3 className='text-left mt-5'>Dashboard</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../dashboard">Dashboard</Link></li>                             
                            </ul>
                            <h3 className='text-left mt-5'> Orders</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../sheetorders">Sheet Orders</Link></li>
                                <li><Link href="../protocolorders">Protocol Orders</Link></li> 
                                <li><Link href="../process-Sheet-Orders"> Process Sheet Orders</Link></li>
                                <li><Link href="../process-protocol-orders">Process Protocol Orders</Link></li>                             
                            </ul>
                        </div>
                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Setup</h3>
                            <ul className='artile-list text-left'>
                            <li><Link href="../site-master">Site Master</Link></li>
                                {/* <li><Link href="../usersetup">User Setup</Link></li> */}
                            
                                <li><Link href="../workflowsetup">Workflow Setup</Link></li>
                                <li><Link href="../domainsetup">Domain Setup</Link></li>
                                <li><Link href="../passwordpolicysetup"> Password Policy Setup</Link></li>

                             <h5 className='text-left mt-3' style={{fontSize:'18px', fontWeight:'600'}}>User Management</h5>
                              <li><Link href="../user-role" >User Role </Link></li>
                               <li><Link href="../user-master" >User Master</Link></li>
                             <li><Link href="../user-rights">User Rights</Link></li>

                             <h5 className='text-left mt-3' style={{fontSize:'18px', fontWeight:'600'}}>Project Management </h5>
                               <li><Link href="../project-master">Project Master </Link></li>
                                <li><Link href="../projectteamsetup">Project Team Setup</Link></li>
                               <li><Link href="../task-masters">Task Master</Link></li>                              
                            </ul>
                        </div>

                        <div className='col-sm-6 mb-4'>
                        <h3 className='text-left'>Templates</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../sheettemplates">Sheet Templates</Link></li>
                                <li><Link href="../protocoltemplates">Protocol Templates</Link></li>
                                <li><Link href="../templatemapping">Template Mapping</Link></li>
                            </ul>
                        </div>

                    <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Inventory Management</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../inventory">Inventory</Link></li>
                                <li><Link href="../material-inventory">Material Inventory</Link></li>
                            </ul>
                        </div> 


           
                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'> Audit Trail</h3>
                            <ul className='artile-list text-left'>
                                {/* <li><Link href="../audittrail">Audit Trail</Link></li>   */}
                                <li><Link href="../audit-trail-history">Audit Trail History </Link></li>      
                                <li><Link href="../cfr-settings">CFR Settings </Link></li> 
                                <li><Link href="../audit-trail-configuration">Audit Trail Configuration </Link></li> 

                        
                            </ul>
                        </div>
               

                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Parser Setup </h3>
                       
                            <ul className='artile-list text-left'>
                               <li><Link href="../instrumentsetup">Instrument Setup</Link></li>
                                <li><Link href="../delimitermastersetup">Delimiter Master Setup</Link></li>
                                <li><Link href="../methodmastersetup">Method Master Setup</Link></li>
                                <li><Link href="../parsersetup">Parser Setup</Link></li>  
                            </ul>
                        </div>
                            
                
                    </div>                    
                </div>
             </div>
            <Help/>
        </div>
    </div>);
}
export default ElntroubleArticle; 