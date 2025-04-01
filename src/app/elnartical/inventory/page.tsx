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
                <h1><strong>Logilab ELN - Inventory management </strong></h1>
                    <section className='articel-content'>                   
                            <h2>1.1&nbsp;Material Master</h2>
                            <p>Material master is used to add and manage materials.</p>
                            <ol>
                            <li>On the main menu, click <img src='../../image/articel/eln/Inventory.png' className='mx-2 w-auto'/> and then click <strong><strong>Material Master. </strong></strong>The <strong><strong>Material </strong></strong><strong><strong>Master</strong></strong>&nbsp;screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture105.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Material Master Screen</p>
                            <p>In the Material master screen, you can see the list of materials added and options to add, edit and retire material appears.</p>
                            <p>Details such as material Name, Material type, material category, unit, status, created date and attachments appear.</p>
                            <h3>1.1.1&nbsp;Filtering Materials</h3>
                            <p>By default, all materials added for the past one week appear. You can use the filter options to filter materials.</p>
                            <ol>
                            <li>Click.<img  src='../../image/articel/eln/filter.png' className='mx-2 w-auto'/> The filter dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture106.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Filtering Materials</p>
                            <ol>
                            <li>Select the <strong><strong>From</strong></strong> and <strong><strong>to</strong></strong>&nbsp;dates to fetch materials added on a specific period.</li>
                            <li>Select <strong><strong>Material Type</strong></strong>and <strong><strong>Material Category</strong></strong>&nbsp;to further narrow your search.</li>
                            </ol>
                            <h3>1.1.2&nbsp;Viewing Metadata of a Material</h3>
                            <ol>
                            <li>On the Material Master screen, click on the material name to view metadata of the material as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture107.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Viewing Metadata of the Material</p>
                            <p>You can view the list of static and dynamic fields.</p>
                            <h3>1.1.3&nbsp;Adding a New Material</h3>
                            <p>To add material, follow these steps:</p>
                            <ol>
                            <li>On the main menu, clickand then click <strong><strong>Material Master. </strong></strong>The <strong><strong>Material </strong></strong>master screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture108.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Material Master Screen</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>ActiveSite</strong></strong>&nbsp;field will appear. Hence, administrator user can create site specific materials.</p>
                            <ol start={3}>
                            <li>Click <strong><strong>Add</strong></strong>. The <strong><strong>Add Material </strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture109.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Material Dialog</p>                        
                            <ol start={4}>
                            <li>In the <strong><strong> Material Type </strong></strong>field, select the material type.</li>
                            <li>In the <strong><strong> Material Category </strong></strong>field, select the category.</li>
                            <li>In the <strong><strong> Material Name </strong></strong>field, type the material name you add.</li>
                            <li>In the<strong><strong> Unit</strong></strong>&nbsp;field, select the unit to measure the material.</li>
                            <li>In the <strong><strong> Section</strong></strong>field, select section to add material.</li>
                            <li>In the Barcode field, select Barcode if you want to generate a barcode to the material: <strong><strong>Barcode</strong></strong>/ <strong><strong>QR code</strong></strong>&nbsp;/ <strong><strong>Non</strong></strong></li>
                            <li>Click to turn on the <strong><strong>Quarantine</strong></strong>option to quarantine the material until it is released in the Material Inventory screen.</li>
                            <li>Click <strong><strong>Expiry Validations </strong></strong>to see the expiry options. Under <strong><strong>Expiry Validations</strong></strong>, select any of the following options:</li>
                            </ol>
                            <ul>
                            <li><strong><strong>No Expiry</strong></strong>:</li>
                            </ul>
                            <p>If you select this option, the material has no expiry date.</p>
                            <p><strong><strong>Expiry Date</strong></strong>:</p>
                            <p>Mention the expiry date.</p>
                            <p><strong><strong>Open Expiry</strong></strong></p>
                            <p>This option is used set life of the material. Click to enable <strong><strong>Open Expiry Policy</strong></strong>&nbsp;option. In the <strong><strong>Open Policy </strong></strong>field, type the number, in the <strong><strong>Open Expiry Period</strong></strong>&nbsp;field select period.For example</p>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture110.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Setting Open Expiry&nbsp;</p>
                            <p>For example: After opening, the material will expire in three months.</p>
                            <p><strong><strong>Note:</strong></strong>&nbsp;When you set expiry policy to the material, following are mandatory in the Inventoy screen:</p>
                            <ol>
                            <li> The <strong><strong>Received Date &amp; Time</strong></strong>field becomes mandatory when you add material in the Inventory screen.</li>
                            <li> You must set <strong><strong>Open Date</strong></strong>for the material when you issue the material.</li>
                            </ol>
                            <p>&nbsp;</p>
                            <ol start={12}>
                            <li>Click <strong><strong>SHOW DYNAMIC FIELDS</strong></strong>. The dynamic fields appear as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture111.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Filling Dynamic Fields</p>
                            <ol start={13}>
                            <li>Fill in the required dynamic fields.</li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>.</li>
                            </ol>
                            <p>You can see the material you just added listed in the Material master.</p>
                            <h3>1.1.4&nbsp;Adding Attachments to Materials</h3>
                            <p>Once you add a material, you can add attachments to the material. To do so, follow these steps:</p>
                            <ol>
                            <li>On the Material Master <img src='../../image/articel/eln/Pin.png' className='mx-2 w-auto'/>  screen, clickto attach a file to the material. The <strong><strong>Material Attachment</strong></strong>&nbsp;dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture112.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Material Attachment Dialog</p>
                            <ol start={15}>
                            <li>Click <strong><strong>CHOOSE</strong></strong>. In the <strong><strong>Open </strong></strong>dialog locate the file to attach and then click <strong><strong>Open</strong></strong>.</li>
                            <li>And then click <strong><strong>Upload</strong></strong>.</li>
                            <li>The file is attached to the material. And you can see the number of attachments for the material as shown ii the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture113.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: File Attached to the Material</p>
                            <h3>1.1.5&nbsp;Editing and Retiring Material</h3>
                            <ol>
                            <li>To edit material details, in the Material master screen, select the material, and then click <strong><strong>Edit</strong></strong>. In the <strong><strong>Edit </strong></strong>screen, do required changes and then click <strong><strong>SUBMIT</strong></strong>.</li>
                            <li>To retire a material, in the Material master screen, select the material you want to retire then click</li>
                            </ol>
                            <p>&nbsp;</p>     
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../task-masters">task master</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../material-inventory">material inventory</Link>
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
