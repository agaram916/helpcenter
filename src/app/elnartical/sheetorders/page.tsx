'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const Sheetorders = () => {
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
                     <button id="btn-back-to-top" onClick={backToTop} style={{ display: 'block'}}>
                        <i className="fas fa-arrow-up"></i>
                    </button>
                )}
                 <div className='inner-details'>
                    <h1><strong>Logilab ELN - Register Sheet Orders</strong></h1>
                    <section className='articel-content'>
                    <p>The Sheet Orders screen enables you to register orders to be processed. The orders shall be registered for the following:</p>
                        <p><strong><strong>ELN Order</strong></strong>: Orders shall be registered for tests, templates and analysis created in Logilab ELN.</p>
                        <p><strong><strong>Research Order</strong></strong>: Registering an order with this option enables the user to redesign / add or modify fields in the lab sheet during order processing.</p>
                        <p><strong><strong>Excel Orders</strong></strong>: Registering orders with this option will enable the user to import Excel sheets during order processing.</p>
                        <p><strong><strong>Sheet Validation</strong></strong>: Sheets that are designed/created are evaluated if they are working properly.</p>
                        <p>To register ELN Order, follow these steps:</p>
                        <ol>
                        <li>On the main menu, click <img src='../../image/articel/eln/orders.png' className='w-auto mx-2'/>and then click <strong><strong>Sheet Orders</strong></strong>. The <strong><strong>Sheet Orders </strong></strong>screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture279.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Sheet Orders Screen</p>
                        <p>The <strong><strong>Sheet Orders</strong></strong>&nbsp;screen consists of the following predefined folders.</p>
                        <ul>
                        <li><strong><strong>Pending Orders</strong></strong>: Contains list of orders registered and pending to process in each order type.</li>
                        <li><strong><strong>Completed Orders</strong></strong>: Contains completed and approved orders.</li>
                        <li><strong><strong>Assigned Orders</strong></strong>: Orders you assigned to other users appear here. These orders will not have workflow steps. The user to whom you assigned the order will complete this order or in their absence, you, the owner who assigned the order shall complete the order. These orders are visible only to you, the user to whom you assigned the order.</li>
                        <li><strong><strong>My Orders</strong></strong>: Orders assigned to you by other users appear here. These orders will not have workflow steps. You can complete these orders or the user who assigned the order to you can complete the order. These orders are visible only to you and the user who assigned the order to you.</li>
                        <li><strong><strong>Shared Orders</strong></strong>: List of orders shared by you to other users and list of orders shared to you by other users appear here.</li>
                        <li><strong><strong> Projects: </strong></strong>For each entry in the Project master, a new folder is created inside the <strong><strong> Projects</strong> </strong> predefined folders.</li>
                        </ul>
                        <p>When you select <strong><strong>Project</strong></strong>&nbsp;in the <strong><strong>Create Order</strong></strong>&nbsp;screen, the order is created inside the specified project folder as shown in the figure:</p>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture280.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Order Created Inside Projects Folder</p>
                        <p>If you select <strong><strong>Sample</strong></strong>, then the order is created inside the specified sample folder.</p>
                        <h3>1.1.1&nbsp;Filter by Date</h3>
                        <p>You can filter orders based on a selected date. To do so, follow these steps:</p>
                        <ol>
                        <li>Click. <img  src='../../image/articel/eln/filter.png' className='mx-2 w-auto'/>  The filter dialog appears. In the filter dialog, click <strong><strong>Calendar</strong></strong>. The calendar appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture281.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Filter by Date</p>
                        <ol>
                        <li>Select a date to filter orders. You can see orders fetched for the selected date.</li>
                        </ol>
                        <h3>1.1.2&nbsp;Filter by Date Range, Task and Project</h3>
                        <p>To search orders based on a specific period, task, project and search key, follow these steps:</p>
                        <ol>
                        <li>Click.<img  src='../../image/articel/eln/filter.png' className='mx-2'/> The filter dialog appears. In the filter dialog, click <strong><strong>Date Range</strong></strong>.</li>
                        <li>Select <strong><strong>Filter from</strong></strong>and <strong><strong>Filter To</strong></strong>&nbsp;dates to specify the duration for which the records will be fetched.</li>
                        <li>To narrow the search, select <strong><strong>Task</strong></strong>, <strong><strong>Project</strong></strong>and <strong><strong>Search By</strong></strong></li>
                        </ol>
                        <ul>
                        <li>In the <strong><strong>Search By </strong></strong>field select <strong><strong>Keyword</strong></strong>. The <strong><strong>Keyword</strong></strong>&nbsp;field appears. Type the key word to search orders based on the given keyword.</li>
                        <li>In the <strong><strong>Search By </strong></strong> field select <strong><strong>Search Content </strong></strong>. &nbsp;The <strong><strong>Search Content</strong></strong>&nbsp;field appears. Type the content to search orders based on the given content.</li>
                        </ul>
                        <ol start={5}>
                        <li>Records are fetched for the selected task, project and search by fields and for the selected date range as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture282.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Filter by Date Range</p>
                        <h3>1.1.3&nbsp;Creating New Folder</h3>
                        <p>You can create your own folder and sub folders in ELN.</p>
                        <p>To create a new folder, follow these steps:</p>
                        <ol> 
                        <li>On the <strong><strong>Sheet Orders </strong></strong> screen, click <strong><strong>New Folder </strong></strong>. The <strong><strong> Create New Folder</strong></strong>&nbsp;dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture283.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Create New Folder Dialog 1</p>
                        <ol start={5}>
                        <li>In the <strong><strong>Enter new name for the file </strong></strong> field, type a name for the folder you want to create.</li>
                        <li>Set the folder visibility to <strong><strong>Site</strong></strong>/ <strong><strong>Only me</strong></strong>&nbsp;/ <strong><strong>Project Team</strong></strong>.</li>
                        <li>Click <strong><strong>Add</strong></strong>. The following dialog appears:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture284.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Create New Folder Dialog 2</p>
                        <ol start={8}>
                        <li>Click <strong><strong>YES</strong></strong>. The new folder is created and appears as shown in the figure: You can also create subfolders inside the user defined folder as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture285.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: User Defined Folder and Sub Folder Created</p>
                        <ol start={9}> 
                        <li>Inside the user defined folder, you can upload files and attachments. Select the folder and then click <strong><strong>Upload</strong></strong> to upload files.</li>
                        </ol>
                        <h3>1.1.4&nbsp;Change Views</h3>
                        <p>Logilab ELN allows you to change views between Grid and List.</p>
                        <p>By default, the folder / grid view appears. If you want to switch to the List view, then click. <img  src='../../image/articel/eln/changviews.png' className='p-0 mx-2 w-auto'/>The List View appears as shown in the figure:</p>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture286.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Changing Views: Grid View / List View</p>
                        <h3>1.1.5&nbsp;Add More Fields to the Grid/List</h3> 
                        <p>Logilab ELN allows you to add more fields to the grid/list in the Sheet Order screen.</p>
                        <ol>
                        <li>By default, the Order ID, Date Created, Task and Action fields appear. If you want to add more fields, click <img  src='../../image/articel/eln/GridList.png' className='p-0 mx-2 w-auto'/>and then click to check the fields to add as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture287.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Adding More Fields to the Grid/List</p> 
                        <p>You cannot remove default fields.</p>
                        <h3>1.1.6&nbsp;Sort by Selected Field/Column</h3>
                        <p>Logilab ELN allows you to sort records based on a selected field in the Sheet Order screen.</p>
                        <ol>
                        <li>To sort records, click <img  src='../../image/articel/eln/sortby.png' className='mx-2 w-auto'/>and then select a field as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture288.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Sorting Records by selected Field</p> 
                        <p>The order records are sorted based on the selected field.</p>
                        <p>You can also use <img  src='../../image/articel/eln/ascendingdescending.png' className=' w-auto mx-2'/>  to sort records in ascending / descending order.</p>
                        <h3>1.1.7&nbsp;Upload Files</h3>
                        <p>Logilab ELN enables you to upload files to user defined folders/dynamic folders.</p>
                        <p><strong><strong>Note:</strong></strong>You cannot upload files to default / system folders. </p>
                        <p>To upload a file, follow these steps:</p>
                        <ol>
                        <li>Go to the user defined folder where you want to upload files and then click <strong><strong>Upload </strong></strong>as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture289.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Uploading Files to the User Defined Folders</p>
                        <p>The <strong><strong>Upload Files</strong></strong>&nbsp;dialog appears as shown in the above figure.</p>
                        <ol start={10}>
                        <li>Click <strong><strong>Select Files</strong></strong>, in the <strong><strong>Open </strong></strong>dialog navigate and choose the file to upload and then click <strong><strong>Open</strong></strong>.</li>
                        <li>The selected file will be uploaded. Once done, on the <strong><strong>Upload File</strong></strong>dialog, click <strong><strong>done</strong></strong>. The file is uploaded and appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture290.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Upload Files Dialog</p>
                        <p>If required, you can click <img  src='../../image/articel/eln/close2.png' className='w-auto mx-2'/>that appears next to the file uploaded to remove the attached file.</p>
                        <ol start={12}>
                        <li>Click <strong><strong>Done</strong></strong>. The file is uploaded to the selected user defined folder and appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture291.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: File Uploaded</p>
                        <h3>1.1.8&nbsp;Move or Delete a File / Folder</h3>
                        <ol>
                        <li>Right-click a file or folder and then click Move to move a folder. The Move dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture292.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Move Dialog</p> 
                        <ol start={13}>
                        <li>The dialog displays the user defined folders. Select a folder to move the selected file/folder and then click <strong><strong>MOVE</strong></strong>. The file/folder is moved to the selected destination folder.</li>
                        <li>Right-click a file/folder and then click <strong><strong>delete</strong></strong>to delete the file/folder.</li>
                        </ol>
                        <h3>1.1.9&nbsp;Move or Delete Multiple Files / Folders / Orders</h3>
                        <p>Logilab ELN enables you to move multiple files / folders /orders from user defined folders to other user defined folders.</p>
                        <p><strong><strong>Note:</strong></strong>&nbsp;You cannot move files/folders/orders from and to default folders. </p>
                        <p>To move multiple files, follow these steps:</p>
                        <ol>
                        <li>Go to the user defined folder where you want to select files to move.</li>
                        <li>Click <img  src='../../image/articel/eln/3dot.png' className='p-0 w-auto'/> and then click <strong><strong>Select Files</strong></strong>&nbsp;as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture293.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Uploading Files to the User Defined Folders</p>
                        <ol start={15}>
                        <li>You can see a check box appears in every file to select. Click to select the files to move / delete as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture294.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Selecting Files to Move / Delete</p>
                        <p><strong><strong>Note:</strong></strong></p>
                        <p>If you have selected <strong><strong>Select Folders</strong></strong>, the folders will appear with check boxes to select.</p>
                        <p>If you have selected <strong><strong>Orders</strong></strong>, the orders will appear with check boxes to select.</p>
                        <ol start={16}>
                        <li>Click <strong><strong>Delete </strong></strong>to delete selected files if required.</li>
                        <li>Click <strong><strong>Move</strong></strong>to move the selected files. The Move dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture295.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Move Dialog</p>
                        <ol start={18}>
                        <li>The dialog displays the user defined folders. Select a folder to move the selected files and then click <strong><strong>MOVE</strong></strong>. The files are moved to the selected destination folder and appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture296.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Moved Files in the Destination Folder</p>
                        <h3>1.1.10&nbsp;Register Sheet Order</h3>
                        <p>To register a sheet order, follow these steps:</p>
                        <ol>
                        <li>On the <strong><strong>Sheet Orders</strong></strong>screen, click <strong><strong>Register</strong></strong>. The <strong><strong>Create Order</strong></strong>&nbsp;dialog appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture297.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Create Order Dialog</p>
                        <ol start={19}>
                        <li>Under <strong><strong> Order Type</strong></strong>, select the order type. If you want to register an ELN order, then select <strong><strong> ELN Order with Template</strong></strong>.</li>
                        <li>In the <strong><strong>Task </strong></strong> field, select the task.</li>
                        <li>In the <strong><strong> Select Sheet Template </strong></strong> field, sheet templates mapped with the task appear. Select the template.</li>
                        <li>In the <strong><strong> Select a Material </strong></strong>field, select the material for the task.</li>
                        <li>Under <strong><strong> Order Visibility </strong></strong>, set the order visibility to <strong><strong>Site</strong></strong>/ <strong><strong> Only me</strong></strong>&nbsp;/ <strong><strong>Project Team</strong></strong>.</li>
                        <li>In the <strong><strong> Select a Project </strong></strong>field, select the project. Based on the selected project, the project team workflow user list appears. The sheet will pass through the workflow steps and the respective user must approve the sheet in each step.</li>
                        <li>In the <strong><strong>Sample </strong></strong> field, select the sample for the task.</li>
                        <li>In the <strong><strong>Assign To </strong></strong> field, select <strong><strong>Order Workflow </strong></strong>/ <strong><strong> User </strong></strong>for the order. If you select Order Workflow, then the order will pass through the workflow defined. If you select User, then you must select the user to assign the order.</li>
                        <li>In the <strong><strong>Key Word </strong></strong> field, type a keyword for the order you want to register.</li>
                        <li>Under <strong><strong>Save Within </strong></strong>, you can see user defined folders if any. Click to select the folder to store the order.</li>
                        <li>Click <strong><strong>REGISTER </strong></strong>. The order is registered and the same appears in the folders <strong><strong> Pending Orders</strong></strong>&gt;&gt;<strong><strong> ELN Orders</strong></strong> folders as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture298.png' className='p-0 my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Order Created</p>
                        <ol start={30}>
                        <li>Click the order. You can see icons appear as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture299.png' className='p-0 my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Order Options</p> 
                        <p><strong><strong><img  src='../../image/articel/eln/CopyLink.png' className='p-0 mx-2 w-auto'/> Copy Link:</strong></strong>&nbsp;Copy and send the link to any external user to enable them to view the order content/details.</p>
                        <p><strong><strong><img  src='../../image/articel/eln/Share2.png' className='p-0 mx-2 w-auto'/>;Share:</strong></strong>&nbsp;Share the order to other ELN users.</p>
                        <p><strong><strong><img  src='../../image/articel/eln/TransactionHistory.png' className='p-0 mx-2 w-auto'/>Transaction History:</strong></strong>&nbsp;View version history, transaction history and workflow history.</p>
                        <p><strong><strong><img  src='../../image/articel/eln/NewTab.png' className='p-0 mx-2 w-auto'/>Open in New Tab:</strong></strong>&nbsp;Open the order in a new tab enables user to open multiple orders in new tabs for comparison.</p>
                        <p><strong><strong><img  src='../../image/articel/eln/CancelOrder.png' className='p-0 mx-2 w-auto'/>Cancel Order:</strong></strong>&nbsp;Cancel order for some reason.</p>
                    </section>
                    <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../dashboard">Dashboard</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../protocolorders">Protocol Orders</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default Sheetorders; 