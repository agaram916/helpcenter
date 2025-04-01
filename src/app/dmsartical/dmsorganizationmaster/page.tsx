'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const DmsorganizationMaster = () => {
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
                  <h1>Qualis DMS – Organization Master</h1>
                  <div className='articel-content'>
                        <p className='text-left'>
                        Masters in Qualis DMS are used to store and maintain data outside a process and refer it in process using "Master" field type in the form. For example, when you store a sample, you may want to look up the storage data such as organisation, department, lab, site, section etc. In this example storage location data can be created and managed as a master. Also, user data can be created and managed as a master.  </p>
                        <p className='text-left'>In Qualis DMS you can add/create masters, edit master details and delete existing masters.</p>
                        <p className='text-left'>Qualis DMS allows you to create and manage organization as follows:</p>
                        <p className='text-left'> <b>Organisation Management</b></p>
                        <p className='text-left'> Organisation, Department, Site, Lab, and Section etc are created and managed as masters.</p>

                        <h3 className='pb-3 mt-3'>1.1Organisation</h3>
                        <p className='text-left'>1.1Setting up Organisational Hierarchy</p>
                        <p className='text-left'>Qualis DMS organisation hierarchy contains the following levels. There will be many to one mapping from the lower level to the higher level in the hierarchy.</p>
                        <p className='text-left'><b>Organisation:</b> Consists of multiple sites</p>
                        <p className='text-left'> <b>Site:</b> Consists of multiple departments</p>
                        <p className='text-left'> <b>Department:</b> Consists of multiple sections</p>
                        <p className='text-left'> <b>Sections:</b> Consists of multiple labs</p>
                        <p className='text-left'> <b>Labs:</b> Mapped to multiple user</p>
                        <h3 className='pb-3'>2.Site Master</h3>
                        <p className='text-left'> Site master helps to create and manage sites.</p>
                        <h3 className='pb-3'>Creating a New Siter</h3>
                        <p className='text-left'> To create a new site, follow these steps:.</p>
                        <p className='text-left'> 1.On the Explorer, click <b>MASTER, Organisation</b> and then click Site. The <b>Site</b> master screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture28.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Site Master Screen</p>
                        <p className='text-left'>In the Site master screen you can see the list of sites created for the organisation. Also options to add, edit and delete sites appear as shown in the above figure.</p>   

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture30.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add Site Dialog</p>
                        <p className='text-left'>3.In the <b>Site Name</b> field, type the name for the site you want to create.</p>
                        <p className='text-left'>4.In the <b>Site Address</b> field, type the site address.</p>
                        <p className='text-left'>4.In the  <b>Host Name</b>  field, type host name.</p>
                        <p className='server text-left'>5.Fill in other fields appropriately.</p>
                        <p className='text-left'>6.Click SUBMIT.</p>
                        <p className='text-left'>You can see the site you just created listed in the Site master.</p>               
                        <h3 className='pb-3 mt-3'>2.Editing and Deleting Sites</h3>
                        <p className='text-left'>1.To edit a site, in the Site master screen, select the site, click action menu and then click Edit. In the <b>Edit</b> Site dialog, do required changes and then click <b>SUBMIT. </b></p>                       
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture31.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Edit Site Dialog</p>

                        <h3 className='pb-3'>3.Department Master</h3>
                        <p className='text-left'>Department master is used to create and manage departments that are used in the organisation setup. Sections are grouped under departments. </p>
                        <h3 className='pb-3 mt-3'>Creating a New Department</h3>
                        <p className='text-left'>To create a new department, follow these steps: </p>
                        <p className='text-left'>1.On the Explorer, click <b>MASTER, Organisation</b> and then click Department. The <b>Department</b> master screen appears as shown in the figure:</p>  
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture32.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Department Master Screen</p>

                        <p className='text-left'>In the department master screen you can see the list of departments created for the organisation. Also options to add, edit and delete departments appear as shown in the above figure..</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture33.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add Department Dialogn</p>
                        <p className='text-left'>3.In the <b>Department Name </b>field, type the name for the department you create.</p>
                        <p className='text-left'>4.In the <b>Description</b> field, type the description.</p>
                        <p className='text-left'>5.Click <b>SUBMIT.</b></p>

                        <p className='figure mt-1'>FIGURE: - Email Template Screen</p>

                        <p className='text-left'>You can see the department you just created listed in the Department master.</p>

                        <h3 className='pb-3'>Editing and Deleting Department</h3>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture34.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Edit Department Dialog</p>
                        <p className='text-left'>2.To delete a department, in the Department master screen, select the department you want to delete, click action menu and then click Delete. .</p>
                        <h3 className='pb-3'>Lab Master</h3>

                        <p className='text-left'>Lab master is used to create and manage labs that are used in the organisation setup. Sections are mapped to labs.</p>
                        <h3 className='pb-3'>Creating a New Lab</h3>

                        <p className='text-left'>To create a new lab, follow these steps:.</p>

                        <p className='text-left'>1.On the Explorer, click <b>MASTER, Organisation</b> and then click <b>Lab.</b> The <b>Lab</b> master screen appears as shown in the figure:.</p>
                        
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture35.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Lab Master Screen</p>
                        <p className='text-left'>In the Lab master screen you can see the list of labs created for the organisation. Also options to add, edit and delete labs appear as shown in the above figure</p>

                        <p className='text-left'>2.Click action menu and then click <b>Add.</b> The <b>Add</b> Lab dialog appears as shown in the figure:.</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture36.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Add Lab Dialog</p>

                        <p className='text-left'>3.In the <b>Lab Name</b> field, type the name for the lab you create.</p>
                     <p className='text-left'> 4.In the <b>Description</b> field, type the description..</p>
                     <p className='text-left'>7.Click <b>SUBMIT.</b></p>
                     <p className='text-left'>You can see the lab you just created listed in the Lab master.. </p>

                     <h3 className='pb-3'>Editing and Deleting Labs </h3>

                     <p className='text-left'>1.To edit a lab, in the Lab master screen, select the lab, click action menu and then click Edit. In the Edit Lab dialog, do required changes and then click <b>SUBMIT.</b> </p>
                     <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture37.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Edit Lab Dialog</p>
                     <p className='text-left'>2.To delete a lab, in the Lab master screen, select the lab you want to delete, click action menu and then click <b>Delete.</b> </p>

                     <h3 className='pb-3'>Section Master </h3>
                     <p className='text-left'>Section master is used to create and manage sections that are used in the organisation setup. Sections are grouped under labs..</p>

                     <h3 className='pb-3'>Creating a New Section</h3>

                     <p className='text-left'>To create a new section, follow these steps:</p>
                     <p className='text-left'>1.On the Explorer, click <b>MASTER, Organisation</b> and then click <b>Section.</b> The <b>Section</b> master screen appears as shown in the figure:</p>

                     <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture38.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Section Master Screen</p>

                        <p className='text-left'>In the Section master screen you can see the list of sections created for the organisation. Also options to add, edit and delete sections appear as shown in the above figure.</p>

                        <p className='text-left'>2.Click action menu and then click <b>Add.</b> The <b>Add</b> Section dialog appears as shown in the figure::</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture39.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FFIGURE: - Add Section Dialog</p>          
                        <p className='text-left'>3.In the <b>Section Name</b> field, type the name for the section you create..</p>
                        <p className='text-left'>4.In the <b>Description</b> field, type the description.</p>
                        <p className='text-left'>5.Click <b>SUBMIT.</b></p>
                        <p className='text-left'>You can see the section you just created listed in the Section master.</p>
                        <h3 className='pb-3'>Editing and Deleting Sections</h3>
                        <p className='text-left'>To edit a section, in the Section master screen, select the section, click action menu and then click edit. In the Edit Section dialog, do required changes and then click <b>SUBMIT.</b> </p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture40.png'  className='my-2 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Edit Section Dialog</p>
                        <p className='text-left'>2.To delete a section, in the Section master screen, select the section you want to delete, click action menu and then click <b>Delete.</b></p>

                        <h3 className='pb-3'>Organisation Master</h3>
                        <p className='text-left'>Organisation master is used to setup organisation hierarchy in Qualis DMS. Site from the Site master appears in the organisation master screen. You can do the following in the organisation master screen:</p>
                        <ul>
                            <li className='circle mx-3'>Add departments to sites</li>
                            <li className='circle mx-3'>Add labs to departments</li>
                            <li className='circle mx-3'>Map users to sections</li>
                        </ul>

                        <p className='text-left'>1.On the Explorer, click <b>MASTER, Organisation</b> and then click Organisation. The Organisation master screen appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture41.png'  className='my-2 p-0 w-75'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Organisation Master Screen</p>
              
                        <p className='text-left'>In the Organisation master screen you can see the information organized in the following hierarchy:.</p>

                        <h4 className='inner-image '>
                            <img  src='../../image/articel/dms/Picture42.png'  className='my-2 p-0 w-auto'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Organisation Structure</p>

                        <p className='text-left'> Also options to add/remove departments, sections, labs and users appear.</p>               
                    </div>
                    <div className='prevartical'>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../mailconfiguration'>Mail Configuration</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../dmsusermanagement'>User Management</Link>
                        </div>
                    </div>
                    </div>
            </div>
             </div>
         <Help/>
        </div>
    );
}

export default DmsorganizationMaster; 