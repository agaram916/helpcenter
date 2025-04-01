'use client';
import React, { useState, useEffect} from 'react';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const parsersetup = () => {
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
                <h1><strong>Logilab ELN - Parser Setup</strong></h1>
                    <section className='articel-content'>                   
                        <p>Parsing is interpreting/compiling that breaks data into its structured elements for easy translation. The files that are uploaded to the computer are split into parts; data is extracted and imported into the computer.</p>
                        <p>Once Sample Split is done, you can set up parser. To do so, follow these steps:</p>
                        <ol>
                        <li>In the Method master screen, select a method, click <strong><strong>Method</strong></strong>and then click <strong><strong>Parser Setup</strong></strong>&nbsp;as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture72.png' className='my-3 w-100'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Parser Setup</p>
                        <ol>
                        <li>The <strong><strong>Parser Setup</strong></strong>screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture73.png' className='my-3 w-100'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Parser Setup Screen</p>
                        <p>Controls and their use in the Parser Setup screen:</p>
                        <p><img src='../../image/articel/eln/data.png' className='mx-2 w-auto'/>Select to extract the data. Select the data you want to parse and then click<img src='../../image/articel/eln/data.png' className='mx-2 w-auto'/>to extract the data.</p>
                        <p><img src='../../image/articel/eln/mark1.png' className='mx-2 w-auto'/>Mark beginning of the data block.</p>
                        <p><img src='../../image/articel/eln/mark2.png' className='mx-2 w-auto'/>Mark end of the data block</p>
                        <p><img src='../../image/articel/eln/mark3.png' className='mx-2 w-auto'/>Mark column end of the data block</p>
                        <p><img src='../../image/articel/eln/store.png' className='mx-2 w-auto'/>Click to save the field marked.</p>
                        <p><img src='../../image/articel/eln/test.png' className='mx-2 w-auto'/>Method Name &ndash; Click to view list of fields added. You can view, edit or delete the fields.</p>
                        <p><img src='../../image/articel/eln/reload.png' className='mx-2 w-auto'/>Click to clear the parser marking and reset and refresh the screen.</p>
                        <p><img src='../../image/articel/eln/eye.png' className='mx-2 w-auto'/>Click to open <strong><strong>Store Field Techniques</strong></strong>&nbsp;screen where you can merge/split/shift fields with the selected delimiter.</p>
                        <p><img src='../../image/articel/eln/submitt.png' className='mx-2 w-auto'/>Click to save the fields in the database table.</p>
                        <h3>1.1.1&nbsp;Mark Required Data</h3>
                        <p>In the Parser Setup screen, you can mark required data and map it to a field name. You can also mark beginning and end data blocks to precisely identify the required data block.</p>
                        <p>To mark required data, follow these steps:</p>
                        <ol>
                        <li>Select required data.</li>
                        </ol>
                        <p><strong><strong> Note: </strong></strong>&nbsp; Always select required data until the end mark.</p>
                        <ol start={2}>
                        <li>In the <strong><strong>Type field name</strong></strong>field, type field name for the selected data and then click<img src='../../image/articel/eln/submitt.png' className='mx-2 w-auto'/>;as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture74.png' className='my-3 w-100'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Parser Setup &ndash; Marking required Data Block</p>
                        <p>The required data is highlighted in green as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture75.png' className='my-3 w-100'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Parser Setup &ndash;Required Data Block Marked</p>
                        <h3>1.1.2&nbsp;Mark beginning of the data block.</h3>
                        <p>Once you mark required data, you need to mark beginning of the data block. You can mark the beginning of the data block either on the left side of the data block or on top of the data block whichever is available. In this example, we do not have data at the left-side, but we do have data at the top. So we can mark the beginning of the data block at the top.</p>
                        <ol>
                        <li>To mark beginning of the data block, select the data and then click <img  src='../../image/articel/eln/mark2.png' className='mx-2 w-auto'/>as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture76.png' className='my-3'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Parser Setup &ndash; Marking Beginning of the Data Block</p>
                        <h3>1.1.3&nbsp;Mark end of the data block</h3>
                        <p>Once you mark the beginning of the data block, you need to mark the end of the data block. You can mark the end of the data block either on the right-side of the data block or on bottom of the data block whichever is available. In this example, we do not have data at the right-side, but we do have data at the bottom of the required data. So we can mark the end of the data block at the bottom.</p>
                        <ol start={2}>
                        <li>To mark end of the data block, select the data and then clickas shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture77.png' className='my-3 w-100 '/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Parser Setup &ndash; Marking End of the Data Block</p>
                        <h3>1.1.4&nbsp;Identify the Column End of the data Block.</h3>
                        <ol start={3}>
                        <li>To mark the column end of the data block select double arrowthat appears next to the required data block and then click&nbsp;as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture78.png' className='my-3'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Parser Setup &ndash; Marking Column End of the Data Block</p>
                        <p>The marked column end appears in yellow as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture79.png' className='my-3 w-100'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Parser Setup &ndash; Marked Column End of the Data Block</p>
                        <ol start={3}>
                        <li>Click&nbsp;to save the field marked.</li>
                        <li>Same way, identify and mark required data blocks / fields.</li>
                        </ol>
                        <p>Even if you don&rsquo;t type a field name for the selected data block, the parser will save the data block with default field name as Field 1, Field 2 etc.</p>
                        <h3>1.1.5&nbsp;Multi Field Parsing</h3>
                        <p>To parse multi field values, follow these steps:</p>
                        <ol>
                        <li>Select a block of values with multiple rows and columns. Mark beginning, end and end of column as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture80.png' className='my-3 w-100'/>  
                        </div>
                        <ol start={5}>
                        <li>Click <img  src='../../image/articel/eln/eye.png' className='my-3'/> to preview the fields. The screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture81.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Store Field Technique Screen</p>
                        <ol start={6}>
                        <li>In the screen, you can see the marked fields in the previous screen appear in a single column. This screen allows you to merge/split/shift data using the selected delimiter.</li>
                        </ol>
                        <p>&nbsp;</p>
                        <h4>1.1.5.1&nbsp;Split Fields</h4>
                        <p>To split the columns, follow these steps:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture82.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Splitting Columns</p>
                        <h4>1.1.5.2&nbsp;Merge Fields</h4>
                        <p>Once you select two columns to merge, click <img src='../../image/articel/eln/set.png' className='mx-2 w-auto'/>  to merge the columns. And then click<img  src='../../image/articel/eln/reload-arrow.png' className='mx-2 w-auto'/> to view the result as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture83.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Merging Fields</p>
                        <h3>1.1.6&nbsp;Viewing, Editing and Deleting Marked Fields</h3>
                        <ol>
                        <li>Click the method name to view list of fields added as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture84.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Viewing, Editing and Deleting Marked Fields</p>
                        <ol start={7}>
                        <li>Click  <img  src='../../image/articel/eln/eye2.png' className='mx-2 w-auto'/> to view the data block/field marked.</li>
                        <li>Click  <img  src='../../image/articel/eln/pencil.png' className='mx-2 w-auto'/> to edit the field name. The field name appears in the <strong><strong>Field Key</strong></strong>&nbsp;box for editing. You can also change the data type of the field if required, click <strong><strong>Update</strong></strong>&nbsp;and then on the Parser Setup screen click <strong><strong>Submit</strong></strong>.</li>
                        <li>Click  <img  src='../../image/articel/eln/delete1.png' className='mx-2 w-auto'/> to delete the field.</li>
                        </ol>
                        <h3>1.1.7&nbsp;Submitting Parser Setup to Store in the Table</h3>
                        <ol>
                        <li>Click <strong><strong>Submit</strong></strong>. The fields are stored in the table, and you will see a success message as shown in the figure</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture86.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Parser Field Appears as &ldquo;1&rdquo; after Parser Setup Done</p>
                        <p>In the Method Master screen, the Parser Status field of the method appears as &ldquo;Done&rdquo; after you setup fields for parsing.</p>
                        <h3>1.1.8&nbsp;Evaluate Parser</h3>
                        <p>Once you mark fields for parsing, you can evaluate the fields. To do so, follow these steps:</p>
                        <ol>
                        <li>In the Method Master screen, select the method, click <strong><strong>Method</strong></strong>and then click <strong><strong>Evaluate Parser</strong></strong>&nbsp;as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture87.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Evaluate Parser Option</p>
                        <p>The Evaluate Parser screen appears as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture88.png' className='my-3 w-100'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Evaluate Parser Screen Showing Fields and Values</p>
                        <p>You can see the list of fields added in the Parser Setup screen and values for the fields captured appear as shown in the above figure.</p>
                        <h3>1.1.9&nbsp;Copy Method</h3>
                        <p>The Copy Method option enables you to copy a method after sample split and parser setup are done. You can copy a method for the same instrument category. So, while copying a method you need to specify the instrument name. Instruments from the same instrument category of the method you copy will appear in the <strong><strong>Instruments</strong></strong>&nbsp;field. Once copied, you can make required changes to the copied method for further use.</p>
                        <ol>
                        <li>In the Method Master screen, select the method to copy, click <strong><strong>Method</strong></strong>and then click <strong><strong>Copy Method</strong></strong>&nbsp;as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture89.png' className='my-3 w-100'/>  
                        </div>
                        <p>FIGURE: Copy Method Option</p>
                        <p>The Copy Method screen appears as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture90.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Copy Method</p>
                        <ol start={10}>
                        <li>In the <strong><strong> Instruments</strong></strong> field, select the instrument. Instruments from the instruments category of the method you want to copy will appear.</li>
                        <li>In the <strong><strong> method name</strong></strong> field, name for the new method will appear.</li>
                        <li>Click <strong><strong> Submit</strong></strong>. Copy of the method with new method name will be created.</li>
                        </ol>
                        <p>&nbsp;</p>              
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../methodmastersetup">Method Master Setup</Link>
                        </div>
                        <div className='col-6 text-right'>
                            {/* <h4>Next article</h4>
                            <Link href="../articeldetailsfour">How to assign user rights</Link> */}
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
              <Help/>
        </div>
    );
}

export default parsersetup; 