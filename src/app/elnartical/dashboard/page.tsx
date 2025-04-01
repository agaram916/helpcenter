'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
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
                    <section className='articel-content'>                                      
                    <h1><strong>Logilab ELN - Dashboard</strong></h1>
                            <ol>
                            <li>On the main menu, click <img  src='../../image/articel/eln/dashboard10.png' className='p-0 w-auto mx-2'/>and then click Dashboard. ELN <strong><strong>Dashboard</strong></strong>&nbsp;appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture332.png' className='p-0 my-3 w-100'/>  
                           </div>
                           <p className='figure mt-1'>FIGURE: ELN Dashboard</p> 
                            <p>Number of orders under the following status appears:</p>
                            <ul>
                            <li>Total Orders</li>
                            <li>Pending Orders</li>
                            <li>Completed Orders</li>
                            <li>Rejected Orders</li>
                            <li>Cancelled Orders</li>
                            </ul>
                            <p>ELN Dashboard enables the user to do the following:</p>
                            <ul>
                            <li>Search Module / Order / Template</li>
                            <li>Filter by Date or Date Range</li>
                            <li>Register Sheet Order</li>
                            <li>Register Protocol Order</li>
                            <li>Creating Sheet Templates from Dashboard</li>
                            <li>Creating Protocol Templates from Dashboard</li>
                            </ul>
                            <h2>1.1<img  src='../../image/articel/eln/edit-fliter.png' className='p-0 w-auto mx-2'/>;Filter by Date or Date Range</h2>
                            <p>The ELN Dashboard enables you fetch records based on a selected date or date range. Select <strong><strong>calendar</strong></strong>&nbsp;or <strong><strong>Date Range</strong></strong>.</p>
                            <h3>1.1.1&nbsp;Filter by Date</h3>
                            <p>To fetch records based on a selected date, follow these steps:</p>
                            <ol>
                            <li>Click. The filter dialog appears. In the filter dialog, click <strong><strong>Calendar</strong></strong>.</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture333.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Filter by Date</p>
                            <p>You can see data fetched for the selected date range in the Dashboard.</p>
                            <h3>1.1.2&nbsp;Filter by Date Range, Task and Project</h3>
                            <p>To search based on a specific period, task, and project, follow these steps:</p>
                            <ol>
                            <li>Click. The filter dialog appears. In the filter dialog, click <strong><strong>Date Range</strong></strong>.</li>
                            <li>Select <strong><strong>Filter from</strong></strong>and <strong><strong>Filter to</strong></strong>&nbsp;dates to specify the duration for which the records will be fetched.</li>
                            <li>To narrow the search, select <strong><strong>Task</strong></strong>and <strong><strong>Project</strong></strong>. Records are fetched for the selected task and project for the selected date range as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture334.png' className='p-0 my-3 w-100'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Filter by Date Range</p>
                            <h2>1.2&nbsp;Register Sheet Order</h2>
                            <p>ELN Dashboard enables you to register sheet orders from the dashboard. To create a sheet order from Dashboard, follow these steps:</p>
                            <ol>
                            <li>On the Dashboard, in the <strong><strong>Recent Orders</strong></strong>section, select <strong><strong>Sheet</strong></strong>&nbsp;and then click <strong><strong>REGISTER</strong></strong>&nbsp;as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture335.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Registering Sheet Orders from Dashboard</p>
                            <p>The <strong><strong>Create Order</strong></strong>&nbsp;dialog appears as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture336.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Create Order Dialog</p>
                            <ol start={3}>
                            <li>Fill in the required fields and then click <strong><strong>REGISTER ORDER</strong></strong>. The order is registered.</li>
                            <li>On the main menu click <strong><strong>Orders</strong></strong>, and then click <strong><strong>Sheet Orders</strong></strong>. The screen appears with the <strong><strong>ELN Orders</strong></strong>folder open. you can see the sheet order you created from the dashboard appear as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture337.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: ELN Orders Folder Showing Order Created from Dashboard</p>
                            <h2>1.3&nbsp;Register Protocol Order</h2>
                            <p>ELN Dashboard enables you to register protocol orders from the dashboard to create a protocol order from Dashboard, follow these steps:</p>
                            <ol>
                            <li>On the Dashboard, in the <strong><strong>Recent Orders</strong></strong>section, select <strong><strong>Protocol</strong></strong>&nbsp;and then click <strong><strong>REGISTER</strong></strong>&nbsp;as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture338.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Registering Sheet Orders from Dashboard</p>
                            <p>The <strong><strong>Create Order</strong></strong>&nbsp;dialog appears as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture339.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Create Order Dialog</p>
                            <ol start={5}>
                            <li>Fill in the required fields and then click <strong><strong>REGISTER ORDER</strong></strong>. The order is registered.</li>
                            <li>On the main menu click <strong><strong>Orders</strong></strong>, and then click <strong><strong>Protocol Orders</strong></strong>. Under the Pending Orders folder opens the folder <strong><strong>ELN Protocol Orders</strong></strong>/ <strong><strong>Dynamic Protocol Orders</strong></strong>. You can see the protocol order you created from the dashboard appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture340.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Protocol Order Created from Dashboard</p>
                            <h2>1.4&nbsp;Creating Sheet Template from Dashboard</h2>
                            <p>ELN enables you to create sheets and protocol templates from dashboard. To create a template from Dashboard, follow these steps:</p>
                            <ol>
                            <li>In the <strong><strong>Recent Templates</strong></strong>section, select <strong><strong>Sheet</strong></strong>&nbsp;and then click <strong><strong>NEW</strong></strong>.</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture341.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Creating Templates from Dashboard</p>
                            <p>The <strong><strong>Create Template</strong></strong>&nbsp;dialog appears as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture342.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Create Template Dialog</p>
                            <ol start={7}>
                            <li>In the <strong><strong>Protocol Name</strong></strong> field, type the name for the template you want to create.</li>
                            <li>In the <strong><strong> Category </strong></strong> field, type the category name if any for the template.</li>
                            <li>To set the template visibility, select <strong><strong> Site</strong></strong>/ <strong><strong> Only Me</strong></strong>/ <strong><strong> Project Team</strong></strong>.</li>
                            <li>Click <strong><strong>SAVE </strong></strong>. The template is created and appears in the Templates screen as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture343.png' className='p-0 my-3 w-100'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Template Created from Dashboard</p>
                            <p>You can open the template for designing.</p>
                            <h2>1.5&nbsp;Creating Protocol Template from Dashboard</h2>
                            <p>ELN enables you to create sheets and protocol templates from dashboard. To create a template from Dashboard, follow these steps:</p>
                            <ol>
                            <li>In the <strong><strong>Recent Templates</strong></strong>section, select <strong><strong>Protocol</strong></strong>&nbsp;and then click <strong><strong>NEW</strong></strong>.</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture344.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Creating Templates from Dashboard</p>
                            <p>The <strong><strong>Create Template</strong></strong>&nbsp;dialog appears as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture345.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Create Template Dialog</p>
                            <ol start={11}>
                            <li>In the <strong><strong>Protocol Name</strong></strong>field, type the name for the template you want to create.</li>
                            <li>In the <strong><strong> Category</strong></strong> field, type the category name if any for the template.</li>
                            <li>To set the template visibility, select <strong><strong>Site</strong></strong>/ <strong><strong>Only Me </strong></strong>/ <strong><strong>Project Team</strong></strong>.</li>
                            <li>Click <strong><strong>SAVE</strong></strong>. The template is created and appears in the list as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture346.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Template Created from Dashboard</p>
                            <ol start={15}>
                            <li>Click to open the template. The template opens for designing.</li>
                            </ol>
                            <h2>1.6&nbsp;Set Column Visibility</h2>
                            <p>Under <strong><strong>Recent Orders</strong></strong>&nbsp;and <strong><strong>Recent Templates</strong></strong>, you can set the column visibility as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture347.png' className='p-0 my-3 w-100'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Setting Column Visibility</p> 
                            <ul>
                            <li>Click <img  src='../../image/articel/eln/eyedropdown.png' className='p-0 mx-2 w-auto'/>to view list of columns you can add to the grid.</li>
                            <li>You can check the column name to make it visible in the grid.</li>
                            <li>Uncheck to remove from the grid.</li>
                            <li>You can add a maximum of six columns at a time.</li>
                            <li>If you select more than six columns, you will get an error message as shown in the figure:</li>
                            </ul>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture348.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Setting Column Visibility</p>
                            <h2>1.7&nbsp;Closing ELN</h2>
                            <p>When you close the tab without saving, ELN will display the following dialog for conformation to avoid loss.</p>
                            <p>Of data:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture349.png' className='p-0 my-3'/>  
                           </div>
                            <p className='figure mt-1'>FIGURE: Confirmation Dialog</p>
                            <ul>
                            <li>Click <strong><strong>Leave </strong></strong>to close the application without saving.</li>
                            <li>Click <strong><strong>Cancel</strong></strong> to cancel the closed operation. You can save your data and then close the application.</li>
                            </ul>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../quicktour">Quick tour</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../sheetorders">Sheet Orders</Link>
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