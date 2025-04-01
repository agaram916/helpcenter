'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const AdditionalFeatures = () => {
    const { showButton, backToTop, isFixed }=useScrollButton();
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
                        <li><Link href="../sdmstroublearticle">SDMS Articles</Link></li>
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
                <h1><strong>Logilab SDMS - Additional Features</strong></h1>
                    <section className='articel-content'>                  
                    <p>Following additional features shall be integrated with SDMS on an as-needed basis:</p>
                    <h3><strong>1.1&nbsp;</strong> <strong><strong>Interfacer Settings</strong></strong></h3>
                    <ul>
                    <li>Enables interfacer settings exe in client server.</li>
                    <li>In instrument configuration enable/disable the interfacer instrument option.</li>
                    <li>Scheduler &ndash; Enables option for RS232 and TCP/IP.</li>
                    </ul>
                    <h3><strong>1.2&nbsp;</strong><strong><strong>LIMS Integration</strong></strong></h3>
                    <ul>
                    <li>Loads LIMS orders from LIMS.</li>
                    </ul>
                    <h2><strong>1.3&nbsp;</strong><strong><strong>Empower</strong></strong></h2>
                    <ul>
                    <li>Enables the Empower Scheduler item under scheduler menu.</li>
                    </ul>
                    <h3><strong>1.4&nbsp;</strong><strong><strong>Hide Template</strong></strong></h3>
                    <ul>
                    <li>Enables or disables Template association.</li>
                    </ul>
                    <h3><strong>1.5&nbsp;</strong><strong><strong>Auto Unlock</strong></strong></h3>
                    <ul>
                    <li>In the Instrument Lock screen, Unlock After Capture can be Enabled / Disabled. By Default, it is enabled if Auto Unlock is set as 1 in the Preferences screen.</li>
                    </ul>
                    <h3><strong>1.6&nbsp;</strong><strong><strong>Merge File Count</strong></strong></h3>
                    <ul>
                    <li><strong><strong>Merge File Count</strong></strong>option is applicable for interfacer instruments, RS-232 and TCP/IP. &nbsp;Multiple results will be captured in single file, until the instrument is unlocked.</li>
                    </ul>
                    <h3><strong>1.7&nbsp;</strong><strong><strong>Explore Client Alias Name</strong></strong></h3>
                    <ul>
                    <li>If ClientAliasName is set true, then client selections will display client alias name not the client name</li>
                    </ul>
                    <h3><strong>1.8&nbsp;</strong><strong><strong>Explore Instrument AliasName</strong></strong></h3>
                    <ul>
                    <li>If InstrumentAliasName is set true, instrument selections will display instrument alias name not the instrument name</li>
                    </ul>
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../monitorscheduler'>Monitor Scheduler</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../clientservicmonitor'>Client Service Monitor</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default AdditionalFeatures; 