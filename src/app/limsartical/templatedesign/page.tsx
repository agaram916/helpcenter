'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

 const TemplateDesign = () => {
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
                        <li><Link href="../limstroublearticle">LIMS Article</Link></li>
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
                    <h1>How to Add and Manage Template Design </h1>
                    <section className='articel-content'>
                        <p>Template Design screen is used to design registration form that is used to register a sample in the Registration screen. Template design is created for a selected sample type. You can create versions for templates. You can edit the details until the template is in the DRAFT state. Once approved you cannot edit the details.  </p>
                        <p>The previous one will expire once you approve an new template</p>
                        <p>Adding a Template</p>
                        <p>To create a new template, follow these steps:</p>

                        <p>1.On the main menu, click < img  src='../../image/articel/LIMS/configuration.png' alt='Description of the image'  className='mx-2 w-auto'/> <b>Configuration </b>and then click <b>Template Design</b>. The <b>Template Design</b> master screen appears as shown in the figure:	 </p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture17.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Design Master Screen</p>
                        <p>In the Template Design master screen, you can see the list of templates created. Options to edit and delete templates appear in each record..</p>
                        <p>2.Click <img  src='../../image/articel/LIMS/filter.png'  className='mx-2 w-auto' />  The filter dialog appears as shown in the figure:</p>
                       
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture18.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Selecting Sample Type to add Template Design</p>
                        <p>3.Select the <b>Sample Type & Template Type</b> and then click <b>SUBMIT.</b> The screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture19.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Design Screen for  the selected Sample Type</p>
                        <p>If there are templates already added, the list of  templates appears. </p>
                        <ul>
                            <li className='disc mx-3'> Add custom fields to the template.</li>
                            <li className='disc mx-3'> Add predefined fields to the template.</li>
                        </ul>
                       
                        <h3>1.1.1Adding Custom Fields to the Template</h3>
                        <p>To add custom fields, follow these steps:</p>
                        <p> In the Add Template Design screen, click <img  src='../../image/articel/LIMS/keyboard.png' className='mx-2 w-auto'/> . The screen appears as shown in the figure</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture21.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Adding Custom Fields 1 </p>
                        <p>2.Under <b>Input Fields,</b> drag and drop the required fields as shown in the above figure.</p>

                        <p>3.And  then click the dropped field. The <b>Properties</b> dialog for the selected field appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3' src='../../image/articel/LIMS/Picture4.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Registration Sub Type Dialog</p>
                    
                        <p>5.In the<b>Registration Sub Type</b>Name field, type the registration sub type name. </p>
                        <p>6.Click  <img  src='../../image/articel/LIMS/Picture5.png' className='mx-2 w-auto' />to add Registration Sub Type name in multiple languages. The multilingual options appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture22.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Adding Custom Fields 2 </p>
                        <p>4.In the <b>Label ID</b> field, type the label for the field.</p>
                        <p>5.Click to enable other options like<b>Mandatory / Export / Unique / ReadOnly / Conditional ReadOnly /Conditional Show/Hide</b> etc.</p>
                        <p>6.In the <b>Maximum Length</b> field, type the maximum number of characters the field shall hold.</p>
                        <p>7.Add details for all the custom fields added and then click Save. The Template dialog prompts for the template name as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture23.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Saving the Template</p>
                        <p>8.In the <b>Template Name</b> field, type a name for the template and then click <b>Submit</b>The template is saved and appears in the Template Design screen in the DRAFT state as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture24.png' />
                        </h4>
                        <p className='figure mt-1'>  FIGURE: Template Design Added</p>

                        <h3>1.1.2Preview  Dynamic Template Design.</h3>
                        <p>1.Click <img  src='../../image/articel/LIMS/eye.png' className='mx-2 w-auto'/>to preview the template design as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='w-100' src='../../image/articel/LIMS/Picture25.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Design Preview</p>
                       
                        <h3>1.1.3Edit Design Template</h3>
                       
                        <p>1.Click  <img  src='../../image/articel/LIMS/pencil.png' className='mx-2 w-auto'/>to edit the record. <b>The Edit Template Design</b> dialog appears as shown in the figure:</p>
                       
                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture26.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Edit Template Design Dialog</p>
                        <p>2.Do required changes and then click <b>Save.</b></p>
                        <h3 >
                        1.1.3.1Delete Template Design  
                        </h3>
                        <p>1.Click <img  src='../../image/articel/LIMS/delete.png' className='mx-2 w-auto'/> to delete the Design Template that is in the DRAFT state. The confirmation dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture27.png' />
                        </h4>

                        <p className='figure mt-1'>FIGURE: Delete Design Template Dialog.</p>
                        <p> 1.Click <b>OK</b> to delete the template. </p>
                        <h3>1.1.4Approve Template Design</h3>
                        <p>1.Click <img  src='../../image/articel/LIMS/like.png' className='mx-2 w-auto'/>  to approve the template. The template is approved and appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture28.png'  />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Design Approved</p>
                        <h3>
                          1.1.5Copy Template Design
                        </h3>
                        <p>1.Click <img  src='../../image/articel/LIMS/file.png' className='mx-2 w-auto'/> to approve copy the template. The <b>Copy Template</b> dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture29.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: View Transaction Flow</p>

                        <h3>1.1.3Edit Registration Sub Type Version</h3>
                        <p>1.Click to edit the record. The <b>Edit Version</b> dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/LIMS/Picture29.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Copy Template Dialog</p>
                        <p>2.In the <b>Template Name</b> field, type name for the template and then click <b>Save.</b> The copied template appears as shown in the figure:.</p>

                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/LIMS/Picture30.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Design Copied</p>
                        <h3 >
                            1.1.5.1Editing and Deleting Registration Sub Type
                        </h3>
                        <p>3.Click.<img src='../../image/articel/LIMS/pencil.png' className='mx-2 w-auto'/>In the Edit screen, do required changes and then save the template.</p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../registrationsub"> Registration Sub Type</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                           <Link href="../roletemplate">How to Create and Manage User Role Template</Link>
                        </div>
                    </div>
                    </div>                   
                </div>
             </div>

        <Help/>
        </div>
    );
}

export default TemplateDesign; 