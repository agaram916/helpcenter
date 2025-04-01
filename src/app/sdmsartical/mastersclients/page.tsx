'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const MastersClients = () => {
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
                        <li><Link href="../sdmstroublearticle">SDMS Article</Link></li>
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
                    <h1>Logilab SDMS – Masters - Clients</h1>
                    <section className='articel-content'>
                    <h3 className='pb-3 mt-3'>1.Client Master</h3>
                    <p className='text-left'>Computers that are connected to the instruments are called clients. Client computers pull data from the instruments. Client master enables you to add client machines to SDMS. When you add a client you can map instruments to the client. You can also add a new instrument to the client if required.</p> 
                    <p>1.On the main menu, click, <img  src='../../image/articel/SDMS/share.png'  className='m-2 w-auto'/>  and then click <b>Base Masters.</b> The <b>Base Masters </b>screen appears. Click <b>Client</b> to go to the Client master tab. The Client Master tab appears as shown in the figure:</p>
                    <p>The Client Master tab enables you to do the following:</p>

                    <ul>
                               <li className='circle mx-3'>Add Client </li>
                               <li className='circle mx-3'>Edit Client details </li>
                               <li className='circle mx-3'>Export Client Master to Excel </li>
                               <li className='circle mx-3'>Print Client Master</li>
                            </ul>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture95.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Client Master Tab</p>
                        <h3 className='pb-3'>Add Client</h3>
                        <p>To add a client to the Client Master, follow these steps:</p>
                        <p>1.In the <b>Client Master</b> tab, click  <img  src='../../image/articel/SDMS/addplus.png' className='m-2 w-auto'/> . The <b>Add Client</b> dialog appears as shown in the figure:</p>     

                            <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture96.png'  className='my-3 p-0 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: 21 - Add Client Screen</p>
                               <p>2.In the <b>Client Name</b> box, type the name of the client machine to add.  </p>
                               <p>3.In the <b>Client Alias Name</b> box, type the alias name for the client.. </p>
                               <p>Files highlighted in red are retired files. </p>
                               <p>4.From the Client Type box, select the type of the client.  Different <b>Client Types</b> in SDMS has different purpose. And the list is as follows: </p>                              
                        <ul>
                               <li className='circle mx-3'><b>Instrument Client</b> is common type used to capture data from an instrument. </li>
                               <li className='circle mx-3'><b>Document Client</b> is for capturing non-instrument files. </li>
                               <li className='circle mx-3'><b>Administrative Client</b> is for review and configuration purpose </li>
                               <li className='circle mx-3'><b>Empower Client</b> is to empower instrument configuration.</li>
                         </ul>
                        <p>5.Click to check the <b>Active</b> check box to make the client active.</p>
                        <p>6.Click to check the <b>Gateway Client</b> check box to make the client gateway client.</p>
                       <p>7.In the <b>Instrument Name</b> box, if there are instruments then, click to select instruments from the list to map them to the client. .</p>
                        <p> <b>Note:</b> If the instrument is already mapped to some other client, then you will not be able to map that instrument.</p>
                        <p> 8.Alternatively, you can click to add an instrument to the client. To see how to add an instrument, click here.</p>

                        <p> 8.Alternatively, you can click <img  src='../../image/articel/SDMS/addblue.png' className='m-2 w-auto'/>  to add an instrument to the client. To see how to add an instrument, click here..</p>
                        
                        <p>9.Click <b>Save</b></p>

                       <h3 className='pb-3'>2.Edit Client Details</h3>
                        <p>To edit client details, follow these steps: </p>
                        <p>1.On the main menu, click, <img  src='../../image/articel/SDMS/share.png' className='m-2 w-auto'/> and then click <b>Base Masters</b>. The <b>Base Masters</b> screen appears. Click Client to go to the client master tab. The Client Master tab appears.</p>
                        <p>2.In the <b>Client Master</b> tab, click to select the client from the list you want to edit and then click  <img  src='../../image/articel/SDMS/edit.png' className='m-2 w-auto'/> . The <b>Edit Client</b> screen appears as shown in the figure:</p>
                            
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture98.png'  className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:Edit Client Screen</p>
                        <p>3.Do the required changes to the client details and then click <b>Save</b> to save the changes.</p>
                            <ul>
                                <li className='circle mx-3'> <b>Note:</b></li>
                                <li className='circle mx-3'>a.You con not edit <b>Client Name.</b></li>
                                <li className='circle mx-3'>b.You cannot deactivate a client if the client has an active schedule. You will see a warning message saying “The client have an active schedule. So cannot deactivate this client”.</li>
                                     </ul> 

                       <h3 className='pb-3'>3.Export Client Master to Excel</h3>
                        <p>To export Client Master to Microsoft Excel, follow these steps:</p>

                        <p>1.On the main menu, click,<img  src='../../image/articel/SDMS/share.png' className='m-2 w-auto'/> and then click <b>Base Masters.</b> The <b>Base Masters</b> screen appears. Click Client to go to the client master tab. The Client Master tab appears</p>

                        <p>In the <b>Client Master</b> tab, click<img  src='../../image/articel/SDMS/    export.png' className='m-2 w-auto'/> The file <b>Save As</b> dialog appears.</p>
                        
                        <p>3.In the <b>Save As</b> dialog locate the folder where you want to store the Excel file and then in the <b>File Name</b> box, type a name for the exported file.</p>
                        <p>4.Click <b>Save.</b> List of clients in the Client master is exported to Excel as shown in the figure:</p>

                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture99.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:– Export Client Master</p>

                        <h3 className='pb-3'>4.Print Client Master</h3>     
                        <p>To print Client Master, follow these steps:</p>
                        <p> 1.On the main menu, click, and then click  <img  src='../../image/articel/SDMS/share.png' className='m-2 w-auto'/> <b>Base Masters.</b> The <b>Base Masters</b> screen appears. Click Client to go to the <b>Client master</b> tab. The Client Master tab appears..</p>
                        <p>2.In the <b>Client Master</b>tab, click. <img  src='../../image/articel/SDMS/print.png' className='m-2 w-auto' /> The Print screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture100.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:- Print Client Master Dialog</p>
                        <p>3.In the <b>Print</b> dialog, you can see the print preview of the client master on the right side. </p>
                        <p>4.Click <b>Print</b> to print the client list.</p>
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../setuptemplates'>How to setup templates</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../sdmsusermanagement'>Logilab SDMS User Management</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Help/>        
        </div>
    );
}

export default MastersClients; 