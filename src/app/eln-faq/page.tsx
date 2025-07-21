'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import client from '../../../lib/sanityClient';
import Help from '@/components/help';

/* ————————————————————
   Types
   ———————————————————— */

interface FAQFromSanity {
  _id: string;
  question: string;
  answer: any[];          // Portable Text blocks
  sectionTitle?: string;
  _createdAt: string;
}

interface FAQItem extends FAQFromSanity {
  open: boolean;          // UI state
}

interface FAQGroup {
  title: string;
  faqs: FAQItem[];
}

/* ————————————————————
   Portable‑Text custom components (optional)
   ———————————————————— */

const ptComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h2 className="text-xl font-semibold mb-2">{children}</h2>,
    h2: ({ children }) => <h3 className="text-lg font-semibold mb-1">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic my-2">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        {children}
      </a>
    ),
  },
};

/* ————————————————————
   Component
   ———————————————————— */

const FAQELN: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [faqGroups, setFaqGroups] = useState<FAQGroup[]>([]);

  /* Fetch & group FAQs ---------------------------------------------------- */
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const query = `*[_type == "eln-faq"]{
          _id,
          question,
          answer,
          sectionTitle,
          _createdAt
        }`;

        const result: FAQFromSanity[] = await client.fetch(query);

        /* Group by sectionTitle ------------------------------------------- */
        const sectionMap = new Map<string, { createdAt: string; faqs: FAQItem[] }>();

        result.forEach((faq) => {
          const section = faq.sectionTitle || 'Others';
          const faqWithState: FAQItem = { ...faq, open: false };

          if (!sectionMap.has(section)) {
            sectionMap.set(section, {
              createdAt: faq._createdAt,
              faqs: [faqWithState],
            });
          } else {
            const sectionData = sectionMap.get(section)!;
            sectionData.faqs.push(faqWithState);
            /* Keep earliest createdAt to sort sections chronologically */
            if (new Date(faq._createdAt) < new Date(sectionData.createdAt)) {
              sectionData.createdAt = faq._createdAt;
            }
          }
        });

        /* Sort sections & questions by createdAt -------------------------- */
        const groupedArray: FAQGroup[] = Array.from(sectionMap.entries())
          .sort(
            (a, b) =>
              new Date(a[1].createdAt).getTime() - new Date(b[1].createdAt).getTime()
          )
          .map(([title, data]) => ({
            title,
            faqs: data.faqs.sort(
              (a, b) =>
                new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime()
            ),
          }));

        setFaqGroups(groupedArray);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Error fetching FAQs:', err);
      }
    };

    fetchFAQs();
  }, []);

  /* Loader fade‑out ------------------------------------------------------- */
  useEffect(() => {
    if (!faqGroups.length) return; // wait until data arrives

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 400); // fade duration
    }, 300); // minimum spinner visibility
    return () => clearTimeout(timer);
  }, [faqGroups]);

  /* Toggle open/close ----------------------------------------------------- */
  const toggleFAQ = (sectionIdx: number, faqIdx: number) => {
    setFaqGroups((prev) =>
      prev.map((group, i) =>
        i !== sectionIdx
          ? group
          : {
              ...group,
              faqs: group.faqs.map((faq, j) => ({
                ...faq,
                open: j === faqIdx ? !faq.open : false,
              })),
            }
      )
    );
  };

  /* Render ---------------------------------------------------------------- */
  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
        <SyncLoader color="#1163ea" size={20} />
      </div>
    );
  }

  return (
    <div className="product">
      {/* ── Breadcrumbs ─────────────────────────────────────────── */}
      <div className="inner-page">
        <nav className="navbar">
          <ul className="list-unstyled row mb-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/faq-product">FAQ</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* ── FAQ list ─────────────────────────────────────────────── */}
      <div className="faq-list">
        <div className="container">
          <h1 className="text-center">ELN&nbsp;FAQ</h1>

          {faqGroups.map((group, gIdx) => (
            <section className="faqs-section" key={group.title}>
              <h5 className="faq-header">{group.title}</h5>

              <div className="faqs">
                {group.faqs.map((faq, fIdx) => (
                  <article
                    key={faq._id}
                    className={`faq ${faq.open ? 'open' : ''}`}
                    onClick={() => toggleFAQ(gIdx, fIdx)}
                  >
                    <header className="faq-question">{faq.question}</header>

                    {faq.open && (
                      <div className="faq-answer">
                        <PortableText value={faq.answer} components={ptComponents} />
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Help />
    </div>
  );
};

export default FAQELN;
