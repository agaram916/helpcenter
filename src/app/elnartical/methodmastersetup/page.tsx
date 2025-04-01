'use client';
import React, { useState, useEffect} from 'react';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const Methodmastersetup = () => {
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
                <h1><strong>Logilab ELN - Method Master&nbsp;Setup</strong></h1>
                    <section className='articel-content'>                   
                        <p>Method master screen helps to add, edit and retire methods. You can select instrument for the method and add the raw data file to be parsed.</p>
                        <h3>1.1.1&nbsp;Adding a Method</h3>
                        <ol>
                        <li>On the main menu click <strong><strong> Method Setup </strong></strong> and then click <strong><strong> Method Master</strong></strong>The <strong><strong> Method Master </strong></strong>screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture55.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Method Master Screen</p>
                        <p>In the Method master screen, you can see the list of methods added. &nbsp;</p>
                        <ol>
                        <li>Click <strong><strong>Add</strong></strong>. The add method screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture56.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Add Method Screen</p>
                        <ol start={2}>
                        <li>In the <strong><strong>Method Name</strong></strong>field, type the method name you want to add.</li>
                        <li>In the <strong><strong>Instrument Name</strong></strong>field, select the instrument for the method. Only instruments with <strong><strong>the Instrument Used</strong></strong>&nbsp;option enabled will appears here.</li>
                        <li>In the <strong><strong>File Name</strong></strong>field, add the raw data file to be parsed. Click <strong><strong>Choose File</strong></strong>, in the <strong><strong>Open</strong></strong>&nbsp;file dialog locate the raw data file and then click <strong><strong>Open</strong></strong>.</li>
                        <li>Click <strong><strong>Submit</strong></strong>.</li>
                        </ol>
                        <p>&nbsp;The method is added to the method master. Once you add the method you can see that the <strong><strong>Sample Split</strong></strong>&nbsp;and <strong><strong>Parser Setup</strong></strong>&nbsp;fields appear as blank until you setup sample split and parser setup using the options as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture57.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Method Master Sample Split and Parser Setup Options</p>
                        <h2>1.1&nbsp;Sample Split</h2>
                        <p>Sample split option enables remove or exclude unwanted data / data blocks from the raw data to enable parsing. You can mark header and footer, remove unwanted data blocks and extract required data from the raw data file.</p>
                        <p>To sample split the raw data, follow these steps:</p>
                        <ol>
                        <li>In the Method master screen, select a method, click <strong><strong>Method</strong></strong>and then click <strong><strong>Sample Split</strong></strong>&nbsp;as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture58.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Using Sample Split Option</p>
                        <p>The <strong><strong>Sample Split</strong></strong>&nbsp;screen appears as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture59.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Sample Split Screen</p>
                        <p>The raw data is loaded from the file. You can use the following options to mark header, footer, remove unwanted data/blank space, mark data blocks etc.</p>
                        <p><strong><strong>Header</strong></strong>: Define the header. Select data for header.</p>
                        <p><strong><strong>Footer</strong></strong>: Define the footer, Select data for footer.</p>
                        <p><strong><strong>Remove</strong></strong>: Remove unwanted data/data blocks from raw data</p>
                        <p><strong><strong>Extract</strong></strong>: Mark data blocks to enable parser setup.</p>
                        <h3>1.1.1&nbsp;Marking Header / Footer / Removing Unwanted Data and Extracting Required Data</h3>
                        <p>You can mark header / Footer / data to be removed and data to be extracted in the raw data file using any one of the following methods:</p>
                        <h4>1.1.1.1&nbsp;Lines between begin and end text.</h4>
                        <ol>
                        <li>Select begin text and then click <strong><strong>Get </strong></strong>to mark the beginning of the text. Select end text and then click <strong><strong>Get</strong></strong>to mark end of data.</li>
                        <li>Click to select <strong><strong>Repeat</strong></strong>option to extract data for each occurrence/page.</li>
                        </ol>
                        <h4>1.1.1.2&nbsp;Top and bottom lines from center text</h4>
                        <ol>
                        <li>Select a text, and then click <strong><strong>Get</strong></strong> that appears near <strong><strong> the Center Text</strong></strong></li>
                        <li>Then type number of top lines and number of bottom lines to be extracted as header/footer/remove/ data from the selected center line.</li>
                        <li>In the <strong><strong> Top Lines</strong></strong> field type number of lines to be selected from the current line.</li>
                        <li>In the <strong><strong> Bottom-Line</strong></strong> field type number of lines to be selected from the current line</li>
                        <li>Click to select <strong><strong> Repeat</strong></strong> option to extract selected header for each occurrence/page.</li>
                        <li>Click to check the <strong><strong>Exclude</strong></strong> option to exclude the center line. When this option is selected, the top and bottom lines mentioned are extracted/removed except the center line.</li>
                        <li>Clickto  <img  src='../../image/articel/eln/header.png' className='mx-2 w-auto'/>  switch between header/footer/removed data/extracted data as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture60.png' className='my-3'/> 
                        </div>   
                        <p className='figure mt-1'>FIGURE: Switch between Header / Footer / Raw Data / Removed Data</p>
                        <h3>1.1.2&nbsp;Marking Header</h3>
                        <p>Follow the onscreen instructions to mark header in the raw data:</p>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture61.png' className='my-3 w-100'/> 
                        </div> 
                        <p className='figure mt-1'>FIGURE: Sample Split &ndash; Marking Header</p>
                        <h3>1.1.3&nbsp;Marking Footer</h3>
                        <p>Follow the onscreen instructions to mark footer in the raw data:</p>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture62.png' className='my-3 w-100'/> 
                        </div>
                        <p className='figure mt-1'>FIGURE: Sample Split &ndash; Marking Footer</p>
                        <h4>1.1.3.1&nbsp;Removing Unwanted Data from Raw Data</h4>
                        <p>You can remove unwanted data and blank lines from the raw data. To do so, follow these steps:</p>
                        <ol>
                        <li>To remove the highlighted text and blank lines in the top and bottom of the text as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture63.png' className='my-3'/> 
                        </div>
                        <p className='figure mt-1'>FIGURE: Removing unwanted Data and Blank Lines 1</p>
                        <p>Follow the onscreen instructions:</p>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture64.png' className='my-3 w-100'/> 
                        </div>
                        <p className='figure mt-1'>FIGURE: Removing unwanted Data and Blank Lines 2</p>
                        <ol start={8}>
                        <li>Same way, you can mark to remove other unwanted data and blank lines in the raw data file.</li>
                        <li>You can edit or delete the mark if required.</li>
                        <li>After marking all data and blank lines to remove, click   <img  src='../../image/articel/eln/footer.png' className='mx-2 w-auto'/> and then select <strong><strong>Updated Data</strong></strong>. Data after removing the unwanted data and blank lines appears.</li>
                        </ol>
                        <h4>1.1.3.2&nbsp;&nbsp;Marking Data Blocks</h4>
                        <ol>
                        <li>You can extract data blocks. If you have marked the header and footer, then the header and footer will appear as data blocks. In addition, you can mark data blocks to manage data in parser setup as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture65.png' className='my-3'/> 
                        </div>
                        <p className='figure mt-1'>FIGURE: Marking Data Blocks</p>
                        <h3>1.1.4&nbsp;Viewing Data Blocks</h3>
                        <ol start={6}>
                        <li>Click <img  src='../../image/articel/eln/updatedata.png' className='mx-2 w-auto'/>and then click <strong><strong>Extracted Block. </strong></strong>The data blocks extracted appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture66.png' className='my-3 w-100'/> 
                        </div>
                        <p>FIGURE: Viewing Extracted Data Block</p>
                        <ol start={11}>
                        <li>Click  <strong><strong>Prev Block </strong></strong>/ <strong><strong> Next Block</strong></strong>&nbsp; to view previous and next blocks.</li>
                        </ol>
                        <h4>1.1.4.1&nbsp;Marking Sample Blocks</h4>
                        <p>Sample blocks are marked inside the extracted blocks. Select an extracted block and then mark the sample block.</p>
                        <p>To mark a sample block, follow these steps:</p>
                        <ol>
                        <li>In the extracted block, select a match text and then click <strong><strong>Get </strong></strong>as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture67.png' className='my-3 w-100'/> 
                        </div>
                        <p className='figure mt-1'>FIGURE: Marking Sample Block Using Match Text</p>
                        <p>Or you can split the data block into equal parts by typing the number of lines in the <strong><strong>Absolute Lines</strong></strong>&nbsp;field.</p>
                        <ol start={12}>
                        <li>Click <strong><strong>Absolute Lines</strong></strong>. In the <strong><strong>absolute lines</strong></strong>field, type number of lines from the match text selected, to make a sample block as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture68.png' className='my-3'/> 
                        </div>
                        <p className='figure mt-1'>FIGURE: Marking Sample Block Using Absolute Lines Option</p>
                        <p>A sample block is added starting from the match text with the number of lines specified in the <strong><strong>absolute lines</strong></strong>&nbsp;field.</p>
                        <p>Same way, you can add more sample blocks in the data block as shown in the figure:</p>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture69.png' className='my-3 w-100'/> 
                        </div>
                        <p className='figure mt-1'>FIGURE: Sample Blocks Added</p>
                        <h4>1.1.4.2&nbsp;Viewing Extracted Samples</h4>
                        <ol>
                        <li>Click <img  src='../../image/articel/eln/block.png' className='my-3'/> and then click <strong><strong>Extracted Sample</strong></strong>&nbsp;as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture70.png' className='my-3 w-100'/> 
                        </div>
                        <p className='figure mt-1'>FIGURE: Viewing Extracted Sample</p>
                        <ol start={13}>
                        <li>Click <strong><strong>Prev Sample</strong></strong>/ <strong><strong> Next Sample</strong></strong>&nbsp;to view previous and next samples extracted.</li>
                        <li>Click <strong><strong>Submit </strong></strong>to save the sample split.</li>
                        </ol>
                        <p>Once sample split is done, the <strong><strong>Sample Split</strong></strong>&nbsp;field value in the Method Master appears as &ldquo;<strong><strong> Done</strong></strong>&rdquo; as shown in the figure:</p>
                        <div className='inner-image'>
                        <img  src='../../image/articel/eln/Picture71.png' className='my-3 w-100'/> 
                        </div>
                        <p className='figure mt-1'>FIGURE: Sample Split Field Appears as &ldquo;Done&rdquo;</p>        
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../delimitermastersetup">Delimiter Master Setup</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../parsersetup">Parser Setup</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
              <Help/>
        </div>
    );
}

export default Methodmastersetup; 