'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const InventoryTransactions = () => {
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
                    <h1>Logilab ELN - How to create Inventory Transactions</h1>
                    <section className='articel-content'>
                        <h2>Material Inventory&nbsp;Transactions &ndash; Add Material</h2>
                        <p>Material Inventory tab enables you to do the following:</p>
                        <ul>
                            <li>Add material to inventory</li>
                            <li>Do inventory transaction</li>
                            <li>Add related files to the inventory transaction</li>
                        </ul>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;For administrators the </em></em><strong><strong>Active</strong></strong><strong><strong>Site</strong></strong><em><em>&nbsp;field will appear. Hence, administrator user can create site specific transactions.</em></em></p>
                        <h3>Adding Material to the Inventory</h3>
                        <p>Once the material is added to the Material master, you must add the material to the inventory. And then issue the material to use the material in transactions.</p>
                        <p>To add a material to the inventory, follow these steps:</p>
                        
                            <p>1.On the main menu, clickand then click <strong><em><strong>Material Inventory. </strong></em></strong>The&nbsp;<strong><em><strong>Material Inventory </strong></em></strong>screen appears. Click . The filter appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture103.png'  className=' m-0 p-0'/>
                            </h4>
                            <p className='text-center '>FIGURE: Selecting Material Type, Category and Material to add Inventory</p>                      
                           <p>2.elect <strong><em><strong>Material Type</strong></em></strong>, <strong><em><strong>Material Category</strong></em></strong>and <strong><em><strong>Material</strong></em></strong>&nbsp;to add inventory and then click <strong><em><strong>SUBMIT</strong></em></strong>. The Inventory screen appears as shown in the figure for the selected Material Type, Category and Material:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture104.png' className=' m-0 p-0'/>
                            </h4>
                            <p className='text-center '>FIGURE: Material Inventory Screen</p>  
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture105.png'className='' />
                            </h4>
                            <p className='text-center figure'>FIGURE: Add Material Inventory Screen</p>       
                            <p>3.Click <strong><strong>Add</strong></strong>. The <strong><em><strong>Add </strong></em></strong>Material Inventoryscreen appears as shown in the figure:</p>
                            <p>4.In the <strong><strong>Internal Reference </strong></strong>field, type reference for the inventory you add.</p>
                            <p>5.In the <strong><strong>Batch No </strong></strong>field, type the batch number of the material.</p>
                            <p>6.In the <strong><strong>Lot No </strong></strong>field, type the lot number of the material.</p>
                            <p>7.In the <strong><strong>Storage Location</strong></strong>field, select the storage location for the inventory.</p>
                            <p>8.In the <strong><strong>Supplier</strong></strong>field, select the upplier of the material.</p>
                            <p>9.In the <strong><strong>Manufacturer </strong></strong>field, select the manufacturer of the material.</p>
                            <p>10.In the <strong><strong>Section</strong></strong>field, select section to add material.</p>
                            <p>11.In the <strong><strong>Received Quantity</strong></strong>field, type the quantity of material received.</p>
                            <p>12.In the <strong><strong>Grade</strong></strong>field, the material grade appears.</p>
                            <p>13.In the <strong><strong>Date of Manufacturer</strong></strong>field, select date of manufacturing of the material.</p>
                            <p>14.In the <strong><strong>Received Date &amp; Time </strong></strong>field, select date and time of inventory received.</p>
                            <p>15.In the <strong><strong>Remarks</strong></strong>field, type remarks if any.</p>
                            <p>16.lick <strong><strong>SAVE</strong></strong>.</p>
                       
                        <p>The material is added to the inventory and the same is listed in the <strong><em><strong>Material Inventory </strong></em></strong>tab as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture106.png' className=' m-0 p-0'/>
                            </h4>
                        <p className='text-center figure'>FIGURE: Material Added to the Inventory</p>
                        <h3>View Details of the Selected Inventory</h3>
                        <p>Select the inventory and then click <strong><em><strong>Details</strong></em></strong>&nbsp;to view details of the inventory added as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture107.png' className=' m-0 p-0' />
                            </h4>
                        <p className='text-center '>FIGURE: Viewing Material Details</p>
                        <h3>Editing Inventory Details</h3>
                        
                            <p>1.elect the inventory and then click <strong><em><strong>Edit</strong></em></strong>. The <strong><em><strong>Edit </strong></em></strong>inventory dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture108.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center'>FIGURE: Edit Inventory Dialog</p>
                                           
                      
                            <p>2.Do required changes and then click <strong><em><strong>SAVE</strong></em></strong>.</p>
                        
                        <h3>Set Open Date for the Inventory</h3>
                        <p>Youmust set open date for the inventory if Expiry Policy is set for the material.</p>
                       
                            <p>1.slect inventory and then click <strong><em><strong>Open Date</strong></em></strong>. The <strong><em><strong>Open Date</strong></em></strong>dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture109.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center '>FIGURE: Open Date Dialog</p>                        
                     
                            <p>2.select the date and then click <strong><em><strong>SAVE</strong></em></strong>. The inventory expires as mentioned in the <strong><em><strong>Expiry Validations</strong></em></strong>in material master.</p>
                     
                        <h3>Release Inventory</h3>
                        <p>If the inventory status is Quarantine, then you must release the inventory for use.</p>
                      
                            <p>1.Select the inventory and then click <strong><em><strong>Released</strong></em></strong>. The status changes to "<strong><em><strong>Released</strong></em></strong>".</p>
                     
                        <h3>Retire Inventory</h3>
                        <p>You can retire the inventory for some reason.</p>
                     
                            <p>1.elect the inventory and then click <strong><em><strong>Retire</strong></em></strong>. The status changes to "<strong><em><strong>Retired</strong></em></strong>". The retired inventory cannot be used in transactions.</p>
                       
                        <h3>Attach File to Inventory</h3>
                        <p>You can attach file to the inventory. To do so, follow these steps:</p>
                       
                            <p>1.elect the inventory and then click The <strong><em><strong>Material Inventory Attachment</strong></em></strong>dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture110.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center '>FIGURE: Material Inventory Attachment Dialog</p>                                               
                         <p>2.lick <strong><em><strong>Choose</strong></em></strong>, select a file to attach and then click <strong><em><strong>Upload</strong></em></strong>. The file is attached to the inventory.</p>
                       
                        <p>Now, you can issue the material to use in transactions.</p>
                        <h2>Material Inventory Transactions &ndash; Issue and Return material</h2>
                        <p>Inventory transaction is done only for released material. If the material is quarantined for some reason, then the material has to be released for inventory transaction. Inventory transaction can be done for any of the following reasons:</p>
                        <ul>
                            <li>Issue material to sections for usage</li>
                            <li>Accept return material from sections</li>
                            <li>Return material to the supplier for some reason</li>
                        </ul>
                        <p>To issue material for transactions, follow these steps:</p>
                      
                            <p>1.On the main menu, clickand then click <strong><em><strong>Material Inventory. </strong></em></strong>The&nbsp;<strong><em><strong>Material Inventory </strong></em></strong>screen appears as shown in the figure:</p>
                            <p>2.n the <strong><em><strong>Material Inventory</strong></em></strong>screen, go to the <strong><em><strong>Inventory Transaction</strong></em></strong> In the <strong><em><strong>Inventory Transaction</strong></em></strong>&nbsp;tab select the material inventory from the list, and then click&nbsp;as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='image/articel/Picture111.png'className=' m-0 p-0' />
                            </h4>
                            <p className='text-center'>FIGURE: Quantity Transaction Dialog</p>
                      
                        
                        <p>The <strong><em><strong>Quantity Transaction </strong></em></strong>dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='image/articel/Picture112.png' className=' m-0 p-0' />
                            </h4>
                        <p className='text-center'>FIGURE: Quantity Transaction Dialog</p>
                        
                            <p>3.In the <strong><em><strong>Transaction Type</strong></em></strong>field, select the transaction type:</p>
                        
                        <ul>
                            <li><strong><em><strong>Issue</strong></em></strong>To issue or accept return from in-house sections</li>
                            <li><strong><em><strong>Return</strong></em></strong>: To return material to the supplier for some reason</li>
                        </ul>
                    
                            <p>4.In the <strong><em><strong>Transaction Type</strong></em></strong>field, select <strong><em><strong>Issue</strong></em></strong>&nbsp;to issue materials to the selected sections. Select <strong><em><strong>Return</strong></em></strong>&nbsp;to accept return from sections or to return material to the supplier.</p>
                            <p>5.Under <strong><em><strong>Available Quantity</strong></em></strong>, quantity of material available will appear. This field is updated once the material is issued / returned.</p>
                            <p>6.In the <strong><em><strong>Issued </strong></em></strong><strong><em><strong>Quantity</strong></em></strong>field, type quantity of material for the transactions. All transactions will use material from this issued quantity.</p>
                            <p>7.In the <strong><em><strong>Set notification quantity </strong></em></strong>field, type quantity of the material when reached will receive an alert.</p>
                            <p>8.Click <strong><em><strong>SAVE</strong></em></strong>. You can see the transaction details of the issued material as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='image/articel/Picture113.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center'>FIGURE: Inventory Transaction for the Issued Quantity</p>
                       
                        
                        <p>Only when the material is issued, it will be available for transactions. Now you can use this issued material in transactions.</p>
                        <p>Click <strong><em><strong>File</strong></em></strong>&nbsp;to attach files related to the transactions if any.</p>
                        <p>Click <strong><em><strong>Open Date</strong></em></strong>&nbsp;to set open date for the material. This option is applicable if Expiry Policy is set to the material. The material will expire based on the expiry duration mentioned and open date set here.</p>
                        <h4 className='text-left'>Result Entry Transaction Tab</h4>
                        <p>Go to the <strong><em><strong>Result Entry Transaction</strong></em></strong>&nbsp;tab. The tab appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='image/articel/Picture114.png'className=' m-0 p-0' />
                            </h4>
                        <p className='text-center '>FIGURE: Result Entry Transaction Tab Showing Used Quantity</p>
                        <p>The Result Entry Transaction tab shows list of transactions the material used and the quantity of material used in each transaction as shown in the above figure.</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../templatevalidation">How to process template validation</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../inventorymasters"> How to configure inventory masters</Link>
                        </div>
                    </div>
                    </div>
                    
                </div>
             </div>
         <Help/>
        </div>
    );
}

export default InventoryTransactions; 