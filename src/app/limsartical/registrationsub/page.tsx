'use client';
import React, { useState, Suspense, useContext, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const RegistrationSub = () => {
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
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
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
                        <li><Link href="../limstroublearticle">LIMS Article</Link></li>
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
                    <h1>Qualis LIMS-Registration Sub Type </h1>
                    <section className='articel-content'>
                        <p>Registration Sub Type master is used to add and manage registration sub types. Registration sub type is created for a selected registration type. You can create versions for registration sub type. You can edit the details until the registration sub type is in the Draft state. Once approved you cannot edit the details. </p>
                        <p>The previous one will expire once you approve an new registration sub type</p>
                        <h3>1.Adding a New Registration Sub Type </h3>
                        <p>To create a new registration sub type, follow these steps:</p>
                        <p>1.On the main menu, click,<img  src='../../image/articel/LIMS/configuration.png'/> <b>Configuration</b> and then click <b>Registration Sub Type.</b> The <b>Registration Sub Type</b> master screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0 w-100' src='../../image/articel/LIMS/Picture1.png'/>
                        </h4>
                        <p className='figure mt-1'>FIGURE: Registration Sub Type Master Screen</p>
                        <p>In the Registration Sub Type master screen, you can see the list of registration sub types created. Options to edit and delete registration sub types appear in each record.</p>                     
                        <p>2.Click.<img src='../../image/articel/LIMS/filter.png'/> The filter dialog appears as shown in the figure:</p>
                       
                        <h4 className='inner-image'>
                            <img className='m-0 p-0 w-100' src='../../image/articel/LIMS/Picture2.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Selecting Registration Type to add Registration Sub Type.</p>
                        <p>3.Select the <b>Sample Type </b>and  <b>Registration Type</b> to add the registration sub type and then click <b>SUBMIT.</b> The screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement4.png' />
                        </h4>
                        <p>Let us move on to configure User role by clicking 'User Role' page item.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/Picture3.png' />
                        </h4>
                        <p>On 'User Role' page, the list of user roles already created will be displayed.</p>
                        <p>Click on + icon to add a new user role.</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement6.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Registration Sub Type Screen for  the selected Registration Type.</p>
                        <p>If there is a registration sub type already added, the details appears. .</p>
                        <p>4.Click. <img  src='../../image/articel/LIMS/plus.png'/> The Add Registration Type screen appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0' src='../../image/articel/LIMS/Picture4.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Registration Sub Type Dialog</p>
                    
                        <p>5.In the <b>Registration Sub Type</b>Name field, type the registration sub type name. </p>
                        <p>6.Click  <img  src='../../image/articel/LIMS/Picture5.png'/>to add Registration Sub Type name in multiple languages. The multilingual options appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0' src='../../image/articel/LIMS/Picture6.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Multilingual Options</p>
                        <p>7.You can type the Registration Sub Type name in French, Russian and Tajik as shown in the above figure. Click <b>Close </b>to close the multilingual dialog.</p>
                        <p>8.In the <b>Description </b>field, type the description.</p>
                        <p>9.Click <b>Save.</b></p>
                        <p>You can see the registration sub type you just created listed in the Registration Sub Type master as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='w-100 m-0 p-0' src='../../image/articel/LIMS/usermanagement11.png' />
                        </h4>
                        <p>The policy thus created is in 'Draft' status.</p>
                        <p>Click on 'Approve' icon to change the status to approved one.</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0 w-100' src='../../image/articel/LIMS/Picture7.png' />
                        </h4>
                        <p className='figure mt-1'> FIGURE: Registration Sub Type Created</p>
                        <h3>1.1.1Adding a Version to the Registration Sub Type.</h3>
                        <p>1.In the Registration Sub Type screen, click <img  src='../../image/articel/LIMS/version.png'/> to add a version. The Add Version dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0' src='../../image/articel/LIMS/Picture8.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Version.</p>
                       
                        <p>2.Click  to enable options to add to the workflow.</p>
                       
                        <p>3.You can define the registration number format by enabling the <b>New Sequence Format</b> option. Once you enable this option, the dialog appears as shown in the above figure:</p>
                        <p>4.Design registration number format as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0 w-100' src='../../image/articel/LIMS/usermanagement17.png' />
                        </h4>
                        <p>On the Screen Rights page, first select the user role by clicking on Filter icon.</p>
                        <p>Click on + item which will open up Add Screen Rights dialog window.</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0' src='../../image/articel/LIMS/Picture9.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Design Registration No Format</p>
                        <p>5.In the <b>Reset Sequence No. Every</b> field, select the  period to reset the sequence number.</p>
                        <p> 6.In the <b>Text Value</b> field, type the text to add to the registration number. This text appears in . the Character box . you can drag and drop this character box <img  src='../../image/articel/LIMS/charac.png'/>to the Input Format field to add the character to the registration number format. </p>
                        <p>7.In the Sequence No. length field, type the length for the sequence number. This number appears in the Sequence Number box  <img  src='../../image/articel/LIMS/sequence.png'/>. you can drag and drop this box to the <b>Input Format </b>Input Format field to add the length of sequence number to the registration number format</p>

                        <p>8.Add other boxes to the <b>Input Format </b>field as required. You can see the preview of the designed registration number format in the <b>Output Format </b>field..</p>
                        <p>9.Click <b>Save. </b>The registration sub type is saved and appears in the DRAFT as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0 w-100' src='../../image/articel/LIMS/Picture10.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Registration Sub Type Added.</p>
                        <h3>
                        1.1.2View Transaction Flow
                        </h3>
                        <p>1.Click  <img  src='../../image/articel/LIMS/eye.png'/>to see the transaction flow as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0' src='../../image/articel/LIMS/Picture11.png' />
                        </h4>
                        <p className='figure mt-1'> FIGURE: View Transaction Flow</p>

                        <h3>1.1.3Edit Registration Sub Type Version</h3>
                        <p>1.Click to edit the record. The <b>Edit Version</b> dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0' src='../../image/articel/LIMS/Picture12.png' />
                        </h4>
                        <p className='figure mt-1'>FIgure: Edit Version Dialog</p>
                        <p>2.Do required changes and then click Save.</p>
                        <h3>1.1.4 Delete Registration Sub Type Version</h3>
                     
                        <p>1.Click  <img  src='../../image/articel/LIMS/delete.png'/>to delete the Registration Sub Type Version.</p>
                         <h3>1.1.5Approve Registration Sub Type Version</h3>
                        <p>1.Click  <img  src='../../image/articel/LIMS/like.png'/>to approve the Registration Sub Type Version. The version is approved and appears as shown in the figure:.</p>
                        <h4 className='inner-image'>
                            <img className='m-0 p-0 w-100' src='../../image/articel/LIMS/Picture13.png' />
                        </h4>
                        <p className='figure mt-1'>FIGURE: Registration Sub Type Version Approved</p>
                        <h3 >
                            1.1.5.1Editing and Deleting Registration Sub Type
                        </h3>
                        <p>1.1.5.1Editing and Deleting Registration Sub Type.</p>
                        <p>1.To edit registration sub type details, in the Registration Sub Type master screen, select the registration sub type and then click <img  src='../../image/articel/LIMS/pencil.png'/>to edit the registration sub type record. In the Edit <b>Registration Sub Type</b> screen, do required changes and then click Save. </p>
                        <p>2.To delete a registration sub type, in the Registration Type master screen, select the registration sub type and then click <img  src='../../image/articel/LIMS/delete2.png'/>to delete the registration sub type record. </p>
                    </section>
                    <div className='prevartical mt-4'>
                      <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../registrationtype"> Registration Type</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                           <Link href="../templatedesign"> How to add and Manage Template Design</Link>
                        </div>
                    </div>
                    </div>    
                </div>
             </div> 
             <Help/>       
        </div>
    );
}

export default RegistrationSub; 