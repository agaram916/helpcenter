'use client';
import Link from 'next/link';
import Image from 'next/image';
import Contactfooter from 'public/assets/images/contact-footer.png';
import React from 'react'
function Footertop() {
  return (
    <>
    <div className="footer-top contact-us-section-wrappaer processing-contact-us-bg section-space--ptb_70 text-left">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="conact-us-wrap-one ">
                                <h2 className="heading text-white" style={{fontWeight:'900'}}>Get Started with our Products & Services </h2>
                                <div className="sub-heading text-white">Witness the power of our products first-hand. Request a demo today and let us show you the future of laboratory operations.</div>                            
	                                <div className="hero-button mt-30  mb-40">
                                    <Link href="https://www.agaramtech.com/request-a-demo" className="btn btn--secondary">Request Demo</Link>                                
                                    </div> 
                            						
                            </div>
							 
                        </div>

                        <div className="col-lg-6">
                        <div className="contact-info-two text-center">                           
                                 {/* <img src="../../assets/images/contact-footer.png" className="img-fluid" alt="hhh"/>  */}
                                 <Image alt='logo' src={Contactfooter} className='img-fluid' />                                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default Footertop;