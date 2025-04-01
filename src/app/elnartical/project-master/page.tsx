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
                    <h1><strong>Logilab ELN -Project Master</strong></h1>                    
                    <section className='articel-content'>                                      
                            <h2>1&nbsp;Project Master</h2>
                            <p>Project master screen helps to create, edit and retire projects. In addition, you can map the project team to the project in the project master.</p>
                            <ol>
                            <li>On the main menu click <img src='../../image/articel/eln/master.png' className='mx-2 p-0 w-auto'/>and then click <strong><strong>Project Master</strong></strong>. The <strong><strong>Project Master</strong></strong>&nbsp;tab appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture93.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Project Master Screen</p>
                            <p>List of projects added appears. Options to add, edit and retire projects appear as shown in the above figure.</p>
                            <ol start={6}>
                            <li> <img  src='../../image/articel/eln/pagination.png' className='mx-2 w-auto'/>Use the arrows to navigate to the next, previous, first and last pages. Click the dropdown arrow and select the number of records to display on the screen.</li>
                            </ol>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific projects.</p>
                            <h3>1.2.1&nbsp;Adding a Project to the Project Master</h3>
                            <p>To add a new project to the Project master, follow these steps:</p>
                            <ol>
                            <li>On the Project master screen, click <strong><strong>ADD</strong></strong>. The <strong><strong>Add New Project</strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture94.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add New Project Dialog</p>
                            <ol start={7}>
                            <li>In the <strong><strong> Project Name </strong></strong> field, type the project name you want to add.</li>
                            <li>In the <strong><strong> Select a Project Team</strong></strong> field, select the project team to add to the project.</li>
                            <li>Click <strong><strong> SUBMIT</strong></strong>.</li>
                            </ol>
                            <p>The project is added to the project list. You can see a confirmation message.</p>
                            <h3>1.2.2&nbsp;Editing Project</h3>
                            <ol>
                            <li>On the project master screen, select a project you want to edit and then click <strong><strong> Edit </strong></strong>.</li>
                            <li>In the <strong><strong> Select a Project Team </strong></strong> field, change the project team mapped to the project if required. You can change the project team until the project members are assigned with a task/job.</li>
                            <li>Do the required edit and then click <strong><strong>SUBMIT</strong></strong>. You can see a confirmation message.</li>
                            </ol>
                            <h3>1.2.3&nbsp;Retiring Project</h3>
                            <p>You cannot retire a project if the project is used in transactions.</p>
                            <ol>
                            <li>On the Project master screen, select a project you want to retire and then click <strong><strong>Retire</strong></strong>.</li>
                            <li>In the <strong><strong>Confirm</strong></strong> dialog, click <strong><strong>Yes</strong></strong>.</li>
                            </ol>
                            <p>The selected project is retired, and you can see a confirmation message. The <strong><strong>Task Status</strong></strong> &nbsp;appears as <strong><strong>Retired,</strong></strong>&nbsp;and you cannot activate the retired project. You cannot use the retired project in the transactions.</p>                            
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../user-rights">User Rights</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../projectteamsetup">Project Team Setup</Link>
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