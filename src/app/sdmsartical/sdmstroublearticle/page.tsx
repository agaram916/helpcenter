"use client"
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function SdmsTroublearticle() {
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
                  <li><Link href="./">Home</Link></li>
                  <li><Link href="/product-document">Article products</Link></li>
              </ul>
          </nav>
       </div>
       <div className='troble-article-list'>
          <div className='container'>
              <h1>Logilab SDMS Tutorial Articles</h1>
              <div className='row'>
                  <div className='col-sm-6 mb-4'>
                      <h3 className='text-left'>FTP configuration</h3>
                      <ul className='artile-list text-left'>
                          <li><Link href="../ftpconfiguration">How to configure fTP for file upload</Link></li>
                          <li><Link href="../ftprights">How to define fTP rights</Link></li>
                          <li><Link href="../fTPdataview">Logilab SDMS-FTP Data View</Link></li>
                      </ul>
                  </div>
                  <div className='col-sm-6 mb-4'>
                      <h3 className='text-left'>Lock settings</h3>
                      <ul className='artile-list text-left'>
                          <li><Link href="../lockinstruments">How to lock instruments</Link></li>  
                      </ul>
                  </div>
                  <div className='col-sm-6 mb-4'>
                      <h3 className='text-left'>Masters</h3> 
                      <ul className='artile-list text-left'>
                          <li><Link href="../addsite">How to add a site in sdms</Link></li>
                          <li><Link href="../addinstrument"> How to add an instrument</Link></li>
                          <li><Link href="../parserkey">How to set parser key href methods</Link></li>
                          <li><Link href="../setuptemplates">How to setup templates</Link></li>
                          <li><Link href="../mastersclients">Logilab SDMS Masters Clients</Link></li>
                          <li><Link href="../sdmsusermanagement">Logilab SDMS User Management</Link></li>
                      </ul>
                  </div>
                  <div className='col-sm-6 mb-4'>
                      <h3 className='text-left'>Scheduler</h3>
                      <ul className='artile-list text-left'>
                          <li><Link href="../schedule">How to create a schedule for file upload</Link></li>
                          <li><Link href="../editschedule">How to edit schedules</Link></li>
                          <li><Link href="../extractfile">How to extract file metadata</Link></li>
                          <li><Link href="../downloadscheduler">Logilab SDMS  Download Scheduler</Link></li>
                          <li><Link href="../monitorscheduler">Logilab SDMS Monitor Scheduler</Link></li> 
                      </ul>
                  </div>
                  <div className='col-sm-6 mb-4'>
                      <h3 className='text-left'>Settings</h3>
                      <ul className='artile-list text-left'>
                          <li><Link href="../clearsql">How to clear sql log</Link></li>
                          <li><Link href="../configurepreferences">How to configure Preferences in sdms</Link></li>
                          <li><Link href="../workflow">How to setup work flow in sdms</Link></li> 
                      </ul>
                  </div>
                  <div className='col-sm-6 mb-4'>
                      <h3 className='text-left'>others</h3>  
                      <ul className='artile-list text-left'>
                          <li><Link href="../additionalfeatures">Logilab SDMS Additional Features</Link></li>
                          <li><Link href="../clientservicmonitor">Logilab SDMS Client Service Monitor</Link></li>
                          <li><Link href="../filedeletescheduler">Logilab SDMS File Delete Scheduler</Link></li>
                          <li><Link href="../instrumentlock">Logilab SDMS - Instrument Lock and Tags</Link></li> 
                      </ul>
                  </div>


                  <div className='col-sm-6 mb-4'>
                      <h3 className='text-left'>User management</h3>
                      <ul className='artile-list text-left'>
                          <li><Link href="../managenew">How to create and manage new user group</Link></li>
                          <li><Link href="../manageuser">How to create and manage user account</Link></li>
                          <li><Link href="../passwordpolicy">How to setup password policy</Link></li> 
                      </ul>
                  </div>
                 
              </div>
              
          </div>
       </div>
       <Help/>
  </div>
       
    
    </div>);
}