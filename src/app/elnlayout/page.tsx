"use client"
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function elnlayout() {
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
    <div>
    <div>
        <div className="inner-page">
          <nav className="navbar">
            <ul className="list-unstyled row mb-0">
            <li><Link href="./../">Home</Link></li>
            <li><Link href="./../product">Products</Link></li>
             <li> <Link href='#'>Logilab ELN saas subscription guide </Link></li>
            </ul>
          </nav>
        </div>
        <div className="container">
          <div className="inner-details">
          <h1 className="py-2">Logilab ELN saas subscription guide</h1>
          <div className='flex'>
              <div className='media mt-3'>
                <div className='avatar'>
                   <img src='../image/userlogo.png' alt='userlogo' className="w-100" />
                </div>
                <div className='media-body text-left ml-3'> 
                  <ul>
                    <li className="updates">Updated by </li>
                    <li className="update">
                    <b>Agaram technologies</b>
                      {/* <time dateTime="2023-08-22T18:41:34Z" title="2023-08-23 00:11" data-datetime="relative">
                        19 days ago</time> */}
                    </li>
                   </ul>
                </div>
              </div>
            </div>
       
            <div className="related-articles">
                <h2 className="related-articles-title text-left">Related articles</h2>
                <ul className="list-unstyled text-left"> 
                  <li><a href="../image/Logilab_ELN_Cloud_SaaS_Offline_Payment_Information.docx" download >Logilab ELN user guide <i className="fa fa-download pl-2" aria-hidden="true"></i></a></li>
                  {/* <li><a href="../image/LogilabELNInstallationGuidev6.7.1-SQLServer1.pdf"download> Logilab ELN Installation Guide v 6.7.1-PostgreSQL<i className="fa fa-download pl-2" aria-hidden="true"></i></a></li>
                  <li><a href="../image/LogilabELNInstallationGuidev6.7.1-PostgreSQL1.pdf"download >Logilab ELN Installation Guide v 6.7.1-SQL Server<i className="fa fa-download pl-2" aria-hidden="true"></i></a></li>
                  <li><a href="../image/MongoDBInstallationGuidev5.0.14.pdf"download>MongoDB Installation Guide v 5.0.14<i className="fa fa-download pl-2" aria-hidden="true"></i></a></li> */}
                      <li><a href="../image/Logilab ELN Installation Guide v 6.7.3-PostgreSQL 1.pdf"download> Logilab ELN Installation Guide v 6.7.3-PostgreSQL <i className="fa fa-download pl-2" aria-hidden="true"></i></a></li>
                  <li><a href="../image/Logilab ELN Installation Guide v 6.7.3-SQL Server 1.pdf"download >Logilab ELN Installation Guide v 6.7.3-SQL Server <i className="fa fa-download pl-2" aria-hidden="true"></i></a></li>
                  <li><a href="../image/MongoDB Installation Guide v 5.0.28 1.pdf"download>MongoDB Installation Guide v 5.0.28<i className="fa fa-download pl-2" aria-hidden="true"></i></a></li>
                </ul>
            </div>
          </div>
        </div>
       <Help/>         
    </div>
    </div>);
}