'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const FileManagement = () => {
    const [showButton, setShowButton] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    });

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        const protocolmenu = document.querySelector('.protocolmenu');
        if (protocolmenu) {
            const offset = protocolmenu.getBoundingClientRect().top;
            const top = window.scrollY;

            if (top >= offset) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
    }
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

    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                    <h1>Logilab ELN – folder and file management</h1>
                    
                    <section className='articel-content'>
                        <h3>Creating New Folder</h3>
                        <p>You can create your own folder and sub folders in ELN.</p>
                        <p>To create a new folder, follow these steps:</p>
                      
                            <p> 1.On the <strong><em><strong>Sheet Orders</strong></em></strong>screen, click <strong><em><strong>New Folder</strong></em></strong>. The <strong><em><strong>Create New Folder</strong></em></strong>&nbsp;dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture125.png' className='m-0 p-0'/>
                            </h4>
                            <p className='text-center figure'>FIGURE: Create New Folder Dialog 1</p>
                            <p>2.In the <strong><em><strong>Enter new name for the file</strong></em></strong>field, type a name for the folder you want to create.</p>
                            <p>3.Set the folder visibility to <strong><em><strong>Site</strong></em></strong>/ <strong><em><strong>Only me</strong></em></strong>&nbsp;/ <strong><em><strong>Project Team</strong></em></strong>.</p>
                            <p>4.Click <strong><em><strong>Add</strong></em></strong>. The following dialog appears:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture126.png' className='m-0 p-0'/>
                            </h4>
                            <p className='text-center figure'>FIGURE: Create New Folder Dialog 2</p>                       
                            <p>5.Click <strong><em><strong>YES</strong></em></strong>. The new folder is created and appears as shown in the figure: You can also create subfolders inside the user defined folder as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture127.png'  className='m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>FIGURE: User Defined Folder and Sub Folder Created</p>                        
                           <p>5.Inside the user defined folder, you can upload files and attachments. Select the folder and then click <strong><em><strong>Upload</strong></em></strong>to upload files.</p>
                       
                        <h3>Change Views</h3>
                        <p>Logilab ELN allows you to change views between Grid and List.</p>
                        <p>By default, the folder / grid view appears. If you want to switch to the List view, then click. The List View appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                                <img src='../../image/articel/Picture128.png' className='m-0 p-0'  />
                            </h4>
                        <p className='text-center figure'>FIGURE: Changing Views: Grid View / List View</p>
                        <h3>Add More Fields to the Grid/List</h3>
                        <p>Logilab ELN allows you to add more fields to the grid/list in the Sheet Order screen.</p>
                       
                            <p>By default, the Order ID, Date Created, Task and Action fields appears. If you want to add more fields clickand then click to check the fields to add as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture129.png'  className='m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>FIGURE: Adding More Fields to the Grid/List</p>                      
                        <p>You cannot remove default fields.</p>
                        <h3>Sort by Selected Field/Column</h3>
                        <p>Logilab ELN allows you to sort records based on a selected field in the Sheet Order screen.</p>
                        
                            <p>To sort records, clickand then select a field as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture130.png'  className='m-0 p-0'/>
                            </h4>
                            <p className='text-center figure'>FIGURE: Sorting Records by selected Field</p>
                        <p>The order records are sorted based on the selected field.</p>
                        <p>You can also use to sort records in ascending / descending order.</p>
                        <h3>Upload Files</h3>
                        <p>Logilab ELN enables you to upload files to user defined folders/dynamic folders.</p>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;You cannot upload files to default / system folders. </em></em></p>
                        <p>To upload a file, follow these steps:</p>
                    
                            <p>Go to the user defined folder where you want to upload files and then click <strong><em><strong>Upload </strong></em></strong>as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture131.png' className=' m-0 p-0'/>
                            </h4>
                            <p className='text-center figure'>FIGURE: Uploading Files to the User Defined Folders</p>
                        
                        
                        <p>The <strong><em><strong>Upload Files</strong></em></strong>&nbsp;dialog appears as shown in the above figure.</p>
                        
                            <p>Click <strong><em><strong>Select Files</strong></em></strong>, in the <strong><em><strong>Open </strong></em></strong>dialog navigate and choose the file to upload and then click <strong><em><strong>Open</strong></em></strong>.</p>
                            <p>The selected file will upload. Once done, on the <strong><em><strong>Upload File</strong></em></strong>dialog, click <strong><em><strong>done</strong></em></strong>. The file is uploaded and appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture132.png' className='m-0 p-0'/>
                            </h4>
                            <p className='text-center figure'>FIGURE: Upload Files Dialog</p>   
                        <p>If required, you can clickthat appears next to the file uploaded to remove the attached file.</p>
                       
                            <p>Click <strong><em><strong>Done</strong></em></strong>. The file is uploaded to the selected user defined folder and appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture133.png'  className='' />
                            </h4>
                            <p className='text-center figure'>FIGURE: File Uploaded</p>                       
                            <h3>Move or Delete a File / Folder</h3>                       
                            <p>Right-click a file or folder and then click Move to move a folder. The Move dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture134.png' className=' m-0 p-0' />
                            </h4>
                            <p className='text-center figure'>FIGURE: Move Dialog</p>
                         
                        <p>The dialog displays the user defined folders. Select a folder t o move the selected file/folder and then click <strong><em><strong>MOVE</strong></em></strong>. The file/folder is moved to the selected destination folder.</p>
                        <p>Right-click a file/folder and then click <strong><em><strong>delete</strong></em></strong>to delete the file/folder.</p>

                        <h3>Move or Delete Multiple Files / Folders / Orders</h3>
                        <p>Logilab ELN enables you to move multiple files / folders /orders from user defined folders to other user defined folders.</p>
                        <p><strong><em><strong><em>Note:</em></strong></em></strong><em><em>&nbsp;You cannot move files/folders/orders from and to default folders. </em></em></p>
                        <p>To move multiple files, follow these steps:</p>
                        
                            <p>Go to the user defined folder where you want to select files to move.</p>
                            <p>Click and then click <strong><em><strong>Select Files</strong></em></strong>&nbsp;as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture135.png'className=' m-0 p-0'  />
                            </h4>
                            <p className='text-center figure'>FIGURE: Uploading Files to the User Defined Folders</p>
                        
                        
                            <p>You can see a check box appears in every file to select. Click to select the files to move / delete as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture136.png'className=' m-0 p-0'  />
                            </h4>
                            <p className='text-center figure'>FIGURE: Selecting Files to Move / Delete</p>
                     
                       
                        <p><strong><em><strong><em>Note:</em></strong></em></strong></p>
                        <p><em><em>If you have selected </em></em><strong><strong>Select Folders</strong></strong><em><em>, the folders will appear with check boxes to select.</em></em></p>
                        <p><em><em>If you have selected </em></em><strong><strong>Orders</strong></strong><em><em>, the orders will appear with check boxes to select.</em></em></p>
                        
                            <p>Click <strong><em><strong>Delete </strong></em></strong>to delete selected files if required.</p>
                            <p>Click <strong><em><strong>Move</strong></em></strong>to move the selected files. The Move dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture137.png'className=' m-0 p-0'/>
                            </h4>
                            <p className='text-center figure'>FIGURE: Move Dialog</p>
                      
                            <p>The dialog displays the user defined folders. Select a folder t o move the selected files and then click <strong><em><strong>MOVE</strong></em></strong>. The files are moved to the selected destination folder and appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                                <img src='../../image/articel/Picture138.png' className=' m-0 p-0'/>
                            </h4>
                            <p className='text-center figure'>FIGURE: Moved Files in the Destination Folder</p>
                          
                    </section>
                    <div className='prevartical'>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../registersheetorders">Register sheet orders</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../processsheetorder">Process sheet order</Link>
                        </div>
                    </div>
                    </div>    
                </div>
             </div>
            <Help/>
        </div>
    );
}

export default FileManagement; 