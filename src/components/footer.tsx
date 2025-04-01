'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Agaram from 'public/assets/images/logo/agaram-logo.png'
import Footerimage from 'public/assets/images/footer-img.png'
import Image from 'next/image';
import { HiOutlineArrowRight } from "react-icons/hi2";
import { RiHeadphoneLine } from "react-icons/ri";
import { MdOutlineEmail,MdEmail } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
       
        <div className="footer-area-wrapper bg-gray text-left">
        <div className="footer-area section-space--pt_40">
            <div className="container">
                <div className="row footer-widget-wrapper section-space--pt_60 section-space--pb_30 ">
                    <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
                        <div className="footer-widget__logo mb-30">
                          {/* <img src="../../assets/images/logo/agaram-logo.png" alt="Agaram Logo"  className='img-fluid Agaram-Logo'/> */}
                          <Image alt=''src={Agaram} className="img-fluid Agaram-Logo" />

                        </div>
                        <div className="right-content">
                            <h6 className="footer-widget__title mb-20">Global HQ</h6>
                            <ul className="footer-widget__list">
                                <li>
                                    510, Alpha Wing, <br />
                                    306, Raheja Towers, Anna Salai, <br />
                                    Chennai-600 002,<br />
                                    Tamilnadu, India.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                        <h6 className="footer-widget__title mb-20">Products</h6>
                        <ul className="footer-widget__list">
                            <li><Link href="https://www.agaramtech.com/product/qualis-lims-software" className="hover-style-link">Qualis LIMS</Link></li>
                            <li><Link href="https://www.agaramtech.com/product/logilab-sdms-software" className="hover-style-link">Logilab SDMS</Link></li>
                            <li><Link href="https://www.logilabeln.com" target="_blank" className="hover-style-link">Logilab ELN</Link></li>
                            <li><Link href="https://www.agaramtech.com/product/qualis-dms" className="hover-style-link">Qualis DMS</Link></li>
                            <li><Link href="https://www.agaramtech.com/product/interfacer" className="hover-style-link">Interfacer Middleware</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                        <h6 className="footer-widget__title mb-20">Services</h6>
                        <ul className="footer-widget__list">
                            <li><Link href="https://www.agaramtech.com/services/professional-services" className="hover-style-link">Professional Services</Link></li>
                            <li><Link href="https://www.agaramtech.com/services/implementation-methodology" className="hover-style-link">Implementation Methodology</Link></li>
                            <li><Link href="https://www.agaramtech.com/services/training" className="hover-style-link">Training</Link></li>
                            <li><Link href="https://www.agaramtech.com/services/support" className="hover-style-link">Support</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                        <h6 className="footer-widget__title mb-20">About Us</h6>
                        <ul className="footer-widget__list">
                            <li><Link href="https://www.agaramtech.com/about-us" className="hover-style-link">Company</Link></li>
                            <li><Link href="https://www.agaramtech.com/customers" className="hover-style-link">Customers</Link></li>
                            <li><Link href="https://www.agaramtech.com/partners" className="hover-style-link">Partners</Link></li>
                            <li><Link href="https://www.agaramtech.com/careers" className="hover-style-link">Careers</Link></li>
                            <li><Link href="https://www.agaramtech.com/certifications" className="hover-style-link">Quality Certifications</Link></li>
                            <li><Link href="https://www.agaramtech.com/contact-us" className="hover-style-link">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                        <h6 className="footer-widget__title mb-20">Legal</h6>
                        <ul className="footer-widget__list">
                            <li><Link href="https://www.agaramtech.com/terms-and-conditions" className="hover-style-link">Terms & Conditions</Link></li>
                            <li><Link href="https://www.agaramtech.com/privacy-policy" className="hover-style-link">Privacy Policy</Link></li>
                            <li><Link href="https://www.agaramtech.com/refund-policy" className="hover-style-link">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <img className="mt-20 mb-20" width="100%"src="../../assets/images/footer-img.png" alt="Footer Image" /> */}
                <Image alt='Footer Image'src={Footerimage} className="img-fluid mt-20 mb-20 w-100" />
            </div>
        </div>
        <div className="footer-copyright-area section-space--pb_30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <span className="copyright-text">Copyright &copy; Agaram Technologies Pvt Ltd 2023-{currentYear}. All rights reserved</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <ul className="list ht-social-networks solid-rounded-icon">
                            <li className="item">
                                <a href="https://www.facebook.com/agaramtechnologies/" target="_blank" aria-label="Facebook" className="social-link hint--bounce hint--top hint--primary">
                                    <FaFacebookF className="link-icon" />
                                </a>
                            </li>
                            <li className="item">
                                <a href="https://twitter.com/agaramtech" target="_blank" aria-label="Twitter" className="social-link hint--bounce hint--top hint--primary">
                                    <FaTwitter className="link-icon" />
                                </a>
                            </li>
                            <li className="item">
                                <a href="https://www.linkedin.com/company/agaram-technologies/" target="_blank" aria-label="Linkedin" className="social-link hint--bounce hint--top hint--primary">
                                    <FaLinkedinIn className="link-icon" />
                                </a>
                            </li>
                            <li className="item">
                                <a href="https://www.youtube.com/user/agaramtechnologies" target="_blank" aria-label="Youtube" className="social-link hint--bounce hint--top hint--primary">
                                    <FaYoutube className="link-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
    );
  };



export default Footer;
