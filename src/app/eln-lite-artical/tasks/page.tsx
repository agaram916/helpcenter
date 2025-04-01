'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const Tasks = () => {
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
                        <li><Link href="../eln-lite-trouble-article">ELN Lite Article</Link></li>
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
                <div className='inner-details'>            
                 <section className='articel-content'> 
                    <h2><strong>Logilab ELN Lite - Register </strong><strong>and Process Tasks</strong></h2> 
                    <p>&nbsp;</p>
                    <p>The Sheet Tasks screen enables you to register tasks to be processed.</p>
                    <p><b>ELN Tasks:</b> Tasks shall be registered for tests, templates and analysis created in Logilab ELN.</p>
                    <p><b>Research Tasks:</b> Registering an task with this option enables the user to redesign / add or modify fields in the lab sheet during task processing.</p>
                    <p><b>Excel Tasks</b>: Registering tasks with this option will enable the user to import Excel sheets during task processing.</p>
                    <p><b>Sheet Validation:</b> Sheets that are designed/created are evaluated if they are working properly.</p>
                    <p>&nbsp;</p>
                    <p>To register ELN Labsheet Tasks, follow these steps:</p>
                    <p>On the main menu,<img src='../../image/articel/elnlite/tasks.png' className='mx-2 w-auto'/> click and then click <strong><em>Labsheet</em> Tasks</strong>.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite123.png' className='my-3 w-100'/>  
                    </div>
                    <p>The <b>Labsheet Tasks</b> screen appears as shown in the figure:</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite124.png' className='my-3 w-100'/>  
                    </div>
                    <p>The Labsheet Tasks screen consists of the following predefined folders.</p>
                    <ul>
                    <li><b>Pending Tasks:</b> Contains list of tasks registered and pending to process in each task type.</li>
                    <li><b>Completed Tasks:</b> Contains completed and approved tasks.</li>
                    <li><b>Assigned Tasks:</b> Tasks you assigned to other users appear here. These tasks will not have workflow steps. The user to whom you assigned the task will complete this task or in their absence, you, the owner who assigned the task shall complete the task. These tasks are visible only to you, the user to whom you assigned the task.</li>
                    <li><b>My Tasks:</b> Tasks assigned to you by other users appear here. These tasks will not have workflow steps. You can complete these tasks or the user who assigned the task to you can complete the task. These tasks are visible only to you and the user who assigned the task to you.</li>
                    <li><b>Shared Tasks:</b> List of tasks shared by you to other users and list of tasks shared to you by other users appear here.</li>
                    </ul>
                    <p>&nbsp;</p>
                    <h2>1.1&nbsp;&nbsp; Filter by Date</h2>
                    <p>You can filter tasks based on a selected date. To do so, follow these steps:</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite125.png' className='my-3 w-100'/>  
                    </div>
                    <ol>
                    <li>Click. <img  src='../../image/articel/eln/filter.png' className='mx-2  w-auto'/>The filter dialog appears. In the filter dialog, click Calendar. The calendar appears</li>
                    <li>Select a date to filter tasks. You can see tasks fetched for the selected date.</li>
                    </ol>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite126.png' className='my-3 w-100'/>  
                    </div>
                    <h2>1.2&nbsp;&nbsp; Filter by Date Range, Task and Project</h2>
                    <p>&nbsp;</p>
                    <p>To search tasks based on a specific period, task, project and search key, follow these steps:</p>
                    <ol>
                    <li>Click. <img  src='../../image/articel/eln/filter.png' className='mx-2  w-auto'/>The filter dialog appears. In the filter dialog, click<b>Date Range.</b></li>
                    <li>Select <b>Filter from</b> and <b>Filter To</b> dates to specify the duration for which the records will be fetched.</li>
                    <li>To narrow the search, select Task and Search By</li>
                    </ol>
                    <ul>
                    <li>In the <b>Search By</b> field select <b>Keyword.</b> The <b>Keyword field</b> appears. Type the key word to search tasks based on the given keyword.</li>
                    <li>In the <b>Search By </b>field select Search Content. The Search Content field appears. Type the content to search tasks based on the given content.</li>
                    </ul>
                    <ol start={4}>
                    <li>Records are fetched for the selected task, project and search by fields and for the selected date range. </li>
                    </ol>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite127.png' className='my-3 w-100'/>  
                    </div>
                    <h2>1.3&nbsp;&nbsp; Creating New Folder</h2>
                
                    <p>You can create your own folder and sub folders in ELN Lite.</p>
                    <p>To create a new folder, follow these steps:</p>
                    <ol>
                    <li>On the <b>Sheet Tasks</b> screen, click New Folder. The Create New Folder dialog appears as shown in the figure:</li>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite128.png' className='my-3 w-100'/>  
                    </div>
                    </ol>
                    <p>Enter the name of the folder in Folder Name field.</p>
                    <p>Select Folder Type.</p>
                    <p>Click <strong>Add</strong> button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite129.png' className='my-3 w-100'/>  
                    </div>
                    <p>The folder is created and message <strong>NEW FOLDER CREATED</strong> is displayed</p>
                    <p>&nbsp;</p>
                    <h2>1.4&nbsp;&nbsp; Upload Files</h2>
                    <p>Logilab ELN enables you to upload files to user defined folders/dynamic folders.</p>
                    <p><strong>Note:</strong>You cannot upload files to default / system folders.</p>
                    <p>To upload a file, follow these steps:</p>
                    <ol>
                    <li>Go to the user defined folder where you want to upload files and then click Upload as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite130.png' className='my-3 w-100'/>  
                    </div>
                    <p><strong>Choose</strong> <strong>Destination Folder</strong> dialog window is displayed</p>
                    <p>&nbsp;</p>
                    <p>Choose the path option and click <strong>NEXT</strong> button.</p>
                    <p>Note: If you want to create a new folder first and then upload files into it, click on <strong>NEW FOLDER</strong> button.</p>
                    <p>In Upload Files dialog window, click <strong>Select Files</strong> button</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite131.png' className='my-3 w-100'/>  
                    </div>
                    <p>It will navigate to the system folder.</p>
                    <p>Choose the folder first and select the file from the system.</p>
                    <p>Click on <strong>Open</strong> button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite132.png' className='my-3 w-100'/>  
                    </div>
                    <p>The selected file is uploaded and is indicated by &lsquo;<strong>Done</strong>&rsquo;.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite133.png' className='my-3 w-100'/>  
                    </div>
                    <p>Click &lsquo;<strong>Done</strong>&rsquo; button to navigate back to Tasks page.</p>
                    <p>The message <strong>FILE UPLOAD SUCCESSFULLY</strong> is displayed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite134.png' className='my-3 w-100'/>  
                    </div>
                    <h2>1.5 Register Sheet Task</h2>
                    <p>To register a sheet task, follow these steps:</p>
                    <ol>
                    <li>On the Sheet Tasks screen, click Register. The Create Tasks dialog appears as shown in the figure:</li>
                    </ol>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite135.png' className='my-3 w-100'/>  
                    </div>
                    <ol start={2}>
                    <li>Under <b>Task Type</b>, select the task type. If you want to register an ELN Tasks, then select <b>ELN Tasks - with Template.</b></li>
                    <li>In the <b>Task</b> field, select the task.</li>
                    <li>In the <b>Select Sheet Template</b> field, sheet templates mapped with the task appear. Select the template.</li>
                    <li>In the <b>Select a Material field</b>, select the material for the task.</li>
                    <li>In the <b>Select a Project</b> field, select the project. Based on the selected project, the project team workflow user list appears. The sheet will pass through the workflow steps and the respective user must approve the sheet in each step.</li>
                    <li>In the <b>Assign To</b> field, select Task Workflow or User for the task. If you select Task Workflow, then the task will pass through the workflow defined. If you select User, then you must select the user to assign the task.</li>
                    <li>In the Key Word field, type a keyword for the task you want to register.</li>
                    <li>Under <b>Save Within</b>, you can see user defined folders if any. Click to select the folder to store the task.</li>
                    <li>Click REGISTER. The task is registered and the same appears in the folders Pending Tasks&gt;&gt;ELN Tasks folders, by default. If a specific folder is selected, then task appears in the same.</li>
                    </ol>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite136.png' className='my-3 w-100'/>  
                    </div>
                    <ol start={11}>
                    <li>Click the task. You can see icons appear as shown in the figure:</li>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite137.png' className='my-3 w-auto'/>  
                    </div>
                    </ol>
                    <p> <img  src='../../image/articel/eln/CopyLink.png' className='mx-2 w-auto'/>   Copy Link: Copy and send the link to any external user to enable them to view the task content/details.</p>
                    <p><img src='../../image/articel/eln/Share2.png' className='mx-2 w-auto'/>Share: Share the task to other ELN users.</p>
                    <p><img src='../../image/articel/eln/TransactionHistory.png' className='mx-2 w-auto'/>Transaction History: View version history, transaction history and workflow history.</p>
                    <p><img src='../../image/articel/eln/NewTab.png' className='mx-2 w-auto'/>Open in New Tab: Open the task in a new tab enables user to open multiple tasks in new tabs for comparison.</p>
                    <ul>
                    <li><img src='../../image/articel/eln/CancelOrder.png' className='mx-2 w-auto'/>Cancel Task: Cancel task for some reason.</li>
                    </ul>
                    <p>Note: After creation of the Task, it has to routed through the configured workflow steps. For example, review and approve. The status of the Task must be in Approved status for processing it further.</p>
                    <h2>1.6&nbsp;Process Task</h2>
                    <p>Once an task is registered, the registered tasks appear in the Pending Tasks folder by default. If the task is registered with any specific folder, then it appears in the same folder.</p>
                    <p>&nbsp;</p>
                    <p>When you open the task for processing, the results from the instrument are captured and appear on the sheet. You can review results, calculations etc. and approve/reject the task.</p>
                    <p>&nbsp;</p>
                    <p>When approved the task goes to the next step in the workflow. The rejected task goes to the previous step in the workflow for corrections.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite138.png' className='my-3 w-100'/>  
                    </div>
                    <p>When the task is in the final step of the workflow, you can complete the task.</p>
                    <p>To process task, follow these steps:</p>
                    <p>On the <strong><em>Labsheet Tasks</em></strong> screen, select an task; click PROCESS button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite139.png' className='my-3 w-100'/>  
                    </div>
                    <p>Click on <strong>Complete Task</strong> button.</p>
                    <p>E-Signature dialog window appears.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite140.png' className='my-3 w-100'/>  
                    </div>
                    <p>Enter <strong>Password, Comments</strong> and select to check the checkbox of <strong>Yes, I Agree</strong>.</p>
                    <p>Click <strong>SUBMIT</strong> button.</p>
                    <p>&nbsp;</p>
                    <p>The status of the Task is changed from Approved to Completed.</p>
                    <p>The message TASK COMPLETED SUCCESSFULLY is also displayed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite141.png' className='my-3 w-100'/>  
                    </div>
                    <p>The completed tasks is moved from Pending Tasks folder to Completed Tasks folder.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite142.png' className='my-3 w-100'/>  
                    </div>
                </section>                   
                </div>
                    <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../inventory">Inventory</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../set-up'>User Setup</Link>
                        </div>
                    </div>
                    </div>                    
                </div>
             </div>
            <Help/>
        </div>
    );
}
export default Tasks; 