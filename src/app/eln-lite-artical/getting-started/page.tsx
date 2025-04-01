'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const GettingStarted = () => {
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
                    <h1><strong>Logilab ELN Lite - Getting Started</strong></h1>
                    <h2>1.1&nbsp;&nbsp; New User Registration</h2> 
                    <p>Open browser, in the address bar type &ldquo;<a href="https://logilabelnlite.azurewebsites.net/">https://logilabelnlite.azurewebsites.net/</a> and then press ENTER.</p>
                    <p>The Logilab ELN login screen appears as shown in the figure</p>
                    <p>You can get started by using your Email ID or Google / Microsoft account to create an account.</p>
                    <p>To create a new user using email id, click on &lsquo;Sign Up&rsquo; link.</p>
                    <p><a href="https://logilabelnlite.azurewebsites.net/">https://logilabelnlite.azurewebsites.net/</a></p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite1.png' className='my-3 w-100'/>  
                    </div> 
                    <p>In the &lsquo;Choose Account Type&rsquo; page, select the type of account. The following are the types of account:</p>
                    <ul>
                    <li>1. <b>Personal Account: </b>This is the account to be created for a single user.</li>
                    <li>2. <b>Corporate Account:</b>This is the account that is used by any organization having multiple users. In this case, maximum 10 users can be created by the administrator of the Corporate Account user.</li>
                    <li>3.<b>Academic Users:</b> This account can be used by academic users such as students, researchers, etc. In this case, maximum of 10 users can be created by the administrator of the Academic User account.</li>
                    </ul>
                    <p> <b>Personal Account Registration</b></p>
                    <p>In &lsquo;Choose Account Type&rsquo; page, select &lsquo;Personal Account&rsquo;.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite2.png' className='my-3 w-100'/>  
                    </div>
                    <p>In &lsquo;Account Info&rsquo; page, enter the details such as Organization name, Designation and Country and click &lsquo;Continue&rsquo; button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite3.png' className='my-3 w-100'/>  
                    </div>
                    <p>In the &lsquo;Register&rsquo; page, enter Name and Email id. Click &lsquo;Register&rsquo; button.</p>
                    <p>If Google or Microsoft user names need to be used, click on the respective icons instead of clicking &lsquo;Register&rsquo; button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite4.png' className='my-3 w-100'/>  
                    </div>
                    <p>In case of non-google non-microsoft users&rsquo; registration, email notification will be received by the user.</p>
                    <p>Note down the temporary password as in the email notification. This password needs to be used while logging into the system for the first-time.</p>
                    <p>Click on the link &lsquo;Click here to visit Logilab ELN&rsquo;s Login page&rsquo;.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite5.png' className='my-3 w-100'/>  
                    </div>
                    <p>In case of Microsoft or google account users, the following screen will be displayed. The users can use the same to register.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite6.png' className='my-3 w-100'/>  
                    </div>
                    <p><b>Corporate User Registration</b></p>
                    <p>Click on &lsquo;Corporate Account&rsquo; option in &lsquo;Choose Account Type&rsquo; page.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite7.png' className='my-3 w-100'/>  
                    </div>
                    <p>In &lsquo;Account Info&rsquo; page, enter valid values in Lab Team Size (default 1, Maximum 10) Organization Name, Designation and Country fields.</p>
                    <p>Click &lsquo;Continue&rsquo; button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite8.png' className='my-3 w-100'/>  
                    </div>
                    <p>An email notification will be received which has temporary password.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite9.png' className='my-3 w-100'/>  
                    </div>
                    <p>Note down the password and enter the same in the application login page, while logging into the system for the first time.</p>
                    <p>Click on the link &lsquo;Click here to visit Logilab ELN&rsquo;s Login page&rsquo;.</p>               
                    <p><b>Academic Users</b></p>
                    <p>Click on &lsquo;Academic Users&rsquo; option in &lsquo;Choose Account Type&rsquo; page</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite10.png' className='my-3 w-100'/>  
                    </div>
                    <p>On &lsquo;Account Info&rsquo; page, enter valid values in Academic Team Size (default 1, Maximum 10) Academic Institute Name, Level of study, Field of study and Country fields.</p>
                    <p>Click &lsquo;Continue&rsquo; button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite11.png' className='my-3 w-100'/>  
                    </div>
                    <p>On the &lsquo;Register&rsquo; page, enter valid values in Name and Email-id fields.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite12.png' className='my-3 w-100'/>  
                    </div>
                    <p>Click on &lsquo;Register&rsquo; button.</p>
                    <p>An email notification will be received which has temporary password.</p>
                    <p>Note down the password and enter the same in the application login page, while logging into the system for the first time.</p> 
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite143.png' className='my-3 w-100'/>  
                    </div>           
                    <p>Click on the link &lsquo;Click here to visit Logilab ELN&rsquo;s Login page&rsquo;.</p>
                    <p><strong>Registration Completion</strong></p>
                    <p>On successfully completion of the registration process, the following information page will be displayed.</p>
                    <p>To navigate and login to the ELN Lite, click on &lsquo;Login&rsquo; button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite13.png' className='my-3 w-100'/>  
                    </div>
                    <h2>1.2&nbsp;&nbsp; Login</h2>
                    <p>To login to Logilab ELN Lite, follow these steps:</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite14.png' className='my-3 w-100'/>  
                    </div>
                    <p>In the <b>Username field,</b> type the login id received from your administrator or E-mail.</p>
                    <p>In the <b>Password field</b>, type valid password.</p>
                    <p>For the first-time login, the following will be displayed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite15.png' className='my-3 w-100'/>  
                    </div>
                    <p>Enter valid values in <strong>New Password</strong> (must be different from the existing one) and <strong>Confirm Password</strong> fields.</p>
                    <p>Click on &lsquo;<strong>Set Password</strong>&rsquo; button.</p>
                    <p>PASSWORD RESET SUCCESSFULLY message will be displayed.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite16.png' className='my-3 w-100'/>  
                    </div>
                    <p>Click <strong><em>SIGNIN</em></strong>.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite17.png' className='my-3 w-100'/>  
                    </div>
                    <p>On successful login, the Logilab ELN Lite dashboard appears as shown in the figure:</p>
                    <h2>1.3&nbsp;&nbsp; ELN Lite Main Menu</h2>
                    <p>Logilab ELN Lite main menu appears as shown in the figure:</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite18.png' className='my-3 w-auto'/>  
                    </div>
                  
                    <p>Logilab ELN main menu consists of the following:</p>
                    <p> <img  src='../../image/articel/elnlite/Dashboard.png' className='mx-2  w-auto'/> <b>Dashboard:</b> Enables you to view quick progress of the ELN orders. You can view the trend in the graph. Also enables creating sheet templates and protocol templates from dashboard.</p>
                    <p><img  src='../../image/articel/elnlite/tasks.png' className='mx-2  w-auto'/>Tasks</p>
                    <p>Sheet Tasks: Helps to register sheet orders and execute the orders. The Pending Tasks and Completed Tasks folders enables manage orders pending and completed.</p>
                    <p>Protocol Tasks: Enables register protocol orders/dynamic protocol orders and execute. Pending Tasks and Completed Tasks folders enables manage protocol orders pending and completed.</p>
                    <p><img  src='../../image/articel/elnlite/Templates.png' className='mx-2  w-auto'/><b>Templates:</b></p> 
                    <p>Sheet Templates: Enables creating templates for lab sheets that are used in Sheet Tasks screen.</p>
                    <p>Protocol Templates: Enables creating templates for protocols that are used in Protocol Tasks screen.</p>
                    <p>Template Mapping: Helps you to map sheet templates and protocol templates to Tests/Tasks.</p> 
                    <p> <img  src='../../image/articel/elnlite/Inventory.png' className='mx-2  w-auto'/><b>Inventory</b>: Enables to create and manage masters and transactions related to inventory.</p>
                    <p> <img  src='../../image/articel/elnlite/Setup.png' className='mx-2  w-auto'/><b>Setup:</b> Helps to create and manage user accounts. Also enables defining Task workflow, Sheet workflow &amp; Protocol workflow.</p>
                    <h2>1.4&nbsp;&nbsp; Common Features of Logilab ELN</h2>
                    <h3>1.4.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; List of Common Controls in ELN</h3>
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
                    <h3>1.4.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add Records to the Master</h3>
                    <p>To add a new record to the master, follow these steps:</p>
                    <ol>
                    <li>Open the master to which you want to add a new record.</li>
                    <li>In the master screen, click . <img src='../../image/articel/eln/Add.png' className='mx-2 p-0 w-auto'/>The add screen appears. Fill in mandatory fields and then click SUBMIT.</li>
                    </ol>
                    <h3>1.4.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pagination</h3>
                    <p>To set number of records to view in the master screen, click the dropdown arrow and select number of records to display on the screen as shown in the figure:</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite19.png' className='my-3 w-auto'/>  
                    </div>
                    <p>You can view the selected number of records in the master screen. For example, if you select 5. Then each page displays 5 records.</p>
                    <p>Use the arrows to navigate to the next, previous, first and last pages. You can also navigate the pages by clicking on the page numbers as shown in the above figure.</p>
                    <h3>1.4.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notification</h3> 
                    <p>The notification feature helps the user to view all the activities related to them and the project team the user belongs to. The number of unviewed notifications appears in red on top of the notification bell.</p>
                    <ol>
                    <li>Click on the notification bell icon. The list of notifications appears.</li>
                    </ol>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite20.png' className='my-3 w-auto'/>  
                    </div>

                    <h2>1.5&nbsp;&nbsp; Profile Menu</h2>
                    <p>The Profile menu enables you to view/update profile, view license information and logout. Click on the dropdown icon that appears at the top-right corner of the screen. The profile menu appears as shown in the figure:</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite21.png' className='my-3 w-100'/>  
                    </div>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite22.png' className='my-3 w-auto'/>  
                    </div>
                    <ol>
                    <li>On the Profile drop down menu, click License. The License dialog appears as shown in the figure:</li>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite23.png' className='my-3 w-100'/>  
                    </div>
                    <li>Click &lsquo;x&rsquo; button</li>
                    <li>Now click &lsquo;My Profile&rsquo; link.
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite24.png' className='my-3 w-auto'/>  
                    </div>                
                 </li>
                    </ol>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite25.png' className='my-3 w-100'/>  
                    </div>
                    <p>The Logout option helps you logout Logilab ELN Lite.</p>
                        <ol>
                        <li>Click the Profile drop-down menu and then click</li>
                        <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite26.png' className='my-3 w-auto'/>  
                    </div> 
                        <li>The Confirm dialog appears as shown in the figure:</li>
                        <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite27.png' className='my-3 w-auto'/>  
                    </div>
                        <li>Click Yes to logout.</li>
                        </ol>
                        <h2>1.1&nbsp;&nbsp; Get Started</h2>
                        <p>Click on &lsquo;Get Started&rsquo; button.</p>
                        <p>It will display &lsquo;Get Started&rsquo; page</p>
                        <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite28.png' className='my-3 w-auto'/>  
                    </div>
                        <p>It will display &lsquo;Get Started&rsquo; page</p>
                        <p>On clicking the various menu options, the corresponding module page will be navigated.</p>
                        <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite29.png' className='my-3 w-auto'/>  
                    </div>
                        <h2>1.7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Upgrade</h2>
                        <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite30.png' className='my-3 w-auto'/>  
                    </div>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite31.png' className='my-3 w-100'/>  
                    </div>
                        <p>On clicking &lsquo;Upgrade&rsquo;&nbsp; button in the &lsquo;License Information&rsquo; dialog window, the &lsquo;Contact Us&rsquo; page of the Logilab ELN website page will&nbsp; be displayed.</p>
                        <p>On referring the contact information displayed on this page, the user can request for the upgrade from Lite to full version of Logilab ELN.</p>
                        <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite32.png' className='my-3 w-100'/>  
                    </div>
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
                            <Link href='../inventory'>Inventory management</Link>
                        </div>
                    </div>
                    </div>                    
                </div>
             </div>
            <Help/>
        </div>
    );
}
export default GettingStarted; 