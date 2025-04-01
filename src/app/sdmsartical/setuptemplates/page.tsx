'use client';
import useScrollButton from '@/components/usescrollbutton';
import Link from 'next/link';
import Footer from '@/components/footer';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
const SetupTemplates = () => {
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
                    <h1>Logilab SDMS Masters Templates and Tags</h1>
                    <p className='text-left'>Masters menu helps the administrators to add and manage domains, clients, instruments, sites, templates and tags. </p>
                    <p className='text-left'>e basic masters in Logilab SDMS:</p>
                  
                    <section className='articel-content'>
                    <ul>
                            <li className='circle mx-3'> <b>Domain</b></li>
                            <li className='circle mx-3'>Client</li>
                            <li className='circle mx-3'>Instrument</li>
                            <li className='circle mx-3'>Site</li>
                            <li className='circle mx-3'><b>Templates and Tags</b></li>
                            <li className='circle mx-3'> Parser Key</li>
                        </ul>
                        <p>You can add and edit, export and print master entries in the respective master tabs</p>
                        <h3 className='pb-2'>1.Templates and Tags</h3>
                        <p>Templates are created and managed to capture files in a customized structured manner in SDMS. When files are uploaded the pre tagged, templates enables automatically group, store and retrieve files easily. In templates you structure data by creating tags and group them in hierarchy. </p>
                        <p>Template Tags enable association of meta data to records captured which in turn used to search related records.</p>
                        <p>To setup templates, follow these steps:</p>

                        <p>1.On the main menu click,  <img  src='../../image/articel/SDMS/share.png' className='mx-2 w-auto'/>  and then click <b>Template and Tags.</b> The screen appears as shown in the figure:</p>

                        <h4 className='inner-image'>
                         <img  src='../../image/articel/SDMS/Picture107.png'  className='p-0 my-3 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:Template and Tags Screen</p>
                        <p> Creating a template consists of the following steps</p>
                        <h2 className='text-left'>Step I: Create Tags and Add Values to Tags</h2>
                        <p>Tags are basic components of a structure and define meaning of any data. Therefore, you create a tag and add values to the tags. For example: Test is a tag and all the test types are added as tag values to the test as shown in the figure:</p>
                        <p>To create a tag, follow these steps:</p>
                        <p>1.In the <b>Tag Master</b> tab, under Tag Master, click.  <img  src='../../image/articel/SDMS/addplus.png' className='mx-2 w-auto'/>  In the Tag Name field, type the tag name and then click <b>Submit.</b> As shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture28.png'  className='p-0 my-3'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Tag Master Tab</p>

                        <p> <b>Note:</b> If the tag is assigned with Values then it becomes Master Tag and allows selection of predefined values as dropdown. If the Tag is not set with values then it behaves as User Input tag and user can input the values during transaction.</p>

                        <p>2.Once you add tags, you need to add tag values to the same. In the <b>Tag Master,</b> select the tag you want to <b>add values</b> and then under <b> Tag Value Master,</b>  click  <img  src='../../image/articel/SDMS/add.png'  className='mx-2 w-auto'/>  .  The Add Tag Value dialog appears as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture29.png' className='p-0 my-3 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Tag Value</p>
                        <p>3.In the <b>Tag value</b> field, type the tag value and then <b>click Submit</b>. Same way, you can add multiple values to a tag. All the values appear as dropdown list in the transaction.</p>
                        <p><b>Note:</b> Only Tags with tag values appear in the Hierarchy Structure and Template Master screen. </p>
                        <p>For <b>Mapped</b> templates you can define the hierarchy in the Hierarchy tab and add values in the Template Master tab. Tags added in the hierarchy will become mandatory tags in the template. One-to-many relations can be defined to the Master Tags by defining Mapped Tag structure.</p>
                        <p>For <b>Unmapped</b> templates, you cannot define the hierarchy. But you can add tags in the Template Tags tab. These tags are not mandatory tags and become additional/optional tags in the template. Unmapped tags display full list independently for selection, unlike mapped tags with one-to-many relation. To more details about templates, refer <a className='text-decoration-underline'>Creating Templates.</a></p>

                        <h2 className='text-left'>1.Editing Tag Name</h2>
                            <p>1.To edit a tag name, under <b>Tag Master,</b> select the tag name to edit and then click <b>Edit </b>as shown in the figure:</p>
                            <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture108.png' className='p-0 my-3 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE:- Editing Tag Name</p> 
                        <p>2.The tag selected for edit appears in the <b>Edit Tag</b> dialog. Do required changes and then click <b>Submit</b> as shown in the above figure. </p>

                        <h2 className='text-left'>2.Editing Tag Value</h2>
                            <p>1.To edit tag value, under <b>Tag Value Master,</b> select a tag value and then click <b>Edit. The Edit </b>Tag Value dialog appears as shown in the figure:</p>
                            <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture109.png' className='p-0 my-3 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Editing Tag Value</p> 
                        <p>2.The tag value selected for edit appears in the <b>Edit Tag</b> Value dialog as shown in the above figure.e. </p>
                        <p>Edit the tag value and then click <b>Submit</b>.</p>


                        <h2 className='text-left'>Step II: Create Template</h2>
                         <p>1.In the <b>Template and Tags screen</b>,  The Template Master section appears as shown in the figure: </p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture30.png' className='p-0 my-3 w-100'/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Master Section</p> 
                        <p>Here you create a structure using tags in hierarchical order. For example, Sample is the first level and Test is the second level in the hierarchy. Before you create a structure you must specify the type of the template: Mapped/Unmapped. </p>
                        <ul>
                            <li className='circle mx-3'>For <b>Mapped</b> templates you can define the hierarchy and add values in the Template Master. Tags added in the hierarchy will become mandatory tags in the template. One-to-many relations can be defined to the Master Tags by defining Mapped Tag structure.</li>
                            <li className='circle mx-3'>For <b>Unmapped</b> templates, you cannot define the hierarchy. But you can add tags to the Template Tags. These tags are not mandatory tags and become additional/optional tags in the template. Unmapped tags display full list independently for selection, unlike mapped tags with one-to-many relation. </li>
                        </ul>
                    
                      <p>To create a template, follow these steps: </p>
                      <p>2.Define the template type by selecting <b>Mapped / Unmapped</b>.</p>
                      <p>3.In the <b>Template Name field,</b>Template Name field, type a name for the template and then click.<img  src='../../image/articel/SDMS/add.png' className='mx-2 w-auto'/>  The <b>Add Template </b>dialog appears as shown in the figure:</p>
                      <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture31.png' className='p-0 my-3 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Add Template</p>
                            <p>4.Do any one of the following:</p>
                            <ul>
                                <li className='circle mx-3'>For <><b>Mapped</b></> template: Under <b> Master Tag List,</b><img  src='../../image/articel/SDMS/arrow.png' className='mx-2 w-auto'/>  select a tag value and then click <img  src='../../image/articel/SDMS/arrow.png' className='mx-2 w-auto'/>  . The tags are moved to the right side and appear in hierarchy as moved in the same order as shown in the above figure. The mapped template has a mandatory tag and appears in red as shown.</li>
                                <li className='circle mx-3'>For Unmapped template: You cannot define the hierarchy hence, click Save to save the template.</li>
                            </ul>
                    <p>5.Click Save. </p>
                    <p> <b>Note:</b> The templates you created here  are listed in the Template Name field in the Template Mapping tab with Fields in defined hierarchy to assign one- to- many relational values.</p>
                    <h2 className='text-left'>Step III: Set Template Value</h2>
                        <p>Once you create a template, you can set values to the tags in the template. To do so, follow these steps:</p>
                    <p>1.In the Template and Tags screen, go to the Template Mapping tab. The tab appears as shown in the figure:</p>
                    <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture32.png' className='p-0 my-3 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Mapping Tab</p>
                        <p>2.In the Template Mapping tab, In the Template Name field, select the template. Templates that you created in the Tag Master tab are listed here.</p>
                         <p>3.Click. <img  src='../../image/articel/SDMS/map.png' className='mx-2 w-auto'/> The Configure dialog appears as shown in the figure:</p>

                         <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture33.png' className='p-0 my-3 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Template Mapping Tab – Configure Dialog</p>
                        <p>4.List of tags added to the template appears on the left side. Values added to the tags appear instead of the tag names.</p>
                        <p>5.Under TagValue, select the value for the tag. List of tag values appears for the selected tag.</p>
                        <p>6.Click Save.</p>
                        <p>7.Same way you can add more values for the selected tag in the template. After you add values to the tags in the hierarchy in the Template Master tab, you can see the tree view of the tags and tag values as shown in the figure:</p>
                        <h4 className='inner-image'>
                        <img  src='../../image/articel/SDMS/Picture34.png' className='p-0 my-3 '/> 
                        </h4>
                        <p className='figure mt-1'>FIGURE: Tree view of Tags and Tag Values in the Template Mapping Screen</p>
                        <p>Unmapped templates do not have mandatory tags; hence, you cannot see tags. Additional tags added in the Template Tags tab appears in the Instrument Lock screen.</p>
                    </section>
                    <div className='prevartical '>
                    <div className='row'>
                        <div className='col-6 text-left'>
                            <h4>Previous article</h4>
                            <Link href='../parserkey'>How to set parser key to methods</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <h4>Next article</h4>
                            <Link href='../mastersclients'>Logilab SDMS Masters Clients</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
                <Help/>        
        </div>
    );
}

export default SetupTemplates; 