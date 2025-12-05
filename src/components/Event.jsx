// src/components/Event.jsx
import React from 'react';
import eventContent from '../content/event.json';

function Event() {
  const { section, header, content, highlightCard, styles } = eventContent;

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

        {/* Content Grid */}
        <div className={styles.gridClass}>
          {/* Left Column - Event Details */}
          <div>
            <h2 className={styles.contentTitleClass}>
              {content.title}
            </h2>
            <p className={styles.contentDescriptionClass}>
              {content.description}
            </p>

            {/* Event Details List */}
            <div className={styles.detailsContainerClass}>
              {content.eventDetails.map((detail, index) => (
                <div key={index} className={styles.detailItem.containerClass}>
                  <div className={styles.detailItem.iconContainerClass}>
                    <i className={`${detail.icon} ${styles.detailItem.iconClass}`}></i>
                  </div>
                  <div className={styles.detailItem.contentClass}>
                    <h4 className={styles.detailItem.titleClass}>
                      {detail.title}
                    </h4>
                    <p className={styles.detailItem.detailsClass}>
                      {detail.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={content.cta.link}
              className={content.cta.className}
            >
              {content.cta.text}
            </a>
          </div>

          {/* Right Column - Highlight Card */}
          <div className={highlightCard.className}>
            <div className="mb-6">
              <i className={`${highlightCard.icon} ${highlightCard.iconSize} ${highlightCard.iconColor} mb-4`}></i>
            </div>
            <h3 className={highlightCard.titleClass}>
              {highlightCard.title}
            </h3>
            <p className={highlightCard.descriptionClass}>
              {highlightCard.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;