import React, { useState, useRef, useEffect } from 'react';
import { Smile, FileText, CreditCard, X, Mail, Settings, Users, Video, Headset, Book, ExternalLink } from 'lucide-react';

export const FAQSection = () => {
  const initialVisibleCount = 4; // Show only 4 initially
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing initial count and all

  const faqData = [
    {
      icon: (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
          <Smile className="w-5 h-5 text-gray-700" />
        </div>
      ),
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days. If you want, we\'ll provide you with a free 30-minute onboarding call to get you up and running.',
    },
    {
      icon: (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
          <FileText className="w-5 h-5 text-gray-700" />
        </div>
      ),
      question: 'Can I change my plan later?',
      answer: 'Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.',
    },
    {
      icon: (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
          <CreditCard className="w-5 h-5 text-gray-700" />
        </div>
      ),
      question: 'What is your cancellation policy?',
      answer: 'We understand that things change. You can cancel your plan at any time and we\'ll refund you the difference already paid.',
    },
    {
      icon: (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
          <Settings className="w-5 h-5 text-gray-700" />
        </div>
      ),
      question: 'Can other info be added to an invoice?',
      answer: 'At the moment, the only way to add additional information to invoices is to add the information to the workspace\'s name manually.',
    },
    {
      icon: (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
          <Users className="w-5 h-5 text-gray-700" />
        </div>
      ),
      question: 'How does billing work?',
      answer: 'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.',
    },
    {
      icon: (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
          <Mail className="w-5 h-5 text-gray-700" />
        </div>
      ),
      question: 'How do I change my account email?',
      answer: 'You can change the email address associated with your account by going to untitledui.com/account from a laptop or desktop.',
    },
    {
      icon: (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
          <Headset className="w-5 h-5 text-gray-700" />
        </div>
      ),
      question: 'How does support work?',
      answer: 'If you\'re having trouble with Untitled UI, we\'re here to try and help via hello@untitledui.com. We\'re a small team, but will get back to soon.',
    },
    {
      icon: (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
          <Video className="w-5 h-5 text-gray-700" />
        </div>
      ),
      question: 'Do you provide tutorials?',
      answer: 'Not yet, but we\'re working on it! In the meantime, we\'ve done our best to make it intuitive and we\'re building our documentation page.',
    },
    {
      icon: (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
          <X className="w-5 h-5 text-gray-700" />
        </div>
      ),
      question: 'What happens if I exceed my plan limits?',
      answer: 'If you exceed your plan limits, we will notify you and offer options to upgrade or adjust your usage. Services will not be immediately interrupted.',
    },
    {
      icon: (
        <div className="p-2 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0">
          <Book className="w-5 h-5 text-gray-700" />
        </div>
      ),
      question: 'Where can I find documentation?',
      answer: 'Our full documentation is available online at our knowledge base, accessible from the footer of this page. It covers all features and troubleshooting.',
    },
  ];

  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const faqGridRef = useRef(null); // Ref for the grid container to measure its height

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

  const itemRefs = useRef([]);
  useEffect(() => {
    itemRefs.current = faqData.map((_, i) => itemRefs.current[i] || null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe only the initially visible items or those loaded by "Load More"
    itemRefs.current.slice(0, visibleCount).forEach((item) => {
      if (item && !item.classList.contains('animate-fade-in-up')) {
        observer.observe(item);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleCount, faqData]);

  const handleLoadMore = () => {
    setShowAll(true); // When "Load more" is clicked, show all
    setVisibleCount(faqData.length); // Update visibleCount to show all
  };

  // Calculate the container height for the "peek" effect
  const [containerHeight, setContainerHeight] = useState('auto'); // Default to auto
  const cardHeightRef = useRef(0); // To store the height of a single card

  useEffect(() => {
    if (!faqGridRef.current || showAll) { // If showing all, let height be auto
      setContainerHeight('auto');
      return;
    }

    // Measure the height of the first card if it exists
    if (itemRefs.current[0]) {
      cardHeightRef.current = itemRefs.current[0].offsetHeight;
    }

    // Calculate height to show 2 rows (4 cards) + a peek of the next row
    // Assuming gap-y-6 (24px)
    // 2 cards high * cardHeight + 1 gap (for the 2 rows) + a bit extra for the peek
    if (cardHeightRef.current > 0) {
      const calculatedHeight = (2 * cardHeightRef.current) + 24 + 40; // 2 rows + 1 gap + 40px peek
      setContainerHeight(`${calculatedHeight}px`);
    }

  }, [visibleCount, showAll, faqData]); // Recalculate if these change


  return (
    <section
      id="faq-section"
      ref={sectionRef}
      className={`bg-white py-16 md:py-24 px-4 md:px-8 lg:px-12 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <style>
        {`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        /* Custom transition for the grid container height */
        .faq-grid-container-transition {
          transition: height 0.7s ease-in-out;
        }
        `}
      </style>
      <div className="container mx-auto max-w-full">
        {/* Main Heading and Subtitle - LEFT ALIGNED, with Documentation button */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-left">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl text-left">
              Quick answers to questions you may have. Can't find what you're looking for? Check out our full{' '}
              <a href="#" className="text-blue-600 hover:underline">documentation</a>.
            </p>
          </div>
          {/* Documentation Button */}
          <div className="mt-6 sm:mt-0 flex-shrink-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Documentation <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* FAQ Cards Grid - Enclosed in a div to control height for peek effect */}
        {/* Conditional height and overflow for the peek/show all effect */}
        <div
          ref={faqGridRef}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 faq-grid-container-transition"
          style={{ height: containerHeight, overflow: showAll ? 'visible' : 'hidden' }}
        >
          {faqData.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transform translate-y-4"
            >
              <div className="p-6">
                <div className="flex items-start">
                  {faq.icon}
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-snug">{faq.question}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* Only show button if there are more items to load and not all are already shown */}
        {!showAll && visibleCount < faqData.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-lg bg-white text-gray-800 font-medium shadow-md border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};