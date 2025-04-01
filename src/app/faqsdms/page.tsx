'use client';
import Help from '@/components/help';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import React, { useState ,useEffect } from "react";
export default function Faqsdms() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);



 
    const [faqs, setFaqs] = useState([
        {
          question: "What are the recommended privileges to LogiLAB SDMS application path?",
          answer:
            "Full administrator privileges required to install the SDMS application, the reason is system requires the read and write permission for the SDMS services and database creation.",
          open: false
        },
        {
          question: " What SQL Authentication mode is required for the SDMS database creation? ",
          answer: "“SQL Server Authentication” mode is required.",
          open: false
        },
        {
          question:
            "Do we need to create new database for every client?",
          answer: "No need to create new DB for every client, only we need to create new database for server",
          open: false
        }
      ]);
      const [listFaqs, setListFaqs] = useState([
        {
          question: "Is new database required for reinstallation of SDMS?",
          answer:
            "No, we can use existing database available in the server.",
          open: false
        },
        {
          question: " Is Interfacer service required to install in every client?",
          answer: "Yes, If we are using Interfacer for instrument integration.",
          open: false
        },
        {
          question:
            "Is IIS need to be enabled in every client?",
          answer: "No, IIS is required only in the server to create FTP sites.",
          open: false
        }
        ,
        {
          question: " Is FTP service has to be installed on every client?",
          answer: "No, The FTP service has to be installed on the server.",
          open: false
        },
        {
          question:
            "Is Tomcat and SQL server need to be installed on every client ?",
          answer: "No, The Tomcat and SQL server has to be installed on only the server.",
        },
        {
          question:
            "Do we need to turn off the windows firewall in the server?",
          answer: "No, not required. Rather we can allow the incoming and outgoing communication port number in the windows firewall.",
        },
        {
          question:
            "Does the server requires a static IP or DHCP IP?",
          answer: "The SDMS server always recommended setting with a static IP address.",
        },
        {
          question:
            " Is any specific users authentication required in FTP server?",
          answer: "Yes, The SDMS always recommended checking FTP authentication after creating FTP site..",
        }
      ]);

      const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

      const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
    
            return faq;
          })
        );
      };

      const toggleListFAQ = index => {
        setListFaqs(
          listFaqs.map((listFaq, i) => {
            if (i === index) {
              listFaq.open = !listFaq.open;
            } else {
              listFaq.open = false;
            }
    
            return listFaq;
          })
        );
      };

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


    return (<div>
                        <div className='product'>
         
            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row mb-0">
                        <li><Link href="./../">Home</Link></li>
                        <li><Link href="../faq-product">FAQ</Link></li>
                        <li><a href="">FAQ SDMS</a></li>
                    </ul>
                </nav>
             </div>
             <div className='faq-list product-list'>
                <div className='container'>
                    <h1>SDMS FAQ</h1>
                    <div className='faqs-section'>
                       <h5 className='text-left faq-header'>Most View FAQs</h5>
                        <div className="faqs">
                            {faqs.map((faq, index) => (
                            <div
                                className={"faq " + (faq.open ? "open" : "")}
                                key={index}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">{faq.question}</div>
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                                
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className='faqs-section'>
                       <h5 className='text-left faq-header'>List of FAQs</h5>
                        <div className="faqs">
                            {listFaqs.map((listFaqs, index) => (
                            <div
                                className={"listfaq " + (listFaqs.open ? "open" : "")}
                                key={index}
                                onClick={() => toggleListFAQ(index)}
                            >
                                <div className="faq-question">{listFaqs.question}</div>
                                <div className="faq-answer">
                                    {listFaqs.answer}
                                </div>
                                
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
             </div>
           <Help/>
        </div>

    </div>);
}