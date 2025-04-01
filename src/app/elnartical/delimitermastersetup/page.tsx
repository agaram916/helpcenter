'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const Delimitermastersetup = () => {
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
                   <h1> <strong>Logilab ELN - Delimiter Master</strong></h1>                    
                    <section className='articel-content'>
                           
                            <p>The Delimiters master screen helps to add and retire delimiters that are used in method setup and parsing. While you add a delimiter to the master you associate the delimiter to appropriate method. In addition to single character delimiter, you can also add and manage regex patterns such as &ldquo;\s\s+&rdquo; These regex patterns shall be created with or without space.</p>
                            <h3>1.1.1&nbsp;Adding a Delimiter</h3>
                            <ol>
                            <li>On the main menu click <img src='../../image/articel/eln/Setup.png' className='mx-2 w-auto'/> and then click <strong><strong>Delimiters</strong></strong>. The <strong><strong>Delimiters </strong></strong>master screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture49.png' className='my-3 w-100'/>  
                        </div> 
                            <p className='figure mt-1'>FIGURE: Delimiters Master Screen</p>
                            <p>In the Delimiters master screen, you can see the list of delimiters added. Option to add, edit and retire delimiters appears. Also, options to export the delimiters master details to PDF / Excel / CSV appear.</p>
                            <ol>
                            <li>Click <strong><strong>Add</strong></strong>. The add delimiter screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture50.png' className='my-3'/>  
                          </div>
                            <p className='figure mt-1'>FIGURE: Add Delimiter Screen</p>
                            <ol start={2}>
                            <li>In the <strong><strong> Delimiter N </strong></strong><strong><strong> ame </strong></strong> field, type the name of the delimiter you want to add.</li>
                            <li>In the <strong><strong> Actual Delimiter </strong></strong> field, type the delimiter.</li>
                            <li>Click <strong><strong> Submit </strong></strong>.</li>
                            </ol>
                            <p>&nbsp;The delimiter is added to the delimiters list.</p>
                            <h3>1.1.2&nbsp;Editing a Delimiter</h3>
                            <p>To edit delimiter details, follow these steps:</p>
                            <ol>
                            <li>In the Delimiters master screen, select a delimiter to update and then click <strong> <strong> Edit </strong></strong>. The selected record opens for edit.</li>
                            <li>In the edit screen do required changes and then click <strong><strong> Submit </strong></strong></li>
                            </ol>
                            <h3>1.1.3&nbsp;Retiring Delimiter</h3>
                            <ol>
                            <li>To retire a delimiter, in the Delimiters master screen, select delimiter to retire and then click The delimiter is retired, and the status appears as <strong><strong>Retired</strong></strong>.</li>
                            </ol>
                            <h3>1.1.4&nbsp;Exporting Delimiters</h3>
                            <p>To download delimiters, in the Delimiters master, click <img src='../../image/articel/eln/Download.png' className='mx-2 w-auto'/>and then click the format: Excel / PDF / CSV as shown in the figure:</p>
                            <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture51.png' className='mx-2 w-auto'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Downloading Delimiters in Excel / PDF / CSV</p>
                            <p>The delimiters are downloaded to the local storage in the selected format.</p>
                            <h2>1.1&nbsp;Method Delimiter Master</h2>
                            <p>Method Delimiter master screen helps to map delimiters to parser methods. While parsing, the mapped delimiter is used to parse data received from the instrument.</p>
                            <h3>1.1.1&nbsp;Mapping Methods to Delimiter</h3>
                            <ol>
                            <li>On the main menu click <img src='../../image/articel/eln/Setup.png' className='mx-2 w-auto'/>and then click <strong><strong> Method Delimiter </strong></strong>. The <strong><strong>Method Delimiter </strong></strong>master screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                              <img  src='../../image/articel/eln/Picture52.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Method Delimiter Master Screen</p>
                            <p>List of method delimiters mappings added appears. You can add, edit or retire mappings. Also, options to export the method delimiter details to PDF / Excel / CSV appear. You can click <strong><strong>Refresh</strong></strong>&nbsp;to clear fields and filters for fresh entry.</p>
                            <ol start={5}>
                            <li>Click <strong><strong> Add </strong></strong>. The add method delimiter screen appears as shown in the figure:</li>
                            </ol>
                            <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture53.png' className='my-3 w-100'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Add Method Delimiter Screen</p>
                            <ol start={6}>
                            <li>In the <strong><strong> Parser Method </strong> </strong> field, select the parser method to map delimiter.</li>
                            <li>In the <strong><strong>Delimiters </strong> </strong> field delimiters added to the Delimiters master appears here. Select the delimiter to map to the selected method.</li>
                            <li>Click <strong><strong>Submit </strong></strong>.</li>
                            </ol>
                            <p>&nbsp;The delimiter is added/mapped to the selected parser method.</p>
                            <h3>1.1.2&nbsp;Editing Method Delimiter</h3>
                            <p>To edit method delimiter details, follow these steps:</p>
                            <ol>
                            <li>In the Method Delimiter master screen, select a method delimiter to update and then click <strong><strong> Edit </strong></strong>.The selected record opens for edit.</li>
                            <li>In the edit screen, do required changes and then click</li>
                            </ol>
                            <h3>1.1.3&nbsp;Retiring Method Delimiter</h3>
                            <ol>
                            <li>In the Method Delimiters master screen, select a method delimiter and then click <strong> <strong> Retire </strong></strong> The method delimiter is retired, and the status appears as <strong><strong>Retired</strong></strong>.</li>
                            </ol>
                            <h3>1.1.4&nbsp;Exporting Method Delimiters</h3>
                            <p>To export method delimiters, in the Method Delimiters master, click&nbsp; and then click the format: Excel / PDF / CSV as shown in the figure:</p>
                            <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture54.png' className='my-3'/>  
                            </div>
                            <p className='figure mt-1'>FIGURE: Downloading Method Delimiters in Excel / PDF / CSV</p>
                            <p>The delimiters are downloaded to the local storage in the selected format.</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                          <h4>Previous article</h4>
                            <Link href="../instrumentsetup"> Instrument Setup</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../methodmastersetup">Method Master Setup</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
             <Help/>
        </div>
    );
}
export default Delimitermastersetup; 