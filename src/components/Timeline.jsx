// src/components/Timeline.jsx
import React from 'react';
import timelineContent from '../content/timeline.json';

function Timeline() {
  const { section, header, timelineItems, styles } = timelineContent;

  return (
    <section id={section.id} className={section.className}>
      <div className={styles.containerClass}>
        <div className="text-center mb-12 md:mb-16">
          <h2 className={header.styles.titleClass}>
            {header.title}
          </h2>
          <p className={header.styles.descriptionClass}>
            {header.description}
          </p>
          <div className={header.styles.dividerClass}></div>
        </div>

        <div className={styles.timelineContainerClass}>
          {/* Timeline line */}
          <div className={styles.timelineLineClass}></div>

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.item.containerClass} md:flex ${index % 2 === 0
                ? 'md:justify-start md:pr-1/2 md:pl-8'
                : 'md:justify-end md:pl-1/2 md:pr-8'
                }`}
            >
              {/* Timeline item content */}
              <div className={styles.item.contentClass}>
                <div className={styles.item.yearClass}>
                  {item.year}
                </div>
                <h3 className={styles.item.titleClass}>
                  {item.title}
                </h3>
                <p className={styles.item.descriptionClass}>
                  {item.description}
                </p>
              </div>

              {/* Timeline dot */}
              <div className={styles.item.dotClass}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;