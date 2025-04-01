'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const AddInstrument = () => {
    
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
                    <h1>Logilab SDMS – Masters – Instruments</h1>
                    <p>Masters menu helps the administrators to add and manage domains, clients, instruments, sites, templates and tags. Following are the basic masters in Logilab SDMS:</p>
                    <section className='articel-content'>
                    <ul>
                            <li className='circle mx-3'>Domain</li>
                            <li className='circle mx-3'>Client</li>
                            <li className='circle mx-3'><b>Instrument</b></li>
                            <li className='circle mx-3'>Site</li>
                            <li className='circle mx-3'>Templates and Tags</li>
                            <li className='circle mx-3'>Templates and Tags</li>
                        </ul>
                        <p>You can add and edit, export and print master entries in the respective master tabs</p>
                        <h3 className='pb-3'>Instrument Master</h3>
                        <p>The Instrument master tab enables you to do the following:</p>
                        <ul>
                            <li className='circle mx-3'>Add instruments</li>
                            <li className='circle mx-3'>Edit instrument details</li>
                            <li className='circle mx-3'>Export Instrument Master to Excel</li>
                            <li className='circle mx-3'>Print Instrument Master</li>
                        </ul>
                        <p>1.On the main menu, click, <img  src='../../image/articel/SDMS/share.png' className='w-auto mx-2' />  and then click <b>Base Masters.</b> The <b>Base Masters</b> screen appears. Click <b>Instrument </b>to go to the <b>Instrument</b> master tab. The Instrument master tab appears as shown in the figure:</p>

                       <h4 className='inner-image '>
                            <img  src='../../image/articel/SDMS/Picture101.png' className='my-3 p-0 w-100'/>   
                        </h4>
                        <p className='figure mt-1'>FIGURE: Instrument Master Tab</p>


                        <h3 className='pb-3'>1Add Instrument</h3>
                        <p>To add an instrument to the Instrument master, follow these steps:</p>

                        <p>2.On the <b>Instrument </b>master screen, click.<img  src='../../image/articel/SDMS/add.png'  className='w-auto mx-2'/>  The add instrument screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture17.png' className='my-3 p-0 ' />   
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Instrument Screen</p>

                        <p>3.In the <b>Instrument Code</b> field, type the name of the instrument you want to add..</p>
                        <p>4.In the <b>Instrument Alias</b> field, type the alias name for the instrument..</p>
                        <p>5.In the <b>Instrument Model</b> field, type the model of the instrument.</p>

                        <p>6.In the <b>Lock Type</b> box, select <b>Automatic / Manual</b>. If you select <b>Automatic</b>, the instrument will be locked automatically when in use. If you select Manual, then you need to go to the <b>Lock Settings </b>screen and lock the instrument manually.
                    
                        </p>
                        <p>7.In the <b>Parser Type</b> field, select <b>NONE / WIN_METHOD / WEB_ METHOD.</b>.</p>
                        <p> 8.<b>Active:</b> specifies if the instrument is active.</p>
                        <p> <b> Note:</b> If SDMS is integrated with ELN or InterFACER, respective option appears in as shown above. If SDMS is configured as standalone, then the Active check box alone appears. Integration of SDMS with ELN / InterFACER / standalone is done in DB settings.</p>
                        <p>9.Click <b>Submit.</b> </p>



                        <h2 className='text-left'>Adding Interfacer Instrument WITH / NO parsing</h2>
                        <p> Interfacer is a middleware application runs as windows service. </p>
                        <p> <b>Interfacer Mapped</b> option  If checked then the user will be able to save communication settings for the instrument as interfacer instruments are connected and can communicate via RS232/TCPIP. Or user can select the exiting interfacer instrument.</p>
                        <p> <b>Parser Type</b> options None, WIN_METHOD, WEB_METHOD, if the instrument has fields to parse then the parser engine can be selected here. </p>
                        <p>Interfacer Mapped option  If checked then the user will be able to save communication settings for the instrument as interfacer instruments are connected and can communicate via RS232/TCPIP. Or user can select the exiting interfacer instrument.</p>

                        <p> <b>WEB_METHOD -</b> Method will parse the fields.</p>
                        <p> <b>WIN_METHOD –</b> Interfacer service will parse the fields.</p>
                        <p>If interfacer is integrated with SDMS, the  <b>Interfacer Mappe</b>d check box, <b>Parser Type </b>field and the <b>Communication Settings</b> field will be enabled in the Add Instrument screen as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture18.png ' className='my-3 p-0'/>  
                        </h4>
                        <p className='figure mt-1'>FIGURE: Adding Interfacer Instrument With / No Parsing</p>

                        <p>10.In the <b>Parser Type</b> field, select Interfacer.</p>
                        <p>Note: The <b>Interfacer</b> option will not be available if you use Postgre SQL  database.</p>
                        <p>11.Click to check the <b>Interfacer Mapped </b>check box. When Interface Mapped option is checked, the <b>Interfacer Instrument</b> list field appears and you can select the interfacer instrument to add as shown in the figure:</p>
                        <p>12.In the <b>Interfacer Instrument </b>field, select<b>New Instrument.</b>  </p>
                        <p>13.Click <b>Communication Settings</b>. The <b>Communication Setting</b> dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture20.png ' className='my-3 p-0 '/>  
                        </h4>
                        <p className='figure mt-1'>FIGURE: Communication Setting Dialog</p>
                        <p>14.In the <b>Communication Setting </b>dialog, in the <b>Comm. Type </b>field, select the communication type.</p>

                        <p>The communication type can be any one of the following:.</p>
                        <p>TCP _Client Or TCP_Server : The instrument acts as client / server. If you select TCP _Client Or TCP_Server as communication type, then specify the IP Address of the instrument and the port number in the respective fields.</p>
                        <p>RS232 : If you select RS232 as communication type, then select/type value for Com Port Number, Baudrate, Parity, Stop bits, Data bits and Handshake as applicable.</p>
                        <p>In the Termination Idle Seconds field, type number of seconds after which a new file is created.For example, if you type 5 seconds, then for every five seconds an new file  is created.</p>
                        <p> <b>Note:</b> Refer respective instrument manual for value ranges for Com Port Number, Baudrate, Parity, Stop bits, Data bits and Handshake fields..</p>
                        <p>FILE : If you select FILE as communication type, then just click <b>Submit.</b></p> 
                        <p>For Data logger instrument, the <b>Communication Settings</b> dialog appears as shown in the figure:</p> 


                        <h4 className='inner-image'>
                             <img  src='../../image/articel/SDMS/Picture21.png' className='my-3 '/>  
                        </h4>
                        <p className='figure mt-1 p-0'>FIGURE: Communication Setting Dialog – Data Log</p>

                        <p>16.Fill in required fields. Note that when you add an instrument, parser is not required for Data Logger instruments. Hence in the Parser Type field, select NONE.</p>
                        <p>17.Click <b>Submit. .</b></p>
                        <p>18.Click <b>Ok..</b></p> 
                        <h2 className='text-left'>Edit Instrument</h2>
                        <p>To edit instrument details, follow these steps:</p>
                        <p>1.On the main menu, click,  <img  src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/>  and then click Base Masters. The Base Masters screen appears. Click Instrument to go to the Instrument master tab. The Instrument master tab appears.</p>
                        <p>2.On the <b>Instrument Master</b> screen, click to select the instrument from the list you want to edit and then click. <img  src='../../image/articel/SDMS/edit.png' className='mx-2 w-auto'/>  The edit instrument screen appears.</p>
                        <p>3.Do the required changes to the instrument and then click <b>Submit</b> to save the changes.</p>
                        <p><b>Note</b></p>
                        <ul>
                            <li className='mx-3'>You cannot edit Instrument Code. </li>
                            <li className='mx-3'>You cannot deactivate an instrument if the instrument is locked. You will see a warning message saying “Currently the Instrument is locked,so cannot deactivate the instrument”. </li>
                        </ul>
                        <h3>4.Export Instrument Master to Excel</h3>
                         <p>To export Instrument Master in to Microsoft Excel, follow these steps:</p>
                         <p>1.On the main menu, click, <img  src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/>  and then click <b>Base Masters.</b> The <b>Base Masters</b>screen appears. Click <b>Instrument</b> to go to the Instrument master tab. The Instrument master tab appears.</p>

                         <p>2.On the <b>Instrument master</b> screen, click .<img  src='../../image/articel/SDMS/export.png' className='mx-2 w-auto'/>  The file Save As dialog appears.</p>

                         <p>3.In the <b>Save As</b> dialog locate the folder where you want to store the Excel file and then in the <b>File Name </b>box, type a name for the exported file.</p>

                         <p>Click <b>Submit.</b> The instrument details are exported to EXCEL as shown in the figure</p>

                         <h4 className='inner-image'>
                             <img  src='../../image/articel/SDMS/Picture102.png' className='my-3 p-0 w-100'/>  
                        </h4>
                        <p className='figure mt-1'>FIGURE:- Instrument Master - Export to Excel</p>      
                        <h3 className='pb-3'>Retire Instrument</h3>
                        <p>To retire an instrument, follow these steps:</p>
                        <p>1.On the main menu, click,   <img  src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/>  and then click <b>Base Masters.</b> The Base Masters screen appears. Click <b>Instrument </b>to go to the <b>Instrument</b> master tab. The Instrument master tab appears.</p>
                        
                        <p>2.On the <b>Instrument</b> master screen, select the instrument and then click . <img  src='../../image/articel/SDMS/Retair.png'className='mx-2 w-auto' /> </p>
                        <p>3.In the <b>Confirmation</b> dialog, click <b>Ok.</b>  </p>
                        <p>4.An <b>Audit Trail</b> screen appears for authentication. Type your password, reason and comments appropriately and then click <b>Submit.</b></p>
                        <p>5.Click <b>Submit</b>.</p>
                        <p> <b>Note:</b> You cannot retire an instrument if the instrument is locked. You will see a warning message saying “Currently this Instrument is locked, so cannot retire”.</p>
                        <h3 className='pb-3'>4.Export Instrument Master to Excel</h3>
                        <p>To export Instrument Master in to Microsoft Excel, follow these steps:</p>
                        <p>1.On the main menu, click, <img  src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/> and then click <b>Base Masters.</b> The Base Masters screen appears. Click <b>Instrument</b> to go to the Instrument master tab. The <b>Instrument</b> master tab appears.</p>
                        <p>2.On the Instrument master screen, click.<img  src='../../image/articel/SDMS/export.png'  className='mx-2 w-auto'/> The file Save As dialog appears.</p>
                        <p>3.In the <b>Save As</b> dialog locate the folder where you want to store the Excel file and then in the <b>File Name</b> box, type a name for the exported file.</p>
                        <p>4.Click <b>Submit.</b> The instrument details are exported to EXCEL as shown in the figure:</p>

                        <h4 className='inner-image'>
                             <img  src='../../image/articel/SDMS/Picture103.png' className='my-3 p-0 w-100'/>  
                        </h4>
                        <p className='figure mt-1 p-0'>FIGURE:- Instrument Master - Export to Excel</p>  
                        <h3 className='pb-3'>Retire Instrument</h3>

                        <p>To retire an instrument, follow these steps:</p>
                        <p> On the main menu, click, and then click  <img  src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/>Base Masters. The <b>Base Masters</b> screen appears. Click <b>Instrument</b> to go to the Instrument master tab. The <b>Instrument</b> master tab appears.</p>
                       <p>On the <b>Instrument</b> master screen, select the instrument and then click  <img  src='../../image/articel/SDMS/retire.png' className='mx-2 w-auto'/></p>
                       <p>In the <b>Confirmation</b> dialog, click Ok. </p>
                       <p>An <b>Audit Trail</b> screen appears for authentication. Type your password, reason and comments appropriately and then click <b>Submit.</b></p>
                       <p>34.Click <b>Submit.</b></p>
                       <p> <b>Note:</b> You cannot retire an instrument if the instrument is locked. You will see a warning message saying “Currently this Instrument is locked, so cannot retire”.</p>
                        <h3 className='pb-3'>Print Instrument Master</h3>
                        <p>To print instrument list, follow these steps:</p>

                        <p>On the main menu, click,<img  src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/> and then click <b>Base Masters.</b> The Base Masters screen appears. Click Client to go to the Client master tab. The <b>Instrument</b> master tab appears.</p>
                        <p>In the <b>Instrument</b> master tab, click. <img  src='../../image/articel/SDMS/print.png' className='mx-2 w-auto'/> The Print screen appears as shown in the figure:</p>

                        <h4 className='inner-image'>
                             <img  src='../../image/articel/SDMS/Picture104.png' className='my-3 p-0 w-100'/>  
                        </h4>
                        <p className='figure mt-1 p-0'>FIGURE:- Print Instrument Master Dialog</p>  
                        <p>In the <b>Print </b>dialog, you can see the print preview of the instrument master on the right side. </p>
                        <p>Click Print to <b>print</b> the instrument list. </p>
                    </section>

                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../addsite'>How to add a Site in SDMS</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../parserkey'>How to set parser key to methods</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>       
        </div>
    );
}

export default AddInstrument; 