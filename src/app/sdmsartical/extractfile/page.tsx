'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";

const ExtractFile = () => {
    const { showButton, backToTop, isFixed }=useScrollButton();
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
                    <h1>How to extract file metadata</h1>
                    <p className='text-left'>The Scheduler Metadata section enables to configure extraction of metadata of the uploaded files. The template is selected and the tags in the template are mapped to the parts of sample file name / folder name in the uploaded file path for extraction. Once extracted, you can also set rules for the extracted tags. </p>
                    <p className='text-left'>To extract file metadata, follow these steps:</p>
                    <section className='articel-content'>
                    <p className='text-left'>1.In the<b>Data Scheduler</b> screen, go to the <b>Scheduler Metadata</b> tab. The <b>Scheduler Metadata</b> tab  appears as shown in the figure:</p>
                     <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture49.png'  className='my-3 p-0 w-100'/> 
                     </h4>
                        <p className='figure mt-1'>FIGURE: Scheduler Metadata Tab</p>
                        <p> 2.Click to enable <b>Enable Scheduler Metadata</b> option. The following fields appear:</p>
                        <p>3.In the <b>Template Master</b> field, select the template. Tags from the selected template  appears under <b>TagName</b></p>
                        <p>4.In the<b>Delimiter </b> field, select an appropriate delimiter to split the file metadata.</p>
                        <p>In the Template Master field, select the template. Tags from the selected template  appears under TagName</p>
                        <p className='figure mt-1'>FIGURE: View Edit Scheduler Screen  Activated Task Tab</p>
                        <p>5.In the<b>Sample Filename </b> field, type a sample file name. Using the sample filename the metadata are tagged. For example, in the following sample filename, the parts of the file name are mapped to the tags as follows:</p>
                        <p>Sample filename: E6345-2022-1.pdf. </p>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">File Metadata</th>
                                <th scope="col">Tags mapped </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">E6345</th>
                                <td>BatchName</td>
                                </tr>
                                <tr>
                                <th scope="row">pdf</th>
                                <td>DataType</td>
                                </tr>
                            </tbody>
                            </table>
                            <p>In the <b>TagName </b>field, tags from the selected templates appears. Select a tag, mention where to extract values for the tag, map with the sample filename metadata.</p>
                            <h2 className='text-left'>1.1 Extract Product Name</h2>
                            <p>To extract <b>Product Name,</b> follow these steps:</p>
                            <p>1.In the TagName field, select ProductName. Product Name / Method Nameis extracted from the folder name of the Source Path that is mentioned in the File Settings tab.</p>
                            <p>2.For the ProductName tag, In the Extract From field, click to select Folder option to extract name from the folde</p>
                            <p>3.In the Metadata field, type 0 to extract the name from the parent folder.</p>
                            <p>To extract the product name / method name from the source path, type 0 to extract the parent folder name, type -1 to extract the grandparent folder name. And to get sub folder name, mention 1, 2, 3 etc.</p>
                            <p> For example, in the source path "D:\Anwar\01_Current working\Schedule path\BRABENDER-LABSOLDATA\Analysis" </p>
                            <p>If you specify 0 inthe Metadata field, <b>Analysis</b> is extracted.</p>
                            <p>If you specify 1 the Metadata field, <b>BRABENDER-LABSOLDATA </b>is extracted.</p>
                            <h2 className='text-left'>1.2 Extract BatchNumber</h2>
                            <p>To extract <b>BatchNumber,</b> follow these steps:</p>
                            <p>1.In the TagName field, select BatchNumber.</p>
                            <p>2.For the <b>BatchNumber</b> tag, In the<b> Extract From </b>field, click to select <b>Filenameoption.</b></p>
                            <p>3.In the<b>Metadata</b>  field, click <img  src='../../image/articel/SDMS/Pencil.png '  className='mx-2 w-auto'/> , select <b>E6345 </b>and then click <b>Submit</b> as shown in the figure:</p>
                          
                        <h4 className='inner-image'>
                          <img  src='../../image/articel/SDMS/Picture50.png ' className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Extracting BatchNumber</p>
                        <h2 className='text-left'>1.3 Extract DataType </h2>
                        <p>To extract <b>BatchNumber</b>, follow these steps:</p>
                        <p>1.In the <b>TagName</b> field, select <b>DataType.</b> </p>
                        <p>2.In the TagName field, select DataType. </p>
                        <p>1.In the TagName field, select DataType. </p>
                        <p> 3.In the<b>Metadata</b>  field, click <img  src='../../image/articel/SDMS/Pencil.png ' className='mx-2 w-auto' /> , select <b>E6345 </b>and then click <b>Submit</b> as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture51.png ' className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Extracting DataType</p>


                         <h2 className='text-left'>1.4 Set rules to the extracted metadata </h2>
                        <p>You can set rules to the extracted metadata. For example, for the DataType tag, the .vsu and .pdf values are extracted. Let's set following rules to the DataType tag.</p>
                        <ul>
                            <li className='disc mx-3'> If the extracted file extension is .<b>vsu</b> then the metadata should be <b>rawdata.</b></li>
                            <li className='disc mx-3'> If the extracted file extension is .<b>pdf</b> then the meta data should <b>bereport.</b></li>
                        </ul>
                        <p>1.In the  <b>Scheduler Metadata</b> tab, under <b>Rule,</b> in the <b>rulename</b> field, select the tag for which you want to set the rule </p>
                        <p>2.In the <b>TagName</b> field, select the tag to set the rule.</p>
                        <p>3.In the <b>Relational Operator</b> field select the operator. </p>
                        <p>4.In the <b>Field Value</b> field, type the file extension that is extracted. For example, <b>.vsu</b></p>
                        <p>5.In the <b>Metadata</b> field, type <b>rawdata</b> and then click <b>Add</b> as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture52.png ' className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Setting Rule for the Extracted Metadatae</p>
                        <p>Same way, you can add rule for the .pdf extension. Once added, the added rules appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture53.png ' className='my-3 p-0 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Rules Set</p>
                        <p>6.Activate the scheduler.</p>
                        <p>7.In the <p>Server Data</p> tab, select the folder and select the file uploaded. In the <b>Tags & Parsed Data </b>tab you can see the metadata of the file as set in the rule section.  </p>
                      <p>8.If the extracted file extension is<b>.pdf,</b> then the value appears as<b> Report</b> as shown in the figure:</p>
                       <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture54.png ' className='my-3 p-0 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Data Explorer - Tags & Parsed Data Tab Rule Applied t</p>
                        <ul>
                         <li className='disc mx-3'>Here the <b>Product_Name </b>is  extracted from the parent folder name.</li>
                            <li className='disc mx-3'> <b>Batch_Number</b> is extracted from the sample file name</li>
                            <li className='disc mx-3'> The <b>Data_Type</b> is extracted from the filename extension.</li>
                        </ul>
                        <h2 className='text-left'>1.5 Rule applied:</h2>     
                        <ul>
                            <li className='disc mx-3'>If the extracted file extension is <b>.vsu</b> then the metadata is <b>rawdata.</b></li>
                            <li className='disc mx-3'>If the extracted file extension is <b>.pdf</b> then the meta data is <b>report.</b></li>
                        </ul>
                     </section>
                     <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                          <h4>Previous article</h4>
                            <Link href='../editschedule'>edit schedules</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../downloadscheduler'>Download Scheduler</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Help/>        
        </div>
    );
}

export default ExtractFile; 