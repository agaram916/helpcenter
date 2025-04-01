'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const Inventory = () => {
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
                    <h1><strong>Logilab ELN Lite - Inventory</strong></h1>
                    <h2>1.1 Material Master</h2>
                  <p>Material master is used to add and manage materials.</p>
                    <p>On the Main menu, click <img  src='../../image/articel/eln/Inventory.png' className='mx-2 w-auto'/>and then click <b>Material Master.</b> The <b>Material Master</b> screen appears as shown in the figure:</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite100.png' className='my-3 w-100'/>  
                    </div>
                    <p>The list of pre-configured Material records are displayed.</p>
                    <p>To add a new materials, Click on &lsquo;<strong>Material Master</strong>&rsquo; submenu and click on &lsquo;<strong>Add</strong>&rsquo; button on Material Master page.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite101.png' className='my-3 w-100'/>  
                    </div>
                    <p>&lsquo;<strong>Add Material</strong>&rsquo; dialog window appears.</p>
                    <p>Enter or select valid values in <strong>Material Type, Unit, Material Category, Section, Material Name, Quarantine</strong> (Yes or No) and <strong>Remarks</strong>.</p>               
                    <p>Click on <strong>SUBMIT</strong> button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite102.png' className='my-3 w-100'/>  
                    </div>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite103.png' className='my-3 w-100'/>  
                    </div>
                    <p>The newly-added material gets listed on Material Master page.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite104.png' className='my-3 w-100'/>  
                    </div>
                    <p>To edit, an existing material record, select the same and click on &lsquo;<strong>Edit</strong>&rsquo; button.</p>
                    <p>On &lsquo;<strong>Edit Material</strong>&rsquo; dialog window, modify the values in the fields and click on <strong>SUBMIT </strong>button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite105.png' className='my-3 w-100'/>  
                    </div>
                    <h2>1.2&nbsp;&nbsp; Material Inventory</h2>
                    <p>Once the material is added to the Material master, you must add the material to the inventory. And then issue the material to use the material in transactions.</p>
                    <p>To add a material to the inventory, follow these steps:</p>
                    <p>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='mx-2 w-auto'/> and then click <strong><em>Material Inventory. </em></strong>The <strong><em>Material Inventory </em></strong>screen appears.</p>
                    <p>The list of pre-configured Material Inventory records is displayed.</p>
                    <p>To add a new material inventory, click on &lsquo;<strong>Add</strong>&rsquo; button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite106.png' className='my-3 w-100'/>  
                    </div>
                    <p>&lsquo;<strong>Add Inventory</strong>&rsquo; dialog window appears.</p>
                    <p>Enter or select valid values in the fields such as <strong>Material Type, Material Category, Material Name, Quantity, Unit, Batch/Lot No. and Re-Order Level</strong>.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite107.png' className='my-3 w-100'/>  
                    </div>
                    <p>After entering the values click on &lsquo;<strong>NEXT</strong>&rsquo; button.</p>                 
                    <p>In the 2<sup>nd</sup> part of &lsquo;Add Inventory&rsquo; dialog window, select/enter the values for <strong>Section, Date of Manufacturing, Date of Receipt and Remarks</strong>.</p>
                    <p>Click <strong>SUBMIT</strong> button.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite108.png' className='my-3 w-100'/>  
                    </div>
                    <p>The newly-added inventory record gets saved and listed on Material Inventory page.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite109.png' className='my-3 w-100'/>  
                    </div>
                    <h2>1.3&nbsp;&nbsp; Inventory Parameters</h2>
                    <p><strong><u>Material Type</u></strong></p>
                    <p>Material Type master consists of Pre-configured material types defined. You can select a material type and add fields.</p>
                    <p>To add fields to the material type, follow these steps:</p>
                    <p>On the main menu, click <img  src='../../image/articel/eln/Inventory.png' className='mx-2  w-auto'/>and then click <strong>Inventory Parameters</strong> submenu followed by Material Type subtab. The Material Type master screen appears as shown in the figure:</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite110.png' className='my-3 w-100'/>  
                    </div>
                    <p>You can see four predefined material type. Select a material type to add fields. The Add Field option is enabled.</p>
                    <p>Click Add Type button<strong><em>.</em></strong> The Add Type dialog appears as shown in the figure:</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite111.png' className='my-3 w-100'/>  
                    </div>
                    <p>On the left side you can see list of static fields added to the material type. To add a dynamic field, follow these steps:</p>
                    <ol>
                    <li>In the <b>Field Name</b> type the field name you want to add.</li>
                    <li>In the<b>Data Type</b>  field, select data type for the field.</li>
                    <li>Click <b>ADD.</b> The field is added to the list on the right side.</li>
                    </ol>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite112.png' className='my-3 w-100'/>  
                    </div>
                    <p><strong><u>Material Category</u></strong></p>
                    <p>Material Category master is used to add and manage material categories. Material category is used in various forms and masters to group materials.</p>
                    <p>To create a new material category, follow these steps:</p>
                    <p>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='mx-2 w-auto'/>and then click <strong>Inventory Parameters</strong> submenu followed by <strong>Material Category </strong>subtab. The <strong>Material Category </strong>master screen appears as shown in the figure.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite113.png' className='my-3 w-100'/>  
                    </div>
                    <p>Click on &lsquo;<strong>Add</strong>&rsquo; button.</p>
                    <p>&lsquo;<strong>Create Material Category</strong>&rsquo; dialog window appears.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite114.png' className='my-3 w-100'/>  
                    </div>
                    <p>Enter valid values in <strong>Material Category</strong> field after selecting appropriate Material Type.</p>
                    <p>Enter description in <strong>Description </strong>field.</p>                  
                    <p>Click on <strong>SUBMIT</strong> button.</p>
                    <p>&nbsp;</p>
                    <p><strong><u>Unit Master</u></strong></p>
                    <p>Unit master is used to create and manage units that are used to measure samples/material etc.</p>
                    <p>On the main menu, click<img src='../../image/articel/eln/Inventory.png' className='mx-2 w-auto'/> and then click <strong>Inventory Parameters</strong> submenu followed by <strong>Unit Master </strong>subtab. The <strong>Unit Master</strong> screen appears as shown in the figure.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite115.png' className='my-3 w-100'/>  
                    </div>
                    <p>Click on &lsquo;<strong>Add</strong>&rsquo; button.</p>
                    <p>&lsquo;<strong>Create Unit</strong>&rsquo; dialog window appears.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite116.png' className='my-3 w-100'/>  
                    </div>
                    <p>Enter valid values in <strong>Unit</strong> and <strong>Description fields</strong>.</p>
                    <p>Click <strong>SUBMIT</strong> button.</p>
                    <p>By clicking <strong>Edit</strong> button, the existing records can be edited.</p>
                    <p>By clicking <strong>Retire</strong> button, the existing records can be retired.</p>
                    <p>By clicking <strong>Import</strong> button, the data from the local system file can be imported.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite117.png' className='my-3 w-100'/>  
                    </div>
                    <p>By clicking Export icon, the data can be exported in Excel, PDF and CSV format files to the local system.</p>
               
                    <p><strong><u>Section Master</u></strong></p>
                    <p>Section master is used to add and manage sections. Sections are used to divide materials based on different department in the organization.</p>
                    <p>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='mx-2 w-auto'/>and then click <strong>Inventory Parameters</strong> submenu followed by <strong>Section</strong> <strong>Master </strong>subtab. The <strong>Section Master</strong> screen appears as shown in the figure.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite118.png' className='my-3 w-100'/>  
                    </div>
                    <p>Click on &lsquo;<strong>Add</strong>&rsquo; button.</p>
                    <p>&lsquo;<strong>Create Section</strong>&rsquo; dialog window appears.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite119.png' className='my-3 w-100'/>  
                    </div>
                    <p>Enter valid values in <strong>Section</strong> and <strong>Description</strong> fields.</p>
                    <p>Click <strong>SUBMIT</strong> button.</p>
                    <p>The newly-created section gets listed in Section Master page with confirmation message.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite120.png' className='my-3 w-100'/>  
                    </div>
                    <p>By clicking <strong>Edit</strong> button, the existing records can be edited.</p>
                    <p>By clicking <strong>Retire</strong> button, the existing records can be retired.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite121.png' className='my-3 w-100'/>  
                    </div>
                    <p>By clicking <strong>Import</strong> button, the data from the local system file can be imported.</p>
                    <p>By clicking Export icon, the data can be exported in Excel, PDF and CSV format files to the local system.</p>
                    <div className='inner-image'>
                       <img  src='../../image/articel/elnlite/elnlite121.png' className='my-3 w-100'/>  
                    </div>
                </section>                   
                </div>
                <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../getting-started">Getting Started</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../tasks'>Task Master</Link>
                        </div>
                    </div>
                    </div>                    
                </div>
             </div>
            <Help/>
        </div>
    );
}
export default Inventory; 