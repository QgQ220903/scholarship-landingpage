// src/components/Header.jsx
import React, { useState, useEffect } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cách 1: Fetch từ public folder
    fetch('/content/header.json')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to load header content:', error);
        // Fallback: dùng content mặc định
        setContent(getDefaultContent());
        setLoading(false);
      });
  }, []);

  // Content mặc định nếu không load được
  const getDefaultContent = () => ({
    logo: {
      icon: "fas fa-graduation-cap",
      iconClass: "text-2xl text-[#d4af37]",
      text: "Học bổng 30 năm",
      textClass: "font-bold text-xl text-[#1a365d]",
      link: "/"
    },
    menuItems: [
      { label: "Lịch sử", link: "#lich-su" },
      { label: "Học bổng", link: "#hoc-bong" },
      { label: "Gương mặt tiêu biểu", link: "#guong-mat-tieu-bieu" },
      { label: "Sự kiện", link: "#su-kien" },
      { label: "Đăng ký", link: "#dang-ky" },
      { label: "FAQ", link: "#faq" }
    ]
  });

  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="animate-pulse">Loading header...</div>
        </div>
      </header>
    );
  }

  if (!content) return null;

  return (
    <header className={content.styles?.headerClass || "fixed top-0 left-0 right-0 bg-white shadow-sm z-50"}>
      <div className={content.styles?.containerClass || "max-w-6xl mx-auto px-4 py-5"}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href={content.logo.link || "#"}
            className="flex items-center space-x-2"
          >
            <i className={`${content.logo.icon} ${content.logo.iconClass}`}></i>
            <span className={content.logo.textClass}>
              {content.logo.text}
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1a365d] text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`md:flex md:space-x-8 ${menuOpen ? 'block' : 'hidden'} ${content.styles?.mobileMenuClass || "absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-lg md:shadow-none p-6 md:p-0"}`}
          >
            {content.menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link || `#${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`block md:inline-block ${content.styles?.navClass || "text-[#1a365d] font-medium hover:text-[#d4af37] transition-colors duration-300 py-2 md:py-0"}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.icon && <i className={`${item.icon} mr-2`}></i>}
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;