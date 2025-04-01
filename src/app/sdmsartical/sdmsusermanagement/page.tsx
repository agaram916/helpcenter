'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const SDMSUserManagement = () => {
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
                        <li><Link href="../sdmstroublearticle">SDMS Article</Link></li>
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
                    <h1><strong>Logilab SDMS - User Management</strong></h1>
                        <h2>1 User Management</h2>
                        <p className='text-left'>The User Management screen enables you to create and manage user groups and users. You can create user group and then group/create users under user groups.</p>
                        <p>Manage User interface helps you to do the following tasks:</p>
                        <ul>
                        <li>Create new user group</li>
                        <li>Set access rights to user groups</li>
                        <li>Create new user</li>
                        </ul>
                        <h2><strong>1.1&nbsp;</strong><strong><strong>Create user Group</strong></strong></h2>
                        <ol>
                        <li>On the main menu click , and then click   <img  src='../../image/articel/SDMS/contact.png' className='mx-2 w-auto'/> <strong><strong>User Management</strong></strong>. The User Group screen appears as shown in the figure: &nbsp;</li>
                        </ol>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture110.png'  className='p-0 my-3 w-75'/> 
                        </h4>
                        <p className='figure m-0 p-0'>FIGURE: 85 - User Management &ndash; User Master Screenb</p>        
                        <ol>
                        <li>In the <strong><strong>User Group</strong></strong>tab, click. <img  src='../../image/articel/SDMS/groupcontact.png' className='mx-2 w-auto'/>  The <strong><strong>Add New Group</strong></strong>&nbsp;dialog appears as shown in the figure:</li>
                        </ol>

                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture111.png'  className='p-0 my-3'/> 
                        </h4>
                        
                        <p className='figure mt-1 p-0'>FIGURE: 86 - Add New Group Dialog</p>
                        <ol start={2}>
                        <li>In the <strong><strong>Group Name</strong></strong>box, type the name of the user group you want to create and then click  <strong><strong>Save</strong></strong>. You can see the new user group created and appear in the user group list.</li>
                        </ol>
                        <h3><strong>1.1.1&nbsp;</strong><strong><strong>Edit user group</strong></strong></h3>
                        <ol>
                        <li>To edit the user group, select the user group from the list and then click <strong><strong>Edit</strong></strong>. In the <strong><strong>Edit User Group</strong></strong>dialog, edit user group name and then click <strong><strong>Save</strong></strong>.</li>
                        </ol>
                        <h3>1.1.2&nbsp;Activate or deactivate user group:</h3>
                        <ul>
                        <li>To activate or deactivate an user group, select the user group from the list and then click . <img  src='../../image/articel/SDMS/Active.png' className='mx-2 w-auto'/>   You will see a confirmation message saying &ldquo;Do you want to Activate / Deactivate User Group? Click <strong><strong>Ok</strong></strong>. The user group will be activated / deactivated.</li>
                        </ul>
                        <h2><strong>1.2&nbsp;</strong><strong><strong>Creating new user</strong></strong></h2>
                        <p>To create/add a new user, follow these steps:</p>
                        <ol>
                        <li>On the main menu click, <img  src='../../image/articel/SDMS/contact.png' className='mx-2 w-auto'/> and then click <strong><strong>User Management</strong></strong>. In the User Management screen, click <strong><strong>User Master</strong></strong>. The <strong><strong>User Master</strong></strong>tab appear as shown in the figure:</li>
                        </ol>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture111.png'  className='p-0 my-3 '/> 
                       </h4>
                        <p className='figure mt-1 p-0'>FIGURE:- User Management - User Master Screen</p>

                        <ol start={3}>
                        <li>In the <strong><strong>User Master</strong></strong>screen, in the <strong><strong>Group Name</strong></strong>&nbsp;box select the user group you want to create user. And then click.  <img  src='../../image/articel/SDMS/addplus.png' className='mx-2 w-auto'/>  The add user dialog appears as shown in the figure:</li>
                        </ol>
                         <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture113.png'  className='p-0 my-3 '/> 
                       </h4>
                        <p className='figure mt-1 p-0'>FIGURE:- Add User Dialog</p>
                        <ol start={4}>
                        <li>In the <strong><strong>User Name</strong></strong>field, type the user name that you want to create for the user to login to SDMS.</li>
                        <li>In the <strong><strong>Profile Name</strong></strong>field, type the designation of the user.</li>
                        <li>In the <strong><strong>Email ID </strong></strong>field, type the user email id that can be used to recover forgot password.</li>
                        <li>In the <strong><strong>Profile Image</strong></strong>field, click Choose File and select the profile photo of the user.</li>
                        <li>From the <strong><strong>Group Name</strong></strong>field, select the user group where you want to group this user.</li>
                        <li>You can set the <strong><strong>Default Login Site</strong></strong>in the edit user screen.</li>
                        <li>Click <strong><strong>Approve</strong></strong>to approve the user. You can also approve user later.</li>
                        <li>Click <strong><strong>Submit</strong></strong>.</li>
                        </ol>
                        <h2><strong>1.3&nbsp;</strong><strong><strong>Other Options in the User Master Screen</strong></strong></h2>
                        <h3><strong>1.3.1&nbsp;</strong><strong><strong>Edit User</strong></strong></h3>
                        <ol>
                        <li>On the main menu click , and then click  <img  src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/> <strong><strong>User Management</strong></strong>. In the User Management screen, click <strong><strong>User Master</strong></strong>.</li>
                        <li>In the <strong><strong>User Master</strong></strong>tab select the user you want to edit and then click . The <strong>Edit User</strong>dialog  <img  src='../../image/articel/SDMS/edit.png' className='mx-2 w-auto'/> appears as shown in the figure:</li>
                        </ol>
                      <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture114.png'  className='p-0 my-3 '/> 
                       </h4>
                        <p className='figure mt-1 p-0'>FIGURE: 89 - Edit User Dialog</p>
                        <ol start={5}>
                        <li>In the <strong><strong>Default Login Site</strong></strong> field, select the site the user can login by default. In the Login screen the <strong><strong> Site</strong></strong>&nbsp;field will be automatically filled if the <strong><strong> Default Login Site</strong></strong>&nbsp; field is set here.</li>
                        </ol>
                        <p><strong><strong>Note:</strong></strong>&nbsp;You cannot edit <strong><strong> Username </strong></strong>and<strong><strong>&nbsp;Approve </strong></strong> fields.</p>
                        <ol start={13}>
                        <li>Do required changes and then click <strong><strong> Submit</strong></strong> to save the changes.</li>
                        </ol>
                        <h3><strong>1.3.2&nbsp;</strong><strong><strong>Retire User Account</strong></strong></h3>
                        <p>If a user account is no longer required, you can retire the user account. To do so, follow these steps:</p>
                        <p><strong><strong> Warning</strong></strong>:  An user account once retired cannot be activated again. </p>
                        <ol>
                        <li>In the <strong><strong>User Master</strong></strong> tab, select the user you want to retire and then click  <img src='../../image/articel/SDMS/Retair.png' className='mx-2 w-auto'/> </li>
                        <li>An <strong><strong>Audit Trail</strong></strong>screen appears for authentication. Type your password, reason and comments appropriately and then click <strong><strong>Submit</strong></strong>.</li>
                        </ol>
                        <p><strong><strong>Note</strong></strong>: The user account is retired. Hence, you cannot activate, edit or approve the user account.</p>
                        <h3><strong>1.3.3&nbsp;</strong><strong><strong>Reset Password</strong></strong></h3>
                            <p>In the <strong><strong>User Master</strong></strong>&nbsp;tab, select the user account and then click. <img  src='../../image/articel/SDMS/power.png' className='mx-2 w-auto'/> The user is allowed to reset the password on their next login.</p>
                        <h3><strong>1.3.4&nbsp;</strong><strong><strong>Unlock</strong></strong></h3>
                        <p>User account will be locked after three consecutive invalid password entry attempts. Select the locked user account and then click<img  src='../../image/articel/SDMS/unlock.png' className='mx-2 w-auto'/>to unlock the user account.</p>
                        <h3><strong>1.3.5&nbsp;</strong><strong><strong>Active/Deactive</strong></strong></h3>
                        <ol>
                        <li>You can temporarily deactivate a user account for some reasons. To do so, follow these steps:</li>
                        <li>In the <strong><strong>User Master</strong></strong>tab, select the user you want to deactivate and then click <img  src='../../image/articel/SDMS/Active.png' className='mx-2 w-auto'/></li>
                        </ol>
                        <ol start={3}>
                        <li>An audit trail screen appears for authentication. Type your password, reason and comments appropriately and then click <strong><strong>Submit</strong></strong>.</li>
                        </ol>
                        <p><strong><strong>Note</strong></strong>: The user account is deactivated. Hence, the user account cannot be used un till it is activated again.</p>
                        <ol start={14}>
                        <li>To activate user account, select the user you want to activate and then click . <img  src='../../image/articel/SDMS/Active.png' className='mx-2 w-auto'/></li>
                        <li>An audit trail screen appears for authentication. Type your password, reason and comments appropriately and then click <strong><strong>Submit</strong></strong>.</li>
                        </ol>
                        <h3><strong>1.3.6&nbsp;</strong><strong><strong>Approve</strong></strong></h3>
                        <p>While creating a user account, if it is not approved then the user account has to be approved to</p>
                        <p>use it. In the <strong><strong> Manage User</strong></strong>&nbsp; tab, select the unapproved user account and then click. <img src='../../image/articel/SDMS/approve.png' className='mx-2 w-auto'/> </p>
                        <h3><strong>1.3.7&nbsp;</strong><strong><strong> Import ADS </strong></strong></h3>
                        <p>Import ADS option helps you to import user accounts from a Domain. To do so, follow these steps.</p>
                        <ol>
                        <li>In the <strong><strong>User Master</strong></strong>tab, click. <img src='../../image/articel/SDMS/import.png' className='mx-2 w-auto'/>  The screen appears as shown in the figure:</li>
                        </ol>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture115.png'  className='p-0 my-3 '/> 
                       </h4>
                        <p className='figure mt-1 p-0'>FIGURE:– User Master - Import ADS screen</p>

                        <p>Follow the onscreen instructions to import users from a Domain.</p>
                        <h3><strong>1.3.8&nbsp; </strong><strong><strong>Export </strong></strong></h3>
                        <p>On the <strong><strong>Manage User</strong></strong> screen click . <img src='../../image/articel/SDMS/export.png' className='mx-2 w-auto'/> The list of user accounts will be exported to an EXCEL sheet.</p>
                        <h3><strong>1.3.9&nbsp;</strong><strong><strong> Import</strong> </strong></h3>
                        <ol>
                        <li>On the <strong><strong>Manage User</strong></strong>screen click. <img src='../../image/articel/SDMS/import.png' className='mx-2 w-auto'/>The Import Users dialog appears as shown in the figure:</li>
                        </ol>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture116.png'  className='p-0 my-3'/> 
                       </h4>
                        <p className='figure mt-1 p-0'>FIGURE:- Import Users Dialog</p>
                    
                        <ol start={16}>
                        <li>Click <strong><strong>Choose File</strong></strong>and locate the EXCEL file to import and then click <strong><strong>Upload</strong></strong>.</li>
                        </ol>
                        <h2><strong>1.4&nbsp;</strong><strong><strong>Set access rights to user groups</strong></strong></h2>
                        <p>To define access rights to the user groups, follow these steps:</p>
                        <ol>
                        <li>On the main menu click , <img  src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/>  and then click <strong><strong>User Management</strong></strong>.</li>
                        <li>In the <strong><strong>User Management</strong></strong>screen, click to select the <strong><strong>User Rights</strong></strong> The User Rights tab appears as shown in the figure:</li>
                        </ol>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture117.png'  className='p-0 my-3 w-75'/> 
                       </h4>
                        <p className='figure mt-1 p-0'>FIGURE:- User Management – User Rights Screen</p>
                        <p>In the User Rights tab you can see the list of modules and tasks in SDMS. And for each task you can define create, edit and delete rights for the selected user group.</p>
                        <ol start={17}>
                        <li>From the <strong><strong> Group Name</strong></strong> box, select the user group you want to define rights.</li>
                        <li>Click <strong><strong> Create</strong> </strong> / <strong><strong> Edit</strong></strong>&nbsp;/ <strong><strong> Delete</strong></strong> for the tasks in the modules that are applicable for the user group. You can also click <strong><strong> Allow</strong></strong>&nbsp;to grant access to the applicable Control Right.</li>
                        <li>Click <strong> <strong>Save </strong></strong>.</li>
                        <li>Click <strong><strong> Print</strong> </strong>to print the user rights details if required.</li>
                        </ol>
                        <h2><strong>1.5&nbsp;</strong><strong><strong>Online Users</strong></strong></h2>
                        <p>Online Users tab helps to view list of users currently logged in to the SDMS application. You can also chat with online users using the chat facility.</p>
                        <p>To view list of online users in SDMS application, follow these steps:</p>
                        <ol>
                        <li>On the main menu click , and then click  <img  src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/><strong><strong>User Management</strong></strong>.</li>
                        <li>In the <strong><strong>User Management</strong></strong>screen, click to select the <strong><strong>Online Users</strong></strong> The Online Users tab appears as shown in the figure:</li>
                        </ol>
                      <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture118.png'  className='p-0 m-0 w-75'/> 
                       </h4>
                        <p className='figure m-0 p-0'>FIGURE: - User Management – Online Users Tab</p>
                        <ol start={21}>
                        <li>Select a user from the list and then click <strong><strong>Chat</strong></strong>. The Chat screen appears as shown in the figure:</li>
                        </ol>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture119.png'  className='p-0 m-0 w-75'/> 
                       </h4>
                        <p className='figure m-0 p-0'>FIGURE:- Online User – Chat Screen</p>
                        <ol start={22}>
                        <li>In the <strong><strong>Message</strong></strong>box, type your message and then click <strong><strong>Send</strong></strong>. You can also receive messages from other online users and view the same on the left side under <strong><strong>Messages</strong></strong>&nbsp;as shown in the above figure.</li>
                        <li>Click <strong><strong>Clear </strong></strong>that appears on the top of the chat screento clear the chat history and the cleared chat history cannot be restored.</li>
                        <li>Click <strong><strong>Clear </strong></strong>that appears below the <strong><strong>Message</strong></strong>box to clear the message you just typed in the <strong><strong>Message</strong></strong></li>
                        </ol>
                        <h2>1.6 Setting up Password Polic</h2>
                        <p>To setup password policy, follow these steps:</p>
                        <ol>
                        <li>On the main menu click, and then click <img  src='../../image/articel/SDMS/contact.png' className='mx-2 w-auto'/> <strong><strong>Password Policy</strong></strong>. The Password Policy screen appears as shown in the figure:</li>
                        </ol>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture120.png'  className='p-0 my-3 w-75'/> 
                       </h4>
                        <p className='figure mt-1 p-0'>FIGURE:- Password Policy Screen</p>
                        <p>You can set up password policy for database based logins and domain based logins.</p>
                        <ol start={25}>
                        <li>By default you can setup password policy to <strong> <strong> Database Based Logins.</strong></strong></li>
                        <li>Setup basic rules for the password such as <strong> <strong> Minimum Password Length</strong></strong>, <strong> <strong>MaximumPassword Length</strong></strong>, <strong><strong>Password History </strong></strong>, <strong><strong> Password Expiry</strong></strong>duration and <strong><strong> Auto Lock Policy</strong></strong>.</li>
                        <li>To setup complex password policy, click to select the <strong> <strong> Complex Password Policy</strong></strong>check box.</li>
                        <li>Set up values for complex policies such as: <strong><strong> Minimum number of capital characters</strong></strong>, <strong> <strong>Minimum number of small characters</strong></strong>, <strong> <strong>Minimum number of numeric characters</strong></strong>, and<strong> <strong> Minimum number of special characters</strong></strong>.</li>
                        <li>Click <strong> <strong> Save</strong></strong>.</li>
                        </ol>
                        <h2><strong>1.7&nbsp;</strong><strong><strong> Set Scheduler rights to user groups</strong></strong></h2>
                        <p><strong><strong>Note:</strong></strong>&nbsp;scheduler Rights screen will be available only when the scheduler rights is enabled in the <strong><strong> Settings</strong></strong>&gt;&gt;<strong><strong> preferences </strong></strong>screen.</p>
                        <p> To define access rights to the user groups, follow these steps:</p>
                        <ol>
                        <li>On the main menu click, and then click     <img  src='../../image/articel/SDMS/contact.png' className='mx-2 w-auto'/> <strong><strong>User Management</strong></strong>.</li>
                        <li>In the <strong><strong>User Management</strong></strong>screen, click to select the <strong><strong>Scheduler Rights</strong></strong> The Scheduler Rights tab appears as shown in the figure:</li>
                        </ol>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture121.png'  className='p-0 my-3 w-100'/> 
                       </h4>
                        <p className='figure mt-1 p-0'>FIGURE:- User Management – Scheduler Rights Screen</p>
                        <p>You can see list of tasks scheduled in the screen. &nbsp;Select the group name and then the user name and then click to select the check box in the <strong><strong>Allow</strong></strong>&nbsp;column to set rights to the selected tasks.</p>
                        <ol start={30}>
                        <li>Click <strong><strong> Save</strong></strong>.  You will see a message saying &ldquo;Scheduler Rights Saved Successfully&rdquo;.</li>
                        </ol>
                    <p>&nbsp;</p> 
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../mastersclients'>Logilab SDMS Masters Clients</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../clearsql'>clear sql log</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default SDMSUserManagement; 