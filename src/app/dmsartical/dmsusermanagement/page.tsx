'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const DMSUserManagement = () => {
    const [showButton, setShowButton] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    });

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        const protocolmenu = document.querySelector('.protocolmenu');
        if (protocolmenu) {
            const offset = protocolmenu.getBoundingClientRect().top;
            const top = window.scrollY;

            if (top >= offset) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
    }
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
    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
         <div className='product'>
            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row mb-0">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="../../product-document">Article Products</Link></li>
                        <li><Link href="../dmstroublearticle">DMS Articles</Link></li>
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
                  <h1>Qualis DMS – User Management</h1>
                  <div className='articel-content'>
                        <p className='text-left'>
                        Masters in Qualis DMS are used to store and maintain data outside a process and refer it in process using "Master" field type in the form. For example, when you store a sample, you may want to look up the storage data such as organisation, department, lab, site, section etc. In this example storage location data can be created and managed as a master. Also, user data can be created and managed as a master.   </p>
                        <p className='text-left'>In Qualis DMS you can add/create masters, edit master details and delete existing masters</p>
                        <p className='text-left'>Qualis DMS allows you to create and manage organization as follows:</p>
                        <p className='text-left'> Qualis DMS allows you to create and manage user by <p>User Management</p></p>
                        <p className='text-left'> Users, Role, Control and Designation are created and managed as masters.</p>

                        <h3 className='pb-3 mt-3'>1.1User Management</h3>
                        <p className='text-left'>Qualis DMS allows you to create users, roles, assign multiple roles to users, assign screen level and control level permissions to refine access to your lab information.</p>
                        <p className='text-left'><b>User roles and permissions</b></p>

                        <p className='text-left'>Qualis DMS users are assigned user roles, which in turn control their permissions and access to DMS tools and their ability to view, add, modify, and delete documents and other DMS data.</p>

                        <h3 className='pb-3'>1.Designation</h3>
                        <p className='text-left'>Designation master is used to create and manage designations that are used in user management, and workflows. </p>
                        <h3 className='pb-3'>Creating a Designation</h3>
                        <p className='text-left'> To create a new designation, follow these steps</p>
                        <p className='text-left'> On the Explorer, click <b>MASTER, User Management</b> and then click <b>Designation. </b>The <b>Designation. </b> master screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture43.png'  className='m-0 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Designation Master Screen</p>
                        <p className='text-left'>In the Designation master screen you can see the list of designations created. Also options to add, edit and delete designations appear as shown in the above figure.</p>  
                        <p className='text-left'>2.Click action menu and then click <b>Add..</b> The Add Designation dialog appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture44.png'  className='m-0 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add Designation Dialog</p>

                        <p className='text-left'>3.In the <b>Designation Nam</b>e field, type the name for the designation..</p>
                        <p className='text-left'>In the <b>Description</b> field, type the description.</p>
                        <p className='text-left'>5.Click <b>SUBMIT.</b></p>
                        <p className='text-left'>You can see the designation you created listed in the Designation master.</p>               
                        <h3 className='pb-3 mt-3'>Editing and Deleting Designations</h3>
                        <p className='text-left'>2.To delete a designation, in the Designation master screen, select the designation you want to delete, click action menu and then click  <b>Delete</b> </p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture45.png'  className='m-0 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Edit Designation Dialog</p>
                            <h3 className='pb-3'>1User Role</h3>
                        <p className='text-left'>To create a new role, follow these steps:</p>
                        <p className='text-left'>1.On the Explorer, click <b>MASTER,</b>click <b>User Management</b> and then click User Role. The User Role tab appears as shown in the figure:</p>
 
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture46.png'  className='m-0 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - User Role Tab</p>

                        <p className='text-left'>2.In the User Role tab, click action menu and then click <b>Add.</b> The <b>Add.</b> User Role dialog appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture47.png'  className='m-0 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add User Role Dialog</p>
                        <p className='text-left'>3.In the <b>User Role </b>field, type name for the role you want to create. </p>
                        <p className='text-left'>4.In the <b>Description</b> field, type the description.</p>
                        <p className='text-left'>5.Click <b>SUBMIT.</b></p>

                        <p className='text-left'>You can see the role you created listed in the user role master..</p>

                        <h3 className='pb-3'>Editing and Deleting User Roles</h3>
                        <p className='text-left'>1.To edit a role, in the User Role master screen, select the role, click action menu and then click Edit. In the Edit Role dialog, do required changes and then click SUBMIT. </p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture48.png'  className='m-0 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Edit User Role Dialog</p>
                        <p className='text-left'>To delete a role, in the User Role master screen, select the role you want to delete, click action  menu and then click <b>Delete.</b> </p>
                        <h3 className='pb-3'>Users</h3>

                        <p className='text-left'>To create a new user account, follow these steps:</p>
                        <p className='text-left'>On the Explorer, click <b>MASTER,</b> click <b>User Management</b> and then click Users. The Users tab appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture49.png'  className='m-0 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Users Tab</p>
                        <p className='text-left'>2.In the <b>Users</b> tab, click action menu and then click <b>Add.</b> The <b>Add.</b> Users screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture50.png'  className='m-0 p-0 w-75'/>   
                        </h4>

                        <p className='figure mt-1'>FIGURE: - Add User Screen</p>

                        <p className='text-left'>3.Type the <b>Login Id, First Name, Last Name, Initials, Department, Address 1, Country Name, E-mail</b> and other fields as required.:.</p>
                        <p className='text-left'>4.Click <b>SUBMIT.</b></p>
                        <p className='text-left'>Now you can assign role(s) to the user account. You can map multiple roles to a user account and set a role as default role.</p>

                        <h3 className='pb-3'>Mapping User Account to Role(s)</h3>
                        <p className='text-left'>To map user account to a role, follow these steps:</p>
                        <p className='text-left'>The new user account is created and listed in the grid in the Users screen.</p>
                        <p className='text-left'>1.In the Users screen, select the user account to assign a role..</p>
                        <p className='text-left'>2.Under Role, click action menu and then click Add as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture51.png'  className='m-0 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Adding User Role Screen</p>

                        <p className='text-left'>The <b>Add</b> User Role dialog appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture52.png'  className='m-0 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Adding User Role Screen</p>
                     <p className='text-left'> 3.In the <b>User Role</b> list field, select the role you want to assign to the user.</p>
                     <p className='text-left'>4.Click <b>Is Active</b> to make the role active to the user.</p>
                     <p className='text-left'>5.Click to check <b>Default Role</b> field to make this role default role for the user. </p>

                     <p className='text-left'>6.Click <b>SUBMIT.</b> The selected role is assigned to the user.</p>
                     <p className='text-left'> <b>Note:</b> You can map multiple roles to a user out of which only one can be a default role.</p>
                     <h3 className='pb-3'>Editing and Deleting User Roles Assigned</h3>
                        <p className='text-left'>1.To edit a role assigned to the user, in the Users screen, select the user, under Role, select the role to edit, click action menu and then click Edit. In the Edit User Role dialog, do required changes and then click SUBMIT. </p>

                     <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture53.png'  className='m-0 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Edit User Role Dialog</p>
                     <p className='text-left'>2.To delete a role assigned to the <b>user</b> in the Users screen, select the user, select the role to delete, click action menu and then click Delete. You cannot <b>delete</b> default role assigned to the user. </p>

                     <h3 className='pb-3'>1.1.4.2Reset Password</h3>

                     <p className='text-left'>1.To reset password, in the <b>Users </b>screen, select the user, under Role, select the role to reset password, click action menu and then click <b>Password Reset.</b> The <b>Confirmation</b> Dialog appears as shown in the figure: </p>

                     <p className='text-left'>1.On the Explorer, click <b>MASTER, Organisation</b> and then click <b>Section.</b> The <b>Section</b> master screen appears as shown in the figure:</p>
                     <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture54.png'  className='m-0 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Password Reset - Confirmation Dialog</p>

                        <p className='text-left'>2.Click <b>OK.</b> Next time, when the user logs in using the selected role, the system will  prompt to create new password as shown in the figure:.</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture55.png'  className='m-0 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Enter New Password To Login Dialog</p>
                         <h3 className='pb-3'>Mapping Deputy Users to User</h3>
                        <p className='text-left'>You can add deputy users to a selected user account. To do so, follow these steps:</p> 

                        <p className='text-left'>1.In the <b>Users</b> screen, select the user account to assign deputy user.</p>

                        <p className='text-left'>2.Under Role, select the role to assign the deputy users(The user shall be mapped to multiple roles. Select a role to which you want to map deputy user(s))</p>

                        <p className='text-left'>3.Click action menu and then click <b>Add</b> as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture57.png'  className='m-0 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Adding Deputy User Screen</p>

                        <p className='text-left'>The <b>Add</b> Deputy User dialog appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture58.png'  className='m-0 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add Deputy User Dialog</p>
                        <p className='text-left'>4.In the <b>Deputy Login Id</b> field, select the user/login id you want to add as deputy user.</p>
                        <p className='text-left'>5.In the <b>User Role</b> field, select the role.</p>
                        <p className='text-left'>6.Click <b>SUBMIT.</b> The selected role is assigned to the user as deputy user</p>
                        <p className='text-left'> <b>Note</b>: You can map multiple deputy users to a user.</p>

                        <h3 className='pb-3'>Activate / Deactivate Deputy User</h3>

                        <p className='text-left'>1.To activate/deactivate deputy  <b>users,</b> in the Users screen, select the user, under Role, select the role, select the deputy user, click action menu and then click <b>Active/Inactive. The Confirmation Dialog </b>appears as shown in the figure: </p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture59.png'  className='m-0 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Approve Deputy User - Confirmation Dialog</p>
                        <p className='text-left'>2.Click OK. The selected deputy user is activated / deactivated.</p>

                        <h3 className='pb-3'>Screen Rights</h3>
                          <p className='text-left'>To define screen level permissions for roles and users, follow these steps: </p> 
                          <p className='text-left'>1.On the Explorer, click <b>MASTER,</b> click <b>User Management</b> and then click <b>Screen Rights.</b> The Screen Rights screen appears as shown in the figure: </p> 

                          <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture60.png'  className='m-0 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Screen Rights Screen</p>
                        <p className='text-left'>2.Select a role from the left side. You can see the list of screen that the role has permissions.</p>
                        <p className='text-left'>3.To add or remove screens from/to the list, click . <img  src='../../image/articel/dms/Plusminus.png'/>   The Screen Name dialog appears as shown in the figure:.</p>

                        <h4 className='inner-image '>
                            <img  src='image/articel/dms/Picture61.png'  className='m-0 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add and Remove Screen Dialog</p>
                        <p className='text-left'>4.Use <img  src='../../image/articel/dms/arrowleft.png' />  <img  src='../../image/articel/dms/arrowright.png' />  thearrows to add or remove the screens to grant/revoke permissions..</p>
                        <p className='text-left'>5.Click <b>OK</b>.</p>
                        <p className='text-left'>Same way, you can revoke screen permissions for the users.</p>

                        <h3 className='pb-3'>Control Rights</h3>
                          <p className='text-left'>To define control level permissions for roles and users, follow these steps: </p> 
                           <p className='text-left'>1.On the Explorer, click <b>MASTER,</b> click <b>User Management</b> and then click Control Rights. The Control Rights screen appears as shown in the figure:</p>
                           <h4 className='inner-image '>
                           <img  src='../../image/articel/dms/Picture64.png'  className='m-0 p-0 w-75'/>                      
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Control Rights Screen</p>

                        <p className='text-left'>2.Select a role from the left side. You can see the list of screens and the list of controls in the selected screen that the role has permissions. </p>
                        <p className='text-left'>3.To add or remove controls from/to the list, click. <img  src='../../image/articel/dms/Plusminus.png'/> The Control Name dialog appears as shown in the e figure: </p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture65.png'  className='m-0 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Control Name Dialog</p>
                        <p className='text-left'>4.Use the <img src="../../image/articel/dms/arrowleft.png"></img> <img src="../../image/articel/dms/arrowright.png"></img>arrows to add or remove the controls to grant/revoke permissions.</p>

                        <p className='text-left'>5.Click <b>OK.:</b></p>
                        <p className='text-left'>Same way, you can revoke permissions for controls for the users.</p>    
                        <h3 className='pb-3'>Audit Trail Log</h3>
                        <p className='text-left'>Audit Trail menu helps you to view audit trail log. Also enables you to filter records based on date range, user and module name, export records to excel file, print records, create archive and open archive to view.</p>
                        <p className='text-left'>To view audit trail log, follow these steps:</p>

                        <p className='text-left'>1.On the Explorer, click <b>MASTER,</b> click <b>User Management</b> and then click Audit Trail. The <b>Audit Trail</b> log screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture66.png'  className='m-0 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Audit Trail Log Screen</p>
                        <p className='text-left'> You can filter records based on the Date range: Select the From and To date and then click <img  src='../../image/articel/dms/roatate.png' />    to filter records based on the specified date range..</p> 
                        <p className='text-left'>You can also filter records based on Module Name, Form Name and User Name.</p> 
                        <p className='text-left'> 2.In the Module Name field, select a module. Forms/screens in the selected module appears in the Form Name field.</p> 
                        <p className='text-left'> 3.In the <b>Form Name</b> field, select the form.</p> 
                        <p className='text-left'> 4.In the <b>User</b> field, select user. .</p>
                        <p className='text-left'> Click <img  src='../../image/articel/dms/roatate.png' />  </p> 
                        <p className='text-left'> Audit trail records for the selected date range and for the selected module, form and user appears as shown in the above figure. </p> 
                    </div> 
                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../dmsorganizationmaster'>Organization Master</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../dmscontactsmanagement'> Contacts Management</Link>
                        </div>
                    </div>
                    </div>
            </div>
             </div>
         <Help/>
        </div>
    );
}

export default DMSUserManagement; 