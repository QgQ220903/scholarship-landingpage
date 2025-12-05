// src/components/AlumniCarousel.jsx
import React, { useState, useEffect } from 'react';
import carouselContent from '../content/alumni-carousel.json';

function AlumniCarousel() {
  const { section, header, carousel, alumni, styles } = carouselContent;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === alumni.length - 1 ? 0 : prev + 1));
    }, carousel.autoSlideInterval);
    return () => clearInterval(interval);
  }, [alumni.length, carousel.autoSlideInterval]);

  return (
    <section id={section.id} className={section.className}>
      <div className={styles.containerClass}>
        {/* Header */}
        <div className={styles.header.containerClass}>
          <h2 className={styles.header.titleClass}>
            {header.title}
          </h2>
          <p className={styles.header.descriptionClass}>
            {header.description}
          </p>
          <div className={header.divider.className}></div>
        </div>

        {/* Carousel */}
        <div className={styles.carouselContainer.className}>
          {/* Slides Container */}
          <div className={styles.slidesContainer.className}>
            {alumni.map((person, index) => (
              <div
                key={index}
                className={styles.slide.containerClass}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transitionDuration: `${carousel.transitionDuration}ms`
                }}
              >
                {/* Alumni Card */}
                <div className={styles.slide.cardClass}>
                  {/* Image Section */}
                  <div className={styles.slide.image.containerClass}>
                    <div
                      className={styles.slide.image.imageClass}
                      style={{ backgroundImage: `url(${person.image})` }}
                    ></div>
                    <div className={styles.slide.image.overlayClass}></div>
                    <div className={styles.slide.image.awardBadge.className}>
                      <i className={`${styles.slide.image.awardBadge.icon} ${styles.slide.image.awardBadge.iconClass}`}></i>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={styles.slide.content.className}>
                    <h3 className={styles.slide.content.nameClass}>
                      {person.name}
                    </h3>

                    {/* Major */}
                    <div className={styles.slide.content.major.containerClass}>
                      <i className={person.icons?.major || styles.slide.content.major.iconClass}></i>
                      <span className="font-medium">{person.major}</span>
                    </div>

                    {/* Company */}
                    <div className={styles.slide.content.company.containerClass}>
                      <i className={person.icons?.company || styles.slide.content.company.iconClass}></i>
                      <span>{person.company}</span>
                    </div>

                    {/* Description */}
                    <p className={styles.slide.content.descriptionClass}>
                      {person.description}
                    </p>

                    {/* Quote */}
                    <div className={styles.slide.content.quote.containerClass}>
                      <p className={styles.slide.content.quote.textClass}>
                        {person.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className={styles.navigation.prevButton.className}
            onClick={() => setCurrentIndex(prev => prev === 0 ? alumni.length - 1 : prev - 1)}
            aria-label="Previous slide"
          >
            <i className={styles.navigation.prevButton.icon}></i>
          </button>
          <button
            className={styles.navigation.nextButton.className}
            onClick={() => setCurrentIndex(prev => prev === alumni.length - 1 ? 0 : prev + 1)}
            aria-label="Next slide"
          >
            <i className={styles.navigation.nextButton.icon}></i>
          </button>

          {/* Dots Indicator */}
          <div className={styles.dots.containerClass}>
            {alumni.map((_, index) => (
              <button
                key={index}
                className={index === currentIndex ? styles.dots.dot.activeClass : styles.dots.dot.inactiveClass}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlumniCarousel;