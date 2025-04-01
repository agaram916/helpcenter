'use client';
import React, { useState, useEffect} from 'react';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
 const Projectteamsetup = () => {
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
                <h1><strong>Logilab ELN - Project Team&nbsp;Setup</strong></h1>
                    <section className='articel-content'>                   
                        <p>The Project Team tab allows you to add users to the project team. Project team is mapped to a specific project in the Project master. Users added to the project team become project team members. You can add, update or retire users to the project team.</p>
                        <h3>1.1.1&nbsp;Adding a New Project Team</h3>
                        <p><strong><strong>Note:</strong></strong>&nbsp;For administrators the <strong><strong>Site</strong></strong>&nbsp; field will appear. Hence, administrator user can create site specific project teams.</p>
                        <p>To create or add a new project team, follow these steps:</p>
                        <ol>
                         <li>On the main menu click <img src='../../image/articel/eln/Setup.png' className='m-2 w-auto'/>  and then click <strong><strong>Project Team</strong></strong>. The <strong><strong>Project Team</strong></strong>&nbsp;tab appears as shown in the figure:</li>
                        </ol>
                        <div className='inner-image'>
                            <img  src='../../image/articel/eln/Picture36.png' className='my-3 w-100'/>  
                        </div> 
                        <p className='figure mt-1'>FIGURE: Setup–Project Team Tab</p>
                        <p><strong><strong>Note:</strong></strong>&nbsp;&nbsp;For Administrator login the site name field appears. You can select the site and then add project team details.</p>
                        <ol>
                        <li>In the <strong><strong>Project Team </strong></strong> field, type the name of the project team you want to create.</li>
                        <li>Under <strong><strong> Username </strong></strong>, select users to add to the project team.</li>
                        <li>Click <strong><strong> Save</strong></strong>. The project team is created and the same appears in the project team list as shown in the above figure.</li>
                        </ol>
                        <h3>1.1.2&nbsp;Editing Project Team Details</h3>
                        <ol>
                        <li>To edit project team details, in the <strong><strong>Project Team </strong></strong> tab, select the project team from the list. &nbsp;The project team is selected, and the users added to the project team appear.</li>
                        <li>Edit project team name, add or remove team members and then click</li>
                        </ol>
                        <h3>1.1.3&nbsp;Retiring Project Team</h3>
                        <ol>
                        <li>To retire a project team, in the <strong><strong>Project Team</strong></strong> tab, select the project team from the list.</li>
                        <li>Click <strong><strong> Retire</strong></strong>, and then click <strong><strong> Yes</strong> </strong>on the confirm dialog.</li>
                        </ol>
                        <p>&nbsp;</p>                       
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href="../project-master">Project master</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href="../task-masters">Task master</Link>
                        </div>
                    </div>
                    </div>  
                </div>
             </div>
              <Help/>
        </div>
    );
}

export default Projectteamsetup; 