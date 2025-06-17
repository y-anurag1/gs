import React, { useState, useRef, useEffect } from 'react';
import { Minus, Plus } from 'lucide-react'; // Icons for accordion toggle

export const FAQSection = () => {
  const faqData = [
    {
      question: 'Do you offer customized travel packages?',
      answer: 'Yes, we specialize in creating tailor-made travel itineraries based on your interests, budget, and schedule. Just tell us your preferences and we’ll handle the rest.',
    },
    {
      question: 'Do you assist with visa applications?',
      answer: 'Absolutely. Our travel consultants can guide you through the visa process and provide necessary documentation and support to simplify your application.',
    },
    {
      question: 'Can I book just flights or hotels through you?',
      answer: 'Yes, we offer standalone services including flight booking, hotel reservations, travel insurance, and airport transfers. You can customize based on what you need.',
    },
    {
      question: 'What if my travel plans change or get canceled?',
      answer: 'We understand that plans can change. We offer flexible cancellation and rescheduling options depending on the airline, hotel, and service provider policies.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including MasterCard, Visa, RuPay cards, UPI, bank transfers, and checks.',
    },
  ];

  // State to manage which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Refs for each answer content div to measure their scrollHeight
  const contentRefs = useRef([]);
  // Initialize contentRefs array with nulls for each FAQ item
  if (contentRefs.current.length !== faqData.length) {
    contentRefs.current = Array(faqData.length).fill(null);
  }

  // Effect to apply dynamic max-height for smooth transitions
  useEffect(() => {
    faqData.forEach((_, index) => {
      const content = contentRefs.current[index];
      if (content) {
        if (openIndex === index) {
          // When opening, set max-height to scrollHeight
          content.style.maxHeight = `${content.scrollHeight}px`;
          content.style.opacity = 1;
        } else {
          // When closing, set max-height to 0 and opacity to 0
          content.style.maxHeight = '0px';
          content.style.opacity = 0;
        }
      }
    });
  }, [openIndex, faqData]); // Re-run when openIndex or faqData changes

  // Scroll animation state and ref for the whole section
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Function to handle scrolling to the Contact Us section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    // Assuming the navbar has a 'nav' tag and is sticky
    const navbar = document.querySelector('nav'); 

    if (contactSection && navbar) {
      const navbarHeight = navbar.offsetHeight; // Get the navbar's current height
      const offsetTop = contactSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.warn("Could not find 'contact-section' or the navbar for scrolling.");
    }
  };

  return (
    <section
      id="faq-section" // ID for navbar scrolling
      ref={sectionRef}
      className={`bg-white py-16 md:py-24 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: FAQ Accordion - UI updated here */}
          <div className="lg:w-2/3 space-y-3">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <button
                  className="w-full flex items-center p-4 text-lg font-semibold text-gray-800 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Icon on the left, with margin and flex-shrink-0 */}
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  )}
                  {faq.question}
                </button>
                {/* Answer content with transition properties */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)} // Attach ref to this div
                  className="px-4 pb-4 pt-0 text-gray-700 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight || 0}px` : '0px',
                    opacity: openIndex === index ? 1 : 0
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Contact Us Sidebar */}
          <div className="lg:w-1/3 bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <svg className="w-16 h-16 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"></path>
            </svg>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Can't find the answer you're looking for?
            </h3>
            <p className="text-gray-700 mb-6">
              Our travel experts are here to help. Whether you have questions about destinations, bookings, or anything else, we’re just a message away. Let’s plan your next journey together.
            </p>
            {/* THIS BUTTON ALREADY HAS THE onClick FOR SCROLLING */}
            <button
              onClick={handleScrollToContact} // This line ensures the scroll happens
              className="px-8 py-3 rounded-lg bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};