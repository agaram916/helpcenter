'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import React, { useState ,useEffect } from "react";
import { SyncLoader } from 'react-spinners';
 const QuickTour = () => {
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
                <h1><strong>Logilab ELN - Getting Started</strong></h1>  
                    
                    <div className='inner-details'>            
                    <section className='articel-content'> 
                         <h2>1.1&nbsp;First Time Login &ndash; Password Generation</h2>
                                <p>Once the user account is created, you will receive a welcome mail from saas@agaramtech.com with Username and Password to login.</p>
                                <ol>
                                <li>Open browser, in the address bar type &ldquo;<a href="https://logilabelntesting.azurewebsites.net/">https://logilabelntesting.azurewebsites.net/</a>
                                &rdquo; and then press ENTER.</li>
                                </ol>
                                <p>The Logilab ELN login screen appears as shown in the figure:</p>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture2.png' className='my-3 w-100'/>  
                               </div>  
                                  <p className='figure mt-1'>FIGURE:-Dashboard Rights Screen</p>
                                <ol>
                                  <li>In the <strong><strong> Organization ID </strong></strong>field, type the organization id and then click <strong><strong>NEXT</strong></strong>. The Login screen appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture4.png' className='my-3 w-100'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: First Time Login Screen 2</p>
                                <p>If you login for the first time, follow these steps:</p>
                                <ol start={2}>
                                <li>In the <strong><strong>Username</strong></strong>field, type the login id received from your administrator or E-mail.</li>
                                </ol>
                                <p>Once you move the cursor to the <strong><strong>Password</strong></strong>&nbsp;field, the <strong><strong>New Password Generation </strong></strong>option appears as shown in the figure:</p>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture5.png'className='my-3'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: New Password Generation Screen</p>
                                <ol start={3}>
                                <li>In the <strong><strong>Old Password </strong></strong> field, type the password you received in the E-mail.</li>
                                <li>Type new password in the <strong><strong>New Password </strong></strong>  and  <strong><strong> Confirm Password</strong></strong></li>
                                <li>Click CREATE. &ldquo;The PASSWORD SUCCESSFULLY CREATED&rdquo; message appears and the screen prompts for password.</li>
                                </ol>
                                <h2>1.2&nbsp;Login</h2>
                                <p>To login to Logilab ELN, follow these steps:</p>
                                <ol>
                                <li>Open browser, in the address bar type &ldquo;https://logilabelntesting.azurewebsites.net/&rdquo; and then press ENTER.</li>
                                </ol>
                                <p>The Logilab ELN login screen appears as shown in the figure:</p>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture6.png' className='my-3 w-100'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Logilab ELN Login Screen1</p>
                                <ol start={6}>
                                <li>In the <strong><strong>Organization ID</strong></strong>field, type the organization id: for example, &ldquo;abc.onmicrosoft.com&rdquo; and then click <strong><strong>NEXT</strong></strong>&nbsp;as shown in the above figure. The screen appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture7.png' className='my-3 w-100'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Logilab ELN Login Screen2</p>
                                <ol start={7}>
                                <li>In the <strong><strong>Username</strong></strong> field, type the login id received from your administrator or E-mail.</li>
                                <li>In the <strong><strong>Password</strong></strong> field, type valid password.</li>
                                <li>In the <strong><strong>User Role</strong></strong> field, select user role to login. By default, the default user role will appear. However, you can click and select other user roles.</li>
                                <li>In the <strong><strong>Site</strong></strong> field, select the site to login.</li>
                                <li>In the <strong><strong>Domain</strong></strong> field, select the Domain.</li>
                                <li>In the <strong><strong>Language</strong></strong> field, <strong><strong>English</strong></strong>&nbsp;will appear by default. If required, change the language.</li>
                                <li>Click <strong><strong>Login</strong></strong>. On successful login, the Logilab ELN dashboard appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture8.png' className='my-3 w-100'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: ELN Dashboard</p>
                                <h2>1.3&nbsp;ELN Main Menu</h2>
                                <p>Logilab ELN main menu appears as shown in the figure:</p>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture9.png' className='my-3 w-auto'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Logilab ELN Main Menu</p>
                                <p>Logilab ELN main menu consists of the following:</p>
                                <p> <img  src='../../image/articel/eln/dashboard10.png' className='mx-2 w-auto'/> <strong><strong>Dashboard</strong></strong>: Enables you to view quick progress of the ELN orders. You can view the trend in the graph. Also enables creating sheet templates and protocol templates from dashboard.</p>

                                <p> <img src='../../image/articel/eln/orders.png' className='mx-2 p-0 w-auto'/><strong> <strong>Orders</strong></strong></p>
                                <ul>
                                <li><strong><strong>Sheet Orders</strong></strong>: Helps to register sheet orders and execute the orders. The <strong><strong>Pending Orders</strong></strong>and <strong><strong>Completed Orders</strong></strong>&nbsp;folders enables manage orders pending and completed.</li>
                                <li><strong><strong>Protocol Orders</strong></strong>: Enables register protocol orders/dynamic protocol orders and execute. <strong><strong>Pending Orders</strong></strong>and <strong><strong>Completed Orders</strong></strong>&nbsp;folders enables manage protocol orders pending and completed.</li>
                                </ul>
                                <p><img src='../../image/articel/eln/Templates.png' className='mx-2 p-0 w-auto'/><strong><strong>Templates</strong></strong>:</p>
                                <ul>
                                <li><strong><strong>Sheet Templates: </strong></strong>Enables creating templates for lab sheets that are used in <strong><strong>Sheet Orders</strong></strong></li>
                                <li><strong><strong>Protocol Templates: </strong></strong>Enables creating templates for protocols that are used in <strong><strong>Protocol Orders</strong></strong></li>
                                <li><strong><strong>Template Mapping: </strong></strong>Helps you to map sheet templates and protocol templates to Tests/Tasks.</li>
                                </ul>
                                <p><img src='../../image/articel/eln/masters.png' className='mx-2 p-0 w-auto'/><strong><strong>Masters</strong></strong>: Enables create and manage basic masters in ELN.</p>
                                <p><img src='../../image/articel/eln/Setup.png' className='mx-2 p-0 w-auto'/><strong><strong>Setup</strong></strong>: Helps to create and manage user accounts, user roles, Domains and define access to user/ groups. Also enables defining order workflow, sheet workflow, Protocol workflow and password policy.</p>
                                <p><img src='../../image/articel/eln/Audit Trail.png' className='mx-2 p-0 w-auto'/><strong><strong>Audit Trail</strong></strong>: Enables you set up audit trail options in Logilab ELN modules, screens and tasks. Also enables view audit trail log.</p>
                                <p><img src='../../image/articel/eln/Inventory.png' className='mx-2 p-0 w-auto'/><strong><strong>Inventory</strong></strong>: Enables to create and manage masters and transactions related to inventory.</p>
                                <p><img src='../../image/articel/eln/Logbook.png' className='mx-2 p-0 w-auto'/><strong><strong>Logbook</strong></strong>: Enables creating and manage logbook to track activity and material usage in inventory.</p>
                                <h2>1.4&nbsp;Common Features of Logilab ELN</h2>
                                <hr/>
                                <h3>1.4.1&nbsp;List of Common Controls in ELN</h3>
                                <hr/>
                                <p>The descriptions of common controls in ELN are listed below:</p>
                                <div className="container mt-4">
                                <table className="table table-bordered text-left">
                                    <thead>
                                        <tr>
                                            <th ><strong><strong>Button Name</strong></strong></th>
                                            <th ><strong><strong>Image</strong></strong></th>
                                            <th ><strong><strong>Description</strong></strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong><strong>Save</strong></strong></td>
                                            <td><img src='../../image/articel/eln/Save.png' className='mx-2 p-0 w-auto'/></td>
                                            <td>Will save the changes done to the current screen / dialog.</td>
                                        </tr>
                                        <tr>
                                            <td><strong><strong>Submit</strong></strong></td>
                                            <td><img src='../../image/articel/eln/Submit.png' className='mx-2 p-0 w-auto'/></td>
                                            <td>Will submit the entries given by the user to perform certain task.</td>
                                        </tr>
                                        <tr>
                                            <td><strong><strong>Add</strong></strong></td>
                                            <td><img src='../../image/articel/eln/Add.png' className='mx-2 p-0 w-auto'/></td>
                                            <td>Enables add new records to the masters.</td>
                                        </tr>
                                        <tr>
                                            <td><strong><strong>Edit</strong></strong></td>
                                            <td><img src='../../image/articel/eln/Edit.png' className='mx-2 p-0 w-auto'/></td>
                                            <td>Enables edit the selected record in the master</td>
                                        </tr>
                                        <tr>
                                            <td><strong><strong>Delete</strong></strong></td> 
                                            <td><img src='../../image/articel/eln/Delete.png' className='mx-2 p-0 w-auto'/></td>
                                            <td>Enables delete the selected record in the master</td>
                                        </tr>
                                        <tr>
                                            <td><strong><strong>Import</strong></strong></td>
                                            <td><img src='../../image/articel/eln/Import.png' className='mx-2 p-0 w-auto'/></td>
                                            <td>Imports data to the masters</td>
                                        </tr>
                                        <tr>
                                            <td><strong><strong>Export / Download</strong></strong></td>
                                            <td><img src='../../image/articel/eln/Download.png' className='mx-2 p-0 w-auto'/></td>
                                            <td>Exports downloads master data to Excel / PDF / CSV</td>
                                        </tr>
                                        <tr>
                                            <td><strong><strong>Close</strong></strong></td>
                                            <td><img src='../../image/articel/eln/Close.png' className='mx-2 p-0 w-auto'/></td>
                                            <td>Will close the screen / dialog without saving.</td>
                                        </tr>
                                        <tr>
                                            <td><strong><strong>Refresh</strong></strong></td>
                                            <td><img src='../../image/articel/eln/Refresh.png' className='mx-2 p-0 w-auto'/></td>
                                            <td>Will clear the entries in the current form for fresh entry.</td>
                                        </tr>
                                        <tr>
                                            <td><strong><strong>Mandatory Fields</strong></strong></td>
                                            <td><img src='../../image/articel/eln/Mandatory Fields.png' className='mx-2 p-0 w-auto'/></td>
                                            <td>All fields marked with a * are mandatory and must be filled to avoid error/alert messages.</td>
                                        </tr>
                                    </tbody>
                                </table>
                          </div>
                                <h3>1.4.2&nbsp;Add Records to the Master</h3>
                                <hr/>
                                <p>To add a new record to the master, follow these steps:</p>
                                <ol>
                                <li>Open the master to which you want to add a new record.</li>
                                <li>In the master screen, click. The add screen appears. Fill in mandatory fields and then click  <img src='../../image/articel/eln/Add.png' className='mx-2 p-0 w-auto'/><strong><strong>SUBMIT</strong></strong>.</li>
                                </ol>
                                <h3>1.4.3&nbsp;Pagination</h3>
                                <ol>
                                <li>To set number of records to view in the master screen, click the dropdown arrow and select number of records to display on the screen as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture10.png' className='my-3'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Set Number of Records for View</p>
                                <p>You can view the selected number of records in the master screen. For example, if you select 5. Then each page displays 5 records.</p>
                                <ol start={14}>
                                <li>Use the arrows to navigate to the next, previous, first and last pages. You can also navigate the pages by clicking on the page numbers as shown in the above figure.</li>
                                </ol>
                                <h3>1.4.4&nbsp;Import Master Data from Excel</h3>
                                <p>The import option is available for User, Instrument, Delimiters, Method Delimiters, Method, Unit, Section and Material masters.</p>
                                <p>Logilab ELN enables you import master data from Excel. To do so, follow these steps:</p>
                                <ol>
                                <li>On the master screen, click <strong><strong>Import</strong></strong>. The <strong><strong>Import Data</strong></strong> dialog appears.</li>
                                <li>Click <strong><strong>Choose File</strong></strong>, locate the Excel file and then click <strong><strong>Open</strong></strong>. If the fields in the Excel file matches fields in the master, the data is loaded and appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture11.png' className='my-3'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Set Number of Records for View</p>
                                <ol start={16}>
                                <li>Click <strong><strong>SAVE</strong></strong>. Data is loaded to the master.</li>
                                </ol>
                                <p>If the fields in the Excel file does not match the fields in the master, an <strong><strong>Import Data</strong></strong>&nbsp;dialog appears as shown in the figure:</p>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture12.png' className='my-3'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Importing Master Data - Different Field Namesw</p>
                                <ol start={17}>
                                <li>Under <strong><strong>Default Columns,</strong></strong>fields from the master are listed. Under <strong><strong>Imported Columns,</strong></strong>&nbsp;fields from the Excel file are listed. You must map fields from the Excel sheet to fields in the master. You must map fields at least for the mandatory fields.</li>
                                <li>Click <strong><strong>SAVE</strong></strong>. Data is loaded to the master as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture13.png' className='my-3 w-100'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Data Imported from Excel</p>

                                <p>ELN allows import duplicate values to the master.</p>
                                <h3>1.4.5&nbsp;Search Module / Order / Template</h3>
                                <p>ELN Dashboard enables you to search and jump to the module / order / template from the Dashboard.</p>
                                <ol>
                                <li>In the search bar, select <strong><strong>Module </strong></strong>/ <strong><strong>Order</strong></strong>/ <strong><strong>Template</strong></strong>.</li>
                                <li>Type first few letters of the module/order/template name. You can see the matching records pop as shown in the figure:</li>
                                </ol>
                                 <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture14.png' className='my-3'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Search Module</p>
                                <ol start={20}>
                                <li>Select the module to open. You can see the selected module opens directly from the Dashboard.</li>
                                <li>When you search an order, you can see the orders matching the search key pop as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture15.png' className='my-3'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Search Order</p>

                                <p>Details such as Order name, template name, task name, project name, date and &nbsp;time order created and keyword along with the template type appears.</p>
                                <ol start={22}>
                                <li>Narrow the search further by selecting template type: <strong><strong>Sheet</strong></strong>/ <strong><strong>Protocol</strong></strong>.</li>
                                </ol>
                                <h3>1.4.6&nbsp;Group Records Based on Selected Column</h3>
                                <p>Logilab ELN allows you to group records in a screen by a selected field/column.</p>
                                <ol>
                                <li>Drag a column header and drop it as shown in the figure:</li>
                                </ol>
                                  <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture16.png' className='my-3 w-100'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Drag and Drop Column to Group Records</p>

                                <p>You can use multiple columns to group records.</p>
                                <p>The records are grouped by the selected column and appear in alphabetical ascending order as shown in the figure:</p>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture17.png'className='my-3 w-100'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Records Grouped Based on the Selected Column</p>
        
                                <ol start={23}>
                                <li>Clickto display the grouped records in descending order.</li>
                                <li>Click that appears in the column name used for grouping to clear grouping.</li>
                                </ol>
                                <h2>1.5&nbsp;Change User Role / Site</h2>
                                <h3>1.5.1&nbsp;Switch User Role</h3>
                                <p>If the user account is mapped to multiple user roles, the user will have options listed to switch to other user roles. To switch user role, follow these steps:</p>
                                <ol>
                                <li>Click on theicon that appears at the top-right corner of the screen. The <strong><strong>Switch User Role</strong></strong>dialog appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture18.png' className='my-3'/>  
                               </div> 
                                <p className='figure mt-1'>FIGURE: Switch User Role Dialog</p>

                                <ol start={25}>
                                <li>Select a user role to switch. The <strong><strong>Confirm</strong></strong>dialog as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture19.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: Confirm - User Role Switch Dialog</p>
                                <ol start={26}>
                                <li>Click <strong><strong>Yes</strong></strong>. The user role is switched, and you will see the role appear as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture20.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: User Role Switched</p>

                                <h3>1.5.2&nbsp;Switch Site</h3>
                                <p>If the user account is mapped to multiple sites, the user will have options listed to switch to other sites. To switch site, follow these steps:</p>
                                <ol>
                                <li>Click on the <img  src='../../image/articel/eln/contact.png' className='w-auto mx-2'/>icon that appears at the top-right corner of the screen. Go to the Switch Site tab as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture21.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: Switch Site Tab</p>

                                <ol start={27}>
                                <li>Select a site to switch. The dialog as shown in the figure:</li>
                                </ol>
                                    <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture22.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: Confirm - Site Switch Dialog</p>

                                <ol start={28}>
                                <li>In the <strong><strong> Password</strong> </strong>field, type a valid password and then click <strong><strong>Login</strong></strong>.</li>
                                </ol>
                                <h2>1.6&nbsp;Adding/Changing Profile Picture</h2>
                                <p>To change your profile picture in ELN, follow these steps:</p>
                                <ol>
                                <li>Click on the profile <img  src='../../image/articel/eln/Profile.png' className='mx-2  w-auto'/>  iconthat appears at the top-right corner of the screen. The <strong><strong>Change Your Profile Picture</strong></strong>&nbsp;dialog appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture23.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE:Changing Profile Picture</p>
                                <ol start={29}>
                                <li>Click <strong><strong>Upload Picture</strong></strong>. In the file <strong><strong>Open</strong></strong>dialog, locate and select the picture and then click <strong><strong>Open</strong></strong>.</li>
                                </ol>
                                <p>The picture is uploaded and appears as shown in the figure:</p>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture24.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: Uploading Profile Picture</p>
                                <ol start={30}>
                                <li>Click <strong><strong>SAVE</strong></strong>. You will see a &ldquo;PROFILE PICTURE UPDATED SUCCESSFULLY&rdquo; message and the updated picture appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture25.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: Profile Picture Updated</p>
                                <h2>1.7<img  src='../../image/articel/eln/notification.png' className='mx-2 w-auto'/> Notification</h2>
                                <p>The notification feature helps the user to view all the activities related to them and the project team the user belongs to. The number of unviewed notifications appears in red on top of the notification bell.</p>
                                <ol>
                                <li>Click on the notification bell. The list of notifications appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture26.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: Notification Feature</p>
                                <p>The notifications are classified in to two categories: <strong><strong>Myself</strong></strong>&nbsp;and <strong><strong>Team</strong></strong>.</p>
                                <p>Under <strong><strong>Myself</strong></strong>- alerts related to the user currently logged in will appear.</p>
                                <p>Under <strong><strong>Team</strong></strong>- alerts related to the team the user belongs to appears.</p>
                                <p>Once you view the notifications the alert will disappear.</p>
                                <p>You can also click to open the order to view or work on it as shown in the figure:</p>
                               <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture27.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: Opening Order Screen from Notifications</p>
                                <h2>1.8&nbsp;Profile Menu</h2>
                                <p>The Profile menu enables you to change password, change settings and logout. Click on the dropdown iconthat appears at the top-right corner of the screen. The profile menu appears as shown in the figure:</p>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture28.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: Profile Menu</p>
                                <p><strong><strong>Note:</strong></strong>&nbsp;The <strong><strong>Change Password</strong></strong>&nbsp;option will not appear in the Profile menu when the user log in using Microsoft user Id.</p>
                                <ol>
                                <li>On the <strong><strong>Profile</strong></strong>drop down menu, click <strong><strong>Change Password</strong></strong>. The change password dialog appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture29.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: Change Password Dialog</p>
                                <ol start={31}>
                                <li>In the <strong><strong>Old Password</strong></strong> field, type the old password.</li>
                                <li>Type new password in the <strong><strong>New Password</strong></strong> and <strong><strong>Confirm Password</strong></strong></li>
                                <li>Click <strong><strong>SUBMIT</strong></strong>.</li>
                                </ol>
                                <h3>1.8.1&nbsp;Help</h3>
                                <ol>
                                <li>On the <strong><strong>Profile </strong></strong> dropdown menu, click <strong><strong>Help</strong></strong>. You can see the <strong><strong>Help</strong></strong>&nbsp;screen appears in new tab as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture30.png' className='my-3 w-100'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: Help Screen</p>
                                <ol start= {34}>
                                <li>Use the left panel to navigate through the topics.</li>
                                </ol>
                                <h3>1.8.2&nbsp;Settings</h3>
                                <ol>
                                <li>On the <strong><strong>Profile </strong></strong>drop down menu, click <strong><strong>Settings</strong></strong>. You can see the <strong><strong>General Account Settings</strong></strong>dialog appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture31.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: General Account Settings Dialog</p>
                                <p>If required, you can change the date format.</p>
                                <ol start={35}>
                                <li>In the <strong><strong>Date Preference</strong></strong>field, select a date format. And then click <strong><strong>Update Format</strong></strong>.</li>
                                </ol>
                                <h3>1.8.3&nbsp;About</h3>
                                <ol>
                                <li>Click the <strong><strong>Profile</strong></strong> drop-down menu and then click &nbsp;The <strong><strong>About</strong></strong>&nbsp;dialog appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture32.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: About Dialog</p>
                                <ol start={36}>
                                <li>You can see license information, version and copyright details of Logilab ELN.</li>
                                <li>Click <strong><strong>CLOSE</strong></strong>to close the <strong><strong>About</strong></strong></li>
                                </ol>
                                <h3>1.8.4&nbsp;Logout</h3>
                                <p>The Logout option helps you logout Logilab ELN.</p>
                                <ol>
                                <li>Click the <strong><strong>Profile </strong></strong>drop-down menu and then click &nbsp;The <strong><strong>Confirm</strong></strong>&nbsp;dialog appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture33.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: Confirmation Dialog</p>
                                <ol start= {38}>
                                <li>Click <strong><strong>Yes </strong></strong>to logout.</li>
                                </ol>
                                <p>&nbsp;</p>
                                <h3>1.8.5&nbsp;License</h3>
                                <p>For administrator login, the License option will appear in the profile menu as shown in the figure:</p>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture34.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: License Option in Profile Menu</p>
                                <ol start={39}>
                                <li>Click <strong><strong>License</strong></strong>. The license information appears as shown in the figure:</li>
                                </ol>
                                <div className='inner-image'>
                                  <img  src='../../image/articel/eln/Picture35.png' className='my-3'/>  
                               </div>
                                <p className='figure mt-1'>FIGURE: License Information</p>
                                <ol start={40}>
                                <li>Click <strong><strong>PRINT</strong></strong> to download the license information in PDF format to your local storage. The downloaded PDF appears as shown in the figure:</li>
                                </ol>                         
                    </section>                   
                </div>
                    <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            {/* <h4>Previous article</h4>
                            <Link to="/articeldetailsfive">How to configure audit trail</Link> */}
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../dashboard'>Dashboard</Link>
                        </div>
                    </div>
                    </div>                    
                </div>
             </div>
            <Help/>
        </div>
    );
}
export default QuickTour; 