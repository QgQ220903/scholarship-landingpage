// src/components/Footer.jsx
import React from 'react';
import footerContent from '../../content/footer.json';

function Footer() {
  const {
    footer,
    logo,
    description,
    socialLinks,
    quickLinks,
    contactInfo,
    copyright,
    legalLinks,
    styles
  } = footerContent;

  return (
    <footer className={footer.className}>
      <div className={styles.containerClass}>
        <div className={styles.gridClass}>

          {/* Column 1: Logo & Description */}
          <div className={styles.columnClass}>
            <div className="flex items-center space-x-2 mb-6">
              <i className={`${logo.icon} ${logo.iconClass}`}></i>
              <span className={logo.textClass}>
                {logo.text}
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              {description}
            </p>
            <div className={styles.socialContainerClass}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={social.className}
                  aria-label={social.platform}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.columnClass}>
            <h3 className={quickLinks.titleClass}>
              {quickLinks.title}
            </h3>
            <ul className={styles.quickLinksListClass}>
              {quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className={link.className}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className={styles.columnClass}>
            <h3 className={contactInfo.titleClass}>
              {contactInfo.title}
            </h3>
            <div className={styles.contactContainerClass}>
              {contactInfo.items.map((item, index) => (
                <div key={index} className={styles.contactItemClass}>
                  <i className={`${item.icon} ${item.iconClass}`}></i>
                  <div>
                    {item.lines.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className={lineIndex > 0 ? "text-gray-300" : ""}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className={styles.copyrightSectionClass}>
          <p className={copyright.className}>
            &copy; {copyright.year} {copyright.text}
          </p>
          <div className={styles.legalLinksContainerClass}>
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.url}
                  className={link.className}
                >
                  {link.text}
                </a>
                {index < legalLinks.length - 1 && " | "}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;