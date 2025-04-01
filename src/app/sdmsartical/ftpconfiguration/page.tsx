'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const Ftpconfiguration = () => {
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
                    <button id="btn-back-to-top" onClick={backToTop} style={{ display:'block' }}>
                        <i className="fas fa-arrow-up"></i>
                    </button>
                )}

                <div className='inner-details'>
                    <h1>How to configure FTP for file upload</h1>
                    <section className='articel-content'>
                        <p className='text-left'>Logilab SDMS uploads files captured from the instruments using FTP. The FTP Configuration menu  enables you to create server/disk space and configure the same for file upload. This process consists of the following three steps:</p>
                        <ul>
                            <li className='text-left mt-2 '><p> <i className="fa fa-arrow-right px-3" aria-hidden="true"></i>Server Configuration</p></li>
                            <li className='text-left mt-2 '><p> <i className="fa fa-arrow-right px-3" aria-hidden="true"></i>Drive Configuration</p></li>
                            <li className='text-left mt-2'><p> <i className="fa fa-arrow-right px-3" aria-hidden="true"></i>FTP Configuration</p></li>
                        </ul>

                        <h3 className='text-left mt-5'>Server Configuration</h3>
                        <p className='text-left' >Here you set the server machine for file upload. You need to select the server name and the OS and then provide valid username and password for the server machine access. You can create an active or passive server. However, you can update the status of the server later.</p>

                        <p className='text-left'> <span>1.</span> On the main menu click, On the main menu click,<img src='../../image/articel/SDMS/cloud.png'  className='mx-2 w-auto'/>   and then click <b>FTP Configuration.</b> By default, the <b>Server Configuration</b> tab appears as shown in the figure:</p>
                        <h4 className='inner-image '>
                            <img src='../../image/articel/SDMS/Picture2.png' className='my-3 p-0 w-100' />
                        </h4>
                        <p className='figure mt-1'>FIGURE:  FTP Configuration – Server Configuration Tab</p>
                        <h3 className='text-left mt-5'>Add Server Configuration</h3>
                        <p className='server text-left'>To add a Server Configuration, follow these steps:</p>
                        <p className='text-left'><span>2.</span> In the <b>Server Configuration</b> tab, click.<img src='../../image/articel/SDMS/add.png'  className='mx-2 w-auto'/>  The <b>Add Server Configuration</b> dialog appears as shown in the figure:</p>

                        <h4 className='inner-image m-0 p-0'>
                            <img src='../../image/articel/SDMS/Picture3.png' className='my-3 p-0' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Server Configuration Tab</p>
                        <p className='text-left mt-3'><span>3.</span> In the <b>Server Name</b> field, Type the PC name that you want to use as server.</p>
                        <p className='note'> <b> Note:</b>  If in a network, list of computer names that are connected to the network appears here. In that case, you can select the computer from the list.</p>
                        <p className='text-left'><span>4.</span>From the <b>Server Type</b> field, select the OS name of the server. The server machine may have been installed with dual OS. So you need to mention the OS for the selected server.</p>
                        <p className='text-left'><span>5.</span> In the <b>Server Username</b> field, type the user name for the server.</p>
                        <p className='text-left'><span>6.</span> In the <b>Server Password</b> field, type the password.</p>
                        <p className='note'> <b> Note:</b>  You need to provide valid user name and password that you use to login to the server machine. The same user credentials are validated in the IIS while setting up FTP. Click here to see more information on IIS and Setting up FTP.</p>
                        <p className='text-left'><span>7.</span> Click to select Is <b>Tomcat and FTP located in Same Server </b>check box if the Tomcat and FTP servers are configured in the same machine.</p>
                        <p className='text-left'><span>8.</span> Click to select the <b>Active </b>check box to make this server active.</p>
                        <p className='text-left'><span>9.</span> Click <b>Submit</b> to save the server configuration. </p>
                        <p className='note'> <b>Warning! :</b>  If you click <b>Close</b> before saving will close the FTP Configuration screen without saving the configuration.</p>
                        <h3 className='text-left mt-5'>Edit Server Configuration Details</h3>
                        <p className='text-left' >1.In the <b>Server Configuration</b> tab, select the configuration you wish to update and then click.    <img src='../../image/articel/SDMS/edit.png' className='mx-2 w-auto' />    The Edit Server Configuration dialog appears. Update the configuration details and then click <b>Submit</b> to save the changes.</p>
                        <p className='text-left'> <b>Note</b>: You cannot edit Server Name.:</p>
                        <h3 className='text-left mt-5'>Drive Configuration </h3>
                        <p className='text-left' >Here you select the drive where you can create folders/directories for file upload. Select the server and then select the drive path in the selected server</p>
                        <p className='text-left'><span>1.</span>In the FTP Configuration screen, click    <b>Server Drive Configuration</b> tab. The Server Drive Configuration tab appears as shown in the figure:</p>

                        <h4 className='inner-image '>
                            <img src='../../image/articel/SDMS/Picture67.png' className='my-3 p-0 w-100'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Server Drive Configuration Tab</p>
                        <h3 className='text-left mt-5'>Add Drive Configuration</h3>
                        <p className='server text-left'>To add a Server Configuration, follow these steps:</p>

                        <p className='text-left'><span>1.</span> In the <b>Server Configuration</b> tab, click.<img src='../../image/articel/SDMS/add.png'  className='mx-2 w-auto'/> The <b>Add Server Configuration</b> dialog appears as shown in the figure:</p>
                        <h4 className='inner-image m-0 p-0'>
                            <img src='../../image/articel/SDMS/Picture5.png' className='my-3 p-0' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Server Configuration Tab</p>
                        <p className='text-left mt-3'><span>2.</span>From the <b>Server Name</b> field, select the server name you want to create the disk /drive space.  </p>
                        <p className='note'><b> Note:</b>   Servers that you added in the Server Configuration tab will appear in the Server Name field. Select a server from the list. </p>
                        <p className='text-left'><span>3.</span> In the <b>Server DrivePath</b> type the path of the site that you created in IIS. For example if you have created C:\SDMSFTP Site in IIS, then type the same path here. Or copy and paste the path manually.</p>
                        <p className='text-left'><span>4.</span> In the <b>Port Number</b> field, type the port number for the drive selected.</p>
                        <p className='text-left'><span>5.</span>In the <b>FTP Type</b> field, select <b>FTP / FTPS / SFTP.</b> </p>
                        <p className='text-left note mt-2'> <b>FTPS:</b>  is known as FTP SSL which refers to File Transfer Protocol (FTP) over Secure Sockets Layer (SSL) which is more secure from FTP. FTPS also called as File Transfer Protocol Secure. It refers to basic FTP with security which protects data from any attack by encrypting it so that no one can be able to make use of any information in between transmission at both the ends.</p>
                        <p className='text-left note mt-2'> <b>SFTP</b> is known as SSH FTP which refers to File Transfer Protocol (FTP) over Secure Shell (SSH) which encrypts both commands and data while in transmission. SFTP also called as Secure File Transfer Protocol. It works as an extension to SSH. It encrypts files and data then sends them over a secure shell data stream. This protocol allows to remotely connect to other systems and executing commands from the command line.</p>

                        <p className='text-left'><span>6.</span> Click to select the <b>Active</b> check box to make this drive configuration active..</p>
                        <p className='text-left'><span>7.</span>Click <b>Submit.</b> </p>
                        <h3 className='text-left mt-5'>Edit Server Drive Configuration Details</h3>
                        <p className='text-left'>In the Server Drive Configuration tab, select the drive configuration you wish to </p>
                        <p className='text-left'>update and then click <img src='../../image/articel/SDMS/edit.png'  className='mx-2 w-auto'/>. The <b>Edit Server Drive Configuration</b> dialog appears. Update the drive configuration details and then click <b>Save</b> to save the changes.</p>

                        <p className='text-left'> <b>Note</b>: You cannot edit Server Name.:</p>

                        <h3 className='text-left mt-5'>FTP Configuration</h3>
                        <p className='text-left'>FTP configuration is where you create directories / folders for file upload. The client machines are grouped based on the departments/ sections etc and for each group you can create a directory. For example creating a group R&D enables store files related to the RnD department/group.</p>
                        <p className='text-left'> Select the server and drive and then specify the directory name in the FTP Alias Name and FTP Virtual Directory Name. FTP Alias Name and FTP Virtual Directory Name can be same for the ease of identification.</p>

                        <p className='text-left'> 1.On the <b>FTP Configuration</b> screen, click FTP Configuration tab. The <b>FTP Configuration</b> tab appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img src='../../image/articel/SDMS/Picture6.png' className='my-3 p-0 w-100' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: 45 - FTP Configuration Tab</p>
                        <h3 className='text-left mt-5'>Add FTP Configuration</h3>
                        <p className='server text-left'> To add FTP Configuration, follow these steps:</p>
                        <p className='text-left'> 1.In the <b>FTP Configuration</b> tab, click. <img src='../../image/articel/SDMS/add.png'  className='mx-2 w-auto'/>The <b>Add FTP Configuration</b> dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img src='../../image/articel/SDMS/Picture7.png' className='m-0 p-0' />
                        </h4>
                        <p className='mt-1 figure'>FIGURE: Add FTP Configuration Tab</p>
                        <p className='text-left'>2.From the <b>Server Name</b> field, select the server name you want to create the directory.</p>
                        <p className='text-left'>3.In the <b>Server DrivePath</b> field select the drive where you want to create the directory. For example if you have created C:\SDMSFTP Site in IIS, then select the same path here..</p>
                        <p>4.In the <b>FTP Group Name</b> field, type a name for the group you want to create and then click <b>Check</b>.You can see a message &quot; FTP Server is Connected Successfully&quot; in green.</p>
                        <p className='text-left'>5.By default, the <b>Read</b> and <b>Write</b> options are enabled. If you want, you can disable any of these options as required..</p>
                        <p className='text-left'>6.In the <b>Server Name / IP </b>field, the name or IP address of the server machine appears.</p>
                        <p className='text-left'>7.In the <b>Virtual/Static IP (Optional)</b> field, type IP address of the server.</p>
                        <p className='text-left'>8.In the <b>Port Number</b> field, type the port number that you allotted in the IIS while creating the FTP site for the drive selected. </p>
                        <p className='text-left'>9.Click to select the <b>Active</b> check box to make this drive configuration active. However, you can change the status later.</p>
                        <p className='text-left'>10.Click <b>Check.</b> This checks if the FTP path mentioned is accessible and verifies if the read and write permission for the given path is valid.</p>
                        <p className='text-left'>11.Click <b>Submit.</b> The FTP is added and appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/SDMS/Picture8.png' />
                        </h4>
                        <p className='mt-1 figure'> FIGURE: Added FTP</p>

                        <h3 className='text-left mt-5'>Edit FTP Configuration Details</h3>
                        <p className='text-left'>In the <b>FTP Configuration</b> tab, select the FTP configuration you want to update and then click <img src='../../image/articel/SDMS/edit.png' className='mx-2 w-auto' /> The <b>Edit FTP Configuration</b> dialog appears. Update the configuration details and then click Save to <b>save</b> the changes. </p>

                        <h3 className='text-left mt-5'>FTP Rights</h3>
                        <p className='text-left'> You can define access rights to the user groups to view FTP directories. To do so, follow these steps:</p>

                        <p className='text-left'> 12.On the main menu click, <img src='../../image/articel/SDMS/cloud.png' className='mx-2 w-auto'/> and then click <b>FTP Rights.</b> The FTP User <b>Mapping View </b>screen appears as shown in the figure::</p>
                        <h4 className='inner-image'>
                            <img className='my-3 p-0 w-100' src='../../image/articel/SDMS/Picture68.png'/>
                        </h4>
                        <p className='mt-1 figure'> FIGURE: 48 - FTP User Mapping View Screen</p>
                        <p className='text-left'> 13.You can see list of FTP locations available.</p>
                        <p className=' text-left'> 14.Select an FTP location from the list to map users and then click  <img  src='../../image/articel/SDMS/map.png'  className='mx-2 w-auto'/> . The <b>FTP User Mapping Entry</b> screen appears as shown in the figure:</p>

                        <h4 className='inner-image'>
                            <img className='my-3 p-0' src='../../image/articel/SDMS/Picture69.png' />
                        </h4>
                        <p className='mt-1 figure'> FIGURE:- FTP User Mapping Entry Screen</p>
                        <p className='text-left'> 15.In the <b>FTP Name</b> box, the selected FTP directory appears.</p>
                        <p className='text-left'> 16.In the <b>Group Name </b>box, select the user group you want to map to the FTP directory.</p>
                        <p className='text-left'> 17.Now you can see the selected user group under <b>User Map.</b> Click the check box under <b>Map</b> to select individual user to map. To map all the users in the selected user group, click to select the <b>Select All</b> check box..</p>
                        <p className='text-left'> 18.Click <b>Submit.</b> Users selected from the user group are mapped to the selected FTP directory.</p>
                        <p className='text-left'>In the FTP User Mapping View screen, click <b>Export</b> to export FTP locations to Excel</p>
                        <p className='text-left'>Click Print to <b>print</b> FTP location details</p>
                        <p></p>
                    </section>
                    <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            {/* <h4>Previous article</h4>
                            <Link href="../logbook">Logbook management</Link> */}
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../ftprights">How to define fTP rights</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default Ftpconfiguration; 