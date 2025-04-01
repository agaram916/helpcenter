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
                    <h1> Logilab ELN Lite Tutorial Article</h1>
                    <div className='row'>
                    <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Getting Started</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../getting-started">Getting Started</Link></li>     
                            </ul>
                        </div>
                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Setup</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../set-up">User Setup</Link></li>                      
                            </ul>
                        </div>
                             <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Inventory management</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../inventory">Inventory</Link></li>
                            </ul>
                        </div>                                     
                               <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Templates</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../templates">Templates</Link></li>
                            </ul>
                        </div>
                                                  
                        <div className='col-sm-6 mb-4'>
                            <h3 className='text-left'>Tasks</h3>
                            <ul className='artile-list text-left'>
                                <li><Link href="../tasks">Task Master</Link></li> 
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