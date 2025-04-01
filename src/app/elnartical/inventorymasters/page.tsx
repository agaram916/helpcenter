'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const InventoryMasters = () => {
    const [showButton, setShowButton] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

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
                    <h1>Logilab ELN – How to configure Inventory Masters</h1>
                    <section className='articel-content'>
                        <h2>1&nbsp;Material Type</h2>
                        <p>Material Type master consists of four material types defined. You can select a material type and add fields.</p>
                        <p>To add fields to the material type, follow these steps:</p>                       
                            <p> 1.On the main menu, clickand then click <strong><em><strong>Material Type</strong></em></strong>. The <strong><em><strong>Material Type</strong></em></strong>&nbsp;master screen appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture37.png'  className=''/>
                            </h4>                    
                            <p>2.You can see four predefined material type. Select a material type to add fields. The <strong><em><strong>Add Field</strong></em></strong>option is enabled.</p>
                            <p> 3.Click <strong><em><strong>Add Field</strong></em></strong>. The <strong><em><strong>Add Repository</strong></em></strong>dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture38.png'className=' m-0 p-0' />
                            </h4>
                      
                        <p className='text-center'>FIGURE: Add Repository Dialog</p>
                        <p>On the left side you can see list of static fields added to the material type. To add a dynamic field, follow these steps:</p>
                        
                            <p>4.In the <strong><em><strong>Field Name</strong></em></strong>type the field name you want to add.</p>
                            <p>5.In the <strong><em><strong>Data Type</strong></em></strong>field, select data type for the field.</p>
                            <p>6.Click to turn on the <strong><em><strong>Mandatory</strong></em></strong> If this option is turned on, in the forms, when you select this material type, this field (For Example: Expiry Date field in the figure) becomes mandatory.</p>
                            <p>7.Click <strong><em><strong>ADD</strong></em></strong>. The field is added to the list on the right side.</p>
                   
                        <h2>2 Unit Master</h2>
                        <p>Unit master is used to create and manage units that are used to measure samples/material etc.</p>
                        <h2>Creating a New Unit</h2>
                        <p>To create a new unit, follow these steps:</p>
                       <p>On the main menu, clickand then click <strong><em><strong>Unit Master</strong></em></strong>. The <strong><em><strong>Unit Master</strong></em></strong>&nbsp;screen appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture39.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center'>FIGURE: Unit Master</p>
                        <p>1.In the Unit Master screen you can see the list of units added and options to add, edit and retire units appears.</p>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;For administrators the </em></em><strong><strong>Active</strong></strong><strong><strong>Site</strong></strong><em><em>&nbsp;field will appear. Hence, administrator user can create site specific units.</em></em></p>
                        
                            <p>2.Click <strong><strong>Add</strong></strong>. The <strong><em><strong>Add </strong></em></strong>screen appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture40.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>FIGURE: Create Unit Screen</p>                       
                            <p>3.In the <strong><em><strong>Unit </strong></em></strong>field, type the name for the unit you want to add.</p>
                            <p>4.In the <strong><em><strong>Description</strong></em></strong>field, type description for the unit.</p>
                            <p>5.Click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                       
                        <p className='figure '>You can see the unit you created listed in the unit master.</p>
                        <h3>Editing and Retiring Units</h3>
                        <p>To edit unit, follow these steps:</p>
                            <p>1.Select a unit and then click <strong><em><strong>Edit</strong></em></strong>. In the <strong><em><strong>Edit Unit </strong></em></strong>screen do required changes and then click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                            <li>2.To retire a unit, in the Unit Master screen, select unit you want to retire, and then click</li>
                        <h2>3 Material Grade Master</h2>
                        <p>Material Grade master is used to add and manage material grade details. These material grades are used to grade materials.</p>
                        <h3>Adding a New Material Grade</h3>
                        <p>To create a new material grade, follow these steps:</p>
                            <p>1.On the main menu, clickand then click <strong><em><strong>Material Grade. </strong></em></strong>The&nbsp;<strong><em><strong>Material Grade </strong></em></strong>&nbsp;master screen appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture41.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>&nbsp;FIGURE: Material Grade Master Screen</p>
                        
                        <p>In the Material Grade master screen you can see the list of material Grades added and options to add, edit and retire material grades appears.</p>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;For administrators the </em></em><strong><strong>Active</strong></strong><strong><strong>Site</strong></strong><em><em>&nbsp;field will appear. Hence, administrator user can create site specific material grades.</em></em></p>
                            <p>2.Click <strong><em><strong>Add</strong></em></strong>The <strong><em><strong>Add Material Grade </strong></em></strong>dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture42.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center'>FIGURE: Add Material Grade Dialog</p>
                        
                    
                            <p>3.In the <strong><em><strong>Material Grade </strong></em></strong>field, type name for the grade you want to add.</p>
                            <p>4.In the<strong><em><strong>Description</strong></em></strong>&nbsp;field, type description about the grade.</p>
                            <p>5.Click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                     
                        <p>You can see the material grade you just added listed in the Material Grade master.</p>
                        <h3>Editing and Retiring Material Grade&nbsp;</h3>
                            <p>1.To edit material grade details, in the Material Grade master screen, select the material grade, and then click <strong><em><strong>Edit</strong></em></strong>. In the <strong><em><strong>Edit </strong></em></strong>material grade screen, do required changes and then click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                            <p>2.To retire a material grade, in the Material Grade master screen, select the material grade you want to retire, and then click</p>
                        <h2>4 Supplier Master</h2>
                        <p>Supplier master is used to add and manage suppliers.</p>
                        <h2>Adding a New Supplier</h2>
                        <p>To create a new supplier, follow these steps:</p>
                    
                            <p>1.On the main menu, clickand then click The&nbsp;<strong><em><strong>Supplier </strong></em></strong>&nbsp;master screen appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture43.png' className=' m-0 p-0'/>
                            </h4>
                            <p className='text-center figure'>&nbsp;FIGURE: Supplier Master Screen</p>
                    
                            <p>In the Supplier master screen you can see the list of supplier added and options to add, edit and retire supplier categories appears. You can also attach files for the supplier.</p>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;For administrators the </em></em><strong><strong>Active</strong></strong><strong><strong>Site</strong></strong><em><em>&nbsp;field will appear. Hence, administrator user can create site specific suppliers.</em></em></p>
                    
                            <p>2.Click <strong><em><strong>Add</strong></em></strong>The <strong><em><strong>Create Supplier </strong></em></strong>dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture44.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center'>FIGURE: Create Supplier Dialog</p>
                      
                        
                            <p>3.In the <strong><em><strong>Supplier </strong></em></strong>field, type the supplier name.</p>
                            <p>4.Fill in other fields appropriately.</p>
                            <p>5.lick <strong><em><strong>Submit</strong></em></strong>.</p>
                      
                        <p>You can see the supplier you just added listed in the Supplier master.</p>
                        <h2>Editing and Retiring Supplier&nbsp;</h2>
                       
                            <p>1.To edit supplier details, in the Supplier master screen, select the supplier, and then click <strong><em><strong>Edit</strong></em></strong>. In the <strong><em><strong>Edit </strong></em></strong>screen, do required changes and then click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                            <p>2.To retire a supplier, in the Supplier master screen, select the supplier you want to retire then click</p>
                       
                        <h2>5 Manufacturer Master</h2>
                        <p>Manufacturer master is used to add and manage manufacturer details.</p>
                        <h2>Adding a New Manufacturer</h2>
                        <p>To create a new manufacturer, follow these steps:</p>
                    
                            <p>1.n the main menu, clickand then click The&nbsp;<strong><em><strong>Manufacturer </strong></em></strong>&nbsp;master screen appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture45.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center'>&nbsp;FIGURE: Manufacturer Master Screen</p>
              
                        
                        <p>In the Manufacturer master screen you can see the list of manufacturers added and options to add, edit and retire manufacturers appears.</p>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;For administrators the </em></em><strong><strong>Active</strong></strong><strong><strong>Site</strong></strong><em><em>&nbsp;field will appear. Hence, administrator user can create site specific manufacturers.</em></em></p>
                      
                            <p>2.Click <strong><em><strong>Add</strong></em></strong>The <strong><em><strong>Create Manufacturer </strong></em></strong>dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture46.png'  className=' m-0 p-0'/>
                            </h4>
                            <p className='text-center '>FIGURE: Create Manufacturer Dialog</p>
        
                      <p>3.In the <strong><em><strong>Manufacturer </strong></em></strong>field, type name of the manufacturer you want to add.</p>
                            <p>4.In the<strong><em><strong>Description</strong></em></strong>&nbsp;field, type description about the manufacturer.</p>
                            <p>5.Click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                        <p>You can see the manufacturer you just added listed in the Manufacturer master.</p>
                        <h3>Editing and Retiring Manufacturer&nbsp;</h3>
                            <p>1.To edit manufacturer details, in the Manufacturer master screen, select the manufacturer, and then click <strong><em><strong>Edit</strong></em></strong>. In the <strong><em><strong>Edit </strong></em></strong><strong><em><strong>Manufacturer</strong></em></strong>screen, do required changes and then click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                            <p>2.To retire a manufacturer, in the Manufacturer master screen, select the manufacturer you want to retire, and then click</p>          
                        <h2>6 Section Master</h2>
                        <p>Section master is used to add and manage sections. Sections are used to divide materials based on different department in the organization.</p>
                        <h2>Adding a New Section</h2>
                        <p>To create a new section, follow these steps:</p>
                     
                            <p>1.On the main menu, clickand then click The&nbsp;<strong><em><strong>Section </strong></em></strong>&nbsp;master screen appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture47.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center'>&nbsp;FIGURE: Section Master Screen</p>
                       
                       
                        <p>In the Section master screen you can see the list of sections added and options to add, edit and retire sections appears.</p>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;For administrators the </em></em><strong><strong>Active</strong></strong><strong><strong>Site</strong></strong><em><em>&nbsp;field will appear. Hence, administrator user can create site specific sections.</em></em></p>
                              <p>2.Click <strong><em><strong>Add</strong></em></strong>The <strong><em><strong>Create Section </strong></em></strong>dialog appears as shown in the figure:</p>
                             <h4 className='inner-image'>
                                <img src='../../image/articel/Picture48.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>FIGURE: Create Section Dialog</p>                   
                            <p>3.In the <strong><em><strong>Section </strong></em></strong>field, type name of the section you want to add.</p>
                            <p>4.In the<strong><em><strong>Description</strong></em></strong>&nbsp;field, type description about the section.</p>
                            <p>5.lick <strong><em><strong>SUBMIT</strong></em></strong>.</p>                       
                        <p>You can see the section you just added listed in the Section master.</p>
                        <h3>Editing and Retiring Section&nbsp;</h3>                    
                            <p>1.To edit section details, in the Section master screen, select the section, and then click <strong><em><strong>Edit</strong></em></strong>. In the <strong><em><strong>Edit </strong></em></strong><strong><em><strong>Section</strong></em></strong>dialog, do required changes and then click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                           <p>2.To retire a section, in the Section master screen, select the section you want to retire then click</p>                      
                        <h2>&nbsp;7 Storage location Master</h2>
                        <p>Storage Location master is used to create and manage storage structures that are used to store samples.</p>
                        <h2>Adding a New Storage location</h2>
                        <p>To create a new storage location, follow these steps:</p>
                            <p>1.n the main menu, clickand then click <strong><em><strong>Storage Location. </strong></em></strong>The&nbsp;<strong><em><strong>Storage Location </strong></em></strong>&nbsp;master screen appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture49.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>&nbsp;FIGURE: Storage Location Master Screen</p>                        
                        <p>In the Storage Location master screen you can see the list of storage locations added and options to add, edit and retire storage locations appears.</p>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;For administrators the </em></em><strong><strong>Active</strong></strong><strong><strong>Site</strong></strong><em><em>&nbsp;field will appear. Hence, administrator user can create site specific storage locations.</em></em></p>
                        
                            <p>2.lick <strong><em><strong>Add</strong></em></strong>The <strong><em><strong>Add </strong></em></strong>dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture50.png'  className=' m-0 p-0'/>
                            </h4>
                            <p className='text-center figure'>FIGURE: Create Storage Location Dialog</p>                            <p>3.In the <strong><em><strong>Sample </strong></em></strong><strong><em><strong>Storage location Name </strong></em></strong>field, type name of the storage location you want to add.</p>
                            <p>4.In the <strong><em><strong>Sample Storage Location</strong></em></strong>field, clickto add a parallel node. Clickto add a child node. Click&nbsp;and type the name for the node.</p>
                            <p>5.Using the above options design the storage structure.</p>
                            <p>6.Click <strong><em><strong>SAVE</strong></em></strong>.</p>                     
                        <p>You can see the storage location you just added listed in the Storage Location master.</p>
                        <h3>i.&nbsp;Editing and Retiring Storage location</h3>
                         <p>1.To edit storage location details, in the Storage location master screen, select the storage location, and then click <strong><em><strong>Edit</strong></em></strong>. In the <strong><em><strong>Edit </strong></em></strong>screen, do required changes and then click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                            <p>2.To retire a storage location, in the Storage location master screen, select the storage location you want to retire then click</p>
                        <h2>8 Material Category Master</h2>
                        <p>Material Category master is used to add and manage material categories. Material category is used in various forms and masters to group materials.</p>
                        <h3>Adding a New Material Category</h3>
                        <p>To create a new material category, follow these steps:</p>
                      
                            <p>1.On the main menu, clickand then click <strong><em><strong>Material Category. </strong></em></strong>The&nbsp;<strong><em><strong>Material Category </strong></em></strong>&nbsp;master screen appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture51.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>&nbsp;FIGURE: Material Category Master Screen</p>                      
                        <p>In the Material Category master screen you can see the list of material categories added and options to add, edit and retire material categories appears.</p>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;For administrators the </em></em><strong><strong>Active</strong></strong><strong><strong>Site</strong></strong><em><em>&nbsp;field will appear. Hence, administrator user can create site specific material categories.</em></em></p>
                     
                            <p>2.lick <strong><em><strong>Add</strong></em></strong>The <strong><em><strong>Create Material Category </strong></em></strong>dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture52.png'  className=' m-0 p-0'/>
                            </h4>
                            <p className='text-center figure'>FIGURE: Create Material category Dialog</p>                       
                            <p>3.In the <strong><em><strong>Material Type</strong></em></strong>field, select material type.</p>
                            <p>4.In the <strong><em><strong>Material Category </strong></em></strong>field, type name of the material category you want to add.</p>
                            <p>5.Click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                       
                        <p>You can see the material category you just added listed in the Material Category master.</p>
                        <h3>Editing and Retiring Material Category</h3>
                        
                            <p>1.To edit material category details, in the Material Category master screen, select the material category, and then click <strong><em><strong>Edit</strong></em></strong>. In the <strong><em><strong>Edit </strong></em></strong>screen, do required changes and then click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                            <p>2.o retire a material category, in the Material Category master screen, select the material category you want to retire then click</p>
                       
                        <h2>9 Material Master</h2>
                        <p>Material master is used to add and manage materials. You can also import materials from Excel.</p>
                      
                            <p>1.On the main menu, clickand then click The&nbsp;<strong><em><strong>Material </strong></em></strong>master screen appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture53.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>&nbsp;FIGURE: Material Master Screen</p>                     
                        <p>In the Material master screen you can see the list of materials added and options to add, edit and retire material categories appears. You can also attach files for the material.</p>
                        <h4 className='text-left'>1.&nbsp;Filtering Material added on a Specific Period</h4>
                        <p>Select date and time from <strong><em><strong>Filter From</strong></em></strong>&nbsp;and <strong><em><strong>Filter To</strong></em></strong>&nbsp;fields and then click <strong><em><strong>Filter</strong></em></strong>&nbsp;to fetch materials added on a specific period as shown in the figure:</p>
                        <p>FIGURE: Filtering Material Added on a Specific Period</p>
                        <h4 className='text-left'>2.&nbsp;Import Material Data from Excel</h4>
                        <p>Logilab ELN enables you import material data from Excel. To do so, follow these steps:</p>
                        
                            <p>1.On the Material master screen, click <strong><em><strong>Import</strong></em></strong>. The <strong><em><strong>Import Data</strong></em></strong>dialog appears.</p>
                            <p>2.Click <strong><em><strong>Choose File</strong></em></strong>, locate the Excel file and then click <strong><em><strong>Open</strong></em></strong>. If the fields in the Excel file matches fields in the Material master, the data is loaded and appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                               <img src='../../image/articel/Picture54.png'className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>FIGURE: Importing Material Data - Matching Field Names</p>                    
                            <p>plick <strong><em><strong>SAVE</strong></em></strong>. Data is loaded to the material master.</p>
                       
                        <p>If the fields in the Excel file does not match the fields in the Material master, the a <strong><em><strong>Import Data</strong></em></strong>&nbsp;dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture55.png' className='' />
                            </h4>   
                        <p className='text-center'>FIGURE: Importing Material Data - Different Field Names</p>   
                         <h4 className='inner-image'>
                                <img src='image/articel/Picture56.png'  className=''/>
                            </h4>
                            <p>4.Under <strong><em><strong>Default Columns,</strong></em></strong>fields from the material master are listed. Under <strong><em><strong>Imported Columns,</strong></em></strong>&nbsp;fields from the Excel file are listed. You must map fields from the Excel sheet to fields in the material master. You must map fields at least for the mandatory fields.</p>
                            <p>5.lick <strong><em><strong>SAVE</strong></em></strong>. Data is loaded to the material master as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture57.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'> FIGURE: Data Imported from Excel</p>
                          
                        <p>ELN allows import duplicate values to the Material master.</p>
                        <h2>Adding a New Material</h2>
                        <p>To add material, follow these steps:</p>
                     
                            <p>1.On the main menu, clickand then click The&nbsp;<strong><em><strong>Material </strong></em></strong>master screen appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture58.png'className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>&nbsp;FIGURE: Material Master Screen</p>                       
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;For administrators the </em></em><strong><strong>Active</strong></strong><strong><strong>Site</strong></strong><em><em>&nbsp;field will appear. Hence, administrator user can create site specific materials.</em></em></p>
                       
                            <p>2.Click. The filter appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture59.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>FIGURE: Selecting Material Type and Material Category to Add Material</p>
                            <p>3.Select <strong><em><strong>Material Type</strong></em></strong>and <strong><em><strong>Material Category</strong></em></strong>&nbsp;to add material and then click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                            <p>4.lick The <strong><em><strong>Add </strong></em></strong>dialog appears as shown in the figure:</p>
                           <h4 className='inner-image'>
                                <img src='../../image/articel/Picture60.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>FIGURE: Add Material Dialog</p>
                            <p>1.In the <strong><em><strong>Material Category </strong></em></strong>field, select the category to group the material you add.</p>
                            <p>2.In the <strong><em><strong>Material Name </strong></em></strong>field, type the material name.</p>
                            <p>3.In the <strong><em><strong>Basic Unit</strong></em></strong>field, select the unit to measure the material.</p>
                            <p>4.In the <strong><em><strong>Prefix</strong></em></strong>field, type prefix for the material.</p>
                            <p>5.Click to turn on the <strong><em><strong>Quarantine</strong></em></strong>option to quarantine the material until it is released in the Material Inventory field.</p>
                            <p>6.In the <strong><em><strong>Section</strong></em></strong>field, select section to add material.</p>
                            <p>7.In the <strong><em><strong>Reorder Level</strong></em></strong>field, type the quantity of material at which the order must be placed to replenish the stock. A notification is sent when the material reaches the reorder level.</p>
                            <p>8.Under <strong><em><strong>Expiry Validations</strong></em></strong>, select any of the following options:</p>
                     
                        <ul className='m-0 p-0'>
                            <li className='m-0 p-0'><strong><em><strong>No Expiry</strong></em></strong>:</li>
                        </ul>
                        <p>If you select this option, the material has no expiry date. But you can set open expiry to set expiry period from the date the material is open. Click to enable the <strong><em><strong>Open Expiry Need</strong></em></strong>&nbsp;option. In the <strong><em><strong>Open Expiry</strong></em></strong>&nbsp;field, type number, in the <strong><em><strong>Open Expiry Period </strong></em></strong>field, select period as shown in the figure:</p>
                        <ul>
                            <li><strong>Expiry Date</strong></li>
                        </ul>
                        <p>When this option is selected, you must set open expiry to set expiry period from the date the material is open. Click to enable the <strong><em><strong>Open Expiry Need</strong></em></strong>&nbsp;option. In the <strong><em><strong>Open Expiry</strong></em></strong>&nbsp;field, type number, in the <strong><em><strong>Open Expiry Period </strong></em></strong>field, select period as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture61.png' className=' m-0 p-0' />
                        </h4>
                        <p className='text-center figure'>FIGURE: Setting Expiry Date&nbsp;</p>
                        <ul>
                        <li><strong><em><strong>Expiry Policy</strong></em></strong>:</li>
                        </ul>
                        <p>This option is used set life of the material. Click to enable <strong><em><strong>Expiry Policy</strong></em></strong>&nbsp;option. In the <strong><em><strong>Expiry Policy Days</strong></em></strong>&nbsp;field, type the number, in the <strong><em><strong>Expiry Policy Period</strong></em></strong>&nbsp;field select period. You can also set expiry period from the date the material is open. Click to enable the <strong><em><strong>Open Expiry Need</strong></em></strong>&nbsp;option. In the <strong><em><strong>Open Expiry</strong></em></strong>&nbsp;field, type number, in the <strong><em><strong>Open Expiry Period </strong></em></strong>field, select period as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img src='../../image/articel/Picture62.png' className=' m-0 p-0'/>
                       </h4>
                        <p className='text-center figure'>FIGURE: Setting Expiry Policy</p>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;When you set expiry policy to the material, following are mandatory in the Inventoy screen:</em></em></p>
                        <p><em><em> The </em></em><strong><strong>Received Date &amp; Time</strong></strong><em><em>field becomes mandatory when you add material in the Inventory screen.</em></em></p>
                        <p><em><em> You must set </em></em><strong><strong>Open Date</strong></strong><em><em>for the material when you issue the material.</em></em></p>
                        <p>&nbsp;</p>
                        <p>9.Fill in other fields appropriately.</p>
                        <p>10.Click <strong><em><strong>SAVE</strong></em></strong>.</p>
                        <p>You can see the material you just added listed in the Material master.</p>
                        <h3>Editing and Retiring Material&nbsp;</h3>  
                        <p>1.To edit material details, in the Material master screen, select the material, and then click <strong><em><strong>Edit</strong></em></strong>. In the <strong><em><strong>Edit </strong></em></strong>screen, do required changes and then click <strong><em><strong>SUBMIT</strong></em></strong>.</p>
                        <p>2.To retire a material, in the Material master screen, select the material you want to retire then click</p>
                        
                    </section>
                    
                   <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4 >Previous article</h4>
                            <Link href="../inventorytransactions">How to create inventory transactions</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../logbook">Logbook management</Link>
                        </div>
                    </div>
                    </div>     
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default InventoryMasters; 