// src/components/Scholarships.jsx
import React from 'react';
import scholarshipsContent from '../../content/scholarships.json';

function Scholarships() {
  const { section, header, scholarships, styles } = scholarshipsContent;

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

        {/* Scholarships Grid */}
        <div className={styles.gridClass}>
          {scholarships.map((scholarship, index) => (
            <div key={index} className={styles.card.containerClass}>
              {/* Icon Section */}
              <div className={styles.card.iconSectionClass}>
                <i className={`${scholarship.icon} ${styles.card.iconClass}`}></i>
              </div>

              {/* Content Section */}
              <div className={styles.card.contentClass}>
                <h3 className={styles.card.titleClass}>
                  {scholarship.title}
                </h3>
                <p className={styles.card.descriptionClass}>
                  {scholarship.description}
                </p>
                <a
                  href={scholarship.button.link}
                  className={scholarship.button.className}
                >
                  {scholarship.button.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Scholarships;