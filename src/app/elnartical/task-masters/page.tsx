'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react"

 const Masters = () => {
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
                    <h1><strong>Logilab ELN - Task Master</strong></h1>                    
                    <section className='articel-content'>                                      
                            <p>Masters&rsquo; module helps the user to add and manage master records for task, project and sample.</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp; field will appear. Hence, administrator user can create site specific tasks,projects and samples.</p>
                            <h2>1&nbsp;Task Master</h2>
                            <p>Task master screen helps the user to create, edit and retire tasks in Logilab ELN.</p>
                            <ol>
                            <li>On the main menu click, <img src='../../image/articel/eln/master.png' className='m-0 p-0 w-auto'/> and then click <strong><strong> Task Master</strong></strong>. By default, the <strong><strong> Task Master</strong></strong> tab appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture91.png' className='p-0 my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Task Master Screen</p>
                            <p>List of tasks/tests added appears. Details such as task name, category, description of the task, created user, created date and time and task status appear. Options to add, edit and retire tasks appear as shown in the above figure.</p>
                            <ol>
                            <li><img  src='../../image/articel/eln/pagination.png' className='m-0 p-0 w-auto'/>Use the arrows to navigate to the next, previous, first and last pages. Click the dropdown arrow and select the number of records to display on the screen.</li>
                            </ol>
                            <p><strong><strong>Note:</strong></strong>&nbsp; For administrators the <strong><strong> ActiveSite</strong></strong>&nbsp;  field will appear. Hence, administrator user can create site specific tasks.</p>
                            <h3>1.1.1&nbsp;Adding a Task/Test to the Task Master</h3>
                            <p>To add a new task or test to the task master, follow these steps:</p>
                            <ol>
                            <li>On the Task master screen, click <strong><strong>Add Task</strong></strong>. The <strong><strong>Create New Task </strong></strong> dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture92.png' className='p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Create New Task Dialog</p>
                            <ol start={2}>
                            <li>In the <strong><strong> Task name  </strong></strong> field, type the task name.</li>
                            <li>In the <strong><strong> Category </strong></strong> field, type the category name if any to classify the task.</li>
                            <li>In the <strong><strong> Description </strong></strong> field, type description about the task you add.</li>
                            <li>Click  <strong><strong> SUBMIT</strong></strong>.</li>
                            </ol>
                            <p>The task is added to the task list. You can see a confirmation message.</p>
                            <h3>1.1.2&nbsp;Editing Task</h3>
                            <ol>
                            <li>On the Task master screen, select a task you want to edit and then click <strong><strong> Edit Task</strong></strong>. The <strong><strong>Edit Task</strong></strong>&nbsp;dialog appears.</li>
                            <li>Do the required edit and then click  <strong><strong> SUBMIT </strong></strong>. You can see a confirmation message.</li>
                            </ol>
                            <h3>1.1.3&nbsp;Retiring Task</h3>
                            <ol>
                            <li>On the Task master screen, select a task you want to retire and then click <strong><strong> Retire </strong></strong>.</li>
                            <li>In the <strong><strong> Confirm</strong></strong> dialog, click <strong><strong>Yes </strong></strong>.</li>
                            </ol>
                            <p>The selected task is retired, and you can see a confirmation message. The <strong><strong> Task Status </strong></strong>&nbsp;appears as <strong><strong>Retired,</strong></strong>&nbsp; and you cannot activate the retired task. You cannot use the retired task in the transactions.</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../projectteamsetup">Project Team Setup</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../inventory">Inventory</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default Masters; 