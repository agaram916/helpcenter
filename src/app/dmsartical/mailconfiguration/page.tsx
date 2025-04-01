'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const MailConfiguration = () => {
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
                  <h1> Qualis DMS – Mail Configuration</h1>
                  <div className='articel-content'>
                        <p className='text-left'>
                          Masters in Qualis DMS are used to store and maintain data outside a process and refer it in process using "Master" field type in the form. For example, when you store a sample, you may want to look up the storage data such as organisation, department, lab, site, section etc. In this example storage location data can be created and managed as a master. Also, user data can be created and managed as a master. </p>
                        <p className='text-left'>In Qualis DMS you can add/create masters, edit master details and delete existing masters.</p>
                        <p className='text-left'>Qualis DMS allows you to create and manage mail configuration.</p>
                        <h3 className='pb-3 mt-3'>1.Mail Host</h3>
                        <p className='text-left'>The Mail Host screen helps you to add hosts to DMS. To do so, follow these steps:</p>

                        <p className='text-left'>1.On the Explorer, click  <b>MASTER Mail</b>,  and then click <b>Mail Host.</b> The Mail Host screen appears as shown in the figure:.</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture20.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Mail Host Screen</p>
                        <p className='text-left'>You can see the list of mail hosts added. Options to add, edit and delete hosts appear in the action menu</p>               
                        <p className='text-left'>2.Click action menu and then click Add They Add Mail Host screen appears as shown in the figure:</p>
                    
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture21.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Mail Host Screen</p>
                        <p className='text-left'>3.In the Display Name field, Type the display name for the host you want to add.</p>
                        <p className='text-left'>4.In the  <b>Host Name</b>  field, type host name.</p>
                        <p className='server text-left'>5.In the <b>Port No</b> field, type the default port number for the host. The default port numbers are 587 and 456.</p>
                        <p className='text-left'>6.In the <b>Email Id</b> field, type the email id from which the mail will be triggered..</p>
                        <p className='text-left'>7.In the <b>Password </b>field, type the password for the email id mentioned..</p>
                        <p className='text-left'>8.Click <b>SUBMIT.</b></p>  
                        <p className='text-left'>You can see the mail host you just added listed in the mail host screen.  </p>
                        <h3 className='pb-3'>1.1.2Mail Template</h3>
                        <p className='text-left'>Mail Template is used to add and manage templates for the mails that are automatically triggered. Mail templates are used in the email configuration screen.</p>
                        <h3 className='pb-3'>1.2.Adding a New Mail Template   </h3>
                        <p className='text-left'>To create a new template, follow these steps:</p>
                        <p className='text-left'>1.On the Explorer, click <b>Transaction, Mail</b> and then click Mail Template. The <b>Mail Template</b> screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture23.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Email Template Screen</p>

                        <p className='text-left'>In the mail template master screen you can see the list of templates added. Options to add, edit and delete mail templates appear in the action menu.</p>

                        <p className='text-left'>2.Click action menu and then click <b>Add.</b> The <b>Add</b>Template screen appears as shown in the figure:.</p>
                        <p className='text-left'>2.To open an item in the Workspace, click an item in the Explorer</p>

                        
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture24.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add Mail Template Screen</p>
                        <p className='text-left'>3.In the <b>Template Name</b> field, type a name for the template you add.</p>
                        <p className='text-left'>4.In the <b>Subject</b> field, type subject for the template.</p>

                        <p className='text-left'>5.In the <b>Email Tag</b> field, select a screen name. Tags associated with the selected screen appear in the side as shown in the above figure.</p>
                     <p className='text-left'> 6.In the text field, type the mail content and add tags where ever applicable.</p>
                     <p className='text-left'>7.Click <b>SUBMIT.</b></p>
                     <p className='text-left'>You can see the mail template you just added listed in the Mail Template master. </p>

                     <h3 className='pb-3'>2.Editing and Deleting Mail Template </h3>
                     <p className='text-left'>1.To edit email template details, in the mail template master screen, select the template, click action menu and then click <b>Edit.</b> In the <b>Edit</b> mail template screen, do required changes and then click <b>Submit.</b> </p>
                     <p className='text-left'>2.To delete a template, in the mail template master screen, select the template you want to delete, click action menu and then click <b>Delete. </b></p>
                     <h3 className='pb-3'>3.Mail Config </h3>
                     <p className='text-left'>Mail Config is used to add and manage mail configurations. You can configure mails to trigger automatically when a selected action appears in the screen.</p>
                     <h3 className='pb-3'>3.1Adding a New Mail Config </h3>

                     <p className='text-left'>1.On the Explorer, click <b>Transaction, Mail </b>and then click <b>Mail Config.</b> The <b>Mail Config</b> screen appears as shown in the figure:</p>


                     <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture25.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: -  Email Config Screen</p>
                        <p className='text-left'>In the mail config screen you can see the list of configurations added. Options to add, edit and delete mail configs appear in the action menu.</p>
                        <p className='text-left'>2.Click action menu and then click <b>Add</b> The Add <b>Mail Config </b>screen appears as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture26.png'  className='my-2 p-0'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add Email Config Screen</p>
                        <p className='text-left'>3.In the <b>Host Name</b> field, select the host to send mail.</p>
                        <p className='text-left'>4.In the <b>Template Name</b> field, select a template for the email to configure</p>
                        <p className='text-left'>3.In the <b>Host Name</b> field, select the host to send mail.</p>
                        <p className='text-left'>5.In the <b>Screen Name </b>field, select the screen..</p>
                        <p className='text-left'>7.In the <b>Action Type</b> field, select an action when performed the mail has to be triggered..</p>
                        <ul>
                            <li className='circle mx-3'>Click to check the <b>Enable Monthly</b> Mail field to enable automatic mail option monthly. In the <b>Mail Date</b> field, select date on which the monthly mail has to be sent.</li>
                            <li className='circle mx-3'>Click to check the <b>Enable Weekly</b> Mail field to enable automatic mail option weekly. In the <b>Mail Day </b>field, select day on which the weekly mail has to be sent.</li>
                        </ul>
                        <p className='text-left'>7.In the <b>Mail Time</b> field, select the time the mail has to be sent. when you check this field, then when the selected action is performed in the selected screen a mail will be automatically sent to the concerned users in the selected role.</p>
                        <p className='text-left'>8.In the User Role field, select the role to receive mail. Users in the selected user role appears below.</p>

                        <p className='text-left'>9. select the users from the left side and click <img  src='../../image/articel/dms/right.png'  className='m-0 p-0'/>     to add them to the recipient list</p>
                        <p className='text-left'>10.Click <b>SUBMIT.</b></p>
                        <p className='text-left'>You can see the mail config you just added listed in the Mail Config master</p>

                        <h3 className='pb-3'>Editing and Deleting Mail Config </h3>
                        <p className='text-left'>1.To edit email config details, in the mail config master screen, select the config, click action menu and then click <b>Edit.</b> In the <b>Edit</b> mail config screen, do required changes and then click <b>SUBMIT.</b> :</p>

                        <p className='text-left'>2.To delete a configuration, in the mail config master screen, select the config you want to delete, click action menu and then click <b>Delete.</b></p>
                        <h3 className='pb-3'>4.Mail Alert Transaction </h3>
                        <p className='text-left'>1.On the Explorer, click <b>Transaction, Mail</b> and then click <b>Mail Alert</b> Transaction. The Mail Alert <b>Transaction </b>screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture27.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: -  Email Status Screen</p>
                        <p className='text-left'>Details like email subject, the recipient, sent status and date of email sent will appear as shown in the above figure.</p>
                    </div>

                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../gettingstarted'> Getting Started</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../dmsorganizationmaster'>Organization Master</Link>
                        </div>
                    </div>
                    </div>
            </div>
             </div>
         <Help/>
        </div>
    );
}

export default MailConfiguration; 