'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const Sheettemplates = () => {
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
                    <h1><strong>Logilab ELN - Sheet Templates</strong></h1>
                    
                    <section className='articel-content'>                      
                        <p>The Sheet Templates module enables you to create lab sheets in Logilab ELN. You can create, design, capture data, calculate and view results using lab sheets.</p>
                        <ol>
                        <li>On the main menu, click <img src='../../image/articel/eln/Templates.png' className='m-0 p-0 w-auto'/>and then click <strong><strong>Sheet Templates</strong></strong>. The <strong><strong>Sheet </strong></strong>tab appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture160.png' className='my-3 w-100'/>  
                            </div>
                        <p className='figure mt-1'>FIGURE: Sheet Templates Screen</p>
                        <p>The Sheet Templates screen consists of three tabs:</p>
                        <ul>
                        <li>In the <strong><strong> Templates</strong></strong> tab you can see a list of all the lab sheets created appears. Click <strong><strong>OPEN</strong></strong>&nbsp;to open an existing sheet.</li>
                        <li>In the <strong><strong>Templates Shared by Me </strong></strong> tab you can see list of templates you shared to the other users.</li>
                        <li>In the <strong><strong>Templates Shared to Me </strong></strong> tab you can see list of templates shared to you by the other users.</li>
                        </ul>
                        <p><img src='../../image/articel/eln/pagination.png' className='m-0 p-0 w-auto'/>Use the arrows to navigate to the next, previous, first and last pages. Click the dropdown arrow and select the number of records to display on the screen.</p>
                        <h3>1.1.1&nbsp;Edit<strong>&nbsp;</strong> Template</h3>
                        <p>You can edit template details that are in the <strong><strong> Created</strong></strong>&nbsp; status. Click <strong><strong> Edit </strong></strong> to edit template name, category and template visibility for templates in Created status. When you select a template in Created status, the EDIT option will be enabled as shown in the figure:</p>
                        <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture161.png' className='my-3 w-100'/>  
                            </div>
                        <p className='figure mt-1'>FIGURE: Editing Template Details</p>
                        <h3>1.1.2&nbsp;View Version History, Transaction History and Workflow history</h3>
                        <ol>
                        <li>In the <strong><strong>Templates</strong></strong> tab, click <img  src='../../image/articel/eln/eye3.png' className='mx-2 w-auto'/>  to view <strong><strong>Version History</strong></strong>, <strong><strong>Transaction History</strong></strong>&nbsp;and <strong><strong>Workflow History</strong></strong>&nbsp;as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture162.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: View Version, Transaction and Workflow History</p>
                        <p>Click the down arrow to view the list and click the up arrow to collapse the list.</p>
                        <h3>1.1.3&nbsp;Share Template</h3>
                        <p>You can share the template with other users in ELN.</p>
                        <ol>
                         <li>In the <strong><strong>Templates </strong></strong> tab, click<img  src='../../image/articel/eln/share.png' className='mx-2 w-auto'/>;to share template with selected user as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture163.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Share Template with other Users</p>
                        <ol>
                        <li>In the <strong><strong> ELN Unique ID</strong></strong> field, select the user.</li>
                        <li>Select <strong><strong> Read</strong></strong> or <strong><strong> Read/Write</strong></strong>&nbsp; to define access.</li>
                        <li>Click <strong><strong> SHARE</strong></strong>. The template is shared with the selected user.</li>
                        </ol>
                        <h3>1.1.4&nbsp;Creating a Lab Sheet</h3>
                        <ol>
                        <li>In the <strong><strong>Sheet Creation</strong></strong>screen, click <strong><strong>NEW </strong></strong>to open a new book. By default, <strong><strong>Sheet1</strong></strong>&nbsp;will appear as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture164.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Creating New Book</p>
                        <h3>1.1.5&nbsp;Adding Fields</h3>
                        <p>Determine the place/cell to add a field by clicking a specific cell. For example, click A3 and then drag a field from the left panel. The dragged field is added to the specified cell.</p>
                        <h4>1.1.5.1&nbsp;General Fields</h4>
                        <p>These fields are commonly used in any sheet to capture general information such as system date, current time, and currently logged user, order number, mandatory field etc. Following is the list of general fields in the ELN lab sheet:</p>
                        <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Field</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Add Resource</td>
                                        <td>Used to capture resource details from the inventory. Allows add resource</td>
                                    </tr>
                                    <tr>
                                        <td>Alert</td>
                                        <td>Enables adding an alert or reminder on a specified date and time</td>
                                    </tr>
                                    <tr>
                                        <td>Combo Box</td>
                                        <td>Enables choosing value from a predefined list</td>
                                    </tr>
                                    <tr>
                                        <td>Current Date &amp; Time</td>
                                        <td>System date and time is captured</td>
                                    </tr>
                                    <tr>
                                        <td>Dynamic Combo box</td>
                                        <td>Allows fetching the result from another sheet/same sheet/cell</td>
                                    </tr>
                                    <tr>
                                        <td>Logged User</td>
                                        <td>Captures current logged in username</td>
                                    </tr>
                                    <tr>
                                        <td>Login Time</td>
                                        <td>Captures login time of the current session for the first time</td>
                                    </tr>
                                    <tr>
                                        <td>Mandatory Field</td>
                                        <td>Sheet cannot be saved without entering value to this field</td>
                                    </tr>
                                    <tr>
                                        <td>Manual Date</td>
                                        <td>Allows selecting Date</td>
                                    </tr>
                                    <tr>
                                        <td>Manual Date &amp; Time</td>
                                        <td>Allows selecting Date and Time as a single field value</td>
                                    </tr>
                                    <tr>
                                        <td>Manual Field</td>
                                        <td>Allows entering data/number/formula</td>
                                    </tr>
                                    <tr>
                                        <td>Manual Time</td>
                                        <td>Allows selecting Date</td>
                                    </tr>
                                    <tr>
                                        <td>Multiselect Combo Box</td>
                                        <td>Enables choosing multiple values from a predefined list</td>
                                    </tr>
                                    <tr>
                                        <td>Numeric Field</td>
                                        <td>Allows entering a numeric value</td>
                                    </tr>
                                    <tr>
                                        <td>Order No</td>
                                        <td>The processed order number will be displayed</td>
                                    </tr>
                                    <tr>
                                        <td>Project Name</td>
                                        <td>The processed project name will be displayed</td>
                                    </tr>
                                    <tr>
                                        <td>Sample Name</td>
                                        <td>The processed sample name will be displayed</td>
                                    </tr>
                                    <tr>
                                        <td>Signature</td>
                                        <td>Username of the selected user is displayed as e Signature</td>
                                    </tr>
                                    <tr>
                                        <td>Task Name</td>
                                        <td>The processed test name will be displayed</td>
                                    </tr>
                                    <tr>
                                        <td>Text Wrapper</td>
                                        <td>The text inside the cell wraps to fit the column width. When you change the column width, text wrapping adjusts automatically</td>
                                    </tr>
                                </tbody>
                            </table>
                        <p>Table: 4 - Lab Sheet - General Fields</p>
                        <h3>1.1.6&nbsp;Adding Alert</h3>
                        <p>Alert option is used to set reminder. To do so, follow these steps:</p>
                        <ol>
                        <li>Under <strong><strong>General Fields</strong></strong>, click to select <strong><strong> Alert</strong></strong> and then click a cell to paste the alert box.</li>
                        <li>Press ESC to clear drag &amp; drop. The <strong><strong> Alert</strong></strong> field appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture165.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Adding Alert</p>
                        <ol start={4}>
                        <li>At runtime, select the alert box and then click the dropdown arrow. The <strong><strong>Alert </strong></strong>dialog appears as shown in the figure:</li>
                        </ol>
                         <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture166.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Adding Alert</p>
                        <ol start={5}>
                        <li>In the <strong><strong>Due Date</strong></strong> field, select the date of the event.</li>
                        <li>In the <strong><strong>Notify Before</strong></strong> field, select the number of days before the alert has to appear.</li>
                        <li>In the <strong><strong>Caution Date</strong></strong> field, the alert date will appear.</li>
                        <li>In the <strong><strong>Summary</strong></strong> field, type summary of the event / message to display and then click <strong><strong>Submit</strong></strong>. the alert is set, and the field appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture167.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Added Alert</p>
                        <h3>1.1.7&nbsp;Adding Resource</h3>
                        <ol>
                        <li>Under <strong><strong>General Fields</strong></strong>, click to select <strong><strong>Add Resource</strong></strong> and then click a cell to paste the combo box.</li>
                        <li>Press ESC to clear drag &amp; drop. The <strong><strong>Add Resource </strong></strong> field appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture168.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Adding Resource</p>
                        <p>At runtime, the <strong><strong>Add</strong></strong>&nbsp;resource dialog appears as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture169.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Add Resource at Runtime</p>
                        <ol start={9}>
                        <li>Select material type, category, and material and then click <strong><strong>USE INVENTORY </strong></strong>.</li>
                        <li>In the <strong><strong>Quantity</strong></strong> field, type quantity of material for use and then click <strong><strong>Submit </strong></strong>. The material is added and appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture170.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Resource Added</p>
                        <h3>1.1.8&nbsp;Adding Combo Box</h3>
                        <ol>
                        <li>Under <strong><strong>General Fields</strong></strong>, click to select <strong><strong> Combo Box</strong></strong> and then click a cell to paste the combo box.</li>
                        <li>Press ESC to clear drag &amp; drop.</li>
                        <li>Click the combo box cell to open the <strong><strong> Properties </strong></strong> The <strong><strong>Properties</strong></strong> dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture171.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Adding Combo Box</p>
                        <ol start={11}>
                        <li>In the <strong><strong>Options</strong></strong> field, type options for the combo box and then click <strong><strong>Update</strong></strong>. When you process the order, the combo box appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture172.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Combo box At Runtime</p>
                        <ol start={12}>
                        <li>Select an option and then click <strong><strong>Ok</strong></strong>.</li>
                        </ol>
                        <h3>1.1.9&nbsp;Current Date &amp; Time</h3>
                        <ol>
                        <li>Under <strong><strong>General Fields</strong></strong>, click to select <strong><strong>Current Date &amp; Time</strong></strong>and then click a cell to paste the current date and time field.</li>
                        <li>Press ESC to clear drag &amp; drop.</li>
                        </ol>
                        <p>At runtime, the current date and time is automatically captured as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture173.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Current Date and Time Field</p>
                        <h3>1.1.10&nbsp;Adding Dynamic Combo Box</h3>
                        <p>Add dynamic combo box to the lab sheet that captures dynamic data at runtime. To add a dynamic combo box, follow these steps:</p>
                        <ol>
                        <li>Under <strong><strong> General Fields</strong></strong>, drag and drop the <strong><strong> Dynamic Combo Box</strong></strong> and then click the box. The <strong><strong>Properties</strong></strong>&nbsp; dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture174.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Creating Dynamic Combo Box</p>
                        <ol start={13}>
                        <li>In the <strong><strong>Properties </strong></strong> dialog, you can specify the <strong><strong> Sheet </strong></strong> number, <strong><strong> Column </strong></strong>and <strong><strong> from row </strong></strong>&nbsp; to define the place of the dynamic combo box.</li>
                        <li>Click <strong><strong> Group with another Dynamic Combo box in the sheet </strong></strong> to group the combo box with other dynamic combo box row wise. When you check this option values of the other combo box in the sheet are grouped to this dynamic combo box. This option works only for the dynamic combo boxes in the same row.</li>
                        <li>At runtime, you can see the data as shown in the figure:</li>
                        </ol>
                          <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture175.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Dynamic Combo Box Showing Fields for Data Capture</p>
                        <h3>1.1.11&nbsp;Logged User</h3>
                        <p>This field captures the logged username automatically.</p>
                        <ol>
                        <li>Under <strong><strong>General Fields </strong></strong>, click to select <strong><strong> Logged User </strong></strong> and then click a cell to paste the field.</li>
                        <li>Press ESC to clear drag &amp; drop.</li>
                        </ol>
                        <p>At runtime, the current logged username is automatically captured as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture176.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Logged User Field</p>
                        <h3>1.1.12&nbsp;Login Time</h3>
                        <p>This field captures the login date and time of the current session for the first time automatically.</p>
                        <ol>
                        <li>Under <strong><strong> General Fields</strong></strong>, click to select <strong><strong> Login Time </strong></strong> and then click a cell to paste the field.</li>
                        <li>Press ESC to clear drag &amp; drop.</li>
                        </ol>
                        <p>At runtime, the login date and time is automatically captured as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture177.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Login Time Field</p>
                        <h3>1.1.13&nbsp;Mandatory Field</h3>
                        <p>You cannot save the lab sheet until you fill the Mandatory Field.</p>
                        <ol>
                        <li>Under <strong><strong>General Fields </strong></strong>, click to select <strong><strong> Mandatory Field</strong></strong> and then click a cell to paste the field.</li>
                        <li>Press ESC to clear drag &amp; drop.</li>
                        </ol>
                        <p>At runtime, Mandatory Field is highlighted in Red and appears as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture178.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Mandatory Field</p>
                        <p>When you try to save the lab sheet without filling the mandatory field, you will see an alert as shown in the above figure.</p>
                        <h3>1.1.14&nbsp;Manual Date</h3>
                        <p>The Manual Date field enables the user to select date manually. To add manual date field, follow these steps:</p>
                        <ol>
                        <li>Under <strong><strong>General Fields </strong></strong>, click to select <strong><strong> Manual Date</strong></strong> and then click a cell to paste the field.</li>
                        <li>Press ESC to clear drag &amp; drop.</li>
                        <li>At runtime, click the down arrow that appears near the Manual Date field. The <strong><strong> Select </strong></strong> dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture179.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Manual Date Field</p>
                        <ol start={17}>
                        <li>Clickand select the date as shown in the above figure.</li>
                        </ol>
                        <h3>1.1.15&nbsp;Manual Date &amp; Time</h3>
                        <p>The Manual Date &amp; Time field enables the user to select date and time manually. To add manual date and time field, follow these steps:</p>
                        <ol>
                        <li>Under <strong><strong>General Fields</strong></strong>, click to select <strong><strong> Manual Date &amp; Time </strong></strong> and then click a cell to paste the field.</li>
                        <li>Press ESC to clear drag &amp; drop.</li>
                        <li>At runtime, click the down arrow that appears near the Manual Date &amp; Time field. The <strong><strong> Select </strong></strong> dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture179.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Manual Date &amp; Time Field</p>
                        <ol start={19}>
                        <li>Click <img  src='../../image/articel/eln/calender.png' className='m-0 p-0 w-auto'/>and select the date. Click&nbsp;and select time as shown in the above figure.</li>
                        </ol>
                        <h3>1.1.16&nbsp;Manual Field</h3>
                        <p>Manual field enables the user to add a manual field that can hold any type of data: Numeric /String.</p>
                        <ol>
                        <li>Under <strong><strong>General Fields</strong></strong>, click to select <strong><strong >Manual Field</strong></strong> and then click a cell to paste the field.</li>
                        <li>Press ESC to clear drag &amp; drop.</li>
                        </ol>
                        <p>At runtime, the manual field allows you to type any data type like numeric, character etc as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture180.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Manual Field</p>
                        <h3>1.1.17&nbsp;Manual Time</h3>
                        <p>The Manual Time field enables the user to select time manually. To add manual time field, follow these steps:</p>
                        <ol>
                        <li>Under <strong><strong>General Fields</strong></strong>, click to select <strong><strong> Manual Time </strong></strong> and then click a cell to paste the field.</li>
                        <li>Press ESC to clear drag &amp; drop.</li>
                        <li>At runtime, click the down arrow that appears near the Manual Time field. The <strong><strong> Select </strong></strong> dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture181.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Manual Time Field</p>
                        <ol start={21}>
                           <li>Click <img  src='../../image/articel/eln/clock.png' className='m-0 p-0 w-auto'/>and select the time as shown in the above figure.</li>
                        </ol>
                        <h3>1.1.18&nbsp;Adding Multi Select Combo box.</h3>
                        <ol>
                        <li>Under <strong><strong>General Fields</strong></strong>, click to select <strong><strong> Multiselect Combo Box</strong></strong>and then click a cell to paste the combo box.</li>
                        <li>Press ESC to clear drag &amp; drop.</li>
                        <li>Click the combo box cell to open the <strong><strong>Properties</strong></strong> The <strong><strong> Properties</strong></strong> dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture182.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Adding Multiselect Combo Box</p>
                        <ol start={22}>
                        <li>In the <strong><strong>Options</strong></strong>field, type options for the combo box and then click <strong><strong> Update</strong></strong>. When you process the order, the combo box appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture183.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Combo box At Runtime</p>
                        <ol start={23}>
                        <li>Select options and then click <strong><strong>Ok</strong></strong> You can select multiple options in multiselect combo box.</li>
                        </ol>
                        <h3>1.1.19&nbsp;Numeric Field</h3>
                        <p>Numeric Field enables the user to capture numeric value at runtime. When you type non-numeric value, an error message appears as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture184.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Numeric Field</p>
                        <h3>1.1.20&nbsp;Order No, Project Name Sample Name and Task Name Fields</h3>
                        <p>The <strong><strong> Order No </strong></strong>&nbsp; field displays the current order number.</p>
                        <p>The <strong><strong> Project Name </strong></strong>&nbsp; field displays the project name the order is associated with.</p>
                        <p>The <strong><strong>Sample Name </strong></strong>&nbsp; field displays the sample name the order is associated with.</p>
                        <p>The <strong><strong>Task Name </strong></strong>&nbsp; field displays the task name the lab sheet is mapped.</p>
                        <h3>1.1.21&nbsp;Adding Signature Field to the Lab sheet</h3>
                        <p>You can add Signature field to the lab sheet that captures E- signature of the currently logged in user. And the username is displayed in the Signature field. You can also make Signature field mandatory to track changes done to the lab sheet by various users in the workflow.</p>
                        <p>When you use the sheet in the workflow, the signature field appears as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture185.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Using Added Signature Field in the Lab Sheet</p>
                        <ol>
                        <li>Click the dropdown arrow that appears next to the signature field as shown in the above figure. The E-Signature dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture186.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: E- Signature Dialog</p>
                        <ol start={24}>
                        <li>In the <strong><strong>Username</strong></strong> field, the current logged in username appears.</li>
                        <li>In the <strong><strong>Password</strong></strong> field, type the password.</li>
                        <li>In the <strong><strong>Reason</strong></strong> field, select the reason.</li>
                        <li>In the <strong><strong>Comment </strong></strong> field, type the comment.</li>
                        <li>Click <strong><strong>Submit</strong></strong>. The username of the current user and date and time of e-signature captured appears in the Signature field as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture187.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: E-Signature Field Showing Captured Username and Date &amp; Time</p>
                        <h3>1.1.22&nbsp;Text Wrapper</h3>
                        <p>Text Wrapper option is used to insert a textbox that wraps text to fit the column width. When you change the column width, text wrapping adjusts automatically. To add a text wrapper, follow these steps:</p>
                        <ol>
                        <li>Under <strong><strong>General Fields</strong></strong>, click to select <strong><strong>Text Wrapper</strong></strong>and then click a cell to paste the alert box.</li>
                        <li>Press ESC to clear drag &amp; drop.</li>
                        <li>At runtime, Type something in the text wrapper text box. The text inside the cell wraps to fit the column width. When you change the column width, text wrapping adjusts automatically as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture188.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Text Wrapper</p>
                        <h3>1.1.23&nbsp;Linking Sheets</h3>
                        <p>Link sheets to selected fields. You can only link an approved lab sheet. To do so, follow these steps:</p>
                        <ol>
                        <li>Select a field added in the lab sheet and then click. Click on the field. The <strong><strong>Properties</strong></strong>dialog appears as shown in the figure.</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture189.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Linking Sheets</p>
                        <ol start={17}>
                        <li>In the <strong><strong>Link Sheet</strong></strong>field, only approved lab sheets are listed here. Select the sheet to link and then click <strong><strong>Update</strong></strong>.</li>
                        </ol>
                        <p>The selected lab sheet will be linked to the selected field.</p>
                        <h3>1.1.24&nbsp;Adding Comments</h3>
                        <p>You can add comments to a field in the lab sheet. To do so, follow these steps:</p>
                        <ol>
                        <li>Select a field to add comments and then click.</li>
                        <li>The <strong><strong>Insert Comment</strong></strong>dialog appears. In the <strong><strong>Comment </strong></strong>&nbsp; field type comment and then click <strong><strong>Ok </strong></strong>as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                          <img  src='../../image/articel/eln/Picture190.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Adding Comments</p>
                        <ol start={30}>
                        <li>Mouse over the field to see the comment added as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture191.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Comment Added</p>
                        <p>To remove the comment, in the <strong><strong>Insert Comment</strong></strong>&nbsp;dialog click <strong><strong>REMOVE COMMENT</strong></strong>.</p>
                        <h3>1.1.25&nbsp;Adding Chart</h3>
                        <p>You can add chart to your lab sheet to compare field values as shown here:</p>
                        <ol>
                        <li>Select a field and then click <img src='../../image/articel/eln/chart.png' className='mx-2 p-0 w-auto'/> . The chart dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture192.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Adding Chart</p>
                        <ol start={18}>
                        <li>Click <strong><strong>New Chart</strong></strong> to add new chart. In the <strong><strong> Chart Title </strong></strong>&nbsp;field, type the title for the chart you create. Type <strong><strong>X axis </strong></strong>&nbsp;and <strong><strong>Y axis </strong></strong>&nbsp; names and then click <strong><strong> Save</strong></strong>.</li>
                        <li>In the <strong><strong>Chart Type </strong></strong> field, select the chart type: donut / line / column / area / pie / scatter / scatter / scatter line. For example, select Chart Type as line.</li>
                        <li>In the <strong><strong> Line Style </strong></strong> field, select line style.</li>
                        <li>In the <strong><strong> Legend </strong></strong> field, type the legend. For example: Population.</li>
                        <li>Click <strong><strong> Pick Color </strong></strong> to choose a color for the line and then click <strong><strong> Save</strong></strong>.</li>
                        <li>Under <strong><strong>Plot the Points </strong></strong>, click <strong><strong> Add Points. </strong></strong> The<strong><strong> Capture X </strong></strong> option is enabled. Now select points for the X axis as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture193.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Adding Points</p>
                        <ol start={36}>
                        <li>The points are captured, and the <strong><strong>Capture Y </strong></strong> option is enabled. Now select points for Y axis. The chart at the bottom of the dialog. You can scroll and view the chart.</li>
                        <li>Once you finish, click <strong><strong>EXPORT TO SHEET</strong></strong> to export the chart to the labsheet as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture194.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Importing Chart to Lab sheet</p>
                        <ol start={38}>
                         <li>Click <strong><strong>EXPORT TO IMAGE</strong></strong> to download the chart to local storage. Open the downloaded image. The image appears as show in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture195.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Downloaded Chart</p>
                        <h3>1.1.26&nbsp;Adding Chemical Diagrams</h3>
                        <p>To add chemical diagrams, follow these steps:</p>
                        <ol>
                        <li>Go to the <strong><strong>Data</strong></strong> Select a cell and then <img src='../../image/articel/eln/Chemical.png' className='m-2 w-auto'/>click. The cell turns blue color.</li>
                        <li>Double-click the cell. The <strong><strong>Properties</strong></strong>dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture196.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Chemical Diagram &ndash; Properties Dialog</p>
                        <ol start={40}>
                        <li>Use the drawing tools in the screen to draw diagrams as required.</li>
                        <li>Click <strong><strong>Save Sheet</strong></strong>and then click <strong><strong>Close</strong></strong> The added formula appears on the field in SMILES (Simplified Molecular Input Line Entry System) format as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture197.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Added Chemical Diagram</p>
                        <h3>1.1.27&nbsp;Tag Fields for Reports</h3>
                        <p>You can tag fields in the lab sheet that shall be used in reports. To do so, follow these steps:</p>
                        <ol>
                        <li>Select a field and then click. The dialog appears as shown in the above figure:</li>
                        </ol>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture198.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Tag Fields</p>
                        <ol start={42}>
                        <li>Click <strong><strong>Add Tag</strong></strong>. In the <strong><strong>Tag Name</strong></strong> field, type the name for the tag and then click. The field is tagged and listed.</li>
                        <li>Click <img src='../../image/articel/eln/pencil.png' className='m-0 p-0 w-auto'/> to edit the tag.</li>
                        <li>Click<img src='../../image/articel/eln/delete1.png' className='m-0 p-0 w-auto'/>  to delete the tag.</li>
                        <li>Same way, follow steps 1 to 4 to create more tags.</li>
                        </ol>
                        <h3>1.1.28&nbsp;Formatting</h3>
                        <p>There are multiple ways to format your spreadsheet. To bold, italicize, underline, or align data to left, right or center in a cell, you can do this by clicking on the buttons shown in the figure:</p>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture199.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Sheet Formatting Options</p>
                        <h3>1.1.29&nbsp;Adding Links</h3>
                        <ol>
                        <li>To add an outside link to the sheet, click.<img src='../../image/articel/eln/link.png' className='m-0 p-0 w-auto'/> The <strong><strong>Hyperlink</strong></strong>dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture200.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Add Hyperlink Dialog</p>
                        <ol start={46}>
                        <li>In the <strong><strong>Address</strong></strong>field, type/paste the link and then click <strong><strong>OK</strong></strong>. On clicking the link you will be directed to the respective page.</li>
                        </ol>
                        <h3>1.1.30&nbsp;Adding Functions and Formulas</h3>
                        <p>To add functions to the sheet, type in the function in the top bar in correlation with the cell it is being applied to as shown in the figure:</p>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture201.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Adding Functions to ELN Sheet</p>
                        <p>When you process the order based on the formula calculations are done in runtime and appears as shown in the figure:</p>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture202.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Formula Applied at Runtime</p>
                        <h3>1.1.31&nbsp;Adding Multiple Sheets</h3>
                        <p>Logilab ELN enables you to create multiple sheets in a lab book. To do so, click that appears at the footer of the sheet. A new lab sheet is added as shown in the figure:</p>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture203.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Adding Multiple Sheet</p>
                        <p>You can edit and rename the sheet as required.</p>
                        <h3>1.1.32&nbsp;Exporting and Importing Sheets</h3>
                        <ol>
                        <li>You can export lab sheets to EXCEL or PDF. Click  <img src='../../image/articel/eln/Download-2.png' className='m-2 w-auto'/>  in the sheet. In the <strong><strong>File Name</strong></strong>field, type the file name, in the Save As Type field, select the format (Excel / PDF) to export as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture204.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Export Dialog - for Excel</p>
                        <div className='inner-image'>
                          <img src='../../image/articel/eln/Picture205.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Export Dialog - for PDF</p>
                        <ol start={47}>
                        <li>Click <strong><strong>SAVE</strong></strong>.</li>
                        <li>To export the lab sheet as Json,<img src='../../image/articel/eln/json.png' className='m-2 w-auto'/> click. &nbsp;The sheet is exported in Json format.</li>
                        <li>Click <img src='../../image/articel/eln/import-json.png ' className='m-2  w-auto'/>to import a Json file.</li>
                        </ol>
                        <h3>1.1.33&nbsp;Other Common Features in the Lab Sheet</h3>
                        <table className="table table-bordered text-left">
                            <thead>
                             <tr>
                                <th ><strong>Feature</strong></th>
                                <th ><strong>Description</strong></th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1.1.33.1&nbsp;Common Controls</td>
                                <td>&nbsp;</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/new.png ' className='m-0 p-0 w-auto'/></td>
                                <td>Opens a new lab sheet from the Sheet Templates screen.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/Edit.png ' className='m-0 p-0 w-auto'/></td>
                                <td>Open the selected lab sheet for editing from the Sheet Templates screen. Note that you can edit a lab sheet that is in the "Created" status.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/open.png ' className='m-0 p-0 w-auto'/></td>
                                <td>Enables open an existing lab sheet from the Sheet Templates screen.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/Save.png ' className='m-0 p-0 w-auto'/></td>
                                <td>Saves the changes to the lab sheet.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/submitt.png' className='m-0 p-0 w-auto'/></td>
                                <td>Submits for review.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/import-json.png' className='m-0 p-0 w-auto'/></td>
                                <td>Enables import a JSON file. This feature helps to import templates into the lab sheet.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/fullscreen.png' className='m-0 p-0 w-auto'/></td>
                                <td>Enables view order in full screen.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/close2.png' className='m-0 p-0 w-auto'/></td>
                                <td>Helps close the sheet order.</td>
                                </tr>
                                <tr>
                                <td>1.1.33.2&nbsp;Home Tab</td>
                                <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td> <img src='../../image/articel/eln/openfile .png' className='m-0 p-0 w-auto'/>Open</td>
                                    <td>Imports or opens existing lab sheet.</td>
                                </tr>
                                <tr>
                                <td> <img src='../../image/articel/eln/Export.png' className='m-0 p-0 w-auto'/>Export</td>
                                <td>Exports sheet to Excel.</td>
                                </tr>
                                <tr>
                                <td> <img src='../../image/articel/eln/Export json.png' className='m-0 p-0 w-auto'/>Export as json</td>
                                <td>Export as JSON.</td>
                                </tr>
                                <tr>
                                <td> <img src='../../image/articel/eln/cut.png' className='m-0 p-0 w-auto'/>Cut</td>
                                <td>Cuts the selection.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/paste.png' className='m-0 p-0 w-auto'/>Copy</td>
                                 <td>Pastes the cut selection.</td>
                                </tr>
                                <tr>
                                <td>
                                   <img src='../../image/articel/eln/format.png' className='m-0 p-0 w-auto'/>Format</td>
                                   <td>Format text using bold, italics, and underline.</td>
                                </tr>
                                <tr>
                                <td> <img src='../../image/articel/eln/Linksheet.png' className='m-0 p-0 w-auto'/>Link sheet</td>
                                <td>Link a sheet.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/chart.png' className='m-0 p-0 w-auto'/>Chart</td>
                                <td>Add chart to the sheet.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/tag.png' className='m-0 p-0 w-auto'/>Tag</td>
                                <td>Add tag to the field.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/link.png' className='m-0 p-0 w-auto'/>Link</td>
                                <td>Insert a hyperlink to the sheet.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/InsertComment.png' className='m-0 p-0 w-auto'/>Insert Comment</td>
                                <td>Insert comment to the field.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/InsertImage.png' className='m-0 p-0 w-auto'/>Insert Image</td>
                                <td>Insert image to the sheet.</td>
                                </tr> 
                                <tr>
                                <td><img src='../../image/articel/eln/Backgroud.png' className='m-0 p-0 w-auto'/></td>
                                <td>Change background color of the field/column/row.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/Textcolor.png' className='m-0 p-0 w-auto'/>Text color</td>
                                <td>Change font color of the selected field/column/row.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/Borders.png' className='m-0 p-0 w-auto'/>Borders</td>
                                <td>Change borders of the selected cells.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/Fontsize.png' className='m-0 p-0 w-auto'/>Font size</td>
                                <td>Change font size.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/Font.png' className='m-0 p-0 w-auto'/>Font</td>
                                <td>Change font face.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/Alignment.png' className='m-0 p-0 w-auto'/>Alignment</td>
                                <td>Align text to right, left, center, top, bottom, or justify.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/TextWrap.png' className='m-0 p-0 w-auto'/>;Text Wrap</td>
                                <td>Wrap text in the selected cell/column/row.</td>
                                </tr>
                                <tr>
                                <td>1.1.33.3&nbsp;Data Tab</td>
                                <td>&nbsp;</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/datavalidation.png' className='m-0 p-0 w-auto'/></td>
                                <td>The Data tab helps to sort, filter, and validate data. Add batch settings and chemical diagrams.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/sort.png' className='m-0 p-0 w-auto'/>Sort</td>
                                <td>Sorts data A-Z or Z-A.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/filter.png' className='m-0 p-0 w-auto'/>Filter</td>
                                <td>Filter data.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/ValidateData.png' className='m-0 p-0 w-auto'/>Validate Data</td>
                                <td>Validates data in the selected field.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/ChemicalDiagram.png' className='m-0 p-0 w-auto'/>Chemical Diagram</td>
                                <td>Add chemical diagrams to the sheet.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/WellPlates.png' className='m-0 p-0 w-auto'/>Well Plates</td>
                                <td>Add well plate template to the sheet.</td>
                                </tr>
                                <tr>
                                <td>1.1.33.4&nbsp;Insert Tab</td>
                                <td>&nbsp;</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/InsertTab.png' className='m-0 p-0 w-auto'/></td>
                                <td>The Insert tab enables insert column/row above or below. Also enables delete selected row or column.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/columleft.png' className='m-0 p-0 w-auto'/></td>
                                <td>Enables insert column to the left.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/columright.png' className='m-0 p-0 w-auto'/></td>
                                <td>Enables insert column to the right.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/columbelow.png' className='m-0 p-0 w-auto'/></td>
                                <td>Enables add row below.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/columabove.png' className='m-0 p-0 w-auto'/></td>
                                <td>Enables add row above.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/columdelete.png' className='m-0 p-0 w-auto'/></td>
                                <td>Enables delete column.</td>
                                </tr>
                                <tr>
                                <td><img src='../../image/articel/eln/deleterow.png' className='m-0 p-0 w-auto'/></td>
                                <td>Enables delete row.</td>
                                </tr>
                            </tbody>
                            </table>
                        <p className='figure mt-1'>Table: 5 - Common Features in Lab Sheet</p>
                        <h3>1.1.34&nbsp;Well Plates</h3>
                        <p>Logilab ELN enables you create well plates templates. Well Plate Templates describe the layout of wells on the plate read by a given instrument. Each well is associated with Sample Type and Sample ID.</p>
                        <p>To create a well plate template, follow these steps:</p>
                        <ol>
                        <li>In the lab sheet, go to the <strong><strong>Data</strong></strong> Click.<img src='../../image/articel/eln/WellPlates.png' className='m-2 p-0 w-auto'/>The dialog appears as shown in the figure.</li>
                        </ol>
                        <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture206.png' className='my-3'/>  
                            </div>
                        <p className='figure mt-1'>FIGURE: Create Well Plate Dialog</p>
                        <ol start={50}>
                        <li>In the <strong><strong>Row</strong></strong> field, type the number of wells you want to create in a row.</li>
                        <li>In the <strong><strong>Column</strong></strong> field, type the number of wells you want to create in a column.</li>
                        <li>In the <strong><strong>Plate Name</strong></strong> field, type the name for the plate and then click <strong><strong>CONTINUE</strong></strong>. The well plate is created and appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture207.png' className='my-3'/>  
                            </div>
                        <p className='figure mt-1'>FIGURE: Well Plate Created</p>
                        <p>Each well shall be associated with Sample Type and Sample ID.</p>
                        <ol start={53}>
                        <li>Click on a well. The well details appear on the right side as shown in the above figure.</li>
                        </ol>
                        <p>You can see the Well ID of selected well.</p>
                        <ol start={54}>
                        <li>In the <strong><strong>Sample Type</strong></strong>field, select the sample type: <strong><strong> Standard</strong></strong>&nbsp;/ <strong><strong> Unknow</strong></strong>n / <strong><strong>Positive Control</strong></strong>&nbsp;/ <strong><strong> Negative Control</strong></strong>.</li>
                        <li>In the <strong><strong>Sample ID</strong></strong> field, type the Id of the sample.</li>
                        <li>In the <strong><strong>Result</strong></strong> field, type the result of the sample.</li>
                        <li>Same way, fill in the details for the other wells and then click <strong><strong>IMPORT</strong></strong>. The well plate is imported to the lab sheet and appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture208.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Well Plate Inserted in the Lab Sheet</p>
                        <ol start={58}>
                        <li>Click on the well and type/edit data for each well.</li>
                        </ol>
                        <h3>1.1.35&nbsp;Saving the Lab Sheet</h3>
                        <ol>
                        <li>Click <strong><strong>Save</strong></strong>to save the lab sheet.</li>
                        </ol>
                        <p>If you close the lab sheet without saving, the following dialog appears prompting to save the changes:</p>
                        <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture209.png' className='m-0 p-0 w-auto'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Save Dialog</p>
                        <ul>
                        <li>Click <strong><strong>SAVE</strong></strong> to save the changes.</li>
                        <li>Click <strong><strong>DISCARD</strong></strong> to close the lab sheet without saving the changes.</li>
                        <li>Click <strong><strong>CANCEL</strong></strong> to cancel closing operation without saving the changes.</li>
                        </ul>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../process-protocol-orders">process Protocol Orders</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../protocoltemplates">Protocol Templates</Link>
                        </div>
                    </div>
                    </div>       
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default Sheettemplates; 