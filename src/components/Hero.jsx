// src/components/Hero.jsx
import React from 'react';
import heroContent from '../content/hero.json'

export default function HeroModern() {
  return (
    <section className={heroContent.styles.sectionClass}>
      {/* Abstract Background Elements */}
      {heroContent.styles.gradientElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} ${element.size} bg-gradient-to-bl ${element.gradient} ${element.shape}`}
        ></div>
      ))}

      <div className={heroContent.styles.containerClass}>
        <div className={heroContent.styles.gridClass}>
          {/* Text Content */}
          <div className={heroContent.styles.textSectionClass}>
            {/* Minimalist Tagline */}
            <p className={heroContent.content.tagline.class}>
              {heroContent.content.tagline.text}
            </p>

            {/* Bold Headline with Impact */}
            <div className={heroContent.content.headline.containerClass}>
              {heroContent.content.headline.lines.map((line, index) => (
                <span key={index} className={line.class}>
                  {line.text}
                </span>
              ))}
            </div>

            {/* Descriptive Paragraph */}
            <p className={heroContent.content.description.class}>
              {heroContent.content.description.text}
            </p>

            {/* Strong Single CTA */}
            <div>
              <a
                href={heroContent.content.cta.button.link}
                className={heroContent.content.cta.button.class}
              >
                {heroContent.content.cta.button.text}
                <i className={`${heroContent.content.cta.button.icon} ${heroContent.content.cta.button.iconClass}`}></i>
              </a>
              <p className={heroContent.content.cta.note.class}>
                {heroContent.content.cta.note.text}
              </p>
            </div>
          </div>

          {/* Visual Content */}
          <div className={heroContent.styles.imageSectionClass}>
            <div className="relative w-full max-w-lg">
              {/* Main Image with Frame */}
              <div className={heroContent.content.image.containerClass}>
                <img
                  src={heroContent.content.image.src}
                  alt={heroContent.content.image.alt}
                  className={heroContent.content.image.imageClass}
                />
                {/* Gradient Overlay */}
                <div className={heroContent.content.image.overlayClass}></div>
              </div>

              {/* Floating Stats Card */}
              <div className={`${heroContent.content.statsCard.position} ${heroContent.content.statsCard.containerClass}`}>
                <div className={heroContent.content.statsCard.numberClass}>
                  {heroContent.content.statsCard.number}
                </div>
                <p className={heroContent.content.statsCard.textClass}>
                  {heroContent.content.statsCard.description}
                </p>
                <div className={heroContent.content.statsCard.accentLineClass}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}