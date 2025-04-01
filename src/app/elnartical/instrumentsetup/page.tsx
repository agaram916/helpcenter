'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
 const Instrumentsetup = () => {
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
                   <h1><strong>Logilab ELN &ndash; Instrument Setup</strong></h1>                    
                    <section className='articel-content'>
                        <h2>1.1&nbsp;Instrument Category</h2>
                        <p>Instrument Category master is used to create and manage instrument categories that are used in the Instrument master.</p>
                        <h3>1.1.1&nbsp;Creating a New Instrument Category</h3>
                        <p>To create a new instrument category, follow these steps:</p>
                        <ol>
                         <li>On the main menu, click <img src='../../image/articel/eln/Setup.png' className='mx-2 w-auto'/> and then click <strong><strong> Instrument Category</strong></strong>. The <strong><strong>Instrument Category</strong></strong>master screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture44.png' className='my-3 w-100'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Instrument Category Master Screen</p>
                        <p>In the Instrument Category master screen, you can see the list of instrument categories added. The option to add, edit and retire instrument categories appears.</p>
                        <ol>
                        <li>Click <strong><strong>Add</strong></strong>. The <strong><strong>Create Instrument Category </strong></strong>screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture45.png' className='my-3'/>  
                        </div>
                        <p className='figure mt-1'>FIGURE: Add Instrument Category screen</p>
                        <ol start={2}>
                        <li>In the <strong><strong>Instrument Category Name </strong></strong>field, type instrument category name you want to add.</li>
                        <li>Click <strong><strong>SUBMIT</strong></strong>.</li>
                        </ol>
                        <p>You can see the instrument category you created listed in the Instrument Category master.</p>
                        <h3>1.1.2&nbsp;Editing Instrument Category Details</h3>
                        <p>To edit instrument category details, follow these steps:</p>
                        <ol>
                        <li>In the Instrument Category master screen, select an instrument category to update and then click <strong><strong> Edit </strong></strong> The selected record opens for edit.</li>
                        <li>In the <strong><strong> Edit Instrument Category </strong></strong>screen do required changes and then click <strong><strong> Submit</strong></strong>.</li>
                        </ol>
                        <h3>1.1.3&nbsp;Retiring Instrument Category Record</h3>
                        <ol>
                        <li>To retire an instrument category, in the Instrument Category master screen, select an instrument category and then click The instrument category is retired, and the status appears as <strong><strong>Retired</strong></strong>.</li>
                        </ol>
                        <h2>1.2&nbsp;Instrument</h2>
                        <p>Instrument master is used to add and manage instruments.</p>
                        <h3>1.2.1&nbsp;Adding a New Instrument</h3>
                        <p>To add a new instrument, follow these steps:</p>
                        <ol>
                        <li>On the main menu, clickand then click <strong><strong>Instrument </strong></strong>. The <strong><strong> Instrument </strong></strong> master screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture46.png' className='my-3 w-100'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Instrument Master Screen</p>
                        <p>In the Instrument master screen, you can see the list of instruments added. The option to add, edit and retire instruments appears. Also, options to export the instrument master details to PDF / Excel / CSV appear.</p>
                        <ol start={5}>
                        <li>Click <strong><strong> Add </strong></strong>. The screen appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture47.png' className='my-3'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Add Instrument screen</p>
                        <ol start={6}>
                        <li>In the <strong><strong>Instrument Code </strong></strong> field, type the instrument code you want to add.</li>
                        <li>In the <strong><strong>Instrument Name </strong></strong> field, type instrument name you want to add.</li>
                        <li>Click to enable the <strong><strong>Instrument Used </strong></strong>  Only if this option is enabled, the instrument will be visible on other screens.</li>
                        <li>In the <strong><strong>Instrument Type </strong></strong> field, select instrument type.</li>
                        <li>In the <strong><strong>Instrument Category </strong></strong> field, select instrument category.</li>
                        <li>In the <strong><strong>Instrument Make </strong></strong> field, type the instrument make / manufacturer name.</li>
                        <li>In the <strong><strong>Instrument Model </strong></strong> field, type model of the instrument.</li>
                        <li>In the <strong><strong>Instrument LOT No </strong></strong> field, type LOT number of the instrument.</li>
                        <li>In the <strong><strong>Electrode No </strong></strong> field, type the electrode number of the instrument.</li>
                        <li>Click <strong><strong>Submit</strong></strong>.</li>
                        </ol>
                        <p>You can see the instrument you added listed in the Instrument master as shown in the figure:</p>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture48.png' className='my-3 w-100'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: New Instrument Added</p>
                        <h3>1.2.2&nbsp;Editing Instrument Details</h3>
                        <p>To edit instrument details, follow these steps:</p>
                        <ol>
                        <li>In the Instrument master screen, select an instrument to update and then click <strong><strong> Edit</strong></strong>. The selected record opens for edit.</li>
                        <li>In the <strong><strong>Edit </strong></strong>screen do required changes and then click <strong><strong>Submit</strong></strong>.</li>
                        </ol>
                         <h3>1.2.3&nbsp;Retiring Instrument </h3>
                        <ol>
                        <li>To retire an instrument, in the Instrument master screen, select an instrument to retire and then click The instrument is retired, and the status appears as <strong><strong>Retired</strong></strong>.</li>
                        </ol>
                    </section>
                    <div className='prevartical '>
                    <div className='row '>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../material-inventory"> Material inventory </Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../delimitermastersetup">Delimiter Master Setup</Link>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
             <Help/>
        </div>
    );
}
export default Instrumentsetup; 