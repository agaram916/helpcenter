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
  _createdAt: string;
  open: boolean;
}

interface FAQGroup {
  title: string;
  faqs: FAQItem[];
}

const FAQELN = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [faqGroups, setFaqGroups] = useState<FAQGroup[]>([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const query = `*[_type == "eln-faq"] {
          question,
          answer,
          sectionTitle,
          _createdAt
        }`;

        const result: (FAQItem & { _createdAt: string })[] = await client.fetch(query);

        const sectionMap = new Map<
          string,
          { createdAt: string; faqs: FAQItem[] }
        >();

        result.forEach((faq) => {
          const section = faq.sectionTitle || 'Others';

          const faqWithOpen: FAQItem = { ...faq, open: false };

          if (!sectionMap.has(section)) {
            sectionMap.set(section, {
              createdAt: faq._createdAt,
              faqs: [faqWithOpen],
            });
          } else {
            const sectionData = sectionMap.get(section)!;
            sectionData.faqs.push(faqWithOpen);

            if (faq._createdAt < sectionData.createdAt) {
              sectionData.createdAt = faq._createdAt;
            }
          }
        });

        // Convert to array and sort by section createdAt
        const groupedArray = Array.from(sectionMap.entries())
          .sort((a, b) =>
            new Date(a[1].createdAt).getTime() -
            new Date(b[1].createdAt).getTime()
          )
          .map(([title, data]) => ({
            title,
            faqs: data.faqs.sort((a, b) =>
              new Date(a._createdAt).getTime() -
              new Date(b._createdAt).getTime()
            ),
          }));

        setFaqGroups(groupedArray);
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

  const toggleFAQ = (sectionIndex: number, faqIndex: number) => {
    const updated = faqGroups.map((group, i) => {
      if (i !== sectionIndex) return group;
      return {
        ...group,
        faqs: group.faqs.map((faq, j) => ({
          ...faq,
          open: j === faqIndex ? !faq.open : false,
        })),
      };
    });
    setFaqGroups(updated);
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
          <h1 className='text-center'>ELN FAQ</h1>
          {faqGroups.map((group, groupIndex) => (
            <div className="faqs-section" key={groupIndex}>
              <h5 className="text-left faq-header">{group.title}</h5>
              <div className="faqs">
                {group.faqs.map((faq, index) => (
                  <div
                    className={`faq ${faq.open ? 'open' : ''}`}
                    key={index}
                    onClick={() => toggleFAQ(groupIndex, index)}
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
      <Help />
    </div>
  );
};

export default FAQELN;
