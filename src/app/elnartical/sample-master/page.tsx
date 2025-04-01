'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const Projecmaster = () => {
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
                        <li><Link href="../elntroublearticle">ELN Article</Link></li>
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
                    <h1><strong>Logilab ELN -Sample Master</strong></h1>                    
                    <section className='articel-content'>                                      
                            <h2>1&nbsp;Sample Master</h2>
                            <p>Sample master helps the user to add, edit and retire samples in Logilab ELN.</p>
                            <ol>
                            <li>On the main menu click,<img src='../../image/articel/eln/master.png' className='m-0 p-0 w-auto'/> and then click <strong><strong>Sample Master</strong></strong>. The <strong><strong>Sample Master</strong></strong>tab appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                                <img  src='../../image/articel/eln/Picture95.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Sample Master Screen</p>
                            <p>List of samples added appears. Options to add, edit and retire samples appear as shown in the above figure.</p>
                            <ol start={10}>
                            <li><img  src='../../image/articel/eln/pagination.png' className='m-0 w-auto'/> Use the arrows to navigate to the next, previous, first and last pages. Click the dropdown arrow and select the number of records to display on the screen.</li>
                            </ol>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific samples.</p>
                            <h3>1.3.1&nbsp;Adding a Sample to the Sample Master</h3>
                            <p>To add a new sample to the sample master, follow these steps:</p>
                            <ol>
                            <li>On the Sample master screen, click <strong><strong>Add Sample</strong></strong>. The <strong><strong>Create New Sample</strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                                <img  src='../../image/articel/eln/Picture96.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Create New Sample Dialog</p>
                            <ol start={4}>
                            <li>In the <strong><strong> Sample Name </strong></strong> field, type the sample name to add.</li>
                            <li>In the <strong><strong>Category</strong></strong> field, type the category name if any to classify the sample.</li>
                            <li>Click <strong><strong> SUBMIT</strong></strong>.</li>
                            </ol>
                            <p>The sample is added to the sample list. You can see a confirmation message.</p>
                            <h3>1.3.2&nbsp;Editing Sample</h3>
                            <ol>
                            <li>On the Sample master screen, select a sample you want to edit and then click <strong><strong> Edit Sample</strong></strong>. The <strong><strong>Edit Sample</strong></strong>dialog appears.</li>
                            <li>Do the required edit and then click <strong><strong>SUBMIT</strong></strong>. You can see a confirmation message.</li>
                            </ol>
                            <h3>1.3.3&nbsp;Retiring Sample</h3>
                            <ol>
                            <li>On the Sample master screen, select a sample you want to retire and then click <strong><strong> Retire</strong></strong>.</li>
                            <li>In the <strong><strong>Confirm</strong></strong>dialog, click <strong><strong> Yes</strong></strong>.</li>
                            </ol>
                            <p>The selected sample is retired, and you can see a confirmation message. The <strong><strong>Sample Status</strong></strong>&nbsp;appears as <strong><strong>Retired,</strong></strong>&nbsp;and you cannot activate the retired sample. You cannot use the retired sample in the transactions.</p>
                            <h2>1.4&nbsp;Unlock Orders</h2>
                            <p>The Unlock Orders screen helps to unlock locked orders.</p>
                            <ol>
                            <li>On the main menu click <img src='../../image/articel/eln/master.png' className='w-auto'/>and then click <strong><strong>Unlock Orders</strong></strong>. The <strong><strong>Unlock Orders</strong></strong>&nbsp;screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                                <img  src='../../image/articel/eln/Picture97.png' className='w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Unlock Order Screen</p>
                            <ol start={11}>
                            <li>You can see Sheet and Protocol tabs. All locked orders appear here. You can select an order from the list and then click <strong><strong>Unlock </strong></strong>to unlock the order.</li>
                            <li>By default, the <strong><strong> Sheet</strong></strong>tab appears. Select order(s) and then click <strong><strong> Unlock</strong></strong>&nbsp;to unlock the selected sheet orders.</li>
                            <li>Go to the <strong><strong>Protocol </strong></strong> tab, select order(s) and then click <strong><strong> Unlock </strong></strong> to unlock the selected protocol orders.</li>
                            </ol>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../project-master">Project Master</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../usersetup">User Setup</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default Projecmaster; 