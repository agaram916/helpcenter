'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const SetUp = () => {
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
                    <h1><strong>Logilab ELN &ndash; Setup</strong></h1>
                    <p>Setup module helps the administrator of Corporate Account and Academic Users account to create and manage users. Project and workflows. This setup is not applicable for single user and hence it will not available for single user login case.</p>
                    <h2>1.1&nbsp;&nbsp; User Management</h2>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite33.png' className='my-3 w-100'/>  
                    </div>
                    <p>User master enables us to create and manage user accounts.</p>
                    <p>To navigate to User Management page, click on &lsquo;<strong>Setup</strong>&rsquo; module, followed by clicking on &lsquo;<strong>User Management</strong>&rsquo; submenu.</p>                  
                    <p>To create a new user account, follow these steps:</p>
                    <ol>
                    <li>On the main menu click  <img  src='../../image/articel/eln/Setup.png' className='mx-2  w-auto'/>and then click User Management. The User Master tab appears as shown in the figure:</li>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite35.png' className='my-3 w-100'/>  
                    </div>
                    </ol>
                    <p>In the User Master page, you can see the list of users created. Also, options to add, edit, reset password and retire users appears as shown in the above figure.</p>
                    <p>Click Add User. The Create New User dialog appears as shown in the figure:</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite36.png' className='my-3 w-auto'/>  
                    </div>
                    <p>Enter a unique <strong>Username</strong>.</p>
                    <p>Enter <strong>Profile name</strong> to identify the user.</p>
                    <p>Enter a unique <strong>Email id</strong>.</p>
                    <p>Enter <strong>Designation</strong> and <strong>Attach Signature</strong> optionally.</p>
                    <p>Click <strong>SUBMIT</strong> button.</p>
                    <p>Once the user is added, the following page will be displayed in which the confirmation message will show up. The newly added user will get listed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite37.png' className='my-3 w-100'/>  
                    </div>
                    <p>To edit the existing user details, click on <strong>&lsquo;Edit</strong>&rsquo; button.</p>
                    <p>&lsquo;<strong>Edit User</strong>&rsquo; dialog window will be displayed.</p>
                    <p>Fields such as <strong>Profile Name, Email ID, Designation </strong>and <strong>Signature </strong>can be modified.</p>
                    <p>Once completed, click on <strong>SUBMIT</strong> button to save the changes.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite38.png' className='my-3 w-auto'/>  
                    </div>

                    <p><strong>USERNAME UPDATED SUCCESSFULLY</strong> message will get displayed.</p>
                    <p>To unlock the locked user, click on &lsquo;<strong>Unlock</strong>&rsquo; button.</p>
                    <p>To reset the password, click on &lsquo;<strong>Reset Password</strong>&rsquo; button.</p>
                    <p>To retire the existing Active user, select the user and click on &lsquo;<strong>Retire</strong>&rsquo; button.</p>
                    <p>Click &lsquo;<strong>Yes</strong>&rsquo; button to confirm in the confirmation dialog window.</p>
                    <p>&nbsp;</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite39.png' className='my-3 w-auto'/>  
                    </div>
                    <p>Once the user is retired, the same cannot be used.</p>
                    <h2>1.2&nbsp;&nbsp; Project Management</h2>
                    <p>In order to manage projects in Logilab ELN lite, from the <strong>Setup</strong> Main menu, navigate to <strong>Project Management</strong> submenu page</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite40.png' className='my-3 w-100'/>  
                    </div>
                    <p>On the Project Management Tab, there are 3 subtabs namely Project Master, Project Team and Task Master.</p>
                    <p><strong><u>Project Master</u></strong></p>
                 
                    <p>The pre-configured Projects will be displayed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite41.png' className='my-3 w-100'/>  
                    </div>
                    <p>The user can optionally use any of these projects.</p>
               
                    <p>In order to create a new project, click on &lsquo;<strong>ADD</strong>&rsquo; button.</p>
                 
                    <p>&lsquo;<strong>Add New</strong>&rsquo; dialog window appears.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite42.png' className='my-3 w-auto'/>  
                    </div>
                    <p>Enter Project Name and Select the Project Team.</p>
                    <p>Click on &lsquo;<strong>SUBMIT</strong>&rsquo; to save the newly created-project record.</p>
                   
                    <p>The newly-created project details get displayed on the project Master page along with the confirmation message.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite43.png' className='my-3 w-100'/>  
                    </div>
                    <p>&nbsp;</p>
                    <p><strong><u>Project Team</u></strong></p>
                    <p>In order to create a configure project team, navigate to Project Team page by clicking on &lsquo;<strong>Project Team</strong>&rsquo; subtab.</p>
                    <p>Project Team page will be displayed in which the list of existing project teams will be displayed on the left side panel.</p>
                    <p>On the right- side panel, you have the option to select and add the users to the project team.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite44.png' className='my-3 w-100'/>  
                    </div>
                    <p>Select the project team name on the left side panel followed by selecting the user name (by selecting the checkboxes).</p>
                    <p>Click on &lsquo;Save&rsquo; button to save the changes.</p>
                    <p>The confirmation message will get displayed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite45.png' className='my-3 w-100'/>  
                    </div>
                    <p>To retire the project team permanently, click on &lsquo;<strong>Retire</strong>&rsquo; button after selecting the project team.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite46.png' className='my-3 w-auto'/>  
                    </div>
                    <p>Click &lsquo;<strong>Yes</strong>&rsquo; on the confirmation dialog window to complete the retire action.</p>
                    <p><strong><u>Task Master</u></strong></p>
                    <p>To add a new task, click on <strong>Task Master</strong> subtab, which will navigate to Task Master page.</p>
                    <p>The list of preconfigured Tasks will be displayed.</p>
                    <p>The user either can use the existing tasks or choose to create a new task.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite47.png' className='my-3 w-100'/>  
                    </div>
                    <p>In order to create a new task, click on &lsquo;<strong>Add Task</strong>&rsquo; button.</p>
                    <p>&lsquo;Create New Task&rsquo; dialog window will be displayed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite48.png' className='my-3 w-auto'/>  
                    </div>
                    <p>Enter valid values in the <strong>Task Name</strong>, <strong>Category</strong> and <strong>Description</strong> fields.</p>
                    <p>Click on &lsquo;<strong>SUBMIT</strong>&rsquo; button to confirm the creation of new task record.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite49.png' className='my-3 w-100'/>  
                    </div>
                    <p>The newly-created task record gets displayed on &lsquo;<strong>Task Master</strong>&rsquo; page.</p>
                    <p>To edit the existing task, select the same and click &lsquo;<strong>Edit task</strong>&rsquo; button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite50.png' className='my-3 w-auto'/>  
                    </div>
                    <p>&lsquo;<strong>Edit Task</strong>&rsquo; dialog window will be displayed.</p>
                    <p>Edit the required fields to modify the values.</p>
                    <p>Click on <strong>SUBMIT</strong> button on completing the edit.</p>             
                    <p>To retire the existing task, click on &lsquo;<strong>Retire</strong>&rsquo; button on &lsquo;<strong>Task Master</strong>&rsquo; page.</p>
                    <p>Confirmation dialog window will appear. Click on &lsquo;<strong>Yes</strong>&rsquo; button to confirm the retire action.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite51.png' className='my-3 w-auto'/>  
                    </div>
                    <p>This will permanently retire the tasks.</p>
                    <h2>1.3&nbsp;&nbsp; Workflows</h2>
                    <p>Workflow screen helps you to create workflows for sheet orders and protocol orders.</p>
                    <p>Workflows can be designed based on logic in each step. For example, the order created shall pass through the following steps in a workflow:</p>
                    <table className="table table-bordered table-hover">
        <thead className="table-dark">
            <tr>
                <th scope="col">Workflow Step</th>
                <th scope="col">Role Mapped</th>
                <th scope="col">Workflow Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Initiate</td>
                <td>Analyst</td>
                <td>Completed</td>
            </tr>
            <tr>
                <td>Review</td>
                <td>Reviewer</td>
                <td>Reviewed</td>
            </tr>
            <tr>
                <td>Approve</td>
                <td>Approver</td>
                <td>Approved</td>
            </tr>
        </tbody>
    </table>
            
                    <p>Each step in the workflow is mapped to a role. Once the sheet pass through a step, the status of the order is changed to the next step. The order should pass through all the steps in the workflow to successfully complete.</p>
                    <p>You can design work flow by adding user roles to each work flow step. To do so follow these steps:</p>
                    <p>Click on &lsquo;<strong>Setup</strong>&rsquo; main menu, followed by clicking on &lsquo;<strong>Workflows</strong>&rsquo; submenu.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite52.png' className='my-3 w-100'/>  
                    </div>
                    <p>The Task workflow page will be displayed. You can see the list of existing work flow steps on the left panel.</p>
                    <p>To create a new task work flow step, follow these steps:</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite53.png' className='my-3 w-100'/>  
                    </div>
                    <p>Click Add Step. You can see a new step created and prompts for the name.</p>
                    <p>Type the workflow step name you want to create.</p>
                    <p>Under <strong><em>Assign a User Role to the Workflow Step</em></strong>, click to select the user role for the selected work flow step. You can select multiple user roles for the step.</p>
                    <p>Click <strong><em>Save</em></strong>. You will see a success message as shown in the &ldquo;Workflow Updated Successfully&rdquo;</p>
                    <p>The workflow step is created. Same way, you can add maximum 3 steps to the workflow.</p>
                    <p><strong>Note:</strong>&nbsp; By following the same above steps, the template workflows can be configured by navigating to Template Workflows page, followed by either &lsquo;Sheet Template&rsquo; workflow or &lsquo;Protocol Template&rsquo; workflow by selecting the type accordingly.</p>
                    <p><strong><u>Sheet Template workflow page</u></strong></p>
               
                    <p>On the Workflow page, choose <strong>Template Workflow</strong> followed by <strong>Sheet</strong> radio button option</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite54.png' className='my-3 w-100'/>  
                    </div>
                    <p>The setup of Sheet workflow is exactly same as in the case of Task workflow.</p>
                
                    <p>Follow the same steps as mentioned for Task workflow.</p>
                  
                    <p><strong><u>Protocol Template Workflow page</u></strong></p>
                 
                    <p>On the Workflow page, choose <strong>Template Workflow</strong> followed by <strong>Protocol</strong> radio button option</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite55.png' className='my-3 w-100'/>  
                    </div>
                    <p>The setup of protocol workflow is exactly same as in the case of Sheet workflow.</p>
                    <p>Follow the same steps as mentioned for Sheet workflow.</p>
                    </section>                   
                </div>
                    <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../tasks">Tasks</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../templates'>Templates</Link>
                        </div>
                    </div>
                    </div>                    
                </div>
             </div>
            <Help/>
        </div>
    );
}
export default SetUp; 