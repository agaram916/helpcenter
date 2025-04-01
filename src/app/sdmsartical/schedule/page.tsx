'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const Schedule = () => {
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
                        <li><Link href="../sdmstroublearticle">SDMS Articles</Link></li>
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
                    <h1>How to create a schedule for file upload</h1>
                    <p className='text-left'>The Data Scheduler screen helps you to create a schedule for file upload. For this you have to setup the file path, client and instrument.</p>
                    <p className='text-left'>1.On the main menu, click, and then click <img src='../../image/articel/SDMS/calender.png' className='mx-2 w-auto'/> <b>Data Scheduler</b>. The Data Scheduler screen appears as shown in the figure:.</p>
                 <section className='articel-content'>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture45.png' className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Data Scheduler Screen</p>
                        <p>The Scheduler screen is designed in a way to scroll down to fill up required details. Alternatively, you can also click the tabs to jump to the respective topics.</p>
                        <p>Creating a template consists of the following steps</p>
                        <h2 className='text-left'>1.Setup File, Client, Instrument, Test and Method for the schedule</h2>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture36.png'  className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:File Settings</p>
                        <p>2.In the <b>Client Name </b>field, select the client. Client machines that are added to the Client Master are listed here. You can choose the client for which you want to create a schedule.</p>
                        <p>3.In the <b>Instrument Code</b> field, select the instrument. Instruments that are mapped to the selected client are listed. You can choose the instrument for the schedule. </p>
                        <p>4.Select the <b>Default Parser Method.</b></p>
                        <p>5.The <b>Path Type </b>option is enabled by default.</p>
                        <p>6.In the <b>Source Path </b>field, manually copy and paste the path that you created to store files captured from the instrument selected.</p>
                        <h2 className='text-left'>1.1 Setup Source and destination path for file upload and storage</h2>                    
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture37.png' className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:  UNC Credentials</p>
                        <p>7.Choose any one of the path for file upload: </p>
                        <p> 8. <b>Local Path:</b> Click to select <b>Local Path,</b> In the<b>Source Path </b> field, specify the location where the files are uploaded automatically in the storage server.</p>
                        <p>9. <b>UNC Path:</b> If <b>Source Path </b>is UNC path(remote computer/an instrument), then specify the path in the UNC Path field and provide valid<b>User Name  </b>
                        <p><b>Info:</b> Data is pulled from the UNC Path and stored in the server. </p> and Password for the remote computer/instrument. And then select the <b>Domain</b>. Click <b>Check</b> to verify if the given path and login credentials are valid. </p>
                        <p>10.In the Destination field, select the storage server path to upload the files.</p>
                        <p>11.In the Filter field, type file extensions to filter files separating with comma. For example: *.txt, *.rtf, *.tmf. Files with specified extensions alone will be uploaded. To upload all files type “*.*”.</p>
                        <h2 className='text-left
                        '>1.1.2 Setup Backup policy</h2>
                       <p>Here you specify the folder structure the scheduler has to look for files to backup. You can choose complete tree or specific levels for backup. </p>
                        <h4 className='inner-image'>
                          <img  src='../../image/articel/SDMS/Picture38.png' className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Tag Value</p>
                        <p>12.Click to check the <b>Include Subfolder</b> check box and then do the following:</p>
                        <p>13.By default, the <b>Complete Tree </b>option is enabled when the Include <b>Subfolder</b> option is enabled to instruct the scheduler to look for the files in all the levels. </p>
                        <p>14.If you do not want to look all the levels, then click <b>Level </b>and then type the level number in the field up to which the scheduler has to look for files.</p>
                        <p>15.<b>Click Copy Files </b>to copy files from the source path leaving original files unaffected.</p>                       
                         <p>16.Click <b>Move Permanently </b>to copy the files from the source path and delete the original files.</p>
                         <p>17.Click to enable the <b>Delete Local Copy</b> option and then specify when to delete the local copy of the files. This will delete the local copy of files on the specified date. You can also type number of days/week/months/year and specify the number.</p>
                        <h3>1.1.3 Setup Backup Period</h3>
                         <p>18.Click the <b>Trigger On</b> field to set the date for the scheduler to start. And set the time in the <b>Time</b> field.</p>
                         <p>19.Use the following options appropriately:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture40.png' className='my-3 p-0'/>  
                        </h4>
                        <p className='figure mt-1'>FIGURE:  Setting up Backup Period  Without Data Logger</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture41.png' className='my-3 p-0'/>  
                        </h4> 
                        <p className='figure mt-1'>FIGURE: Setting up Backup Period – With Data Logger</p>
                        <p>20.In the <b>Trigger On</b> field, select the date and time to trigger the schedule automatically. </p>                    
                      <p>21.Click to enable the <b>Expiry Date</b> option to set expiry date for the schedule to expire automatically and then set date and time for the same. </p>
                      <p>22.<b>File Delete Policy</b>File Delete Policy coordinates with delete policy defined in the system and enables to keep the bunch of latest version and delete the older versions.</p>
                      <p>23.<b>Apply Delete Policy for Server Files – Enabling this option applies delete policy to the files stored in server machine also.</b></p>
                      <p>24.<b>Enable file link</b> - Enabling this option creates a link for each file uploaded in the schedule and stored in a table. User can use this link when required.</p>
                      <p>25.Under <b>Compliance Policy</b>, click Enable Version Audit. Enabling this option prompts for authentication from the user whenever there is a new version of the file is generated for the selected file type. In the Audit Filter field, type the file type to audit the specific type or type " *.* " to audit all file types. If Enable Version Audit is enabled, then whenever there is a new version of the file is generated /when you edit a file / rename a file, the File Audit screen appears enabling the user to view the version details and prompts for authentication as shown in the figure:</p>
                      <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture42.png' className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Template</p>
                            <p>26.Click to check the <b>Data Logger</b> check box, to enable create log for every capture from the instrument. You can filter and view captured log in the <b>Data Logger</b> tab.</p>
                            <p>27.In the <b>Archival___Days Older</b> field, type the number of days older the files to be archived. If you type 10 days, then log files older ten days are archived. You can view the archived log files in the Data Logger tab by using the Open <b>Archive option</b>.</p>
                         <h2 className='text-left'>1.1.4 Backup Schedule</h2>
                  
                    <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture43.png' className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'> FIGURE: Template Mapping Tab</p>
                        <p>28.<b>Live Capture </b>is a backup policy enables you to decide whether to maintain a live versioning system (ie. Whenever a file is updated a new version will be created) or the daily version, the final updated version will be maintained as version for the day. </p>
                         <ul>
                            <li className='circle mx-3'>If you do not choose <b>Live Capture</b> option then<b>One time , Daily, Weekly & Monthly or Without Versioning </b>options can be defined for backup. This will version the file based on the option chosen.</li>
                         </ul>

                         <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture44.png' className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Mapping Tab – Configure Dialog</p>
                      <p>29. Click <b>Submit.</b> The scheduler will be activated on the mentioned date and time. And will be running till it expires based on the expiry policy defined.</p>

                      <h3><strong>1.1.5 Extracting File Metadata</strong></h3>
                            <p>The Scheduler Metadata section enables to configure extraction of metadata of the uploaded files. The template is selected and the tags in the template are mapped to the parts of sample file name / folder name in the uploaded file path for extraction. Once extracted, you can also set rules for the extracted tags.</p>
                            <p>To extract file metadata, follow these steps:</p>
                            <ol>
                            <li>In the <strong><strong>Data Scheduler </strong></strong>screen, go to the <strong><strong>Scheduler Metadata </strong></strong> The <strong><strong>Scheduler Metadata </strong></strong>&nbsp;tab &nbsp;appears as shown in the figure:</li>
                            </ol>
                            <h4 className='inner-image'> 
                            <img  src='../../image/articel/SDMS/Picture141.png' className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: - Scheduler Metadata Tab</p>
                            <ol>
                            <li>Click to enable <strong><strong>Enable Scheduler Metadata </strong></strong> The following fields appear:</li>
                            <li>In the <strong><strong>Template Master </strong></strong>field, select the template. Tags from the selected template &nbsp;appears under <strong><strong> TagName</strong></strong>.</li>
                            <li>In the <strong><strong>Delimiter</strong> </strong>field, select an appropriate delimiter to split the file metadata.</li>
                            <li>In the <strong> <strong>Sample Filename</strong> </strong>field, type a sample file name. Using the sample filename the metadata are tagged. For example, in the following sample filename, the parts of the file name are mapped to the tags as follows:</li>
                            </ol>
                            <p> Sample filename: E6345-2022-1.pdf.  </p>
                            <table className='table table-bordered'>
                            <tbody>
                            <tr>
                            <td >
                            <p><strong>File Metadata </strong></p>
                            </td>
                            <td >
                            <p><strong>Tags mapped </strong></p>
                            </td>
                            </tr>
                            <tr>
                            <td >
                            <p><em>E6345</em></p>
                            </td>
                            <td>
                            <p>BatchName</p>
                            </td>
                            </tr>
                            <tr>
                            <td>
                            <p>pdf</p>
                            </td>
                            <td >
                            <p>DataType</p>
                            </td>
                            </tr>
                            </tbody>
                            </table>
                            <p>&nbsp;</p>
                            <p>In the <strong><strong>TagName </strong></strong>&nbsp;field, tags from the selected templates appears. Select a tag, mention where to extract values for the tag, map with the sample filename metadata.</p>
                            <h4 className='text-left'><strong>1.1.5.1&nbsp;</strong><strong><strong>Extract Product Name </strong></strong></h4>
                            <p>To extract <strong><strong>Product Name </strong></strong>, follow these steps:</p>
                            <ol>
                            <li>In the <strong><strong>TagName </strong></strong>field, select <strong><strong>ProductName</strong></strong>. Product Name / Method Name is extracted from the folder name of the <strong><strong>Source Path </strong></strong>&nbsp;that is mentioned in the <strong><strong>File Settings </strong></strong></li>
                            <li>For the <strong><strong>ProductName </strong></strong>tag, In the <strong><strong>Extract From </strong></strong>&nbsp;field, click to select <strong><strong>Folder</strong> </strong>&nbsp;option to extract name from the folder.</li>
                            <li>In the <strong><strong>Metadata </strong></strong>field, type <strong><strong>0</strong> </strong>&nbsp;to extract the name from the parent folder.</li>
                            </ol>
                            <p>To extract the product name / method name from the source path, type <strong><strong>0 </strong> </strong>&nbsp; to extract the parent folder name, type <strong><strong>-1 </strong> </strong>&nbsp;to extract the grandparent folder name. And to get sub folder name, mention <strong><strong>1 </strong></strong>, <strong><strong> 2 </strong></strong>, <strong><strong>3 </strong></strong>&nbsp;etc.</p>
                            <p>&nbsp;For example, in the source path "<em>D:\Anwar\01_Current working\Schedule path\BRABENDER-LABSOLDATA\Analysis</em>"</p>
                            <p>If you specify <strong>0</strong>&nbsp;in the Metadata field, <strong>Analysis</strong>&nbsp;is extracted.</p>
                            <p>If you specify <strong>1</strong>&nbsp; the Metadata field, <strong>BRABENDER-LABSOLDATA</strong>&nbsp; is extracted.</p>
                            <h4 className='text-left'><strong>1.1.5.2&nbsp;</strong><strong><strong> Extract BatchNumber</strong></strong></h4>
                            <p>To extract <strong><strong>BatchNumber</strong></strong>, follow these steps:</p>
                            <ol>
                            <li>In the <strong><strong>TagName</strong></strong> field, select <strong><strong>BatchNumber</strong></strong>.</li>
                            <li>For the <strong><strong>BatchNumber</strong></strong> tag, In the <strong><strong>Extract From</strong></strong>&nbsp;field, click to select <strong><strong>Filename </strong></strong>option<strong><strong>.</strong></strong></li>
                            <li>In the <strong><strong>Metadata</strong></strong>field, click,  <img  src='../../image/articel/SDMS/pencil.png' className='mx-2 w-auto'/>  select <strong><strong>E6345</strong></strong>&nbsp;and then click <strong><strong>Submit</strong></strong>&nbsp;as shown in the figure:</li>
                            </ol>
                            <h4 className='inner-image'>
                              <img  src='../../image/articel/SDMS/Picture142.png' className='p-0 my-3 w-75'/> 
                             </h4>
                     <p className='figure m-0 p-0'>FIGURE - Extracting BatchNumber</p>
                            <h4 className='text-left'><strong>1.1.5.3&nbsp;</strong><strong><strong> Extract DataType</strong></strong></h4>
                            <p>To extract <strong><strong> BatchNumber</strong></strong>, follow these steps:</p>
                            <ol>
                            <li>In the <strong><strong> TagName</strong></strong> field, select <strong><strong> DataType</strong></strong>.</li>
                            <li>For the <strong><strong> DataType</strong></strong> tag, in the <strong><strong> Extract From</strong></strong>&nbsp;field, click to select <strong><strong> Filename</strong></strong></li>
                            <li>In the <strong><strong> Metadata</strong></strong> field, click&nbsp;and then select <strong><strong>pdf</strong></strong>&nbsp;and then click <strong><strong> Submit</strong></strong>&nbsp;as shown in the figure:</li>
                            </ol>
                            <h4 className='inner-image'>
                              <img src='../../image/articel/SDMS/sdmspicture.png' className='p-0 my-3 w-100'/> 
                             </h4>
                            <p className='mt-1'>FIGURE: 61 - Extracting DataType</p>
                            <h3><strong>1.1.6&nbsp;</strong><strong><strong> Set Rules to the Extracted Metadata</strong></strong></h3>
                            <p>You can set rules to the extracted metadata. For example, for the DataType tag, the .vsu and .pdf values are extracted. Let's set following rules to the DataType tag.</p>
                            <ul>
                            <li>If the extracted file extension is <strong>.vsu </strong>then the metadata should be <strong>rawdata</strong>.</li>
                            <li>If the extracted file extension is <strong>.pdf </strong>then the meta data should be <strong>report</strong>.</li>
                            </ul>
                            <ol>
                            <li>In the <strong><strong>Scheduler Metadata </strong></strong> tab, under <strong><strong>Rule</strong></strong>, in the <strong><strong>rulename </strong></strong>&nbsp;field, select the tag for which you want to set the rule.</li>
                            <li>In the <strong><strong>TagName </strong></strong> field, select the tag to set the rule.</li>
                            <li>In the <strong><strong>Relational Operator</strong></strong> field select the operator.</li>
                            <li>In the <strong><strong>Field Value</strong></strong> field, type the file extension that is extracted. For example, <strong><strong>.vsu </strong></strong>&nbsp;</li>
                            <li>In the <strong><strong>Metadata</strong></strong> field, type <strong><strong>raw data</strong></strong>&nbsp;and then click <strong><strong> Add </strong></strong>&nbsp;as shown in the figure:</li>
                            </ol>
                        <h4 className='inner-image'>
                           <img  src='../../image/articel/SDMS/Picture143.png'  className='p-0 my-3 w-100'/> 
                         </h4>
                       <p className='figure m-0 p-0'>FIGURE:- Setting Rule for the Extracted Metadata</p>

                            <p>&nbsp;Same way, you can add rule for the .pdf extension. Once added, the added rules appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                          <img  src='../../image/articel/SDMS/Picture144.png'  className='p-0 my-3 w-100'/> 
                         </h4>
                       <p className='figure m-0 p-0'>FIGURE:- Rules Set</p>
                            <ol start={14}>
                            <li>Activate the scheduler.</li>
                            <li>In the <strong><strong>Server Data</strong></strong> tab, select the folder and select the file uploaded. In the <strong><strong> Tags &amp; Parsed Data </strong></strong>tab you can see the metadata of the file as set in the rule section. &nbsp;</li>
                            <li>If the extracted file extension is.<strong><strong>pdf </strong></strong>, then the value appears as <strong><strong>Report</strong></strong> as shown in the figure:</li>
                            </ol>
                        <h4 className='inner-image'>
                            <img  src='../../image/articel/SDMS/Picture145.png'  className='p-0 my-3 w-100'/> 
                         </h4>
                       <p className='figure m-0 p-0'>FIGURE:- Data Explorer - Tags & Parsed Data Tab Rule Applied 1</p>
                            <ol start={17}>
                            <li>If the extracted file extension is <strong><strong>.pdf </strong></strong>, then the value appears as <strong><strong>Report</strong></strong> as shown in the figure:</li>
                            </ol>
                            <h4 className='inner-image'>
                              <img  src='../../image/articel/SDMS/Picture146.png' className='p-0 my-3 w-100'/> 
                           </h4>
                       <p className='figure mt-1 '>FIGURE:- Data Explorer - Tags & Parsed Data Tab Showing Rule Applied 2</p>
                            <ul>
                            <li>Here the <strong> <strong>Product_Name </strong></strong> is &nbsp;extracted from &nbsp;the parent folder name.</li>
                            <li>Batch_Number is extracted from the sample file name.</li>
                            <li>The Data_Type is extracted from the filename extension.</li>
                            </ul>
                            <h4 className='text-left'><strong>1.1.6.1&nbsp;</strong><strong><strong> Rule applied: </strong></strong></h4>
                            <ul>
                            <li>If the extracted file extension is <strong>.vsu</strong> then the metadata is <strong>rawdata</strong>.</li>
                            <li>If the extracted file extension is <strong>.pdf</strong> then the meta data is <strong>report</strong>.</li>
                            </ul>
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../lockinstruments'>lock instruments</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../editschedule'>edit schedules</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
             <Help/>        
        </div>
    );
}

export default Schedule; 