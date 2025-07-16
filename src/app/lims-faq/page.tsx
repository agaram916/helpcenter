'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import client from '../../../lib/sanityClient';
import Help from '@/components/help';

interface FAQItem {
  question: string;
  answer: string;
  sectionTitle?: string;
  open: boolean;
}

const FAQLIMS = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [faqGroups, setFaqGroups] = useState<Record<string, FAQItem[]>>({});
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const query = `*[_type == "lims-faq"]{ question, answer, sectionTitle }`;
        const result: FAQItem[] = await client.fetch(query);

        const grouped = result.reduce((acc, faq) => {
          const group = faq.sectionTitle || 'Others';
          if (!acc[group]) acc[group] = [];
          acc[group].push({ ...faq, open: false });
          return acc;
        }, {} as Record<string, FAQItem[]>);

        setFaqGroups(grouped);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
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

  const toggleFAQ = (section: string, index: number) => {
    const updated = faqGroups[section].map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false,
    }));
    setFaqGroups({ ...faqGroups, [section]: updated });
  };

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
            <li><Link href="/faq-product">FAQ</Link></li>
          </ul>
        </nav>
      </div>

      <div className='faq-list product-list'>
        <div className='container'>
          <h1 className='text-center'>LIMS FAQ</h1>
          {Object.entries(faqGroups).map(([sectionTitle, faqs], groupIndex) => (
            <div className="faqs-section" key={groupIndex}>
              <h5 className="text-left faq-header">{sectionTitle}</h5>
              <div className="faqs">
                {faqs.map((faq, index) => (
                  <div
                    className={`faq ${faq.open ? 'open' : ''}`}
                    key={index}
                    onClick={() => toggleFAQ(sectionTitle, index)}
                  >
                    <div className="faq-question">{faq.question}</div>
                    <div className="faq-answer">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Help/>
    </div>
  );
};

export default FAQLIMS;
