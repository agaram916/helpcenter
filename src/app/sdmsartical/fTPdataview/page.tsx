'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const FTPDataView = () => {
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
                    <h1>Logilab SDMS -FTP Data View</h1>
                    <section className='articel-content'>
                    <h3 className='pb-3 mt-3'>1.1Server Data Tab</h3>
                    <p className='text-left'>Here you see the list of files uploaded in the storage server for the selected client/group as shown in the figure:</p>    
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture70.png'  className='my-3 p-0 w-75'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:-Server Data Tab</p>
                      
                            <ul>
                               <li className='circle mx-3'>You can also filter files based on Client, Instrument, Record Duration, Task Status and/or Workflow Status as shown in the above figure. </li>
                               <li className='circle mx-3'>In the <b>Task Status</b> field select All / Active / Deactive / Retire. Based on the selected status the files are fetched as shown in the figure: </li>
                            </ul>

                            <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture71.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:- Filter Files Based on Task Status</p>

                        <ul>
                               <li className='circle mx-3'>Files highlighted in green are active files.  </li>
                               <li className='circle mx-3'>Files highlighted in orange are deactivated files. </li>
                               <li className='circle mx-3'>Files highlighted in red are retired files. </li>
                               <li className='circle mx-3'>The Configuration button helps you to customize by enabling/disabling following filters and actions in the data explorer. </li>                              
                            </ul>

                        <table className="table">
                        <thead>
                            <tr>
                            <th>Filters</th>
                            <th>Action Controls</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Instrument</td>
                            <td>Open</td>
                            </tr>
                            <tr>
                            <td rowSpan= {12} >Workflow Status</td>
                            <td>File Download</td>                        
                            </tr>
                            <tr>
                            <td>Restore</td>
                            </tr>
                            <tr>
                            <td>Folder Download</td>
                            </tr>
                            <tr>
                            <td>File Upload</td>
                            </tr>
                            <tr>
                            <td>Folder Upload</td>
                            </tr>
                            <tr>
                            <td>Workflow History</td>
                            </tr>
                            <tr>
                            <td>Tag</td>
                            </tr>
                            <tr>
                            <td>Audit Trail History</td>
                            </tr>
                            <tr>
                            <td>Attribute</td>
                            </tr>

                        </tbody>
                        </table>
                        <ul>
                               <li className='circle mx-3'>All folders for the selected FTP location appear on the left panel. Double-click a folder and you can see the list of files in the folder on the center panel. Based on the file type (Image / audio / video), appropriate file icons appears as shown in the above figure. </li>
                               <li className='circle mx-3'><b>Version History:</b> The Version History option enables the user to view list of versions of the file. For every change, a new version of the file is stored in the server as shown in the figure:. </li>
                               <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture72.png'  className='my-3 w-100'/> 
                        </h4>
                        <p className='figure mt-1 text-center'>FIGURE:-Server Data Tab – Version History Option</p>  

                        <li className='circle mx-3'>Meta data of the selected file appears in the right panel. In the File information tab you can see the basic information of the file. And the Share Link that appears here helps you to share the file with other users. Copy the link and share it with other user. This link helps the user to view (only) the file content. If you are not able to view the file, you can also use the <b>File Download</b> option to download the file. The share link appears as shown in the figure: 
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture73.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:- Server Data Tab – Share link Option</p> 
                        <p><b>File Download:</b> Select a file and then click <b>File Download.</b> the selected file is downloaded to the local storage as a zip file as shown in the figure:</p>
                    
                        Open the zip file. You can see the file downloaded along with the Audit trail history and version history as shown in the figure:
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture74.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:- Server Data Tab - File Downloaded with Audit Trail History and Version History</p>

                        </li>

                        <li className='circle mx-3'> <b>Manual File Upload:</b> You can upload file manually by using the File Upload option as shown in the figure:</li>

                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture75.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:- Server Data Tab - File Upload Option</p>

                        <li className='circle mx-3'>Workflow History: Based on the user group, user and team workflow configured, the data will be verified. For example, the first user saves the data with work completed status. The reviewer reviews the data and finally the approver verifies the data. The current status of the file appears in the File Information tab as shown in the figure:</li>

                        <li className='circle mx-3'>In the <b>File Viewer</b> tab you can see the file content. i.e. Text / Image / Audio / Video. The file content appears as shown in the figure:</li>

                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture76.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:– File Viewer Tab</p>
                        <li className='circle mx-3'>In the <b>Tags and Parsed Data</b> tab, you can view the tag details and parsed data of the selected file. The <b>Tags and Parsed Data</b> tab appears as shown in the figure::</li>

                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture78.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:- Tags & Parsed Data Tab</p>

                         </ul>



                        <p>1.If multiple fields are parsed then you can click Multi-Fields to view parsed fields. The Multi-Fields dialog appears as shown in the figure:</p>
                                
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture79.png'  className='my-3 p-0'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE – Multi Fields Dialog</p>
                        <p>2.Click Export to <b>Export</b> parsed fields to Excel sheet</p>
                     
                       <h3 className='pb-3'>1.1.1Search Server Data</h3>
                        <p>The Search Server Data tab enables you to search records based on File, Tag and Parameter. You can search based on the selected field(s), records duration and by selecting the relational operator.</p>

                        <p>1.On the main menu, click, <img  src='../../image/articel/SDMS/book.png'  className='mx-2 w-auto'/>  <b>FTP Data View</b>, and then click Search Server Data. The <b>Search Server Data</b> tab appears as shown in the figure:</p>
                        <p>6.Click <b>Save..</b></p>

                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture80.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:- Search Server Data Tab</p>
                        <h3 className='pb-3'>Search Server Data By File</h3>     
                        <p>1.Click to select the  <b>By File</b> option as shown in the above figure and then click Filter. The <b>By File</b> filter screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture81.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: 13k - By File Filter Screen</p>
                        <p> 2.In the <b>By File</b> filter screen, fill in the following fields appropriately. You can fill in fields whichever is required.</p>
                        <p>3.In the <b>Records Duration</b> field, select duration to fetch records.</p>
                        <p>4.In the <b>Date Category </b>field, select the date category to fetch records.</p>
                        <p>5.In the <b>Client Name</b> field, select the client..</p>
                        <p>6.In the <b>Instrument Name</b> field, select the instrument.</p>
                        <p>7.In the <b>File Type</b> field, select file type.
                       </p>
                       <p> 8.in the <b>Size</b> &gt; =, field, select the operator. For example,  &gt;, &lt;/,= </p>
                    <p>9.In the <b>File Name</b> field, type the file name to fetch records</p>
                    <p>10.Click to check the Save Filter check box to save the filter</p>
                    <p>11.Click <b>Submit.</b></p>
                      
                    <h3 className='pb-3'>1.1.1.2Search Server Data By Tag</h3>
                    <p>1.In the Search Server Data screen, click to select the <b>By Tag </b>option as shown in the above figure and then click <b></b>Filter. The By Tag filter screen appears as shown in the figure:</p>

                    <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture82.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:- By Tag Filter Screen</p> 
                    <p>2.In the <b>By Tag</b> filter screen, fill in the following fields appropriately. You can fill in fields whichever is required.</p>
                    <p>3.In the <b>Records Duration</b> field, select duration to fetch records.</p>
                    <p>4.In the <b>Client Name</b> field, select the client.</p>
                     <p>5.In the Instrument Name field, select the instrument.</p>
                     <p>6.In the <b>File Type</b> field, select file type.</p>
                
                     <p>7...Click to check the <b>Template</b> check box to select a template. And then select the template from the list. Tags that are available in the selected template appears below as shown in the above figure. Select the tag </p>
                   <p>Click to check the <b>Save Filter</b> check box to save the filter.</p>
                    <p>9.Click <b>Submit</b>. Records matching the selected tag and other search criteria are fetched and appears as shown in the figure:</p>

                        
                    <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture83.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE – Server Data Fetched - By Tag Filtern</p> 
                <h3 className='pb-3'>1.1.1.3Search Server Data By Parameter</h3>
                <p>1.In the Search Server Data screen, click to select the <b>By Parameter </b>option and then click <b>Filter</b>. The <b>By Parameter </b>filter screen appears as shown in the figure:</p>

                <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture84.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                    <p className='figure mt-1'>FIGURE:- By Parameter Filter Screen</p> 
                    <p>2.In the <b>By Parameter</b> screen, in the <b>Records Duration</b> field, select duration to fetch records.</p>
                    
                    <p>3.In the <b>Field Name </b>field, click  <img src='../../image/articel/SDMS/Pencil.png' className='mx-2 w-auto'/>  and then select the field to search. Click <img  src='../../image/articel/SDMS/addplus.png' className='mx-2 w-auto'/> to add more fields to the filter.</p>

                    <p>4.In the <b>Relational Operator</b> field, click <img  src='../../image/articel/SDMS/Pencil.png' className='mx-2 w-auto'/> and then select the operator. For example, = &gt;, &lt;,etc.</p>
                    <p>5.In the <b>Field Value</b> field, type the value.</p>
                    <p>Click to check the <b>Save Filter</b> check box to save the filter setting.</p>
                    <p>Click <b>Submit.</b> The <b>Save Filt</b>er dialog appears as shown in the figure</p>

                    <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture85.png'  className='my-3 p-0'/> 
                        </h4>
                    <p className='figure mt-1'>FIGURE: – Save Filter Dialog</p> 
                    <p>8.In the <b>Filter Name</b> field, type a name for the filter you want to save and then click <b>Submit.</b> The chart view of the filtered server data appears as shown in the figure:</p>

                    <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture86.png'  className='my-3 p-0'/> 
                        </h4>
                    <p className='figure mt-1'>FIGURE:– Multi Fields Chart View</p> 




                     <p>9.Click. <img  src='../../image/articel/SDMS/grid.png' className='mx-2 w-auto'/> The grid view of the filtered server data appears as shown in the figure:</p>

                     <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture87.png'  className='my-3 p-0'/> 
                        </h4>
                    <p className='figure mt-1'>FIGURE:– Multi Fields Grid View</p> 
                            <ul>
                                <li className='circle mx-3'>For more information on FTP Group, refer <a>FTP Configuration.</a> </li>
                                <li>For more information about Clients refer <b>Client Master.</b></li>
                            </ul>
                     <h3 className='pb-3'>1.1.2Action Controls</h3>

                        <ul>
                            <li className='circle mx-3'><b>Open </b>Select a folder in the center panel and then click <b>Open</b> to view its contents.</li>
                            <li className='circle mx-3'><b>File Download</b> - Select a file in the center panel and then click <b>File Download</b> to download the file to the local computer.</li>
                            <li className='circle mx-3'><b>Restore</b> – Restores the file to the source location (client) from where the file is initially uploaded..</li>

                            <li className='circle mx-3'><b>File Upload</b> – Enables to upload files manually.</li>
                            <li className='circle mx-3'><b>Folder Upload</b> – Enables upload folders manually.</li>
                            <li className='circle mx-3'><b>Folder Upload</b> – Enables upload folders manually.</li>
                            <li className='circle mx-3'><b>Work Complete</b> – Helps to change the status of the file. Once the work is completed, select a file and click <b>Work Complete.</b> The <b>Electronic Signature</b> screen appears. Type your password, in the Decision box, select the status i.e Work Completed, in the <b>Comments</b> box, type comments and then click <b>Submit.</b> Now the record/file will go to the Review stage.</li>

                            <li className='circle mx-3'> <b>Workflow History</b> – Select a file and click Workflow History. Details of workflow stages the file passed through will appear in the Workflow History screen.</li>
                        
                            <li className='circle mx-3'><b>Tag</b> – Enables view and update tag details for the selected file. </li>
                            
                            <li className='circle mx-3'><b>Tag</b> – Enables view and update tag details for the selected file. </li>
                            <li><b>Multi-File Select</b> – This option helps to change status of the multiple files in the workflow. In the Server Data Tab click Multi-File Select as shown in the figure:</li>
                            <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture88.png'  className='my-3 p-0'/> 
                        </h4>
                    <p className='figure mt-1'>FIGURE:- Multi-File Select </p> 
                        <p>The Workflow Status screen appears as shown in the figure:</p>

                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture89.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                    <p className='figure mt-1'>FIGURE:– Updating Status of Multiple Files	 </p> 
                    <li>Follow the on screen instructions to update status of multiple files.</li>

                    <li className='circle mx-3'> <b>Audit Trail History:</b> Enables view audit trail history of the server data as shown in the figure:</li>
                            
                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture90.png'  className='my-3 w-100'/> 
                        </h4>
                    <p className='figure mt-1'>FIGURE: 13t - Audit Trail History</p> 
                    <p className="circle mx-3"><b>Attribute:</b> Enables view attributes of the selected record/document as shown in the figure:</p>
                        </ul>
   
                    <h3 className='pb-3'>1.2Template View Tab</h3>
                    <p>When a file is received from an instrument, the file is filtered and captured based on the template parameters set in the Instrument lock screen. And the files are listed with the tag values as shown in the figure</p>
                    <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture91.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                    <p className='figure mt-1'>FIGURE:Template View Tab</p> 
                    <p>You can also double-click the file from the list to open to view the contents as shown above.</p>
                    <p>Instrument Lock helps in linking metadata from the template tags. Before capturing data from an instrument, user can lock the instrument with specific combination of tags. These tags are automatically linked to the next data capture from instrument. The <b>Template Data</b> tab helps in viewing the server data based on the templates. This gives a more meaningful view for the data captured from instruments. For example: A quality control analyst will be interested in viewing data based on product&gt; test&gt;batch#. To know more about instrument lock, refer Instrument Lock and Tags</p>

                    <h3 className='pb-3'>1.3 Data Logger Tab</h3>   
                    <p>The Data Logger tab enables filter and view captured file log based on the FTP Group, Client, Instrument and specified date range. You can filter file log based on the Data Type: Alarm / Reading / Both and Channel: A1/ B1/A2/B2/All. The Data Logger tab appears as shown in the figure:</p>
                    <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture92.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                    <p className='figure mt-1'>FIGURE:- Data Logger Tab Showing Log in Grid</p> 
                    <p> <b>Note:</b> Data Logger feature is applicable only for interfacer mapped instruments.If the <b>Data Logger</b> checkbox in the <b>Scheduler</b> screen is checked, then for every capture from the instrument, log is created and stored in the specified path. <b>Auto Refresh:</b> If you enable the <b>Auto Refresh</b> option, the log screen is refreshed with new entry for every capture from the instrument. 
                    </p>
                    <h3 className='pb-3'>Chart View</h3>
                    <p>By default, the Data Logger screen appears in the grid. You can click  to view log in the chart form for all data types: Alarm / Reading / Both and for the selected channel as shown in the figure:</p>
                    <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture93.png'  className='my-3 p-0 w-100'/> 
                        </h4>
                    <p className='figure mt-1'>FIGURE:- Data Logger Tab Showing Log in Chart for the Selected Data Type and Channel</p>

                    <h3 className='pb-3'>Open Archive</h3>
                    <p>Data log can be archived if the same is mentioned in the scheduler. Click <img  src='../../image/articel/SDMS/open.png' className='mx-2 w-auto'/>  to view the log in the archive. The Open Archive screen appears as shown in the figure:</p>
                    <p>To view the archive in the chart click  <img  src='../../image/articel/SDMS/chart.png' className='mx-2 w-auto'/> . The chart view appears as shown in the figure:</p>

                    <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture94.png'  className='my-3 w-100'/> 
                        </h4>
                    <p className='figure mt-1'>FIGURE:- Data Logger Tab Showing Log in the archive – Chart View</p>
                     </section>
                     <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../ftprights'>How to define fTP rights</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../addsite'>How to add a site in sdms</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default FTPDataView; 