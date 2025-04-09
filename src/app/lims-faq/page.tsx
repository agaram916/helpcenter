'use client';

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';
import client from '../../../lib/sanityClient';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
    open: boolean;
}

const FAQlims = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [listFaqs, setListFaqs] = useState<FAQItem[]>([]);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const query = `*[_type == "lims-faq"]{ question, answer, category }`;
                const result: FAQItem[] = await client.fetch(query);

                setFaqs(result.filter(faq => faq.category === "most-viewed").map(faq => ({ ...faq, open: false })));
                setListFaqs(result.filter(faq => faq.category === "list-faqs").map(faq => ({ ...faq, open: false })));
            } catch (error) {
                console.error("Error fetching FAQs:", error);
            }
        };

        fetchFAQs();
    }, []);

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

    const toggleFAQ = (index: number) => {
        setFaqs(faqs.map((faq, i) => ({ ...faq, open: i === index ? !faq.open : false })));
    };

    const toggleListFAQ = (index: number) => {
        setListFaqs(listFaqs.map((faq, i) => ({ ...faq, open: i === index ? !faq.open : false })));
    };

    return (
        <div className='product'>
            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row mb-0">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/faq-product">FAQ</Link></li>
                        <li><a href="lims-faq">FAQ LIMS</a></li>
                    </ul>
                </nav>
            </div>

            <div className='faq-list product-list'>
                <div className='container'>
                    <h1>LIMS FAQ</h1>
                    <div className='faqs-section'>
                        <h5 className='text-left faq-header'>Most Viewed FAQS</h5>
                        <div className="faqs">
                            {faqs.map((faq, index) => (
                                <div className={`faq ${faq.open ? "open" : ""}`} key={index} onClick={() => toggleFAQ(index)}>
                                    <div className="faq-question">{faq.question}</div>
                                    <div className="faq-answer">{faq.answer}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='faqs-section'>
                        <h5 className='text-left faq-header'>List of FAQS</h5>
                        <div className="faqs">
                            {listFaqs.map((faq, index) => (
                                <div className={`listfaq ${faq.open ? "open" : ""}`} key={index} onClick={() => toggleListFAQ(index)}>
                                    <div className="faq-question">{faq.question}</div>
                                    <div className="faq-answer">{faq.answer}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Help />
        </div>
    );
}

export default FAQlims;