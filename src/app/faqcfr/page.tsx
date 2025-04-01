'use client';
import Help from '@/components/help';
import Link from 'next/link';
import React, { useState ,useEffect } from "react";
import { SyncLoader } from 'react-spinners';
export default function Faqcfr() {
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
      question: " Can Requester's add applications?",
      answer:
        "No, only Administrators can add applications and delegate work accordingly.",
      open: false
    },
    {
      question: "Can a user be able to exit from the CFRGateway?",
      answer: "Unless and Until the Privileges are provided for the user, they cannot be able to exit from the CFRGateway.",
      open: false
    },
    {
      question:
        "What keys will be working on the Keyboard?",
      answer: "Keys other than the function and control keys will work while using the CFRGateway.",
      open: false
    }
    ,
    {
      question: " Is it possible to log off without closing the application on run?",
      answer: "Before trying to log off, the user must exit from all the instances of the applications.",
      open: false
    },
    {
      question:
        "Whether access privileges are required on exporting the log to a particular folder?",
      answer: "Yes, access privileges are required on exporting the log to a particular folder.",
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
            <li><a href="">CRF Gateway FAQs</a></li>
          </ul>
        </nav>
      </div>
      <div className='faq-list product-list'>
        <div className='container'>
          <h1>CRF Gateway</h1>
          {/* <div className='faqs-section'>
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
                    </div> */}
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