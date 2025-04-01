'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const Materialinventory = () => {
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
                <h1><strong>Logilab ELN - Material Inventory</strong></h1>
                    <section className='articel-content'>                         
                            <h2>1.2&nbsp;Material Inventory</h2>
                            <p>Material Inventory tab enables you to do the following:</p>
                            <ul>
                            <li>Add material to inventory.</li>
                            <li>Do inventory transaction.</li>
                            <li>Add related files to the inventory transaction.</li>
                            </ul>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific transactions.</p>
                            <h3>1.2.1&nbsp;Adding Material to the Inventory</h3>
                            <p>Once the material is added to the Material master, you must add the material to the inventory. And then issue the material to use the material in transactions.</p>
                            <p>To add a material to the inventory, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img  src='../../image/articel/eln/Inventory.png' className='mx-2 w-auto'/> and then click <strong><strong>Material Inventory. </strong></strong>The <strong><strong>Material Inventory </strong></strong>screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture114.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Material inventory Screen</p>
                            <p>By default, all material types and categories added for the last one week from all storage locations appear. You can see the status of the materials in different colors.</p>
                            <ol start={19}>
                            <li>You can choose filter options <img  src='../../image/articel/eln/filter.png' className='mx-2  w-auto'/>   to search materials added. Click. The filter appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture115.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Selecting Material Type, Category and Material to add Inventory</p>
                            <ol>
                            <li>Select <strong><strong>From </strong></strong>and <strong><strong>to</strong></strong>dates, <strong><strong>Material Type</strong></strong>, <strong><strong>Material Category, Material Name,</strong></strong>&nbsp;and then click <strong><strong>Filter</strong></strong>. Materials are fetched for the selected filter options. You can also filter materials based on the selected location in the <strong><strong>Select Storage</strong></strong>&nbsp;field under <strong><strong>Filter by Location</strong></strong>.</li>
                            </ol>
                            <p>&nbsp;</p>
                            <ol start={20}>
                            <li>To add material to the inventory, click <strong><strong>Add</strong></strong>. The <strong><strong>Add Inventory </strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture116.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Inventory Dialog</p>
                            <ol start={21}>
                            <li>In the <strong> <strong>Material Type </strong> </strong> field, the material type you want to add inventory.</li>
                            <li>In the <strong> <strong>Material Category </strong> </strong>f ield, the material category you want to add inventory.</li>
                            <li>In the <strong> <strong>Material Name </strong> </strong> field, select material name.</li>
                            <li>In the <strong> <strong>Quantity</strong> </strong> field, type the quantity of material received. The unit of the material appears in the <strong> <strong>Unit </strong> </strong></li>
                            <li>In the <strong><strong>BATCH</strong></strong>/<strong> <strong>LOT NO </strong></strong> field, type the lot number of the material.</li>
                            <li>In the <strong><strong>Re-Order Level</strong> </strong> field, type the quantity of material when reached, the material is to be reordered.</li>
                            <li>Click <strong><strong>Next</strong></strong>. The dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture117.png' className='my-3'/>  
                            </div>
                            <ol start={2}>
                            <li>In the <strong><strong>Section</strong></strong>field, select section to add material.</li>
                            <li>In the <strong><strong>Material Grade</strong></strong> field, select the material grade.</li>
                            <li>Select <strong><strong>Manufacturer</strong></strong>and <strong><strong> Supplier</strong></strong>&nbsp;of the material.</li>
                            <li>If required, click to select the <strong><strong> Show Date Properties</strong></strong> check box. The <strong><strong>Date of Manufacturing</strong></strong>&nbsp;and <strong><strong>Date Received</strong></strong>&nbsp; fields appears. Select date of manufacturing and date of expiry of the material.</li>
                            <li>Click <strong><strong>ADD STORAGE</strong></strong>. The <strong><strong> Storage Viewer</strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture118.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Storage Viewer Dialog</p>
                            <ol start={32}>
                            <li>Click to check the <strong><strong>Set- Default Storage Location</strong> </strong>option to store the material in the default storage location. Or to select a storage location to store the sample, in the <strong><strong>Select Storage </strong></strong>&nbsp;field, select the storage location for the inventory. You can see the storage structure appear. Select the node where you want to store the material and then click <strong><strong>SET</strong></strong>. You can see the <strong><strong>Selected Path</strong></strong>&nbsp;appear in the <strong><strong>Add Inventory</strong></strong></li>
                            <li>In the <strong><strong>Date of Expiry</strong></strong>field, select the date of expiry of the material.</li>
                            <li>In the <strong><strong>Remarks</strong></strong>field, type remarks if any.</li>
                            <li>Click <strong><strong>SAVE</strong></strong>.</li>
                            </ol>
                            <p>The material is added to the inventory and the same is listed in the <strong><strong>Material Inventory </strong></strong>tab as shown in the figure:</p>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture119.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Material Added to the Inventory</p>
                            <p>By default, the material will appear in Quarantine status until it is released.</p>
                            <p>The material record will appear with <img  src='../../image/articel/eln/eye2.png' className='mx-2 w-auto'/>  <img  src='../../image/articel/eln/pin.png' className='mx-2 w-auto'/>options.</p>
                            <ul>
                            <li>Click <img  src='../../image/articel/eln/eye2.png' className='mx-2 w-auto'/>to view material details.</li>
                            <li>Click <img  src='../../image/articel/eln/pin.png' className='mx-2 w-auto'/>to attach files to the material.</li>
                            </ul>
                            <h3>1.2.2&nbsp;Viewing Inventory Details</h3>
                            <p>To view inventory details, follow these steps:</p>
                            <ol>
                            <li>In the<strong><strong>Inventory ID</strong></strong>field, click on an inventory id to view its details. The <strong><strong>Inventory Details</strong></strong>&nbsp;dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture120.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Viewing Inventory Details</p>
                            <p>You can see the inventory details and the barcode generated for the inventory.</p>
                            <h3>1.2.3&nbsp;Viewing Transaction History of the Selected Inventory</h3>
                            <ol>
                            <li>Click <img  src='../../image/articel/eln/eye2.png' className='mx-2 w-auto'/>  of a material inventory record to view its transaction history. The details appear as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture121.png' className='my-3'/>  
                            </div>
                            <p  className='figure mt-1'>FIGURE: Viewing Material Details</p>
                            <p>You can see the material name, inventory id, available quantity. In the <strong><strong> Transaction Screen </strong></strong>&nbsp; field, select a transaction screen. Under <strong><strong>Usage History</strong></strong>, you can view the list of transactions with the material used in the selected transaction screen.</p>
                            <h3>1.2.4&nbsp;Set Open Date for the Inventory</h3>
                            <p>You must set an open date for the inventory if the Open Expiry option is set for the material while adding the material in the Material master. If the material is in Quarantine status, the material must be released and then material must be opened.</p>
                            <p>To set open date for the material, follow these steps:</p>
                            <ol>
                            <li>Select inventory and then click <strong><strong>Open </strong></strong>. The <strong> <strong> Open Date </strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture122.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Open Date Dialog</p>
                            <ol start={36}>
                            <li>Select the date and then click <strong><strong>SAVE</strong></strong>. The inventory expires as mentioned in the  <strong><strong>Expiry Validations</strong></strong>in material master.</li>
                            </ol>
                            <h3>1.2.5&nbsp;Release Inventory</h3>
                            <p>If the inventory status is Quarantine, then you must release the inventory for use.</p>
                            <ol>
                            <li>Select the inventory and then click <strong><strong>Release</strong></strong>. The status changes to" <strong><strong>Available</strong></strong>".</li>
                            </ol>
                            <h3>1.2.6&nbsp;Re-Stock Inventory</h3>
                            <p>When the status of the material appears as <strong><strong>Low stock </strong> </strong>, you can re-stock the material.</p>
                            <ol>
                            <li>To re-stock the material, select an inventory in low-stock status and then click <strong><strong>Re-Stock</strong></strong>as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture123.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Re-Stock Inventory</p>
                            <p>The <strong><strong>Add Re-Stock</strong></strong>&nbsp;dialog appears as shown in the figure:</p>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture124.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Re-Stock Dialog</p>
                            <ol start={37}>
                            <li>In the <strong><strong>Add Stock</strong></strong>field, select quantity of material to add.</li>
                            <li>Click <strong><strong>SAVE</strong></strong>.</li>
                            </ol>
                            <p>A new batch of the material is added with a new inventory id.</p>
                            <h3>1.2.7&nbsp;Dispose Inventory</h3>
                            <p>To dispose an inventory, follow these steps:</p>
                            <ol>
                            <li>Select an inventory from the grid and then click <strong><strong>Dispose</strong></strong>as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture125.png' className='my-3 w-100'/>  
                            </div>
                            <h3>1.2.8&nbsp;Attach File to Inventory</h3>
                            <p>You can attach the file to the inventory. To do so, follow these steps:</p>
                            <ol>
                            <li>Select the inventory and then click The <strong><strong>Material Inventory Attachment</strong> </strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture126.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Material Inventory Attachment Dialog</p>
                            <ol start={39}>
                            <li>Click <strong><strong>Choose</strong></strong>, select a file to attach and then click <strong> <strong>Upload</strong></strong>. The file is attached to the inventory.</li>
                            </ol>
                            <h2>1.3&nbsp;Inventory Parameters</h2>
                            <h3>1.3.1&nbsp;Material Type</h3>
                            <p>Material Types are used to group materials based on their type.</p>
                            <h4>1.3.1.1&nbsp;Add Material Type</h4>
                            <p>To add a material type, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img  src='../../image/articel/eln/Inventory.png' className='w-auto'/> and then click <strong> <strong>Inventory Parameters</strong></strong>. The <strong><strong>Material Type</strong> </strong>&nbsp;master tab appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture127.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Material Type Master</p>
                            <ol start={40}>
                            <li>Click <strong><strong>Add Type</strong></strong>. The <strong><strong> Add Type</strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture128.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Type Dialog</p>
                            <ol start={41}>
                            <li>In the <strong><strong>Material Type Name</strong></strong>field, type the material name you want to add. You can add fields to the material type you add.</li>
                            <li>In the <strong><strong>Field Name</strong></strong>type the field name you want to add.</li>
                            <li>In the <strong><strong>Data Type</strong></strong>field, select data type for the field. The data type can be <strong><strong>Text </strong></strong>/ <strong><strong>Number</strong></strong>&nbsp;/ <strong><strong>Date </strong></strong>&nbsp;/ <strong><strong>Combo box</strong></strong>. For Combo box, in the <strong><strong>Enter Combo Box Value </strong></strong>&nbsp;dialog, type the values for combo box separated by comma.</li>
                            <li>Click <strong><strong>ADD</strong></strong>. The field is added to the list and appears with <strong><strong>EDIT</strong></strong> You can add multiple fields to the material type.
                            <ul>
                            <li>To edit a field, click <strong><strong>EDIT</strong></strong>. The field appears in the <strong><strong>Field Name</strong></strong>. Edit field name and data type and then click <strong><strong>UPDATE</strong></strong>.</li>
                            <li>To delete a field, select a field from the list and then click <strong><strong>DELETE</strong></strong>.</li>
                            </ul>
                            </li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>. The material type is added to the material type master.</li>
                            </ol>
                            <h3>1.3.1.2&nbsp;Edit Material Type</h3>
                            <ol>
                            <li>To edit material type, on the Material Type master screen, select a material type and then click <strong> <strong>Edit Type</strong></strong>. The <strong><strong>Edit Type</strong></strong>dialog appears.</li>
                            <li>You cannot edit Material Type name. You can add or edit fields and then click <strong><strong>SUBMIT </strong></strong>. &nbsp;</li>
                            </ol>
                            <h3>1.3.2&nbsp;Material Category Master</h3>
                            <p>Material Category master is used to add and manage material categories. Material category is used in various forms and master&rsquo;s to group materials.</p>
                            <p>To create a new material category, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click  <img  src='../../image/articel/eln/Inventory.png' className='w-auto  mx-2'/> and then click <strong><strong>Inventory Parameters</strong></strong>. In the Inventory Parameters screen, go to the <strong><strong>Material Category</strong></strong> The <strong><strong>Material Category</strong></strong>&nbsp;tab appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture129.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Material Category Tab</p>
                            <p>In the Material Category tab, you can see the list of material categories added and options to add, edit and retire material categories appears.</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific material categories.</p>
                            <ol start={46}>
                            <li>Click The <strong><strong>Create Material Category </strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture130.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Create Material Category Dialog</p>
                            <ol start={47}>
                            <li>In the <strong><strong>Material Type</strong></strong>field, select material type.</li>
                            <li>In the <strong><strong>Material Category </strong></strong>field, type the name of the material category you want to add.</li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>.</li>
                            </ol>
                            <p>You can see the material category you just added listed in the Material Category master.</p>
                            <p>To edit material category details, in the Material Category master screen, select the material category, and then click <strong><strong>Edit</strong></strong>. In the edit screen, do required changes and then click <strong><strong>SUBMIT</strong></strong>.</p>
                            <p>To retire a material category, in the Material Category master screen, select the material category you want to retire then click <strong><strong>Retire.</strong></strong></p>
                            <h3>1.3.3&nbsp;Storage location Master</h3>
                            <p>Storage Location master is used to create and manage storage structures that are used to store samples.</p>
                            <p>To create a new storage location, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='w-auto mx-2'/>and then click <strong><strong>Inventory Parameters</strong></strong>. In the Inventory Parameters screen, go to the <strong><strong>Storage Location</strong></strong>The <strong><strong>Storage Location </strong></strong>master screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture131.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Storage Location Master Screen</p>
                            <p>In the Storage Location master screen, you can see the list of storage locations added and options to add, edit and retire storage locations appear.</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific storage locations.</p>
                            <ol start={50}>
                            <li>Click The <strong><strong>ADD </strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture132.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Create Storage Location Dialog</p>
                            <ol start={51}>
                            <li>In the <strong><strong>Storage Name </strong></strong>field, type the name of the storage you want to add.</li>
                            <li>In the <strong><strong>Sample Storage Location</strong></strong>field, the root node appears. Click <img src='../../image/articel/eln/pencil.png' className='w-auto mx-2'/> and rename the root node.</li>
                            </ol>
                            <ul>
                            <li>Click <img  src='../../image/articel/eln/parallel .png' className='w-auto mx-2'/>to add a parallel node.</li>
                            <li>Clic <img  src='../../image/articel/eln/child .png' className='w-auto mx-2'/>to add a child node.</li>
                            <li>Click <img  src='../../image/articel/eln/pencil.png' className='w-auto mx-2'/>and type the name for the node.</li>
                            </ul>
                            <ol start={53}>
                            <li>Using the above options design the storage structure. For example, as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture133.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Example Storage Structure Designed</p>
                            <ol start={54}>
                            <li>Click <strong><strong>SAVE</strong></strong>.</li>
                            </ol>
                            <p>You can see the storage location you just added listed in the Storage Location master.</p>
                            <ul>
                            <li>To edit storage location details, in the Storage location master screen, select the storage location, and then click <strong><strong>Edit</strong></strong>. In the edit screen, do required changes and then click <strong><strong>SUBMIT</strong></strong>.</li>
                            <li>To retire a storage location, in the Storage location master screen, select the storage location you want to retire then click</li>
                            <li>Use the <strong><strong>Save As</strong></strong>option to create a storage location with same structure with minimal changes. Select a storage location and then click <strong><strong>Save As</strong></strong>. The <strong><strong>ADD</strong></strong>&nbsp;dialog appears. In the Storage Name field, type a name. Do required edits to the nodes and then <strong><strong>SAVE</strong></strong>.</li>
                            </ul>
                            <h2>1.4&nbsp;Unit Master</h2>
                            <p>Unit master is used to create and manage units that are used to measure samples/material etc.</p>
                            <p>To create a new unit, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='w-auto mx-2'/>and then click <strong><strong>Inventory Parameters</strong></strong>. In the Inventory Parameters screen, go to the <strong><strong>Unit Master</strong></strong>&nbsp;tab. The <strong><strong>Unit Master</strong></strong>&nbsp;screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture134.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Unit Master</p>
                            <p>In the Unit Master screen, you can see the list of units added and options to add, edit and retire units appear.</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific units.</p>
                            <ol start={55}>
                            <li>Click <strong><strong>Add</strong></strong>The<strong><strong>Add </strong></strong>screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture135.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Create Unit Dialog</p>
                            <ol start={56}>
                            <li>In the <strong><strong>Unit </strong></strong>field, type the name for the unit you want to add.</li>
                            <li>In the <strong><strong>Description</strong></strong>field, type description for the unit.</li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>.</li>
                            </ol>
                            <p>You can see the unit you created listed in the unit master.</p>
                            <p><strong>Other options in Unit master screen</strong></p>
                            <ul>
                            <li>Select a unit and then click <strong><strong>Edit</strong></strong>. In the edit screen do required changes and then click <strong><strong>SUBMIT</strong></strong>.</li>
                            <li>To retire a unit, in the Unit Master screen, select the unit you want to retire, and then click</li>
                            <li>Click <strong><strong>Import</strong></strong>to bulk import units from an Excel sheet.</li>
                            <li>Click <img  src='../../image/articel/eln/Download.png' className='w-auto mx-2'/>to export units in the unit master into Excel format to your local storage.</li>
                            </ul>
                            <h3>1.4.1&nbsp;Material Grade Master</h3>
                            <p>Material Grade master is used to add and manage material grade details. These material grades are used to grade materials.</p>
                            <p>To create a new material grade, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='w-auto mx-2'/>and then click <strong><strong>Inventory Parameters</strong></strong>. In the Inventory Parameters screen, go to the <strong><strong>Material Grade</strong></strong>tab<strong><strong>. </strong></strong>The <strong><strong>Material Grade </strong></strong>master screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture136.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Material Grade Master Screen</p>
                            <p>In the Material Grade master screen, you can see the list of material Grades added and options to add, edit and retire material grades appears.</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific material grades.</p>
                            <ol start={59}>
                            <li>Click The <strong><strong>Add Material Grade </strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture137.png' className='my-3 '/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Create Grade Dialog</p>
                            <ol start={60}>
                            <li>In the <strong><strong>Grade </strong></strong>field, type the name for the grade you want to add.</li>
                            <li>In the <strong><strong>Description</strong></strong>field, type description about the grade.</li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>.</li>
                            </ol>
                            <p>You can see the material grade you just added listed in the Material Grade master.</p>
                            <ol start={4}>
                            <li>To edit material grade details, in the Material Grade master screen, select the material grade, and then click <strong><strong>Edit</strong></strong>. In the edit screen, do required changes and then click <strong><strong>SUBMIT</strong></strong>.</li>
                            <li>To retire a material grade, in the Material Grade master screen, select the material grade you want to retire, and then click</li>
                            </ol>
                            <h2>1.5&nbsp;Supplier Master</h2>
                            <p>Supplier master is used to add and manage suppliers.</p>
                            <p>To create a new supplier, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='w-auto mx-2'/>and then click <strong><strong>Inventory Parameters</strong></strong>. In the Inventory Parameters screen, go to the <strong><strong>Supplier</strong></strong>tab<strong><strong>. </strong></strong>The <strong><strong>Supplier </strong></strong>master screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture138.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Supplier Master Screen</p>
                            <p>In the Supplier master screen, you can see the list of suppliers added and options to add, edit and retire suppliers appear.</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific suppliers.</p>
                            <ol start={64}>
                            <li>Click The <strong><strong>Create Supplier </strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture139.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Create Supplier Dialog</p>
                            <ol start={65}>
                            <li>In the <strong><strong>Supplier </strong></strong>field, type the supplier&rsquo;s name.</li>
                            <li>Fill in other fields appropriately.</li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>.</li>
                            </ol>
                            <p>You can see the supplier you just added listed in the Supplier master.</p>
                            <ol>
                            <li>To edit supplier details, in the Supplier master screen, select the supplier, and then click <strong><strong>Edit</strong></strong>. In the edit screen, do required changes and then click <strong><strong>SUBMIT</strong></strong>.</li>
                            <li>To retire a supplier, in the Supplier master screen, select the supplier you want to retire then click</li>
                            </ol>
                            <h2>1.6&nbsp;Manufacturer Master</h2>
                            <p>Manufacturer master is used to add and manage manufacturer details.</p>
                            <p>To create a new manufacturer, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='w-auto mx-2'/>and then click <strong><strong>Inventory Parameters</strong></strong>. In the Inventory Parameters screen, go to the <strong><strong>Manufacturer</strong></strong>tab<strong><strong>. </strong></strong>The <strong><strong>Manufacturer </strong></strong>master screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture140.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Manufacturer Master Screen</p>
                            <p>In the Manufacturer master screen, you can see the list of manufacturers added and options to add, edit and retire manufacturers appears.</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific manufacturers.</p>
                            <ol start={69}>
                            <li>Click <strong><strong>Add</strong></strong>. The <strong><strong>Create Manufacturer </strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture141.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Create Manufacturer Dialog</p>
                            <ol start={70}>
                            <li>In the <strong><strong>Manufacturer </strong></strong> field, type the name of the manufacturer you want to add.</li>
                            <li>In the <strong><strong>Description</strong></strong> field, type description about the manufacturer.</li>
                            <li>Click <strong><strong> SUBMIT</strong></strong>.</li>
                            </ol>
                            <p>You can see the manufacturer you just added listed in the Manufacturer master.</p>
                            <ol>
                            <li>To edit manufacturer details, in the Manufacturer master screen, select the manufacturer, and then click <strong><strong>Edit</strong></strong>. In the <strong><strong>Edit </strong></strong><strong><strong>Manufacturer </strong></strong>screen, do required changes and then click <strong><strong>SUBMIT</strong></strong>.</li>
                            <li>To retire a manufacturer, in the Manufacturer master screen, select the manufacturer you want to retire, and then click</li>
                            </ol>
                            <h2>1.7&nbsp;Section Master</h2>
                            <p>Section master is used to add and manage sections. Sections are used to divide materials based on different departments in the organization.</p>
                            <p>To create a new section, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='mx-2 w-auto'/>and then click <strong><strong>Section </strong></strong>and then click <strong><strong>Inventory Parameters</strong></strong>. In the Inventory Parameters screen, go to the <strong><strong>Manufacturer</strong></strong> The <strong><strong>Section </strong></strong>master screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture142.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Section Master Screen</p>
                            <p>In the Section master screen, you can see the list of sections added and options to add, edit and retire sections appear.</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific sections.</p>
                            <ol start={74}>
                            <li>Click The <strong><strong>Create Section </strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture143.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Create Section Dialog</p>
                            <ol start={75}>
                            <li>In the <strong><strong>Section </strong></strong>field, type the name of the section you want to add.</li>
                            <li>In the <strong><strong>Description</strong></strong>field, type description about the section.</li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>.</li>
                            </ol>
                            <p>You can see the section you just added listed in the Section master.</p>
                            <ul>
                            <li>To edit section details, in the Section master screen, select the section, and then click <strong><strong>Edit</strong></strong>. In the <strong><strong>Edit </strong></strong><strong><strong>Section </strong></strong>dialog, do required changes and then click <strong><strong>SUBMIT</strong></strong>.</li>
                            <li>To retire a section, in the Section master screen, select the section you want to retire then click</li>
                            <li>Click <strong><strong>Import</strong></strong>to bulk import sections from an Excel sheet.</li>
                            <li>Click <img  src='../../image/articel/eln/Download.png' className='mx-2 w-auto'/> to export sections in the section master into Excel format to your local storage.</li>
                            </ul>
                            <h2>1.8&nbsp;Equipment Parameters</h2>
                            <h3>1.8.1&nbsp;Equipment Type</h3>
                            <p>Equipment Types are used to group equipment&rsquo;s based on its type. To add an equipment type, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='mx-2 w-auto'/>and then click <strong><strong>Equipment</strong></strong><strong><strong>&nbsp;Parameters</strong></strong>. The <strong><strong> Equipment</strong></strong><strong><strong>&nbsp;Type</strong></strong>&nbsp;master tab appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture143.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Equipment Type Master</p>
                            <ol start={78}>
                            <li>Click <strong><strong>Add Type</strong></strong>. The <strong><strong> Add Equipment</strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture144.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Equipment Dialog</p>
                            <ol start={79}>
                            <li>In the <strong><strong>Equipment</strong></strong><strong><strong>Type</strong></strong>&nbsp;field, type the equipment type name you want to add. you can add fields to the equipment type you add.</li>
                            <li>In the <strong><strong> Field Name</strong></strong> field, type the field name you want to add.</li>
                            <li>In the <strong><strong> Data Type</strong></strong> field, select data type for the field. The data type can be <strong><strong>Text </strong></strong>/ <strong><strong> Number</strong></strong>&nbsp;/ <strong><strong> Date</strong></strong>&nbsp;/ <strong><strong> Combo box</strong></strong>. For Combo box, in the <strong><strong> Enter Combo Box Value</strong></strong>&nbsp;dialog, type the values for combo box separated by comma.</li>
                            <li>Click <strong><strong>ADD</strong></strong> .The field is added to the list. You can add multiple fields to the equipment type.
                            <ul>
                            <li>To edit a field, click <strong><strong>EDIT</strong></strong> .The field appears in the <strong><strong> Field Name</strong></strong>. Edit field name and data type and then click <strong><strong> UPDATE</strong></strong>.</li>
                            <li>To delete a field, select a field from the list and then click <strong><strong> DELETE</strong></strong>.</li>
                            </ul>
                            </li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>. The equipment type is added to the equipment type master.</li>
                            </ol>
                            <h3>1.8.1.1&nbsp;Edit Equipment Type</h3>
                            <ol>
                            <li>To edit equipment type, on the Equipment Type master screen, select a equipment type and then click <strong><strong>Edit Type</strong></strong>. The <strong><strong>Edit Equipment</strong></strong>dialog appears.</li>
                            <li>You cannot edit Equipment Type name. You can add or edit fields and then click <strong><strong>SUBMIT</strong></strong>. &nbsp;</li>
                            </ol>
                            <h3>1.8.2&nbsp;Equipment Category Master</h3>
                            <p>Equipment Category master is used to add and manage equipment categories. Equipment category is used in various forms and master&rsquo;s to group equipment&rsquo;s.</p>
                            <p>To create a new equipment category, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='mx-2 w-auto'/>and then click <strong><strong>Equipment Parameters</strong></strong>. In the Equipment Parameters screen, go to the <strong><strong> Equipment Category</strong></strong> The <strong><strong>Equipment Category</strong></strong>&nbsp;tab appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture145.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>&nbsp;FIGURE: Equipment Category Tab</p>
                            <p>In the Equipment Category tab, you can see the list of equipment categories added and options to add, edit and retire equipment categories appears.</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp; field will appear. Hence, administrator user can create site specific equipment categories.</p>
                            <ol start={84}>
                            <li>Click The <strong><strong>Create Equipment Category </strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture146.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Create Equipment Category Dialog</p>
                            <ol start={85}>
                            <li>In the <strong><strong>Equipment Type</strong></strong>field, select equipment type.</li>
                            <li>In the <strong><strong>Equipment Category </strong></strong>field, type the name of the equipment category you want to add.</li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>.</li>
                            </ol>
                            <p>You can see the equipment category you just added listed in the Equipment Category master.</p>
                            <ul>
                            <li>To edit equipment category details, in the Equipment Category master screen, select the equipment category, and then click <strong><strong>Edit</strong></strong>. In the edit screen, do required changes and then click <strong><strong>SUBMIT</strong></strong>.</li>
                            <li>To retire an equipment category, in the Equipment Category master screen, select the equipment category you want to retire then click</li>
                            </ul>
                            <h2>1.9&nbsp;Equipment Master</h2>
                            <p>Equipment Master is used to add and manage equipment&rsquo;s.</p>
                            <p>To add an equipment, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='mx-2 w-auto'/>and then click <strong><strong> Equipment Master</strong></strong>. The <strong><strong>Equipment Master</strong></strong>&nbsp; tab appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture147.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Equipment Master Screen</p>
                            <p>You can see the list of equipment&rsquo;s added. Details such as last calibrated date, calibration status, last maintained date, maintenance status and status of the equipment appear.</p>
                            <p>By default, all material types and categories added for the last one week from all storage locations appear. You can see the status of the materials in different colors.</p>
                            <ol start={88}>
                            <li>You can choose filter <img  src='../../image/articel/eln/filter.png' className='mx-2 w-auto'/>   options to search for equipment added. Click. The filter appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture148.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Selecting Date Range, Equipment Type and Category to Search Equipment&rsquo;s</p>
                            <ol start={6}>
                            <li>Select <strong><strong>From </strong></strong>and <strong><strong>to</strong></strong>dates, <strong><strong>Equipment Type, Equipment Category </strong></strong>and then click <strong><strong>Filter</strong></strong>. Equipment is fetched for the selected filter options.</li>
                            </ol>
                            <p>&nbsp;</p>
                            <ol start={89}>
                            <li>Click <strong><strong>Add</strong></strong>. The <strong><strong>Add Equipment</strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture149.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Equipment Dialog</p>
                            <ol start={90}>
                            <li>Select <strong><strong>Equipment Type</strong></strong>and <strong><strong>Equipment Category</strong></strong>&nbsp;to add the equipment.</li>
                            <li>In the <strong><strong>Equipment</strong></strong>field, type the name of equipment you want to add.</li>
                            <li>Fill in the <strong><strong>Equipment Make</strong></strong>, <strong><strong>Equipment Model</strong></strong>and <strong><strong>Equipment Lot/No</strong></strong></li>
                            <li>Click to check the <strong><strong>Required Calibration</strong></strong> The <strong><strong> Calibration Time Period</strong></strong>field appears. For example, select number and the period: Select <strong><strong>2</strong></strong>&nbsp;and <strong><strong>Week</strong></strong>. &nbsp;Then the equipment must be calibrated in 2 weeks.</li>
                            <li>Click to check the <strong><strong>Required Maintenance</strong></strong> The <strong><strong> Maintenance Time Period</strong></strong> field appears. For example, select number and the period: Select <strong><strong>3</strong></strong>&nbsp;and <strong><strong>Month</strong></strong>. Then maintenance must be done for the equipment once in three months.</li>
                            <li>In the <strong><strong>Remarks</strong></strong> field, type your remarks.</li>
                            <li>Click <strong><strong>SHOW DYNAMIC FIELDS</strong></strong> The dynamic fields added appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture150.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Filling Dynamic Fields</p>
                            <ol start={97}>
                            <li>Fill in the dynamic field. And then click <strong><strong>SUBMI</strong></strong></li>
                            </ol>
                            <p>The equipment is added to the master.</p>
                            <ul>
                            <li>Select an equipment from the list and then click <strong><strong> Edit</strong></strong>. In the <strong><strong> Edit Equipment</strong></strong>dialog, do required edits and then click <strong><strong> SUBMIT</strong></strong>.</li>
                            <li>To activate or deactivate an equipment, select an equipment from the list and then click <strong><strong>Activate/Deactivate. </strong></strong>You cannot retire deactivated equipment.</li>
                            <li>To retire an equipment, select an equipment from the list and then click <strong><strong> Retire</strong></strong>.</li>
                            <li>To calibrate an equipment, select the equipment from the list and then click <strong><strong> Calibrate</strong></strong>.</li>
                            <li>To perform maintenance to an equipment, select an equipment from the list and then click <strong><strong> Perform Maintenance</strong></strong>.</li>
                            <li>Click <img  src='../../image/articel/eln/eye2.png' className='mx-2 w-auto'/> to view usage history, calibration history and maintenance history of the equipment.</li>
                            </ul>
                         
                            <h2>1.10&nbsp;Logbook</h2>
                            <p>Logbook is a record used to record states, events, and tasks or work applicable to Logilab ELN.</p>
                            <p>ELN enables you to design your own logbook and record events.</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>Site</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific logbooks.</p>
                            <p>To create a new logbook, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img  src='../../image/articel/eln/Logbook.png' className='mx-2 w-auto'/> <strong><strong></strong></strong>The <strong><strong>Logbook </strong></strong>screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture151.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Logbook Screen</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong> Site Master</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific projects.</p>
                            <ol start={98}>
                            <li>Click <strong><strong>Add Logbook</strong></strong>. The <strong><strong> Add Logbook</strong></strong> dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture152.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Logbook Dialog</p>
                            <ol start={99}>
                            <li>In the <strong><strong>Name</strong></strong> field, type the name for the logbook.</li>
                            <li>In the <strong><strong>Category</strong></strong> field, type category of the logbook.</li>
                            </ol>
                            <p>You can see the list of general fields on the right side. In addition, you can add your own fields under <strong><strong> User Defined Fields</strong></strong>.</p>
                            <ol start={101}>
                            <li>Under <strong><strong>User Defined Fields</strong></strong>, in the <strong><strong> Field Name</strong></strong> field, type the field name you want to add.</li>
                            <li>In the <strong><strong>Data Type</strong></strong> field, select a data type for the field:</li>
                            </ol>
                            <ul>
                            <li>All Characters: Allows text and number.</li>
                            <li>Text: Allows text values.</li>
                            <li>Number: Allows numeric values.</li>
                            <li>Date: Allows select date</li>
                            <li>Combo box: Allows select value from the given values separated by comma</li>
                            </ul>
                            <ol start={103}>
                            <li>Click <strong><strong>ADD</strong></strong>. The field is added as shown in the above figure.</li>
                            <li>Click <strong><strong>SAVE</strong></strong>. The logbook is created and appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture153.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Logbook Created</p>
                            <p>Once you create a logbook, you can add log/records to the logbook. To do so, follow these steps:</p>
                            <ol>
                            <li>On the Logbook screen, select the logbook and then click <strong><strong>OPEN</strong></strong>as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture154.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Opening Logbook</p>
                            <p>The Logbook screen opens, and you can see the <strong><strong>ADD</strong></strong><strong><strong>&nbsp;</strong></strong>and <strong><strong>Edit</strong></strong>&nbsp;options appear as shown in the figure:</p>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture155.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Opened Logbook</p>
                            <p>By default, the <strong><strong>Edit</strong></strong>&nbsp;option is disabled. When you select a logbook record, the <strong><strong> Edit</strong></strong>&nbsp;option is &nbsp;enabled.</p>
                            <ol start={105}>
                            <li>Select a logbook record and then click <strong><strong>Edit</strong></strong>to update details.</li>
                            <li>Click <strong><strong>ADD</strong></strong>to add a log. The <strong><strong>ADD</strong></strong>&nbsp; dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture156.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: ADD Log Dialog</p>
                            <ol start={107}>
                            <li>You can see the user defined fields appear. Fill in the fields.</li>
                            <li>Click <strong>ADD RESOURCE</strong>to add resource if required. The <strong>Use Inventory</strong>&nbsp ;dialog appears. Select the Material<strong>&nbsp;Type</strong>, <strong> Material Category</strong>. and <strong>Material</strong>. The <strong>Use Inventory</strong>&nbsp;dialog appears as shown in the figure:</li>
                            </ol>
                           <ol/> 
                           <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture157.png' className='my-3'/>  
                            </div>
                           <p className='figure mt-1'>FIGURE: Use Inventory Dialog</p>
                           <p>If the inventory is available and issued, then the details appear as shown in the above figure. You can use material from the <strong><strong> Issued Quantity</strong></strong>.</p>
                           <ol start={108}>
                           <li>In the <strong><strong>Quantity</strong></strong> field, type quantity of material required and then click <strong><strong>ADD</strong></strong>.</li>
                           <li>Click <strong><strong>SAVE</strong></strong>. The log is added to the logbook and appears in the grid.</li>
                           </ol>
                           <p>&nbsp;</p>
                           <h3>1.1.1&nbsp;Reviewing Logbook</h3>
                           <p>You can review the logbook as shown in the figure:</p>
                             <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture158.png' className='my-3 w-100'/>  
                            </div>
                           <p className='figure mt-1'>FIGURE: Reviewing Logbook</p>
                           <ol start={109}>
                           <li>Select the logbook to review and click <strong><strong>Review</strong></strong> as shown in the above figure:</li>
                           <li>In the Audit Trail dialog, type your password, comments and then click <strong><strong>Submit</strong></strong>. The <strong><strong> Review Status</strong></strong> of the logbook changes to <strong><strong> Review</strong></strong>&nbsp ;as shown in the figure:</li>
                           </ol>
                           <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture159.png' className='my-3 w-100'/>  
                            </div>
                           <p className='figure mt-1'>FIGURE: Reviewed Logbook</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../inventory">Inventory</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../instrumentsetup">Instrument Setup</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
              <Help/>
        </div>
    );
}
export default Materialinventory;
