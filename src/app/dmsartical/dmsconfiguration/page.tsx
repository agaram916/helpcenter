'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const DmsConfiguration = () => {
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
                  <h1> 1.How to configure FTP for file upload</h1>
                  <div className='articel-content'>
                        <p className='text-left'>Masters in Qualis DMS are used to store and maintain data outside a process and refer it in process using "Master" field type in the form. For example, when you store a sample, you may want to look up the storage data such as organisation, department, lab, site, section etc. In this example storage location data can be created and managed as a master. Also, user data can be created and managed as a master. </p>
                        <p>In Qualis DMS you can add/create masters, edit master details and delete existing masters.</p>
                        <p>Qualis DMS allows you to manage configuration under mastermodule.</p>
                        <h2>1.Configuration</h2>
                         <h3 className='text-left mt-3'>1.1FTP Config</h3>
                         <p>FTP Config master is used to create and manage FTP Configurations that are used for file upload.</p>
                         <p>Creating a FTP Config</p>
                         <p>To create a new FTP Config, follow these steps:</p>
                     
                         <p className='text-left'>1.On the Explorer, click <b>MASTER, Configuration </b>and then click <b>FTP Config</b>. The <b>FTP Config</b> master screen appears as shown in the figure:</p>
                      
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture2.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE:-FTP Config Master Screen</p>
                        <p>In the FTP Config master screen you can see the list of FTP Configurations created. Also options to add, edit and delete FTP configurations appear in the action menu as shown in the above figure.</p>
                        <p>2.Click action menu and then click Add. The Add FTP Config dialog appears as shown in the figure:</p>
                            
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture3.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add FTP Config Dialog</p>

                        <p className='server text-left'>3.In the <b>User</b>field, type the name of the machine/server where you want to upload the files.</p>
                        <p className='text-left'>4.In the <b>Password</b> field, type the password of the machine/server.:</p>
                        <p>5.In the <b>Site Name</b>field, select the name of the site.</p>
                        <p>6.In the<b>Host field</b>, type the Host Name/IP address of the machine/server</p>
                        <p>7.In the Port No field, type the port number.</p>
                        <p>8.Click to enable the <b>SSL</b> option if required.</p>
                        <p>9.Click <b>SUBMIT.</b></p>
                        <h2>1.1.2Editing and Deleting FTP Configs</h2>
                        <p>1.To edit a FTP Configuration, in the FTP Config master screen, select the FTP Configuration to edit, click action menu and then <b>Edit.</b> In the <b>Edit</b> FTP Config dialog, do required changes and then click <b>SUBMIT.</b> </p>
                        <h4 className='inner-image m-0 p-0'>
                            <img  src='../../image/articel/dms/Picture4.png' className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Edit FTP Config Dialog</p>
                            <p className='text-left mt-3'>2.To delete a FTP Configuration, in the FTP Config master screen, select the FTP Configuration you want to delete, click action menu and then click <b>Delete.</b> </p>
                            <h2>3. Set Default</h2>
                            <p className='note'> You can set a FTP configuration as default one. To do so, follow these steps:</p>
                            <p className='text-left'>1.In the FTP Config master screen, select the FTP Configuration, click action menu and then <b>Set Default</b> as shown in the figure:</p>
                            <h4 className='inner-image m-0 p-0'>
                            <img  src='../../image/articel/dms/Picture5.png' className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Set Default Option</p>
                                <h2>4.Test Connection</h2>
                            <p className='text-left'>You can test connection for FTP configuration. To do so, follow these steps:</p>
                            <p className='text-left'>1.In the FTP Config master screen, select the FTP Configuration, click action menu and then Test Connection. The Confirmation Dialog appears as shown in the figure:.</p>
                            <h4 className='inner-image m-0 p-0'>
                            <img  src='../../image/articel/dms/Picture6.png' className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE:- Confirmation Dialog</p>

                            <p className='note'>2.Click <b>OK.</b> If the connection is successful, you can see the success message as shown in the figure:</p>
                            <h4 className='inner-image m-0 p-0'>
                            <img  src='../../image/articel/dms/Picture7.png' className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Alert Dialog</p>

                        <h3 className='text-left mt-5'>2.Password Policy</h3>
                        <p className='text-left' >Password policy can be set to control user authentication behavior. Password policy is must for regulatory compliance and also depends on the organisation policy defined for the individual applications.</p>
                         <p className='text-left'>Qualis DMS enables you to create password policies for each role. You can also create multiple password policies for a role. </p>
                        <p className='text-left'>When you create a policy it will be in the Draft status. You need to approve the policy to enforce. When a new policy is approved for a role, the existing policy will retire automatically.</p>
                        <p className='Note'> <b>Note:</b> When a new password policy is approved for a role, the password policy of the entire users in that user role will be changed.</p>
                      

                        <h3 className='text-left mt-5'>Password Policy Master</h3>
                        <p className='server text-left'>Password Policy master is used to create and manage Password Policies. </p>
                    
                            <p className='text-left'>1.On the Explorer, click <b>MASTER, Configuration</b> and then click Password Policy. The <b>Password Policy</b> master screen appears as shown in the figure:</p>
                        

                        <h4 className='inner-image m-0 p-0'>
                            <img  src='../../image/articel/dms/Picture8.png' className='my-2 p-0 w-75' />   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Password Policy Master Screen</p>

                           <p className='text-left mt-3'>4.In the <b>Policy Name </b>field, type the name for the policy you want to create.. </p>
                            <p className='note'>5.Fill in all fields appropriately as follows:</p>
                            <p className='text-left'>6.Setup basic rules for the password such as <b>Minimum # of Numeric Character, Minimum number of Lowercase Character, Minimum number of Uppercase Character, Minimum Number of Special Character, Minimum Password Length and Maximum Password Length</b></p>
                            <p className='text-left'>7.Under <b>Password Life Time,</b> fill the following:</p>
                            <p className='text-left'>8.In the <b>Failed Password attempt that will lock the Account</b> field, type number of failed attempts after which the application will be locked. </p>
                            <p className='text-left note mt-2'>9.In the <b>Idle Lock Time in Mins</b> field, type number of minutes after which the system will be locked. The DMS application will be locked after the mentioned time and user has to unlock the application with valid password  that is used to login. </p>
                            <p className='text-left note mt-2'> 10.Click to check the <b>Password Expiry Required </b>check field to enable password expiry option. If this option is enabled, then the following two fields are enabled and becomes mandatory..</p>

                            <p className='text-left'>11.In the<b>Expiry Password Policy in Days </b> field, type number of days the password is valid. After which the password would be expired. An alert shall be sent to the user to reset the password.</p>
                            <p className='text-left'>12.In the <b>Alert Password Expiry in Days</b> field, type number of days before which the password expiry alert will be sent to the user. </p>
                           <p>13.In the <b>Comment</b> field, type your comments if any.</p>
                            <p>14.Click <b>SUBMIT.</b></p>
                        <p>You can see the Password Policy you created listed in the Password Policy master.</p>
                        <h3 className='text-left mt-5'>1.2 Editing and Deleting Password Policy</h3>
                        <p className='text-left'>Only policies in the “Draft” status can be updated and deleted.</p>
                        <p className='text-left'> 1.To edit a password policy, in the Password Policy master screen, select the role, select the password policy, click action menu and then click <b>Edit.</b> In the <b>Edit</b> Password Policy dialog, do required changes and then click <b>SUBMIT.</b> </p>
                     
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/dms/Picture10.png' className='my-2 p-0 w-100'/>  
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Edit Password Policy Dialog</p>
                        <p className='text-left'>2.To delete a password policy, in the Password Policy master screen, select the role, select the password policy you want to delete, click action menu and then click <b>Delete</b>. </p>
                      
                        <h3 className='text-left mt-5'>3.Approving Password Policy</h3>
                        <p className='server text-left'> Policies in the “Draft” status can be approved.:</p>
                        <p className='text-left'>1.To approve a password policy, in the Password Policy master screen, select the role, select the password policy, click action menu and then click <b>Approve.</b> In the Confirmation dialog click <b>Ok.</b></p>

                        <h3 className='text-left mt-5'>4.Copying Password Policies</h3>
                        <p className='server text-left'> You can copy password policy to multiple roles. </p>
                        <p className='server text-left'> 1.To copy a password policy, in the Password Policy master screen, select the role; select the password policy, click action menu and then click <b>Copy..</b> </p>
                        <h4 className='inner-image'>
                               <img  src='../../image/articel/dms/Picture11.png' className='my-2 p-0'/>  
                           </h4>
                           <p className='mt-1 figure'>FIGURE: - Copy Password Policy Dialog</p>
                        <p className='text-left'>2.From the <b>Server Name</b> field, select the server name you want to create the directory.</p>
                        <p className='text-left'>2.In the Copy Password Policy dialog, under <b>AVAILABLE LIST</b> select the roles and click  to copy the policy.</p>
                        <p>Now the selected password policy is copied to all the selected roles.</p>

                        <h3 className='text-left mt-5'>1.3E-sign Control</h3>
                        <p className='server text-left'> E-Sign Rights screen helps you to set E-Sign authentication at the control level for a selected screen.  </p>

                        <p className='text-left'>1.On the Explorer, click <b>MASTER,</b> click Configuration and then click <b>E-Sign Control.</b> The E-Sign Control screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                               <img className='my-2 p-0' src='../../image/articel/dms/Picture12.png w-75'/>  
                           </h4> 
                           <p className='mt-1 figure'>FIGURE: - <b>Esign Control Screen</b></p>  

                        <p className='text-left'>2.Under <b>Screen Name,</b> select a screen. You can see the list of controls in the selected screen. </p>   

                        <p className='text-left'>3. Click to enable the check field under Need Esign of the respective control that requires E-Sign authentication and then click <img  src='../../image/articel/dms/plus.png' /></p>
                        <p className='text-left'><b>Note:</b> When you click the control with E-sign authentication in the transactions the E-Sign dialog pops up for authentication.d. </p>               
                    </div>  

                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            {/* <h4>Previous article</h4>
                            <Link to='/UserManagement'>User management</Link> */}
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../dashboard'>DMS Dashboard and Alerts</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default DmsConfiguration; 