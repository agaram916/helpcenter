'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'public/assets/images/home/logo-white.png';
function Header() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <div className="header-area header-home">
            <div className={scroll ? "header-bottom-wrap header-sticky is-sticky" : "header-bottom-wrap header-sticky"}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header position-relative">
                                <div className="header__logo">
                                    <Link href="/">
                                        <Image alt=''src={Logo} className="head-home-logo img-fluid" />
                                    </Link>
                                </div>

                                <div className="header-right">
                                    <div className="header__actions--preview">
                                        <div className="header__actions">
                                            <div className="header__icons-wrapper header-right-inner" id="hidden-icon-wrapper" >

                                                <div className="header-button downlode-btn ml-4 goagaram">
                                                    <a target='_blank'  href="https://www.agaramtech.com">Go To Agaram</a>
                                                </div>
                                                <div className="header-button downlode-btn ml-4">
                                                    <a target='_blank' href="https://www.agaramtech.com/contact-us/">Contact Us </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;