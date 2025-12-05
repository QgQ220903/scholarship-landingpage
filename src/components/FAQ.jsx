// src/components/FAQ.jsx
import React, { useState } from 'react';
import faqContent from '../../content/faq.json';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { section, header, faqs, styles } = faqContent;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id={section.id} className={section.className}>
      <div className={styles.containerClass}>
        {/* Header */}
        <div className={styles.headerClass}>
          <h2 className={styles.titleClass}>
            {header.title}
          </h2>
          <p className={styles.descriptionClass}>
            {header.description}
          </p>
          <div className={header.divider.className}></div>
        </div>

        {/* FAQ List */}
        <div className={styles.faqContainerClass}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem.containerClass}>
              <button
                className={styles.faqItem.buttonClass}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className={styles.faqItem.questionClass}>
                  {faq.question}
                </span>
                <i className={`${styles.faqItem.icon.className} ${activeIndex === index ? styles.faqItem.icon.rotateClass : ''
                  }`}></i>
              </button>
              <div className={`${styles.faqItem.answerContainerClass} ${activeIndex === index
                ? styles.faqItem.answerExpandedClass
                : styles.faqItem.answerCollapsedClass
                }`}>
                <p className={styles.faqItem.answerTextClass}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;