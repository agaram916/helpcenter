'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const Protocoltemplates = () => {
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
                    <h1><strong>Logilab ELN - Protocol Templates</strong></h1>                    
                    <section className='articel-content'>                                      
                          <h3>1.1.1&nbsp;Creating Protocol Template</h3>
                            <p>Each protocol will include the purpose of the test, any pre-requisites that need to be done before testing, and the acceptance criteria for the test. Each protocol is made up of a series of sections. Each section can have the following:</p>
                            <p><strong><strong>Steps</strong></strong>: Series of steps to carry out a procedure/test.</p>
                            <p><strong><strong>Text</strong></strong>: Type the purpose of the test, any pre-requisites required etc. for the test.</p>
                            <p><strong><strong>Image</strong></strong>: Insert reference image.</p>
                            <p><strong><strong>Attachments</strong></strong>: Enables attach files related to the step in the protocol.</p>
                            <p><strong><strong>Labsheet</strong></strong>: Enables insert a labsheet to the step.</p>
                            <p><strong><strong>Resource</strong></strong>: Enables add resources from inventory for the protocol.</p>
                            <p><strong><strong>Well plate</strong></strong>: Enables add a well plate to the step.</p>
                            <p><strong><strong>Multi-Step Procedure</strong></strong>: Helps to add a procedure that has a series of steps.</p>
                            <p><strong><strong>Chemical Drawing</strong></strong>: Enables add chemical formula. Works like the chemical formula section in the lab sheet.</p>
                            <p><strong><strong>Grid</strong></strong>: Helps add tables to the protocol step.</p>
                            <p><strong><strong>Signature</strong></strong>: Enables capture e-signature of the current user.</p>
                            <p><strong><strong>Checklist</strong></strong>: Enables checklists to add input to the test step.</p>
                            <p>&nbsp;</p>
                            <p>To create a protocol template, follow these steps:</p>
                            <ol>
                            <li>On the main menu, click <img src='../../image/articel/eln/Templates.png' className='m-0 p-0 w-auto'/>and then click <strong><strong>Protocol Templates</strong></strong>. The <strong><strong>Protocol Templates</strong></strong>&nbsp;screen appears as shown in the figure:</li>
                            </ol>
                             <div className='inner-image'>
                                 <img  src='../../image/articel/eln/Picture210.png' className='p-0 my-4 w-100'/>  
                             </div>
                            <p className='figure'>FIGURE: Protocol Templates Screen</p>
                            <p>You can edit a protocol that is in the <strong><strong>Created</strong></strong>&nbsp;status. You can edit the protocol name, category, and visibility of the protocol. You cannot edit a protocol in any other status.</p>
                            <ol>
                            <li>Click <strong><strong>NEW</strong></strong>. The <strong><strong>Create New Protocol</strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                                 <img  src='../../image/articel/eln/ProtocolDialog.png' className=' p-0 my-3'/>  
                             </div>
                            <p className='figure mt-1'>FIGURE: Create New Protocol Dialog</p>
                            <ol start={2}>
                            <li>In the <strong><strong>Protocol Name </strong></strong>field, type the name for the protocol.</li>
                            <li>In the <strong><strong>Category </strong></strong>field, type template category if any.</li>
                            <li>Under <strong><strong>Template Visibility</strong></strong>, set template access to <strong><strong>Site</strong></strong>/ <strong><strong>Only Me</strong></strong>&nbsp;/ <strong><strong>Project Team</strong></strong>.</li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>. The screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                                 <img src='../../image/articel/eln/Picture211.png' className='m-0 p-0 my-3'/>  
                             </div>
                            <p className='figure'>FIGURE: Adding Abstract to the Protocol</p>
                            <ol start={6}>
                            <li>By default, the <strong><strong>Steps </strong></strong>tab appears. Under <strong><strong>Abstract</strong></strong>, you can add abstract/summary of the protocol.</li>
                            </ol>
                            <p><strong><strong>Note: Other tabs in the  protocol:</strong></strong></p>
                            <p><strong><strong>Resources: </strong></strong>This tab enables you to add resources / materials and equipements required for &nbsp;this protocol. You can also create a materia at run-time.</p>
                            <p><strong><strong>References:</strong></strong>This tab enables you to add reference links, citations, protocols, Attachments, files, SOPs etc to the protocol.</p>
                            <p><strong><strong>Results: </strong></strong>Enables to add / import results from the sections/steps in the protocol. You can add editors as you add in the Steps tab to add results.</p>
                            <ol start={7}>
                            <li>Once you add an abstract, you can add a section to the protocol and type a name for the section. A section can have multiple steps.</li>
                            <li>Click.<img src='../../image/articel/eln/adsection.png' className='mx-2 w-auto'/>  A new section is added and prompts for a name. Type name for the section.</li>
                            </ol>
                              <div className='inner-image'>
                                 <img  src='../../image/articel/eln/Picture212.png' className='p-0 my-3 w-100'/>  
                             </div>
                            <p className='figure mt-1'>FIGURE: New Section Added to the Protocol&nbsp;</p>
                            <ol start={9}>
                              <li>Click <img src='../../image/articel/eln/adstep.png' className='mx-2 w-auto'/>to add a new step to the section. The screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                                 <img  src='../../image/articel/eln/Picture213.png' className='p-0 my-3 w-100'/>  
                             </div>
                            <p className='figure mt-1'>FIGURE: Adding New Step to the Protocol&nbsp;Section</p>
                            <ol start={10}>
                            <li>In the <strong><strong>Step </strong></strong>field, type a name for the step.</li>
                            </ol>
                            <h3>1.1.2&nbsp;Adding Text Editor to the step</h3>
                            <ol>
                            <li>Click <img src='../../image/articel/eln/insert.png' className='mx-2 w-auto'/>and then select any one of the following to add content to the step:</li>
                            </ol>
                            <div className='inner-image'>
                                 <img  src='../../image/articel/eln/Picture214.png' className='m-0 p-0 my-3'/>  
                             </div>
                            <ol start={11}>
                            <li>For example, select <strong><strong>Text</strong></strong>, and then click <strong><strong>ADD</strong></strong>. The text editor is inserted and appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                                 <img  src='../../image/articel/eln/Picture215.png' className='m-0 p-0 my-3'/>  
                             </div>
                            <ol start={12}>
                            <li>Type step procedure.</li>
                            <li>Use the following common text editor features to add, edit and format text content in each step:</li>
                            </ol>
                            <div className='container'>
                            <table className="table table-bordered text-left ">
                                    <thead>
                                        <tr>
                                        <th ><strong>Feature</strong></th>
                                        <th><strong>Description</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>  <img  src='../../image/articel/eln/Bold.png' className='m-0 p-0 w-auto'/>  Bold/Italics/Underline</td>
                                        <td>Format text using bold or italics</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/fontoptions.png' style={{width:'25%'}} className='m-0 p-0'/></td>
                                        <td>Click to view more font options</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/addsubscript.png' className='m-0 p-0 w-auto'/>Subscript</td>
                                        <td>Use to add subscript</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/Superscript.png' className='m-0 p-0 w-auto'/>Superscript</td>
                                        <td>Use to add superscript</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/Strikethrough.png' className='m-0 p-0 w-auto'/>Strikethrough</td>
                                        <td>Use to strike through the text</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/FontFamily.png' className='m-0 p-0 w-auto'/>Font Family</td>
                                        <td>Use to change font</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/FontSize1.png' className='m-0 p-0 w-auto'/>Font Size</td>
                                        <td>Use to change font size</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/Textcolor.png' className='m-0 p-0 w-auto'/>Text Color</td>
                                        <td>Use to change text color</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/BackgroundColor.png' className='m-0 p-0 w-auto'/>Background Color</td>
                                        <td>Use to change background color</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/InlineClass.png' className='m-0 p-0 w-auto'/>Inline Class</td>
                                        <td>
                                            Select text, click and then select <strong>Code</strong>, 
                                            <strong>Highlighted</strong>, or 
                                            <strong>Transparent</strong> to highlight the text
                                        </td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/InlineStyle.png' className='m-0 p-0 w-auto'/>Inline Style</td>
                                        <td>
                                            Select text, click and then select <strong>Big Red</strong> or 
                                            <strong>Small Blue</strong> to highlight the text in large red 
                                            font or small blue font
                                        </td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/ClearFormatting.png' className='m-0 p-0 w-auto'/>Clear Formatting</td>
                                        <td>Use to clear formatting</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/paragraphalignment.png' className='m-0 p-0' style={{width:'25%'}}/></td>
                                        <td>Click to view more paragraph alignment options</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/AlignLeft.png' className='m-0 p-0 w-auto'/>Align Left</td>
                                        <td>Use to align selected text to the left</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/AlignCenter.png' className='m-0 p-0 w-auto'/>Align Center</td>
                                        <td>Use to align selected text center</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/Alignright.png' className='m-0 p-0 w-auto'/>Align Right</td>
                                        <td>Use to align selected text to the right</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/Justify.png' className='m-0 p-0 w-auto'/>Justify</td>
                                        <td>Use to justify selected text</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/OrderedList.png' className='m-0 p-0 w-auto'/>Ordered List</td>
                                        <td>Use to create a numbered list</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/UnorderedList.png' className='m-0 p-0 w-auto'/>Unordered List</td>
                                        <td>Use to create a bulleted list</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/ParagraphFormat.png' className='m-0 p-0 w-auto'/>Paragraph Format</td>
                                        <td>Use to change the format of the text using predefined styles</td>
                                        </tr>
                                        <tr>
                                            <td><img  src='../../image/articel/eln/ParagraphStyle.png' className='m-0 p-0 w-auto'/>Paragraph Style</td>
                                            <td>Use to change the format or highlight the text using predefined styles</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/LineHeight.png' className='m-0 p-0 w-auto'/>Line Height</td>
                                        <td>Use to change space between selected text lines</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/DecreaseIndent.png' className='m-0 p-0 w-auto'/>Decrease Indent</td>
                                        <td>Use to decrease indent</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/IncreaseIndent.png' className='m-0 p-0 w-auto'/>Increase Indent</td>
                                        <td>Use to increase indent</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/Quote.png' className='m-0 p-0 w-auto'/>Quote</td>
                                        <td>Use to select and highlight the text</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/link2.png' className='m-0 p-0 w-auto'/>Link</td>
                                        <td>Use to insert a link or URL</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/InsertTable.png' className='m-0 p-0 w-auto'/>Insert Table</td>
                                        <td>Use to insert a table</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/SpecialCharacters.png' className='m-0 p-0 w-auto'/>Special Characters</td>
                                        <td>Use to add special characters</td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/Undo&Redo.png' className='m-0 p-0 w-auto'/>Undo &amp; Redo</td>
                                        <td>Use to undo and redo actions</td>
                                        </tr>
                                        <tr>
                                           <td><img  src='../../image/articel/eln/Timer.png' className='m-0 p-0 w-auto'/>Timer</td>
                                           <td>Add a timer to calculate the time taken to do a certain task, process, or step.
                                            <img  src='../../image/articel/eln/tablePicture1.png' className='m-0 p-0 w-50'/>
                                        </td>
                                        </tr>
                                        <tr>
                                            <td><img  src='../../image/articel/eln/Textbox.png' className='m-0 p-0 w-auto'/>Textbox</td>
                                            <td>Use to add text, number, date, datetime, or color. You can add a small, medium, or large textbox. 
                                                <img  src='../../image/articel/eln/tablePicture2.png' className='m-0 p-0 w-50'/>
                                            </td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/RadioButton.png' className='m-0 p-0 w-auto'/>Radio Button</td>
                                        <td>Use to add a radio button. </td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/Dropdown.png' className='m-0 p-0 w-auto'/>Dropdown</td>
                                        <td>Use to add a dropdown list. You can add a small, medium, or large dropdown. <img  src='../../image/articel/eln/tablePicture3.png' className='m-0 p-0 w-50'/></td>
                                        </tr>
                                        <tr>
                                        <td><img  src='../../image/articel/eln/Checkbox.png' className='m-0 p-0 w-auto'/>Checkbox</td>
                                        <td>Use to add a checkbox to the step. <img  src='../../image/articel/eln/tablePicture4.png' className='m-0 p-0 w-50'/></td>
                                        </tr>
                                    </tbody>
                                    </table>
                            </div>
                                <p>Table: 6 - Creating a Protocol Step &ndash;Using Common Text Editor Features</p>
                                <h3>1.1.3&nbsp;Inserting Image to the step</h3>
                            <ol>
                            <li>Move the cursor in the step where you want to insert the image and then click.<img  src='../../image/articel/eln/insert.png' className='m-0 p-0 w-auto'/> In the <strong><strong>ADD</strong></strong>dialog select Image as shown in the figure and then click <strong><strong>ADD</strong></strong>:</li>
                            </ol>
                            <div className='inner-image'>
                                 <img  src='../../image/articel/eln/Picture216.png' className='m-0 p-0 my-3'/>  
                             </div>
                            <p className='figure mt-1'>FIGURE: Inserting Image to the Protocol Step</p>
                            <p>The Image editor is inserted and appears as shown in the figure:</p>
                            <div className='inner-image'>
                                 <img  src='../../image/articel/eln/Picture217.png' className='m-0 p-0 my-3'/>  
                             </div>
                            <p className='figure mt-1'>FIGURE: Image Editor</p>
                            <ol start={14}>
                            <li>Drag and drop the image or Click <strong><strong>Browse</strong></strong>and select the image.</li>
                            <li>Alternatively, click <strong><strong>Link</strong></strong>to link images from folders within the ELN.</li>
                            <li>The image appears as shown in the figure:`</li>
                            </ol>
                            <div className='inner-image'>
                                 <img  src='../../image/articel/eln/Picture218.png' className='m-0 p-0 my-3'/>  
                             </div>
                            <p  className='figure mt-1'>FIGURE: Image Added to the Protocol Step</p>
                            <ol start={17}>
                            <li>Mouse over and use the options to change views, edit, download, view in new tab and delete the image.</li>
                            </ol>
                            <div className='inner-image'>
                                 <img  src='../../image/articel/eln/Picture219.png' className='m-0 p-0 my-3'/>  
                             </div>
                            <p className='figure mt-1'>FIGURE: Using Full View / Half View Options</p>
                            <ol start={18}>
                            <li>Clickand then click <strong><strong>Full View</strong></strong>option to view the image in full screen. The image appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                             <img  src='../../image/articel/eln/Picture220.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Image Added to the Protocol Step - Full View</p>
                            <h3>1.1.4&nbsp;Adding an Attachment</h3>
                            <p>To add an attachment to the protocol step, follow these steps:</p>
                            <ol>
                            <li>Move the cursor in the step where you want to insert the attachment and then
                            <img  src='../../image/articel/eln/insert.png' className='m-0 p-0 w-auto'/>  click. &nbsp;In the <strong><strong>ADD</strong></strong>dialog select <strong><strong>Attachment</strong></strong>&nbsp;as shown in the figure and the click <strong><strong>ADD</strong></strong>:</li>
                            </ol>
                            <div className='inner-image'>
                             <img  src='../../image/articel/eln/Picture221.png' className='m-0 p-0 my-3'/>  
                            </div>
                             <p className='figure mt-1'>FIGURE: Add Dialog Showing Selecting Attachment Option</p>
                            <p>The attachment editor appears as shown in the figure:</p>
                            <div className='inner-image'>
                             <img  src='../../image/articel/eln/Picture222.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Attachment Editor</p>
                            <p>You can browse and select a file from your local storage to attach / Drag and drop the file.</p>
                            <p>Or link files within the ELN.</p>
                            <p><strong><strong>Attach a file from your local storage:</strong></strong></p>
                            <ol start={2}>
                            <li>Drag and drop the file / click <strong><strong>Browse</strong></strong>and locate the file from your local storage.</li>
                            </ol>
                            <p><strong><strong>Link files within ELN.</strong></strong></p>
                            <ol start={3}>
                            <li>Click <strong><strong>Link</strong></strong>. The dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                             <img  src='../../image/articel/eln/Picture223.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Link Attachment Dialog</p>
                            <p>You can see two tabs. <strong><strong>Sheet</strong></strong>&nbsp;and <strong><strong>Protocol</strong></strong>.</p>
                            <ol start={19}>
                            <li>Select a tab. You can see the list of folders on the left side and list of files on the right side in the selected tab.</li>
                            <li>Click to select a file and then click <strong><strong>INSERT LINK</strong></strong>. The link is inserted as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                             <img  src='../../image/articel/eln/Picture224.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: File Attached / Linked</p>
                            <p>&nbsp;</p>
                            <h3>1.1.5&nbsp;Adding a Labsheet</h3>
                            <p>To add labsheet to the protocol step, follow these steps:</p>
                            <ol>
                            <li>Move the cursor in the step where you want to insert the labsheet and then click. In the <strong><strong>ADD</strong></strong>dialog select <strong><strong>Labsheet</strong></strong>&nbsp;as shown in the figure and the click <strong><strong>ADD</strong></strong>:</li>
                            </ol>
                            <div className='inner-image'>
                             <img  src='../../image/articel/eln/Picture225.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Dialog Showing Labsheet Option</p>
                            <p>The Labsheet editor is added as shown in the figure:</p>
                           <div className='inner-image'>
                             <img  src='../../image/articel/eln/Picture226.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Added Labsheet Editor</p>
                            <ol start={21}>
                            <li>Clickto import a labsheet. The <strong><strong>Sheet Templates</strong></strong>&nbsp;dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                             <img  src='../../image/articel/eln/Picture227.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Sheet Templates Dialog</p>
                            <ol start={22}>
                            <li>Select a lab sheet and then click <strong><strong>IMPORT</strong></strong>. The imported labsheet appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture228.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Imported Labsheet</p>
                            <h3>1.1.6&nbsp;Adding Resource</h3>
                            <p>The Resource editor helps you to do the following to the protocol step:</p>
                            <ul>
                            <li>Add Inventory</li>
                            <li>Create Material</li>
                            <li>Add Equipment</li>
                            </ul>
                            <p>To add resource, follow these steps:</p>
                            <ol>
                            <li>Move the cursor in the step where you want to add resource and then click. In the <strong><strong>ADD</strong></strong>dialog select <strong><strong>Resource</strong></strong>&nbsp;as shown in the figure and the click <strong><strong>ADD</strong></strong>:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture229.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p>FIGURE: Add Dialog Showing Resource Option</p>
                            <p>Resource editor is added as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture230.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Resource Editor Added</p>
                            <ol start={23}>
                            <li>Click <strong><strong>ADD INENTORY</strong></strong>. The <strong><strong>Add Resource</strong></strong>dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture231.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Resource Dialog&nbsp;</p>
                            <ol start={24}>
                            <li>Resource added in the Inventory master appears here. Click to select the resources to add and then click <strong><strong>INSERT MATERIAL</strong></strong>.</li>
                            </ol>
                            <p>The selected inventories are added to the protocol step and appears as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture232.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Inventory Added to the Protocol Step</p>
                            <p>You can see the inventory added and available quantity in the inventory after adding the inventory to the protocol step.</p>
                            <ol start={25}>
                            <li>In the <img src='../../image/articel/eln/delete3.png' className='m-0 p-0 w-auto'/><strong><strong>Action </strong></strong>column, clickto delete the inventory added.</li>
                            </ol>
                            <p>Same way, add material and equipment to the protocol.</p>
                            <h3>1.1.7&nbsp;Adding Well Plate</h3>
                            <p>The Well Plate editor helps you to add well plate to the protocol step.</p>
                            <p>To add a well plate, follow these steps:</p>
                            <ol>
                            <li>Move the cursor in the step where you want to add well plate and then click. In <img src='../../image/articel/eln/insert.png' className='m-0 p-0 w-auto'/>the <strong><strong>ADD</strong></strong>dialog select <strong><strong>Well plate</strong></strong>, in the <strong><strong>Plate size</strong></strong>&nbsp;field, select plate size as shown in the figure and then click <strong><strong>ADD</strong></strong>:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture233.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Dialog Showing Well Plate Option</p>
                            <p>The Well Plate editor is added as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture234.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Well plate Added</p>
                            <p>Click on a well id to view its properties as shown in the above figure. You can select sample type to store, volume and result. The well plates are color coded. Based on the selected sample type the color of the well plate appears as shown in the above figure.</p>
                            <ol start={26}>
                            <li>Click to <img  src='../../image/articel/eln/viewell.png' className='m-0 p-0 w-auto'/>view the well plate in list view as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture235.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Well Plate - List View</p>
                            <ol start={27}>downarrow
                            <li>In the list view, you can fill/update well plate details.</li>
                            <li>Click <img  src='../../image/articel/eln/wellplate.png' className='m-0 p-0 w-auto'/>to import well plate data from Excel file. &nbsp;&nbsp;</li>
                            <li>Click <img  src='../../image/articel/eln/platedata.png' className='m-0 p-0 w-auto'/>to export well plate data to the local storage in Excel format.</li>
                            </ol>
                            <h3>1.1.8&nbsp;Adding Multi - Step Procedure</h3>
                            <p>The multi step procedure editor helps you to add multi step procedure to the protocol step. When a step in the protocol section has sub-steps to be carried to complete the main step, you can use the multi-step procedure editor.</p>
                            <p>To add a multi-step procedure, follow these steps:</p>
                            <ol>
                            <li>Move the cursor in the step where you want to add multi step procedure and then click.<img  src='../../image/articel/eln/insert.png' className='m-0 p-0 w-auto'/> In the <strong><strong>ADD</strong></strong>dialog select <strong><strong>Multi-Step Procedure </strong></strong>as shown in the figure and then click <strong><strong>ADD</strong></strong>:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture236.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Dialog Showing Multi-Step Procedure Option</p>
                            <p>The Multi-Step Procedure editor is added as shown in the figure: Follow the onscreen instruction to add steps to the multi-step procedure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture237.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Creating a Multi-Step Procedure</p>
                            <h3>1.1.9&nbsp;Adding Chemical Diagram</h3>
                            <p>The Chemical Diagram editor helps you to add chemical diagram to the protocol step.</p>
                            <p>To add a chemical diagram, follow these steps:</p>
                            <ol>
                            <li>Move the cursor in the step where you want to add diagram and then click.<img  src='../../image/articel/eln/insert.png' className='m-0 p-0 w-auto'/> In the <strong><strong>ADD</strong></strong>dialog select <strong><strong>Chemical Diagram </strong></strong>as shown in the figure and then click <strong><strong>ADD</strong></strong>:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture238.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Dialog Showing Chemical Diagram Option</p>
                            <p>The Chemical Diagram editor is added as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture239.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Chemical Diagram Editor</p>
                            <ol start={30}>
                            <li>In the text box, type the name of the diagram. Using the tools, draw the chemical diagram as shown in the above figure.</li>
                            </ol>
                            <p>&nbsp;</p>
                            <h3>1.1.10&nbsp;Adding Grid / Table</h3>
                            <p>The grid editor helps you to add tables to the protocol step. The grid editor enables you to do the following:</p>
                            <ul>
                            <li>Add a table with specified number of rows and columns.</li>
                            <li>Define size of each column: Small / Medium / Large</li>
                            <li>Define data type of each column: Text / Numeric / Date / Boolean</li>
                            </ul>
                            <p>To add a grid, follow these steps:</p>
                            <ol>
                            <li>Move the cursor in the step where you want to add the grid and then click.<img  src='../../image/articel/eln/insert.png' className='m-0 p-0 w-auto'/>  In the <strong><strong>ADD</strong></strong>dialog select <strong><strong>Grid </strong></strong>as shown in the figure and then click <strong><strong>ADD</strong></strong>:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture240.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Dialog Showing Grid Option</p>
                            <ol start={31}>
                            <li>In the <strong><strong>Grid size</strong></strong>field, select the size: Rows X Column. If you select <strong><strong>Custom</strong></strong>, then you can define the number of rows and columns to the grid.</li>
                            </ol>
                            <p>The grid editor is added as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture241.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Grid Editor</p>
                            <ol start={32}>
                              <li>Click <img  src='../../image/articel/eln/columnsgrid.png' className='m-0 p-0 w-auto'/> to edit the columns in the grid.</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture242.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Grid Editor</p>
                            <ol start={33}>
                            <li>Follow the onscreen instructions to type column name and datatype.</li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>. The table is added and appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture243.png' className='m-0 p-0 my-3'/>  
                            </div> 
                            <p className='figure mt-1'>FIGURE: Table Added to the Step</p> 
                            <ol start={35}> 
                            <li>Click <img  src='../../image/articel/eln/newrow.png' className='m-0 p-0 w-auto'/>to add a new row to the table.</li>
                            <li>Click <img  src='../../image/articel/eln/importdata.png' className='m-0 p-0 w-auto'/>to import data to the table.</li>
                            <li>Right-click a row and use the options: move the row above / below / delete / insert row above / insert row below as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture244.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Using Right-Click Options</p>
                            <h3>1.1.11&nbsp;Adding/Defining Digital signature to the Protocol Step</h3>
                            <h4>1.1.11.1&nbsp;Adding Your Signature</h4>
                            <p>You can add your digital signature to a protocol step. To do so, follow these steps:</p>
                            <ol>
                            <li>Move the cursor in the step where you want to add the signature and then click. In the <strong><strong>ADD</strong></strong>dialog select <strong><strong>Signature </strong></strong>as shown in the figure and then click <strong><strong>ADD</strong></strong>:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture245.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Dialog Showing Signature Option</p>
                            <p>The Signature editor is added as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture246.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <ol start={38}>
                            <li>Click <strong><strong>ADD SIGNATURE</strong></strong>to add your signature. The <strong><strong>E-Signature</strong></strong>&nbsp;dialog appears a s shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture247.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: E-Signature Dialog</p>
                            <ol start={39}>
                            <li>You can add your signature by typing your <strong><strong>Password</strong></strong>, <strong><strong>Comment</strong></strong>and by  checking the <strong><strong>Yes, I Agree</strong></strong></li>
                            <li>Click <strong><strong>SUBMIT</strong></strong>. Your signature is added and appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture248.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: E-Signature Added</p>
                            <h4>1.1.11.2&nbsp;Defining Signature</h4>
                            <p>You can define a signature to demand a user signature in a protocol step. For example, if you want the QA Manager to approve the protocol step, then you can define a signature as follows:</p>
                            <ol>
                            <li>In the Signature editor, click <strong><strong>DEFINE SIGNATURE</strong></strong>as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture249.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p>FIGURE: Using the Define Signature Option</p>
                            <p>The <strong><strong>Define Signature</strong></strong>&nbsp;dialog appears as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture250.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Define Signature Dialog</p>
                            <ol start={41}>
                            <li>In the <strong><strong>User Role</strong></strong>field, select a role and then click <strong><strong>SUBMIT</strong></strong>. The signature is defined and appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture250.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Signature Defined</p>
                            <p>At runtime, to complete the step the selected user must add their E-signature. You can define multiple signatures for a step.</p>
                            <h3>1.1.12&nbsp;Adding Checklist</h3>
                            <p>To create a checklist, follow these steps:</p>
                            <ol>
                            <li>Move the cursor in the step where you want to insert the checklist items and then click.  <img  src='../../image/articel/eln/insert.png' className='mx-2 w-auto'/> In the <strong><strong>ADD</strong></strong>dialog select <strong><strong>Checklist</strong></strong>&nbsp;as shown in the figure and the click <strong><strong>ADD</strong></strong>:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture251.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p>FIGURE: Add Dialog Showing Selecting Checklist Option</p>
                            <p>The<img  src='../../image/articel/eln/adnewchecklist.png' className='m-0 p-0 w-auto'/>appears as shown in the figure: Follow the onscreen instructions to create the checklist.</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture252.png' className='m-0 p-0 my-3'/>  
                            </div> 
                            <p className='figure mt-1'>FIGURE: Adding Checklist to the Protocol Step</p>
                            <h3>1.1.13&nbsp;Tagging</h3>
                            <p>You can tag a user in the protocol step. The user will receive a notification regarding the same. To tag user, follow these steps:</p>
                            <ol>
                            <li>Move the cursor where you want to add the tag in the protocol step.</li>
                            <li>Type <strong><strong>@</strong></strong>. List of users in ELN workflow appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture253.png' className='m-0 p-0 my-3'/>  
                            </div> 
                            <p className='figure mt-1'>FIGURE: Tagging Users to the Protocol Step</p>
                            <ol start={42}>
                            <li>Select a user to tag. The tagged username appears in blue as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture254.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Tagged Users</p>
                            <p>&nbsp;And the tagged users will receive a notification regarding the same.</p>
                            <h3>1.1.14&nbsp;Link Samples and Projects to the Protocol Step</h3>
                            <p>To link samples and projects to the protocol step, follow these steps:</p>
                            <ol>
                            <li>Move the cursor where you want to link the sample in the protocol step.</li>
                            <li>Type <strong><strong>#s </strong></strong>to link sample. Or type <strong><strong>#p </strong></strong>to link projects. List of samples/projects in ELN appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture255.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Linking Samples and Projects to the Protocol Step</p>
                            <h3>1.1.15&nbsp;Add Section/Step/Text Above / Below</h3>
                            <p>Once you finish designing the step, you can do any of the following:</p> 
                            <ul>
                            <li>Click <img  src='../../image/articel/eln/savefile.png' className='m-0 p-0 w-auto'/>  to save the protocol.</li>
                            <li>Each section, step and the editor will display the following options when you mouse over:</li>
                            </ul>
                            <img  src='../../image/articel/eln/options.png' className='m-0 p-0 w-auto'/> 
                            <ul>
                            <li>Click <img src='../../image/articel/eln/editorabove.png' className='m-0 p-0 w-auto'/>to add a section /step/editor above.  </li>
                            <li>Click <img src='../../image/articel/eln/editorbelow.png' className='m-0 p-0 w-auto'/>to add a section /step/editor below. </li>
                            <li>Click <img src='../../image/articel/eln/screen.png' className='m-0 p-0 w-auto'/>to view the section/step/editor in full screen. </li>
                            <li>Click <img src='../../image/articel/eln/required.png' className='m-0 p-0 w-auto'/>to copy/duplicate the section/step/editor. You can duplicate the section/step/editor and edit them as required. </li>
                            <li>Click <img src='../../image/articel/eln/deleteblack.png' className='m-0 p-0 w-auto'/>to delete the section/step/editor.</li>
                            </ul>
                            <p>&nbsp;</p>
                            <h3>1.1.16&nbsp;Approve Protocol</h3>
                            <ol>
                            <li>The protocol created should be approved for further use. To approve the protocol, open the protocol, click to select <strong><strong>Approve</strong></strong>and then click <strong><strong>SUBMIT</strong></strong>&nbsp;as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture256.png' className='w-100 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Approving Protocol</p>
                            <h3>1.1.17&nbsp;Exporting Protocol / Selected Sections to JSON&nbsp;and PDF</h3>
                            <ol>
                            <li>Click <img  src='../../image/articel/eln/exportjson2.png' className='m-0 p-0 w-auto'/> and then click <strong><strong>Export Json</strong></strong>&nbsp;to export the protocol into Json format. You can also select sections in the protocol to export to Json.</li>
                            <li>Click <img  src='../../image/articel/eln/exportjson2.png' className='m-0 p-0 w-auto'/> and then click <strong><strong>Export PDF</strong></strong>&nbsp;to export the protocol into PDF format. You can also select sections in the protocol to export to PDF format. The Export dialog appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture257.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Export PDF Dialog</p>
                            <ol start={44}>
                            <li>Click <img  src='../../image/articel/eln/print.png' className='m-0 p-0 w-auto'/> to view print preview as shown in the figure:</li> 
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture258.png' className='m-0 p-0 my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Print Preview Dialog</p>
                            <ol start={45}>
                            <li>You can preview the pages by scrolling-down and then click <strong><strong>Print</strong></strong>to print the pages.</li>
                            </ol>
                            <h3>1.1.18&nbsp;Exporting Sections to Another Protocol</h3>
                            <p>You can export selected sections in the protocol and export them to another protocol. To export sections to another protocol, follow these steps:</p>
                            <ol>
                            <li>Click the checkbox that appears near the section name to select a section. You can select multiple sections to export.</li>
                            <li>Clickand then click <strong><strong>Export Section</strong></strong>&nbsp;as shown in the figure.</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture259.png' className='my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Exporting the Protocol Section</p>
                            <p>The <strong><strong>Export Section</strong></strong>&nbsp;dialog appears as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture260.png' className='my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Export Section Dialog</p>
                            <ol start={46}>
                            <li>Select a protocol to which you want to export the selected sections.</li>
                            <li>Click <strong><strong>EXPORT</strong></strong>. The sections are exported to the selected protocol.</li>
                            </ol>
                            <h3>1.1.19&nbsp;Import Json</h3>
                            <p>The import Json option helps you to import a Json file to a protocol. You can import a Json file to create protocol. To do so, follow these steps:</p>
                            <ol>
                            <li>Open the protocol where you want to import the Json file.</li>
                            <li>For example, here I have created a new protocol and imported a Json file to import content.</li>
                            <li>In the new protocol screen, click <img  src='../../image/articel/eln/exportjson2.png' className='m-0 p-0 w-auto'/> and then click <strong><strong>Import Json</strong></strong>as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture261.png' className='my-3 w-100'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Importing Json file</p>
                            <ol start={50}>
                            <li>In the <strong><strong>Open</strong></strong>dialog, locate and select the <strong><strong>JSON Source File</strong></strong>&nbsp;and then click <strong><strong>Open </strong></strong>as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture262.png' className='my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Importing the JSON File</p>
                            <p>You can see the Json file is imported and the imported sections and steps appears as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture263.png' className='my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Imported Sections and Steps</p>
                            <h3>1.1.20&nbsp;Import Section</h3>
                            <p>To import a section, follow these steps:</p>
                            <ol>
                            <li>Open the protocol. Click <img  src='../../image/articel/eln/exportjson2.png' className='mx-2 p-0 w-auto'/>and then click <strong><strong>Import Section</strong></strong>&nbsp;as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture264.png' className='my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Importing Section</p>
                            <p>&nbsp;The Import Section dialog appears as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picturem.png' className='my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Import Section Dialog</p>
                            <ol start={51}>
                            <li>You can see the list of protocols in the dialog. Select a protocol and then click <strong><strong>IMPORT</strong></strong>. List of sections in the selected protocol appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture265.png' className='my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Sections Dialog</p>
                            <p>Select the sections to import and then click <strong><strong>IMPORT SECTIONS</strong></strong>. You can see the sections imported to the protocol as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture266.png' className='my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Sections Imported</p>
                            <p>You can edit and rearrange the sections in the protocol.</p>
                            <h3>1.1.21&nbsp;Navigation</h3>
                            <p>The Table of Contents panel that appears on the left side of the protocol screen lists the sections, steps, and editors in the protocol.</p>
                            <p>You can see the section name, list of steps in each section and list of editors in each step appears as shown in the figure:</p>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture267.png' className='my-3 w-100'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Navigating Through Protocol Sections / Steps / Editors</p>
                            <ol>
                            <li>Under <strong><strong>Table of Contents</strong></strong>, click to jump to a section / step /editor.</li>
                            <li>Click   <img  src='../../image/articel/eln/beginningprotocolto.png' className='m-0 p-0 w-auto'/> go to the top / beginning of the protocol.</li>
                            </ol>
                            <h3>1.1.22&nbsp;Adding Comments to Protocol Steps</h3>
                            <p>Logilab ELN enables you to add and reply to comments to the protocol steps. You can tag users in the comment. The users can reply to your comments.</p>
                            <p>To add comment to the protocol step, follow these steps:</p>
                            <ol>
                            <li>Click <img  src='../../image/articel/eln/message.png' className='m-0 p-0 w-auto'/>that appears near a as shown in the figure: &nbsp;</li> 
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture268.png' className='my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Adding Comment to Protocol Step</p>
                            <ol start={52}>
                            <li>The <strong><strong>Comments</strong></strong>dialog appears. Click <strong><strong>Start a conversation</strong></strong>&nbsp;as shown in the figure:</li>
                            </ol>
                            <p>&nbsp;</p>
                            <ol start={53}>
                            <li>The chat dialog appears. Type <strong><strong>@</strong></strong>and select a user to tag. Type your comments and then click <strong><strong>Post</strong></strong>&nbsp;as shown in the above figure.</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture269.png' className='m-0 p-0 my-3'/> 
                            </div>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture270.png' className='m-0 p-0 my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Comments Added and REPLY Option</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <h2>1.1&nbsp;Rearrange Protocol Sections, Steps and Editors</h2> 
                            <h3>1.1.1&nbsp;Rearrange Sections</h3>
                            <p>Once created, you can rearrange the protocol sections, steps, and editors.</p> 
                            <p>To rearrange, follow these steps:</p>
                            <ol>
                            <li>Open the protocol to rearrange. In the <strong><strong>Table of Contents</strong></strong>, click  <img  src='../../image/articel/eln/TableContents.png' className='m-0 p-0 w-auto'/> as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture271.png' className='m-0 p-0 my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Table of Contents</p>
                            <p>The <strong><strong>Rearrange</strong></strong>&nbsp;dialog appears as shown in the figure:</p>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture272.png' className='m-0 p-0 my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Rearranging Sections in a Protocol</p>
                            <p>By Default, the Rearrange Sections option is selected, and you can see the list of sections in the protocol.</p>
                            <ol start={54}>
                            <li>Drag a section and drop it to a new place in the list to rearrange the sections.</li>
                            </ol>
                            <h3>1.1.2&nbsp;Rearrange Steps</h3>
                            <ol>
                            <li>Click to select the <strong><strong>Rearrange Step</strong></strong> List of steps in the protocol appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture273.png' className='m-0 p-0 my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Rearrange Steps Within Sections</p>
                            <ol start={55}>
                            <li>You can see the list of steps in each section. Drag and drop the steps to rearrange the steps within the section.</li>
                            </ol>
                            <p><strong><strong>Note: </strong></strong>You can rearrange the steps only within the section and you cannot move a step to another section.</p>
                            <h3>1.1.3&nbsp;Rearrange Editors</h3>
                            <ol>
                            <li>Click to select the <strong><strong>Rearrange Editor </strong></strong> List of editors in each step in the protocol appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture274.png' className='m-0 p-0 my-3'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Rearrange Steps Within Sections</p>
                            <ol start={56}>
                            <li>You can see the list of editors in each step. Drag and drop the editors to rearrange the editors within the step.</li>
                            </ol>
                            <p><strong><strong>Note: </strong></strong>You can rearrangethe editors only within the step and you cannot move an editor to another step.</p>
                            <h3>1.1.4&nbsp;Edit<strong>&nbsp;</strong>Template</h3>
                            <p>You can edit template details that are in the <strong><strong>Created</strong></strong>&nbsp;status. Click <strong><strong>Edit </strong></strong>to edit template name, category and template visibility for templates in Created status. When you select a template in Created status, the EDIT option will be enabled as shown in the figure:</p>
                            <div className='inner-image'>
                               <img  src='../../image/articel/eln/Picture275.png' className='m-0 p-0 my-3 w-100'/> 
                            </div>
                            <p className='figure mt-1'>FIGURE: Editing Template Details</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../sheettemplates">Sheet Templates</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../templatemapping">Template Mapping</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default Protocoltemplates; 